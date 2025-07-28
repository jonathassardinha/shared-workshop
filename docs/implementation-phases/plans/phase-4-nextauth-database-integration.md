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

- [ ] Create GitHub OAuth application in GitHub Developer Settings
  - [ ] Navigate to GitHub Settings > Developer settings > OAuth Apps
  - [ ] Create new OAuth App with appropriate name and description
  - [ ] Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`
  - [ ] Note down Client ID and generate Client Secret
- [ ] Configure environment variables in `.env.local`:
  - [ ] `GITHUB_CLIENT_ID` (from GitHub OAuth app)
  - [ ] `GITHUB_CLIENT_SECRET` (from GitHub OAuth app)
  - [ ] `NEXTAUTH_SECRET` (generate secure random string)
  - [ ] `NEXTAUTH_URL` (http://localhost:3000 for dev)
- [ ] Update `.env.example` with new variables (without actual values)
- [ ] Test environment variable loading

### **Step 2: NextAuth Configuration Migration**

- [ ] Update `src/server/auth/config.ts`:
  - [ ] Uncomment and configure PrismaAdapter with database client
  - [ ] Add GitHubProvider configuration with environment variables
  - [ ] Remove CredentialsProvider with mock users
  - [ ] Change session strategy from "jwt" to "database"
  - [ ] Update callbacks to work with database sessions
  - [ ] Remove mock-specific imports and code
- [ ] Update TypeScript module augmentation if needed
- [ ] Test configuration loads without errors

### **Step 3: Authentication Components Update**

- [ ] Update `src/components/auth/MockUserSwitcher.tsx`:
  - [ ] Rename to `DevUserSwitcher.tsx` or hide in production
  - [ ] Add conditional rendering based on environment
  - [ ] Keep for development convenience if desired
- [ ] Update `src/components/auth/UserProfile.tsx`:
  - [ ] Handle real user data structure from database
  - [ ] Update user information display
  - [ ] Test with GitHub user data format
- [ ] Update `src/components/auth/LoginPrompt.tsx`:
  - [ ] Replace mock sign-in with GitHub OAuth flow
  - [ ] Update sign-in button to use GitHub provider
  - [ ] Add proper error handling for auth failures
- [ ] Test all authentication components render correctly

### **Step 4: Database Integration Testing**

- [ ] Test user creation flow:
  - [ ] Verify new user creation on first GitHub sign-in
  - [ ] Check user data storage in database
  - [ ] Validate user profile information persistence
- [ ] Test session management:
  - [ ] Verify session persistence across browser restarts
  - [ ] Test session expiration handling
  - [ ] Check session cleanup on sign-out
- [ ] Validate workshop ownership:
  - [ ] Test workshop creation with authenticated users
  - [ ] Verify workshop ownership assignment
  - [ ] Check permission guards work with real user IDs

### **Step 5: Mock Data Migration Strategy**

- [ ] Analyze existing workshop data:
  - [ ] Identify workshops created with mock user IDs
  - [ ] Document mock user ID to real user mapping strategy
- [ ] Create migration approach:
  - [ ] Option A: Create GitHub accounts matching mock users
  - [ ] Option B: Reassign existing workshops to new real users
  - [ ] Option C: Preserve as-is and handle orphaned workshops
- [ ] Implement chosen migration strategy:
  - [ ] Create migration script if needed
  - [ ] Test data integrity after migration
  - [ ] Verify workshop access still works

### **Step 6: Development vs Production Configuration**

- [ ] Set up environment-specific configuration:
  - [ ] Configure conditional mock authentication for development (optional)
  - [ ] Set up production-ready authentication settings
  - [ ] Configure appropriate callback URLs for different environments
- [ ] Add error handling:
  - [ ] Implement proper error handling for GitHub OAuth failures
  - [ ] Add user-friendly error messages
  - [ ] Set up authentication event logging
- [ ] Security considerations:
  - [ ] Ensure secure session configuration
  - [ ] Validate environment variable requirements
  - [ ] Review authentication flow security

### **Step 7: Testing & Validation**

- [ ] Authentication flow testing:
  - [ ] Test complete GitHub sign-in flow
  - [ ] Test sign-out functionality
  - [ ] Verify error handling for failed authentication
- [ ] Application functionality testing:
  - [ ] Test workshop creation with authenticated users
  - [ ] Verify workshop listing shows correct ownership
  - [ ] Test live workshop access control
  - [ ] Validate user permissions and guards
- [ ] Data persistence testing:
  - [ ] Check user profile data persistence
  - [ ] Verify session data storage
  - [ ] Test user data retrieval across sessions
- [ ] Cross-browser testing:
  - [ ] Test authentication in different browsers
  - [ ] Verify session persistence works consistently

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

## Notes & Decisions

- **GitHub OAuth App**: [Record app name and settings when created]
- **Migration Strategy**: [Document chosen approach for handling existing data]
- **Development Setup**: [Note any special development configurations]
- **Environment Variables**: [List all required variables and their purposes]

---

**Next Steps**: Await approval to begin implementation. Start with Step 1: Environment Setup & GitHub OAuth App creation.

**Last Updated**: [Date of last update]
**Version**: 1.0
