"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import { mockUsers } from "../../lib/auth/mockUsers";

interface LoginPromptProps {
  title?: string;
  message?: string;
  className?: string;
}

export function LoginPrompt({
  title = "Sign In Required",
  message = "Please sign in to access this feature.",
  className = "",
}: LoginPromptProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [showMockUsers, setShowMockUsers] = useState(false);

  const handleMockSignIn = async (userId: string) => {
    setIsLoading(userId);
    try {
      await signIn("mock", {
        userId,
        redirect: false,
      });
    } catch (error) {
      console.error("Failed to sign in:", error);
    } finally {
      setIsLoading(null);
    }
  };

  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className={`p-8 text-center ${className}`}>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <svg
          className="h-8 w-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>

      <h3 className="mb-2 text-lg font-medium text-gray-100">{title}</h3>
      <p className="mb-6 text-gray-400">{message}</p>

      {isDevelopment ? (
        <div className="space-y-4">
          {!showMockUsers ? (
            <button
              onClick={() => setShowMockUsers(true)}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Choose Mock User (Development)
            </button>
          ) : (
            <div className="mx-auto max-w-md">
              <p className="mb-3 text-sm text-yellow-400">
                Development Mode - Choose a test user:
              </p>
              <div className="space-y-2">
                {mockUsers.map((user) => {
                  const isLoadingUser = isLoading === user.id;

                  return (
                    <button
                      key={user.id}
                      onClick={() => handleMockSignIn(user.id)}
                      disabled={isLoadingUser}
                      className={`flex w-full items-center gap-3 rounded-lg border border-gray-600 bg-gray-800 p-3 text-left transition-colors hover:bg-gray-700 ${
                        isLoadingUser ? "opacity-50" : ""
                      }`}
                    >
                      <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gray-600">
                        {user.image ? (
                          <Image
                            src={user.image}
                            alt={user.name}
                            width={32}
                            height={32}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs font-medium text-white">
                            {user.name
                              .split(" ")
                              .map((n) => n.charAt(0))
                              .join("")
                              .toUpperCase()
                              .slice(0, 2)}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-medium text-white">
                            {user.name}
                          </p>
                          {isLoadingUser && (
                            <div className="h-3 w-3 animate-spin rounded-full border border-white border-t-transparent"></div>
                          )}
                        </div>
                        <p className="truncate text-xs text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setShowMockUsers(false)}
                className="mt-3 text-sm text-gray-400 hover:text-gray-300"
              >
                ← Back
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Authentication providers will be available here in production.
          </p>
          <button
            disabled
            className="cursor-not-allowed rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-gray-400"
          >
            Sign In (Coming Soon)
          </button>
        </div>
      )}
    </div>
  );
}
