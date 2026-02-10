import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { UI_LABELS } from '@/lib/constants';

export const metadata = {
  title: 'INDAI.CLEAN',
  description: 'Frontend repository for INDAI.CLEAN website',
};

/**
 * Root Layout
 * 
 * Applies Design System tokens:
 * - Font family from Typography Canon v1.0.0
 * - Base colors from Color Palette Canon v1.0.0
 * - Skip-to-content link per MASTER_SPEC §16.2
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="font-sans text-base font-normal leading-6 text-dark-500 bg-white antialiased">
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-dark-500 focus:rounded"
        >
          {UI_LABELS.skipLink}
        </Link>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
