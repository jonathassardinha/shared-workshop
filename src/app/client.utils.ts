import type { ISelection } from "monaco-editor";
import { atom } from "jotai";

export const InitialModel = `const App = () => {
  return <div>Hello, World!</div>;
};

export default App;`;
export const modelAtom = atom(InitialModel);

export const InitialSelections: ISelection[] = [
  {
    positionLineNumber: 1,
    positionColumn: 1,
    selectionStartLineNumber: 1,
    selectionStartColumn: 1,
  },
];
export const selectionsAtom = atom(InitialSelections);
