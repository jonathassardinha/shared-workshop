"use client";

import {
  EditorProvider,
  EditorLayout,
  type MonacoFile,
  type UserRole,
} from "../Editor";

interface LiveWorkshopEditorProps {
  files: Record<string, MonacoFile>;
  userRole: UserRole;
  onSubmit?: () => void;
  onSave?: () => void;
}

export function LiveWorkshopEditor({
  files,
  userRole,
  onSubmit,
  onSave,
}: LiveWorkshopEditorProps) {
  return (
    <EditorProvider
      mode="edit"
      userRole={userRole}
      initialFiles={files}
      onSubmit={onSubmit}
      onSave={onSave}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
          <h3 className="text-sm font-medium text-gray-200">
            {userRole === "participant"
              ? "Workshop Exercise"
              : "Live Workshop - Manage Exercise"}
          </h3>
          <div className="flex gap-2">
            {userRole === "participant" && onSubmit && (
              <button
                onClick={onSubmit}
                className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
              >
                Submit Solution
              </button>
            )}
            {userRole === "lecturer" && onSave && (
              <button
                onClick={onSave}
                className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
        <div className="flex-1">
          <EditorLayout />
        </div>
      </div>
    </EditorProvider>
  );
}
