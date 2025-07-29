import { z } from "zod";
import { WORKSHOP_CONSTRAINTS } from "./workshop";

// File validation constants
export const FILE_VALIDATION = {
  MAX_SIZE: WORKSHOP_CONSTRAINTS.MAX_FILE_SIZE,
  ALLOWED_EXTENSIONS: [
    "tsx",
    "ts",
    "jsx",
    "js",
    "css",
    "html",
    "json",
    "md",
    "txt",
    "xml",
    "yaml",
    "yml",
  ] as const,
  MAX_FILENAME_LENGTH: 255,
  ENCODING: "utf-8" as const,
} as const;

// File content validation schema
export const fileContentSchema = z.object({
  filename: z
    .string()
    .min(1, "Filename is required")
    .max(FILE_VALIDATION.MAX_FILENAME_LENGTH, "Filename too long")
    .regex(
      /^[a-zA-Z0-9._/-]+$/,
      "Invalid filename characters. Only letters, numbers, dots, underscores, hyphens, and forward slashes are allowed",
    ),
  content: z
    .string()
    .max(
      FILE_VALIDATION.MAX_SIZE,
      `File content too large (max ${FILE_VALIDATION.MAX_SIZE / 1024 / 1024}MB)`,
    ),
  language: z.string().min(1, "Language is required"),
});

// File extension validation
export const fileExtensionSchema = z.object({
  filename: z.string().refine(
    (filename) => {
      const extension = filename.split(".").pop()?.toLowerCase();
      return extension
        ? FILE_VALIDATION.ALLOWED_EXTENSIONS.includes(
            extension as (typeof FILE_VALIDATION.ALLOWED_EXTENSIONS)[number],
          )
        : false;
    },
    {
      message: `Invalid file extension. Allowed: ${FILE_VALIDATION.ALLOWED_EXTENSIONS.join(", ")}`,
    },
  ),
});

// Complete file validation schema
export const completeFileSchema = fileContentSchema.merge(fileExtensionSchema);

// Type exports
export type FileContentInput = z.infer<typeof fileContentSchema>;
export type CompleteFileInput = z.infer<typeof completeFileSchema>;

// File validation utilities
export function validateFilename(filename: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    completeFileSchema.shape.filename.parse(filename);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid filename",
      };
    }
    return { isValid: false, error: "Invalid filename" };
  }
}

export function validateFileContent(content: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    fileContentSchema.shape.content.parse(content);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message ?? "Invalid file content",
      };
    }
    return { isValid: false, error: "Invalid file content" };
  }
}

export function validateFileSize(content: string): {
  isValid: boolean;
  error?: string;
  size: number;
} {
  const size = new Blob([content]).size;
  const isValid = size <= FILE_VALIDATION.MAX_SIZE;

  return {
    isValid,
    error: isValid
      ? undefined
      : `File size (${(size / 1024 / 1024).toFixed(2)}MB) exceeds limit (${FILE_VALIDATION.MAX_SIZE / 1024 / 1024}MB)`,
    size,
  };
}

export function validateFileEncoding(content: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    // Check if content can be properly encoded/decoded as UTF-8
    const encoder = new TextEncoder();
    const decoder = new TextDecoder(FILE_VALIDATION.ENCODING);
    const encoded = encoder.encode(content);
    const decoded = decoder.decode(encoded);

    // If the decoded content matches the original, encoding is valid
    if (decoded === content) {
      return { isValid: true };
    }

    return {
      isValid: false,
      error: "Invalid file encoding. Only UTF-8 is supported.",
    };
  } catch (error) {
    return {
      isValid: false,
      error: "Invalid file encoding. Only UTF-8 is supported.",
    };
  }
}

export function validateFileExtension(filename: string): {
  isValid: boolean;
  error?: string;
  extension?: string;
} {
  const extension = filename.split(".").pop()?.toLowerCase();

  if (!extension) {
    return { isValid: false, error: "File must have an extension" };
  }

  if (
    !FILE_VALIDATION.ALLOWED_EXTENSIONS.includes(
      extension as (typeof FILE_VALIDATION.ALLOWED_EXTENSIONS)[number],
    )
  ) {
    return {
      isValid: false,
      error: `Invalid file extension. Allowed: ${FILE_VALIDATION.ALLOWED_EXTENSIONS.join(", ")}`,
      extension,
    };
  }

  return { isValid: true, extension };
}

export function validateCompleteFile(
  filename: string,
  content: string,
  language: string,
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate filename
  const filenameValidation = validateFilename(filename);
  if (!filenameValidation.isValid) {
    errors.push(filenameValidation.error!);
  }

  // Validate file extension
  const extensionValidation = validateFileExtension(filename);
  if (!extensionValidation.isValid) {
    errors.push(extensionValidation.error!);
  }

  // Validate content size
  const sizeValidation = validateFileSize(content);
  if (!sizeValidation.isValid) {
    errors.push(sizeValidation.error!);
  }

  // Validate content encoding
  const encodingValidation = validateFileEncoding(content);
  if (!encodingValidation.isValid) {
    errors.push(encodingValidation.error!);
  }

  // Validate language
  if (!language || language.trim().length === 0) {
    errors.push("Language is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function sanitizeFileContent(content: string): string {
  // Remove null bytes and other potentially dangerous characters
  return content
    .replace(/\0/g, "") // Remove null bytes
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\r/g, "\n"); // Convert carriage returns to newlines
}

export function getFileLanguageFromExtension(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase();

  const languageMap: Record<string, string> = {
    tsx: "typescript",
    ts: "typescript",
    jsx: "javascript",
    js: "javascript",
    css: "css",
    html: "html",
    json: "json",
    md: "markdown",
    txt: "plaintext",
    xml: "xml",
    yaml: "yaml",
    yml: "yaml",
  };

  return languageMap[extension ?? ""] ?? "plaintext";
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
