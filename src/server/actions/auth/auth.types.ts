// Auth Action Types - Safe for client component imports
// These types define application-specific interfaces for auth server actions

import type { User } from "@prisma/client";

// =================================================================
// API INPUT TYPES (simplified for our server actions)
// =================================================================

export interface SignInInput {
  email: string;
  password?: string;
  provider?: string;
}

// =================================================================
// APPLICATION-SPECIFIC TYPES
// =================================================================

// User profile type derived from Prisma User model
export type SafeUser = Pick<User, "id" | "name" | "email" | "image">;

// Session information (safe for client)
export interface SessionInfo {
  user: SafeUser | null;
  isAuthenticated: boolean;
}

// Auth status result
export interface AuthStatusResult {
  isAuthenticated: boolean;
  user: SessionInfo["user"];
}
