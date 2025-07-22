"use client";

import { Editor } from "@monaco-editor/react";

export function MonacoEditor() {
  return (
    <Editor
      className="h-full w-full grow"
      wrapperProps={{
        className: "w-full grow flex flex-col",
      }}
      language="typescript"
      defaultValue="// Hello World"
      theme="vs-dark"
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
  );
}
