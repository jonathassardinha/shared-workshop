import type { Exercise } from "../types";
import type { UseFormReturn, FieldErrors } from "react-hook-form";
import { MIN_EXERCISES, MAX_EXERCISES } from "../../../lib/constants";

interface CreateExercisesStepProps {
  form: UseFormReturn<{
    title: string;
    description: string;
    exercises: Exercise[];
  }>;
  exercises: Exercise[];
  errors: FieldErrors<{
    title: string;
    description: string;
    exercises: Exercise[];
  }>;
  onUpdateExercise: (
    index: number,
    field: keyof Exercise,
    value: string,
  ) => void;
  onAddExercise: () => void;
  onRemoveExercise: (index: number) => void;
}

export function CreateExercisesStep({
  form,
  exercises,
  errors,
  onUpdateExercise,
  onAddExercise,
  onRemoveExercise,
}: CreateExercisesStepProps) {
  const { register } = form;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create Exercises</h1>
        <span className="text-sm text-gray-400">
          {exercises.length} of {MAX_EXERCISES} exercises
        </span>
      </div>

      <div className="mb-6 space-y-4">
        {exercises.map((exercise, index) => (
          <div
            key={exercise.id}
            className="rounded-lg border border-gray-700 bg-gray-800 p-4"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-medium">Exercise {index + 1}</h3>
              {exercises.length > MIN_EXERCISES && (
                <button
                  type="button"
                  onClick={() => onRemoveExercise(index)}
                  className="text-sm text-red-400 hover:text-red-300"
                  title="Remove exercise"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Exercise Title
                </label>
                <input
                  type="text"
                  {...register(`exercises.${index}.title`)}
                  onChange={(e) =>
                    onUpdateExercise(index, "title", e.target.value)
                  }
                  className={`w-full rounded-md border px-3 py-2 text-white focus:outline-none ${
                    errors.exercises?.[index]?.title
                      ? "border-red-500 bg-red-900/20 focus:border-red-400"
                      : "border-gray-600 bg-gray-700 focus:border-blue-500"
                  }`}
                />
                {errors.exercises?.[index]?.title && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.exercises[index]?.title?.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <input
                  type="text"
                  {...register(`exercises.${index}.description`)}
                  onChange={(e) =>
                    onUpdateExercise(index, "description", e.target.value)
                  }
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {errors.exercises && !Array.isArray(errors.exercises) && (
        <p className="mb-4 text-sm text-red-400">{errors.exercises.message}</p>
      )}

      <button
        type="button"
        onClick={onAddExercise}
        disabled={exercises.length >= MAX_EXERCISES}
        className="mb-6 rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        + Add Exercise{" "}
        {exercises.length >= MAX_EXERCISES && `(Max ${MAX_EXERCISES})`}
      </button>
    </div>
  );
}
