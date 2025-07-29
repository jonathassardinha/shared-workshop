// Unified error handling exports

export * from "./workshop-errors";
export * from "./recovery";

// Re-export commonly used types and utilities
export type { WorkshopError, ErrorRecoveryStrategy } from "./workshop-errors";

export type { RecoveryContext, RecoveryResult, DraftData } from "./recovery";

// Re-export error creation functions
export {
  createValidationError,
  createDatabaseError,
  createAuthenticationError,
  createPermissionError,
  createFileError,
  createNetworkError,
  createUnknownError,
} from "./workshop-errors";

// Re-export error utilities
export {
  classifyError,
  shouldRetryError,
  getRetryDelay,
  getErrorMessage,
  getErrorAction,
  logWorkshopError,
  aggregateErrors,
  getRecoveryStrategy,
} from "./workshop-errors";

// Re-export recovery utilities
export {
  DraftManager,
  RetryManager,
  RecoveryOrchestrator,
  SessionRecovery,
  NetworkRecovery,
} from "./recovery";

// Re-export constants
export {
  WorkshopErrorType,
  DEFAULT_ERROR_RECOVERY_STRATEGY,
} from "./workshop-errors";
