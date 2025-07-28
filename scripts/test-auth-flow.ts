/* eslint-disable no-console */
/**
 * Authentication flow testing script for Phase 4 Step 7
 * Tests configuration, database connectivity, and prepares validation checklist
 */

import { PrismaClient } from "@prisma/client";
import { validateAuthConfig } from "../src/lib/auth/config-utils";
import { env } from "../src/env.js";

const prisma = new PrismaClient();

async function testAuthFlow() {
  console.log("🧪 Phase 4 Step 7: Authentication Flow Testing\n");

  // Test 1: Configuration validation
  console.log("1️⃣ Testing Authentication Configuration...");
  const configValidation = validateAuthConfig();

  if (configValidation.isValid) {
    console.log("   ✅ Authentication configuration is valid");
  } else {
    console.log("   ❌ Configuration errors:");
    configValidation.errors.forEach((error) => {
      console.log(`      - ${error}`);
    });
  }

  // Test 2: Environment variables
  console.log("\n2️⃣ Testing Environment Variables...");
  const envTests = [
    { name: "AUTH_SECRET", value: env.AUTH_SECRET, required: true },
    { name: "GITHUB_CLIENT_ID", value: env.GITHUB_CLIENT_ID, required: true },
    {
      name: "GITHUB_CLIENT_SECRET",
      value: env.GITHUB_CLIENT_SECRET,
      required: true,
    },
    { name: "NEXTAUTH_URL", value: env.NEXTAUTH_URL, required: false },
    { name: "DATABASE_URL", value: env.DATABASE_URL, required: true },
  ];

  envTests.forEach((test) => {
    if (test.required && !test.value) {
      console.log(`   ❌ ${test.name}: Missing (required)`);
    } else if (test.value) {
      const displayValue = test.name.includes("SECRET")
        ? "[HIDDEN]"
        : test.value;
      console.log(`   ✅ ${test.name}: ${displayValue}`);
    } else {
      console.log(`   ⚠️  ${test.name}: Not set (optional)`);
    }
  });

  // Test 3: Database connectivity
  console.log("\n3️⃣ Testing Database Connection...");
  try {
    await prisma.$connect();
    console.log("   ✅ Database connection successful");

    // Test NextAuth tables exist
    const tableTests = [
      { name: "User", test: () => prisma.user.findFirst() },
      { name: "Account", test: () => prisma.account.findFirst() },
      { name: "Session", test: () => prisma.session.findFirst() },
      { name: "Workshop", test: () => prisma.workshop.findFirst() },
    ];

    for (const table of tableTests) {
      try {
        await table.test();
        console.log(`   ✅ ${table.name} table accessible`);
      } catch (error) {
        console.log(`   ❌ ${table.name} table error:`, error);
      }
    }
  } catch (error) {
    console.log("   ❌ Database connection failed:", error);
  }

  // Test 4: User data analysis
  console.log("\n4️⃣ Testing User Data State...");
  try {
    const userCount = await prisma.user.count();
    const realUsers = await prisma.user.count({
      where: {
        accounts: {
          some: {},
        },
      },
    });
    const mockUsers = userCount - realUsers;

    console.log(`   📊 Total users: ${userCount}`);
    console.log(`   🔑 Real users (with OAuth): ${realUsers}`);
    console.log(`   🎭 Mock users (no OAuth): ${mockUsers}`);

    if (realUsers > 0) {
      console.log("   ✅ Real users exist - authentication working");
    } else {
      console.log("   ⚠️  No real users yet - ready for first OAuth sign-in");
    }
  } catch (error) {
    console.log("   ❌ User data analysis failed:", error);
  }

  // Test 5: Workshop ownership
  console.log("\n5️⃣ Testing Workshop Ownership...");
  try {
    const workshops = await prisma.workshop.findMany({
      include: {
        owner: {
          include: {
            accounts: true,
          },
        },
      },
    });

    const realOwnerWorkshops = workshops.filter(
      (w) => w.owner?.accounts.length > 0,
    );
    const mockOwnerWorkshops = workshops.filter(
      (w) => w.owner && w.owner.accounts.length === 0,
    );
    const orphanedWorkshops = workshops.filter((w) => !w.owner);

    console.log(`   📚 Total workshops: ${workshops.length}`);
    console.log(`   👤 Owned by real users: ${realOwnerWorkshops.length}`);
    console.log(`   🎭 Owned by mock users: ${mockOwnerWorkshops.length}`);
    console.log(`   💀 Orphaned workshops: ${orphanedWorkshops.length}`);

    if (mockOwnerWorkshops.length > 0) {
      console.log("   ✅ Mock workshop migration strategy working");
    }
  } catch (error) {
    console.log("   ❌ Workshop ownership analysis failed:", error);
  }

  // Generate validation checklist
  console.log("\n📋 Manual Testing Checklist:");
  console.log("   🔗 Authentication Flow Testing:");
  console.log("     □ Visit http://localhost:3000 and test GitHub sign-in");
  console.log("     □ Verify user creation on first sign-in");
  console.log("     □ Test sign-out functionality");
  console.log("     □ Test session persistence across browser restarts");
  console.log("     □ Try accessing /auth/error?error=AccessDenied");

  console.log("\n   🏗️  Application Functionality Testing:");
  console.log("     □ Test workshop creation with authenticated user");
  console.log("     □ Verify workshop ownership assignment");
  console.log("     □ Check workshop listing shows ownership status badges");
  console.log("     □ Test live workshop access control");
  console.log("     □ Verify permission guards work correctly");

  console.log("\n   🔒 Security Testing:");
  console.log("     □ Test authentication required routes when not signed in");
  console.log("     □ Verify workshop editing permissions");
  console.log("     □ Check that mock users cannot authenticate");
  console.log("     □ Test error handling for invalid OAuth states");

  console.log("\n✅ Automated testing complete!");
  console.log("📝 Complete the manual checklist above to finish Step 7");

  await prisma.$disconnect();
}

testAuthFlow().catch((error) => {
  console.error("❌ Testing failed:", error);
  process.exit(1);
});
