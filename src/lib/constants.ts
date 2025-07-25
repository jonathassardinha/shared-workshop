// Workshop Creation Constants
export const MAX_EXERCISES = 10;
export const MIN_EXERCISES = 1;
export const MAX_FILENAME_LENGTH = 50;

// File Templates
export const FILE_TEMPLATES = {
  tsx: (componentName: string) => `interface ${componentName}Props {
  // Add props here
}

export function ${componentName}({}: ${componentName}Props) {
  return (
    <div>
      <h1>${componentName} Component</h1>
      <p>This is a new React component.</p>
    </div>
  );
}`,

  ts: (fileName: string) => `// ${fileName} utility functions

export const ${fileName.toLowerCase()}Util = {
  // Add utility functions here
};

export default ${fileName.toLowerCase()}Util;`,

  jsx: (componentName: string) => `export function ${componentName}({}) {
  return (
    <div>
      <h1>${componentName} Component</h1>
      <p>This is a new React component.</p>
    </div>
  );
}`,

  js: (fileName: string) => `// ${fileName} utility functions

export const ${fileName.toLowerCase()}Util = {
  // Add utility functions here
};

export default ${fileName.toLowerCase()}Util;`,

  css: (fileName: string) => `/* Styles for ${fileName} */

.${fileName.toLowerCase()} {
  /* Add styles here */
}

.${fileName.toLowerCase()}__container {
  display: flex;
  flex-direction: column;
}`,

  html: (fileName: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fileName}</title>
</head>
<body>
  <div id="root">
    <h1>${fileName}</h1>
    <p>New HTML file content goes here.</p>
  </div>
</body>
</html>`,
};

// File Validation
export const FILENAME_REGEX = /^[a-zA-Z0-9._-]+$/;
export const VALID_EXTENSIONS = [
  "tsx",
  "ts",
  "jsx",
  "js",
  "css",
  "html",
  "json",
  "md",
];

// UI Constants
export const NAVIGATION_HEIGHT = 64; // 16 * 4 = 64px (h-16)
export const STEP_TRANSITION_DURATION = 300;

// Workshop Status
export const WORKSHOP_STATUS_COLORS = {
  live: "bg-green-100 text-green-800",
  planned: "bg-blue-100 text-blue-800",
  completed: "bg-gray-100 text-gray-800",
} as const;

// Helper Functions
export function getComponentNameFromFilename(filename: string): string {
  return filename
    .replace(/^\//, "") // Remove leading slash
    .replace(/\.(tsx|jsx)$/, "") // Remove extension
    .split(/[-_.]/) // Split on separators
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize each part
    .join(""); // Join together
}

export function getFileLanguage(extension: string): string {
  switch (extension) {
    case "tsx":
    case "ts":
      return "typescript";
    case "jsx":
    case "js":
      return "javascript";
    case "css":
      return "css";
    case "html":
      return "html";
    case "json":
      return "json";
    case "md":
      return "markdown";
    default:
      return "typescript"; // Default fallback
  }
}

export function validateFilename(filename: string): {
  isValid: boolean;
  error?: string;
} {
  if (!filename.trim()) {
    return { isValid: false, error: "Filename cannot be empty" };
  }

  if (filename.length > MAX_FILENAME_LENGTH) {
    return {
      isValid: false,
      error: `Filename too long (max ${MAX_FILENAME_LENGTH} characters)`,
    };
  }

  const nameWithoutSlash = filename.replace(/^\//, "");

  if (!FILENAME_REGEX.test(nameWithoutSlash)) {
    return {
      isValid: false,
      error: "Invalid filename. Use only letters, numbers, dots, and dashes.",
    };
  }

  const extension = nameWithoutSlash.split(".").pop()?.toLowerCase();
  if (extension && !VALID_EXTENSIONS.includes(extension)) {
    return {
      isValid: false,
      error: `Unsupported file extension. Supported: ${VALID_EXTENSIONS.join(", ")}`,
    };
  }

  return { isValid: true };
}
