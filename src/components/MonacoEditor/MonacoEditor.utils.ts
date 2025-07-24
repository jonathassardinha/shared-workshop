import type { MonacoFile } from "@/app/client.utils";
import type { Logger } from "@/lib/Logger/Logger.utils";
import type { Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

export async function loadReactTypes(monaco: Monaco, logger: Logger) {
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
            reject(new Error("Error loading type declaration", { cause: err })),
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

  logger.debug("MonacoEditor.utils.ts/loadReactTypes - React types loaded");
}

export function addTsx(monaco: Monaco) {
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

export function addTheme(monaco: Monaco) {
  monaco.editor.defineTheme("custom-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [{ token: "comment", foreground: "ffa500" }],
    colors: {
      "editor.background": "#18181b",
    },
  });
  monaco.editor.setTheme("custom-theme");
}

export const handleOnMount = async (
  mountedEditor: editor.IStandaloneCodeEditor,
  mountedMonaco: Monaco,
  logger: Logger,
  files: Record<string, MonacoFile>,
  currentPath: string,
) => {
  const { Uri } = await import("monaco-editor");

  Object.entries(files).forEach(([path, { language, model }]) => {
    if (mountedMonaco.editor.getModel(Uri.file(path))) {
      logger.debug(`MonacoEditor.tsx - Model for ${path} already exists`);
      return;
    }
    logger.debug(`MonacoEditor.tsx - Creating model for ${path}`);
    mountedMonaco.editor.createModel(model, language, Uri.file(path));
  });

  mountedMonaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  mountedEditor.setModel(mountedMonaco.editor.getModel(Uri.file(currentPath)));

  await loadReactTypes(mountedMonaco, logger);
  addTsx(mountedMonaco);
  addTheme(mountedMonaco);
};
