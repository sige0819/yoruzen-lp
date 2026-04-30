/**
 * /jp — 日本人向けLP
 * Design: 夜桜の間 — 深藍背景、桜金アクセント、斜めセクション分割
 * 訴求: ヒロット専門 yoru+禅 — フィリピン伝統オイルリラクゼーション
 * CTA: SQUARE_DOMESTIC_URL × 上中下3箇所 + LINE_URL × 3箇所
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const SQUARE_DOMESTIC_URL = "https://app.squareup.com/appointments/buyer/widget/ztpq06tczlisjz/LHKH7J4ZZ160Y";
const LINE_URL = "{{LINE_URL_TBD}}";
const HERO_BG = "/manus-storage/hilot-hero_476bd747.png";
const HILOT_ABOUT_IMG = "/manus-storage/hilot-about_9eb490ae.png";
const THERAPIST_IMG = "/manus-storage/hilot-therapist_f5aa5858.png";
const HILOT_MENU_IMG = "/manus-storage/hilot-menu-main_5f825afb.png";
const DRY_MENU_IMG = "/manus-storage/hilot-menu-dry_3c5ef8f5.png";

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

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="zen-shimmer inline-block w-full max-w-sm bg-[#D4A853] text-[#0D1220] font-bold text-center py-4 px-8 rounded-sm tracking-widest hover:bg-[#E5BC6A] transition-colors duration-300 shadow-lg shadow-[#D4A853]/20"
      style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.05rem" }}
    >
      {children}
    </a>
  );
}

function LineButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 w-full max-w-sm py-3.5 px-8 rounded-sm transition-all duration-300"
      style={{
        border: "1px solid rgba(212,168,83,0.45)",
        background: "rgba(212,168,83,0.04)",
        color: "#EDE8DC",
        fontFamily: "'Noto Serif JP', serif",
        fontSize: "0.95rem",
        letterSpacing: "0.1em",
        marginTop: "0.75rem",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,168,83,0.10)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,168,83,0.04)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#06C755", flexShrink: 0 }}>
        <path d="M12 2C6.48 2 2 6.03 2 11c0 3.01 1.55 5.67 3.95 7.38L5 21l2.73-1.36C9.05 20.19 10.49 20.5 12 20.5c5.52 0 10-4.03 10-9S17.52 2 12 2zm1 13H7v-1.5h6V15zm2-3H7v-1.5h8V12zm0-3H7V7.5h8V9z"/>
      </svg>
      LINEで予約・お問い合わせ
    </a>
  );
}

const PAINS = [
  { icon: "🌙", text: "疲れているのに、眠りが浅い・寝つきが悪い" },
  { icon: "💆", text: "首肩・背中のこわばりが抜けない" },
  { icon: "🔥", text: "強い揉みほぐしは苦手・でもちゃんとほぐれたい" },
  { icon: "👁️", text: "眼精疲労・頭が重い感じが続く" },
];

const FEATURES = [
  {
    icon: "🌿",
    title: "マニラで10年の現役経験を持つセラピスト",
    desc: "フィリピン伝統手技ヒロットを、本場マニラで10年実践してきた経験を持つセラピストが施術。",
  },
  {
    icon: "🤲",
    title: "温かい手のひらで深部までほどく",
    desc: "一般的な強い揉みほぐしや指圧ではなく、植物オイルと体温で筋膜と気の流れを整える独自の手技。",
  },
  {
    icon: "🏮",
    title: "和モダンの完全個室",
    desc: "武ステーションビル2F 203の畳個室で、誰にも邪魔されない静かなプライベート空間。",
  },
];

const HILOT_POINTS = [
  { icon: "🤲", title: "温かい手のひら", desc: "オイルと体温で深部までほぐす" },
  { icon: "🌊", title: "気の流れを整える", desc: "強くもまずに、深い弛緩へ導く独自の手技" },
  { icon: "🌏", title: "マニラの伝統", desc: "本場で10年の現役経験を持つセラピストが担当" },
];

const HILOT_MENUS = [
  {
    time: "60分",
    name: "ヒロット",
    price: "¥6,980",
    label: "",
    highlight: false,
    desc: "マニラで10年の現役経験を持つセラピストによる、フィリピン伝統オイルリラクゼーション。温かい手のひらで筋膜と気の流れを整える、深いリラックスへ導く穏やかな手技。",
  },
  {
    time: "90分",
    name: "ヒロット",
    price: "¥9,980",
    label: "人気No.1",
    highlight: true,
    desc: "じっくり時間をかけて全身の疲れをほぐす。深い眠りへの準備に最適な贅沢コース。",
  },
  {
    time: "120分",
    name: "ヒロット",
    price: "¥13,800",
    label: "贅沢コース",
    highlight: false,
    desc: "全身をくまなくケアする最上級コース。特別な日や旅の疲れに。",
  },
];

const COMBO_MENUS = [
  {
    time: "90分",
    name: "Hilot & Head Spa Ritual",
    price: "¥10,980",
    label: "複合コース",
    highlight: false,
    desc: "ヒロット60分 + ドライヘッドスパ30分。身体と頭の疲れを同時にケアする贅沢な複合コース。",
  },
  {
    time: "120分",
    name: "Hilot & Head Spa Ritual",
    price: "¥13,800",
    label: "",
    highlight: false,
    desc: "ヒロット90分 + ドライヘッドスパ30分。全身と頭皮の深いリラックスを一度に。",
  },
];

const OTHER_MENUS = [
  { category: "ドライヘッドスパ", items: [
    { time: "30分", price: "¥3,980", desc: "" },
    { time: "45分", price: "¥4,980", desc: "既存定番・リピーター向けに継続" },
    { time: "60分", price: "¥6,980", desc: "" },
  ], note: "頭にオイル・水を使わないドライ施術。眼精疲労・首肩こり・眠りの浅さに。" },
  { category: "足つぼ", items: [
    { time: "30分", price: "¥3,980", desc: "" },
    { time: "60分", price: "¥6,980", desc: "" },
  ], note: "反射区を丁寧に刺激し、立ち仕事・冷え・疲労にアプローチ。" },
];

const FAQS = [
  { q: "ヒロットとは何ですか？", a: "フィリピンに伝わる伝統的な手技療法です。温かい手のひらと植物オイルを使い、筋膜と気の流れを整えます。一般的な強い揉みほぐしや指圧とは異なり、深いリラックスへ導く穏やかな手技です。" },
  { q: "オイルを使うと髪や服が汚れませんか？", a: "ヒロット用の低残留性植物オイルを使用し、施術後はホットタオルで丁寧に拭き取ります。シャワー設備もご用意しています。終わった後そのままお出かけいただくことも可能です（着替えは推奨）。" },
  { q: "遅刻した場合は？", a: "遅刻分は施術時間が短くなる場合があります。余裕をもってお越しください。" },
  { q: "支払い方法は？", a: "現金、クレジットカード、Square QR決済に対応しています。一部モバイル決済・交通系ICはご利用いただけません。" },
  { q: "荷物預かりはできますか？", a: "営業時間内（10:00–20:00）に荷物をお預かりできます。" },
  { q: "頭にオイルは使いますか？", a: "ドライヘッドスパは頭部にオイル・水を使いません。ヒロットは身体へのオイル施術です。施術後はホットタオルで拭き取ります。" },
  { q: "予約なしで行けますか？", a: "完全予約制となっております。事前のご予約をおすすめします。" },
];

export default function JpPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showOtherMenus, setShowOtherMenus] = useState(false);

  useEffect(() => {
    document.title = "ヒロット専門 yoru+禅｜フィリピン伝統オイルリラクゼーション 鹿児島中央駅徒歩3分";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '鹿児島中央駅から徒歩3分、武ステーションビル2F 203。和モダンの完全個室で受ける、フィリピン伝統オイルリラクゼーション「ヒロット」専門店。マニラで10年の現役経験を持つセラピストが、異国の伝統を和の空間で。60分¥6,980〜。完全予約制。');
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2E] text-[#EDE8DC]">
      {/* Back link */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/go">
          <span className="text-[#D4A853]/60 text-xs hover:text-[#D4A853] transition-colors flex items-center gap-1">
            ← 戻る
          </span>
        </Link>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2E] via-[#1A1F2E]/60 to-[#1A1F2E]/20" />

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
              Hilot / フィリピン伝統オイルリラクゼーション
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["鹿児島中央駅徒歩約3分", "完全予約制", "1枠1名", "ヒロット専門"].map((b) => (
              <span key={b} className="text-xs text-[#D4A853] border border-[#D4A853]/40 px-3 py-1 rounded-full bg-[#D4A853]/10">
                {b}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-3xl md:text-5xl font-bold text-[#EDE8DC] leading-snug mb-4 max-w-lg"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            異国の伝統が、<br />和の空間で深く沁みる。
          </h1>

          {/* Sub */}
          <p className="text-[#EDE8DC]/75 text-base md:text-lg leading-relaxed max-w-md mb-8">
            鹿児島中央駅徒歩3分・完全個室で受ける、<br />
            マニラで10年の現役経験を持つセラピストによる<br />
            フィリピン伝統オイルリラクゼーション「ヒロット」。
          </p>

          {/* CTA — Top */}
          <div className="flex flex-col items-start">
            <CTAButton href={SQUARE_DOMESTIC_URL}>予約する</CTAButton>
            <LineButton href={LINE_URL} />
          </div>
        </div>
      </section>

      {/* ===== PAIN SECTION ===== */}
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
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                こんなお悩みはありませんか？
              </h2>
            </div>
            <div className="grid gap-4">
              {PAINS.map((p, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="flex items-start gap-4 p-4 border border-[#D4A853]/20 rounded-sm bg-[#1A1F2E]/50">
                    <span className="text-2xl mt-0.5">{p.icon}</span>
                    <p className="text-[#EDE8DC]/85 text-base leading-relaxed">{p.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <p className="mt-4 text-[#EDE8DC]/40 text-xs pl-1">
              ※施術は医療行為ではありません。
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-[#1A1F2E] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                ヒロット専門 yoru+禅の3つの特徴
              </h2>
            </div>
            <p className="text-[#EDE8DC]/40 text-xs mb-8 pl-11">フィリピン伝統オイルリラクゼーション</p>
          </AnimatedSection>
          <div className="grid gap-5">
            {FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="relative pl-6 zen-gold-line py-2">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3
                    className="text-[#D4A853] font-medium text-base mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[#EDE8DC]/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HILOT ABOUT ===== */}
      <section
        className="relative bg-[#242320] py-16"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
          marginTop: "-2rem",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                ヒロットとは
              </h2>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={100}>
            <div className="mb-8 rounded-sm overflow-hidden" style={{ maxHeight: "280px" }}>
              <img
                src={HILOT_ABOUT_IMG}
                alt="ヒロット施術イメージ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <p
              className="text-[#EDE8DC]/80 text-base leading-loose mb-8"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              フィリピンに伝わる伝統的な手技療法です。温かい手のひらと植物オイルを使い、筋膜と気の流れを整えます。一般的な強い揉みほぐしや指圧とは異なり、深いリラックスへ導く穏やかな手技です。本場マニラで10年の現役経験を持つセラピストが、その技をそのまま和モダンの個室でお届けします。
            </p>
          </AnimatedSection>

          <div className="grid gap-4">
            {HILOT_POINTS.map((p, i) => (
              <AnimatedSection key={i} delay={200 + i * 100}>
                <div className="flex items-start gap-4 p-4 border border-[#D4A853]/20 rounded-sm bg-[#1A1F2E]/50">
                  <span className="text-2xl mt-0.5">{p.icon}</span>
                  <div>
                    <h3
                      className="text-[#D4A853] font-medium text-sm mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[#EDE8DC]/70 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THERAPIST ===== */}
      <section className="bg-[#1A1F2E] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                セラピスト紹介
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <AnimatedSection delay={100} className="w-full md:w-2/5">
              <div className="rounded-sm overflow-hidden" style={{ maxHeight: "320px" }}>
                <img
                  src={THERAPIST_IMG}
                  alt="セラピスト"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="w-full md:w-3/5">
              <div className="p-5 border border-[#D4A853]/20 rounded-sm bg-[#D4A853]/5 h-full">
                <p
                  className="text-[#D4A853] text-sm font-medium mb-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  ヒロット専門セラピスト
                </p>
                <p
                  className="text-[#EDE8DC] text-lg font-bold mb-3"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  マニラ10年の現役経験
                </p>
                <p className="text-[#EDE8DC]/70 text-sm leading-relaxed">
                  フィリピン・マニラで10年にわたりヒロットを実践してきた経験を持つセラピストが担当します。異国の伝統を、和モダンの静かな個室でそのままお届けします。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ヒロット10年", "完全個室", "日本語対応"].map((tag) => (
                    <span key={tag} className="text-xs text-[#D4A853] border border-[#D4A853]/30 px-2 py-0.5 rounded-full bg-[#D4A853]/8">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url(${HILOT_MENU_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A1F2E]/88" />
        <div className="relative z-10 container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                メニュー
              </h2>
            </div>
            <p className="text-[#D4A853]/70 text-xs mb-8 pl-11 tracking-wider">ヒロット主軸 · 完全個室 · 完全予約制</p>
          </AnimatedSection>

          {/* ヒロット メインコース */}
          <AnimatedSection delay={50}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#D4A853] text-xs tracking-[0.2em] uppercase font-light">Hilot — フィリピン伝統オイルリラクゼーション</span>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 mb-6">
            {HILOT_MENUS.map((m, i) => (
              <AnimatedSection key={i} delay={100 + i * 100}>
                <div
                  className={`relative p-5 rounded-sm border transition-all ${
                    m.highlight
                      ? "border-[#D4A853] bg-[#D4A853]/10"
                      : "border-[#EDE8DC]/15 bg-[#EDE8DC]/5"
                  }`}
                >
                  {m.label && (
                    <span
                      className={`absolute -top-3 left-4 text-xs font-bold px-3 py-0.5 rounded-full ${
                        m.highlight
                          ? "bg-[#D4A853] text-[#0D1220]"
                          : "bg-[#EDE8DC]/20 text-[#EDE8DC]"
                      }`}
                    >
                      {m.label}
                    </span>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span
                        className="text-[#EDE8DC] text-base font-medium block"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                      >
                        {m.name}
                      </span>
                      <span className="text-[#EDE8DC]/50 text-sm">{m.time}</span>
                    </div>
                    <span className="text-[#D4A853] text-xl font-bold">
                      {m.price}
                    </span>
                  </div>
                  {m.desc && (
                    <p className="text-[#EDE8DC]/55 text-xs leading-relaxed border-t border-[#EDE8DC]/10 pt-2">
                      {m.desc}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* コンビコース */}
          <AnimatedSection delay={400}>
            <div className="flex items-center gap-2 mb-4 mt-8">
              <span className="text-[#D4A853] text-xs tracking-[0.2em] uppercase font-light">Hilot & Head Spa Ritual — 複合コース</span>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 mb-6">
            {COMBO_MENUS.map((m, i) => (
              <AnimatedSection key={i} delay={450 + i * 100}>
                <div className="relative p-5 rounded-sm border border-[#EDE8DC]/15 bg-[#EDE8DC]/5">
                  {m.label && (
                    <span className="absolute -top-3 left-4 text-xs font-bold px-3 py-0.5 rounded-full bg-[#EDE8DC]/20 text-[#EDE8DC]">
                      {m.label}
                    </span>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span
                        className="text-[#EDE8DC] text-base font-medium block"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                      >
                        {m.name}
                      </span>
                      <span className="text-[#EDE8DC]/50 text-sm">{m.time}</span>
                    </div>
                    <span className="text-[#D4A853] text-xl font-bold">
                      {m.price}
                    </span>
                  </div>
                  {m.desc && (
                    <p className="text-[#EDE8DC]/55 text-xs leading-relaxed border-t border-[#EDE8DC]/10 pt-2">
                      {m.desc}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* オプション */}
          <AnimatedSection delay={650}>
            <div
              className="mb-6 px-5 py-3 rounded-sm"
              style={{ border: "1px solid rgba(212,168,83,0.25)", background: "rgba(212,168,83,0.04)" }}
            >
              <p className="text-[#D4A853] text-xs font-medium mb-1">オプション</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#EDE8DC]/80 text-sm">バナナリーフフットメント</p>
                  <p className="text-[#EDE8DC]/45 text-xs">フィリピン伝統のバナナの葉で足を包む特別オプション（ヒロット・コンビコースのみ）</p>
                </div>
                <span className="text-[#D4A853] font-bold text-sm ml-4">+¥1,980</span>
              </div>
            </div>
          </AnimatedSection>

          {/* 他のメニュー（折りたたみ） */}
          <AnimatedSection delay={700}>
            <button
              onClick={() => setShowOtherMenus(!showOtherMenus)}
              className="w-full text-left py-3 px-4 border border-[#EDE8DC]/10 rounded-sm flex items-center justify-between hover:border-[#D4A853]/30 transition-colors mb-4"
            >
              <span className="text-[#EDE8DC]/50 text-sm">他のメニューも見る（ドライヘッドスパ・足つぼ）</span>
              <span className="text-[#D4A853]">{showOtherMenus ? "−" : "+"}</span>
            </button>
          </AnimatedSection>

          {showOtherMenus && (
            <div className="mb-6">
              <div
                className="mb-4 px-4 py-3 rounded-sm"
                style={{ border: "1px solid rgba(212,168,83,0.15)", background: "rgba(212,168,83,0.03)" }}
              >
                <img
                  src={DRY_MENU_IMG}
                  alt="ドライヘッドスパ"
                  className="w-full rounded-sm mb-4 object-cover"
                  style={{ maxHeight: "160px" }}
                  loading="lazy"
                />
                {OTHER_MENUS.map((cat, ci) => (
                  <div key={ci} className={ci > 0 ? "mt-5" : ""}>
                    <p
                      className="text-[#D4A853] text-xs font-medium mb-2"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {cat.category}
                    </p>
                    <p className="text-[#EDE8DC]/50 text-xs mb-3 leading-relaxed">{cat.note}</p>
                    <div className="grid gap-2">
                      {cat.items.map((item, ii) => (
                        <div key={ii} className="flex items-center justify-between py-2 border-b border-[#EDE8DC]/8">
                          <span className="text-[#EDE8DC]/70 text-sm">{item.time}</span>
                          <span className="text-[#D4A853] font-bold text-sm">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 初回特典バナー — Middle */}
          <AnimatedSection delay={750}>
            <div
              className="mb-5 px-5 py-3 rounded-sm text-center"
              style={{
                border: "1px solid rgba(212, 168, 83, 0.35)",
                background: "rgba(212, 168, 83, 0.06)",
              }}
            >
              <p
                className="text-[#D4A853] text-sm"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                ✦ 初回の方限定
              </p>
              <p className="text-[#EDE8DC]/80 text-sm mt-0.5">
                足元ほぐし（+15分）を無料でお試しいただけます
              </p>
              <p className="text-[#EDE8DC]/45 text-xs mt-1">ご予約時にお申し付けください</p>
            </div>
          </AnimatedSection>

          {/* CTA — Middle */}
          <AnimatedSection>
            <div className="flex flex-col items-center">
              <CTAButton href={SQUARE_DOMESTIC_URL}>予約する</CTAButton>
              <LineButton href={LINE_URL} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="relative bg-[#1A1F2E] py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                お客様の声
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-4">
            {[
              { text: "頭が軽くなって驚きました。完全個室でリラックスできて最高です。また来ます。", attr: "30代女性", stars: 5 },
              { text: "仕事帰りに通ってます。60分コースがちょうど良い長さで、終わった後は本当にすっきりします。", attr: "40代男性", stars: 5 },
              { text: "海外から来ましたが英語で対応してもらえて安心しました。技術も素晴らしかったです。", attr: "Tourist", stars: 5 },
              { text: "マニラで受けたヒロットを、まさか鹿児島で受けられるとは。母国の手技そのままで、深く眠れました。", attr: "A.M.様", stars: 5 },
            ].map((r, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="p-5 rounded-sm"
                  style={{
                    border: "1px solid rgba(212, 168, 83, 0.2)",
                    background: "rgba(212, 168, 83, 0.04)",
                  }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <span key={j} className="text-[#D4A853] text-sm">★</span>
                    ))}
                  </div>
                  <p
                    className="text-[#EDE8DC]/85 text-sm leading-relaxed mb-3"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    「{r.text}」
                  </p>
                  <p className="text-[#EDE8DC]/45 text-xs">— {r.attr}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <p className="text-[#EDE8DC]/35 text-xs text-center mt-6">Google口コミより</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ACCESS ===== */}
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
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                アクセス
              </h2>
            </div>
            <div className="p-5 border border-[#D4A853]/20 rounded-sm bg-[#1A1F2E]/50 space-y-2">
              <p className="text-[#EDE8DC]/85 leading-relaxed">
                <span className="text-[#D4A853] font-medium">鹿児島中央駅から徒歩約3分。</span>
              </p>
              <p className="text-[#EDE8DC]/85 leading-relaxed">
                武ステーションビル 2F 203（yoru+禅）
              </p>
              <p className="text-[#EDE8DC]/50 text-sm">〒890-0045 鹿児島県鹿児島市武1丁目5-17</p>
              <p className="text-[#EDE8DC]/50 text-sm">営業時間：10:00–20:00</p>
              <p className="text-[#D4A853]/70 text-sm pt-1">
                初めての方はご予約後に道順もご案内します。
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
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                よくある質問
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-3">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-[#EDE8DC]/10 rounded-sm overflow-hidden">
                  <button
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-[#EDE8DC]/5 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[#EDE8DC]/90 text-sm font-medium">
                      Q. {faq.q}
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

      {/* ===== 補助リンク集 ===== */}
      <section className="bg-[#0D1220]/60 py-10 border-t border-[#EDE8DC]/8">
        <div className="container">
          <AnimatedSection>
            <p className="text-[#EDE8DC]/40 text-xs tracking-[0.2em] uppercase mb-5 text-center">詳しく知りたい方へ</p>
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {[
                { href: "/jp/first", label: "はじめての方へ" },
                { href: "/jp/access", label: "アクセス案内" },
                { href: "/jp/faq", label: "よくある質問" },
                { href: "/jp/about", label: "店舗について" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className="border border-[#EDE8DC]/10 rounded-sm px-4 py-3 text-center hover:border-[#D4A853]/40 hover:bg-[#EDE8DC]/3 transition-colors cursor-pointer">
                    <span className="text-[#EDE8DC]/60 text-xs hover:text-[#D4A853] transition-colors">{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="relative py-20 text-center"
        style={{
          backgroundImage: `url(${HILOT_MENU_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A1F2E]/90" />
        <div className="relative z-10 container">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#EDE8DC] mb-3"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              異国の伝統が、和の空間で深く沁みる。
            </h2>
            <p className="text-[#EDE8DC]/60 text-sm mb-8">
              完全個室・1枠1名のプライベート空間でお待ちしています。
            </p>
            <div className="flex flex-col items-center">
              <CTAButton href={SQUARE_DOMESTIC_URL}>予約する</CTAButton>
              <LineButton href={LINE_URL} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1220] py-8 text-center">
        <p
          className="text-[#D4A853] text-lg font-bold mb-0.5"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          ヒロット専門 yoru+禅
        </p>
        <p className="text-[#EDE8DC]/40 text-xs mb-1">フィリピン伝統オイルリラクゼーション</p>
        <p className="text-[#EDE8DC]/40 text-xs">
          武ステーションビル2F 203 / 10:00–20:00
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link href="/jp/first">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">はじめての方へ</span>
          </Link>
          <Link href="/jp/access">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">アクセス</span>
          </Link>
          <Link href="/jp/faq">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">FAQ</span>
          </Link>
          <Link href="/jp/about">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">店舗について</span>
          </Link>
        </div>
        <div className="mt-3">
          <Link href="/go">
            <span className="text-[#EDE8DC]/20 text-xs hover:text-[#D4A853] transition-colors">
              ← 言語選択に戻る
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
