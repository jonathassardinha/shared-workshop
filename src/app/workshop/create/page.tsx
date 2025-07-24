"use client";

import { useState } from "react";
import { InitialModel } from "@/app/client.utils";
import { useClientLogger } from "@/lib/Logger/ClientLogger";
import { CreateWorkshopEditor } from "../../../components/workshop/CreateWorkshopEditor";

interface Exercise {
  id: string;
  title: string;
  description: string;
  files: Record<string, { language: string; model: string }>;
}

export default function CreateWorkshopPage() {
  const [currentStep, setCurrentStep] = useState(3);
  const [workshopData, setWorkshopData] = useState({
    title: "",
    description: "",
  });
  const logger = useClientLogger();
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      title: "Getting Started",
      description: "Introduction exercise",
      files: {
        "App.tsx": {
          language: "typescript",
          model: InitialModel,
        },
      },
    },
  ]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handleWorkshopDataChange = (field: string, value: string) => {
    setWorkshopData((prev) => ({ ...prev, [field]: value }));
  };

  const addExercise = () => {
    const newExercise: Exercise = {
      id: Date.now().toString(),
      title: `Exercise ${exercises.length + 1}`,
      description: "",
      files: {},
    };
    setExercises((prev) => [...prev, newExercise]);
  };

  const updateExercise = (index: number, field: string, value: string) => {
    setExercises((prev) =>
      prev.map((exercise, i) =>
        i === index ? { ...exercise, [field]: value } : exercise,
      ),
    );
  };

  const handleSaveFiles = () => {
    logger.info("Files saved for exercise", currentExerciseIndex);
    // This will be implemented with actual file saving logic
  };

  const steps = [
    "Workshop Details",
    "Create Exercises",
    "Configure Files",
    "Review & Create",
  ];

  return (
    <main className="flex h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="flex max-h-full w-full max-w-[1440px] grow flex-col items-stretch px-4 py-8">
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
                  className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Enter workshop title..."
                />
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
                  className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Describe your workshop..."
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                disabled={!workshopData.title.trim()}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-600"
              >
                Next: Create Exercises
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-2xl font-bold">Create Exercises</h1>

            <div className="mb-6 space-y-4">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className="rounded-lg border border-gray-700 bg-gray-800 p-4"
                >
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
                        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                      />
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
              className="mb-6 rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            >
              + Add Exercise
            </button>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
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
                      <span>{exercise.title}</span>
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
                className="rounded-md border border-gray-600 px-4 py-2 text-white hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={() => {
                  logger.debug("Creating workshop...", {
                    workshopData,
                    exercises,
                  });
                  alert(
                    "Workshop created! (This will redirect to the workshop page in future phases)",
                  );
                }}
                className="rounded-md bg-green-600 px-6 py-2 font-medium text-white hover:bg-green-700"
              >
                Create Workshop
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
