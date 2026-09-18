export type ZoneId = 'entry' | 'workspace' | 'lab' | 'gaming' | 'about';

export type QualityLevel = 'low' | 'medium' | 'high';

export type ExperienceMode = '3d' | '2d';

export interface Project {
  id: string;
  title: string;
  category: 'ERP' | 'SAAS' | 'FINTECH' | 'PRODUCT' | 'AI' | '3D' | 'TOOLS';
  categoryLabel: string;
  tagline: string;
  description: string;
  year?: string;
  role?: string;
  technologies: string[];
  features?: string[];
  thumbnail?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  accentColor?: string;
}

export interface Experiment {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: 'EXPERIMENT' | 'PROTOTYPE' | 'IN PROGRESS' | 'SHIPPED';
  date?: string;
  link?: string;
}

export interface SkillGroup {
  category: 'BACKEND' | 'FRONTEND' | 'DATABASE' | 'INFRASTRUCTURE' | 'AI';
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'WORK' | 'EDUCATION' | 'MILESTONE';
  description: string;
  technologies?: string[];
  highlight?: boolean;
}

export interface GamingProfile {
  title: string;
  tagline: string;
  games: {
    name: string;
    role: string;
    favoriteCharacters?: string[];
    description: string;
    badge: string;
  }[];
}

export interface SiteMeta {
  name: string;
  handle: string;
  brand: string;
  aliases: string[];
  title: string;
  role: string;
  tagline: string;
  bio: string;
  status: string;
  location: string;
  email: string;
  phone?: string;
  currentCompany?: string;
  github: string;
  linkedin: string;
}
