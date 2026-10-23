import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

const spanClass: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
};

export default function Gallery() {
  const ref = useReveal<HTMLElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <section id="gallery" ref={ref} className="relative bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="reveal mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Gallery
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="reveal font-display text-4xl font-bold text-cream sm:text-5xl">
            The Art of <span className="text-gold-gradient">the Cut</span>
          </h2>
          <p className="reveal mt-4 text-zinc-400">
            Every detail matters. Every cut makes a statement.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className={`reveal group relative overflow-hidden rounded-xl border border-white/5 ${spanClass[img.span] ?? ''}`}
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              aria-label={`View ${img.label} in full size`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Hover zoom icon */}
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/90 text-black">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold"
            aria-label="Close viewer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="mx-auto max-h-[78vh] rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="mt-1 text-sm text-zinc-400">
                {lightbox + 1} / {galleryImages.length}
              </p>
            </figcaption>
          </figure>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
