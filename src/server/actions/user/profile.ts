"use server";

import type { ActionResult } from "../../../lib/types";
import type {
  UpdateUserProfileInput,
  UserProfile,
  UserWithStats,
} from "./types";
import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import { db } from "../../db";

/**
 * Gets the current user's profile
 */
export async function getUserProfile(): Promise<ActionResult<UserProfile>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return { success: true, data: user };
  } catch (error) {
    console.error("Failed to get user profile:", error);
    return { success: false, error: "Failed to load profile" };
  }
}

/**
 * Gets user profile with workshop statistics
 */
export async function getUserWithStats(): Promise<ActionResult<UserWithStats>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        workshops: {
          select: {
            status: true,
          },
        },
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const stats: UserWithStats = {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      workshopCount: user.workshops.length,
      liveWorkshops: user.workshops.filter((w) => w.status === "LIVE").length,
      completedWorkshops: user.workshops.filter((w) => w.status === "COMPLETED")
        .length,
    };

    return { success: true, data: stats };
  } catch (error) {
    console.error("Failed to get user stats:", error);
    return { success: false, error: "Failed to load user statistics" };
  }
}

/**
 * Updates the current user's profile
 */
export async function updateUserProfile(
  input: UpdateUserProfileInput,
): Promise<ActionResult<UserProfile>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Build update data
    const updateData: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } = {};
    if (input.name !== undefined) updateData.name = input.name;
    if (input.email !== undefined) updateData.email = input.email;
    if (input.image !== undefined) updateData.image = input.image;

    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    revalidatePath("/profile");

    return { success: true, data: updatedUser };
  } catch (error) {
    console.error("Failed to update user profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}
