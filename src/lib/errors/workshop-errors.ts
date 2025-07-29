// Workshop-specific error handling utilities

export enum WorkshopErrorType {
  VALIDATION_ERROR = "VALIDATION_ERROR",
  DATABASE_ERROR = "DATABASE_ERROR",
  AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
  PERMISSION_ERROR = "PERMISSION_ERROR",
  FILE_ERROR = "FILE_ERROR",
  NETWORK_ERROR = "NETWORK_ERROR",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface WorkshopError {
  type: WorkshopErrorType;
  message: string;
  code?: string;
  details?: Record<string, unknown>;
  recoverable: boolean;
  retryable: boolean;
  timestamp: number;
}

export interface ErrorRecoveryStrategy {
  retryAttempts: number;
  retryDelay: number;
  fallbackAction: "save-draft" | "show-error" | "reload";
  userNotification: boolean;
}

export const DEFAULT_ERROR_RECOVERY_STRATEGY: ErrorRecoveryStrategy = {
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
  fallbackAction: "save-draft",
  userNotification: true,
};

// Create workshop-specific errors
export function createValidationError(
  message: string,
  details?: Record<string, unknown>,
): WorkshopError {
  return {
    type: WorkshopErrorType.VALIDATION_ERROR,
    message,
    details,
    recoverable: true,
    retryable: false,
    timestamp: Date.now(),
  };
}

export function createDatabaseError(
  message: string,
  code?: string,
  details?: Record<string, unknown>,
): WorkshopError {
  return {
    type: WorkshopErrorType.DATABASE_ERROR,
    message,
    code,
    details,
    recoverable: true,
    retryable: true,
    timestamp: Date.now(),
  };
}

export function createAuthenticationError(message: string): WorkshopError {
  return {
    type: WorkshopErrorType.AUTHENTICATION_ERROR,
    message,
    recoverable: true,
    retryable: false,
    timestamp: Date.now(),
  };
}

export function createPermissionError(message: string): WorkshopError {
  return {
    type: WorkshopErrorType.PERMISSION_ERROR,
    message,
    recoverable: false,
    retryable: false,
    timestamp: Date.now(),
  };
}

export function createFileError(
  message: string,
  details?: Record<string, unknown>,
): WorkshopError {
  return {
    type: WorkshopErrorType.FILE_ERROR,
    message,
    details,
    recoverable: true,
    retryable: true,
    timestamp: Date.now(),
  };
}

export function createNetworkError(message: string): WorkshopError {
  return {
    type: WorkshopErrorType.NETWORK_ERROR,
    message,
    recoverable: true,
    retryable: true,
    timestamp: Date.now(),
  };
}

export function createUnknownError(
  message: string,
  details?: Record<string, unknown>,
): WorkshopError {
  return {
    type: WorkshopErrorType.UNKNOWN_ERROR,
    message,
    details,
    recoverable: false,
    retryable: false,
    timestamp: Date.now(),
  };
}

// Error classification utilities
export function classifyError(error: unknown): WorkshopError {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    // Database errors
    if (
      message.includes("database") ||
      message.includes("sql") ||
      message.includes("prisma")
    ) {
      return createDatabaseError(error.message);
    }

    // Authentication errors
    if (
      message.includes("auth") ||
      message.includes("session") ||
      message.includes("login")
    ) {
      return createAuthenticationError(error.message);
    }

    // Permission errors
    if (
      message.includes("permission") ||
      message.includes("access") ||
      message.includes("denied")
    ) {
      return createPermissionError(error.message);
    }

    // File errors
    if (
      message.includes("file") ||
      message.includes("content") ||
      message.includes("size")
    ) {
      return createFileError(error.message);
    }

    // Network errors
    if (
      message.includes("network") ||
      message.includes("fetch") ||
      message.includes("timeout")
    ) {
      return createNetworkError(error.message);
    }

    // Validation errors
    if (
      message.includes("validation") ||
      message.includes("invalid") ||
      message.includes("required")
    ) {
      return createValidationError(error.message);
    }
  }

  return createUnknownError("An unexpected error occurred", {
    originalError: error,
  });
}

// Error recovery utilities
export function shouldRetryError(error: WorkshopError): boolean {
  return error.retryable && error.type !== WorkshopErrorType.PERMISSION_ERROR;
}

export function getRetryDelay(error: WorkshopError, attempt: number): number {
  // Exponential backoff with jitter
  const baseDelay = 1000; // 1 second
  const maxDelay = 10000; // 10 seconds
  const delay = Math.min(baseDelay * Math.pow(2, attempt - 1), maxDelay);
  const jitter = Math.random() * 0.1 * delay; // 10% jitter
  return delay + jitter;
}

export function getErrorMessage(error: WorkshopError): string {
  switch (error.type) {
    case WorkshopErrorType.VALIDATION_ERROR:
      return `Please check your input: ${error.message}`;
    case WorkshopErrorType.DATABASE_ERROR:
      return `Database error: ${error.message}. Please try again.`;
    case WorkshopErrorType.AUTHENTICATION_ERROR:
      return `Authentication error: ${error.message}. Please log in again.`;
    case WorkshopErrorType.PERMISSION_ERROR:
      return `Access denied: ${error.message}`;
    case WorkshopErrorType.FILE_ERROR:
      return `File error: ${error.message}. Please check your files.`;
    case WorkshopErrorType.NETWORK_ERROR:
      return `Network error: ${error.message}. Please check your connection.`;
    case WorkshopErrorType.UNKNOWN_ERROR:
      return `An unexpected error occurred: ${error.message}`;
    default:
      return error.message;
  }
}

export function getErrorAction(error: WorkshopError): string {
  switch (error.type) {
    case WorkshopErrorType.VALIDATION_ERROR:
      return "Please fix the validation errors and try again.";
    case WorkshopErrorType.DATABASE_ERROR:
      return "The system encountered a database error. Your changes may have been saved as a draft.";
    case WorkshopErrorType.AUTHENTICATION_ERROR:
      return "Please log in again to continue.";
    case WorkshopErrorType.PERMISSION_ERROR:
      return "You don't have permission to perform this action.";
    case WorkshopErrorType.FILE_ERROR:
      return "Please check your files and try again.";
    case WorkshopErrorType.NETWORK_ERROR:
      return "Please check your internet connection and try again.";
    case WorkshopErrorType.UNKNOWN_ERROR:
      return "An unexpected error occurred. Please try again or contact support.";
    default:
      return "Please try again.";
  }
}

// Error logging utilities
export function logWorkshopError(
  error: WorkshopError,
  context?: Record<string, unknown>,
): void {
  // const logData = {
  //   type: error.type,
  //   message: error.message,
  //   code: error.code,
  //   details: error.details,
  //   recoverable: error.recoverable,
  //   retryable: error.retryable,
  //   timestamp: error.timestamp,
  //   context,
  // };
  // In a real application, you would send this to your logging service
  // Example: sendToLoggingService(logData);
  // For now, we'll use the logger utility
  // Logger.error("Workshop Error:", logData);
}

// Error aggregation utilities
export function aggregateErrors(errors: WorkshopError[]): {
  primaryError: WorkshopError;
  secondaryErrors: WorkshopError[];
  summary: string;
} {
  if (errors.length === 0) {
    throw new Error("Cannot aggregate empty error array");
  }

  // Sort by priority (non-recoverable first, then by type)
  const sortedErrors = errors.sort((a, b) => {
    if (a.recoverable !== b.recoverable) {
      return a.recoverable ? 1 : -1;
    }
    return a.type.localeCompare(b.type);
  });

  const primaryError = sortedErrors[0]!;
  const secondaryErrors = sortedErrors.slice(1);

  const summary =
    secondaryErrors.length > 0
      ? `${primaryError.message} (and ${secondaryErrors.length} other errors)`
      : primaryError.message;

  return {
    primaryError,
    secondaryErrors,
    summary,
  };
}

// Error recovery strategies
export function getRecoveryStrategy(
  error: WorkshopError,
): ErrorRecoveryStrategy {
  const baseStrategy = { ...DEFAULT_ERROR_RECOVERY_STRATEGY };

  switch (error.type) {
    case WorkshopErrorType.VALIDATION_ERROR:
      return {
        ...baseStrategy,
        retryAttempts: 0, // Don't retry validation errors
        fallbackAction: "show-error",
      };
    case WorkshopErrorType.DATABASE_ERROR:
      return {
        ...baseStrategy,
        retryAttempts: 5,
        retryDelay: 2000,
        fallbackAction: "save-draft",
      };
    case WorkshopErrorType.NETWORK_ERROR:
      return {
        ...baseStrategy,
        retryAttempts: 3,
        retryDelay: 1000,
        fallbackAction: "save-draft",
      };
    case WorkshopErrorType.FILE_ERROR:
      return {
        ...baseStrategy,
        retryAttempts: 2,
        fallbackAction: "show-error",
      };
    case WorkshopErrorType.PERMISSION_ERROR:
    case WorkshopErrorType.AUTHENTICATION_ERROR:
      return {
        ...baseStrategy,
        retryAttempts: 0,
        fallbackAction: "show-error",
      };
    default:
      return baseStrategy;
  }
}
