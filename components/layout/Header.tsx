'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { UI_LABELS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

/**
 * Header component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/layout/Header.tsx
 *
 * Sticky, responsive header with scroll behavior:
 * - Over dark hero: transparent, light text
 * - After scroll: white background, shadow
 * - Mobile hamburger menu
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkBase =
    'text-base font-normal leading-6 transition-colors block py-2 md:py-0';
  const navLinkLight =
    'text-light-200/90 hover:text-white md:text-light-200/90 md:hover:text-white';
  const navLinkDark = 'text-dark-500 hover:text-ocean-500';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-light-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            'font-bold text-xl md:text-2xl tracking-tight transition-colors',
            scrolled ? 'text-dark-500' : 'text-white'
          )}
        >
          INDAI
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label={UI_LABELS.nav.ariaLabel}
          className="hidden md:flex items-center gap-8"
        >
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className={cn(navLinkBase, scrolled ? navLinkDark : navLinkLight)}
              >
                {UI_LABELS.nav.home}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={cn(navLinkBase, scrolled ? navLinkDark : navLinkLight)}
              >
                {UI_LABELS.nav.services}
              </Link>
            </li>
          </ul>
          <Link href="#quiz">
            <Button
              variant="default"
              className={cn(
                scrolled ? '' : 'bg-accent-500 text-dark-500 hover:bg-accent-500/90'
              )}
            >
              {UI_LABELS.buttons.headerCta}
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? UI_LABELS.nav.mobileMenuClose : UI_LABELS.nav.mobileMenuOpen}
          className={cn(
            'md:hidden p-2 rounded transition-colors',
            scrolled ? 'text-dark-500 hover:bg-light-200' : 'text-white hover:bg-white/10'
          )}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden />
          ) : (
            <Menu className="w-6 h-6" aria-hidden />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={cn(
            'md:hidden border-t transition-colors',
            scrolled ? 'border-light-200 bg-white' : 'border-white/20 bg-dark-500/95'
          )}
        >
          <nav
            aria-label={UI_LABELS.nav.ariaLabel}
            className="max-w-7xl mx-auto px-4 py-4 space-y-2"
          >
            <Link
              href="/"
              className={cn(navLinkBase, scrolled ? navLinkDark : 'text-light-200 hover:text-white')}
              onClick={() => setMobileMenuOpen(false)}
            >
              {UI_LABELS.nav.home}
            </Link>
            <Link
              href="/services"
              className={cn(navLinkBase, scrolled ? navLinkDark : 'text-light-200 hover:text-white')}
              onClick={() => setMobileMenuOpen(false)}
            >
              {UI_LABELS.nav.services}
            </Link>
            <Link
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block pt-2"
            >
              <Button variant="default" className="w-full">
                {UI_LABELS.buttons.headerCta}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
