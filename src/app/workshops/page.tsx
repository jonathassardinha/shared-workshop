"use client";

import Link from "next/link";
import {
  WorkshopCard,
  type Workshop,
} from "../../components/workshop/WorkshopCard";

// Mock data for workshops
const mockWorkshops: Workshop[] = [
  {
    id: "1",
    title: "React Fundamentals",
    description:
      "Learn the basics of React including components, props, state, and hooks. This workshop covers everything you need to get started with React development.",
    lecturerName: "John Doe",
    exerciseCount: 5,
    isActive: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "TypeScript Advanced Patterns",
    description:
      "Deep dive into advanced TypeScript patterns, generics, and type manipulation. Perfect for developers who want to master TypeScript.",
    lecturerName: "Jane Smith",
    exerciseCount: 8,
    isActive: false,
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Next.js App Router",
    description:
      "Comprehensive guide to Next.js App Router, server components, and modern React patterns in Next.js 13+.",
    lecturerName: "Bob Johnson",
    exerciseCount: 6,
    isActive: true,
    createdAt: "2024-01-20",
  },
  {
    id: "4",
    title: "CSS Grid & Flexbox",
    description:
      "Master modern CSS layout techniques with hands-on exercises in Grid and Flexbox.",
    lecturerName: "Alice Brown",
    exerciseCount: 4,
    isActive: false,
    createdAt: "2024-01-05",
  },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Workshops</h1>
            <p className="mt-2 text-gray-400">
              Discover and join coding workshops or create your own
            </p>
          </div>
          <Link
            href="/workshop/create"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Create Workshop
          </Link>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search workshops..."
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <select className="rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none">
            <option value="all">All Workshops</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>

        {mockWorkshops.length === 0 && (
          <div className="py-12 text-center">
            <p className="mb-4 text-gray-400">No workshops found</p>
            <Link
              href="/workshop/create"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Create First Workshop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
