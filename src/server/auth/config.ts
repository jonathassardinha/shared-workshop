import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { ServerLogger } from "@/lib/Logger/ServerLogger";
import { db } from "../db";
import { env } from "../../env.js";
import { logAuthEvent, validateAuthConfig } from "../../lib/auth/config-utils";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      createdAt?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    createdAt?: string;
  }
}

// Validate configuration on startup
const configValidation = validateAuthConfig();
if (!configValidation.isValid) {
  ServerLogger.error(
    "❌ Authentication configuration errors:",
    configValidation.errors,
  );
  throw new Error(
    `Authentication configuration invalid: ${configValidation.errors.join(", ")}`,
  );
}

logAuthEvent("Configuration validated successfully");

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    // DiscordProvider,
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => {
      logAuthEvent("Session callback", {
        userId: user.id,
        userEmail: user.email,
      });
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          // GitHub user data will be stored in database
        },
      };
    },
    signIn: ({ user, account }) => {
      logAuthEvent("Sign in attempt", {
        userId: user.id,
        userEmail: user.email,
        provider: account?.provider,
      });
      return true;
    },
  },
  events: {
    signIn: ({ user, account }) => {
      logAuthEvent("Sign in successful", {
        userId: user.id,
        userEmail: user.email,
        provider: account?.provider,
      });
    },
    createUser: ({ user }) => {
      logAuthEvent("User created", { userId: user.id, userEmail: user.email });
    },
  },
  pages: {
    error: "/auth/error",
    signIn: "/auth/signin", // We'll create this in a later step
  },
  // Configure session strategy for database sessions
  session: {
    strategy: "database",
  },
  // Enable debug messages in development
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;
