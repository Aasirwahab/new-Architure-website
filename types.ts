
export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  imageUrl: string;
  outcome: string;
  brief?: string;
  solution?: string;
  size?: string;
  stage?: string;
  // Added missing properties to fix type errors in constants and ProjectDetail
  constraints?: string;
  approach?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  deliverables: string[];
  timeline: string;
}