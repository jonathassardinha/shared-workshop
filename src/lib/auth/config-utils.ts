/**
 * Authentication configuration utilities for different environments
 * Handles development vs production specific settings
 */

/* eslint-disable no-console */
import { env } from "../../env.js";

/**
 * Check if we're in development mode
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Check if we're in production mode
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Get environment-specific NextAuth URL
 */
export function getNextAuthUrl(): string {
  if (isDevelopment()) {
    return env.NEXTAUTH_URL ?? "http://localhost:3000";
  }

  // In production, NEXTAUTH_URL must be set
  if (!env.NEXTAUTH_URL) {
    throw new Error("NEXTAUTH_URL must be set in production environment");
  }

  return env.NEXTAUTH_URL;
}

/**
 * Get environment-specific OAuth callback URLs
 */
export function getOAuthCallbacks() {
  const baseUrl = getNextAuthUrl();

  return {
    github: `${baseUrl}/api/auth/callback/github`,
    // Add other providers here as needed
  };
}

/**
 * Validate authentication environment variables
 */
export function validateAuthConfig(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check required environment variables
  if (!env.AUTH_SECRET) {
    errors.push("AUTH_SECRET is required");
  }

  if (!env.GITHUB_CLIENT_ID) {
    errors.push("GITHUB_CLIENT_ID is required");
  }

  if (!env.GITHUB_CLIENT_SECRET) {
    errors.push("GITHUB_CLIENT_SECRET is required");
  }

  if (isProduction() && !env.NEXTAUTH_URL) {
    errors.push("NEXTAUTH_URL is required in production");
  }

  // Validate AUTH_SECRET strength (should be at least 32 characters)
  if (env.AUTH_SECRET && env.AUTH_SECRET.length < 32) {
    errors.push(
      "AUTH_SECRET should be at least 32 characters long for security",
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Get appropriate error messages for different OAuth errors
 */
export function getOAuthErrorMessage(error: string): string {
  switch (error) {
    case "Configuration":
      return "There was a problem with the authentication configuration. Please try again later.";
    case "AccessDenied":
      return "You denied access to your GitHub account. Please try signing in again if you want to continue.";
    case "Verification":
      return "The verification link has expired or been used already. Please try signing in again.";
    case "Default":
      return "An error occurred during authentication. Please try again.";
    default:
      return "Something went wrong during authentication. Please try again.";
  }
}

/**
 * Log authentication events (development vs production logging)
 */
export function logAuthEvent(
  event: string,
  details?: Record<string, unknown>,
): void {
  if (isDevelopment()) {
    // In development, log to console for debugging
    console.log(`[AUTH] ${event}`, details);
  } else {
    // In production, you might want to send to external logging service
    // For now, just log errors
    if (event.includes("error") || event.includes("Error")) {
      console.error(`[AUTH] ${event}`, details);
    }
  }
}
