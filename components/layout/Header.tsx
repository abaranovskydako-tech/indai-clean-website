import Link from 'next/link';
import { UI_LABELS } from '@/lib/constants';

/**
 * Header component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/layout/Header.tsx
 */

export default function Header() {
  return (
    <header className="bg-white border-b border-light-200">
      <nav aria-label={UI_LABELS.nav.ariaLabel} className="container mx-auto px-4 py-4">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-base font-normal leading-6 text-dark-500 hover:text-ocean-500 transition-colors"
            >
              {UI_LABELS.nav.home}
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-base font-normal leading-6 text-dark-500 hover:text-ocean-500 transition-colors"
            >
              {UI_LABELS.nav.services}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

