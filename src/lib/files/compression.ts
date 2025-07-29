// Compression utilities for file content optimization

export interface CompressionOptions {
  enabled: boolean;
  threshold: number; // Only compress files larger than this (in bytes)
  algorithm: "simple" | "gzip" | "brotli";
  quality: number; // 0-1 for compression quality
}

export const DEFAULT_COMPRESSION_OPTIONS: CompressionOptions = {
  enabled: true,
  threshold: 100 * 1024, // 100KB
  algorithm: "simple",
  quality: 0.8,
};

export interface CompressionMetadata {
  originalSize: number;
  compressedSize: number;
  ratio: number;
  algorithm: string;
  timestamp: number;
}

// Simple text compression (lossless)
export function simpleCompress(
  content: string,
  options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS,
): {
  content: string;
  metadata: CompressionMetadata;
} {
  const originalSize = new Blob([content]).size;

  if (originalSize < options.threshold) {
    return {
      content,
      metadata: {
        originalSize,
        compressedSize: originalSize,
        ratio: 1,
        algorithm: "none",
        timestamp: Date.now(),
      },
    };
  }

  // Apply simple compression techniques
  let compressed = content
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\r/g, "\n") // Convert carriage returns to newlines
    .replace(/\n\s*\n\s*\n/g, "\n\n") // Remove excessive blank lines
    .replace(/[ \t]+/g, " ") // Normalize spaces
    .trim();

  // Remove trailing whitespace from lines
  compressed = compressed
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");

  // Remove empty lines at the beginning and end
  compressed = compressed.replace(/^\n+|\n+$/g, "");

  const compressedSize = new Blob([compressed]).size;
  const ratio = compressedSize / originalSize;

  return {
    content: compressed,
    metadata: {
      originalSize,
      compressedSize,
      ratio,
      algorithm: "simple",
      timestamp: Date.now(),
    },
  };
}

// Simple decompression (for simple compression, content is already decompressed)
export function simpleDecompress(content: string): string {
  return content;
}

// Check if content should be compressed
export function shouldCompress(
  content: string,
  options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS,
): boolean {
  if (!options.enabled) return false;

  const size = new Blob([content]).size;
  return size >= options.threshold;
}

// Get compression statistics
export function getCompressionStats(
  content: string,
  options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS,
): {
  shouldCompress: boolean;
  originalSize: number;
  estimatedCompressedSize: number;
  estimatedRatio: number;
  savings: number;
} {
  const originalSize = new Blob([content]).size;
  const shouldCompressResult = shouldCompress(content, options);

  if (!shouldCompressResult) {
    return {
      shouldCompress: false,
      originalSize,
      estimatedCompressedSize: originalSize,
      estimatedRatio: 1,
      savings: 0,
    };
  }

  // Estimate compression ratio based on content characteristics
  const lines = content.split("\n");
  const avgLineLength = lines.length > 0 ? content.length / lines.length : 0;
  const whitespaceRatio = (content.match(/\s/g) || []).length / content.length;

  // Simple estimation based on content characteristics
  let estimatedRatio = 0.8; // Default 20% compression

  if (whitespaceRatio > 0.3) {
    estimatedRatio *= 0.9; // More whitespace = better compression
  }

  if (avgLineLength > 100) {
    estimatedRatio *= 0.95; // Longer lines = better compression
  }

  const estimatedCompressedSize = Math.round(originalSize * estimatedRatio);
  const savings = originalSize - estimatedCompressedSize;

  return {
    shouldCompress: true,
    originalSize,
    estimatedCompressedSize,
    estimatedRatio,
    savings,
  };
}

// Batch compression for multiple files
export function batchCompress(
  files: Array<{ filename: string; content: string }>,
  options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS,
): Array<{ filename: string; content: string; metadata: CompressionMetadata }> {
  return files.map((file) => {
    const result = simpleCompress(file.content, options);
    return {
      filename: file.filename,
      content: result.content,
      metadata: result.metadata,
    };
  });
}

// Compression quality assessment
export function assessCompressionQuality(
  originalSize: number,
  compressedSize: number,
): "excellent" | "good" | "fair" | "poor" {
  const ratio = compressedSize / originalSize;

  if (ratio <= 0.5) return "excellent";
  if (ratio <= 0.7) return "good";
  if (ratio <= 0.9) return "fair";
  return "poor";
}

// Calculate compression savings
export function calculateCompressionSavings(
  originalSize: number,
  compressedSize: number,
): { bytes: number; percentage: number; formatted: string } {
  const bytes = originalSize - compressedSize;
  const percentage = originalSize > 0 ? (bytes / originalSize) * 100 : 0;

  return {
    bytes,
    percentage,
    formatted: `${bytes.toLocaleString()} bytes (${percentage.toFixed(1)}%)`,
  };
}

// Compression performance monitoring
export function measureCompressionPerformance<T>(
  fn: () => T,
  iterations = 1,
): { result: T; duration: number; averageDuration: number } {
  const start = performance.now();
  let result: T;

  for (let i = 0; i < iterations; i++) {
    result = fn();
  }

  const end = performance.now();
  const duration = end - start;
  const averageDuration = duration / iterations;

  return {
    result: result!,
    duration,
    averageDuration,
  };
}

// Adaptive compression based on content type
export function adaptiveCompress(
  content: string,
  filename: string,
): { content: string; metadata: CompressionMetadata } {
  const extension = filename.split(".").pop()?.toLowerCase();

  // Adjust compression based on file type
  const options: CompressionOptions = {
    ...DEFAULT_COMPRESSION_OPTIONS,
    threshold: extension === "json" ? 50 * 1024 : 100 * 1024, // Lower threshold for JSON
  };

  return simpleCompress(content, options);
}

// Content-aware compression
export function contentAwareCompress(content: string): {
  content: string;
  metadata: CompressionMetadata;
} {
  const originalSize = new Blob([content]).size;

  // Analyze content characteristics
  const lines = content.split("\n");
  const avgLineLength = lines.length > 0 ? content.length / lines.length : 0;
  const whitespaceRatio = (content.match(/\s/g) || []).length / content.length;
  const commentRatio = (content.match(/\/\/.*$/gm) || []).length / lines.length;

  // Adjust compression strategy based on content
  let compressed = content;

  // For code with many comments, be more aggressive with comment compression
  if (commentRatio > 0.1) {
    compressed = compressed.replace(/\/\/.*$/gm, ""); // Remove single-line comments
  }

  // For content with lots of whitespace, normalize more aggressively
  if (whitespaceRatio > 0.3) {
    compressed = compressed
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/[ \t]+/g, " ")
      .trim();
  }

  // For long lines, try to break them up for better compression
  if (avgLineLength > 150) {
    compressed = compressed
      .split("\n")
      .map((line) => {
        if (line.length > 150) {
          // Try to break at natural points
          return line.replace(/([,;{}])/g, "$1\n");
        }
        return line;
      })
      .join("\n");
  }

  const compressedSize = new Blob([compressed]).size;
  const ratio = compressedSize / originalSize;

  return {
    content: compressed,
    metadata: {
      originalSize,
      compressedSize,
      ratio,
      algorithm: "content-aware",
      timestamp: Date.now(),
    },
  };
}
