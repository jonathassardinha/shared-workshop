"use client";

import {
  SandpackPreview,
  SandpackProvider,
  type SandpackFiles,
} from "@codesandbox/sandpack-react";
import { useMemo } from "react";
import { ControlledMonacoEditor } from "../MonacoEditor/ControlledMonacoEditor";
import { useEditor } from "./EditorProvider";
import { FileExplorer } from "./FileExplorer";

export function EditorLayout() {
  const { files, onDeleteFile } = useEditor();

  const defaultFiles: SandpackFiles = useMemo(() => {
    return Object.entries(files).reduce((acc, [key, value], index) => {
      acc[key] = {
        code: value.model,
        active: index === 0,
      };
      return acc;
    }, {} as SandpackFiles);
  }, [files]);

  return (
    <div className="flex h-full">
      <SandpackProvider
        template="react-ts"
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
        }}
        className="flex w-full flex-row [&_>_*]:border [&_>_*]:border-r-0 [&_>_*]:border-gray-500 [&_>_*:last-child]:border-r"
        files={defaultFiles}
        options={{
          bundlerURL: "https://sandpack-bundler.codesandbox.io",
        }}
      >
        <FileExplorer onDeleteFile={onDeleteFile} />
        <ControlledMonacoEditor />
        <SandpackPreview />
      </SandpackProvider>
    </div>
  );
}
