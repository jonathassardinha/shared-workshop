"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
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
}

export function EditorProvider({
  children,
  mode,
  userRole,
  initialFiles,
  onSubmit,
  onSave,
}: EditorProviderProps) {
  const filesAtom = useMemo(() => atom(initialFiles), [initialFiles]);
  const [files, setFiles] = useAtom(filesAtom);

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
