# FE Workshop Environment - Project Context

> **📋 USAGE INSTRUCTIONS FOR AI ASSISTANT:**
>
> - This document provides complete project context for development sessions
> - **ALWAYS UPDATE** phase statuses as work progresses (✅ COMPLETED, 🔄 IN PROGRESS, ⏳ PENDING)
> - **UPDATE** the "Current Status" section when new features are implemented
> - **ADD** new phases or requirements as they emerge
> - **COMMIT** this document after major changes to keep it current

## Overview

A coding exercise platform for frontend workshops with an in-browser multi-file editor, supporting workshop creation, management, and live coding sessions.

## Technical Requirements

### Core Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.1.11
- **UI Components**: shadcn/ui (with Radix UI primitives)
- **Authentication**: NextAuth.js v5 beta
- **Database**: Prisma ORM (configured, not yet integrated)
- **State Management**: Jotai + React Context
- **Package Manager**: pnpm
- **Module System**: ESM (`"type": "module"` in package.json)

### Key Libraries

- **Code Editor**: Monaco Editor + Sandpack (for live preview)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, zod
- **Logging**: Custom Logger utility (ClientLogger/ServerLogger)

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
└── server/auth/                # NextAuth configuration
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

### Phase 3: Initial DB Structure - 🔄 NEXT

- Database schema design
- Prisma integration with NextAuth
- User, Workshop, and File storage models
- Migration scripts

### Phase 4: List of Workshops Logic - ⏳ PENDING

- Replace mock data with database queries
- Real filtering and search functionality
- Pagination implementation
- Performance optimization

### Phase 5: Workshop Creation Logic - ⏳ PENDING

- Database persistence for workshop creation
- File content serialization/storage
- Form validation with database constraints
- Error handling for database operations

### Phase 6: Live Workshop Logic - ⏳ PENDING

- Real-time session management
- User participation tracking
- Live code sharing and synchronization
- Session state persistence

### Phase 7: Advanced Features - ⏳ PENDING

- Code execution and testing
- Workshop analytics
- Export/import functionality
- Advanced search and filtering

## Current Status

### Working Features (Mock Data)

- Complete workshop creation flow
- Workshop listing with filtering
- User authentication and role switching
- File editing with Monaco Editor
- Live preview with Sandpack
- Permission-based UI rendering

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

- Currently using mock data throughout - database integration is the immediate priority
- Logger utility replaces all console usage
- File templates available for common file types
- Comprehensive TypeScript coverage throughout
- All UI components use shadcn/ui for consistency and accessibility

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
