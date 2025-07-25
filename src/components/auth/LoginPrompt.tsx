"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { User, ArrowLeft, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
    <div className={`flex items-center justify-center ${className}`}>
      <Card className="w-full max-w-md border-gray-600 bg-gray-800">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-lg font-medium text-gray-100">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400">{message}</CardDescription>
        </CardHeader>

        <CardContent>
          {isDevelopment ? (
            <div className="space-y-4">
              {!showMockUsers ? (
                <Button
                  onClick={() => setShowMockUsers(true)}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Choose Mock User (Development)
                </Button>
              ) : (
                <div className="space-y-4">
                  <Alert className="border-yellow-500 bg-yellow-500/10">
                    <AlertDescription className="text-sm text-yellow-400">
                      Development Mode - Choose a test user:
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-2">
                    {mockUsers.map((user) => {
                      const isLoadingUser = isLoading === user.id;

                      return (
                        <Button
                          key={user.id}
                          onClick={() => handleMockSignIn(user.id)}
                          disabled={isLoadingUser}
                          variant="outline"
                          className="h-auto w-full justify-start border-gray-600 bg-gray-800 p-3 hover:bg-gray-700"
                        >
                          <Avatar className="mr-3 h-8 w-8 flex-shrink-0">
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

                          <div className="min-w-0 flex-1 text-left">
                            <div className="flex items-center gap-2">
                              <p className="truncate text-sm font-medium text-white">
                                {user.name}
                              </p>
                              {isLoadingUser && (
                                <Loader2 className="h-3 w-3 animate-spin" />
                              )}
                            </div>
                            <p className="truncate text-xs text-gray-400">
                              {user.email}
                            </p>
                          </div>
                        </Button>
                      );
                    })}
                  </div>

                  <Button
                    onClick={() => setShowMockUsers(false)}
                    variant="ghost"
                    size="sm"
                    className="w-full text-gray-400 hover:text-gray-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <Alert className="border-gray-600">
                <AlertDescription className="text-sm text-gray-500">
                  Authentication providers will be available here in production.
                </AlertDescription>
              </Alert>
              <Button
                disabled
                className="w-full cursor-not-allowed bg-gray-600 text-gray-400"
              >
                Sign In (Coming Soon)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
