import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { MonacoEditor } from "./MonacoEditor";

export function ControlledMonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack, listen } = useSandpack();

  const handleChange = (newCode: string) => {
    updateCode(newCode);
  };

  useEffect(() => {
    listen((msg) => {
      console.debug(msg);
    });
  }, [listen, updateCode]);

  return <MonacoEditor model={code} onModelChange={handleChange} />;
}
