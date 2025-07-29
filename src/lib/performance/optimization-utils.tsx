// Performance optimization utilities for workshop creation

import { useCallback, useRef, useEffect, useState } from "react";

// Debounce utility
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Throttle utility
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          lastCall = Date.now();
          func(...args);
        },
        delay - (now - lastCall),
      );
    }
  };
}

// Memoization utilities
export function memoize<T extends (...args: unknown[]) => unknown>(
  func: T,
  keyGenerator?: (...args: Parameters<T>) => string,
): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result as ReturnType<T>);
    return result;
  }) as T;
}

// React-specific optimization hooks
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastRun.current >= delay) {
          setThrottledValue(value);
          lastRun.current = Date.now();
        }
      },
      delay - (Date.now() - lastRun.current),
    );

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}

// Performance monitoring utilities
export interface PerformanceMetrics {
  renderTime: number;
  memoryUsage?: number;
  timestamp: number;
}

export class PerformanceMonitor {
  private static metrics: PerformanceMetrics[] = [];
  private static maxMetrics = 100;

  static startTimer(): () => number {
    const start = performance.now();
    return () => performance.now() - start;
  }

  static recordMetric(metric: Omit<PerformanceMetrics, "timestamp">): void {
    const fullMetric: PerformanceMetrics = {
      ...metric,
      timestamp: Date.now(),
    };

    this.metrics.push(fullMetric);

    // Keep only the latest metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
  }

  static getAverageRenderTime(): number {
    if (this.metrics.length === 0) return 0;

    const total = this.metrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0,
    );
    return total / this.metrics.length;
  }

  static getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  static clearMetrics(): void {
    this.metrics = [];
  }
}

// File content optimization utilities
export function optimizeFileContent(content: string): string {
  // Remove excessive whitespace
  let optimized = content
    .replace(/\r\n/g, "\n") // Normalize line endings
    .replace(/\r/g, "\n") // Convert carriage returns to newlines
    .replace(/\n\s*\n\s*\n/g, "\n\n") // Remove excessive blank lines
    .trim();

  // Remove trailing whitespace from lines
  optimized = optimized
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");

  return optimized;
}

// Large file handling utilities
export function chunkString(str: string, chunkSize: number): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}

export function processLargeFile(
  content: string,
  processor: (chunk: string) => string,
  chunkSize: number = 1024 * 1024, // 1MB chunks
): string {
  if (content.length <= chunkSize) {
    return processor(content);
  }

  const chunks = chunkString(content, chunkSize);
  return chunks.map(processor).join("");
}

// Memory usage utilities
export function getMemoryUsage(): {
  used: number;
  total: number;
  percentage: number;
} {
  if (typeof performance !== "undefined" && "memory" in performance) {
    const memory = (
      performance as {
        memory: { usedJSHeapSize: number; totalJSHeapSize: number };
      }
    ).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100,
    };
  }

  return { used: 0, total: 0, percentage: 0 };
}

// React hook for memory monitoring
export function useMemoryMonitor(): {
  used: number;
  total: number;
  percentage: number;
} {
  const [memoryUsage, setMemoryUsage] = useState(getMemoryUsage());

  useEffect(() => {
    const interval = setInterval(() => {
      setMemoryUsage(getMemoryUsage());
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return memoryUsage;
}

// Virtual scrolling utilities for large lists
export interface VirtualScrollConfig {
  itemHeight: number;
  containerHeight: number;
  overscan: number;
}

export function useVirtualScroll<T>(
  items: T[],
  config: VirtualScrollConfig,
): {
  visibleItems: T[];
  startIndex: number;
  endIndex: number;
  totalHeight: number;
  scrollTop: number;
  setScrollTop: (scrollTop: number) => void;
} {
  const [scrollTop, setScrollTop] = useState(0);
  const { itemHeight, containerHeight, overscan } = config;

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan,
  );

  const visibleItems = items.slice(startIndex, endIndex);

  return {
    visibleItems,
    startIndex,
    endIndex,
    totalHeight,
    scrollTop,
    setScrollTop,
  };
}

// Lazy loading utilities
export function useLazyLoad<T>(
  items: T[],
  batchSize = 10,
): {
  visibleItems: T[];
  hasMore: boolean;
  loadMore: () => void;
} {
  const [visibleCount, setVisibleCount] = useState(batchSize);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + batchSize, items.length));
  }, [batchSize, items.length]);

  return {
    visibleItems,
    hasMore,
    loadMore,
  };
}
