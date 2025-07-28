import type { Workshop } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import {
  type UserPermissions,
  getUserPermissions,
  getCreationPermissions,
  filterWorkshopsByOwnership,
  isWorkshopOwner,
} from "../lib/auth/ownership";

/**
 * Custom hook for workshop ownership and permissions
 */
export function useOwnership() {
  const { data: session, status } = useSession();

  const ownershipUtils = useMemo(() => {
    return {
      /**
       * Check if current user owns a specific workshop
       */
      isOwner: (workshop: Workshop) => isWorkshopOwner(session, workshop),

      /**
       * Get all permissions for current user regarding a workshop
       */
      getPermissions: (workshop: Workshop): UserPermissions =>
        getUserPermissions(session, workshop),

      /**
       * Get creation permissions for current user
       */
      getCreationPermissions: () => getCreationPermissions(session),

      /**
       * Filter workshops by ownership
       */
      filterWorkshops: (
        workshops: Workshop[],
        filter: "owned" | "others" | "all" = "all",
      ) => filterWorkshopsByOwnership(workshops, session, filter),

      /**
       * Get current user ID
       */
      getCurrentUserId: () => session?.user?.id ?? null,

      /**
       * Check if user is authenticated
       */
      isAuthenticated: () => !!session?.user?.id,

      /**
       * Check if session is loading
       */
      isLoading: () => status === "loading",

      /**
       * Get current user info
       */
      getUser: () => session?.user ?? null,
    };
  }, [session, status]);

  return ownershipUtils;
}

/**
 * Hook for specific workshop permissions
 */
export function useWorkshopPermissions(workshop: Workshop | null) {
  const { data: session, status } = useSession();

  const permissions = useMemo(() => {
    if (!workshop) {
      return {
        isOwner: false,
        canEdit: false,
        canDelete: false,
        canManage: false,
        canStart: false,
        canStop: false,
        canViewSubmissions: false,
        canExport: false,
        canView: true,
        canJoin: false,
        canParticipate: false,
        canSubmit: false,
      };
    }

    return getUserPermissions(session, workshop);
  }, [session, workshop]);

  return {
    ...permissions,
    isLoading: status === "loading",
    isAuthenticated: !!session?.user?.id,
  };
}

/**
 * Hook for workshop creation permissions
 */
export function useCreationPermissions() {
  const { data: session, status } = useSession();

  const permissions = useMemo(() => {
    return getCreationPermissions(session);
  }, [session]);

  return {
    ...permissions,
    isLoading: status === "loading",
    isAuthenticated: !!session?.user?.id,
  };
}
