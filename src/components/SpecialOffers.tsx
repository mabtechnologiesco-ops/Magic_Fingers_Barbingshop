import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function SpecialOffers() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-matte py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-gold/20">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Barber using electric clipper for a precise haircut"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Special Offers
            </p>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
              Your next fresh cut <span className="text-gold-gradient">awaits.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-zinc-300">
              Discover your style and experience quality grooming.
            </p>
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e6c35c] hover:shadow-xl hover:shadow-[#c9a227]/25"
            >
              View Our Prices
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
