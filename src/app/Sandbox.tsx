"use client";

import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { ControlledMonacoEditor } from "./ControlledMonacoEditor";
import { InitialModel } from "./client.utils";

export function Sandbox() {
  return (
    <SandpackProvider
      template="react-ts"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      }}
      files={{
        "App.tsx": {
          code: InitialModel,
        },
      }}
    >
      <ControlledMonacoEditor />
      <SandpackPreview />
    </SandpackProvider>
  );
}
