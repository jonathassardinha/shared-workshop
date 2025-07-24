import Link from "next/link";

export interface Workshop {
  id: string;
  title: string;
  description: string;
  lecturerName: string;
  exerciseCount: number;
  isActive: boolean;
  createdAt: string;
}

interface WorkshopCardProps {
  workshop: Workshop;
}

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
                workshop.isActive
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {workshop.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {workshop.isActive && (
          <Link
            href={`/workshop/${workshop.id}/live`}
            className="flex-1 rounded bg-blue-600 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-blue-700"
          >
            Join Workshop
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
