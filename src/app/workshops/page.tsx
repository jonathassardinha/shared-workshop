"use client";

import type { GetWorkshopsFilter } from "../../server/actions/workshop/workshop.types";
import type { WorkshopWithDetails } from "../../server/actions/workshop/workshop.types";
import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { WorkshopCard } from "../../components/workshop/WorkshopCard";
import { Pagination } from "../../components/ui/pagination";
import { useClientLogger } from "../../lib/Logger/ClientLogger";
import { getWorkshops } from "../../server/actions/workshop/read";

// Mock data removed - now using database queries

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-48 rounded-lg bg-gray-700"></div>
      <div className="mb-2 h-4 rounded bg-gray-700"></div>
      <div className="h-4 w-2/3 rounded bg-gray-700"></div>
    </div>
  );
}

export default function WorkshopsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const logger = useClientLogger();

  // State management
  const [workshops, setWorkshops] = useState<WorkshopWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // URL state management - read from URL params
  const urlStatusFilter = searchParams.get("status") || "all";
  const urlSearchQuery = searchParams.get("search") || "";
  const urlPage = parseInt(searchParams.get("page") || "1", 10);
  const urlPageSize = parseInt(searchParams.get("limit") || "20", 10);

  // Local state for immediate UI updates
  const [statusFilter, setStatusFilter] = useState<
    "all" | "live" | "planned" | "completed"
  >(urlStatusFilter as "all" | "live" | "planned" | "completed");
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);

  // Update URL with current state
  const updateURL = useCallback(
    (newParams: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      // Update or remove parameters
      Object.entries(newParams).forEach(([key, value]) => {
        if (value && value !== "all") {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      // Reset to page 1 when filters change (except for page changes)
      if (
        newParams.page === undefined &&
        (newParams.status || newParams.search)
      ) {
        params.delete("page");
      }

      const newURL = `?${params.toString()}`;
      router.push(newURL, { scroll: false });
    },
    [router, searchParams],
  );

  // Handle search input changes with debouncing
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value);
      updateURL({ search: value, page: "1" });
    },
    [updateURL],
  );

  // Handle status filter changes
  const handleStatusChange = useCallback(
    (value: typeof statusFilter) => {
      setStatusFilter(value);
      updateURL({ status: value, page: "1" });
    },
    [updateURL],
  );

  // Handle page changes
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      updateURL({ page: page.toString() });
    },
    [updateURL],
  );

  // Handle page size changes
  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      setPageSize(newPageSize);
      updateURL({ limit: newPageSize.toString(), page: "1" });
    },
    [updateURL],
  );

  // Sync local state with URL params
  useEffect(() => {
    setStatusFilter(urlStatusFilter as typeof statusFilter);
    setSearchQuery(urlSearchQuery);
    setCurrentPage(urlPage);
    setPageSize(urlPageSize);
  }, [urlStatusFilter, urlSearchQuery, urlPage, urlPageSize]);

  // Load workshops with current filters and pagination
  useEffect(() => {
    const loadWorkshops = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const filter: GetWorkshopsFilter = {
          page: currentPage,
          limit: pageSize,
        };

        // Apply status filter
        if (statusFilter !== "all") {
          filter.status = statusFilter.toUpperCase() as
            | "LIVE"
            | "PLANNED"
            | "COMPLETED";
        }

        // Apply search filter
        if (searchQuery.trim()) {
          filter.search = searchQuery.trim();
        }

        const result = await getWorkshops(filter);

        if (result.success) {
          setWorkshops(result.data.workshops);
          setTotalCount(result.data.totalCount);
          setTotalPages(result.data.totalPages);
          setCurrentPage(result.data.currentPage);
          setPageSize(result.data.pageSize);
        } else {
          setError(result.error);
          logger.error("Failed to load workshops:", result.error);
        }
      } catch (error) {
        const errorMessage = "Failed to load workshops";
        setError(errorMessage);
        logger.error("Error loading workshops:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadWorkshops();
  }, [logger, statusFilter, searchQuery, currentPage, pageSize]);

  // Memoized search input with debouncing
  const debouncedSearchQuery = useMemo(() => {
    const timeoutId = setTimeout(() => {
      handleSearchChange(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, handleSearchChange]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return debouncedSearchQuery;
  }, [debouncedSearchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Workshops</h1>
            <p className="mt-2 text-gray-400">
              Discover and join coding workshops or create your own
            </p>
          </div>
          <Link
            href="/workshop/create"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Create Workshop
          </Link>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search workshops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) =>
              handleStatusChange(e.target.value as typeof statusFilter)
            }
            className="rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Workshops</option>
            <option value="live">Live Only</option>
            <option value="planned">Planned Only</option>
            <option value="completed">Completed Only</option>
          </select>
        </div>

        {error && (
          <div className="mb-6 rounded-md border border-red-500 bg-red-500/10 p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>

            {/* Pagination */}
            {totalCount > 0 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={pageSize}
                  totalCount={totalCount}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                  pageSizeOptions={[10, 20, 50]}
                  showPageSizeSelector={true}
                />
              </div>
            )}
          </>
        )}

        {!isLoading && workshops.length === 0 && !error && (
          <div className="py-12 text-center">
            <p className="mb-4 text-gray-400">
              {searchQuery || statusFilter !== "all"
                ? "No workshops match your search criteria"
                : "No workshops found"}
            </p>
            {session?.user && (
              <Link
                href="/workshop/create"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Create First Workshop
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
