"use client";

import { useState, useCallback } from "react";
import {
  EditorProvider,
  EditorLayout,
  useEditor,
  type MonacoFile,
} from "../Editor";
import {
  FILE_TEMPLATES,
  getComponentNameFromFilename,
  getFileLanguage,
  validateFilename,
} from "../../lib/constants";

interface CreateWorkshopEditorProps {
  files: Record<string, MonacoFile>;
  onSave?: () => void;
  onFilesChange: (files: Record<string, MonacoFile>) => void;
  onDeleteFile: (filePath: string) => void;
  onAddNewFile: (fileName: string, language: string, model: string) => void;
}

function CreateFileDialog() {
  const { files, onAddNewFile } = useEditor();
  const [showCreateFileDialog, setShowCreateFileDialog] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCreateFile = () => {
    // Clear previous errors
    setError(null);

    // Validate filename
    const validation = validateFilename(newFileName);
    if (!validation.isValid) {
      setError(validation.error!);
      return;
    }

    const fileName = newFileName.startsWith("/")
      ? newFileName
      : `/${newFileName}`;

    // Check for duplicates
    if (files[fileName]) {
      setError("File already exists!");
      return;
    }

    const extension = fileName.split(".").pop()?.toLowerCase() ?? "";
    const language = getFileLanguage(extension);

    // Generate content using templates
    let defaultContent = "";
    const nameWithoutSlash = fileName.replace(/^\//, "");
    const nameWithoutExtension = nameWithoutSlash.replace(/\.[^/.]+$/, "");

    if (extension in FILE_TEMPLATES) {
      const template = FILE_TEMPLATES[extension as keyof typeof FILE_TEMPLATES];

      if (extension === "tsx" || extension === "jsx") {
        const componentName = getComponentNameFromFilename(fileName);
        defaultContent = template(componentName);
      } else {
        defaultContent = template(nameWithoutExtension);
      }
    } else {
      // Fallback for unsupported extensions
      defaultContent = `// ${nameWithoutSlash}\n// New file created\n`;
    }

    onAddNewFile?.(fileName, language, defaultContent);
    setNewFileName("");
    setShowCreateFileDialog(false);
    setError(null);
  };

  const handleInputChange = (value: string) => {
    setNewFileName(value);
    setError(null); // Clear error when user starts typing
  };

  const handleCancel = () => {
    setShowCreateFileDialog(false);
    setNewFileName("");
    setError(null);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-medium text-gray-200">Exercise Files</h3>
          <button
            onClick={() => setShowCreateFileDialog(true)}
            className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
          >
            + New File
          </button>
        </div>
        <div className="text-xs text-gray-400">Auto-save enabled</div>
      </div>

      {showCreateFileDialog && (
        <div className="border-b border-gray-700 bg-gray-800 px-4 py-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newFileName}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter filename (e.g., Button.tsx)"
                className="flex-1 rounded border border-gray-600 bg-gray-800 px-3 py-1 text-sm text-white focus:border-blue-500 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateFile();
                  if (e.key === "Escape") handleCancel();
                }}
                autoFocus
              />
              <button
                onClick={handleCreateFile}
                disabled={!newFileName.trim()}
                className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700 disabled:bg-gray-600"
              >
                Create
              </button>
              <button
                onClick={handleCancel}
                className="rounded bg-gray-600 px-3 py-1 text-sm text-white hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <p className="text-xs text-gray-500">
              Supported: .tsx, .ts, .jsx, .js, .css, .html, .json, .md
            </p>
          </div>
        </div>
      )}

      <div className="flex min-h-0 flex-1">
        <div className="flex-1">
          <EditorLayout />
        </div>
      </div>
    </>
  );
}

export function CreateWorkshopEditor({
  files,
  onSave,
  onFilesChange,
  onDeleteFile,
  onAddNewFile,
}: CreateWorkshopEditorProps) {
  // Enhanced file change handler with immediate auto-save
  const handleFilesChange = useCallback(
    (newFiles: Record<string, MonacoFile>) => {
      // Immediately update the form state
      onFilesChange(newFiles);
    },
    [onFilesChange],
  );

  return (
    <EditorProvider
      mode="create"
      userRole="lecturer"
      initialFiles={files}
      onSave={onSave}
      onFilesChange={handleFilesChange}
      onDeleteFile={onDeleteFile}
      onAddNewFile={onAddNewFile}
    >
      <div className="flex h-full flex-col">
        <CreateFileDialog />
      </div>
    </EditorProvider>
  );
}
