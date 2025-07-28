// User Action Types - Safe for client component imports
// These types define application-specific interfaces for user server actions

import type { User } from "@prisma/client";

// =================================================================
// API INPUT TYPES (simplified for our server actions)
// =================================================================

// Update input derived from User type using utility types
export type UpdateUserProfileInput = Partial<
  Pick<User, "name" | "email" | "image">
>;

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
