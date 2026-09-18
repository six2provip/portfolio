import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-smartretail',
    period: '01/08/2026 — PRESENT',
    role: 'Backend / Fullstack Developer',
    organization: 'SmartRetail Company',
    type: 'WORK',
    description:
      'Engineering enterprise retail management platforms, real-time POS processing, multi-branch inventory tracking, and high-availability backend microservices.',
    technologies: ['Python', 'FastAPI', 'Django', 'MySQL', 'Redis', 'Docker', 'WebSocket', 'React'],
    highlight: true
  },
  {
    id: 'exp-independent',
    period: '09/2025 — 07/2026',
    role: 'Independent Software Engineer',
    organization: 'Self-employed & AI R&D',
    type: 'WORK',
    description:
      'Engineered an automated Telegram bot integrating browser automation & GrabFood Web APIs for discount offer retrieval. Built AI applications utilizing OpenAI APIs, Retrieval-Augmented Generation (RAG), vector stores, and custom game architecture with Godot Engine.',
    technologies: ['Python', 'FastAPI', 'OpenAI APIs', 'RAG / Vector DB', 'PostgreSQL', 'Docker', 'Telegram API'],
    highlight: true
  },
  {
    id: 'exp-exnodes',
    period: '03/2024 — 08/2025',
    role: 'Backend Developer',
    organization: 'Exnodes Company',
    type: 'WORK',
    description:
      'Architected multi-tenant B2B SaaS ERP systems including TWS Solutions, AIOS, SalonBookly, PandaPay, and Internal HR. Integrated Nuvei, Goat, Payzli payment gateways, PAX and Dejavoo POS terminals, subscription billing, and real-time WebSocket state synchronization.',
    technologies: ['Python', 'Django', 'FastAPI', 'MySQL', 'Redis', 'Docker', 'AWS (EC2, S3)', 'WebSocket', 'Firebase'],
    highlight: true
  },
  {
    id: 'edu-fpt-polytechnic',
    period: '08/2021 — 12/2023',
    role: 'Software Development Major',
    organization: 'FPT Polytechnic (Graduated 12/2023)',
    type: 'EDUCATION',
    description:
      'Completed Software Development degree with extensive coursework in backend architecture, relational database design, distributed systems, and modern web application development.',
    technologies: ['Software Development', 'Java', 'Python', 'Database Systems', 'Agile'],
    highlight: true
  }
];
