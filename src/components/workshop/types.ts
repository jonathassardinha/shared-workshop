export interface Exercise {
  id: string;
  title: string;
  description: string;
  files: Record<string, { language: string; model: string }>;
}

export interface WorkshopData {
  title: string;
  description: string;
}
