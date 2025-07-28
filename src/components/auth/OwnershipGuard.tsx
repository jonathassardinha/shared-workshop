"use client";

import type { Workshop } from "@prisma/client";
import { useSession } from "next-auth/react";
import { type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
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
        <Skeleton className="h-6 w-6 rounded-full" />
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
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <Alert className="max-w-md border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
        <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
        <AlertTitle className="text-red-800 dark:text-red-200">
          {title}
        </AlertTitle>
        <AlertDescription className="text-red-700 dark:text-red-300">
          {message}
        </AlertDescription>
      </Alert>
    </div>
  );
}
