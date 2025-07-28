# Authentication Setup Guide

This guide covers the complete authentication system setup for the Shared Workshop platform.

## Overview

The platform uses **NextAuth.js v5** with **GitHub OAuth** and **database sessions** for authentication. Users sign in with their GitHub accounts and all session data is persisted in the database.

## Architecture

```
GitHub OAuth ──→ NextAuth.js ──→ Database Sessions ──→ Workshop Permissions
     ↓                ↓                   ↓                    ↓
  User Profile   Session Storage    Persistent Login    Ownership Control
```

## Environment Variables

All authentication requires these environment variables in `.env.local`:

```env
# NextAuth Configuration
AUTH_SECRET="your-32-character-random-string"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth App Credentials
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Database for session storage
DATABASE_URL="file:./dev.db"
```

### Generating AUTH_SECRET

The `AUTH_SECRET` is used to encrypt sessions and must be at least 32 characters:

```bash
# Using OpenSSL (recommended)
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Example output:
# "K8YzQP3rF2xN9vC5kL7aZ1wM8nJ6pT4qS0dG2hV5uE8="
```

## GitHub OAuth App Setup

### 1. Create Development OAuth App

1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the form:

   ```
   Application name: Shared Workshop (dev)
   Homepage URL: http://localhost:3000
   Application description: Local development for Shared Workshop platform
   Authorization callback URL: http://localhost:3000/api/auth/callback/github
   ```

4. Click **"Register application"**
5. Copy the **Client ID**
6. Click **"Generate a new client secret"** and copy it

### 2. Production OAuth App (Future)

For production deployment, create a separate OAuth app:

```
Application name: Shared Workshop
Homepage URL: https://your-domain.com
Authorization callback URL: https://your-domain.com/api/auth/callback/github
```

## Database Schema

The authentication system uses these Prisma models:

```prisma
// NextAuth.js required models
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  workshops     Workshop[]  // Application-specific relation
}

// Application models
model Workshop {
  id          String   @id @default(cuid())
  title       String
  description String
  status      WorkshopStatus @default(PLANNED)
  ownerId     String
  owner       User     @relation(fields: [ownerId], references: [id])
  // ... other fields
}
```

## Configuration Files

### NextAuth Configuration (`src/server/auth/config.ts`)

```typescript
export const authConfig = {
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  session: {
    strategy: "database", // Database sessions, not JWT
  },
  pages: {
    error: "/auth/error", // Custom error page
  },
};
```

### Environment Validation (`src/env.js`)

```typescript
export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().optional(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    NEXTAUTH_URL: z.string().optional(),
    DATABASE_URL: z.string(),
  },
  // ...
});
```

## Authentication Flow

### 1. Sign In Process

1. User clicks "Sign in with GitHub"
2. Redirected to GitHub OAuth consent screen
3. User authorizes the application
4. GitHub redirects back to `/api/auth/callback/github`
5. NextAuth creates/updates user record in database
6. Database session created
7. User redirected to application

### 2. Session Management

- **Storage**: Sessions stored in database `Session` table
- **Persistence**: Survives browser restarts and device changes
- **Expiration**: Configurable session lifetime
- **Security**: Encrypted session tokens

### 3. Permission System

```typescript
// Check if user owns a workshop
function canEditWorkshop(userId: string, workshopOwnerId: string): boolean {
  return userId === workshopOwnerId && !isMockUserId(userId);
}

// Protect workshop creation route
export default function CreateWorkshopPage() {
  const { data: session } = useSession();

  if (!session?.user) {
    return <div>Authentication Required</div>;
  }

  // User is authenticated, show form
  return <CreateWorkshopForm />;
}
```

## Mock Data Handling

The platform includes sample workshops from mock users for demonstration:

```typescript
// Mock users (user-1, user-2, user-3) have no OAuth accounts
// Their workshops are preserved as "Demo Content"
export function getOwnershipStatus(ownerId: string) {
  if (isMockUserId(ownerId)) {
    return {
      isOrphaned: true,
      displayText: "Demo Content",
      badgeClass: "bg-yellow-100 text-yellow-800",
    };
  }

  return {
    isOrphaned: false,
    displayText: "Active",
    badgeClass: "bg-green-100 text-green-800",
  };
}
```

## Error Handling

### Custom Error Page (`/auth/error`)

Handles OAuth errors gracefully:

- **AccessDenied**: User denied GitHub access
- **Configuration**: OAuth app misconfiguration
- **Verification**: Invalid or expired tokens
- **Default**: Generic authentication errors

### Error Messages

```typescript
export function getOAuthErrorMessage(error: string): string {
  switch (error) {
    case "AccessDenied":
      return "You denied access to your GitHub account. Please try signing in again.";
    case "Configuration":
      return "Authentication configuration error. Please try again later.";
    default:
      return "Something went wrong during authentication. Please try again.";
  }
}
```

## Troubleshooting

### Common Issues

1. **"Configuration Error"**
   - Check GitHub OAuth app callback URL matches exactly
   - Verify `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are correct
   - Ensure `AUTH_SECRET` is set and 32+ characters

2. **"Access Denied"**
   - User denied GitHub authorization
   - GitHub OAuth app may be suspended
   - Check OAuth app is active in GitHub settings

3. **Session Not Persisting**
   - Verify database connection working
   - Check `Session` table exists and accessible
   - Ensure `AUTH_SECRET` hasn't changed

4. **Workshop Permissions Issues**
   - Check user ID matches workshop owner ID
   - Verify user is not a mock user (has OAuth account)
   - Ensure session contains user ID

### Debug Mode

Enable debug logging in development:

```env
NODE_ENV=development
DEBUG_LOGGER=true
```

This logs authentication events and session information.

## Production Deployment

### Environment Setup

1. Create production GitHub OAuth app
2. Set production environment variables:

   ```env
   AUTH_SECRET="production-secret-32-chars-minimum"
   NEXTAUTH_URL="https://your-domain.com"
   GITHUB_CLIENT_ID="prod_client_id"
   GITHUB_CLIENT_SECRET="prod_client_secret"
   DATABASE_URL="postgresql://user:pass@host:5432/db"
   ```

3. Use PostgreSQL instead of SQLite for production
4. Ensure HTTPS is configured (required for OAuth)

### Security Checklist

- [ ] `AUTH_SECRET` is cryptographically secure (32+ chars)
- [ ] GitHub OAuth app uses HTTPS callback URLs
- [ ] Database credentials are secure
- [ ] Session expiration is configured appropriately
- [ ] Error pages don't leak sensitive information
- [ ] Rate limiting is enabled for auth endpoints

---

## Quick Reference

### Environment Variables

```env
AUTH_SECRET="32-char-minimum-secret"
NEXTAUTH_URL="http://localhost:3000"
GITHUB_CLIENT_ID="oauth_app_client_id"
GITHUB_CLIENT_SECRET="oauth_app_secret"
DATABASE_URL="file:./dev.db"
```

### GitHub OAuth URLs

- **Development**: `http://localhost:3000/api/auth/callback/github`
- **Production**: `https://domain.com/api/auth/callback/github`

### Key Commands

```bash
# Generate AUTH_SECRET
openssl rand -base64 32

# Test configuration
npm run check:types

# Database operations
npx prisma db push
npx prisma db seed
npx prisma studio
```
