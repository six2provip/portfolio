import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KHANG.OS — Nguyễn Gia Khang',
    short_name: 'KHANG.OS',
    description: 'Fullstack developer building systems, products and digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07080c',
    theme_color: '#07080c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
