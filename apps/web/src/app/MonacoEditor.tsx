"use client";

import { Editor, type Monaco, type OnMount } from "@monaco-editor/react";
import { useAtom } from "jotai";
import { type editor } from "monaco-editor";
import { useRef, useState } from "react";
import { modelAtom, InitialModel } from "./client.utils";

function loadReactTypes(monaco: Monaco) {
  const loadTypes = async () => {
    const files = [
      "@types/react-dom/index.d.ts",
      "@types/react-dom/client.d.ts",
      "@types/react-dom/package.json",
      "@types/react/index.d.ts",
      "@types/react/global.d.ts",
      "@types/react/jsx-runtime.d.ts",
      "@types/react/package.json",
    ];

    const promises = files.map(
      (file) =>
        new Promise<{ response: Response; file: string }>((resolve, reject) => {
          fetch(`https://unpkg.com/${file}`)
            .then((response) => resolve({ response, file }))
            .catch((err) =>
              reject(
                new Error("Error loading type declaration", { cause: err }),
              ),
            );
        }),
    );

    const results = await Promise.all(promises);
    for (const result of results) {
      const typeDeclaration = await result.response.text();
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        typeDeclaration,
        `file:///node_modules/${result.file}`,
      );
    }

    console.info("React types loaded");
  };

  loadTypes().catch(console.error);
}

function addTsx(monaco: Monaco) {
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.Latest,
    lib: ["dom", "dom.iterable", "es6"],
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
  });
}

export function MonacoEditor() {
  const [model, setModel] = useAtom(modelAtom);
  const modelRef = useRef(InitialModel);

  const [editor, setEditor] = useState<editor.IStandaloneCodeEditor | null>(
    null,
  );

  const updateEditor = () => {
    if (modelRef.current !== editor?.getValue()) {
      setModel(modelRef.current);
      editor?.setValue(modelRef.current);
    }
  };

  const handleOnMount: OnMount = (mountedEditor, mountedMonaco) => {
    setEditor(mountedEditor);
    loadReactTypes(mountedMonaco);

    addTsx(mountedMonaco);

    mountedMonaco.editor.defineTheme("custom-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [{ token: "comment", foreground: "ffa500" }],
      colors: {
        "editor.background": "#18181b",
      },
    });
    mountedMonaco.editor.setTheme("custom-theme");

    updateEditor();
  };

  return (
    <Editor
      className="h-full w-full grow"
      path="default.tsx"
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
        value: model,
      }}
      onMount={handleOnMount}
      onChange={(value) => {
        modelRef.current = value ?? "";
        updateEditor();
      }}
    />
  );
}
