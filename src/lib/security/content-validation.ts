// Content validation utilities for security

export interface SecurityValidationResult {
  isValid: boolean;
  warnings: string[];
  sanitizedContent: string;
}

export interface SecurityConfig {
  maxContentLength: number;
  allowedTags: string[];
  allowedAttributes: string[];
  blockScripts: boolean;
  blockEval: boolean;
  blockUrls: boolean;
}

export const DEFAULT_SECURITY_CONFIG: SecurityConfig = {
  maxContentLength: 1024 * 1024, // 1MB
  allowedTags: ["p", "br", "strong", "em", "code", "pre"],
  allowedAttributes: ["class", "id"],
  blockScripts: true,
  blockEval: true,
  blockUrls: true,
};

// Content sanitization
export function sanitizeContent(
  content: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG,
): SecurityValidationResult {
  const warnings: string[] = [];
  let sanitized = content;

  // Check content length
  if (content.length > config.maxContentLength) {
    warnings.push(
      `Content exceeds maximum length of ${config.maxContentLength} characters`,
    );
  }

  // Remove script tags and content
  if (config.blockScripts) {
    const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    if (scriptPattern.test(sanitized)) {
      warnings.push("Script tags detected and removed");
      sanitized = sanitized.replace(scriptPattern, "");
    }
  }

  // Remove eval-like patterns
  if (config.blockEval) {
    const evalPattern = /\beval\s*\(/gi;
    if (evalPattern.test(sanitized)) {
      warnings.push("Eval-like patterns detected and removed");
      sanitized = sanitized.replace(evalPattern, "");
    }
  }

  // Remove URLs if blocked
  if (config.blockUrls) {
    const urlPattern = /https?:\/\/[^\s<>"]+/gi;
    if (urlPattern.test(sanitized)) {
      warnings.push("URLs detected and removed");
      sanitized = sanitized.replace(urlPattern, "");
    }
  }

  // Remove dangerous HTML tags
  const dangerousTags = [
    "script",
    "iframe",
    "object",
    "embed",
    "form",
    "input",
    "button",
  ];
  dangerousTags.forEach((tag) => {
    const tagPattern = new RegExp(
      `<${tag}\\b[^>]*>.*?</${tag}>|<${tag}\\b[^>]*\\/>`,
      "gi",
    );
    if (tagPattern.test(sanitized)) {
      warnings.push(`Dangerous tag <${tag}> detected and removed`);
      sanitized = sanitized.replace(tagPattern, "");
    }
  });

  // Remove null bytes and control characters
  sanitized = sanitized
    .replace(/\0/g, "") // Remove null bytes
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Remove control characters except newlines and tabs

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedContent: sanitized,
  };
}

// File content security validation
export function validateFileContentSecurity(
  content: string,
): SecurityValidationResult {
  const warnings: string[] = [];

  // Check for potential XSS patterns
  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^>]*>/gi,
    /<object\b[^>]*>/gi,
    /<embed\b[^>]*>/gi,
  ];

  xssPatterns.forEach((pattern, index) => {
    if (pattern.test(content)) {
      warnings.push(`Potential XSS pattern detected (pattern ${index + 1})`);
    }
  });

  // Check for code injection patterns
  const injectionPatterns = [
    /\beval\s*\(/gi,
    /\bFunction\s*\(/gi,
    /\bsetTimeout\s*\(/gi,
    /\bsetInterval\s*\(/gi,
    /\bexec\s*\(/gi,
  ];

  injectionPatterns.forEach((pattern, index) => {
    if (pattern.test(content)) {
      warnings.push(
        `Potential code injection pattern detected (pattern ${index + 1})`,
      );
    }
  });

  // Check for excessive repetition (potential DoS)
  const repeatedPatterns = content.match(/(.{10,})\1{10,}/g);
  if (repeatedPatterns && repeatedPatterns.length > 0) {
    warnings.push("Excessive repetition patterns detected");
  }

  // Check for extremely long lines
  const lines = content.split("\n");
  const longLines = lines.filter((line) => line.length > 1000);
  if (longLines.length > 0) {
    warnings.push(
      `Found ${longLines.length} lines longer than 1000 characters`,
    );
  }

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedContent: content, // Return original content for now
  };
}

// Input validation for workshop data
export function validateWorkshopInput(data: {
  title: string;
  description: string;
  exercises: Array<{ title: string; description: string }>;
}): SecurityValidationResult {
  const warnings: string[] = [];

  // Validate title
  if (data.title.length > 100) {
    warnings.push("Workshop title is too long (max 100 characters)");
  }

  if (!/^[a-zA-Z0-9\s\-_]+$/.test(data.title)) {
    warnings.push("Workshop title contains invalid characters");
  }

  // Validate description
  if (data.description.length > 1000) {
    warnings.push("Workshop description is too long (max 1000 characters)");
  }

  // Validate exercises
  data.exercises.forEach((exercise, index) => {
    if (exercise.title.length > 200) {
      warnings.push(
        `Exercise ${index + 1} title is too long (max 200 characters)`,
      );
    }

    if (exercise.description.length > 500) {
      warnings.push(
        `Exercise ${index + 1} description is too long (max 500 characters)`,
      );
    }
  });

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedContent: JSON.stringify(data),
  };
}

// Rate limiting utilities
export class RateLimiter {
  private requests = new Map<string, number[]>();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(key: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    if (!this.requests.has(key)) {
      this.requests.set(key, [now]);
      return true;
    }

    const requests = this.requests.get(key)!;
    const recentRequests = requests.filter((time) => time > windowStart);

    if (recentRequests.length >= this.maxRequests) {
      return false;
    }

    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    return true;
  }

  getRemainingRequests(key: string): number {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    if (!this.requests.has(key)) {
      return this.maxRequests;
    }

    const requests = this.requests.get(key);
    if (!requests) return this.maxRequests;
    const recentRequests = requests.filter((time) => time > windowStart);
    return Math.max(0, this.maxRequests - recentRequests.length);
  }

  reset(key: string): void {
    this.requests.delete(key);
  }

  clear(): void {
    this.requests.clear();
  }
}

// Content type validation
export function validateContentType(
  filename: string,
  content: string,
): SecurityValidationResult {
  const warnings: string[] = [];
  const extension = filename.split(".").pop()?.toLowerCase();

  // Check file extension vs content type
  if (extension === "html" || extension === "htm") {
    if (!content.includes("<html") && !content.includes("<!DOCTYPE")) {
      warnings.push("HTML file doesn't contain valid HTML structure");
    }
  }

  if (extension === "json") {
    try {
      JSON.parse(content);
    } catch {
      warnings.push("JSON file contains invalid JSON");
    }
  }

  if (extension === "js" || extension === "ts") {
    // Basic JavaScript/TypeScript validation
    if (content.includes("eval(") || content.includes("Function(")) {
      warnings.push("JavaScript file contains potentially dangerous code");
    }
  }

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedContent: content,
  };
}

// File size validation
export function validateFileSize(
  content: string,
  maxSize: number = 1024 * 1024,
): SecurityValidationResult {
  const warnings: string[] = [];
  const size = new Blob([content]).size;

  if (size > maxSize) {
    warnings.push(
      `File size (${size} bytes) exceeds maximum allowed size (${maxSize} bytes)`,
    );
  }

  return {
    isValid: warnings.length === 0,
    warnings,
    sanitizedContent: content,
  };
}

// Comprehensive content validation
export function validateContentComprehensive(
  content: string,
  filename: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG,
): SecurityValidationResult {
  const results = [
    sanitizeContent(content, config),
    validateFileContentSecurity(content),
    validateContentType(filename, content),
    validateFileSize(content, config.maxContentLength),
  ];

  const allWarnings = results.flatMap((result) => result.warnings);
  const isValid = results.every((result) => result.isValid);

  return {
    isValid,
    warnings: allWarnings,
    sanitizedContent: results[0]?.sanitizedContent ?? "", // Use sanitized content from first result
  };
}
