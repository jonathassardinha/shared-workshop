import type { ISelection } from "monaco-editor";
import { atom } from "jotai";

export const InitialModel = `interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default MyComponent;`;
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
