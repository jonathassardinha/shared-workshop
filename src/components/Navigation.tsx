"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { cn } from "../lib/cn";
import { useCreationPermissions } from "../hooks/useOwnership";
import { mockUsers } from "../lib/auth/mockUsers";
import { UserProfile, MockUserSwitcher } from "./auth";

export function Navigation() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { canCreate } = useCreationPermissions();
  const [showSignInOptions, setShowSignInOptions] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const isActive = (path: string) => {
    if (path === "/workshops") {
      return pathname === "/workshops" || pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleQuickSignIn = async () => {
    if (process.env.NODE_ENV === "development") {
      setShowSignInOptions(true);
    } else {
      // In production, this would open the sign-in modal or redirect
      alert("Authentication providers will be available in production");
    }
  };

  const handleMockSignIn = async (userId: string) => {
    setIsSigningIn(true);
    setShowSignInOptions(false);
    try {
      await signIn("mock", {
        userId,
        redirect: false,
      });
    } catch (error) {
      console.error("Failed to sign in:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  // Show loading state while session is loading
  if (status === "loading") {
    return (
      <nav className="border-b border-gray-700 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-white">
                Shared Workshop
              </div>
              <div className="h-4 w-32 animate-pulse rounded bg-gray-600"></div>
            </div>
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-600"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border-b border-gray-700 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/workshops" className="text-xl font-bold text-white">
              Shared Workshop
            </Link>

            <div className="flex h-16">
              <Link
                href="/workshops"
                className={cn(
                  "flex items-center border-b-2 px-1 text-sm font-medium transition-colors hover:text-white",
                  isActive("/workshops")
                    ? "border-blue-500 text-white"
                    : "border-transparent text-gray-300",
                )}
              >
                Workshops
              </Link>

              {canCreate && (
                <Link
                  href="/workshop/create"
                  className={cn(
                    "ml-6 flex items-center border-b-2 px-1 text-sm font-medium transition-colors hover:text-white",
                    isActive("/workshop/create")
                      ? "border-blue-500 text-white"
                      : "border-transparent text-gray-300",
                  )}
                >
                  Create Workshop
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Development user switcher - only in development */}
            {process.env.NODE_ENV === "development" && <MockUserSwitcher />}

            {/* User authentication section */}
            {session?.user ? (
              <UserProfile />
            ) : (
              <div className="relative">
                <button
                  onClick={handleQuickSignIn}
                  disabled={isSigningIn}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSigningIn ? "Signing in..." : "Sign In"}
                </button>

                {showSignInOptions &&
                  process.env.NODE_ENV === "development" && (
                    <div className="absolute top-full right-0 z-50 mt-1 w-64 rounded-lg border border-gray-600 bg-gray-800 py-1 shadow-xl">
                      <div className="border-b border-gray-600 px-3 py-2">
                        <p className="text-xs font-medium text-yellow-400">
                          Development Mode
                        </p>
                        <p className="text-xs text-gray-400">
                          Choose a test user
                        </p>
                      </div>
                      <div className="py-1">
                        {mockUsers.map((user) => (
                          <button
                            key={user.id}
                            onClick={() => handleMockSignIn(user.id)}
                            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs text-white">
                              {user.name
                                .split(" ")
                                .map((n) => n.charAt(0))
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <span className="truncate">{user.name}</span>
                          </button>
                        ))}
                      </div>
                      <div className="border-t border-gray-600 px-3 py-2">
                        <button
                          onClick={() => setShowSignInOptions(false)}
                          className="text-xs text-gray-400 hover:text-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
