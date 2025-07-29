import { FILE_VALIDATION } from "../validation/files";

// File content utilities for handling large files and content management

export interface FileContentInfo {
  size: number;
  sizeFormatted: string;
  lineCount: number;
  encoding: string;
  isCompressed: boolean;
  compressionRatio?: number;
}

export interface CompressionResult {
  compressed: boolean;
  originalSize: number;
  compressedSize: number;
  ratio: number;
  content: string;
}

// Simple text compression for large files
export function compressContent(content: string): CompressionResult {
  const originalSize = new Blob([content]).size;

  // Only compress if content is larger than 100KB
  if (originalSize < 100 * 1024) {
    return {
      compressed: false,
      originalSize,
      compressedSize: originalSize,
      ratio: 1,
      content,
    };
  }

  // Simple compression: remove extra whitespace and normalize line endings
  const compressed = content
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\r/g, "\n") // Convert carriage returns to newlines
    .replace(/\n\s*\n\s*\n/g, "\n\n") // Remove excessive blank lines
    .replace(/[ \t]+/g, " ") // Normalize spaces
    .trim();

  const compressedSize = new Blob([compressed]).size;
  const ratio = compressedSize / originalSize;

  return {
    compressed: ratio < 0.95, // Only mark as compressed if we saved at least 5%
    originalSize,
    compressedSize,
    ratio,
    content: compressed,
  };
}

// Decompress content (for now, just return as-is since we're using simple compression)
export function decompressContent(
  content: string,
  wasCompressed: boolean,
): string {
  if (!wasCompressed) {
    return content;
  }

  // For simple compression, the content is already decompressed
  return content;
}

// Get file content information
export function getFileContentInfo(content: string): FileContentInfo {
  const size = new Blob([content]).size;
  const lineCount = content.split("\n").length;

  // Check if content is valid UTF-8
  let encoding = "utf-8";
  try {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");
    const encoded = encoder.encode(content);
    const decoded = decoder.decode(encoded);
    encoding = decoded === content ? "utf-8" : "unknown";
  } catch {
    encoding = "unknown";
  }

  // Check if content appears to be compressed
  const compressionResult = compressContent(content);

  return {
    size,
    sizeFormatted: formatFileSize(size),
    lineCount,
    encoding,
    isCompressed: compressionResult.compressed,
    compressionRatio: compressionResult.compressed
      ? compressionResult.ratio
      : undefined,
  };
}

// Format file size for display
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

// Validate file content size
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
      : `File size (${formatFileSize(size)}) exceeds limit (${formatFileSize(FILE_VALIDATION.MAX_SIZE)})`,
    size,
  };
}

// Sanitize file content for security
export function sanitizeFileContent(content: string): string {
  return content
    .replace(/\0/g, "") // Remove null bytes
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\r/g, "\n") // Convert carriage returns to newlines
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Remove control characters except newlines and tabs
}

// Check if content contains potentially dangerous patterns
export function checkContentSecurity(content: string): {
  isSafe: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];

  // Check for script tags (potential XSS)
  if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(content)) {
    warnings.push("Content contains script tags which may pose security risks");
  }

  // Check for eval-like patterns
  if (/\beval\s*\(/gi.test(content)) {
    warnings.push(
      "Content contains eval() calls which may pose security risks",
    );
  }

  // Check for excessive line length (potential DoS)
  const lines = content.split("\n");
  const longLines = lines.filter((line) => line.length > 1000);
  if (longLines.length > 0) {
    warnings.push(
      `Content contains ${longLines.length} lines longer than 1000 characters`,
    );
  }

  // Check for excessive repetition (potential DoS)
  const repeatedPatterns = content.match(/(.{10,})\1{10,}/g);
  if (repeatedPatterns && repeatedPatterns.length > 0) {
    warnings.push("Content contains excessive repetition patterns");
  }

  return {
    isSafe: warnings.length === 0,
    warnings,
  };
}

// Optimize content for storage
export function optimizeContentForStorage(content: string): {
  content: string;
  wasOptimized: boolean;
} {
  const originalSize = new Blob([content]).size;

  // Apply optimizations
  const optimized = content
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\r/g, "\n") // Convert carriage returns to newlines
    .replace(/\n\s*\n\s*\n/g, "\n\n") // Remove excessive blank lines
    .trim();

  const optimizedSize = new Blob([optimized]).size;
  const wasOptimized = optimizedSize < originalSize;

  return {
    content: optimized,
    wasOptimized,
  };
}

// Calculate content hash for change detection
export function calculateContentHash(content: string): string {
  // Simple hash function for change detection
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString(36);
}

// Detect file type from content
export function detectFileTypeFromContent(content: string): string {
  const trimmed = content.trim();

  // Check for common file patterns
  if (trimmed.startsWith("<!DOCTYPE html") || trimmed.startsWith("<html")) {
    return "html";
  }

  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    try {
      JSON.parse(trimmed);
      return "json";
    } catch {
      // Not valid JSON
    }
  }

  if (
    trimmed.includes("import") ||
    trimmed.includes("export") ||
    trimmed.includes("const ") ||
    trimmed.includes("let ") ||
    trimmed.includes("var ")
  ) {
    if (
      trimmed.includes("interface ") ||
      trimmed.includes("type ") ||
      trimmed.includes(": ")
    ) {
      return "typescript";
    }
    return "javascript";
  }

  if (trimmed.includes("function ") || trimmed.includes("=>")) {
    return "javascript";
  }

  if (
    trimmed.includes("color:") ||
    trimmed.includes("background:") ||
    trimmed.includes("font-")
  ) {
    return "css";
  }

  if (trimmed.startsWith("# ") || trimmed.includes("## ")) {
    return "markdown";
  }

  return "text";
}

// Get content statistics
export function getContentStatistics(content: string): {
  characters: number;
  words: number;
  lines: number;
  nonEmptyLines: number;
  averageLineLength: number;
} {
  const lines = content.split("\n");
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
  const words = content.split(/\s+/).filter((word) => word.length > 0).length;

  return {
    characters: content.length,
    words,
    lines: lines.length,
    nonEmptyLines: nonEmptyLines.length,
    averageLineLength:
      lines.length > 0 ? Math.round(content.length / lines.length) : 0,
  };
}
