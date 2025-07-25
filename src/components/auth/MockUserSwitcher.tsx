"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import { mockUsers } from "../../lib/auth/mockUsers";

interface MockUserSwitcherProps {
  className?: string;
}

export function MockUserSwitcher({ className = "" }: MockUserSwitcherProps) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const handleUserSelect = async (userId: string) => {
    setIsLoading(userId);
    setIsOpen(false);

    try {
      await signIn("mock", {
        userId,
        redirect: false,
      });
    } catch (error) {
      console.error("Failed to switch user:", error);
    } finally {
      setIsLoading(null);
    }
  };

  const currentUser = session?.user;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-yellow-500 bg-yellow-500/10 px-3 py-2 text-yellow-400 transition-colors hover:bg-yellow-500/20"
        title="Development: Switch User"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <span className="text-sm font-medium">Switch User</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 z-50 mt-1 w-72 rounded-lg border border-gray-600 bg-gray-800 py-1 shadow-xl">
          <div className="border-b border-gray-600 px-3 py-2">
            <p className="text-xs font-medium text-yellow-400">
              Development Mode
            </p>
            <p className="text-xs text-gray-400">Switch between test users</p>
          </div>

          <div className="max-h-64 overflow-y-auto py-1">
            {mockUsers.map((user) => {
              const isCurrentUser = currentUser?.id === user.id;
              const isLoadingUser = isLoading === user.id;

              return (
                <button
                  key={user.id}
                  onClick={() => handleUserSelect(user.id)}
                  disabled={isCurrentUser || isLoadingUser}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-left transition-colors ${
                    isCurrentUser
                      ? "bg-blue-600/20 text-blue-300"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } ${isLoadingUser ? "opacity-50" : ""}`}
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
                      <p className="truncate text-sm font-medium">
                        {user.name}
                      </p>
                      {isCurrentUser && (
                        <span className="rounded bg-blue-600 px-1.5 py-0.5 text-xs text-white">
                          Current
                        </span>
                      )}
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

          <div className="border-t border-gray-600 px-3 py-2">
            <p className="text-xs text-gray-500">
              Current: {currentUser?.name ?? "Not signed in"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
