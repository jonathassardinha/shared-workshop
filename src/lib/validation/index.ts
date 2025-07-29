// Unified validation exports

export * from "./workshop";
export * from "./files";
export * from "./exercises";

// Re-export commonly used types and utilities
export type {
  CreateWorkshopInput,
  CompleteWorkshopInput,
  UpdateWorkshopInput,
  ExerciseInput,
} from "./workshop";

export type { FileContentInput, CompleteFileInput } from "./files";

export type { ExerciseValidationInput, ExerciseArrayInput } from "./exercises";

// Re-export validation functions
export {
  validateWorkshopTitle,
  validateWorkshopDescription,
  validateExerciseCount,
  validateFileCount,
} from "./workshop";

export {
  validateFilename,
  validateFileContent,
  validateFileSize,
  validateFileEncoding,
  validateFileExtension,
  validateCompleteFile,
  sanitizeFileContent,
  getFileLanguageFromExtension,
  formatFileSize,
} from "./files";

export {
  validateExerciseTitle,
  validateExerciseDescription,
  validateExerciseOrder,
  validateExerciseFileCount,
  validateExerciseTitlesUnique,
  validateExerciseOrderSequential,
  validateCompleteExercise,
  validateExerciseArray,
  generateExerciseOrder,
  reorderExercises,
} from "./exercises";

// Re-export constants
export { WORKSHOP_CONSTRAINTS } from "./workshop";

export { FILE_VALIDATION } from "./files";

export { EXERCISE_VALIDATION } from "./exercises";
