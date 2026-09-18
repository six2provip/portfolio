import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-fullstack-dev',
    period: '2024 — PRESENT',
    role: 'Fullstack & Systems Developer',
    organization: 'Independent Engineering & Client Solutions',
    type: 'WORK',
    description:
      'Architecting and shipping web platforms, enterprise ERP tools, and AI-augmented developer workflows. Leading fullstack implementation across React, Next.js, Python FastAPI, and MongoDB.',
    technologies: ['React', 'Next.js', 'Python', 'FastAPI', 'MongoDB', 'Docker', 'Tailwind CSS'],
    highlight: true
  },
  {
    id: 'exp-project-smartretail',
    period: '2023 — 2024',
    role: 'Fullstack Platform Engineer',
    organization: 'Dashboard SmartRetail & ERP Initiatives',
    type: 'MILESTONE',
    description:
      'Engineered real-time retail operational dashboard, role-based security layer, and POS event processing pipeline over WebSockets.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'REST API'],
    highlight: false
  },
  {
    id: 'edu-fpt-polytechnic',
    period: 'GRADUATED 12/2023',
    role: 'Software Engineering Major',
    organization: 'FPT Polytechnic',
    type: 'EDUCATION',
    description:
      'Completed software engineering program focusing on modern software development fundamentals, web applications, database modeling, and team project delivery.',
    technologies: ['Software Architecture', 'Web Engineering', 'Database Design', 'Agile'],
    highlight: true
  }
];
