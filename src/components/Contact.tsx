import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, Send, Info } from 'lucide-react';
import { business } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const waNumber = business.whatsapp.replace(/\D/g, '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello ${business.shortName}! My name is ${form.name || '—'}.%0A%0A${form.message || 'I would like to book an appointment.'}%0A%0APhone: ${form.phone || '—'}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" ref={ref} className="relative bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="reveal mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Contact &amp; Location
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="reveal font-display text-4xl font-bold text-cream sm:text-5xl">
            Get in <span className="text-gold-gradient">touch</span>
          </h2>
          <p className="reveal mt-4 text-zinc-400">
            Visit us, call us, or send a message — we're here to help you look your best.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: info + hours + buttons */}
          <div className="reveal space-y-6">
            {/* Contact cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} label="Phone" value={business.phone} href={`tel:${business.phone.replace(/\s/g, '')}`} />
              <InfoCard icon={MessageCircle} label="WhatsApp" value={`+${waNumber}`} href={`https://wa.me/${waNumber}`} />
              <InfoCard icon={Instagram} label="Instagram" value="Magic Fingers" href={business.instagram} />
              <InfoCard icon={Facebook} label="Facebook" value="Magic Fingers" href={business.facebook} />
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Address</p>
                  <p className="mt-1 text-sm text-zinc-400">{business.address}</p>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-300">Opening Hours</p>
              </div>
              <ul className="divide-y divide-white/5">
                {business.hours.map((h) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-2.5 text-sm ${
                      h.day === today ? 'text-gold' : 'text-zinc-400'
                    }`}
                  >
                    <span className="font-medium">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e6c35c]"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/20"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <MapPin className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/8 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-7 sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-cream">Send us a message</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Fill in the form and we'll open WhatsApp with your message ready to send.
              </p>

              <div className="mt-6 space-y-5">
                <Field label="Your Name">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-zinc-600 outline-none transition-colors focus:border-gold"
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+232 00 000 000"
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-zinc-600 outline-none transition-colors focus:border-gold"
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="I'd like to book an appointment for..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-cream placeholder:text-zinc-600 outline-none transition-colors focus:border-gold"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e6c35c] hover:shadow-lg hover:shadow-[#c9a227]/25"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                Send via WhatsApp
              </button>

              <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] p-4 text-xs text-zinc-500">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p>
                  This form does not store or send messages directly. It opens
                  WhatsApp with your details prefilled so you can send them to
                  us in one tap.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="reveal mt-10 overflow-hidden rounded-2xl border border-white/8">
          <iframe
            title={`Map to ${business.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0 sm:h-[420px]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.04]"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/25 bg-black/40 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
        <p className="mt-0.5 truncate text-sm font-medium text-cream">{value}</p>
      </div>
    </a>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400">
        {label}
      </span>
      {children}
    </label>
  );
}
