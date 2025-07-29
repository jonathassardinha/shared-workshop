import type { WorkshopStatus } from "@prisma/client";
import type { WorkshopWithDetails } from "../../server/actions/workshop/workshop.types";
import Link from "next/link";
import { memo, useMemo } from "react";
import { getOwnershipStatus } from "../../lib/auth/mock-user-utils";

// Re-export WorkshopWithDetails type for convenience
export type { WorkshopWithDetails };

function getStatusLabel(status: WorkshopStatus): string {
  switch (status) {
    case "PLANNED":
      return "Planned";
    case "LIVE":
      return "Live";
    case "COMPLETED":
      return "Completed";
    default:
      return "Unknown";
  }
}

export const WorkshopStatusClasses = {
  LIVE: " bg-green-100 text-green-800",
  PLANNED: "bg-blue-100 text-blue-800",
  COMPLETED: "bg-gray-100 text-gray-800",
} satisfies Record<WorkshopStatus, string>;

interface WorkshopCardProps {
  workshop: WorkshopWithDetails;
  showOwnership?: boolean;
}

export const WorkshopCard = memo(function WorkshopCard({
  workshop,
  showOwnership = false,
}: WorkshopCardProps) {
  // Memoize expensive calculations
  const ownershipStatus = useMemo(
    () => getOwnershipStatus(workshop.ownerId),
    [workshop.ownerId],
  );

  const formattedDate = useMemo(
    () => new Date(workshop.createdAt).toLocaleDateString(),
    [workshop.createdAt],
  );

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors hover:border-gray-600">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white">{workshop.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-300">
          {workshop.description}
        </p>
      </div>

      <div className="mb-4 space-y-2 text-sm text-gray-400">
        <div className="flex items-center justify-between">
          <span>By: {workshop.ownerName}</span>
          {showOwnership && (
            <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
              Owner
            </span>
          )}
        </div>
        <div>Exercises: {workshop.exerciseCount}</div>
        <div>Created: {formattedDate}</div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${WorkshopStatusClasses[workshop.status]}`}
        >
          {getStatusLabel(workshop.status)}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${ownershipStatus.badgeClass}`}
        >
          {ownershipStatus.displayText}
        </span>
      </div>

      <div className="flex gap-2">
        {workshop.status === "LIVE" && (
          <Link
            href={`/workshop/${workshop.id}/live`}
            className="flex-1 rounded bg-green-600 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-green-700"
          >
            Join Live Workshop
          </Link>
        )}
        {workshop.status === "PLANNED" && (
          <Link
            href={`/workshop/${workshop.id}/live`}
            className="flex-1 rounded bg-blue-600 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-blue-700"
          >
            View Workshop
          </Link>
        )}
        <Link
          href={`/workshop/${workshop.id}`}
          className="flex-1 rounded bg-gray-600 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-gray-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
});
