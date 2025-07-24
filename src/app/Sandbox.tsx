"use client";

import {
  SandpackPreview,
  SandpackProvider,
  type SandpackFiles,
} from "@codesandbox/sandpack-react";
import { useMemo } from "react";
import { ControlledMonacoEditor } from "../components/MonacoEditor/ControlledMonacoEditor";
import { InitialFilesValue } from "./client.utils";
import { FileExplorer } from "./FileExplorer";

export function Sandbox() {
  const defaultFiles: SandpackFiles = useMemo(() => {
    return Object.entries(InitialFilesValue).reduce(
      (acc, [key, value], index) => {
        acc[key] = {
          code: value.model,
          active: index === 0,
        };
        return acc;
      },
      {} as SandpackFiles,
    );
  }, []);

  return (
    <div className="flex">
      <SandpackProvider
        template="react-ts"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
        className="[&_>_*]:border [&_>_*]:border-r-0 [&_>_*]:border-gray-500 [&_>_*:last-child]:border-r"
        files={defaultFiles}
      >
        <FileExplorer />
        <ControlledMonacoEditor />
        <SandpackPreview />
      </SandpackProvider>
    </div>
  );
}
