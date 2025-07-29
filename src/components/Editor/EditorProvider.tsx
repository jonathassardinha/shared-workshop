"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

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
  onDeleteFile: (filePath: string) => void;
  onAddNewFile: (fileName: string, language: string, model: string) => void;
  files: Record<string, MonacoFile>;
  onFilesChange: (files: Record<string, MonacoFile>) => void;
}

const EditorContext = createContext<EditorContextType | null>(null);

export interface EditorProviderProps {
  children: ReactNode;
  mode: EditorMode;
  userRole: UserRole;
  initialFiles: Record<string, MonacoFile>;
  onFilesChange: (files: Record<string, MonacoFile>) => void;
  onSubmit?: () => void;
  onSave?: () => void;
  onAddNewFile: (fileName: string, language: string, model: string) => void;
  onDeleteFile: (filePath: string) => void;
}

export function EditorProvider({
  children,
  mode,
  userRole,
  initialFiles,
  onSubmit,
  onSave,
  onFilesChange,
  onAddNewFile,
  onDeleteFile,
}: EditorProviderProps) {
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
      onAddNewFile,
      onDeleteFile,
      files: initialFiles,
      onFilesChange,
    };
  }, [
    mode,
    userRole,
    onSubmit,
    onSave,
    onAddNewFile,
    onDeleteFile,
    onFilesChange,
    initialFiles,
  ]);

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
