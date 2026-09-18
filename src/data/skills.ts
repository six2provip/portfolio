import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'BACKEND',
    description: 'Server architecture, asynchronous APIs, data modeling & business logic',
    skills: [
      { name: 'Python', highlight: true, note: 'Primary backend language' },
      { name: 'FastAPI', highlight: true, note: 'High performance async REST APIs' },
      { name: 'Django', highlight: false, note: 'Full-featured enterprise web framework' },
      { name: 'Node.js', highlight: true, note: 'Event-driven server runtime' },
      { name: 'REST API', highlight: true, note: 'Clean API contract design & OpenAPI' },
      { name: 'WebSocket', highlight: true, note: 'Bidirectional low-latency streaming' }
    ]
  },
  {
    category: 'FRONTEND',
    description: 'Modern user interfaces, reactive states, design systems & 3D WebGL',
    skills: [
      { name: 'React', highlight: true, note: 'Component lifecycle & hooks' },
      { name: 'Next.js', highlight: true, note: 'App Router, SSR, Turbopack' },
      { name: 'TypeScript', highlight: true, note: 'Strict typing & domain modeling' },
      { name: 'Tailwind CSS', highlight: true, note: 'Modern responsive design tokens' },
      { name: 'Three.js / WebGL', highlight: true, note: '3D spatial scenes & shaders' },
      { name: 'React Three Fiber', highlight: true, note: 'Declarative 3D composition' }
    ]
  },
  {
    category: 'DATABASE',
    description: 'Relational & document databases, indexing, and high-speed in-memory caching',
    skills: [
      { name: 'MongoDB', highlight: true, note: 'Document stores & aggregation pipelines' },
      { name: 'PostgreSQL', highlight: true, note: 'Relational schemas & ACID compliance' },
      { name: 'Redis', highlight: true, note: 'In-memory caching, Pub/Sub & session store' }
    ]
  },
  {
    category: 'INFRASTRUCTURE',
    description: 'Containerization, version control, automated deployment & Linux runtimes',
    skills: [
      { name: 'Docker', highlight: true, note: 'Containerization & multi-stage builds' },
      { name: 'Git', highlight: true, note: 'Version control & branch workflows' },
      { name: 'Linux', highlight: true, note: 'Server management & shell automation' },
      { name: 'Vercel', highlight: true, note: 'Edge deployment & serverless functions' }
    ]
  },
  {
    category: 'AI',
    description: 'Language model integrations, autonomous agents, protocols & developer tooling',
    skills: [
      { name: 'LLM Integration', highlight: true, note: 'Prompt engineering & streaming token UX' },
      { name: 'AI Agents', highlight: true, note: 'Autonomous task execution & tool calling' },
      { name: 'MCP (Model Context Protocol)', highlight: true, note: 'Custom tool server bridges' },
      { name: 'Local Models (Ollama)', highlight: true, note: 'On-device quantized inference' },
      { name: 'AI Coding Tools', highlight: true, note: 'Modern agentic pair-programming workflows' }
    ]
  }
];
