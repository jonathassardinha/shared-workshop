"use server";

import type { ActionResult } from "../../../lib/types";
import type { SignInInput, SessionInfo, AuthStatusResult } from "./types";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "../../auth";

/**
 * Gets the current session information
 */
export async function getSessionInfo(): Promise<ActionResult<SessionInfo>> {
  try {
    const session = await auth();

    const sessionInfo: SessionInfo = {
      user: session?.user
        ? {
            id: session.user.id ?? "",
            name: session.user.name ?? null,
            email: session.user.email ?? null,
            image: session.user.image ?? null,
          }
        : null,
      isAuthenticated: !!session?.user,
    };

    return { success: true, data: sessionInfo };
  } catch (error) {
    console.error("Failed to get session info:", error);
    return { success: false, error: "Failed to get session information" };
  }
}

/**
 * Gets authentication status
 */
export async function getAuthStatus(): Promise<ActionResult<AuthStatusResult>> {
  try {
    const session = await auth();

    const authStatus: AuthStatusResult = {
      isAuthenticated: !!session?.user,
      user: session?.user
        ? {
            id: session.user.id ?? "",
            name: session.user.name ?? null,
            email: session.user.email ?? null,
            image: session.user.image ?? null,
          }
        : null,
    };

    return { success: true, data: authStatus };
  } catch (error) {
    console.error("Failed to get auth status:", error);
    return { success: false, error: "Failed to get authentication status" };
  }
}

/**
 * Signs in a user (redirects on success)
 */
export async function signInUser(input: SignInInput) {
  try {
    if (input.provider) {
      await signIn(input.provider);
    } else {
      await signIn("mock", { userId: input.email }); // Mock provider for development
    }
  } catch (error) {
    console.error("Failed to sign in:", error);
    throw error;
  }
}

/**
 * Signs out the current user (redirects)
 */
export async function signOutUser() {
  try {
    await signOut();
  } catch (error) {
    console.error("Failed to sign out:", error);
    throw error;
  }
}
