"use client";

import { Editor, type Monaco, type OnMount } from "@monaco-editor/react";
import { useAtom } from "jotai";
import { type editor, type ISelection } from "monaco-editor";
import { useState } from "react";
import { editorAtom } from "./client.utils";

export function MonacoEditor() {
  const [model, setModel] = useAtom(editorAtom);
  const [selections, setSelections] = useState<ISelection[]>([
    {
      positionLineNumber: 1,
      positionColumn: 1,
      selectionStartLineNumber: 1,
      selectionStartColumn: 1,
    },
  ]);
  const [editor, setEditor] = useState<editor.IStandaloneCodeEditor | null>(
    null,
  );
  const [monaco, setMonaco] = useState<Monaco | null>(null);

  const updateEditor = () => {
    if (model !== editor?.getValue()) {
      editor?.setValue(model);
    }

    if (Array.isArray(selections)) {
      if (
        !monaco?.Selection.selectionsArrEqual(
          selections,
          editor?.getSelections() ?? [],
        )
      ) {
        console.debug(selections, editor?.getSelections());
        editor?.setSelections(selections);
      }
    }
  };

  const handleOnMount: OnMount = (mountedEditor, mountedMonaco) => {
    setEditor(mountedEditor);
    setMonaco(mountedMonaco);
    updateEditor();

    mountedMonaco.editor.defineTheme("custom-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [{ token: "comment", foreground: "ffa500" }],
      colors: {
        "editor.background": "#18181b",
      },
    });
    mountedMonaco.editor.setTheme("custom-theme");

    mountedEditor.onDidChangeCursorSelection((e) => {
      setSelections([e.selection, ...e.secondarySelections]);
      updateEditor();
    });
  };

  return (
    <Editor
      className="h-full w-full grow"
      path="default.ts"
      wrapperProps={{
        className: "w-full grow flex flex-col",
      }}
      language="typescript"
      defaultValue={model}
      value={model}
      theme="vs-dark"
      options={{
        minimap: {
          enabled: false,
        },
        value: model,
      }}
      onMount={handleOnMount}
      onChange={(value) => {
        setModel(value ?? "");
        setTimeout(() => updateEditor(), 0);
      }}
    />
  );
}
