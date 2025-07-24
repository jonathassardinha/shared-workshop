import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { useAtomValue } from "jotai";
import { filesAtom } from "../../app/client.utils";
import { MonacoEditor } from "./BaseMonacoEditor";

export function ControlledMonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const files = useAtomValue(filesAtom);
  const { sandpack } = useSandpack();

  const handleChange = (newCode: string) => {
    updateCode(newCode);
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
