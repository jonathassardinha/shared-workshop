"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface UserProfileProps {
  className?: string;
}

export function UserProfile({ className = "" }: UserProfileProps) {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (status === "loading") {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-600"></div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut({ redirect: false });
  };

  const userDisplayName = session.user.name ?? session.user.email ?? "User";
  const userInitials = userDisplayName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
      >
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-600">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={userDisplayName}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
              {userInitials}
            </div>
          )}
        </div>
        <span className="hidden text-sm font-medium md:block">
          {userDisplayName}
        </span>
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
        <div className="absolute top-full right-0 z-50 mt-1 w-64 rounded-lg border border-gray-600 bg-gray-800 py-1 shadow-xl">
          <div className="border-b border-gray-600 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-600">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={userDisplayName}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                    {userInitials}
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  {userDisplayName}
                </p>
                {session.user.email && (
                  <p className="truncate text-xs text-gray-400">
                    {session.user.email}
                  </p>
                )}
                {session.user.createdAt && (
                  <p className="text-xs text-gray-500">
                    Member since{" "}
                    {new Date(session.user.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="py-1">
            <button
              onClick={handleSignOut}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
