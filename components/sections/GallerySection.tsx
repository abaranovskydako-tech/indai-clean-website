import Image from 'next/image';
import { GALLERY_IMAGES, SECTION_HEADINGS } from '@/lib/constants';

/**
 * GallerySection component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/sections/GallerySection.tsx
 * Per MASTER_SPEC §10.3 #7: Work photos
 */
export default function GallerySection() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="container mx-auto px-4 py-8">
      <h2 id="gallery-heading" className="text-3xl font-semibold leading-snug text-dark-500 mb-6">
        {SECTION_HEADINGS.gallery}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((image) => (
          <div key={image.id} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto rounded object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

