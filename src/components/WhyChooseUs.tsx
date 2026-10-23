import { Scissors, TrendingUp, Heart, Eye } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const benefits = [
  {
    title: 'Skilled Craftsmanship',
    description: 'Every cut is approached with precision and care.',
    icon: Scissors,
  },
  {
    title: 'Modern Styles',
    description: 'From classic cuts to contemporary fades, find the style that suits you.',
    icon: TrendingUp,
  },
  {
    title: 'Welcoming Atmosphere',
    description: 'Enjoy a comfortable environment and friendly service.',
    icon: Heart,
  },
  {
    title: 'Attention to Detail',
    description: 'Sharp lines, clean finishes, and a focus on quality.',
    icon: Eye,
  },
];

export default function WhyChooseUs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="reveal mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Why Choose Us
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="reveal font-display text-4xl font-bold text-cream sm:text-5xl">
            The <span className="text-gold-gradient">difference</span> is in the details
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group rounded-2xl border border-white/8 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-7 text-center transition-all duration-500 hover:border-gold/40 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-black/50 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-black">
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
