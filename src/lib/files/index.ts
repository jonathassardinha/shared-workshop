// Unified file utilities exports

export * from "./content-utils";
export * from "./compression";

// Re-export commonly used types and utilities
export type { FileContentInfo, CompressionResult } from "./content-utils";

export type { CompressionOptions, CompressionMetadata } from "./compression";

// Re-export utility functions
export {
  compressContent,
  decompressContent,
  getFileContentInfo,
  formatFileSize,
  validateFileSize,
  sanitizeFileContent,
  checkContentSecurity,
  optimizeContentForStorage,
  calculateContentHash,
  detectFileTypeFromContent,
  getContentStatistics,
} from "./content-utils";

export {
  simpleCompress,
  simpleDecompress,
  shouldCompress,
  getCompressionStats,
  batchCompress,
  assessCompressionQuality,
  calculateCompressionSavings,
  measureCompressionPerformance,
  adaptiveCompress,
  contentAwareCompress,
} from "./compression";

// Re-export constants
export { DEFAULT_COMPRESSION_OPTIONS } from "./compression";
