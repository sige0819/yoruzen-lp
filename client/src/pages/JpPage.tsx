/*
 * /jp — 日本人向けLP
 * Design: 夜桜の間 — 深藍背景、桜金アクセント、斜めセクション分割
 * 訴求: 静寂・完全個室・1枠1名 → 別カテゴリ化
 * CTA: SQUARE_DOMESTIC_URL × 上中下3箇所
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const SQUARE_DOMESTIC_URL = "https://app.squareup.com/appointments/buyer/widget/ztpq06tczlisjz/LHKH7J4ZZ160Y";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090369358/SvhX77X4H5HqRSLKCsXQQT/hero-jp-bynSTbojrzBKK6QbqjbEYZ.webp";
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

const PAINS = [
  { icon: "🌙", text: "眠りが浅い・寝つきが悪い気がする" },
  { icon: "👁️", text: "眼精疲労・頭が重い感じが続く" },
  { icon: "💆", text: "首肩がこわばってリラックスしづらい" },
];

const FEATURES = [
  { icon: "🚪", title: "完全個室・1枠1名", desc: "周りを気にせず、ただ自分のための時間。" },
  { icon: "💧", title: "頭は水・オイルを使わないドライヘッドスパ", desc: "頭皮・髪が濡れません。施術後すぐ外出できます。" },
  { icon: "🏮", title: "和モダンの静かな空間", desc: "\"静けさ\"を大切にした、落ち着いた雰囲気。" },
];

const MENUS = [
  { time: "30分", name: "クイックリセット", price: "¥3,980", label: "" },
  { time: "45分", name: "禅睡", price: "¥4,980", label: "人気No.1", highlight: true },
  { time: "60分", name: "禅巡", price: "¥6,980", label: "満足コース" },
];

const FAQS = [
  { q: "遅刻した場合は？", a: "遅刻分は施術時間が短くなる場合があります。余裕をもってお越しください。" },
  { q: "支払い方法は？", a: "現金、クレジットカード、Square QR決済に対応しています。一部モバイル決済・交通系ICはご利用いただけません。" },
  { q: "荷物預かりはできますか？", a: "営業時間内（10:00–20:00）に荷物をお預かりできます。" },
  { q: "頭にオイルは使いますか？", a: "頭部はオイル・水を使わないドライヘッドスパです。髪や服が汚れません。なお、足元ケアにはココナッツオイルを使用するメニューがございます。" },
  { q: "予約なしで行けますか？", a: "完全予約制となっております。事前のご予約をおすすめします。" },
];

export default function JpPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "鹿児島ドライヘッドスパ yoru+禅｜鹿児島中央駅徒歩3分・完全個室";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '鹿児島中央駅から徒歩約3分のドライヘッドスパ「yoru+禅」。完全個室・1枠1名。眼精疲労・首肩疲れ・眠りの浅さに、頑張った頭と心をゆるめる時間。クイックリセット３０分·3，９８０円〜。');
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
              Dry Head Spa / 鹿児島中央
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["鹿児島中央駅徒歩約3分", "完全予約制", "1枠1名"].map((b) => (
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
            静かな完全個室で、<br />眠りに入る準備。
          </h1>

          {/* Sub */}
          <p className="text-[#EDE8DC]/75 text-base md:text-lg leading-relaxed max-w-md mb-8">
            ドライヘッドスパで、がんばった頭と心をゆるめる時間。<br />
            1枠1名のプライベート空間。
          </p>

          {/* CTA — Top */}
          <CTAButton href={SQUARE_DOMESTIC_URL}>予約する</CTAButton>
          <a
            href="https://lin.ee/N4c38Dc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-sm text-center py-4 px-8 rounded-sm tracking-widest transition-colors duration-300"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "1.05rem",
              marginTop: "0.75rem",
              border: "1px solid rgba(212, 168, 83, 0.45)",
              color: "rgba(237, 232, 220, 0.75)",
              background: "transparent",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(212, 168, 83, 0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            LINEで空き状況を確認
          </a>
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
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4A853]" />
              <h2
                className="text-xl font-medium text-[#EDE8DC]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                yoru+禅の3つの特徴
              </h2>
            </div>
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
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                メニュー
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 mb-4">
            {MENUS.map((m, i) => (
              <AnimatedSection key={i} delay={i * 100}>
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
                  <div className="flex items-center justify-between">
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
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Option note */}
          <AnimatedSection delay={300}>
            <p className="text-[#EDE8DC]/50 text-xs text-center mb-8">
              ＋ 足元ほぐし15分延長オプションあり
            </p>
          </AnimatedSection>

          {/* CTA — Middle */}
          <AnimatedSection>
            <div className="flex flex-col items-center">
              <CTAButton href={SQUARE_DOMESTIC_URL}>予約する</CTAButton>
              <a
                href="https://lin.ee/N4c38Dc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-sm text-center py-4 px-8 rounded-sm tracking-widest transition-colors duration-300"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "1.05rem",
                  marginTop: "0.75rem",
                  border: "1px solid rgba(212, 168, 83, 0.45)",
                  color: "rgba(237, 232, 220, 0.75)",
                  background: "transparent",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(212, 168, 83, 0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                LINEで空き状況を確認
              </a>
            </div>
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
          backgroundImage: `url(${MENU_BG})`,
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
              今日の疲れを、今日ゆるめる。
            </h2>
            <p className="text-[#EDE8DC]/60 text-sm mb-8">
              完全個室・1枠1名のプライベート空間でお待ちしています。
            </p>
            <div className="flex flex-col items-center">
              <CTAButton href={SQUARE_DOMESTIC_URL}>予約する</CTAButton>
              <a
                href="https://lin.ee/N4c38Dc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-sm text-center py-4 px-8 rounded-sm tracking-widest transition-colors duration-300"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "1.05rem",
                  marginTop: "0.75rem",
                  border: "1px solid rgba(212, 168, 83, 0.45)",
                  color: "rgba(237, 232, 220, 0.75)",
                  background: "transparent",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(212, 168, 83, 0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                LINEで空き状況を確認
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1220] py-8 text-center">
        <p
          className="text-[#D4A853] text-lg font-bold mb-1"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          yoru+禅
        </p>
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
