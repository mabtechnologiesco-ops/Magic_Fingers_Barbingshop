import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '../../images/Logo 1.jpeg';
import { business } from '@/data/business';
import { useScrolled } from '@/hooks/useReveal';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services & Prices', href: '#services' },
  { label: 'Haircut Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-matte/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo + name */}
        <a href="#home" className="flex items-center gap-3" aria-label={business.name}>
          <img
            src={logoImage}
            alt={business.name}
            className="h-8 sm:h-10 w-auto object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide text-cream">
              {business.shortName.toUpperCase()}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              Barbershop
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-zinc-300 transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e6c35c] hover:shadow-lg hover:shadow-[#c9a227]/30 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-cream transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-matte/98 backdrop-blur-md transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}


