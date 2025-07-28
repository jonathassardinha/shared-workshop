/* eslint-disable no-console */
import { PrismaClient, WorkshopStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Create Users
  const alice = await prisma.user.upsert({
    where: { email: "alice.johnson@example.com" },
    update: {},
    create: {
      id: "user-1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b2be4c9c?w=150&h=150&fit=crop&crop=face",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob.smith@example.com" },
    update: {},
    create: {
      id: "user-2",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  });

  const carol = await prisma.user.upsert({
    where: { email: "carol.davis@example.com" },
    update: {},
    create: {
      id: "user-3",
      name: "Carol Davis",
      email: "carol.davis@example.com",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  });

  console.log("✅ Created users");

  // Create Workshops
  const reactWorkshop = await prisma.workshop.create({
    data: {
      title: "React Fundamentals Workshop",
      description:
        "Learn the basics of React including components, props, state, and hooks through hands-on exercises.",
      status: WorkshopStatus.LIVE,
      ownerId: alice.id,
    },
  });

  const nextjsWorkshop = await prisma.workshop.create({
    data: {
      title: "Next.js Full-Stack Development",
      description:
        "Build modern web applications with Next.js, covering routing, API routes, and deployment strategies.",
      status: WorkshopStatus.COMPLETED,
      ownerId: bob.id,
    },
  });

  const typescriptWorkshop = await prisma.workshop.create({
    data: {
      title: "TypeScript for React Developers",
      description:
        "Master TypeScript fundamentals and advanced patterns for building type-safe React applications.",
      status: WorkshopStatus.PLANNED,
      ownerId: alice.id,
    },
  });

  const cssWorkshop = await prisma.workshop.create({
    data: {
      title: "Modern CSS Layout Techniques",
      description:
        "Master modern CSS layout techniques with hands-on exercises in Grid and Flexbox.",
      status: WorkshopStatus.COMPLETED,
      ownerId: carol.id,
    },
  });

  console.log("✅ Created workshops");

  // Create Exercises for React Workshop
  const reactExercise1 = await prisma.exercise.create({
    data: {
      title: "Your First Component",
      description:
        "Create a simple React component that displays a greeting message",
      order: 1,
      workshopId: reactWorkshop.id,
    },
  });

  const reactExercise2 = await prisma.exercise.create({
    data: {
      title: "Props and Data Flow",
      description: "Learn how to pass data between components using props",
      order: 2,
      workshopId: reactWorkshop.id,
    },
  });

  const reactExercise3 = await prisma.exercise.create({
    data: {
      title: "State and Interactivity",
      description: "Add state to your components and handle user interactions",
      order: 3,
      workshopId: reactWorkshop.id,
    },
  });

  // Create Exercises for TypeScript Workshop
  const tsExercise1 = await prisma.exercise.create({
    data: {
      title: "Basic Types and Interfaces",
      description: "Define interfaces and use basic TypeScript types",
      order: 1,
      workshopId: typescriptWorkshop.id,
    },
  });

  const tsExercise2 = await prisma.exercise.create({
    data: {
      title: "Generic Functions",
      description: "Create reusable functions with generic type parameters",
      order: 2,
      workshopId: typescriptWorkshop.id,
    },
  });

  console.log("✅ Created exercises");

  // Create Files for React Exercise 1
  await prisma.workshopFile.createMany({
    data: [
      {
        filename: "App.tsx",
        content: `import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <Greeting />
    </div>
  );
}

export default App;`,
        language: "tsx",
        exerciseId: reactExercise1.id,
      },
      {
        filename: "Greeting.tsx",
        content: `import React from 'react';

// TODO: Create a Greeting component that displays "Hello, World!"
function Greeting() {
  return (
    <div>
      {/* Your component here */}
    </div>
  );
}

export default Greeting;`,
        language: "tsx",
        exerciseId: reactExercise1.id,
      },
      {
        filename: "index.css",
        content: `.App {
  text-align: center;
  padding: 20px;
}

.greeting {
  color: #2196f3;
  font-size: 1.5rem;
  margin: 20px 0;
}`,
        language: "css",
        exerciseId: reactExercise1.id,
      },
    ],
  });

  // Create Files for React Exercise 2
  await prisma.workshopFile.createMany({
    data: [
      {
        filename: "App.tsx",
        content: `import React from 'react';
import UserCard from './UserCard';

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
];

function App() {
  return (
    <div className="App">
      <h1>User Directory</h1>
      {/* TODO: Render UserCard components for each user */}
    </div>
  );
}

export default App;`,
        language: "tsx",
        exerciseId: reactExercise2.id,
      },
      {
        filename: "UserCard.tsx",
        content: `import React from 'react';

// TODO: Define the User interface
interface User {
  // Add properties here
}

// TODO: Define props interface
interface UserCardProps {
  // Add user prop here
}

function UserCard(/* Add props here */) {
  return (
    <div className="user-card">
      {/* Display user information here */}
    </div>
  );
}

export default UserCard;`,
        language: "tsx",
        exerciseId: reactExercise2.id,
      },
    ],
  });

  // Create Files for TypeScript Exercise 1
  await prisma.workshopFile.createMany({
    data: [
      {
        filename: "types.ts",
        content: `// TODO: Define a User interface with id, name, email, and optional avatar
export interface User {
  // Add properties here
}

// TODO: Define a Product interface with id, name, price, and category
export interface Product {
  // Add properties here
}

// TODO: Create a type alias for user roles
export type UserRole = // Define possible roles here

// TODO: Define a function type for event handlers
export type EventHandler = // Define function signature here`,
        language: "ts",
        exerciseId: tsExercise1.id,
      },
      {
        filename: "user-utils.ts",
        content: `import { User, UserRole } from './types';

// TODO: Implement a function that formats a user's display name
export function formatUserName(user: User): string {
  // Implementation here
  return '';
}

// TODO: Implement a function that checks if a user has admin privileges
export function isAdmin(role: UserRole): boolean {
  // Implementation here
  return false;
}

// TODO: Create an array of sample users with proper typing
export const sampleUsers: User[] = [
  // Add sample data here
];`,
        language: "ts",
        exerciseId: tsExercise1.id,
      },
    ],
  });

  console.log("✅ Created workshop files");

  // Create some additional workshops for variety
  await prisma.workshop.createMany({
    data: [
      {
        title: "Vue.js Fundamentals",
        description: "Learn Vue.js from scratch with practical examples",
        status: WorkshopStatus.PLANNED,
        ownerId: bob.id,
      },
      {
        title: "Advanced React Patterns",
        description:
          "Explore advanced React patterns and performance optimization",
        status: WorkshopStatus.LIVE,
        ownerId: carol.id,
      },
    ],
  });

  console.log("✅ Created additional workshops");

  const workshopCount = await prisma.workshop.count();
  const exerciseCount = await prisma.exercise.count();
  const fileCount = await prisma.workshopFile.count();
  const userCount = await prisma.user.count();

  console.log(`🎉 Database seeding completed!`);
  console.log(`📊 Summary:`);
  console.log(`   • ${userCount} users created`);
  console.log(`   • ${workshopCount} workshops created`);
  console.log(`   • ${exerciseCount} exercises created`);
  console.log(`   • ${fileCount} files created`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Error during seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
