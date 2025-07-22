"use client";

import {
  Editor,
  useMonaco,
  type Monaco,
  type OnMount,
} from "@monaco-editor/react";
import { type editor, type ISelection, Uri } from "monaco-editor";
import { useEffect, useRef, useState } from "react";

const initialModel = `console.log('Hello World')

console.log('Hello World')

console.log('Hello World')
`;

export function MonacoEditor() {
  const [model, setModel] = useState<string>(initialModel);
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
      onChange={(value, event) => {
        if (event.changes.every(({ range }) => range.startLineNumber > 2)) {
          setModel(value ?? "");
        }

        setTimeout(() => updateEditor(), 0);
      }}
    />
  );
}
