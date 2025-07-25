import Link from "next/link";
import { type Workshop } from "../../lib/auth/ownership";

// Re-export Workshop type for convenience
export type { Workshop };

// Remove duplicate Workshop interface since it's now defined in ownership.ts
export type WorkshopStatus = "planned" | "live" | "completed";

function getStatusLabel(status: WorkshopStatus): string {
  switch (status) {
    case "planned":
      return "Planned";
    case "live":
      return "Live";
    case "completed":
      return "Completed";
    default:
      return "Unknown";
  }
}

export const WORKSHOP_STATUS_COLORS = {
  live: "bg-green-100 text-green-800",
  planned: "bg-blue-100 text-blue-800",
  completed: "bg-gray-100 text-gray-800",
} as const;

interface WorkshopCardProps {
  workshop: Workshop;
  showOwnership?: boolean;
}

export function WorkshopCard({
  workshop,
  showOwnership = false,
}: WorkshopCardProps) {
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
        <div>Created: {new Date(workshop.createdAt).toLocaleDateString()}</div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${WORKSHOP_STATUS_COLORS[workshop.status]}`}
        >
          {getStatusLabel(workshop.status)}
        </span>
      </div>

      <div className="flex gap-2">
        {workshop.status === "live" && (
          <Link
            href={`/workshop/${workshop.id}/live`}
            className="flex-1 rounded bg-green-600 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-green-700"
          >
            Join Live Workshop
          </Link>
        )}
        {workshop.status === "planned" && (
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
}
