import { useSandpack } from "@codesandbox/sandpack-react";
import { FaReact } from "react-icons/fa";
import { cn } from "@/lib/cn";

const files = ["App.tsx", "test.tsx", "veeeeeery-long-file-name.tsx"];

export function FileExplorer() {
  const {
    sandpack: { activeFile, setActiveFile },
  } = useSandpack();

  const handleClick = (file: string) => {
    setActiveFile(`/${file}`);
  };

  return (
    <div className="flex shrink-0 basis-[150px] flex-col overflow-x-hidden">
      {files.map((file) => (
        <button
          key={file}
          className={cn(
            "flex cursor-pointer items-center gap-1 px-2 py-2 hover:bg-zinc-800",
            { "bg-gray-700 hover:bg-gray-700": activeFile === `/${file}` },
          )}
          onClick={() => handleClick(file)}
        >
          <FaReact className="size-4 shrink-0 text-blue-400" />
          <span className="truncate text-sm leading-none text-nowrap text-gray-300">
            {file}
          </span>
        </button>
      ))}
    </div>
  );
}
