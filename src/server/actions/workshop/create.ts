"use server";

import type { ActionResult } from "../../../lib/types";
import type { WorkshopWithDetails } from "./workshop.types";
import type { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "../../auth";
import { db } from "../../db";

/**
 * Creates a new workshop
 */
export async function createWorkshop(
  input: Prisma.WorkshopCreateInput,
): Promise<ActionResult<WorkshopWithDetails>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    const workshop = await db.workshop.create({
      data: {
        title: input.title,
        description: input.description,
        ownerId: session.user.id,
      },
      include: {
        owner: {
          select: {
            name: true,
          },
        },
        exercises: true,
      },
    });

    const workshopWithDetails: WorkshopWithDetails = {
      ...workshop,
      ownerName: workshop.owner.name ?? "Unknown",
      exerciseCount: workshop.exercises.length,
    };

    revalidatePath("/workshops");
    return { success: true, data: workshopWithDetails };
  } catch (error) {
    console.error("Failed to create workshop:", error);
    return { success: false, error: "Failed to create workshop" };
  }
}

/**
 * Creates a new exercise for a workshop
 */
export async function createExercise(
  workshopId: string,
  input: Prisma.ExerciseCreateInput,
): Promise<ActionResult<unknown>> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Verify user owns the workshop
    const workshop = await db.workshop.findFirst({
      where: {
        id: workshopId,
        ownerId: session.user.id,
      },
    });

    if (!workshop) {
      return { success: false, error: "Workshop not found or access denied" };
    }

    const exercise = await db.exercise.create({
      data: {
        title: input.title,
        description: input.description,
        order: input.order,
        workshopId,
      },
    });

    revalidatePath(`/workshop/${workshopId}`);
    return { success: true, data: exercise };
  } catch (error) {
    console.error("Failed to create exercise:", error);
    return { success: false, error: "Failed to create exercise" };
  }
}

/**
 * Creates a new file for an exercise
 */
export async function createWorkshopFile(
  exerciseId: string,
  input: Prisma.WorkshopFileCreateInput,
): Promise<ActionResult<unknown>> {
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

    // Check for duplicate filename
    const existingFile = await db.workshopFile.findFirst({
      where: {
        exerciseId,
        filename: input.filename,
      },
    });

    if (existingFile) {
      return { success: false, error: "File with this name already exists" };
    }

    const file = await db.workshopFile.create({
      data: {
        filename: input.filename,
        content: input.content,
        language: input.language,
        exerciseId,
      },
    });

    revalidatePath(`/workshop/${exercise.workshop.id}`);
    return { success: true, data: file };
  } catch (error) {
    console.error("Failed to create workshop file:", error);
    return { success: false, error: "Failed to create file" };
  }
}
