import "server-only";

import { auth } from "@/server/auth";
import {
  type Workshop,
  type UserPermissions,
  getUserPermissions,
  getCreationPermissions,
  filterWorkshopsByOwnership,
} from "./ownership";

/**
 * Get current user session on the server
 */
export async function getServerSession() {
  return await auth();
}

/**
 * Check if current user owns a workshop (server-side)
 */
export async function isCurrentUserOwner(workshop: Workshop): Promise<boolean> {
  const session = await getServerSession();
  if (!session?.user?.id || !workshop.ownerId) return false;
  return session.user.id === workshop.ownerId;
}

/**
 * Get current user's permissions for a workshop (server-side)
 */
export async function getCurrentUserPermissions(
  workshop: Workshop,
): Promise<UserPermissions> {
  const session = await getServerSession();
  return getUserPermissions(session, workshop);
}

/**
 * Get current user's creation permissions (server-side)
 */
export async function getCurrentUserCreationPermissions() {
  const session = await getServerSession();
  return getCreationPermissions(session);
}

/**
 * Filter workshops by ownership for current user (server-side)
 */
export async function filterWorkshopsForCurrentUser(
  workshops: Workshop[],
  filter: "owned" | "others" | "all" = "all",
): Promise<Workshop[]> {
  const session = await getServerSession();
  return filterWorkshopsByOwnership(workshops, session, filter);
}

/**
 * Get current user ID (server-side)
 */
export async function getCurrentUserId(): Promise<string | null> {
  const session = await getServerSession();
  return session?.user?.id ?? null;
}

/**
 * Check if user is authenticated (server-side)
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await getServerSession();
  return !!session?.user?.id;
}

/**
 * Require authentication - throw error if not authenticated (server-side)
 */
export async function requireAuth() {
  const session = await getServerSession();
  if (!session?.user?.id) {
    throw new Error("Authentication required");
  }
  return session;
}

/**
 * Require ownership - throw error if user doesn't own workshop (server-side)
 */
export async function requireOwnership(workshop: Workshop) {
  const session = await requireAuth();
  if (session.user.id !== workshop.ownerId) {
    throw new Error("Workshop ownership required");
  }
  return session;
}
