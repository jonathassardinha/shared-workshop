"use client";

import { useSession } from "next-auth/react";
import { type ReactNode } from "react";
import { type Workshop } from "../../lib/auth/ownership";
import { useWorkshopPermissions } from "../../hooks/useOwnership";

interface OwnershipGuardProps {
  workshop: Workshop;
  requireOwnership?: boolean;
  requirePermissions?: (keyof ReturnType<typeof useWorkshopPermissions>)[];
  fallback?: ReactNode;
  children: ReactNode;
}

export function OwnershipGuard({
  workshop,
  requireOwnership = false,
  requirePermissions = [],
  fallback = null,
  children,
}: OwnershipGuardProps) {
  const { status } = useSession();
  const permissions = useWorkshopPermissions(workshop);

  // Show loading state while session is loading
  if (status === "loading" || permissions.isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  // Check ownership requirement
  if (requireOwnership && !permissions.isOwner) {
    return <>{fallback}</>;
  }

  // Check specific permissions
  if (requirePermissions.length > 0) {
    const hasAllPermissions = requirePermissions.every(
      (permission) => permissions[permission],
    );
    if (!hasAllPermissions) {
      return <>{fallback}</>;
    }
  }

  return <>{children}</>;
}

// Convenient wrapper components for common use cases
interface OwnerOnlyProps {
  workshop: Workshop;
  fallback?: ReactNode;
  children: ReactNode;
}

export function OwnerOnly({
  workshop,
  fallback = null,
  children,
}: OwnerOnlyProps) {
  return (
    <OwnershipGuard
      workshop={workshop}
      requireOwnership={true}
      fallback={fallback}
    >
      {children}
    </OwnershipGuard>
  );
}

interface ParticipantGuardProps {
  workshop: Workshop;
  fallback?: ReactNode;
  children: ReactNode;
}

export function ParticipantGuard({
  workshop,
  fallback = null,
  children,
}: ParticipantGuardProps) {
  return (
    <OwnershipGuard
      workshop={workshop}
      requirePermissions={["canParticipate"]}
      fallback={fallback}
    >
      {children}
    </OwnershipGuard>
  );
}

interface EditGuardProps {
  workshop: Workshop;
  fallback?: ReactNode;
  children: ReactNode;
}

export function EditGuard({
  workshop,
  fallback = null,
  children,
}: EditGuardProps) {
  return (
    <OwnershipGuard
      workshop={workshop}
      requirePermissions={["canEdit"]}
      fallback={fallback}
    >
      {children}
    </OwnershipGuard>
  );
}

interface ManageGuardProps {
  workshop: Workshop;
  fallback?: ReactNode;
  children: ReactNode;
}

export function ManageGuard({
  workshop,
  fallback = null,
  children,
}: ManageGuardProps) {
  return (
    <OwnershipGuard
      workshop={workshop}
      requirePermissions={["canManage"]}
      fallback={fallback}
    >
      {children}
    </OwnershipGuard>
  );
}

// General access denied component
interface AccessDeniedProps {
  title?: string;
  message?: string;
  className?: string;
}

export function AccessDenied({
  title = "Access Denied",
  message = "You don't have permission to access this resource.",
  className = "",
}: AccessDeniedProps) {
  return (
    <div className={`p-8 text-center ${className}`}>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <svg
          className="h-8 w-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-100">{title}</h3>
      <p className="text-gray-400">{message}</p>
    </div>
  );
}
