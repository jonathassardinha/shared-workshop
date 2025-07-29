// Error recovery utilities for automatic recovery and fallback mechanisms

import type { Logger } from "../Logger/Logger.utils";
import type { WorkshopError } from "./workshop-errors";
import {
  getRecoveryStrategy,
  shouldRetryError,
  getRetryDelay,
  WorkshopErrorType,
} from "./workshop-errors";

export interface RecoveryContext {
  action: string;
  data?: unknown;
  timestamp: number;
  attempts: number;
  maxAttempts: number;
}

export interface RecoveryResult {
  success: boolean;
  error?: WorkshopError;
  recoveredData?: unknown;
  action: "retry" | "fallback" | "abort";
  nextAttempt?: number;
}

export interface DraftData {
  id: string;
  title: string;
  description: string;
  exercises: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
    files: Record<string, { language: string; content: string }>;
  }>;
  timestamp: number;
  expiresAt: number;
}

// Auto-save draft functionality
export class DraftManager {
  private static readonly DRAFT_PREFIX = "workshop-draft-";
  private static readonly DRAFT_EXPIRY_DAYS = 7;

  static saveDraft(
    logger: Logger,
    data: Omit<DraftData, "id" | "timestamp" | "expiresAt">,
  ): string {
    const id = `${this.DRAFT_PREFIX}${Date.now()}`;
    const timestamp = Date.now();
    const expiresAt = timestamp + this.DRAFT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    const draftData: DraftData = {
      id,
      ...data,
      timestamp,
      expiresAt,
    };

    try {
      localStorage.setItem(id, JSON.stringify(draftData));
      return id;
    } catch (error) {
      logger.error("Failed to save draft:", error);
      return "";
    }
  }

  static loadDraft(logger: Logger, id: string): DraftData | null {
    try {
      const data = localStorage.getItem(id);
      if (!data) return null;

      const draftData: DraftData = JSON.parse(data) as DraftData;

      // Check if draft has expired
      if (Date.now() > draftData.expiresAt) {
        this.deleteDraft(logger, id);
        return null;
      }

      return draftData;
    } catch (error) {
      logger.error("Failed to load draft:", error);
      return null;
    }
  }

  static deleteDraft(logger: Logger, id: string): void {
    try {
      localStorage.removeItem(id);
    } catch (error) {
      logger.error("Failed to delete draft:", error);
    }
  }

  static listDrafts(
    logger: Logger,
  ): Array<{ id: string; title: string; timestamp: number }> {
    const drafts: Array<{ id: string; title: string; timestamp: number }> = [];

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(this.DRAFT_PREFIX)) {
          const data = localStorage.getItem(key);
          if (data) {
            try {
              const draftData: DraftData = JSON.parse(data) as DraftData;
              if (Date.now() <= draftData.expiresAt) {
                drafts.push({
                  id: draftData.id,
                  title: draftData.title,
                  timestamp: draftData.timestamp,
                });
              } else {
                // Clean up expired drafts
                this.deleteDraft(logger, key);
              }
            } catch {
              // Invalid draft data, clean it up
              this.deleteDraft(logger, key);
            }
          }
        }
      }
    } catch (error) {
      logger.error("Failed to list drafts:", error);
    }

    return drafts.sort((a, b) => b.timestamp - a.timestamp);
  }

  static cleanupExpiredDrafts(logger: Logger): number {
    let cleanedCount = 0;
    const drafts = this.listDrafts(logger);

    for (const draft of drafts) {
      const draftData = this.loadDraft(logger, draft.id);
      if (!draftData) {
        this.deleteDraft(logger, draft.id);
        cleanedCount++;
      }
    }

    return cleanedCount;
  }
}

// Retry mechanism with exponential backoff
export class RetryManager {
  static async retryWithBackoff<T>(
    operation: () => Promise<T>,
    error: WorkshopError,
    context: RecoveryContext,
  ): Promise<RecoveryResult> {
    const strategy = getRecoveryStrategy(error);

    if (
      !shouldRetryError(error) ||
      context.attempts >= strategy.retryAttempts
    ) {
      return {
        success: false,
        error,
        action: "abort",
      };
    }

    const delay = getRetryDelay(error, context.attempts);

    try {
      await new Promise((resolve) => setTimeout(resolve, delay));
      const result = await operation();

      return {
        success: true,
        recoveredData: result,
        action: "retry",
      };
    } catch (retryError) {
      const nextAttempt = context.attempts + 1;

      if (nextAttempt >= strategy.retryAttempts) {
        return {
          success: false,
          error: classifyError(retryError),
          action: "fallback",
        };
      }

      return {
        success: false,
        error: classifyError(retryError),
        action: "retry",
        nextAttempt,
      };
    }
  }

  static async retryOperation<T>(
    operation: () => Promise<T>,
    maxAttempts = 3,
    baseDelay = 1000,
  ): Promise<T> {
    let lastError: unknown;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;

        if (attempt === maxAttempts) {
          throw error;
        }

        const delay = baseDelay * Math.pow(2, attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }
}

// Error recovery orchestrator
export class RecoveryOrchestrator {
  static async handleError<T>(
    logger: Logger,
    error: WorkshopError,
    context: RecoveryContext,
  ): Promise<RecoveryResult> {
    const strategy = getRecoveryStrategy(error);

    // Log the error
    logWorkshopError(logger, error, context);

    // Try retry if applicable
    if (shouldRetryError(error) && context.attempts < strategy.retryAttempts) {
      const retryResult = await RetryManager.retryWithBackoff(
        () => Promise.resolve() as Promise<T>, // Placeholder, would be the actual operation
        error,
        context,
      );

      if (retryResult.success) {
        return retryResult;
      }
    }

    // Try fallback action
    switch (strategy.fallbackAction) {
      case "save-draft":
        return this.handleDraftSave(error, context, logger);
      case "show-error":
        return {
          success: false,
          error,
          action: "abort",
        };
      case "reload":
        return this.handleReload(error);
      default:
        return {
          success: false,
          error,
          action: "abort",
        };
    }
  }

  private static handleDraftSave(
    error: WorkshopError,
    context: RecoveryContext,
    logger: Logger,
  ): RecoveryResult {
    try {
      if (context.data) {
        const draftId = DraftManager.saveDraft(
          logger,
          context.data as Omit<DraftData, "id" | "timestamp" | "expiresAt">,
        );
        if (draftId) {
          return {
            success: true,
            action: "fallback",
            recoveredData: { draftId, message: "Changes saved as draft" },
          };
        }
      }
    } catch (draftError) {
      logger.error("Failed to save draft:", draftError);
    }

    return {
      success: false,
      error,
      action: "abort",
    };
  }

  private static handleReload(error: WorkshopError): RecoveryResult {
    // In a real application, you might want to reload the page or component
    return {
      success: false,
      error,
      action: "abort",
    };
  }
}

// Session recovery utilities
export class SessionRecovery {
  private static readonly SESSION_KEY = "workshop-session-data";

  static saveSessionData(logger: Logger, data: unknown): void {
    try {
      const sessionData = {
        data,
        timestamp: Date.now(),
      };
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    } catch (error) {
      logger.error("Failed to save session data:", error);
    }
  }

  static loadSessionData(logger: Logger): unknown {
    try {
      const data = sessionStorage.getItem(this.SESSION_KEY);
      if (!data) return null;

      const sessionData = JSON.parse(data) as { data: unknown };
      return sessionData.data;
    } catch (error) {
      logger.error("Failed to load session data:", error);
      return null;
    }
  }

  static clearSessionData(logger: Logger): void {
    try {
      sessionStorage.removeItem(this.SESSION_KEY);
    } catch (error) {
      logger.error("Failed to clear session data:", error);
    }
  }
}

// Network recovery utilities
export class NetworkRecovery {
  static isOnline(): boolean {
    return typeof navigator !== "undefined" && navigator.onLine;
  }

  static async waitForConnection(timeout = 30000): Promise<boolean> {
    if (this.isOnline()) return true;

    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => resolve(false), timeout);

      const handleOnline = () => {
        clearTimeout(timeoutId);
        window.removeEventListener("online", handleOnline);
        resolve(true);
      };

      window.addEventListener("online", handleOnline);
    });
  }

  static async retryOnConnection(
    operation: () => Promise<unknown>,
    timeout = 30000,
  ): Promise<unknown> {
    if (this.isOnline()) {
      return operation();
    }

    const connected = await this.waitForConnection(timeout);
    if (connected) {
      return operation();
    }

    throw new Error("No internet connection available");
  }
}

// Helper function to classify errors (imported from workshop-errors)
function classifyError(error: unknown): WorkshopError {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    if (
      message.includes("database") ||
      message.includes("sql") ||
      message.includes("prisma")
    ) {
      return {
        type: WorkshopErrorType.DATABASE_ERROR,
        message: error.message,
        recoverable: true,
        retryable: true,
        timestamp: Date.now(),
      };
    }

    if (
      message.includes("network") ||
      message.includes("fetch") ||
      message.includes("timeout")
    ) {
      return {
        type: WorkshopErrorType.NETWORK_ERROR,
        message: error.message,
        recoverable: true,
        retryable: true,
        timestamp: Date.now(),
      };
    }
  }

  return {
    type: WorkshopErrorType.UNKNOWN_ERROR,
    message: "An unexpected error occurred",
    recoverable: false,
    retryable: false,
    timestamp: Date.now(),
  };
}

// Helper function to log errors (imported from workshop-errors)
function logWorkshopError(
  logger: Logger,
  error: WorkshopError,
  context?: RecoveryContext,
): void {
  const logData = {
    type: error.type,
    message: error.message,
    code: error.code,
    details: error.details,
    recoverable: error.recoverable,
    retryable: error.retryable,
    timestamp: error.timestamp,
    context,
  };

  // In a real application, you would send this to your logging service
  logger.error("Workshop Error:", logData);
}
