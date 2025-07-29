import React from "react";
import { cn } from "../../lib/cn";

export interface KeyboardShortcutProps {
  keys: string[];
  description: string;
  className?: string;
}

export function KeyboardShortcut({
  keys,
  description,
  className,
}: KeyboardShortcutProps) {
  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      <div className="flex gap-1">
        {keys.map((key, index) => (
          <React.Fragment key={key}>
            <kbd className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-800 shadow-sm">
              {key}
            </kbd>
            {index < keys.length - 1 && (
              <span className="text-gray-400">+</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <span className="text-gray-600">{description}</span>
    </div>
  );
}

export interface KeyboardShortcutsPanelProps {
  shortcuts: Array<{
    keys: string[];
    description: string;
    category?: string;
  }>;
  className?: string;
}

export function KeyboardShortcutsPanel({
  shortcuts,
  className,
}: KeyboardShortcutsPanelProps) {
  const groupedShortcuts = shortcuts.reduce(
    (acc, shortcut) => {
      const category = shortcut.category || "General";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(shortcut);
      return acc;
    },
    {} as Record<string, typeof shortcuts>,
  );

  return (
    <div className={cn("space-y-4", className)}>
      {Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
        <div key={category}>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            {category}
          </h3>
          <div className="space-y-2">
            {categoryShortcuts.map((shortcut, index) => (
              <KeyboardShortcut
                key={index}
                keys={shortcut.keys}
                description={shortcut.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Hook for managing keyboard shortcuts
export function useKeyboardShortcuts(
  shortcuts: Array<{
    keys: string[];
    action: () => void;
    description: string;
    enabled?: boolean;
  }>,
) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKeys = [];

      if (event.ctrlKey || event.metaKey) pressedKeys.push("Ctrl");
      if (event.shiftKey) pressedKeys.push("Shift");
      if (event.altKey) pressedKeys.push("Alt");

      const key = event.key.toUpperCase();
      if (key !== "CONTROL" && key !== "SHIFT" && key !== "ALT") {
        pressedKeys.push(key);
      }

      const pressedKeyString = pressedKeys.join("+");

      for (const shortcut of shortcuts) {
        if (shortcut.enabled === false) continue;

        const shortcutKeyString = shortcut.keys.join("+");
        if (pressedKeyString === shortcutKeyString) {
          event.preventDefault();
          shortcut.action();
          break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
}

// Common workshop creation shortcuts
export const WORKSHOP_SHORTCUTS = [
  {
    keys: ["Ctrl", "S"],
    description: "Save draft",
    category: "File",
  },
  {
    keys: ["Ctrl", "Enter"],
    description: "Create workshop",
    category: "File",
  },
  {
    keys: ["Ctrl", "Z"],
    description: "Undo",
    category: "Edit",
  },
  {
    keys: ["Ctrl", "Y"],
    description: "Redo",
    category: "Edit",
  },
  {
    keys: ["Tab"],
    description: "Next field",
    category: "Navigation",
  },
  {
    keys: ["Shift", "Tab"],
    description: "Previous field",
    category: "Navigation",
  },
  {
    keys: ["Ctrl", "N"],
    description: "New exercise",
    category: "Exercise",
  },
  {
    keys: ["Delete"],
    description: "Delete exercise",
    category: "Exercise",
  },
  {
    keys: ["Ctrl", "F"],
    description: "New file",
    category: "File",
  },
  {
    keys: ["F1"],
    description: "Show shortcuts",
    category: "Help",
  },
];

// Hook for workshop creation shortcuts
export function useWorkshopShortcuts(actions: {
  saveDraft?: () => void;
  createWorkshop?: () => void;
  undo?: () => void;
  redo?: () => void;
  nextField?: () => void;
  prevField?: () => void;
  newExercise?: () => void;
  deleteExercise?: () => void;
  newFile?: () => void;
  showShortcuts?: () => void;
}) {
  const shortcuts = [
    {
      keys: ["Ctrl", "S"],
      action: actions.saveDraft || (() => {}),
      description: "Save draft",
    },
    {
      keys: ["Ctrl", "Enter"],
      action: actions.createWorkshop || (() => {}),
      description: "Create workshop",
    },
    {
      keys: ["Ctrl", "Z"],
      action: actions.undo || (() => {}),
      description: "Undo",
    },
    {
      keys: ["Ctrl", "Y"],
      action: actions.redo || (() => {}),
      description: "Redo",
    },
    {
      keys: ["Tab"],
      action: actions.nextField || (() => {}),
      description: "Next field",
    },
    {
      keys: ["Shift", "Tab"],
      action: actions.prevField || (() => {}),
      description: "Previous field",
    },
    {
      keys: ["Ctrl", "N"],
      action: actions.newExercise || (() => {}),
      description: "New exercise",
    },
    {
      keys: ["Delete"],
      action: actions.deleteExercise || (() => {}),
      description: "Delete exercise",
    },
    {
      keys: ["Ctrl", "F"],
      action: actions.newFile || (() => {}),
      description: "New file",
    },
    {
      keys: ["F1"],
      action: actions.showShortcuts || (() => {}),
      description: "Show shortcuts",
    },
  ];

  useKeyboardShortcuts(shortcuts);
}

// Component for displaying current shortcuts
export function ShortcutsHelp({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg bg-gray-50 p-4", className)}>
      <h3 className="mb-4 text-lg font-semibold">Keyboard Shortcuts</h3>
      <KeyboardShortcutsPanel shortcuts={WORKSHOP_SHORTCUTS} />
    </div>
  );
}

// Component for showing shortcut hints
export function ShortcutHint({
  shortcut,
  className,
}: {
  shortcut: string;
  className?: string;
}) {
  return (
    <span className={cn("ml-2 text-xs text-gray-500", className)}>
      ({shortcut})
    </span>
  );
}
