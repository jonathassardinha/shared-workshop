import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { MonacoEditor } from "./MonacoEditor";

export function ControlledMonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack, dispatch } = useSandpack();

  const handleChange = (newCode: string) => {
    updateCode(newCode);
  };

  return <MonacoEditor model={code} onModelChange={handleChange} />;
}
