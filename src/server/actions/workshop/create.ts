"use server";

import type { ActionResult } from "../../../lib/types";
import type { WorkshopWithDetails } from "./workshop.types";
import type { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { ServerLogger } from "@/lib/Logger/ServerLogger";
import { auth } from "../../auth";
import { db } from "../../db";

// Type for complete workshop creation with exercises and files
interface CreateWorkshopWithExercisesInput {
  title: string;
  description: string;
  status?: "PLANNED" | "LIVE" | "COMPLETED";
  exercises: Array<{
    title: string;
    description: string;
    order: number;
    files: Record<string, { language: string; content: string }>;
  }>;
}

/**
 * Creates a complete workshop with exercises and files
 */
export async function createWorkshop(
  input: CreateWorkshopWithExercisesInput,
): Promise<ActionResult<WorkshopWithDetails>> {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    // Create everything in a transaction to ensure consistency
    const result = await db.$transaction(async (tx) => {
      // 1. Create the workshop
      const workshop = await tx.workshop.create({
        data: {
          title: input.title,
          description: input.description,
          status: input.status ?? "PLANNED",
          ownerId: session.user.id!,
        },
      });

      // 2. Create exercises and files
      for (const exerciseData of input.exercises) {
        const exercise = await tx.exercise.create({
          data: {
            title: exerciseData.title,
            description: exerciseData.description,
            order: exerciseData.order,
            workshopId: workshop.id,
          },
        });

        // 3. Create files for this exercise
        for (const [filename, fileData] of Object.entries(exerciseData.files)) {
          await tx.workshopFile.create({
            data: {
              filename,
              content: fileData.content,
              language: fileData.language,
              exerciseId: exercise.id,
            },
          });
        }
      }

      // Return workshop with full details
      return await tx.workshop.findUnique({
        where: { id: workshop.id },
        include: {
          owner: {
            select: {
              name: true,
            },
          },
          exercises: {
            include: {
              files: true,
            },
          },
        },
      });
    });

    const workshopWithDetails: WorkshopWithDetails = {
      ...result!,
      ownerName: result!.owner.name ?? "Unknown",
      exerciseCount: result!.exercises.length,
    };

    revalidatePath("/workshops");
    return { success: true, data: workshopWithDetails };
  } catch (error) {
    ServerLogger.error("Failed to create workshop:", error);
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
    ServerLogger.error("Failed to create exercise:", error);
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
    ServerLogger.error("Failed to create workshop file:", error);
    return { success: false, error: "Failed to create file" };
  }
}
