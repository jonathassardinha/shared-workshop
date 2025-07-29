// UI Components exports

export * from "./alert";
export * from "./avatar";
export * from "./badge";
export * from "./button";
export * from "./card";
export * from "./dropdown-menu";
export * from "./pagination";
export * from "./scroll-area";
export * from "./separator";
export * from "./skeleton";
export * from "./progress-indicator";
export * from "./keyboard-shortcuts";

// Re-export commonly used components
export { Alert, AlertDescription, AlertTitle } from "./alert";

export { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export { Badge, badgeVariants } from "./badge";

export { Button, buttonVariants } from "./button";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export { Pagination } from "./pagination";

export { ScrollArea, ScrollBar } from "./scroll-area";

export { Separator } from "./separator";

export { Skeleton } from "./skeleton";

export {
  ProgressIndicator,
  AutoSaveIndicator,
  StepProgress,
  FileUploadProgress,
} from "./progress-indicator";

export {
  KeyboardShortcut,
  KeyboardShortcutsPanel,
  useKeyboardShortcuts,
  useWorkshopShortcuts,
  ShortcutsHelp,
  ShortcutHint,
  WORKSHOP_SHORTCUTS,
} from "./keyboard-shortcuts";
