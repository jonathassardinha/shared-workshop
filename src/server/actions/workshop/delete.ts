"use server";

import type { ActionResult } from "../../../lib/types";
import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import { db } from "../../db";

/**
 * Deletes a workshop (only by owner)
 */
export async function deleteWorkshop(
  workshopId: string,
): Promise<ActionResult<void>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify ownership
    const workshop = await db.workshop.findFirst({
      where: {
        id: workshopId,
        ownerId: session.user.id,
      },
    });

    if (!workshop) {
      return { success: false, error: "Workshop not found or access denied" };
    }

    // Delete workshop (cascades to exercises and files)
    await db.workshop.delete({
      where: { id: workshopId },
    });

    revalidatePath("/workshops");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete workshop:", error);
    return { success: false, error: "Failed to delete workshop" };
  }
}

/**
 * Deletes an exercise from a workshop
 */
export async function deleteExercise(
  exerciseId: string,
): Promise<ActionResult<void>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify user owns the workshop through the exercise
    const exercise = await db.exercise.findFirst({
      where: {
        id: exerciseId,
        workshop: {
          ownerId: session.user.id,
        },
      },
      include: {
        workshop: true,
      },
    });

    if (!exercise) {
      return { success: false, error: "Exercise not found or access denied" };
    }

    // Delete exercise (cascades to files)
    await db.exercise.delete({
      where: { id: exerciseId },
    });

    revalidatePath(`/workshop/${exercise.workshop.id}`);

    return { success: true };
  } catch (error) {
    console.error("Failed to delete exercise:", error);
    return { success: false, error: "Failed to delete exercise" };
  }
}

/**
 * Deletes a file from an exercise
 */
export async function deleteWorkshopFile(
  fileId: string,
): Promise<ActionResult<void>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify user owns the workshop through the file's exercise
    const file = await db.workshopFile.findFirst({
      where: {
        id: fileId,
        exercise: {
          workshop: {
            ownerId: session.user.id,
          },
        },
      },
      include: {
        exercise: {
          include: {
            workshop: true,
          },
        },
      },
    });

    if (!file) {
      return { success: false, error: "File not found or access denied" };
    }

    // Delete file
    await db.workshopFile.delete({
      where: { id: fileId },
    });

    revalidatePath(`/workshop/${file.exercise.workshop.id}`);

    return { success: true };
  } catch (error) {
    console.error("Failed to delete workshop file:", error);
    return { success: false, error: "Failed to delete file" };
  }
}
