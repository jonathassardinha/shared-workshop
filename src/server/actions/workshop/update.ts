"use server";

import type { ActionResult } from "../../../lib/types";
import type { Prisma, WorkshopStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import { db } from "../../db";

/**
 * Updates a workshop (only by owner)
 */
export async function updateWorkshop(
  workshopId: string,
  input: Prisma.WorkshopUpdateInput,
): Promise<ActionResult<unknown>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify ownership
    const existingWorkshop = await db.workshop.findFirst({
      where: {
        id: workshopId,
        ownerId: session.user.id,
      },
    });

    if (!existingWorkshop) {
      return { success: false, error: "Workshop not found or access denied" };
    }

    // Build update data
    const updateData: Prisma.WorkshopUpdateInput = {};
    if (input.title !== undefined) updateData.title = input.title;
    if (input.description !== undefined)
      updateData.description = input.description;
    if (input.status !== undefined) updateData.status = input.status;

    const workshop = await db.workshop.update({
      where: { id: workshopId },
      data: updateData,
    });

    revalidatePath("/workshops");
    revalidatePath(`/workshop/${workshopId}`);

    return { success: true, data: workshop };
  } catch (error) {
    console.error("Failed to update workshop:", error);
    return { success: false, error: "Failed to update workshop" };
  }
}

/**
 * Updates workshop status (e.g., from PLANNED to LIVE)
 */
export async function updateWorkshopStatus(
  workshopId: string,
  status: WorkshopStatus,
): Promise<ActionResult<unknown>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    const result = await updateWorkshop(workshopId, {
      status,
    });

    return result;
  } catch (error) {
    console.error("Failed to update workshop status:", error);
    return { success: false, error: "Failed to update workshop status" };
  }
}

/**
 * Updates an exercise
 */
export async function updateExercise(
  exerciseId: string,
  input: Prisma.ExerciseUpdateInput,
): Promise<ActionResult<unknown>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify user owns the workshop through the exercise
    const existingExercise = await db.exercise.findFirst({
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

    if (!existingExercise) {
      return { success: false, error: "Exercise not found or access denied" };
    }

    // Build update data
    const updateData: Prisma.ExerciseUpdateInput = {};
    if (input.title !== undefined) updateData.title = input.title;
    if (input.description !== undefined)
      updateData.description = input.description;
    if (input.order !== undefined) updateData.order = input.order;

    const exercise = await db.exercise.update({
      where: { id: exerciseId },
      data: updateData,
    });

    revalidatePath(`/workshop/${existingExercise.workshop.id}`);

    return { success: true, data: exercise };
  } catch (error) {
    console.error("Failed to update exercise:", error);
    return { success: false, error: "Failed to update exercise" };
  }
}

/**
 * Updates a workshop file
 */
export async function updateWorkshopFile(
  workshopFileId: string,
  input: Prisma.WorkshopFileUpdateInput,
): Promise<ActionResult<unknown>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify user owns the workshop through the file's exercise
    const existingFile = await db.workshopFile.findFirst({
      where: {
        id: workshopFileId,
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

    if (!existingFile) {
      return { success: false, error: "File not found or access denied" };
    }

    // Build update data
    const updateData: Prisma.WorkshopFileUpdateInput = {};
    if (input.filename !== undefined) updateData.filename = input.filename;
    if (input.content !== undefined) updateData.content = input.content;
    if (input.language !== undefined) updateData.language = input.language;

    const file = await db.workshopFile.update({
      where: { id: workshopFileId },
      data: updateData,
    });

    revalidatePath(`/workshop/${existingFile.exercise.workshop.id}`);

    return { success: true, data: file };
  } catch (error) {
    console.error("Failed to update workshop file:", error);
    return { success: false, error: "Failed to update file" };
  }
}
