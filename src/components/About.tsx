import { highlights } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';
import aboutImage from '../../images/Magic 15.jpeg';

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-matte py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/8">
              <img
                src={aboutImage}
                alt="Contemporary barbershop interior with stylish chairs and mirrors"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 rounded-xl border border-gold/30 bg-matte/95 p-5 shadow-xl backdrop-blur sm:right-6">
              <p className="font-display text-3xl font-bold text-gold-gradient">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">
                Attention to every detail
              </p>
            </div>

            {/* Decorative frame */}
            <div className="absolute -left-3 -top-3 -z-10 h-32 w-32 rounded-tl-2xl border-l-2 border-t-2 border-gold/30" />
          </div>

          {/* Text side */}
          <div>
            <p className="reveal mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" />
              About Us
            </p>
            <h2 className="reveal font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
              More than just <span className="text-gold-gradient">a barbershop.</span>
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-zinc-300">
              We believe that a great haircut is more than a service. It's an
              experience. Our goal is to help every customer look sharp, feel
              confident, and leave with a style that reflects their personality.
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="reveal flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/25 bg-black/40 text-gold">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-cream">
                      {h.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-zinc-400">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
