"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { Github, Loader2 } from "lucide-react";
import { cn } from "../lib/cn";
import { useCreationPermissions } from "../hooks/useOwnership";
import { UserProfile } from "./auth";

export function Navigation() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { canCreate } = useCreationPermissions();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const isActive = (path: string) => {
    if (path === "/workshops") {
      return pathname === "/workshops" || pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleGitHubSignIn = async () => {
    setIsSigningIn(true);
    try {
      await signIn("github", {
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
            {/* User authentication section */}
            {session?.user ? (
              <UserProfile />
            ) : (
              <button
                onClick={handleGitHubSignIn}
                disabled={isSigningIn}
                className="flex items-center gap-2 rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
              >
                {isSigningIn ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Github className="h-4 w-4" />
                    Sign in with GitHub
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
