import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'smart-retail',
    title: 'Dashboard SmartRetail',
    category: 'ERP',
    categoryLabel: 'ERP / BUSINESS PLATFORM',
    tagline: 'Intelligent multi-store operations, inventory control, and retail metrics',
    description:
      'A comprehensive retail management system featuring real-time inventory monitoring, role-based access control (RBAC), point-of-sale workflows, and business telemetry dashboards.',
    year: '2024',
    role: 'Fullstack Developer',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Tailwind CSS', 'FastAPI'],
    features: [
      'Multi-branch retail telemetry and inventory tracking',
      'Granular Role-Based Access Control (RBAC)',
      'Real-time WebSocket event synchronization for sales & stock levels',
      'Point-of-Sale (POS) order execution pipeline',
      'Automated financial reports and operational metrics'
    ],
    demoUrl: 'https://smartretail-demo.khang.os',
    githubUrl: 'https://github.com/six2provip/dashboard-smartretail',
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'erp-business',
    title: 'ERP / Business Management',
    category: 'ERP',
    categoryLabel: 'ENTERPRISE SOFTWARE',
    tagline: 'Modular enterprise resource orchestration and workflow automation',
    description:
      'Engineered a scalable ERP ecosystem integrating supply chain, human resource modules, audit logging, and automated invoice processing with high availability.',
    year: '2024',
    role: 'Backend & System Architect',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Next.js'],
    features: [
      'Modular micro-service architecture with FastAPI gateways',
      'PostgreSQL relational schema with high-performance indexing',
      'Asynchronous task queuing via Redis and Celery',
      'End-to-end audit trails and compliance logging',
      'Interactive workflow automation engine'
    ],
    demoUrl: 'https://erp-demo.khang.os',
    githubUrl: 'https://github.com/six2provip/erp-business-system',
    featured: true,
    accentColor: '#34d399'
  },
  {
    id: 'pulse-social',
    title: 'Pulse',
    category: 'PRODUCT',
    categoryLabel: 'PRODUCT / SOCIAL',
    tagline: 'High-speed real-time social communication and community engagement hub',
    description:
      'A responsive community platform delivering low-latency messaging, media streaming channels, interactive discussions, and rich markdown communication.',
    year: '2023',
    role: 'Fullstack Developer',
    technologies: ['Next.js', 'TypeScript', 'WebSocket', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    features: [
      'Bidirectional low-latency messaging over persistent WebSockets',
      'Dynamic community channels and direct conversation rooms',
      'Rich media preview rendering with lazy asset loading',
      'Optimistic UI state updates for responsive user feedback',
      'Custom presence tracking and typing status indicators'
    ],
    demoUrl: 'https://pulse-social.khang.os',
    githubUrl: 'https://github.com/six2provip/pulse-social-platform',
    featured: true,
    accentColor: '#818cf8'
  },
  {
    id: 'ai-dev-platform',
    title: 'AI Developer Platform',
    category: 'AI',
    categoryLabel: 'AI / DEVELOPER TOOLS',
    tagline: 'Context-aware code intelligence, prompt chaining, and automated agent pipelines',
    description:
      'An experimental platform connecting local and cloud LLMs to developer codebases for semantic code exploration, test generation, and automated diff inspection.',
    year: '2024',
    role: 'AI / Fullstack Engineer',
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'LangChain', 'Local LLMs'],
    features: [
      'Contextual repository embedding and vector retrieval pipeline',
      'Multi-model provider abstraction (OpenAI, Anthropic, Local Ollama)',
      'Interactive streaming token responses with syntax highlighting',
      'Automated pull request diff summarization and test scaffolding',
      'Strict local privacy mode preserving developer IP'
    ],
    demoUrl: 'https://ai-platform.khang.os',
    githubUrl: 'https://github.com/six2provip/ai-developer-platform',
    featured: true,
    accentColor: '#f43f5e'
  },
  {
    id: 'interactive-3d-map',
    title: 'Interactive 3D Map',
    category: '3D',
    categoryLabel: '3D / WEBGL',
    tagline: 'Hardware-accelerated geospatial visualization and spatial node navigation',
    description:
      'An interactive 3D spatial terrain and navigation visualizer built on WebGL and Three.js, rendering dynamic topography, points of interest, and atmospheric lighting.',
    year: '2023',
    role: 'Creative / 3D Developer',
    technologies: ['Three.js', 'WebGL', 'React Three Fiber', 'GLSL Shaders', 'TypeScript'],
    features: [
      'Procedural terrain generation and LOD (Level of Detail) meshing',
      'Custom vertex and fragment GLSL shaders for atmospheric glow',
      'Raycasted interactive POI nodes with smooth orbital transitions',
      'Optimized 60 FPS rendering pipeline across desktop and mobile',
      'Dynamic day/night lighting cycles with realistic shadow maps'
    ],
    demoUrl: 'https://3d-map.khang.os',
    githubUrl: 'https://github.com/six2provip/interactive-3d-map',
    featured: false,
    accentColor: '#38bdf8'
  },
  {
    id: 'developer-toolbox',
    title: 'Developer Toolbox',
    category: 'TOOLS',
    categoryLabel: 'DEVELOPER TOOLS',
    tagline: 'Client-first developer utilities, schema converters, and network debuggers',
    description:
      'A suite of zero-latency, privacy-focused utilities for software engineers: JSON/YAML/TypeScript converters, JWT decoders, regex testers, and mock API generators.',
    year: '2024',
    role: 'Frontend & Tooling Developer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'Next.js'],
    features: [
      '100% client-side data processing with zero telemetry or network leaks',
      'Web Worker offloading for CPU-intensive formatting and transformations',
      'Keyboard-first UX with instant CMD+K command invocation',
      'Offline-first PWA caching and instant local storage persistence',
      'Customizable workspace layouts and quick snippet export'
    ],
    demoUrl: 'https://toolbox.khang.os',
    githubUrl: 'https://github.com/six2provip/developer-toolbox',
    featured: false,
    accentColor: '#eab308'
  }
];

export const projectCategories = [
  { id: 'ALL', label: 'ALL' },
  { id: 'ERP', label: 'ERP' },
  { id: 'PRODUCT', label: 'PRODUCT' },
  { id: 'AI', label: 'AI' },
  { id: '3D', label: '3D' },
  { id: 'TOOLS', label: 'TOOLS' }
] as const;
