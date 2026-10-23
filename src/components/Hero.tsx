import { Scissors, Wind, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import heroImage from '../../images/Hero Image.jpeg';

const highlights = [
  { label: 'Professional Haircuts', icon: Scissors },
  { label: 'Fresh Fades', icon: Wind },
  { label: 'Premium Grooming', icon: Sparkles },
];

export default function Hero() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Magic Fingers Barbing Shop"
          className="h-full w-full object-contain object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="reveal mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Premium Barbershop
          </p>

          <h1 className="reveal font-display text-5xl font-bold leading-[1.05] text-cream sm:text-6xl lg:text-7xl xl:text-8xl">
            LOOK SHARP.
            <br />
            <span className="text-gold-gradient">FEEL CONFIDENT.</span>
          </h1>

          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-zinc-300">
            More than a haircut. It's your style, your confidence, and your
            statement. Experience professional grooming with precision and
            attention to detail.
          </p>

          {/* Buttons */}
          <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e6c35c] hover:shadow-xl hover:shadow-[#c9a227]/25"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>

          {/* Highlights */}
          <div className="reveal mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2.5">
                <h.icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium uppercase tracking-wider text-zinc-300">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-gold" />
        </span>
      </div>
    </section>
  );
}
