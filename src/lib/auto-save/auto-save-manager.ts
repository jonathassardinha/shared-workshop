// Auto-save functionality for workshop creation

import React from "react";
import { DraftManager, type DraftData } from "../errors/recovery";

export interface AutoSaveConfig {
  enabled: boolean;
  interval: number; // milliseconds
  maxDraftAge: number; // days
  saveOnBlur: boolean;
  saveOnChange: boolean;
  minChangeThreshold: number; // minimum characters changed to trigger save
}

export const DEFAULT_AUTO_SAVE_CONFIG: AutoSaveConfig = {
  enabled: true,
  interval: 30000, // 30 seconds
  maxDraftAge: 7, // 7 days
  saveOnBlur: true,
  saveOnChange: false,
  minChangeThreshold: 10, // 10 characters
};

export interface AutoSaveState {
  isEnabled: boolean;
  lastSaved: number | null;
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  draftId: string | null;
  error: string | null;
}

export interface WorkshopData {
  title: string;
  description: string;
  exercises: Array<{
    id: string;
    title: string;
    description: string;
    order: number;
    files: Record<string, { language: string; content: string }>;
  }>;
}

export class AutoSaveManager {
  private config: AutoSaveConfig;
  private state: AutoSaveState;
  private intervalId: NodeJS.Timeout | null = null;
  private lastData: WorkshopData | null = null;
  private changeCount = 0;
  private onStateChange?: (state: AutoSaveState) => void;

  constructor(config: Partial<AutoSaveConfig> = {}) {
    this.config = { ...DEFAULT_AUTO_SAVE_CONFIG, ...config };
    this.state = {
      isEnabled: this.config.enabled,
      lastSaved: null,
      isSaving: false,
      hasUnsavedChanges: false,
      draftId: null,
      error: null,
    };
  }

  // Initialize auto-save with data
  initialize(
    data: WorkshopData,
    onStateChange?: (state: AutoSaveState) => void,
  ): void {
    this.lastData = data;
    this.onStateChange = onStateChange;

    if (this.config.enabled) {
      this.startPeriodicSave();
    }

    this.updateState({ hasUnsavedChanges: false });
  }

  // Update data and trigger auto-save if needed
  updateData(data: WorkshopData, triggerSave = false): void {
    const hasChanged = this.hasDataChanged(data);
    this.lastData = data;
    this.changeCount++;

    if (hasChanged) {
      this.updateState({ hasUnsavedChanges: true });

      if (triggerSave && this.config.saveOnChange) {
        this.saveDraft();
      }
    }
  }

  // Handle blur events
  onBlur(): void {
    if (this.config.saveOnBlur && this.state.hasUnsavedChanges) {
      this.saveDraft();
    }
  }

  // Manual save
  async saveDraft(): Promise<string | null> {
    if (!this.lastData || this.state.isSaving) {
      return null;
    }

    this.updateState({ isSaving: true, error: null });

    try {
      const draftId = DraftManager.saveDraft({
        title: this.lastData.title,
        description: this.lastData.description,
        exercises: this.lastData.exercises,
      });

      if (draftId) {
        this.updateState({
          isSaving: false,
          hasUnsavedChanges: false,
          lastSaved: Date.now(),
          draftId,
        });
        return draftId;
      } else {
        throw new Error("Failed to save draft");
      }
    } catch (error) {
      this.updateState({
        isSaving: false,
        error: error instanceof Error ? error.message : "Failed to save draft",
      });
      return null;
    }
  }

  // Load draft
  loadDraft(draftId: string): WorkshopData | null {
    const draft = DraftManager.loadDraft(draftId);
    if (draft) {
      this.lastData = {
        title: draft.title,
        description: draft.description,
        exercises: draft.exercises,
      };
      this.updateState({
        hasUnsavedChanges: false,
        lastSaved: draft.timestamp,
        draftId,
      });
      return this.lastData;
    }
    return null;
  }

  // Delete draft
  deleteDraft(draftId: string): void {
    DraftManager.deleteDraft(draftId);
    if (this.state.draftId === draftId) {
      this.updateState({ draftId: null });
    }
  }

  // Get current state
  getState(): AutoSaveState {
    return { ...this.state };
  }

  // Update configuration
  updateConfig(config: Partial<AutoSaveConfig>): void {
    this.config = { ...this.config, ...config };

    if (this.config.enabled && !this.intervalId) {
      this.startPeriodicSave();
    } else if (!this.config.enabled && this.intervalId) {
      this.stopPeriodicSave();
    }

    this.updateState({ isEnabled: this.config.enabled });
  }

  // Cleanup
  destroy(): void {
    this.stopPeriodicSave();
    this.lastData = null;
    this.onStateChange = undefined;
  }

  // Private methods
  private startPeriodicSave(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      if (this.state.hasUnsavedChanges && !this.state.isSaving) {
        this.saveDraft();
      }
    }, this.config.interval);
  }

  private stopPeriodicSave(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private hasDataChanged(newData: WorkshopData): boolean {
    if (!this.lastData) return true;

    // Simple change detection - in a real app, you might want more sophisticated diffing
    const oldDataStr = JSON.stringify(this.lastData);
    const newDataStr = JSON.stringify(newData);

    return oldDataStr !== newDataStr;
  }

  private updateState(updates: Partial<AutoSaveState>): void {
    this.state = { ...this.state, ...updates };
    this.onStateChange?.(this.state);
  }
}

// Auto-save hook for React components
export function useAutoSave(
  data: WorkshopData,
  config: Partial<AutoSaveConfig> = {},
): {
  state: AutoSaveState;
  saveDraft: () => Promise<string | null>;
  loadDraft: (draftId: string) => WorkshopData | null;
  deleteDraft: (draftId: string) => void;
  updateConfig: (config: Partial<AutoSaveConfig>) => void;
} {
  const [state, setState] = React.useState<AutoSaveState>({
    isEnabled: config.enabled ?? DEFAULT_AUTO_SAVE_CONFIG.enabled,
    lastSaved: null,
    isSaving: false,
    hasUnsavedChanges: false,
    draftId: null,
    error: null,
  });

  const managerRef = React.useRef<AutoSaveManager | null>(null);

  React.useEffect(() => {
    if (!managerRef.current) {
      managerRef.current = new AutoSaveManager(config);
    }

    managerRef.current.initialize(data, setState);

    return () => {
      managerRef.current?.destroy();
    };
  }, []);

  React.useEffect(() => {
    if (managerRef.current) {
      managerRef.current.updateData(data);
    }
  }, [data]);

  const saveDraft = React.useCallback(async (): Promise<string | null> => {
    return managerRef.current?.saveDraft() ?? null;
  }, []);

  const loadDraft = React.useCallback(
    (draftId: string): WorkshopData | null => {
      return managerRef.current?.loadDraft(draftId) ?? null;
    },
    [],
  );

  const deleteDraft = React.useCallback((draftId: string): void => {
    managerRef.current?.deleteDraft(draftId);
  }, []);

  const updateConfig = React.useCallback(
    (newConfig: Partial<AutoSaveConfig>): void => {
      managerRef.current?.updateConfig(newConfig);
    },
    [],
  );

  return {
    state,
    saveDraft,
    loadDraft,
    deleteDraft,
    updateConfig,
  };
}

// Utility functions
export function formatLastSaved(timestamp: number | null): string {
  if (!timestamp) return "Never";

  const now = Date.now();
  const diff = now - timestamp;

  if (diff < 60000) return "Just now";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
}

export function getAutoSaveStatus(state: AutoSaveState): {
  status: "saved" | "saving" | "unsaved" | "error";
  message: string;
} {
  if (state.error) {
    return { status: "error", message: state.error };
  }

  if (state.isSaving) {
    return { status: "saving", message: "Saving..." };
  }

  if (state.hasUnsavedChanges) {
    return { status: "unsaved", message: "Unsaved changes" };
  }

  if (state.lastSaved) {
    return {
      status: "saved",
      message: `Last saved ${formatLastSaved(state.lastSaved)}`,
    };
  }

  return { status: "saved", message: "No changes" };
}
