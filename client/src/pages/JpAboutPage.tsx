/*
 * /jp/about — yoru+禅 について
 * Design: 夜桜の間 — 深藍背景、桜金アクセント
 * 役割: 指名検索・ブランド説明・どんな店かを静かに伝える
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const SQUARE_DOMESTIC_URL = "https://app.squareup.com/appointments/buyer/widget/ztpq06tczlisjz/LHKH7J4ZZ160Y";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090369358/SvhX77X4H5HqRSLKCsXQQT/hero-jp-bynSTbojrzBKK6QbqjbEYZ.webp";

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

function SubPageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative pt-20 pb-12 px-6 text-center border-b border-[#EDE8DC]/10">
      {subtitle && (
        <p className="text-[#D4A853]/70 text-xs tracking-[0.2em] uppercase mb-3">{subtitle}</p>
      )}
      <h1
        className="text-2xl md:text-3xl font-bold text-[#EDE8DC]"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {title}
      </h1>
    </div>
  );
}

export default function JpAboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = "ヒロット専門 yoru+禅について｜フィリピン伝統オイルリラクゼーション 鹿児島中央駅";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'yoru+禅は鹿児島中央駅から徒歩3分のヒロット専門プライベートサロン。マニラで10年の現役経験を持つセラピストによるフィリピン伝統オイルリラクゼーション。完全個室・1枠1名。');
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2E] text-[#EDE8DC]">
      {/* Back nav */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/jp">
          <span className="text-[#D4A853]/60 text-xs hover:text-[#D4A853] transition-colors flex items-center gap-1">
            ← /jp に戻る
          </span>
        </Link>
      </div>

      {/* Hero strip */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2E]/60 via-[#1A1F2E]/50 to-[#1A1F2E]" />
      </div>

      <SubPageHeader title="yoru+禅 について" subtitle="About" />

      <div className="max-w-xl mx-auto px-6 py-12 space-y-14">

        {/* コンセプト */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-4">Concept</p>
          <h2
            className="text-xl font-bold text-[#EDE8DC] mb-4 leading-snug"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            夜の静けさの中で、<br />頭と心をゆるめる場所。
          </h2>
          <p className="text-[#EDE8DC]/65 text-sm leading-loose">
            yoru+禅は、鹿児島中央駅から徒歩約3分の場所にある、ヒロット専門のプライベートサロンです。
            フィリピン伝統の手技「ヒロット」を、マニラで10年の現役経験を持つセラピストが、和モダンの完全個室でお届けします。
            「禅」の名のとおり、余計なものをそぎ落とした静かな空間で、深いリラックスへ導く穏やかな時間を提供しています。
          </p>
        </AnimatedSection>

        {/* 区切り線 */}
        <div className="border-t border-[#EDE8DC]/10" />

        {/* 特徴 */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-6">Features</p>
          <div className="space-y-6">
            {[
              {
                title: "ヒロット専門",
                body: "フィリピン伝統の手技「ヒロット」を専門とするサロンです。温かい手のひらと植物オイルで、深いリラックスへ導きます。",
              },
              {
                title: "完全個室・1枠1名",
                body: "他のお客様と空間を共有しません。1部屋に1名のみ。周りを気にせず、自分だけのための時間を過ごせます。",
              },
              {
                title: "看板なしのプライベートサロン",
                body: "外から見てもサロンとわかる看板はありません。静かに来て、静かに帰れる。そういう場所です。",
              },
              {
                title: "鹿児島中央駅から徒歩約3分",
                body: "武ステーションビル2F 203号室。駅から近く、旅行者の方にも立ち寄りやすい立地です。",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="w-px bg-[#D4A853]/40 flex-shrink-0 mt-1" />
                  <div>
                    <p
                      className="text-[#EDE8DC] text-sm font-bold mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-[#EDE8DC]/60 text-sm leading-loose">{item.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <div className="border-t border-[#EDE8DC]/10" />

        {/* こんな方に */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-4">For You</p>
          <h2
            className="text-lg font-bold text-[#EDE8DC] mb-5"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            こんな方に向いています
          </h2>
          <ul className="space-y-3">
            {[
              "眼精疲労・頭の重さが気になる",
              "首肩のこわばりをほぐしたい",
              "眠りが浅い・なかなか寝つけない",
              "人目を気にせずリラックスしたい",
              "施術後すぐ外出できる環境がほしい",
              "旅行の疲れをリセットしたい",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#EDE8DC]/70">
                <span className="text-[#D4A853] mt-0.5 flex-shrink-0">—</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <div className="border-t border-[#EDE8DC]/10" />

        {/* 店舗情報 */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-4">Info</p>
          <dl className="space-y-3 text-sm">
            {[
              { label: "住所", value: "鹿児島市中央町6-1 武ステーションビル 2F 203" },
              { label: "アクセス", value: "鹿児島中央駅から徒歩約3分" },
              { label: "営業時間", value: "10:00 – 20:00" },
              { label: "定休日", value: "不定休（Squareカレンダーでご確認ください）" },
              { label: "予約", value: "完全予約制（Square予約）" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <dt className="text-[#D4A853]/70 w-20 flex-shrink-0">{item.label}</dt>
                <dd className="text-[#EDE8DC]/70">{item.value}</dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>

        {/* 内部リンク */}
        <AnimatedSection>
          <div className="border border-[#EDE8DC]/10 rounded-sm p-5 space-y-3">
            <p className="text-[#EDE8DC]/50 text-xs tracking-wider mb-4">関連ページ</p>
            {[
              { href: "/jp/access", label: "アクセス・道順案内" },
              { href: "/jp/first", label: "はじめての方へ" },
              { href: "/jp/faq", label: "よくある質問" },
              { href: "/jp", label: "予約ページへ" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="flex items-center justify-between py-2 border-b border-[#EDE8DC]/8 hover:text-[#D4A853] transition-colors cursor-pointer">
                  <span className="text-sm text-[#EDE8DC]/70 hover:text-[#D4A853]">{link.label}</span>
                  <span className="text-[#D4A853]/50 text-xs">→</span>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center pt-4">
            <a
              href={SQUARE_DOMESTIC_URL}
              className="inline-block w-full max-w-sm bg-[#D4A853] text-[#0D1220] font-bold text-center py-4 px-8 rounded-sm tracking-widest hover:bg-[#E5BC6A] transition-colors duration-300 shadow-lg shadow-[#D4A853]/20"
              style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1.05rem" }}
            >
              予約する
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <footer className="bg-[#0D1220] py-8 text-center mt-8">
        <p className="text-[#D4A853] text-lg font-bold mb-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          yoru+禅
        </p>
        <p className="text-[#EDE8DC]/40 text-xs">武ステーションビル2F 203 / 10:00–20:00</p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/jp">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">← 予約ページ</span>
          </Link>
          <Link href="/go">
            <span className="text-[#EDE8DC]/30 text-xs hover:text-[#D4A853] transition-colors">← 言語選択</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
