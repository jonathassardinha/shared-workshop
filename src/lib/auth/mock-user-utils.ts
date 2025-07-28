/**
 * Utilities for handling mock users in the database after NextAuth migration
 * These functions help identify and manage orphaned mock user data
 */

import type { User } from "@prisma/client";

/**
 * Mock user IDs that were created during development with the seed script
 */
const MOCK_USER_IDS = ["user-1", "user-2", "user-3"] as const;

/**
 * Check if a user ID belongs to a mock user
 */
export function isMockUserId(userId: string): boolean {
  return MOCK_USER_IDS.includes(userId as (typeof MOCK_USER_IDS)[number]);
}

/**
 * Check if a user object is a mock user (has no OAuth accounts)
 */
export function isMockUser(
  user: User & { accounts?: { provider: string }[] },
): boolean {
  // Check by ID first (most reliable)
  if (isMockUserId(user.id)) {
    return true;
  }

  // Check if user has no OAuth accounts (secondary check)
  if (user.accounts && user.accounts.length === 0) {
    return true;
  }

  return false;
}

/**
 * Get display status for a workshop owner
 */
export function getOwnershipStatus(ownerId: string): {
  isOrphaned: boolean;
  displayText: string;
  badgeClass: string;
} {
  if (isMockUserId(ownerId)) {
    return {
      isOrphaned: true,
      displayText: "Demo Content",
      badgeClass: "bg-yellow-100 text-yellow-800",
    };
  }

  return {
    isOrphaned: false,
    displayText: "Active",
    badgeClass: "bg-green-100 text-green-800",
  };
}

/**
 * Check if a user can edit a workshop (must own it and not be a mock user)
 */
export function canEditWorkshop(
  userId: string,
  workshopOwnerId: string,
): boolean {
  // Must be the owner
  if (userId !== workshopOwnerId) {
    return false;
  }

  // Mock users cannot edit (they're orphaned)
  if (isMockUserId(userId)) {
    return false;
  }

  return true;
}

/**
 * Get mock user info for display purposes
 */
export function getMockUserInfo(
  userId: string,
): { name: string; email: string } | null {
  switch (userId) {
    case "user-1":
      return { name: "Alice Johnson", email: "alice.johnson@example.com" };
    case "user-2":
      return { name: "Bob Smith", email: "bob.smith@example.com" };
    case "user-3":
      return { name: "Carol Davis", email: "carol.davis@example.com" };
    default:
      return null;
  }
}
