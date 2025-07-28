import type { Exercise, WorkshopData } from "../types";

interface ReviewStepProps {
  workshopData: WorkshopData;
  exercises: Exercise[];
}

export function ReviewStep({ workshopData, exercises }: ReviewStepProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold">Review & Create Workshop</h1>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-2 text-lg font-semibold">Workshop Details</h3>
          <p className="mb-2 text-gray-300">
            <strong>Title:</strong> {workshopData.title}
          </p>
          <p className="text-gray-300">
            <strong>Description:</strong> {workshopData.description}
          </p>
        </div>

        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Exercises ({exercises.length})
          </h3>
          <div className="space-y-2">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                className="flex items-center justify-between rounded bg-gray-700 p-2"
              >
                <div>
                  <span className="font-medium">{exercise.title}</span>
                  {exercise.description && (
                    <span className="ml-2 text-sm text-gray-400">
                      - {exercise.description}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-400">
                  {Object.keys(exercise.files).length} files
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
