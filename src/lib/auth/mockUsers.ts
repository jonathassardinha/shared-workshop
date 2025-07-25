export interface MockUser {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: string;
}

export const mockUsers: MockUser[] = [
  {
    id: "user-1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b2be4c9c?w=150&h=150&fit=crop&crop=face",
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "user-2",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    createdAt: "2024-01-02T00:00:00Z",
  },
  {
    id: "user-3",
    name: "Carol Davis",
    email: "carol.davis@example.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    createdAt: "2024-01-03T00:00:00Z",
  },
  {
    id: "user-4",
    name: "David Wilson",
    email: "david.wilson@example.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    createdAt: "2024-01-04T00:00:00Z",
  },
  {
    id: "user-5",
    name: "Emma Brown",
    email: "emma.brown@example.com",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    createdAt: "2024-01-05T00:00:00Z",
  },
];

export const getMockUserOptions = () => {
  return mockUsers.map((user) => ({
    value: user.id,
    label: `${user.name} (${user.email})`,
  }));
};
