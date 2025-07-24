"use client";

import { EditorProvider, EditorLayout, type MonacoFile } from "../Editor";

const defaultCreateFiles: Record<string, MonacoFile> = {
  "/App.tsx": {
    language: "typescript",
    model: `import { Test } from "./test";

const App = () => {
  return <div>Hello, World! <Test /></div>;
};

export default App;`,
  },
  "/test.tsx": {
    language: "typescript",
    model: `export const Test = () => {
  return <div>Test component</div>;
};`,
  },
};

interface CreateWorkshopEditorProps {
  files?: Record<string, MonacoFile>;
  onSave?: () => void;
}

export function CreateWorkshopEditor({
  files = defaultCreateFiles,
  onSave,
}: CreateWorkshopEditorProps) {
  return (
    <EditorProvider
      mode="create"
      userRole="lecturer"
      initialFiles={files}
      onSave={onSave}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
          <h3 className="text-sm font-medium text-gray-200">Exercise Files</h3>
          {onSave && (
            <button
              onClick={onSave}
              className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
            >
              Save Files
            </button>
          )}
        </div>
        <div className="flex-1">
          <EditorLayout />
        </div>
      </div>
    </EditorProvider>
  );
}
