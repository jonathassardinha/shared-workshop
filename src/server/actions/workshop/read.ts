"use server";

import type { ActionResult } from "../../../lib/types";
import type { Workshop } from "@prisma/client";
import type {
  GetWorkshopsFilter,
  WorkshopQueryResult,
  WorkshopWithDetails,
  WorkshopWithExercises,
} from "./types";
import { auth } from "../../auth";
import { db } from "../../db";

/**
 * Gets workshops with filtering and user ownership context
 */
export async function getWorkshops(
  filter: GetWorkshopsFilter = {},
): Promise<ActionResult<WorkshopQueryResult>> {
  try {
    const session = await auth();

    const where: {
      ownerId?: string;
      status?: Workshop["status"];
      OR?: Array<{
        title?: { contains: string; mode: "insensitive" };
        description?: { contains: string; mode: "insensitive" };
      }>;
    } = {};

    // Apply filters
    if (filter.ownerId) {
      where.ownerId = filter.ownerId;
    }

    if (filter.status) {
      where.status = filter.status;
    }

    if (filter.search) {
      where.OR = [
        { title: { contains: filter.search, mode: "insensitive" } },
        { description: { contains: filter.search, mode: "insensitive" } },
      ];
    }

    const workshops = await db.workshop.findMany({
      where,
      include: {
        owner: {
          select: {
            name: true,
          },
        },
        exercises: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const workshopsWithDetails: WorkshopWithDetails[] = workshops.map(
      (workshop) => ({
        ...workshop,
        ownerName: workshop.owner.name ?? "Unknown",
        exerciseCount: workshop.exercises.length,
      }),
    );

    const totalCount = await db.workshop.count({ where });

    return {
      success: true,
      data: {
        workshops: workshopsWithDetails,
        totalCount,
      },
    };
  } catch (error) {
    console.error("Failed to get workshops:", error);
    return { success: false, error: "Failed to load workshops" };
  }
}

/**
 * Gets a single workshop by ID with full details
 */
export async function getWorkshopById(
  id: string,
): Promise<ActionResult<WorkshopWithExercises>> {
  try {
    const session = await auth();

    const workshop = await db.workshop.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        exercises: {
          include: {
            files: true,
          },
          orderBy: {
            order: "asc",
          },
        },
      },
    });

    if (!workshop) {
      return { success: false, error: "Workshop not found" };
    }

    return { success: true, data: workshop };
  } catch (error) {
    console.error("Failed to get workshop:", error);
    return { success: false, error: "Failed to load workshop" };
  }
}

/**
 * Gets workshops owned by the current user
 */
export async function getMyWorkshops(): Promise<
  ActionResult<WorkshopWithDetails[]>
> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required" };
    }

    const result = await getWorkshops({ ownerId: session.user.id });

    if (!result.success || !result.data) {
      return {
        success: false,
        error: result.error || "Failed to load workshops",
      };
    }

    return { success: true, data: result.data.workshops };
  } catch (error) {
    console.error("Failed to get user workshops:", error);
    return { success: false, error: "Failed to load your workshops" };
  }
}
