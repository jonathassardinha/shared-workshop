import { useSandpack } from "@codesandbox/sandpack-react";
import { FaReact } from "react-icons/fa";
import { cn } from "../../lib/cn";
import { useEditor } from "./EditorProvider";

interface FileExplorerProps {
  onDeleteFile?: (filePath: string) => void;
}

export function FileExplorer({ onDeleteFile }: FileExplorerProps) {
  const {
    sandpack: { activeFile, setActiveFile: setSandpackActiveFile },
  } = useSandpack();
  const { files, canDeleteFiles } = useEditor();

  const handleClick = (file: string) => {
    setSandpackActiveFile(file);
  };

  const handleDelete = (e: React.MouseEvent, filePath: string) => {
    e.stopPropagation(); // Prevent file selection when clicking delete
    onDeleteFile?.(filePath);
  };

  return (
    <div className="flex shrink-0 basis-[150px] flex-col overflow-x-hidden">
      {Object.keys(files).map((file) => (
        <div
          key={file}
          className={cn(
            "group flex cursor-pointer items-center gap-1 px-2 py-2 hover:bg-zinc-800",
            { "bg-gray-700 hover:bg-gray-700": activeFile === file },
          )}
          onClick={() => handleClick(file)}
        >
          <FaReact className="size-4 shrink-0 text-blue-400" />
          <span className="flex-1 truncate text-sm leading-none text-nowrap text-gray-300">
            {file.replace(/\//, "")}
          </span>
          {canDeleteFiles && onDeleteFile && Object.keys(files).length > 1 && (
            <button
              onClick={(e) => handleDelete(e, file)}
              className="rounded bg-red-600 px-1 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-700"
              title={`Delete ${file.replace(/\//, "")}`}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
