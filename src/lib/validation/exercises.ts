import { z } from "zod";
import { WORKSHOP_CONSTRAINTS } from "./workshop";

// Exercise validation constants
export const EXERCISE_VALIDATION = {
  TITLE_MIN_LENGTH: 1,
  TITLE_MAX_LENGTH: 200,
  DESCRIPTION_MAX_LENGTH: 500,
  MAX_FILES: WORKSHOP_CONSTRAINTS.MAX_FILES_PER_EXERCISE,
  MIN_ORDER: 1,
} as const;

// Exercise validation schema
export const exerciseValidationSchema = z.object({
  id: z.string().min(1, "Exercise ID is required"),
  title: z
    .string()
    .min(EXERCISE_VALIDATION.TITLE_MIN_LENGTH, "Exercise title is required")
    .max(
      EXERCISE_VALIDATION.TITLE_MAX_LENGTH,
      `Exercise title must be less than ${EXERCISE_VALIDATION.TITLE_MAX_LENGTH} characters`,
    )
    .trim(),
  description: z
    .string()
    .max(
      EXERCISE_VALIDATION.DESCRIPTION_MAX_LENGTH,
      `Exercise description must be less than ${EXERCISE_VALIDATION.DESCRIPTION_MAX_LENGTH} characters`,
    )
    .trim(),
  order: z
    .number()
    .int("Exercise order must be an integer")
    .min(EXERCISE_VALIDATION.MIN_ORDER, "Exercise order must be at least 1"),
  files: z.record(
    z.object({
      language: z.string().min(1, "Language is required"),
      model: z
        .string()
        .max(WORKSHOP_CONSTRAINTS.MAX_FILE_SIZE, "File content too large"),
    }),
  ),
});

// Exercise array validation schema
export const exerciseArraySchema = z
  .array(exerciseValidationSchema)
  .min(
    WORKSHOP_CONSTRAINTS.MIN_EXERCISES,
    `At least ${WORKSHOP_CONSTRAINTS.MIN_EXERCISES} exercise is required`,
  )
  .max(
    WORKSHOP_CONSTRAINTS.MAX_EXERCISES,
    `Maximum ${WORKSHOP_CONSTRAINTS.MAX_EXERCISES} exercises allowed`,
  )
  .refine(
    (exercises) => {
      // Check for unique exercise titles
      const titles = exercises.map((e) => e.title.toLowerCase().trim());
      const uniqueTitles = new Set(titles);
      return uniqueTitles.size === titles.length;
    },
    {
      message: "Exercise titles must be unique",
    },
  )
  .refine(
    (exercises) => {
      // Check for sequential order
      const orders = exercises.map((e) => e.order).sort((a, b) => a - b);
      return orders.every((order, index) => order === index + 1);
    },
    {
      message: "Exercise order must be sequential starting from 1",
    },
  );

// Type exports
export type ExerciseValidationInput = z.infer<typeof exerciseValidationSchema>;
export type ExerciseArrayInput = z.infer<typeof exerciseArraySchema>;

// Exercise validation utilities
export function validateExerciseTitle(title: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    exerciseValidationSchema.shape.title.parse(title);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid exercise title",
      };
    }
    return { isValid: false, error: "Invalid exercise title" };
  }
}

export function validateExerciseDescription(description: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    exerciseValidationSchema.shape.description.parse(description);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid exercise description",
      };
    }
    return { isValid: false, error: "Invalid exercise description" };
  }
}

export function validateExerciseOrder(order: number): {
  isValid: boolean;
  error?: string;
} {
  try {
    exerciseValidationSchema.shape.order.parse(order);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid exercise order",
      };
    }
    return { isValid: false, error: "Invalid exercise order" };
  }
}

export function validateExerciseFileCount(fileCount: number): {
  isValid: boolean;
  error?: string;
} {
  if (fileCount > EXERCISE_VALIDATION.MAX_FILES) {
    return {
      isValid: false,
      error: `Maximum ${EXERCISE_VALIDATION.MAX_FILES} files per exercise allowed`,
    };
  }
  return { isValid: true };
}

export function validateExerciseTitlesUnique(
  exercises: Array<{ title: string }>,
): { isValid: boolean; error?: string } {
  const titles = exercises.map((e) => e.title.toLowerCase().trim());
  const uniqueTitles = new Set(titles);

  if (uniqueTitles.size !== titles.length) {
    return {
      isValid: false,
      error: "Exercise titles must be unique",
    };
  }

  return { isValid: true };
}

export function validateExerciseOrderSequential(
  exercises: Array<{ order: number }>,
): { isValid: boolean; error?: string } {
  const orders = exercises.map((e) => e.order).sort((a, b) => a - b);

  for (let i = 0; i < orders.length; i++) {
    if (orders[i] !== i + 1) {
      return {
        isValid: false,
        error: "Exercise order must be sequential starting from 1",
      };
    }
  }

  return { isValid: true };
}

export function validateCompleteExercise(exercise: {
  id: string;
  title: string;
  description: string;
  order: number;
  files: Record<string, { language: string; model: string }>;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate title
  const titleValidation = validateExerciseTitle(exercise.title);
  if (!titleValidation.isValid) {
    errors.push(titleValidation.error!);
  }

  // Validate description
  const descriptionValidation = validateExerciseDescription(
    exercise.description,
  );
  if (!descriptionValidation.isValid) {
    errors.push(descriptionValidation.error!);
  }

  // Validate order
  const orderValidation = validateExerciseOrder(exercise.order);
  if (!orderValidation.isValid) {
    errors.push(orderValidation.error!);
  }

  // Validate file count
  const fileCountValidation = validateExerciseFileCount(
    Object.keys(exercise.files).length,
  );
  if (!fileCountValidation.isValid) {
    errors.push(fileCountValidation.error!);
  }

  // Validate files have required properties
  for (const [filename, file] of Object.entries(exercise.files)) {
    if (!file.language || file.language.trim().length === 0) {
      errors.push(`Language is required for file: ${filename}`);
    }
    if (!file.model) {
      errors.push(`Content is required for file: ${filename}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateExerciseArray(
  exercises: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
    files: Record<string, { language: string; model: string }>;
  }>,
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate exercise count
  if (exercises.length < WORKSHOP_CONSTRAINTS.MIN_EXERCISES) {
    errors.push(
      `At least ${WORKSHOP_CONSTRAINTS.MIN_EXERCISES} exercise is required`,
    );
  }

  if (exercises.length > WORKSHOP_CONSTRAINTS.MAX_EXERCISES) {
    errors.push(
      `Maximum ${WORKSHOP_CONSTRAINTS.MAX_EXERCISES} exercises allowed`,
    );
  }

  // Validate each exercise
  for (const exercise of exercises) {
    const exerciseValidation = validateCompleteExercise(exercise);
    errors.push(...exerciseValidation.errors);
  }

  // Validate unique titles
  const titleValidation = validateExerciseTitlesUnique(exercises);
  if (!titleValidation.isValid) {
    errors.push(titleValidation.error!);
  }

  // Validate sequential order
  const orderValidation = validateExerciseOrderSequential(exercises);
  if (!orderValidation.isValid) {
    errors.push(orderValidation.error!);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function generateExerciseOrder(
  existingExercises: Array<{ order: number }>,
): number {
  if (existingExercises.length === 0) {
    return 1;
  }

  const maxOrder = Math.max(...existingExercises.map((e) => e.order));
  return maxOrder + 1;
}

export function reorderExercises(
  exercises: Array<{ id: string; order: number }>,
): Array<{ id: string; order: number }> {
  return exercises
    .sort((a, b) => a.order - b.order)
    .map((exercise, index) => ({
      ...exercise,
      order: index + 1,
    }));
}
