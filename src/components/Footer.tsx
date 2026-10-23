import { Phone, MapPin, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';
import logoImage from '../../images/MGF_logo_transparent 2.png';
import { business } from '@/data/business';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services & Prices', href: '#services' },
  { label: 'Haircut Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const waNumber = business.whatsapp.replace(/\D/g, '');

  return (
    <footer className="relative border-t border-white/8 bg-matte pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt={business.name}
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold tracking-wide text-cream">
                  {business.shortName.toUpperCase()}
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                  Barbershop
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              {business.description}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={business.instagram} label="Instagram" icon={Instagram} />
              <SocialLink href={business.facebook} label="Facebook" icon={Facebook} />
              <SocialLink href={`https://wa.me/${waNumber}`} label="WhatsApp" icon={MessageCircle} />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{business.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Opening Hours
            </h4>
            <ul className="mt-5 space-y-3">
              {business.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3 text-sm text-zinc-400">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="font-medium text-zinc-300">{h.day}</span>
                    <br />
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Crafted by{' '}
            <a
              href="https://mab-technologies-new.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-400 transition-colors hover:text-gold"
            >
              MAB TECHNOLOGIES SL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Instagram;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-400 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-black"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}


