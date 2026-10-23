import { useState, type FormEvent } from 'react';
import { MessageCircle, Sparkles, X, Send } from 'lucide-react';
import { business, services } from '@/data/business';

type Msg = { from: 'bot' | 'user'; text: string };

const WA_URL = `https://wa.me/${business.whatsapp.replace(/\D/g, '')}`;

function reply(input: string): string {
  const q = input.toLowerCase().trim();
  if (!q) return 'Please type a question and I’ll help you out.';

  if (/^(hi|hello|hey|good (morning|afternoon|evening)|howdy)\b/.test(q)) {
    return `Hello! 👋 Welcome to ${business.name}. I can help with services & prices, opening hours, location, contact info, and booking. What would you like to know?`;
  }

  if (/hour|open|close|time|schedule/.test(q)) {
    const lines = business.hours.map((h) => `${h.day}: ${h.time}`).join('\n');
    return `Here are our opening hours:\n${lines}`;
  }

  if (/location|address|where|direction|map/.test(q)) {
    return `We're located at ${business.address}. You can find us on the map in the Contact section. 📍`;
  }

  if (/phone|call|contact|number|email/.test(q)) {
    return `You can reach us at ${business.phone} or email ${business.email}. WhatsApp: +${business.whatsapp}.`;
  }

  if (/whatsapp|wa\b/.test(q)) {
    return `Chat with us on WhatsApp: ${WA_URL}`;
  }

  if (/book|appointment|reserve|schedule a/.test(q)) {
    return `To book an appointment, call ${business.phone}, message us on WhatsApp (${WA_URL}), or use the contact form on the website. We'll confirm your slot right away.`;
  }

  if (/service|price|cost|how much|rate|list|menu/.test(q)) {
    const list = services.map((s) => `• ${s.name} — ${s.price}`).join('\n');
    return `Here are our services & prices (in ${business.currency}):\n${list}\n\nAsk about any specific service for details.`;
  }

  const matched = services.find((s) => q.includes(s.name.toLowerCase()));
  if (matched) {
    return `${matched.name}: ${matched.description} Price: ${matched.price}.`;
  }

  if (/gallery|photo|picture|style|haircut|cut/.test(q)) {
    return `Check out our Haircut Gallery section to see recent work — fades, tapers, braids, waves, curies and more. We do all kinds of hairstyles!`;
  }

  if (/about|who|description|info/.test(q)) {
    return `${business.description} Tagline: "${business.tagline}".`;
  }

  if (/offer|discount|promo|deal|special/.test(q)) {
    return `We regularly run special offers — check the "Special Offers" section on the homepage, or message us on WhatsApp for current deals.`;
  }

  if (/thank|thanks|thx/.test(q)) {
    return `You're welcome! 😊 Let me know if you need anything else.`;
  }

  return `I'm not sure about that. Try asking about: services & prices, opening hours, location, contact info, booking, gallery, or special offers.`;
}

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'bot', text: `Hi! I'm the ${business.shortName} assistant. Ask me about services, prices, hours, location, or booking.` },
  ]);

  const send = (e?: FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    const botText = reply(text);
    setMessages((m) => [...m, { from: 'user', text }, { from: 'bot', text: botText }]);
    setInput('');
  };

  const quick = (q: string) => {
    const botText = reply(q);
    setMessages((m) => [...m, { from: 'user', text: q }, { from: 'bot', text: botText }]);
  };

  return (
    <>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
        {chatOpen && (
          <div className="flex w-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-matte shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between bg-gold px-4 py-3 text-black">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-display text-sm font-semibold">Magic Fingers Assistant</span>
              </div>
              <button onClick={() => setChatOpen(false)} aria-label="Close chat" className="rounded-md p-1 hover:bg-black/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.from === 'user' ? 'bg-gold text-black' : 'border border-white/8 bg-white/[0.03] text-cream'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/8 px-4 py-2">
              {['Services & Prices', 'Opening Hours', 'Location', 'Booking'].map((q) => (
                <button
                  key={q}
                  onClick={() => quick(q)}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={send} className="flex items-center gap-2 border-t border-white/8 px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-cream placeholder:text-zinc-600 outline-none focus:border-gold"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-black transition-colors hover:bg-[#e6c35c]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Open assistant"
          className="grid h-14 w-14 place-items-center rounded-full bg-gold text-black shadow-lg shadow-[#c9a227]/30 transition-transform duration-300 hover:scale-110"
        >
          <Sparkles className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}
