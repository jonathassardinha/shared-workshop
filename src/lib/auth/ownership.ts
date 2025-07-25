import { type Session } from "next-auth";

export interface Workshop {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  ownerName: string;
  exerciseCount: number;
  status: "planned" | "live" | "completed";
  createdAt: string;
  updatedAt?: string;
}

export interface OwnershipPermissions {
  canEdit: boolean;
  canDelete: boolean;
  canManage: boolean;
  canStart: boolean;
  canStop: boolean;
  canViewSubmissions: boolean;
  canExport: boolean;
}

export interface ParticipationPermissions {
  canView: boolean;
  canJoin: boolean;
  canParticipate: boolean;
  canSubmit: boolean;
}

export interface UserPermissions
  extends OwnershipPermissions,
    ParticipationPermissions {
  isOwner: boolean;
}

/**
 * Check if a user owns a specific workshop
 */
export function isWorkshopOwner(
  session: Session | null,
  workshop: Workshop,
): boolean {
  if (!session?.user?.id || !workshop.ownerId) return false;
  return session.user.id === workshop.ownerId;
}

/**
 * Get ownership permissions for a workshop
 */
export function getOwnershipPermissions(
  session: Session | null,
  workshop: Workshop,
): OwnershipPermissions {
  const isOwner = isWorkshopOwner(session, workshop);

  return {
    canEdit: isOwner,
    canDelete: isOwner,
    canManage: isOwner,
    canStart: isOwner && workshop.status === "planned",
    canStop: isOwner && workshop.status === "live",
    canViewSubmissions: isOwner,
    canExport: isOwner,
  };
}

/**
 * Get participation permissions for a workshop
 */
export function getParticipationPermissions(
  session: Session | null,
  workshop: Workshop,
): ParticipationPermissions {
  const isAuthenticated = !!session?.user?.id;

  return {
    canView: true, // All users can view workshop details
    canJoin: isAuthenticated && workshop.status === "live",
    canParticipate: isAuthenticated && workshop.status === "live",
    canSubmit: isAuthenticated && workshop.status === "live",
  };
}

/**
 * Get all permissions for a user regarding a specific workshop
 */
export function getUserPermissions(
  session: Session | null,
  workshop: Workshop,
): UserPermissions {
  const ownershipPerms = getOwnershipPermissions(session, workshop);
  const participationPerms = getParticipationPermissions(session, workshop);
  const isOwner = isWorkshopOwner(session, workshop);

  return {
    ...ownershipPerms,
    ...participationPerms,
    isOwner,
  };
}

/**
 * Filter workshops based on ownership
 */
export function filterWorkshopsByOwnership(
  workshops: Workshop[],
  session: Session | null,
  filter: "owned" | "others" | "all" = "all",
): Workshop[] {
  if (filter === "all") return workshops;
  if (!session?.user?.id) return filter === "others" ? workshops : [];

  return workshops.filter((workshop) => {
    const isOwner = workshop.ownerId === session.user.id;
    return filter === "owned" ? isOwner : !isOwner;
  });
}

/**
 * Get workshop creation permissions
 */
export function getCreationPermissions(session: Session | null) {
  return {
    canCreate: !!session?.user?.id, // Any authenticated user can create workshops
  };
}
