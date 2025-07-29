import type { Exercise } from "../types";
import type { UseFormReturn, FieldErrors } from "react-hook-form";

interface WorkshopDetailsStepProps {
  form: UseFormReturn<{
    title: string;
    description: string;
    exercises: Exercise[];
  }>;
  errors: FieldErrors<{
    title: string;
    description: string;
    exercises: Exercise[];
  }>;
}

export function WorkshopDetailsStep({
  form,
  errors,
}: WorkshopDetailsStepProps) {
  const { register } = form;

  return (
    <div className="flex w-full justify-center">
      <div className="max-w-2xl flex-1">
        <h1 className="mb-6 text-2xl font-bold">Workshop Details</h1>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Workshop Title
            </label>
            <input
              type="text"
              {...register("title")}
              className={`w-full rounded-md border px-3 py-2 text-white focus:outline-none ${
                errors.title
                  ? "border-red-500 bg-red-900/20 focus:border-red-400"
                  : "border-gray-600 bg-gray-800 focus:border-blue-500"
              }`}
              placeholder="Enter workshop title..."
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-400">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              className={`w-full rounded-md border px-3 py-2 text-white focus:outline-none ${
                errors.description
                  ? "border-red-500 bg-red-900/20 focus:border-red-400"
                  : "border-gray-600 bg-gray-800 focus:border-blue-500"
              }`}
              placeholder="Describe your workshop..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-400">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
