import { SiteMeta } from '@/types';

export const siteConfig: SiteMeta = {
  name: 'Nguyễn Gia Khang',
  handle: 'six2provip',
  brand: 'KHANG.OS',
  aliases: ['Khang', 'Khang Béo', 'Six2', 'six2provip'],
  title: 'Nguyễn Gia Khang — Backend & Fullstack Developer',
  role: 'BACKEND & FULLSTACK DEVELOPER',
  tagline: 'BACKEND SPECIALIST • MULTI-TENANT B2B SAAS • FULLSTACK ARCHITECT',
  bio: 'Backend Developer with hands-on experience engineering multi-tenant B2B SaaS platforms, ERP systems, payment gateways, POS integrations (PAX, Dejavoo), and cloud-native architectures using Python, Django, FastAPI, Docker, and AWS.',
  status: 'CURRENTLY AT SMARTRETAIL (01/08/2026 — PRESENT)',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'khang.02.dev@gmail.com',
  phone: '0898496906',
  currentCompany: 'SmartRetail (01/08/2026 — Present)',
  github: 'https://github.com/six2provip',
  linkedin: 'https://www.linkedin.com/in/khang-nguyen-4b2b97414/',
};

export const navItems = [
  { id: 'workspace', label: 'WORKSPACE', href: '#workspace', icon: 'Code2' },
  { id: 'projects', label: 'PROJECTS', href: '#projects', icon: 'Layers' },
  { id: 'lab', label: 'LAB', href: '#lab', icon: 'FlaskConical' },
  { id: 'gaming', label: 'GAMING', href: '#gaming', icon: 'Gamepad2' },
  { id: 'about', label: 'ABOUT', href: '#about', icon: 'User' },
  { id: 'contact', label: 'CONTACT', href: '#contact', icon: 'Mail' },
] as const;
