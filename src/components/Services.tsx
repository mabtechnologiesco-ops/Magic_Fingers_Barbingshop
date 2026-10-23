import { business, services } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';
import { Info } from 'lucide-react';

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="relative bg-matte py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="reveal mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Our Services
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="reveal font-display text-4xl font-bold text-cream sm:text-5xl">
            Precision, style, and quality <span className="text-gold-gradient">in every cut.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-xl hover:shadow-black/40"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {/* Corner accent */}
              <span className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-y-[-50%] translate-x-[-30%] rounded-full bg-gold/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold/10" />

              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/25 bg-black/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-black">
                  <service.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-3xl font-bold text-gold-gradient">
                  {service.price}
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-xl font-semibold text-cream">
                {service.name}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>

              {/* Bottom line */}
              <span className="relative mt-6 block h-px w-full bg-gradient-to-r from-gold/30 to-transparent" />
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="reveal mx-auto mt-14 flex max-w-2xl items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-5 text-sm text-zinc-400">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <p>
            We do all kinds and types of hairstyles. Please contact us for
            details about our services and prices — the prices shown may differ
            from current {business.name} pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
