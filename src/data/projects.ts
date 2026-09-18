import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'smart-retail',
    title: 'SmartRetail Platform',
    category: 'ERP',
    categoryLabel: 'ENTERPRISE ERP / RETAIL',
    tagline: 'Multi-branch retail management, real-time POS processing & inventory telemetry',
    description:
      'Engineering enterprise retail management platforms, real-time POS processing, multi-branch inventory tracking, and high-availability backend microservices at SmartRetail Company.',
    year: '2026 — Present',
    role: 'Backend / Fullstack Developer',
    technologies: ['Python', 'FastAPI', 'Django', 'MySQL', 'Redis', 'Docker', 'WebSocket', 'React'],
    features: [
      'Multi-branch retail telemetry and centralized inventory tracking',
      'High-throughput Point-of-Sale (POS) order execution and sync',
      'Real-time WebSocket event synchronization for stock & transactions',
      'Granular Role-Based Access Control (RBAC) across merchant outlets',
      'High-availability backend microservices deployed via Docker'
    ],
    demoUrl: 'https://smartretail.vn',
    githubUrl: 'https://github.com/six2provip',
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'tws-solutions',
    title: 'TWS Solutions',
    category: 'SAAS',
    categoryLabel: 'B2B SAAS / RETAIL ERP',
    tagline: 'Multi-tenant B2B SaaS ERP platform for smoke shop, vape shop, and retail businesses',
    description:
      'Architected multi-tenant backend APIs serving multiple merchant tenants. Built order management, subscription billing, integrated Nuvei, Goat, and Payzli payment gateways, PAX and Dejavoo POS terminals, and real-time WebSocket store sync.',
    year: '2024 — 2025',
    role: 'Backend Developer (Exnodes)',
    technologies: ['Python', 'Django', 'MySQL', 'Redis', 'Docker', 'AWS', 'Firebase', 'Twilio', 'WebSocket'],
    features: [
      'Scalable multi-tenant backend APIs serving retail merchants',
      'Payment gateway integrations: Nuvei, Goat, and Payzli',
      'In-store transaction processing with PAX and Dejavoo POS terminals',
      'Real-time merchant operations synchronization using WebSocket',
      'Subscription billing workflows and automated recurring charges',
      'Twilio SMS alerts and Firebase notifications'
    ],
    demoUrl: 'https://www.twssolutions.us',
    githubUrl: 'https://app.twssolutions.us',
    featured: true,
    accentColor: '#10b981'
  },
  {
    id: 'aios-platform',
    title: 'AIOS Multi-Store ERP',
    category: 'ERP',
    categoryLabel: 'B2B SAAS / SUPPLY CHAIN',
    tagline: 'Unified multi-store inventory, order orchestration, and merchant-supplier platform',
    description:
      'Multi-tenant B2B SaaS ERP platform enabling merchants and suppliers to manage inventory, orders, payments, subscriptions, and multi-store operations from a unified system.',
    year: '2024 — 2025',
    role: 'Backend Developer (Exnodes)',
    technologies: ['Python', 'Django', 'MySQL', 'Redis', 'Docker', 'AWS', 'Firebase', 'Twilio', 'WebSocket'],
    features: [
      'Centralized inventory, customer, order, and payment management modules',
      'Real-time multi-store synchronization using WebSocket',
      'Subscription billing and recurring payment solutions',
      'Supplier and merchant operational workflows',
      'Cloud-native deployment environments using Docker and AWS'
    ],
    demoUrl: 'https://aiosolutions.io',
    githubUrl: 'https://app.aiosolutions.io',
    featured: true,
    accentColor: '#3b82f6'
  },
  {
    id: 'pandapay-fintech',
    title: 'PandaPay POS Fintech',
    category: 'FINTECH',
    categoryLabel: 'FINTECH / POS PLATFORM',
    tagline: 'Android PAX POS terminal payment processing and NFC transaction synchronization',
    description:
      'Developed secure payment processing and transaction synchronization for Android-based PAX POS terminals, supporting NFC payment methods (Apple Pay, Google Pay, cards) and merchant reporting.',
    year: '2024 — 2025',
    role: 'Backend Developer (Exnodes)',
    technologies: ['Python', 'Django', 'MySQL', 'Redis', 'Docker', 'AWS', 'WebSocket', 'PAX POS API'],
    features: [
      'PAX POS terminal integration for secure in-store transactions',
      'NFC contactless payment processing: Apple Pay, Google Pay, debit/credit',
      'Real-time payment status synchronization via WebSocket',
      'Transaction monitoring, settlement reporting, and card analytics',
      'Scalable backend infrastructure deployed on AWS with Docker'
    ],
    demoUrl: 'https://pandapay.ca',
    githubUrl: 'https://www.pandapay360.ca',
    featured: true,
    accentColor: '#f59e0b'
  },
  {
    id: 'salonbookly',
    title: 'SalonBookly',
    category: 'SAAS',
    categoryLabel: 'B2B SAAS / APPOINTMENT ERP',
    tagline: 'B2B SaaS ERP for salon businesses: appointment scheduling, POS & loyalty programs',
    description:
      'B2B SaaS ERP platform providing real-time appointment scheduling, customer check-in, POS operations, RBAC, loyalty programs, and automated Firebase notifications.',
    year: '2024 — 2025',
    role: 'Backend Developer (Exnodes)',
    technologies: ['Python', 'Django', 'MySQL', 'Redis', 'Docker', 'AWS', 'Firebase', 'Twilio', 'WebSocket'],
    features: [
      'Real-time appointment scheduling and customer check-in systems',
      'Role-based access control (RBAC) for multi-user salon staff',
      'Customer management and loyalty reward programs',
      'Recurring subscription and payment workflows',
      'Firebase notifications for operational events and customer engagement'
    ],
    demoUrl: 'https://salonbookly.com',
    githubUrl: 'https://app.salonbookly.com',
    featured: false,
    accentColor: '#ec4899'
  },
  {
    id: 'grabfood-automation',
    title: 'GrabFood Deals Bot & AI',
    category: 'AI',
    categoryLabel: 'AUTOMATION & AI',
    tagline: 'Browser automation + GrabFood Web APIs discount ranker, OpenAI APIs & RAG',
    description:
      'Engineered an automated Telegram bot combining browser automation and GrabFood Web APIs to rank best discount offers, alongside AI-powered applications utilizing OpenAI APIs, RAG, and vector stores.',
    year: '2025 — 2026',
    role: 'Independent Software Engineer',
    technologies: ['Python', 'FastAPI', 'OpenAI APIs', 'RAG / Vector DB', 'PostgreSQL', 'Docker', 'Telegram API'],
    features: [
      'Real-time restaurant and promotion scraping via GrabFood Web APIs',
      'Discount ranking algorithm categorized by user food choices',
      'AI-powered RAG retrieval pipelines using OpenAI APIs and vector databases',
      'Asynchronous Telegram bot webhook processing with automated updates',
      'Gameplay systems & backend architecture with Godot Engine'
    ],
    demoUrl: 'https://github.com/six2provip',
    githubUrl: 'https://github.com/six2provip',
    featured: true,
    accentColor: '#8b5cf6'
  },
  {
    id: 'internal-hr',
    title: 'Internal HR & Payroll System',
    category: 'TOOLS',
    categoryLabel: 'INTERNAL ENTERPRISE HR',
    tagline: 'Internal HR, attendance tracking, overtime calculation, and Excel payroll automation',
    description:
      'Developed FastAPI backend APIs for employee operations, automated attendance tracking, overtime calculation, payroll processing, and Excel export systems.',
    year: '2024 — 2025',
    role: 'Backend Developer (Exnodes)',
    technologies: ['Python', 'FastAPI', 'MySQL', 'Redis', 'Docker', 'Firebase', 'Excel Automation'],
    features: [
      'High-speed FastAPI backend services with Redis caching',
      'Automated attendance tracking and overtime calculation algorithms',
      'Automated Excel export system for payroll and attendance reports',
      'Role-based access control and Firebase workflow notifications',
      'Optimized database queries for large employee datasets'
    ],
    demoUrl: 'https://github.com/six2provip',
    githubUrl: 'https://github.com/six2provip',
    featured: false,
    accentColor: '#14b8a6'
  }
];

export const projectCategories = [
  { id: 'ALL', label: 'ALL' },
  { id: 'ERP', label: 'ERP & RETAIL' },
  { id: 'SAAS', label: 'B2B SAAS' },
  { id: 'FINTECH', label: 'FINTECH & POS' },
  { id: 'AI', label: 'AI & BOT' },
  { id: 'TOOLS', label: 'INTERNAL TOOLS' }
] as const;
