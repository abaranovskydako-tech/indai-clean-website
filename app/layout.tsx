import type { ReactNode } from 'react';

export const metadata = {
  title: 'INDAI.CLEAN',
  description: 'Frontend repository for INDAI.CLEAN website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
