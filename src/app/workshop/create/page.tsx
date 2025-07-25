"use client";

import { useState } from "react";
import { CreateWorkshopEditor } from "../../../components/workshop/CreateWorkshopEditor";
import { MIN_EXERCISES, MAX_EXERCISES } from "../../../lib/constants";
import { useClientLogger } from "../../../lib/Logger/ClientLogger";

interface Exercise {
  id: string;
  title: string;
  description: string;
  files: Record<string, { language: string; model: string }>;
}

export default function CreateWorkshopPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCreating, setIsCreating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [workshopData, setWorkshopData] = useState({
    title: "",
    description: "",
  });
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      title: "Getting Started",
      description: "Introduction exercise",
      files: {},
    },
  ]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const logger = useClientLogger();

  const handleWorkshopDataChange = (field: string, value: string) => {
    setWorkshopData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!workshopData.title.trim()) {
      newErrors.title = "Workshop title is required";
    } else if (workshopData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!workshopData.description.trim()) {
      newErrors.description = "Workshop description is required";
    } else if (workshopData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    exercises.forEach((exercise, index) => {
      if (!exercise.title.trim()) {
        newErrors[`exercise-${index}-title`] = "Exercise title is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addExercise = () => {
    if (exercises.length >= MAX_EXERCISES) {
      alert(`Maximum ${MAX_EXERCISES} exercises allowed`);
      return;
    }

    const newExercise: Exercise = {
      id: Date.now().toString(),
      title: `Exercise ${exercises.length + 1}`,
      description: "",
      files: {},
    };
    setExercises((prev) => [...prev, newExercise]);
  };

  const removeExercise = (index: number) => {
    if (exercises.length <= MIN_EXERCISES) {
      alert(`Minimum ${MIN_EXERCISES} exercise required`);
      return;
    }

    setExercises((prev) => prev.filter((_, i) => i !== index));

    // Adjust current exercise index if necessary
    if (currentExerciseIndex >= exercises.length - 1) {
      setCurrentExerciseIndex(Math.max(0, exercises.length - 2));
    }
  };

  const updateExercise = (index: number, field: string, value: string) => {
    setExercises((prev) =>
      prev.map((exercise, i) =>
        i === index ? { ...exercise, [field]: value } : exercise,
      ),
    );

    // Clear error when user starts typing
    const errorKey = `exercise-${index}-${field}`;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: "" }));
    }
  };

  const handleSaveFiles = () => {
    logger.debug("Files saved for exercise", currentExerciseIndex);
    // This will be implemented with actual file saving logic
  };

  const handleNextStep = (nextStep: number) => {
    if (nextStep === 2 && !validateStep1()) return;
    if (nextStep === 3 && !validateStep2()) return;

    setCurrentStep(nextStep);
    setErrors({}); // Clear errors when moving to next step
  };

  const handleCreateWorkshop = async () => {
    setIsCreating(true);
    try {
      logger.info("Creating workshop...", { workshopData, exercises });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(
        "Workshop created! (This will redirect to the workshop page in future phases)",
      );
    } catch (error) {
      logger.error("Error creating workshop:", error);
      alert("Error creating workshop. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  const steps = [
    "Workshop Details",
    "Create Exercises",
    "Configure Files",
    "Review & Create",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    index + 1 <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    index + 1 <= currentStep ? "text-white" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-4 h-px flex-1 ${
                      index + 1 < currentStep ? "bg-blue-600" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {currentStep === 1 && (
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-6 text-2xl font-bold">Workshop Details</h1>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Workshop Title
                </label>
                <input
                  type="text"
                  value={workshopData.title}
                  onChange={(e) =>
                    handleWorkshopDataChange("title", e.target.value)
                  }
                  className={`w-full rounded-md border px-3 py-2 text-white focus:outline-none ${
                    errors.title
                      ? "border-red-500 bg-red-900/20 focus:border-red-400"
                      : "border-gray-600 bg-gray-800 focus:border-blue-500"
                  }`}
                  placeholder="Enter workshop title..."
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-400">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  value={workshopData.description}
                  onChange={(e) =>
                    handleWorkshopDataChange("description", e.target.value)
                  }
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
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => handleNextStep(2)}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Next: Create Exercises
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
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
                    <h3 className="text-lg font-medium">
                      Exercise {index + 1}
                    </h3>
                    {exercises.length > MIN_EXERCISES && (
                      <button
                        onClick={() => removeExercise(index)}
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
                        value={exercise.title}
                        onChange={(e) =>
                          updateExercise(index, "title", e.target.value)
                        }
                        className={`w-full rounded-md border px-3 py-2 text-white focus:outline-none ${
                          errors[`exercise-${index}-title`]
                            ? "border-red-500 bg-red-900/20 focus:border-red-400"
                            : "border-gray-600 bg-gray-700 focus:border-blue-500"
                        }`}
                      />
                      {errors[`exercise-${index}-title`] && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors[`exercise-${index}-title`]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Description
                      </label>
                      <input
                        type="text"
                        value={exercise.description}
                        onChange={(e) =>
                          updateExercise(index, "description", e.target.value)
                        }
                        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addExercise}
              disabled={exercises.length >= MAX_EXERCISES}
              className="mb-6 rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              + Add Exercise{" "}
              {exercises.length >= MAX_EXERCISES && `(Max ${MAX_EXERCISES})`}
            </button>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={() => handleNextStep(3)}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Next: Configure Files
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="flex grow flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Configure Files</h1>
              <div className="flex items-center gap-4">
                <select
                  value={currentExerciseIndex}
                  onChange={(e) =>
                    setCurrentExerciseIndex(Number(e.target.value))
                  }
                  className="rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                >
                  {exercises.map((exercise, index) => (
                    <option key={exercise.id} value={index}>
                      {exercise.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6 flex-1 overflow-hidden">
              <CreateWorkshopEditor
                files={exercises[currentExerciseIndex]?.files ?? {}}
                onSave={handleSaveFiles}
                onFilesChange={(
                  newFiles: Record<string, { language: string; model: string }>,
                ) => {
                  setExercises((prev) =>
                    prev.map((exercise, i) =>
                      i === currentExerciseIndex
                        ? { ...exercise, files: newFiles }
                        : exercise,
                    ),
                  );
                }}
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Next: Review
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-bold">
              Review & Create Workshop
            </h1>

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

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                disabled={isCreating}
                className="rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
              >
                Back
              </button>
              <button
                onClick={handleCreateWorkshop}
                disabled={isCreating}
                className="flex items-center gap-2 rounded-md bg-green-600 px-6 py-2 font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isCreating ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Creating...
                  </>
                ) : (
                  "Create Workshop"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
