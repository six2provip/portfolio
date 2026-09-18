import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'BACKEND',
    description: 'Scalable services, multi-tenant B2B architectures, async APIs & payment integrations',
    skills: [
      { name: 'Python', highlight: true, note: 'Primary core backend language' },
      { name: 'Django', highlight: true, note: 'Multi-tenant B2B SaaS & ORM modeling' },
      { name: 'FastAPI', highlight: true, note: 'High-speed async APIs & microservices' },
      { name: 'Java / Spring Boot', highlight: true, note: 'Enterprise OOP architectures' },
      { name: 'Node.js / NestJS', highlight: false, note: 'Event-driven TypeScript microservices' },
      { name: 'WebSocket', highlight: true, note: 'Real-time multi-store & POS sync' },
      { name: 'RESTful API Design', highlight: true, note: 'OpenAPI & clean contract architecture' }
    ]
  },
  {
    category: 'DATABASE',
    description: 'High-volume relational data, document stores, indexing & in-memory caching',
    skills: [
      { name: 'MySQL', highlight: true, note: 'Relational data modeling & query optimization' },
      { name: 'PostgreSQL', highlight: true, note: 'ACID compliance & vector search support' },
      { name: 'Redis', highlight: true, note: 'Caching, task queuing & session storage' },
      { name: 'MongoDB', highlight: false, note: 'Document stores & aggregation pipelines' },
      { name: 'MS SQL Server', highlight: false, note: 'Enterprise relational databases' }
    ]
  },
  {
    category: 'INFRASTRUCTURE',
    description: 'Cloud deployments, containerization, notification pipelines & CI/CD',
    skills: [
      { name: 'Docker', highlight: true, note: 'Multi-stage containerization & orchestration' },
      { name: 'AWS (EC2, S3)', highlight: true, note: 'Scalable cloud infrastructure & storage' },
      { name: 'Firebase', highlight: true, note: 'Push notifications & operational updates' },
      { name: 'Twilio', highlight: false, note: 'SMS & communication gateway integrations' },
      { name: 'Git & Linux', highlight: true, note: 'Server management, bash automation & workflows' }
    ]
  },
  {
    category: 'FRONTEND',
    description: 'Modern user interfaces, reactive dashboards, responsive design systems & 3D WebGL',
    skills: [
      { name: 'React', highlight: true, note: 'Component architectures & state workflows' },
      { name: 'Next.js', highlight: true, note: 'App Router, SSR & performance optimization' },
      { name: 'TypeScript', highlight: true, note: 'Strict typing & domain data contracts' },
      { name: 'Tailwind CSS', highlight: true, note: 'Design tokens & responsive UI layouts' },
      { name: 'Three.js / WebGL', highlight: true, note: '3D spatial scenes & canvas shaders' }
    ]
  },
  {
    category: 'AI',
    description: 'LLM application development, Retrieval-Augmented Generation (RAG) & developer tools',
    skills: [
      { name: 'OpenAI APIs & LLMs', highlight: true, note: 'Model orchestration & prompt chaining' },
      { name: 'RAG & Vector Stores', highlight: true, note: 'Semantic context retrieval pipelines' },
      { name: 'Cursor & Copilot', highlight: true, note: 'AI-assisted development acceleration' },
      { name: 'Browser Automation', highlight: true, note: 'Web scraping & Telegram bot integrations' }
    ]
  }
];
