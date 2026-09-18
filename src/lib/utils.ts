import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategory(cat: string): string {
  switch (cat) {
    case 'ERP':
      return 'ERP & Systems';
    case 'PRODUCT':
      return 'Product & Social';
    case 'AI':
      return 'AI & Tooling';
    case '3D':
      return '3D & WebGL';
    case 'TOOLS':
      return 'Developer Tools';
    default:
      return cat;
  }
}
