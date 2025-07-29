import { z } from "zod";

// Database constraint validation
export const WORKSHOP_CONSTRAINTS = {
  TITLE_MIN_LENGTH: 3,
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MIN_LENGTH: 10,
  DESCRIPTION_MAX_LENGTH: 1000,
  MAX_EXERCISES: 10,
  MIN_EXERCISES: 1,
  MAX_FILES_PER_EXERCISE: 50,
  MAX_FILE_SIZE: 1024 * 1024, // 1MB
} as const;

// Enhanced workshop creation validation schema
export const createWorkshopSchema = z.object({
  title: z
    .string()
    .min(
      WORKSHOP_CONSTRAINTS.TITLE_MIN_LENGTH,
      `Title must be at least ${WORKSHOP_CONSTRAINTS.TITLE_MIN_LENGTH} characters`,
    )
    .max(
      WORKSHOP_CONSTRAINTS.TITLE_MAX_LENGTH,
      `Title must be less than ${WORKSHOP_CONSTRAINTS.TITLE_MAX_LENGTH} characters`,
    )
    .regex(
      /^[a-zA-Z0-9\s\-_]+$/,
      "Title contains invalid characters. Only letters, numbers, spaces, hyphens, and underscores are allowed",
    )
    .trim(),
  description: z
    .string()
    .min(
      WORKSHOP_CONSTRAINTS.DESCRIPTION_MIN_LENGTH,
      `Description must be at least ${WORKSHOP_CONSTRAINTS.DESCRIPTION_MIN_LENGTH} characters`,
    )
    .max(
      WORKSHOP_CONSTRAINTS.DESCRIPTION_MAX_LENGTH,
      `Description must be less than ${WORKSHOP_CONSTRAINTS.DESCRIPTION_MAX_LENGTH} characters`,
    )
    .trim(),
  status: z
    .enum(["PLANNED", "LIVE", "COMPLETED"])
    .optional()
    .default("PLANNED"),
});

// Exercise validation schema
export const exerciseSchema = z.object({
  id: z.string().min(1, "Exercise ID is required"),
  title: z
    .string()
    .min(1, "Exercise title is required")
    .max(200, "Exercise title must be less than 200 characters")
    .trim(),
  description: z
    .string()
    .max(500, "Exercise description must be less than 500 characters")
    .trim(),
  order: z.number().int().positive("Exercise order must be a positive integer"),
  files: z.record(
    z.object({
      language: z.string().min(1, "Language is required"),
      model: z
        .string()
        .max(WORKSHOP_CONSTRAINTS.MAX_FILE_SIZE, "File content too large"),
    }),
  ),
});

// Complete workshop creation schema
export const completeWorkshopSchema = createWorkshopSchema.extend({
  exercises: z
    .array(exerciseSchema)
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
    ),
});

// Workshop update schema (without exercises)
export const updateWorkshopSchema = createWorkshopSchema.partial();

// Type exports
export type CreateWorkshopInput = z.infer<typeof createWorkshopSchema>;
export type CompleteWorkshopInput = z.infer<typeof completeWorkshopSchema>;
export type UpdateWorkshopInput = z.infer<typeof updateWorkshopSchema>;
export type ExerciseInput = z.infer<typeof exerciseSchema>;

// Validation utilities
export function validateWorkshopTitle(title: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    createWorkshopSchema.shape.title.parse(title);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid title",
      };
    }
    return { isValid: false, error: "Invalid title" };
  }
}

export function validateWorkshopDescription(description: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    createWorkshopSchema.shape.description.parse(description);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid description",
      };
    }
    return { isValid: false, error: "Invalid description" };
  }
}

export function validateExerciseCount(count: number): {
  isValid: boolean;
  error?: string;
} {
  if (count < WORKSHOP_CONSTRAINTS.MIN_EXERCISES) {
    return {
      isValid: false,
      error: `At least ${WORKSHOP_CONSTRAINTS.MIN_EXERCISES} exercise is required`,
    };
  }
  if (count > WORKSHOP_CONSTRAINTS.MAX_EXERCISES) {
    return {
      isValid: false,
      error: `Maximum ${WORKSHOP_CONSTRAINTS.MAX_EXERCISES} exercises allowed`,
    };
  }
  return { isValid: true };
}

export function validateFileCount(count: number): {
  isValid: boolean;
  error?: string;
} {
  if (count > WORKSHOP_CONSTRAINTS.MAX_FILES_PER_EXERCISE) {
    return {
      isValid: false,
      error: `Maximum ${WORKSHOP_CONSTRAINTS.MAX_FILES_PER_EXERCISE} files per exercise allowed`,
    };
  }
  return { isValid: true };
}
