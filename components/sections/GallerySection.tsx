'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { GALLERY_CARDS, SECTION_HEADINGS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import { Play, X } from 'lucide-react';

/**
 * GallerySection — 8 case cards with poster images and video lightbox
 *
 * Per MEDIA_PLACEMENT_PLAN v1.0
 * Per MASTER_SPEC §10.3 #7: Work photos / gallery
 *
 * Each card shows a poster frame; clicking opens a video lightbox.
 */
export default function GallerySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveVideo(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!activeVideo) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [activeVideo, closeLightbox]);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2
            id="gallery-heading"
            className="text-3xl font-semibold leading-snug text-dark-500 md:text-4xl"
          >
            {SECTION_HEADINGS.gallery}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_CARDS.map((card) => (
            <div
              key={card.id}
              className={cn(
                'group relative cursor-pointer overflow-hidden rounded-xl',
                'transition-shadow duration-300 hover:shadow-xl',
              )}
              onClick={() => card.video && setActiveVideo(card.video)}
              role={card.video ? 'button' : undefined}
              tabIndex={card.video ? 0 : undefined}
              aria-label={card.video ? `Смотреть видео: ${card.title}` : card.title}
              onKeyDown={(e) => {
                if (card.video && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setActiveVideo(card.video);
                }
              }}
            >
              {/* Poster image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={card.poster}
                  alt={card.title}
                  fill
                  priority={card.id === 'case-floor-heavy'}
                  loading={card.id === 'case-floor-heavy' ? undefined : 'lazy'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-500/0 transition-colors duration-300 group-hover:bg-dark-500/60" />

                {/* Play button (only if video exists) */}
                {card.video && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/90 shadow-lg">
                      <Play className="h-7 w-7 text-dark-500" aria-hidden="true" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card info */}
              <div className="bg-light-200 px-4 py-3">
                <Badge variant="accent" className="mb-2 text-xs">
                  {card.method}
                </Badge>
                <h3 className="text-sm font-semibold leading-tight text-dark-500">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-500/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Видео кейса"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Закрыть видео"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Video container */}
          <div
            className="w-full max-w-4xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="w-full"
              key={activeVideo}
            >
              <source src={activeVideo} />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
