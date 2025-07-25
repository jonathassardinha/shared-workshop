import { atom } from "jotai";

export const InitialModel = `const App = () => {
  return <div>Hello, World!</div>;
};

export default App;`;
export const modelAtom = atom(InitialModel);

export type MonacoFile = { language: string; model: string };

export const InitialFilesValue: Record<string, MonacoFile> = {
  "/App.tsx": {
    language: "typescript",
    model: InitialModel,
  },
  "/test.tsx": {
    language: "typescript",
    model: `export const Test = () => {
  return <div>Test component</div>;
};`,
  },
};

export const filesAtom = atom(InitialFilesValue);
