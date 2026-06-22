export interface Skill {
  id: string;
  name: string;
  description: string;
  interactiveType: 'arithmetic' | 'reasoning' | 'spatial' | 'communication' | 'prompting';
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  colSpan: 4 | 8;
  tags: string[];
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  iconName: string;
  subtext: string;
  details: string[];
}
