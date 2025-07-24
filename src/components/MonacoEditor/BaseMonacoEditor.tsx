"use client";

import { Editor, type OnMount } from "@monaco-editor/react";
import { type editor } from "monaco-editor";
import { useRef, useState } from "react";
import { useClientLogger } from "@/lib/Logger/ClientLogger";
import { InitialModel, type MonacoFile } from "../../app/client.utils";
import { handleOnMount } from "./MonacoEditor.utils";

export interface MonacoEditorProps {
  files: Record<string, MonacoFile>;
  currentPath: string;
  model?: string;
  onModelChange?: (newModel: string) => void;
}

export function MonacoEditor({
  files,
  currentPath,
  model,
  onModelChange,
}: MonacoEditorProps) {
  const modelRef = useRef(InitialModel);
  const logger = useClientLogger();

  const [editor, setEditor] = useState<editor.IStandaloneCodeEditor | null>(
    null,
  );

  const updateEditor = () => {
    if (modelRef.current !== editor?.getValue())
      editor?.setValue(modelRef.current);

    if (modelRef.current !== model) onModelChange?.(modelRef.current);
  };

  const onMount: OnMount = (mountedEditor, mountedMonaco) => {
    setEditor(mountedEditor);

    handleOnMount(mountedEditor, mountedMonaco, logger, files, currentPath)
      .then(() => {
        setTimeout(() => updateEditor(), 1000);
      })
      .catch((reason) =>
        logger.error(
          new Error("Error handling monaco editor mount", { cause: reason }),
        ),
      );
  };

  return (
    <Editor
      className="h-full w-full grow"
      path={currentPath}
      wrapperProps={{
        className: "w-full grow flex flex-col",
      }}
      language="typescript"
      defaultValue={model}
      value={model}
      theme="vs-dark"
      options={{
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
      }}
      onMount={onMount}
      onChange={(value) => {
        modelRef.current = value ?? "";
        updateEditor();
      }}
    />
  );
}
