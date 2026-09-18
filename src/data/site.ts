import { SiteMeta } from '@/types';

export const siteConfig: SiteMeta = {
  name: 'Nguyễn Gia Khang',
  handle: 'six2provip',
  brand: 'KHANG.OS',
  aliases: ['Khang', 'Khang Béo', 'Six2', 'six2provip'],
  title: 'Nguyễn Gia Khang — Fullstack Developer',
  role: 'FULLSTACK DEVELOPER',
  tagline: 'BUILDER • DEVELOPER • CREATOR',
  bio: 'Building reliable systems, useful products, and interactive digital experiences with modern web technologies and AI architecture.',
  status: 'ONLINE • READY TO COLLABORATE',
  location: 'Vietnam',
  email: 'nguyengiakhang.dev@gmail.com',
  github: 'https://github.com/six2provip',
  linkedin: 'https://linkedin.com/in/nguyengiakhang',
};

export const navItems = [
  { id: 'workspace', label: 'WORKSPACE', href: '#workspace', icon: 'Code2' },
  { id: 'projects', label: 'PROJECTS', href: '#projects', icon: 'Layers' },
  { id: 'lab', label: 'LAB', href: '#lab', icon: 'FlaskConical' },
  { id: 'gaming', label: 'GAMING', href: '#gaming', icon: 'Gamepad2' },
  { id: 'about', label: 'ABOUT', href: '#about', icon: 'User' },
  { id: 'contact', label: 'CONTACT', href: '#contact', icon: 'Mail' },
] as const;
