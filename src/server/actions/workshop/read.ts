"use server";

import type { ActionResult } from "../../../lib/types";
import type { Workshop } from "@prisma/client";
import type {
  GetWorkshopsFilter,
  WorkshopQueryResult,
  WorkshopWithDetails,
  WorkshopWithOwnerAndExercises,
} from "./workshop.types";
import { auth } from "../../auth";
import { db } from "../../db";
import { ServerLogger } from "../../../lib/Logger/ServerLogger";

/**
 * Gets workshops with filtering, pagination, and user ownership context
 */
export async function getWorkshops(
  filter: GetWorkshopsFilter = {},
): Promise<ActionResult<WorkshopQueryResult>> {
  try {
    // Pagination parameters with defaults
    const page = Math.max(1, filter.page ?? 1);
    const limit = Math.max(1, Math.min(100, filter.limit ?? 20)); // Limit between 1-100
    const skip = (page - 1) * limit;

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

    // Get workshops with pagination
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
      skip,
      take: limit,
    });

    const workshopsWithDetails: WorkshopWithDetails[] = workshops.map(
      (workshop) => ({
        ...workshop,
        ownerName: workshop.owner.name ?? "Unknown",
        exerciseCount: workshop.exercises.length,
      }),
    );

    // Get total count for pagination calculations
    const totalCount = await db.workshop.count({ where });

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPreviousPage = page > 1;

    return {
      success: true,
      data: {
        workshops: workshopsWithDetails,
        totalCount,
        currentPage: page,
        totalPages,
        hasNextPage,
        hasPreviousPage,
        pageSize: limit,
      },
    };
  } catch (error) {
    ServerLogger.error("Failed to get workshops:", error);
    return { success: false, error: "Failed to load workshops" };
  }
}

/**
 * Gets a single workshop by ID with full details
 */
export async function getWorkshopById(
  id: string,
): Promise<ActionResult<WorkshopWithOwnerAndExercises>> {
  try {
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
    ServerLogger.error("Failed to get workshop:", error);
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
    ServerLogger.error("Failed to get user workshops:", error);
    return { success: false, error: "Failed to load your workshops" };
  }
}
