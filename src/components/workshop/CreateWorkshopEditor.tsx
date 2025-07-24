"use client";

import { useState } from "react";
import {
  EditorProvider,
  EditorLayout,
  useEditor,
  type MonacoFile,
} from "../Editor";

interface CreateWorkshopEditorProps {
  files: Record<string, MonacoFile>;
  onSave: () => void;
  onFilesChange: (files: Record<string, MonacoFile>) => void;
}

function CreateFileDialog({ onSave }: { onSave?: () => void }) {
  const { files, setFiles } = useEditor();
  const [showCreateFileDialog, setShowCreateFileDialog] = useState(false);
  const [newFileName, setNewFileName] = useState("");

  const handleCreateFile = () => {
    if (!newFileName.trim()) return;

    const fileName = newFileName.startsWith("/")
      ? newFileName
      : `/${newFileName}`;
    const extension = fileName.split(".").pop()?.toLowerCase();

    let language = "typescript";
    let defaultContent = "";

    if (extension === "tsx" || extension === "ts") {
      language = "typescript";
      defaultContent = `// New ${extension} file\nexport default function Component() {\n  return <div>New component</div>;\n}`;
    } else if (extension === "css") {
      language = "css";
      defaultContent = "/* New CSS file */\n";
    } else if (extension === "html") {
      language = "html";
      defaultContent =
        "<!DOCTYPE html>\n<html>\n<head>\n  <title>New HTML file</title>\n</head>\n<body>\n  \n</body>\n</html>";
    } else if (extension === "js" || extension === "jsx") {
      language = "javascript";
      defaultContent = `// New ${extension} file\nexport default function Component() {\n  return <div>New component</div>;\n}`;
    }

    const newFiles = {
      ...files,
      [fileName]: {
        language,
        model: defaultContent,
      },
    };

    setFiles(newFiles);
    setNewFileName("");
    setShowCreateFileDialog(false);
  };

  const handleDeleteFile = (filePath: string) => {
    const newFiles = { ...files };
    delete newFiles[filePath];
    setFiles(newFiles);
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
        {onSave && (
          <button
            onClick={onSave}
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            Save Files
          </button>
        )}
      </div>

      {showCreateFileDialog && (
        <div className="bg-gray-750 border-b border-gray-700 px-4 py-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              placeholder="Enter filename (e.g., component.tsx)"
              className="flex-1 rounded border border-gray-600 bg-gray-800 px-3 py-1 text-sm text-white focus:border-blue-500 focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateFile();
                if (e.key === "Escape") setShowCreateFileDialog(false);
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
              onClick={() => setShowCreateFileDialog(false)}
              className="rounded bg-gray-600 px-3 py-1 text-sm text-white hover:bg-gray-700"
            >
              Cancel
            </button>
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
}: CreateWorkshopEditorProps) {
  return (
    <EditorProvider
      mode="create"
      userRole="lecturer"
      initialFiles={files}
      onSave={onSave}
      onFilesChange={onFilesChange}
    >
      <div className="flex h-full flex-col">
        <CreateFileDialog onSave={onSave} />
      </div>
    </EditorProvider>
  );
}
