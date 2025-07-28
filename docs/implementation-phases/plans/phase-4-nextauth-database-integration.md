# Phase 4: NextAuth Database Integration - Implementation Plan

**Status**: 🔄 IN PROGRESS
**Started**: [Date to be filled when started]
**Completed**: [Date to be filled when completed]
**Lead**: AI Assistant
**Reviewer**: Project Owner

## Overview

Transition from mock authentication to real GitHub SSO with database persistence using NextAuth + Prisma. This phase will replace the current mock authentication system with a production-ready GitHub OAuth integration that persists user data in the database.

## Prerequisites ✅

- [x] Database schema includes NextAuth tables (Account, Session, User, VerificationToken)
- [x] PrismaAdapter dependency installed (`@auth/prisma-adapter`)
- [x] Mock authentication currently working
- [x] Database migrations applied
- [x] Prisma client generated

## Execution Steps

### **Step 1: Environment Setup & GitHub OAuth App**

- [x] Create GitHub OAuth application in GitHub Developer Settings
  - [x] Navigate to GitHub Settings > Developer settings > OAuth Apps
  - [x] Create new OAuth App with name "Shared Workshop (dev)" for development
  - [x] Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`
  - [x] Note down Client ID and generate Client Secret
- [x] Configure environment variables in `.env.local`:
  - [x] `GITHUB_CLIENT_ID` (from GitHub OAuth app)
  - [x] `GITHUB_CLIENT_SECRET` (from GitHub OAuth app)
  - [x] `AUTH_SECRET` (generate secure random string)
  - [x] `NEXTAUTH_URL` (http://localhost:3000 for dev)
- [x] Update `.env.example` with new variables (without actual values)
- [x] Test environment variable loading

### **Step 2: NextAuth Configuration Migration**

- [x] Update `src/server/auth/config.ts`:
  - [x] Uncomment and configure PrismaAdapter with database client
  - [x] Add GitHubProvider configuration with environment variables
  - [x] Remove CredentialsProvider with mock users
  - [x] Change session strategy from "jwt" to "database"
  - [x] Update callbacks to work with database sessions
  - [x] Remove mock-specific imports and code
- [x] Update environment variable validation (`src/env.js` and `turbo.json`)
- [x] Test configuration loads without errors

### **Step 3: Authentication Components Update**

- [x] Update `src/components/auth/MockUserSwitcher.tsx`:
  - [x] Hide component as it's no longer needed with GitHub OAuth
  - [x] Keep minimal interface for backwards compatibility
  - [x] Return null since users sign in directly with GitHub
- [x] Update `src/components/auth/UserProfile.tsx`:
  - [x] Handle real GitHub user data structure
  - [x] Update user information display for GitHub accounts
  - [x] Remove mock-specific createdAt field handling
- [x] Update `src/components/Navigation.tsx` (actual authentication location):
  - [x] Replace mock sign-in dropdown with GitHub OAuth flow
  - [x] Update sign-in button to use GitHub provider
  - [x] Add proper loading states and error handling
  - [x] Clean GitHub-styled authentication UI
- [x] Remove unused `src/components/auth/LoginPrompt.tsx`:
  - [x] Component was not being used anywhere in the application
  - [x] Removed file and export to clean up codebase
- [x] Test all authentication components render correctly

### **Step 4: Database Integration Testing**

- [x] Test user creation flow:
  - [x] Verify new user creation on first GitHub sign-in
  - [x] Check user data storage in database
  - [x] Validate user profile information persistence
- [x] Test session management:
  - [x] Verify session persistence across browser restarts
  - [x] Test session expiration handling
  - [x] Check session cleanup on sign-out
- [x] Validate workshop ownership:
  - [x] Test workshop creation with authenticated users
  - [x] Verify workshop ownership assignment (working with transaction)
  - [x] Check permission guards work with real user IDs

### **Step 5: Mock Data Migration Strategy**

- [x] Analyze existing workshop data:
  - [x] Identify workshops created with mock user IDs (3 mock users with 12 workshops)
  - [x] Document mock user ID to real user mapping strategy (Option C chosen)
- [x] Create migration approach:
  - [x] Option A: Create GitHub accounts matching mock users
  - [x] Option B: Reassign existing workshops to new real users
  - [x] Option C: Preserve as-is and handle orphaned workshops ✅ **CHOSEN**
- [x] Implement chosen migration strategy:
  - [x] Created mock user utility functions (`src/lib/auth/mock-user-utils.ts`)
  - [x] Updated WorkshopCard to show ownership status badges
  - [x] No migration script needed - preserving current state
  - [x] Test data integrity after migration (no data modified)
  - [x] Verify workshop access still works (real users unaffected)

### **Step 6: Development vs Production Configuration**

- [x] Set up environment-specific configuration:
  - [x] Created `src/lib/auth/config-utils.ts` for environment utilities
  - [x] Added NEXTAUTH_URL validation for different environments
  - [x] Set up development vs production logging strategies
  - [x] Configure appropriate callback URLs for different environments
- [x] Add error handling:
  - [x] Implemented proper error handling for GitHub OAuth failures
  - [x] Created `/auth/error` page with user-friendly error messages
  - [x] Set up authentication event logging in NextAuth config
  - [x] Added configuration validation on startup
- [x] Security considerations:
  - [x] Ensured secure session configuration (database strategy)
  - [x] Validated environment variable requirements and strength
  - [x] Added authentication flow security logging

### **Step 7: Testing & Validation**

- [x] Authentication flow testing:
  - [x] Test complete GitHub sign-in flow ✅ Working correctly
  - [x] Test sign-out functionality ✅ Clears sessions properly
  - [x] Verify error handling for failed authentication ✅ Error page functional
- [x] Application functionality testing:
  - [x] Test workshop creation with authenticated users ✅ Working with real auth
  - [x] Verify workshop listing shows correct ownership ✅ Badges working
  - [x] Test live workshop access control ✅ Auth guards working
  - [x] Validate user permissions and guards ✅ Proper ownership checks
- [x] Data persistence testing:
  - [x] Check user profile data persistence ✅ Database sessions working
  - [x] Verify session data storage ✅ Survives browser restarts
  - [x] Test user data retrieval across sessions ✅ Consistent access
- [x] Cross-browser testing:
  - [x] Test authentication in different browsers ✅ Chrome, Firefox, Safari, Edge
  - [x] Verify session persistence works consistently ✅ All browsers working

### **Step 8: Cleanup & Documentation**

- [ ] Code cleanup:
  - [ ] Remove unused mock authentication files
  - [ ] Clean up mock user imports and references
  - [ ] Remove development-only authentication code
- [ ] Documentation updates:
  - [ ] Update README with GitHub OAuth setup instructions
  - [ ] Document environment variable requirements
  - [ ] Add authentication troubleshooting guide
  - [ ] Update PROJECT_CONTEXT.md status to completed
- [ ] Final validation:
  - [ ] Code review of all authentication-related changes
  - [ ] Ensure no mock authentication code remains (except dev conditionals)
  - [ ] Verify all existing functionality preserved

## Potential Challenges & Solutions

### 1. Session Strategy Change

**Challenge**: Moving from JWT to database sessions requires callback updates
**Solution**: Update session callbacks to work with database-stored sessions
**Status**: [ ] Identified [ ] Addressed [ ] Tested

### 2. User ID Migration

**Challenge**: Mock user IDs vs real GitHub user IDs affecting workshop ownership
**Solution**: Create mapping strategy or data migration script
**Status**: [ ] Identified [ ] Strategy chosen [ ] Implemented [ ] Tested

### 3. Development Experience

**Challenge**: Losing easy user switching capability during development
**Solution**: Keep conditional mock authentication for development environment
**Status**: [ ] Identified [ ] Solution implemented [ ] Tested

### 4. Workshop Ownership Continuity

**Challenge**: Existing workshops tied to mock users becoming orphaned
**Solution**: Migration script to reassign ownership or create corresponding test accounts
**Status**: [ ] Identified [ ] Strategy chosen [ ] Implemented [ ] Validated

## Success Criteria

- [ ] Users can successfully authenticate with GitHub OAuth
- [ ] User data persists correctly in database
- [ ] Workshop creation works seamlessly with real authentication
- [ ] Workshop ownership and permissions function correctly
- [ ] All existing application functionality is preserved
- [ ] No mock authentication code remains in production paths
- [ ] Authentication works consistently across browser sessions
- [ ] Error handling provides good user experience

## Testing Checklist

- [ ] GitHub OAuth app configuration works
- [ ] Environment variables loaded correctly
- [ ] Database connection and operations successful
- [ ] User sign-in flow completes successfully
- [ ] User data stored and retrieved from database
- [ ] Workshop creation assigns correct ownership
- [ ] Workshop permissions work with real users
- [ ] Session persistence across browser restarts
- [ ] Sign-out functionality works correctly
- [ ] Error handling for auth failures works
- [ ] All existing features still functional

## Rollback Plan

If issues arise during implementation:

1. **Immediate Rollback Steps**:
   - [ ] Revert `src/server/auth/config.ts` to mock authentication
   - [ ] Restore mock user files and imports
   - [ ] Switch session strategy back to "jwt"
   - [ ] Remove GitHub provider configuration

2. **Data Rollback**:
   - [ ] Restore original workshop ownership if modified
   - [ ] Clean up any test user accounts created
   - [ ] Verify mock authentication still works

3. **Environment Cleanup**:
   - [ ] Remove GitHub OAuth environment variables
   - [ ] Reset NextAuth configuration to previous state

## OAuth App Strategy: Development vs Production

### **Best Practice Approach**

We're implementing separate GitHub OAuth applications for different environments:

#### **Development App**: `Shared Workshop (dev)` ✅ CREATED

- **Purpose**: Local development and testing
- **Homepage URL**: `http://localhost:3000`
- **Callback URL**: `http://localhost:3000/api/auth/callback/github`
- **Environment Variables**: Used in `.env.local`

#### **Production App**: `Shared Workshop` (Future)

- **Purpose**: Production deployment
- **Homepage URL**: `https://your-production-domain.com`
- **Callback URL**: `https://your-production-domain.com/api/auth/callback/github`
- **Environment Variables**: Used in production environment

### **Benefits of This Approach**

- **Security Isolation**: Dev credential compromise doesn't affect production
- **Clean Analytics**: Development testing doesn't pollute production metrics
- **Team Collaboration**: Dev credentials can be safely shared with team
- **Environment-Specific URLs**: Each environment has correct callback URLs
- **Testing Safety**: OAuth flow testing doesn't affect real users

## Notes & Decisions

- **GitHub OAuth App**: Created "Shared Workshop (dev)" for development environment
- **Migration Strategy**: [Document chosen approach for handling existing data]
- **Development Setup**: Using separate dev OAuth app for security isolation
- **Environment Variables**: Development-specific credentials in .env.local

---

**Next Steps**: Await approval to begin implementation. Start with Step 1: Environment Setup & GitHub OAuth App creation.

**Last Updated**: [Date of last update]
**Version**: 1.0
