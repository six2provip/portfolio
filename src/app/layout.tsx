import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khang.os'),
  title: 'Nguyễn Gia Khang — Fullstack Developer',
  description: 'Fullstack developer building systems, products and digital experiences.',
  keywords: [
    'Nguyễn Gia Khang',
    'Khang.OS',
    'Fullstack Developer',
    'Python',
    'FastAPI',
    'React',
    'Next.js',
    'Three.js',
    'WebGL',
    'Software Engineer',
    'Vietnam'
  ],
  authors: [{ name: 'Nguyễn Gia Khang', url: 'https://github.com/six2provip' }],
  creator: 'Nguyễn Gia Khang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khang.os',
    title: 'Nguyễn Gia Khang — Fullstack Developer',
    description: 'Fullstack developer building systems, products and digital experiences.',
    siteName: 'KHANG.OS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KHANG.OS — Nguyễn Gia Khang'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyễn Gia Khang — Fullstack Developer',
    description: 'Fullstack developer building systems, products and digital experiences.',
    creator: '@nguyengiakhang'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export const viewport: Viewport = {
  themeColor: '#07080c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07080c] text-white selection:bg-sky-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
