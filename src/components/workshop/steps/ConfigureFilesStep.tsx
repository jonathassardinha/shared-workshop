import type { Exercise } from "../types";
import { CreateWorkshopEditor } from "../CreateWorkshopEditor";

interface ConfigureFilesStepProps {
  exercises: Exercise[];
  currentExerciseIndex: number;
  onCurrentExerciseIndexChange: (index: number) => void;
  onSaveFiles: () => void;
  onFilesChange: (
    newFiles: Record<string, { language: string; model: string }>,
  ) => void;
  onAddNewFile: (fileName: string, language: string, model: string) => void;
  onDeleteFile: (filePath: string) => void;
}

export function ConfigureFilesStep({
  exercises,
  currentExerciseIndex,
  onCurrentExerciseIndexChange,
  onSaveFiles,
  onFilesChange,
  onAddNewFile,
  onDeleteFile,
}: ConfigureFilesStepProps) {
  return (
    <div className="flex grow flex-col">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Configure Files</h1>
        <div className="flex items-center gap-4">
          <select
            value={currentExerciseIndex}
            onChange={(e) =>
              onCurrentExerciseIndexChange(Number(e.target.value))
            }
            className="rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          >
            {exercises.map((exercise, index) => (
              <option key={exercise.id} value={index}>
                {exercise.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6 flex-1 overflow-hidden">
        <CreateWorkshopEditor
          files={exercises[currentExerciseIndex]?.files ?? {}}
          onSave={onSaveFiles}
          onFilesChange={onFilesChange}
          onAddNewFile={onAddNewFile}
          onDeleteFile={onDeleteFile}
        />
      </div>
    </div>
  );
}
