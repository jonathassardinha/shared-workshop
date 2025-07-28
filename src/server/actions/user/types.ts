// User Action Types - Safe for client component imports
// These types define application-specific interfaces for user server actions

import type { User } from "@prisma/client";

// =================================================================
// INPUT TYPES (simplified for our API)
// =================================================================

export interface UpdateUserProfileInput {
  name?: string;
  email?: string;
  image?: string;
}

// =================================================================
// APPLICATION-SPECIFIC TYPES
// =================================================================

// User profile without sensitive data - safe for client
export type UserProfile = Pick<User, "id" | "name" | "email" | "image">;

// User with workshop statistics
export interface UserWithStats extends UserProfile {
  workshopCount: number;
  liveWorkshops: number;
  completedWorkshops: number;
}
