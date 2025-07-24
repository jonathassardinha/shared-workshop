"use client";

import {
  createContext,
  useContext,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import { atom, useAtom } from "jotai";

export type EditorMode = "create" | "edit" | "view" | "submit";
export type UserRole = "lecturer" | "participant";

export type MonacoFile = {
  language: string;
  model: string;
};

export interface EditorContextType {
  mode: EditorMode;
  userRole: UserRole;
  canCreateFiles: boolean;
  canDeleteFiles: boolean;
  canSubmit: boolean;
  canSave: boolean;
  onSubmit?: () => void;
  onSave?: () => void;
  files: Record<string, MonacoFile>;
  setFiles: (files: Record<string, MonacoFile>) => void;
}

const EditorContext = createContext<EditorContextType | null>(null);

export interface EditorProviderProps {
  children: ReactNode;
  mode: EditorMode;
  userRole: UserRole;
  initialFiles: Record<string, MonacoFile>;
  onSubmit?: () => void;
  onSave?: () => void;
  onFilesChange?: (files: Record<string, MonacoFile>) => void;
}

export function EditorProvider({
  children,
  mode,
  userRole,
  initialFiles,
  onSubmit,
  onSave,
  onFilesChange,
}: EditorProviderProps) {
  const filesAtom = useMemo(() => atom(initialFiles), [initialFiles]);
  const [files, setFiles] = useAtom(filesAtom);

  // Sync file changes to parent component
  useEffect(() => {
    if (onFilesChange && files !== initialFiles) {
      onFilesChange(files);
    }
  }, [files, onFilesChange, initialFiles]);

  // Update internal state when initialFiles changes
  useEffect(() => {
    setFiles(initialFiles);
  }, [initialFiles, setFiles]);

  const contextValue: EditorContextType = useMemo(() => {
    const canCreateFiles =
      mode === "create" || (mode === "edit" && userRole === "lecturer");
    const canDeleteFiles =
      mode === "create" || (mode === "edit" && userRole === "lecturer");
    const canSubmit =
      mode === "submit" || (mode === "edit" && userRole === "participant");
    const canSave = mode === "create" || userRole === "lecturer";

    return {
      mode,
      userRole,
      canCreateFiles,
      canDeleteFiles,
      canSubmit,
      canSave,
      onSubmit,
      onSave,
      files,
      setFiles,
    };
  }, [mode, userRole, onSubmit, onSave, files, setFiles]);

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
}
