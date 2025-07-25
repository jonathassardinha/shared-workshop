"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn";

// Mock user role for now - will be replaced with real auth in phase 2
const mockUserRole: "lecturer" | "participant" = "lecturer";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/workshops") {
      return pathname === "/workshops" || pathname === "/";
    }
    return pathname.startsWith(path);
  };

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

              {mockUserRole === "lecturer" && (
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
            <span className="text-sm text-gray-400">Role: {mockUserRole}</span>
            <div className="h-8 w-8 rounded-full bg-gray-600"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
