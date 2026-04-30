/*
 * /travel — 旅行者向けLP
 * Design: 夜桜の間 — 英語メイン
 * 訴求: Hilot専門・ヒロット施術・プライベート個室
 * CTA: Square（メイン）× LINE（サブ）× 上中下3箇所
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

// Round 2: Square widget URLをJP版と統一
const SQUARE_TRAVEL_URL = "https://app.squareup.com/appointments/buyer/widget/ztpq06tczlisjz/LHKH7J4ZZ160Y";
const LINE_URL = "{{LINE_URL_TBD}}";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090369358/SvhX77X4H5HqRSLKCsXQQT/hilot-fv-new-Aq2zeCx2FgSffDqQcZzBs2.webp";
const MENU_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090369358/SvhX77X4H5HqRSLKCsXQQT/menu-bg-c69VwCk2UsoNzVnr7L95ma.webp";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// CTA案B: Travel版 = Square主・LINE副
function CTAButton({ href, children, sub }: { href: string; children: React.ReactNode; sub?: string }) {
  return (
    <a
      href={href}
      className="zen-shimmer inline-block w-full max-w-sm bg-[#D4A853] text-[#0D1220] font-bold text-center py-4 px-8 rounded-sm tracking-wide hover:bg-[#E5BC6A] transition-colors duration-300 shadow-lg shadow-[#D4A853]/20"
      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
    >
      {children}
      {sub && <span className="block text-xs font-normal mt-0.5 opacity-70">{sub}</span>}
    </a>
  );
}

function LineSubButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 w-full max-w-sm border border-[#06C755]/50 text-[#06C755] text-sm font-medium py-3 px-6 rounded-sm hover:bg-[#06C755]/10 transition-colors duration-300"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>
      Questions? Contact via LINE
    </a>
  );
}

// Round 2: WHY_USから Luggage storage・Carbonated scalp spray・Coconut-oil foot care を削除
// Round 2: "no oil on head" 誤記を修正
// Round 2: healing → relaxation / restore → unwind
const WHY_US = [
  { icon: "🚶", text: "3 min from Kagoshima-Chuo Station" },
  { icon: "🚪", text: "Private room (1 guest per slot)" },
  { icon: "🌿", text: "Hilot — traditional Filipino oil ritual. A gentle, full-body relaxation using warm palms and plant oil to ease the body and quiet the mind." },
  { icon: "🗣️", text: "English support available" },
  { icon: "👩‍⚕️", text: "Therapist with 10 years of practice in Manila" },
];

// ★ Travel visitor test price (1,000-yen increments)
const MENUS_EN = [
  {
    name: "Hilot",
    time: "60 min",
    price: "¥13,000",
    highlight: false,
    label: "",
    desc: "Traditional Filipino Hilot oil ritual. Warm palms and plant oil to ease the body and quiet the mind. Ideal for travel fatigue and deep relaxation. (test price for travel visitors)",
  },
  {
    name: "Hilot",
    time: "90 min",
    price: "¥18,000",
    highlight: true,
    label: "★ Recommended",
    desc: "Full-body Hilot session — the most popular choice for travelers. Deeply unwinding, with English support throughout. (test price for travel visitors)",
  },
  {
    name: "Hilot",
    time: "120 min",
    price: "¥25,000",
    highlight: false,
    label: "",
    desc: "The ultimate Hilot experience. Ideal for those who want to fully rest after a long journey. (test price for travel visitors)",
  },
];

const COMBO_MENUS_EN = [
  {
    name: "Hilot & Head Spa Ritual",
    time: "90 min",
    price: "¥20,000",
    highlight: false,
    label: "Combo",
    desc: "Hilot 60 min + Dry Head Spa 30 min. Body and mind in one session. (test price for travel visitors)",
  },
  {
    name: "Hilot & Head Spa Ritual",
    time: "120 min",
    price: "¥25,000",
    highlight: false,
    label: "Combo",
    desc: "Hilot 90 min + Dry Head Spa 30 min. The most complete full-body and scalp experience. (test price for travel visitors)",
  },
];

const OPTION_EN = { name: "Banana Leaf Footment", price: "+¥3,000", desc: "Traditional Filipino banana leaf foot wrap. Available with Hilot and Combo courses. (test price for travel visitors)" };

const FAQS_EN = [
  { q: "Do you speak English?", a: "Yes, English support is available." },
  { q: "Do I need a reservation?", a: "Reservation is recommended. Walk-ins may not be available." },
  { q: "What payment methods are available?", a: "Cash, credit card, and Square QR payment are accepted. Some mobile payments and transportation IC cards are not available." },
  { q: "What if I'm late?", a: "The session time may be shortened. Please arrive 5 minutes early." },
  { q: "How do I get directions after booking?", a: "After your booking is confirmed, we will send you photo-based directions (station → entrance → 2F → Room 203) via LINE or Square confirmation email." },
];

const DIRECTIONS = [
  { step: "1", title: "Exit Kagoshima-Chuo Station", desc: "Take the central exit toward the Shinkansen side." },
  { step: "2", title: "Find Take Station Building", desc: "Walk straight ~3 minutes. Look for the building entrance." },
  { step: "3", title: "Go up to 2F", desc: "Take the stairs or elevator to the 2nd floor." },
  { step: "4", title: "Room 203 — yoru+禅", desc: "Turn right at the top of the stairs. Room 203 is on your left." },
];

export default function TravelPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Hilot Relaxation Studio | yoru+禅 — Authentic Filipino Hilot in Kagoshima";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Authentic Filipino Hilot oil ritual in a wa-modern private room. 3 min from Kagoshima-Chuo Station. Therapist with 10 years of practice in Manila. Booking via Square / LINE.');
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2E] text-[#EDE8DC]">
      {/* Back link */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/go">
          <span className="text-[#D4A853]/60 text-xs hover:text-[#D4A853] transition-colors flex items-center gap-1">
            ← Back
          </span>
        </Link>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2E] via-[#1A1F2E]/55 to-[#1A1F2E]/15" />

        <div
          className="relative z-10 container pb-16 pt-24"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Brand */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#D4A853]" />
            <span className="text-[#D4A853] text-xs tracking-[0.3em] uppercase font-light">
              yoru+禅 / Kagoshima
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {[
              "3 min from Kagoshima-Chuo",
              "Private Room",
              "English support",
              "10 years Manila experience",
            ].map((b) => (
              <span key={b} className="text-xs text-[#D4A853] border border-[#D4A853]/40 px-3 py-1 rounded-full bg-[#D4A853]/10">
                {b}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-3xl md:text-5xl font-bold text-[#EDE8DC] leading-snug mb-3 max-w-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hilot Relaxation Studio<br />
            <span className="text-[#D4A853]">near Kagoshima-Chuo</span>
          </h1>

          {/* Sub */}
          <p className="text-[#EDE8DC]/75 text-base md:text-lg leading-relaxed max-w-md mb-8">
            Authentic Filipino Hilot oil ritual · Private room · One guest per slot · English available.
          </p>

          {/* CTA — Top (案B: Square主・LINE副) */}
          <div className="flex flex-col gap-3 max-w-sm">
            <CTAButton href={SQUARE_TRAVEL_URL} sub="Hilot 90 min — ¥18,000">
              Book Now
            </CTAButton>
            <LineSubButton href={LINE_URL} />
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section
        className="relative bg-[#242320] py-16"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-3rem",
          paddingTop: "5rem",
        }}
      >
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why yoru+禅?
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-4">
            {WHY_US.map((w, i) => (
              <AnimatedSection key={i} delay={i * 90}>
                <div className="flex items-start gap-4 p-4 border border-[#D4A853]/20 rounded-sm bg-[#1A1F2E]/50">
                  <span className="text-2xl mt-0.5">{w.icon}</span>
                  <p className="text-[#EDE8DC]/85 text-base leading-relaxed">{w.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url(${MENU_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A1F2E]/85" />
        <div className="relative z-10 container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Menu
              </h2>
            </div>
          </AnimatedSection>

          {/* Test price notice */}
          <AnimatedSection>
            <p className="text-[#D4A853]/60 text-xs mb-6 border border-[#D4A853]/20 rounded-sm px-4 py-2 bg-[#D4A853]/5">
              ★ Travel visitor test price — prices shown are for international visitors.
            </p>
          </AnimatedSection>

          {/* Hilot main menus */}
          <div className="grid gap-5 mb-6">
            {MENUS_EN.map((m, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className={`relative p-5 rounded-sm border transition-all ${
                    m.highlight
                      ? "border-[#D4A853] bg-[#D4A853]/10"
                      : "border-[#EDE8DC]/15 bg-[#EDE8DC]/5"
                  }`}
                >
                  {m.highlight && (
                    <span className="absolute -top-3 left-4 bg-[#D4A853] text-[#0D1220] text-xs font-bold px-3 py-0.5 rounded-full">
                      {m.label}
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div
                        className="text-[#EDE8DC] text-base font-medium mb-0.5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {m.name}
                      </div>
                      <div className="text-[#EDE8DC]/50 text-sm">{m.time}</div>
                    </div>
                    <span className="text-[#D4A853] text-xl font-bold flex-shrink-0">{m.price}</span>
                  </div>
                  <p className="text-[#EDE8DC]/60 text-sm leading-relaxed border-t border-[#EDE8DC]/10 pt-3">
                    {m.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Combo menus */}
          <AnimatedSection>
            <p className="text-[#D4A853]/70 text-xs tracking-widest uppercase mb-3">Combo Courses</p>
          </AnimatedSection>
          <div className="grid gap-4 mb-6">
            {COMBO_MENUS_EN.map((m, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="relative p-4 rounded-sm border border-[#D4A853]/30 bg-[#D4A853]/5">
                  <span className="absolute -top-2.5 left-3 bg-[#1A1F2E] text-[#D4A853] text-xs px-2 border border-[#D4A853]/40 rounded-full">{m.label}</span>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="text-[#EDE8DC] text-sm font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{m.name}</div>
                      <div className="text-[#EDE8DC]/50 text-xs">{m.time}</div>
                    </div>
                    <span className="text-[#D4A853] text-lg font-bold flex-shrink-0">{m.price}</span>
                  </div>
                  <p className="text-[#EDE8DC]/55 text-xs leading-relaxed border-t border-[#EDE8DC]/10 pt-2">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Option */}
          <AnimatedSection>
            <div className="p-4 border border-dashed border-[#D4A853]/30 rounded-sm bg-[#D4A853]/5 mb-8">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[#D4A853] text-xs tracking-widest uppercase mb-1">Option</p>
                  <p className="text-[#EDE8DC] text-sm font-medium">{OPTION_EN.name}</p>
                  <p className="text-[#EDE8DC]/55 text-xs mt-1 leading-relaxed">{OPTION_EN.desc}</p>
                </div>
                <span className="text-[#D4A853] font-bold text-base flex-shrink-0">{OPTION_EN.price}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA — Middle (案B: Square主・LINE副) */}
          <AnimatedSection>
            <div className="flex flex-col items-center gap-3">
              <CTAButton href={SQUARE_TRAVEL_URL} sub="Hilot 90 min — ¥18,000">
                Book Now
              </CTAButton>
              <LineSubButton href={LINE_URL} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== HOW TO GET HERE ===== */}
      <section
        className="relative bg-[#242320] py-16"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-3rem",
          paddingTop: "5rem",
        }}
      >
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How to Get Here
              </h2>
            </div>
            <p className="text-[#EDE8DC]/50 text-sm mb-8">
              Please arrive 5 minutes early. Late arrival may shorten the session.
            </p>
          </AnimatedSection>

          <div className="grid gap-4">
            {DIRECTIONS.map((d, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4A853] flex items-center justify-center text-[#D4A853] text-sm font-bold">
                    {d.step}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[#EDE8DC] font-medium text-sm mb-0.5">{d.title}</p>
                    <p className="text-[#EDE8DC]/55 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Direction photos note (開発者メッセージを削除・適切なメッセージに置換) */}
          <AnimatedSection delay={400}>
            <div className="mt-8 p-5 border border-[#D4A853]/20 rounded-sm bg-[#1A1F2E]/30 text-center">
              <p className="text-[#EDE8DC]/60 text-sm">
                📸 After your booking is confirmed, we will send you photo-based directions (station → entrance → 2F → Room 203) via LINE or Square confirmation email.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[#1A1F2E] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FAQ
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-3">
            {FAQS_EN.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-[#EDE8DC]/10 rounded-sm overflow-hidden">
                  <button
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-[#EDE8DC]/5 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[#EDE8DC]/90 text-sm font-medium">
                      Q: {faq.q}
                    </span>
                    <span className="text-[#D4A853] text-lg flex-shrink-0">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-[#EDE8DC]/65 text-sm leading-relaxed border-t border-[#EDE8DC]/10 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="relative py-20 text-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#1A1F2E]/90" />
        <div className="relative z-10 container">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#EDE8DC] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let your body unwind.<br />
              <span className="text-[#D4A853]">Traditional Hilot Oil Ritual.</span>
            </h2>
            <p className="text-[#EDE8DC]/55 text-sm mb-8">
              Private room · English OK · Near Kagoshima-Chuo Station
            </p>
            {/* CTA案B: Square主・LINE副 */}
            <div className="flex flex-col items-center gap-3">
              <CTAButton href={SQUARE_TRAVEL_URL} sub="Hilot 90 min — ¥18,000">
                Book Now
              </CTAButton>
              <LineSubButton href={LINE_URL} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1220] py-8 text-center">
        <p
          className="text-[#D4A853] text-lg font-bold mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hilot Relaxation Studio yoru+禅
        </p>
        <p className="text-[#EDE8DC]/40 text-xs">
          Take Station Building 2F 203 / 10:00–20:00
        </p>
        <div className="mt-4">
          <Link href="/go">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">
              ← Language selection
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
