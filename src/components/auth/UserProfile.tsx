"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface UserProfileProps {
  className?: string;
}

export function UserProfile({ className = "" }: UserProfileProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="hidden h-4 w-24 md:block" />
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const handleSignOut = async () => {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`h-auto p-2 hover:bg-gray-700 ${className}`}
        >
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={session.user.image ?? undefined}
                alt={userDisplayName}
              />
              <AvatarFallback className="bg-gray-600 text-sm text-white">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium text-gray-200 md:block">
              {userDisplayName}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 border-gray-600 bg-gray-800"
        align="end"
      >
        <DropdownMenuLabel className="text-gray-200">
          <div className="flex items-center gap-3 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={session.user.image ?? undefined}
                alt={userDisplayName}
              />
              <AvatarFallback className="bg-gray-600 text-white">
                {userInitials}
              </AvatarFallback>
            </Avatar>
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
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
