import Link from 'next/link';
import { SYSTEM_MESSAGES } from '@/lib/constants';

/**
 * 404 Not Found Page
 * 
 * Applies Design System tokens:
 * - Typography from Typography Canon v1.0.0
 * - Colors from Color Palette Canon v1.0.0
 */
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark-500 mb-4">
        404
      </h1>
      <p className="text-base font-normal leading-6 text-dark-500 mb-8">
        {SYSTEM_MESSAGES.notFound.title}
      </p>
      <Link
        href="/"
        className="inline-block px-4 py-2 rounded font-normal text-base leading-6 bg-accent-500 text-dark-500 hover:opacity-90 transition-colors"
      >
        {SYSTEM_MESSAGES.notFound.backToHome}
      </Link>
    </div>
  );
}

