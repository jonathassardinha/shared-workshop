# Pagination Implementation Guide

## Overview

This document describes the pagination implementation for the workshop listing functionality. The pagination system provides traditional page-based navigation with configurable page sizes, URL state management, and optimized performance.

## Architecture

### Server-Side Pagination

The server-side pagination is implemented in the `getWorkshops` server action:

```typescript
// src/server/actions/workshop/read.ts
export async function getWorkshops(
  filter: GetWorkshopsFilter = {},
): Promise<ActionResult<WorkshopQueryResult>> {
  // Pagination parameters with defaults
  const page = Math.max(1, filter.page ?? 1);
  const limit = Math.max(1, Math.min(100, filter.limit ?? 20));
  const skip = (page - 1) * limit;

  // Get workshops with pagination
  const workshops = await db.workshop.findMany({
    where,
    include: { owner: { select: { name: true } }, exercises: true },
    orderBy: { createdAt: "desc" },
    skip,
    take: limit,
  });

  // Get total count for pagination calculations
  const totalCount = await db.workshop.count({ where });
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
}
```

### Client-Side Components

#### Pagination Component

The `Pagination` component provides a complete pagination interface:

```typescript
// src/components/ui/pagination.tsx
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  showPageSizeSelector?: boolean;
  isLoading?: boolean;
  className?: string;
}
```

**Features:**

- Previous/Next navigation buttons
- Page number display with ellipsis for large page counts
- Page size selector (10, 20, 50 options)
- Item count display ("Showing X-Y of Z items")
- Loading state support
- Accessibility features (ARIA labels, keyboard navigation)

#### Workshop Listing Integration

The workshop listing page integrates pagination with URL state management:

```typescript
// src/app/workshops/page.tsx
export default function WorkshopsPage() {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // URL state management
  const urlPage = parseInt(searchParams.get("page") ?? "1", 10);
  const urlPageSize = parseInt(searchParams.get("limit") ?? "20", 10);

  // Event handlers
  const handlePageChange = useCallback(
    (page: number) => {
      setIsPageTransitioning(true);
      setCurrentPage(page);
      updateURL({ page: page.toString() });
    },
    [updateURL],
  );

  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      setPageSize(newPageSize);
      updateURL({ limit: newPageSize.toString(), page: "1" });
    },
    [updateURL],
  );
}
```

## URL State Management

### URL Parameters

The pagination state is reflected in URL parameters:

```
/workshops?page=2&limit=20&status=live&search=react
```

**Parameters:**

- `page`: Current page number (default: 1)
- `limit`: Items per page (default: 20, options: 10, 20, 50)
- `status`: Filter by workshop status (all, live, planned, completed)
- `search`: Search query for title/description

### State Synchronization

The component synchronizes state with URL parameters:

```typescript
// Sync local state with URL params
useEffect(() => {
  setStatusFilter(urlStatusFilter as typeof statusFilter);
  setSearchQuery(urlSearchQuery);
  setCurrentPage(urlPage);
  setPageSize(urlPageSize);
}, [urlStatusFilter, urlSearchQuery, urlPage, urlPageSize]);
```

## Performance Optimizations

### Client-Side Optimizations

1. **Memoized Components:**

   ```typescript
   export const WorkshopCard = memo(function WorkshopCard({
     workshop,
     showOwnership = false,
   }: WorkshopCardProps) {
     // Memoize expensive calculations
     const ownershipStatus = useMemo(
       () => getOwnershipStatus(workshop.ownerId),
       [workshop.ownerId],
     );
   });
   ```

2. **Debounced Search:**

   ```typescript
   useEffect(() => {
     const timeoutId = setTimeout(() => {
       handleSearchChange(searchQuery);
     }, 300);
     return () => clearTimeout(timeoutId);
   }, [searchQuery]);
   ```

3. **Memoized Lists:**
   ```typescript
   const workshopCards = useMemo(() => {
     return workshops.map((workshop) => (
       <WorkshopCard key={workshop.id} workshop={workshop} />
     ));
   }, [workshops]);
   ```

### Loading States

1. **Skeleton Loading:**

   ```typescript
   export function WorkshopCardSkeleton() {
     return (
       <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
         <Skeleton className="mb-2 h-6 w-3/4" />
         <Skeleton className="mb-1 h-4 w-full" />
         {/* ... more skeleton elements */}
       </div>
     );
   }
   ```

2. **Page Transition Loading:**

   ```typescript
   const [isPageTransitioning, setIsPageTransitioning] = useState(false);

   const handlePageChange = useCallback(
     (page: number) => {
       setIsPageTransitioning(true);
       setCurrentPage(page);
       updateURL({ page: page.toString() });
     },
     [updateURL],
   );
   ```

## Error Handling

### Graceful Error Display

```typescript
{error && (
  <div className="mb-6 rounded-md border border-red-500 bg-red-500/10 p-4">
    <div className="flex items-center gap-2">
      <svg className="h-5 w-5 text-red-400" /* ... */ />
      <p className="text-sm text-red-400">{error}</p>
    </div>
    <button
      onClick={() => {
        setError(null);
        // Retry loading workshops
      }}
      className="mt-2 text-sm text-red-300 hover:text-red-200 underline"
    >
      Try again
    </button>
  </div>
)}
```

### Network Failure Handling

The system handles network failures gracefully:

- Shows appropriate error messages
- Provides retry functionality
- Maintains current state during failures
- Logs errors for debugging

## User Experience Features

### Active Filter Display

```typescript
{(searchQuery || statusFilter !== "all") && (
  <div className="mb-4 flex flex-wrap items-center gap-2">
    <span className="text-sm text-gray-400">Active filters:</span>
    {searchQuery && (
      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
        Search: &quot;{searchQuery}&quot;
        <button onClick={() => clearSearch()}>×</button>
      </span>
    )}
    {/* ... more filter badges */}
  </div>
)}
```

### Accessibility

The pagination component includes:

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure

## Testing

### Manual Testing Checklist

- [ ] Pagination navigation works (previous/next, page numbers)
- [ ] Page size selector changes results correctly
- [ ] URL parameters update when pagination changes
- [ ] Browser back/forward navigation works
- [ ] Pagination resets when filters change
- [ ] Search is debounced and doesn't cause excessive requests
- [ ] Loading states show during page transitions
- [ ] Error handling works for pagination failures
- [ ] Workshop cards don't re-render unnecessarily
- [ ] Empty states show appropriate messages
- [ ] Keyboard navigation works for pagination
- [ ] Mobile responsive pagination

### Performance Testing

- Page transitions: < 500ms
- Search debounce: 300ms delay
- Component re-renders: Minimal (only when necessary)
- Memory usage: No memory leaks during pagination

## Troubleshooting

### Common Issues

1. **Page Reset Issue:**
   - **Problem**: Page reverts to 1 when changing pages
   - **Solution**: Ensure URL state management doesn't cause loops
   - **Prevention**: Use proper dependency arrays in useEffect

2. **Infinite Render Loops:**
   - **Problem**: Component re-renders infinitely
   - **Solution**: Check useEffect dependencies and memoization
   - **Prevention**: Use useCallback and useMemo appropriately

3. **URL State Desync:**
   - **Problem**: URL doesn't match component state
   - **Solution**: Ensure proper URL parameter handling
   - **Prevention**: Use URL as single source of truth

### Debugging Tips

1. **Check Network Tab:**
   - Verify API calls are made with correct parameters
   - Check response times and error status codes

2. **React DevTools:**
   - Monitor component re-renders
   - Check state changes and prop updates

3. **Console Logs:**
   - Add temporary logging for state changes
   - Monitor URL parameter updates

## Future Enhancements

### Potential Improvements

1. **Infinite Scroll:**
   - Replace pagination with infinite scroll for better UX
   - Implement virtual scrolling for large datasets

2. **Advanced Caching:**
   - Implement React Query for server state management
   - Add optimistic updates for better perceived performance

3. **Real-time Updates:**
   - Add WebSocket support for live workshop updates
   - Implement real-time pagination state sync

4. **Advanced Filtering:**
   - Add date range filters
   - Implement multi-select status filtering
   - Add sorting options

### Performance Optimizations

1. **Server-Side Caching:**
   - Implement Redis caching for workshop queries
   - Add database query optimization

2. **Client-Side Caching:**
   - Implement SWR or React Query
   - Add offline support with service workers

3. **Bundle Optimization:**
   - Code splitting for pagination components
   - Lazy loading for workshop cards

## API Reference

### Server Actions

#### `getWorkshops(filter: GetWorkshopsFilter)`

**Parameters:**

```typescript
interface GetWorkshopsFilter {
  ownerId?: string;
  status?: Workshop["status"];
  search?: string;
  page?: number;
  limit?: number;
}
```

**Returns:**

```typescript
interface WorkshopQueryResult {
  workshops: WorkshopWithDetails[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
}
```

### Components

#### `Pagination(props: PaginationProps)`

**Props:**

- `currentPage`: Current page number
- `totalPages`: Total number of pages
- `pageSize`: Items per page
- `totalCount`: Total number of items
- `onPageChange`: Callback for page changes
- `onPageSizeChange`: Callback for page size changes
- `pageSizeOptions`: Available page size options
- `showPageSizeSelector`: Whether to show page size selector
- `isLoading`: Loading state
- `className`: Additional CSS classes

---

**Last Updated**: [Current Date]
**Version**: 1.0
