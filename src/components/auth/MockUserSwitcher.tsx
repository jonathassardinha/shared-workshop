"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { ArrowLeftRight, ChevronDown, Loader2 } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockUsers } from "../../lib/auth/mockUsers";

interface MockUserSwitcherProps {
  className?: string;
}

export function MockUserSwitcher({ className = "" }: MockUserSwitcherProps) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const handleUserSelect = async (userId: string) => {
    setIsLoading(userId);

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`border-yellow-500 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-300 ${className}`}
          size="sm"
        >
          <ArrowLeftRight className="mr-2 h-4 w-4" />
          Switch User
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-72 border-gray-600 bg-gray-800"
        align="end"
      >
        <DropdownMenuLabel className="text-yellow-400">
          <div className="space-y-1">
            <p className="text-xs font-medium">Development Mode</p>
            <p className="text-xs font-normal text-gray-400">
              Switch between test users
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600" />

        <ScrollArea className="h-80">
          <div className="p-1">
            {mockUsers.map((user) => {
              const isCurrentUser = currentUser?.id === user.id;
              const isLoadingUser = isLoading === user.id;

              return (
                <DropdownMenuItem
                  key={user.id}
                  onClick={() => handleUserSelect(user.id)}
                  disabled={isCurrentUser || isLoadingUser}
                  className={`flex cursor-pointer items-center gap-3 p-3 transition-colors ${
                    isCurrentUser
                      ? "bg-blue-600/20 text-blue-300 focus:bg-blue-600/30"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
                  } ${isLoadingUser ? "opacity-50" : ""}`}
                >
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-gray-600 text-xs text-white">
                      {user.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-medium">
                        {user.name}
                      </p>
                      {isCurrentUser && (
                        <Badge
                          variant="secondary"
                          className="bg-blue-600 px-1.5 py-0.5 text-xs text-white"
                        >
                          Current
                        </Badge>
                      )}
                      {isLoadingUser && (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      )}
                    </div>
                    <p className="truncate text-xs text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator className="my-2 bg-gray-600" />

            <div className="px-3 py-2">
              <p className="text-xs text-gray-500">
                Current: {currentUser?.name ?? "Not signed in"}
              </p>
            </div>
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
