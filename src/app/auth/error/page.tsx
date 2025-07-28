"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getOAuthErrorMessage } from "../../../lib/auth/config-utils";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") ?? "Default";

  const errorMessage = getOAuthErrorMessage(error);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-lg border border-red-500 bg-gray-800 p-6 text-center">
          <div className="mb-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>

          <h1 className="mb-2 text-xl font-semibold text-white">
            Authentication Error
          </h1>

          <p className="mb-6 text-sm text-gray-300">{errorMessage}</p>

          {process.env.NODE_ENV === "development" && (
            <div className="mb-4 rounded border border-yellow-500 bg-yellow-50 p-3 text-left">
              <p className="text-xs font-medium text-yellow-800">
                Development Info:
              </p>
              <p className="text-xs text-yellow-700">Error code: {error}</p>
            </div>
          )}

          <div className="space-y-3">
            <Link
              href="/api/auth/signin"
              className="block w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Try Again
            </Link>

            <Link
              href="/"
              className="block w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600"
            >
              Go Home
            </Link>
          </div>

          <div className="mt-6 border-t border-gray-600 pt-4">
            <p className="text-xs text-gray-400">
              If this problem persists, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
