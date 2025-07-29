# FE Workshop Environment - Project Context

> **📋 USAGE INSTRUCTIONS FOR AI ASSISTANT:**
>
> - This document provides complete project context for development sessions
> - **ALWAYS UPDATE** phase statuses as work progresses (✅ COMPLETED, 🔄 IN PROGRESS, ⏳ PENDING)
> - **UPDATE** the "Current Status" section when new features are implemented
> - **ADD** new phases or requirements as they emerge
> - **COMMIT** this document after major changes to keep it current
> - **TERMINAL SETUP**: Always run `nvm use` and `corepack enable` before any terminal commands to ensure correct Node.js and package manager versions

## Overview

A coding exercise platform for frontend workshops with an in-browser multi-file editor, supporting workshop creation, management, and live coding sessions.

## Technical Requirements

### Core Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Runtime**: Node.js v22 (managed via nvm)
- **Package Manager**: pnpm@10.12.2 (managed via corepack)
- **Styling**: Tailwind CSS v4.1.11
- **UI Components**: shadcn/ui (with Radix UI primitives)
- **Form Management**: React Hook Form
- **Authentication**: NextAuth.js v5 beta
- **Database**: Prisma ORM (configured, not yet integrated)
- **State Management**: Jotai + React Context
- **Module System**: ESM (`"type": "module"` in package.json)

### Key Libraries

- **Code Editor**: Monaco Editor + Sandpack (for live preview)
- **Form Management**: React Hook Form + @hookform/resolvers (with zod validation)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, zod
- **Logging**: Custom Logger utility (ClientLogger/ServerLogger)

### Server Actions Architecture

- **Server Actions Preferred**: Use Next.js Server Actions instead of API route handlers whenever possible
- **Action Organization**: Store all server actions in `src/server/actions/` with domain-specific folders:
  - `src/server/actions/workshop/` - Workshop-related actions (create, update, delete, etc.)
  - `src/server/actions/user/` - User-related actions (profile, preferences, etc.)
  - `src/server/actions/auth/` - Authentication-related actions
- **Action Structure**: Each domain folder should contain:
  - Separate files for different action types (create.ts, read.ts, update.ts, delete.ts)
  - `<domain>.types.ts` file for parameter types that client components can safely import
  - **No barrel exports (index.ts)** to prevent accidental server/client code mixing
- **Type Safety**: Client components import types from `<domain>.types.ts`, server actions from specific action files
- **Benefits**: Better performance, type safety, and simplified data mutations with built-in validation

### Type System Guidelines

- **Naming Convention**: Use Prisma's naming pattern - `TableCreateInput`, `TableUpdateInput`, not `CreateTableInput`
- **No Simple Re-exports**: Don't re-export Prisma types without modifications (e.g., `export type WorkshopCreateInput = Prisma.WorkshopCreateInput` is prohibited)
- **Update Types**: Don't add `id` fields to update input types - If we need to target specific items, add another `id` param to the function not the update object.
- **Relational Queries**: Use `Prisma.<Table>GetPayload<{ include: { ... } }>` for complex queries with relations
- **Custom Types Only**: Only define custom types when Prisma's auto-generated types cannot properly represent the data
- **Utility Types**: Prefer `Pick`, `Partial`, and other utility types for creating subsets and variations
- **Return type**: Always use `ActionResult<T>` type, if we only need the `success` property you can do `ActionResult<void>`

### Architecture Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── workshops/               # Workshop listing
│   ├── workshop/
│   │   ├── create/             # Workshop creation
│   │   └── [id]/live/          # Live workshop sessions
├── components/
│   ├── Editor/                 # Reusable editor components
│   │   ├── EditorProvider.tsx  # Context for editor state
│   │   ├── EditorLayout.tsx    # Main editor layout
│   │   └── FileExplorer.tsx    # File management
│   ├── workshop/               # Workshop-specific components
│   ├── auth/                   # Authentication components
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── auth/                   # Authentication utilities
│   ├── constants.ts            # App constants
│   └── Logger/                 # Logging system
└── server/
    ├── actions/                # Server Actions (domain-organized)
    │   ├── workshop/          # Workshop-related actions
    │   │   ├── create.ts      # Create workshop action
    │   │   ├── read.ts        # Read workshop actions
    │   │   ├── update.ts      # Update workshop actions
    │   │   ├── delete.ts      # Delete workshop action
    │   │   └── workshop.types.ts  # Shared types for client components
    │   ├── user/              # User-related actions
    │   │   ├── profile.ts     # User profile actions
    │   │   └── user.types.ts  # Shared types for client components
    │   └── auth/              # Authentication actions
    │       ├── session.ts     # Session-related actions
    │       └── auth.types.ts  # Shared types for client components
    ├── auth/                  # NextAuth configuration
    └── db.ts                  # Database client
```

### Editor System

- **EditorProvider**: Context managing file state, permissions, and actions
- **EditorModes**: `create` (workshop creation) | `edit` (live sessions)
- **Permissions**: Role-based (canCreateFiles, canDeleteFiles, canSubmit, canSave)
- **File Management**: Create, edit, delete files with validation and templates

## Business Requirements

### Application Purpose

Enable frontend workshop instructors to:

1. Create coding exercises with pre-configured files
2. Host live coding sessions with participants
3. Manage workshop content and access

### User Model & Permissions

**Ownership-Based Access Control:**

- Any user can create workshops (becomes owner)
- Workshop owners have `Edit` access to their workshops only
- Any user can participate in `Live` workshops
- Any user can view `Planned` or `Completed` workshops

### Workshop Lifecycle

- **Planned**: Workshop created but not yet started
- **Live**: Currently active workshop session
- **Completed**: Workshop that has ended

### Core Features

#### Workshop Creation

- Multi-step wizard (4 steps: Basic Info, Exercises, Configure Files, Review)
- File management with templates (tsx, ts, jsx, js, css, html, json, md)
- Exercise management (min 1, max 10 exercises)
- Form validation and error handling

#### Workshop Management

- List all workshops with filtering (Live Only, Planned Only, Completed Only)
- Role-based action buttons (Join/View/Manage based on ownership and status)
- Owner identification and permissions

#### Live Workshop Interface

- Split interface: File editor + Live preview (Sandpack)
- Role-specific actions:
  - **Participants**: Submit solutions
  - **Owners**: Save changes, manage session

#### Authentication

- NextAuth integration with mock users for development
- User profile management
- Development user switcher
- Permission guards and access control

## Implementation Plan

### Phase 1: Base Routes - ✅ COMPLETED

- ✅ Workshop listing page (`/workshops`)
- ✅ Workshop creation flow (`/workshop/create`)
- ✅ Live workshop interface (`/workshop/[id]/live`)
- ✅ Reusable editor components
- ✅ Navigation and layout structure

### Phase 2: Authentication & Access Control - ✅ COMPLETED

- ✅ Ownership-based permission model
- ✅ NextAuth integration with mock users
- ✅ Authentication components (UserProfile, MockUserSwitcher, LoginPrompt)
- ✅ Permission guards (OwnershipGuard, EditGuard, ManageGuard)
- ✅ shadcn/ui integration for professional UI components

### Phase 3: Initial DB Structure - ✅ COMPLETED

- ✅ Database schema design
- ✅ Prisma integration and client generation
- ✅ User, Workshop, Exercise, and WorkshopFile models
- ✅ Server actions with proper type safety
- ✅ Discriminated union ActionResult type
- ✅ Production-ready migration files (`prisma migrate dev`)
- ✅ Comprehensive database seeding with realistic workshop data
- ✅ Database schema verified and operational

### Phase 4: NextAuth Database Integration - ✅ COMPLETED

- ✅ Added GitHub SSO with database persistence
- ✅ Re-enabled PrismaAdapter in NextAuth configuration
- ✅ Updated auth callbacks to work with database sessions
- ✅ Implemented comprehensive error handling and security
- ✅ Completed mock data migration strategy (preserved as demo content)
- ✅ Full testing and validation completed
- ✅ Production-ready documentation and cleanup

### Phase 5: Workshop Listing Optimization - ✅ COMPLETED

- ✅ Traditional pagination with configurable page sizes (10, 20, 50)
- ✅ URL state management for shareable links and browser navigation
- ✅ Server-side pagination with skip/take queries
- ✅ Client-side optimizations (React.memo, useCallback, useMemo, debounced search)
- ✅ Enhanced loading states and error handling
- ✅ Active filter display with clear functionality
- ✅ Comprehensive documentation and testing

### Phase 6: Workshop Creation Logic - ⏳ PENDING

- Database persistence for workshop creation
- File content serialization/storage
- Form validation with database constraints
- Error handling for database operations

### Phase 7: Live Workshop Logic - ⏳ PENDING

- Real-time session management
- User participation tracking
- Live code sharing and synchronization
- Session state persistence

### Phase 8: Advanced Features - ⏳ PENDING

- Code execution and testing
- Workshop analytics
- Export/import functionality
- Advanced search and filtering

## Current Status

### Working Features

**With Database Integration:**

- ✅ Complete database schema (Workshop, Exercise, WorkshopFile models)
- ✅ Type-safe server actions for all CRUD operations
- ✅ Proper discriminated union ActionResult types
- ✅ Domain-prefixed types files (workshop.types.ts, user.types.ts, auth.types.ts)
- ✅ Proper Prisma type usage (GetPayload for relations, direct Prisma inputs for actions)
- ✅ Utility-type-based derivations (Partial, Pick) to prevent typos and maintain consistency
- ✅ Type system guidelines enforced (no simple re-exports, proper naming conventions)
- ✅ NextAuth integration with GitHub SSO and database sessions
- ✅ Workshop listing with pagination, filtering, and search
- ✅ Comprehensive error handling and loading states

**With Real Data:**

- ✅ Workshop listing with traditional pagination (10, 20, 50 items per page)
- ✅ URL state management for shareable links and browser navigation
- ✅ Server-side pagination with optimized database queries
- ✅ Client-side performance optimizations (React.memo, useCallback, useMemo)
- ✅ Debounced search functionality (300ms delay)
- ✅ Enhanced loading states with skeleton components
- ✅ Active filter display with clear functionality
- ✅ Graceful error handling with retry functionality
- ✅ Complete workshop creation flow with database persistence
- ✅ User authentication and role-based access control
- ✅ File editing with Monaco Editor
- ✅ Live preview with Sandpack
- ✅ Permission-based UI rendering

### Development Setup

- All dependencies installed and configured
- Tailwind v4 properly configured with shadcn/ui
- ESLint and Prettier configured
- Development server running on localhost:3000

### Key Files & Components

- **Editor Core**: `src/components/Editor/`
- **Workshop Logic**: `src/components/workshop/`
- **Auth System**: `src/lib/auth/` and `src/components/auth/`
- **Constants**: `src/lib/constants.ts`
- **Styling**: `src/styles/globals.css` (Tailwind v4 + shadcn/ui)

## Notes for Future Development

- ✅ Database integration complete with NextAuth and real data persistence
- ✅ Workshop listing optimized with pagination and performance enhancements
- ✅ Logger utility replaces all console usage
- ✅ File templates available for common file types
- ✅ Comprehensive TypeScript coverage throughout
- ✅ All UI components use shadcn/ui for consistency and accessibility
- ✅ Next phase priorities: Live workshop logic (Phase 6) and advanced features (Phase 7)

---

## 🔄 Document Maintenance Guidelines

### When to Update This Document:

1. **After completing any phase** → Update phase status from ⏳ PENDING → ✅ COMPLETED
2. **When starting a new phase** → Update status to 🔄 IN PROGRESS
3. **When adding new features** → Update "Working Features" section
4. **When changing requirements** → Update Business/Technical Requirements
5. **When adding new dependencies** → Update "Key Libraries" section

### Status Legend:

- ✅ **COMPLETED** - Phase is fully implemented and tested
- 🔄 **IN PROGRESS** - Currently working on this phase
- ⏳ **PENDING** - Planned for future implementation

### Quick Update Commands:

```markdown
# To mark a phase as in progress:

Phase X: Title - 🔄 IN PROGRESS

# To mark a phase as completed:

Phase X: Title - ✅ COMPLETED
```
