// Workshop Creation Constants
export const MAX_EXERCISES = 10;
export const MIN_EXERCISES = 1;
export const MAX_FILENAME_LENGTH = 50;

// File Templates
export const FILE_TEMPLATES = {
  tsx: (componentName: string) => `import React from 'react';

interface ${componentName}Props {
  // Add your props here
}

export function ${componentName}({}: ${componentName}Props) {
  return (
    <div>
      <h1>${componentName} Component</h1>
      <p>This is a new component!</p>
    </div>
  );
}

export default ${componentName};`,

  jsx: (componentName: string) => `import React from 'react';

export function ${componentName}({}) {
  return (
    <div>
      <h1>${componentName} Component</h1>
      <p>This is a new component!</p>
    </div>
  );
}

export default ${componentName};`,

  ts: (fileName: string) => `// ${fileName}
// Add your TypeScript code here

export interface ${getCapitalizedName(fileName)}Interface {
  // Define your interface
}

export function ${fileName}Function() {
  // Add your function logic
}`,

  js: (fileName: string) => `// ${fileName}
// Add your JavaScript code here

export function ${fileName}Function() {
  // Add your function logic
}`,

  css: (fileName: string) => `/* ${fileName} */
/* Add your styles here */

.${fileName.toLowerCase()}-container {
  /* Example styles */
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
    <h1>${fileName} Page</h1>
    <p>This is a new HTML file!</p>
</body>
</html>`,

  json: (fileName: string) => `{
  "name": "${fileName}",
  "description": "Configuration file",
  "version": "1.0.0"
}`,

  md: (fileName: string) => `# ${fileName}

This is a new markdown file.

## Features

- Feature 1
- Feature 2
- Feature 3

## Usage

Add your usage instructions here.`,
} as const;

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
export const NAVIGATION_HEIGHT = 64;
export const STEP_TRANSITION_DURATION = 300;

// Helper Functions
function getCapitalizedName(fileName: string): string {
  return fileName.charAt(0).toUpperCase() + fileName.slice(1);
}

export function getComponentNameFromFilename(filename: string): string {
  // Remove leading slash and file extension
  const nameWithoutSlash = filename.replace(/^\//, "");
  const nameWithoutExtension = nameWithoutSlash.replace(/\.[^/.]+$/, "");

  // Convert to PascalCase component name
  return nameWithoutExtension
    .split(/[-_.]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function getFileLanguage(extension: string): string {
  const languageMap: Record<string, string> = {
    tsx: "typescript",
    ts: "typescript",
    jsx: "javascript",
    js: "javascript",
    css: "css",
    html: "html",
    json: "json",
    md: "markdown",
  };

  return languageMap[extension] ?? "plaintext";
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
      error: `Filename must be less than ${MAX_FILENAME_LENGTH} characters`,
    };
  }

  if (!FILENAME_REGEX.test(filename)) {
    return {
      isValid: false,
      error:
        "Filename can only contain letters, numbers, dots, hyphens, and underscores",
    };
  }

  const extension = filename.split(".").pop()?.toLowerCase();
  if (!extension || !VALID_EXTENSIONS.includes(extension)) {
    return {
      isValid: false,
      error: `File extension must be one of: ${VALID_EXTENSIONS.join(", ")}`,
    };
  }

  return { isValid: true };
}
