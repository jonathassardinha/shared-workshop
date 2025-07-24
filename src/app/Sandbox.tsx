"use client";

import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { ControlledMonacoEditor } from "./ControlledMonacoEditor";
import { InitialModel } from "./client.utils";
import { FileExplorer } from "./FileExplorer";

export function Sandbox() {
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
        files={{
          "App.tsx": {
            code: InitialModel,
          },
          "test.tsx": {
            code: "console.log('teste')",
          },
        }}
      >
        <FileExplorer />
        <ControlledMonacoEditor />
        <SandpackPreview />
      </SandpackProvider>
    </div>
  );
}
