"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MIN_EXERCISES, MAX_EXERCISES } from "../../../lib/constants";
import { useClientLogger } from "../../../lib/Logger/ClientLogger";
import {
  StepperContext,
  StepperProgress,
  StepperContent,
  StepperNavigation,
  StepperBackButton,
  StepperNextButton,
  StepperSubmitButton,
  type StepConfig,
} from "../../../components/ui/Stepper";
import {
  WorkshopDetailsStep,
  CreateExercisesStep,
  ConfigureFilesStep,
  ReviewStep,
  type Exercise,
} from "../../../components/workshop";

// Validation schemas for each step
const workshopDetailsSchema = z.object({
  title: z
    .string()
    .min(1, "Workshop title is required")
    .min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(1, "Workshop description is required")
    .min(10, "Description must be at least 10 characters"),
});

const exerciseSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Exercise title is required"),
  description: z.string(),
  files: z.record(
    z.object({
      language: z.string(),
      model: z.string(),
    }),
  ),
});

const exercisesSchema = z.object({
  exercises: z
    .array(exerciseSchema)
    .min(MIN_EXERCISES, `At least ${MIN_EXERCISES} exercise is required`)
    .max(MAX_EXERCISES, `Maximum ${MAX_EXERCISES} exercises allowed`),
});

// Complete form schema
const createWorkshopSchema = workshopDetailsSchema.merge(exercisesSchema);

type CreateWorkshopFormData = z.infer<typeof createWorkshopSchema>;

export default function CreateWorkshopPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCreating, setIsCreating] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const logger = useClientLogger();

  const form = useForm<CreateWorkshopFormData>({
    resolver: zodResolver(createWorkshopSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      exercises: [
        {
          id: "1",
          title: "Getting Started",
          description: "Introduction exercise",
          files: {},
        },
      ],
    },
  });

  const {
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = form;
  const exercises = watch("exercises");

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

    setValue("exercises", [...exercises, newExercise]);
  };

  const removeExercise = (index: number) => {
    if (exercises.length <= MIN_EXERCISES) {
      alert(`Minimum ${MIN_EXERCISES} exercise required`);
      return;
    }

    const updatedExercises = exercises.filter((_, i) => i !== index);
    setValue("exercises", updatedExercises);

    // Adjust current exercise index if necessary
    if (currentExerciseIndex >= updatedExercises.length) {
      setCurrentExerciseIndex(Math.max(0, updatedExercises.length - 1));
    }
  };

  const updateExercise = (
    index: number,
    field: keyof Exercise,
    value: string,
  ) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === index ? { ...exercise, [field]: value } : exercise,
    );
    setValue("exercises", updatedExercises);
  };

  const handleSaveFiles = () => {
    logger.debug("Files saved for exercise", currentExerciseIndex);
    // This will be implemented with actual file saving logic
  };

  const handleFilesChange = (
    newFiles: Record<string, { language: string; model: string }>,
  ) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === currentExerciseIndex ? { ...exercise, files: newFiles } : exercise,
    );
    setValue("exercises", updatedExercises);
  };

  const handleBeforeStepChange = async (
    currentStep: number,
    targetStep: number,
  ): Promise<boolean> => {
    // Only validate when moving forward
    if (targetStep > currentStep) {
      let fieldsToValidate: (keyof CreateWorkshopFormData)[] = [];

      switch (currentStep) {
        case 1:
          fieldsToValidate = ["title", "description"];
          break;
        case 2:
          fieldsToValidate = ["exercises"];
          break;
        case 3:
          // No additional validation needed for file configuration step
          break;
      }

      if (fieldsToValidate.length > 0) {
        const isValid = await trigger(fieldsToValidate);
        if (!isValid) {
          return false; // Prevent step change
        }
      }
    }

    return true; // Allow step change
  };

  const handleCreateWorkshop = async (data: CreateWorkshopFormData) => {
    setIsCreating(true);
    try {
      logger.info("Creating workshop...", data);
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

  const steps: StepConfig[] = [
    {
      id: "workshop-details",
      title: "Workshop Details",
      content: <WorkshopDetailsStep form={form} errors={errors} />,
    },
    {
      id: "create-exercises",
      title: "Create Exercises",
      content: (
        <CreateExercisesStep
          form={form}
          exercises={exercises}
          errors={errors}
          onUpdateExercise={updateExercise}
          onAddExercise={addExercise}
          onRemoveExercise={removeExercise}
        />
      ),
    },
    {
      id: "configure-files",
      title: "Configure Files",
      content: (
        <ConfigureFilesStep
          exercises={exercises}
          currentExerciseIndex={currentExerciseIndex}
          onCurrentExerciseIndexChange={setCurrentExerciseIndex}
          onSaveFiles={handleSaveFiles}
          onFilesChange={handleFilesChange}
        />
      ),
    },
    {
      id: "review-create",
      title: "Review & Create",
      content: <ReviewStep workshopData={getValues()} exercises={exercises} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <StepperContext
          steps={steps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          onBeforeStepChange={handleBeforeStepChange}
        >
          <StepperProgress showStepNumbers={true} showConnectors={true} />

          <StepperContent />

          <form onSubmit={form.handleSubmit(handleCreateWorkshop)}>
            <div className="mt-8">
              <StepperNavigation>
                <StepperBackButton />
                <div className="flex gap-2">
                  <StepperNextButton />
                  <StepperSubmitButton disabled={isCreating}>
                    {isCreating ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Creating...
                      </>
                    ) : (
                      "Create Workshop"
                    )}
                  </StepperSubmitButton>
                </div>
              </StepperNavigation>
            </div>
          </form>
        </StepperContext>
      </div>
    </div>
  );
}
