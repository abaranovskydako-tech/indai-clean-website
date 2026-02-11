import { GALLERY_IMAGES, SECTION_HEADINGS, UI_LABELS } from '@/lib/constants';

/**
 * GallerySection component
 *
 * Per Component Library Canon v1.0.0
 * Location: components/sections/GallerySection.tsx
 * Per MASTER_SPEC §10.3 #7: Work photos
 *
 * Gradient placeholders instead of images until real photos are available.
 */
export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="gallery-heading"
            className="text-3xl font-semibold leading-snug text-dark-500 md:text-4xl"
          >
            {SECTION_HEADINGS.gallery}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent-500" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="flex aspect-[4/3] items-center justify-center rounded-lg bg-gradient-to-br from-dark-500/60 via-ocean-500/30 to-primary-500/20"
            >
              <div className="text-center">
                <span className="block text-sm font-semibold text-white/60">
                  {image.alt}
                </span>
                <span className="mt-1 block text-xs text-white/40">
                  {UI_LABELS.gallery.photoPlaceholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
