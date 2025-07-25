import Link from "next/link";
import { WORKSHOP_STATUS_COLORS } from "../../lib/constants";

export type WorkshopStatus = "planned" | "live" | "completed";

export interface Workshop {
  id: string;
  title: string;
  description: string;
  lecturerName: string;
  exerciseCount: number;
  status: WorkshopStatus;
  createdAt: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
}

const getStatusLabel = (status: WorkshopStatus): string => {
  switch (status) {
    case "live":
      return "Live";
    case "planned":
      return "Planned";
    case "completed":
      return "Completed";
    default:
      return "Unknown";
  }
};

export function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors hover:border-gray-600">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-semibold text-white">
            {workshop.title}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-gray-400">
            {workshop.description}
          </p>

          <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
            <span>By {workshop.lecturerName}</span>
            <span>{workshop.exerciseCount} exercises</span>
            <span>{new Date(workshop.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                WORKSHOP_STATUS_COLORS[workshop.status]
              }`}
            >
              {getStatusLabel(workshop.status)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
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
