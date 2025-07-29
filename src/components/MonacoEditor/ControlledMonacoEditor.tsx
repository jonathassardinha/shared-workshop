import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { useEditor } from "../Editor/EditorProvider";
import { MonacoEditor } from "./BaseMonacoEditor";

export function ControlledMonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { files, onFilesChange } = useEditor();
  const { sandpack } = useSandpack();

  const handleChange = (newCode: string) => {
    updateCode(newCode);
    onFilesChange({
      ...files,
      [sandpack.activeFile]: {
        language: "typescript",
        model: newCode,
      },
    });
  };

  return (
    <MonacoEditor
      model={code}
      onModelChange={handleChange}
      files={files}
      currentPath={sandpack.activeFile}
    />
  );
}
