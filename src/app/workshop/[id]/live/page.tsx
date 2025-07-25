"use client";

import { useState, use } from "react";
import { LiveWorkshopEditor } from "../../../../components/workshop/LiveWorkshopEditor";
import { type MonacoFile, type UserRole } from "../../../../components/Editor";
import { useClientLogger } from "../../../../lib/Logger/ClientLogger";

// Mock data for live workshop
const mockWorkshopData = {
  id: "1",
  title: "React Fundamentals",
  description: "Learn the basics of React",
  currentExercise: {
    id: "1",
    title: "Getting Started with Components",
    description: "Create your first React component",
    files: {
      "/App.tsx": {
        language: "typescript",
        model: `import { Test } from "./test";

const App = () => {
  return <div>Hello, World! <Test /></div>;
};

export default App;`,
      },
      "/test.tsx": {
        language: "typescript",
        model: `export const Test = () => {
  return <div>Test component</div>;
};`,
      },
    },
  },
  participants: [
    {
      id: "1",
      name: "Alice Johnson",
      hasSubmitted: true,
      lastActivity: "2 minutes ago",
    },
    {
      id: "2",
      name: "Bob Smith",
      hasSubmitted: false,
      lastActivity: "5 minutes ago",
    },
    {
      id: "3",
      name: "Charlie Brown",
      hasSubmitted: true,
      lastActivity: "1 minute ago",
    },
  ],
};

// Mock user role - will be replaced with real auth in phase 2
const mockUserRole: UserRole = "participant";

interface LiveWorkshopPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function LiveWorkshopPage({ params }: LiveWorkshopPageProps) {
  const { id } = use(params);
  const [currentFiles] = useState<Record<string, MonacoFile>>(
    mockWorkshopData.currentExercise.files,
  );
  const logger = useClientLogger();

  const handleSubmit = () => {
    logger.info("Submitting solution for workshop:", id, currentFiles);
    alert("Solution submitted successfully!");
  };

  const handleSave = () => {
    logger.info("Saving changes for workshop:", id, currentFiles);
    alert("Changes saved!");
  };

  const handleViewParticipantSubmission = (participantId: string) => {
    logger.debug(
      "Loading submission for participant:",
      participantId,
      "in workshop:",
      id,
    );
    // In real implementation, this would load the participant's files
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#18181b] to-[#1b1b1c] text-white">
      {/* Main Editor Area */}
      <div className="flex flex-1 flex-col">
        {/* Workshop Header */}
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">{mockWorkshopData.title}</h1>
              <p className="text-sm text-gray-400">
                Current Exercise: {mockWorkshopData.currentExercise.title}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Role: {mockUserRole}
              </span>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-green-400">Live</span>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1">
          <LiveWorkshopEditor
            files={currentFiles}
            userRole={mockUserRole}
            onSubmit={mockUserRole === "participant" ? handleSubmit : undefined}
            onSave={mockUserRole === "lecturer" ? handleSave : undefined}
          />
        </div>
      </div>

      {/* Lecturer Panel (only visible for lecturers) */}
      {mockUserRole === "lecturer" && (
        <div className="w-80 border-l border-gray-700 bg-gray-800">
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-lg font-semibold">Workshop Control</h2>
          </div>

          {/* Exercise Control */}
          <div className="border-b border-gray-700 p-4">
            <h3 className="mb-3 text-sm font-medium">Current Exercise</h3>
            <div className="mb-2 text-sm text-gray-300">
              {mockWorkshopData.currentExercise.title}
            </div>
            <p className="mb-3 text-xs text-gray-400">
              {mockWorkshopData.currentExercise.description}
            </p>
            <button className="w-full rounded bg-blue-600 px-3 py-1.5 text-sm hover:bg-blue-700">
              Change Exercise
            </button>
          </div>

          {/* Participants List */}
          <div className="p-4">
            <h3 className="mb-3 text-sm font-medium">
              Participants ({mockWorkshopData.participants.length})
            </h3>
            <div className="space-y-2">
              {mockWorkshopData.participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center justify-between rounded border border-gray-600 p-2 text-sm"
                >
                  <div className="flex-1">
                    <div className="text-white">{participant.name}</div>
                    <div className="text-xs text-gray-400">
                      {participant.lastActivity}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        participant.hasSubmitted
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    />
                    <button
                      onClick={() =>
                        handleViewParticipantSubmission(participant.id)
                      }
                      className="rounded bg-gray-600 px-2 py-1 text-xs hover:bg-gray-500"
                      disabled={!participant.hasSubmitted}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Controls */}
          <div className="border-t border-gray-700 p-4">
            <div className="space-y-2">
              <button className="w-full rounded bg-red-600 px-3 py-2 text-sm hover:bg-red-700">
                End Workshop
              </button>
              <button className="w-full rounded border border-gray-600 px-3 py-2 text-sm hover:bg-gray-700">
                Export Results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Participant Panel (only visible for participants) */}
      {mockUserRole === "participant" && (
        <div className="w-80 border-l border-gray-700 bg-gray-800">
          <div className="border-b border-gray-700 p-4">
            <h2 className="text-lg font-semibold">Exercise Info</h2>
          </div>

          <div className="p-4">
            <h3 className="mb-2 text-sm font-medium">
              {mockWorkshopData.currentExercise.title}
            </h3>
            <p className="mb-4 text-sm text-gray-300">
              {mockWorkshopData.currentExercise.description}
            </p>

            <div className="border-t border-gray-700 pt-4">
              <h4 className="mb-2 text-sm font-medium">Instructions</h4>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• Edit the code in the editor</li>
                <li>• Use the preview to see your changes</li>
                <li>• Submit when you&apos;re ready</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
