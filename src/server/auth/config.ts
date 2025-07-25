import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { mockUsers } from "../../lib/auth/mockUsers";
// import DiscordProvider from "next-auth/providers/discord";
// Temporarily removed PrismaAdapter for mock authentication
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { db } from "../db";

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

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    // Mock provider for development and testing
    CredentialsProvider({
      id: "mock",
      name: "Mock Users (Development)",
      credentials: {
        userId: {
          label: "Select User",
          type: "text",
          placeholder: "Enter user ID",
        },
      },
      async authorize(credentials) {
        if (!credentials?.userId) return null;

        const mockUser = mockUsers.find(
          (user) => user.id === credentials.userId,
        );
        if (!mockUser) return null;

        // Return user object that matches our User interface
        return {
          id: mockUser.id,
          name: mockUser.name,
          email: mockUser.email,
          image: mockUser.image,
          createdAt: mockUser.createdAt,
        };
      },
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
  // Temporarily removed adapter for mock authentication
  // adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub ?? "",
        createdAt: token.createdAt as string,
      },
    }),
    // Ensure user data includes all required fields
    jwt: ({ token, user }) => {
      if (user) {
        token.sub = user.id;
        token.createdAt = user.createdAt;
      }
      return token;
    },
  },
  // Configure session strategy for credentials provider
  session: {
    strategy: "jwt",
  },
  // Enable debug messages in development
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/auth/signin", // We'll create this in a later step
  },
} satisfies NextAuthConfig;
