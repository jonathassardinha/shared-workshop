/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function analyzeData() {
  console.log("🔍 Analyzing database data for Phase 4 migration...\n");

  // Get all users
  const users = await prisma.user.findMany({
    include: {
      workshops: {
        select: {
          id: true,
          title: true,
          status: true,
        },
      },
      accounts: {
        select: {
          provider: true,
          providerAccountId: true,
        },
      },
    },
  });

  console.log("👥 Users in database:");
  users.forEach((user, index) => {
    console.log(`${index + 1}. User ID: ${user.id}`);
    console.log(`   Email: ${user.email ?? "No email"}`);
    console.log(`   Name: ${user.name ?? "No name"}`);
    console.log(`   Image: ${user.image ? "Has image" : "No image"}`);
    console.log(
      `   Accounts: ${user.accounts.length > 0 ? user.accounts.map((a) => `${a.provider}:${a.providerAccountId}`).join(", ") : "None (likely mock user)"}`,
    );
    console.log(`   Workshops owned: ${user.workshops.length}`);
    if (user.workshops.length > 0) {
      user.workshops.forEach((workshop) => {
        console.log(`     - ${workshop.title} (${workshop.status})`);
      });
    }
    console.log("");
  });

  // Get all workshops
  const workshops = await prisma.workshop.findMany({
    include: {
      owner: {
        select: {
          id: true,
          email: true,
          name: true,
        },
      },
      exercises: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  console.log("📚 Workshop ownership analysis:");
  workshops.forEach((workshop, index) => {
    console.log(`${index + 1}. ${workshop.title}`);
    console.log(`   Owner ID: ${workshop.ownerId}`);
    console.log(
      `   Owner: ${workshop.owner?.name ?? "Unknown"} (${workshop.owner?.email ?? "No email"})`,
    );
    console.log(`   Exercises: ${workshop.exercises.length}`);
    console.log("");
  });

  // Identify potential issues
  const usersWithoutAccounts = users.filter(
    (user) => user.accounts.length === 0,
  );
  console.log("⚠️  Potential migration issues:");
  console.log(
    `   Users without OAuth accounts (likely mock): ${usersWithoutAccounts.length}`,
  );

  if (usersWithoutAccounts.length > 0) {
    console.log("   Mock users found:");
    usersWithoutAccounts.forEach((user) => {
      console.log(
        `     - ${user.name} (${user.email}) owns ${user.workshops.length} workshops`,
      );
    });
  }

  await prisma.$disconnect();
}

analyzeData().catch((error) => {
  console.error("Error analyzing data:", error);
  process.exit(1);
});
