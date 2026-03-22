/*
 * /jp/access — アクセス・道順案内
 * Design: 夜桜の間 — 深藍背景、桜金アクセント
 * 役割: 看板なしサロンへの道順を安心感とともに案内する
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const SQUARE_DOMESTIC_URL = "https://app.squareup.com/appointments/buyer/widget/ztpq06tczlisjz/LHKH7J4ZZ160Y";

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

const ROUTE_STEPS = [
  {
    num: "01",
    title: "鹿児島中央駅を出る",
    body: "鹿児島中央駅の東口（アミュプラザ側）を出てください。",
  },
  {
    num: "02",
    title: "武ステーションビルへ向かう",
    body: "駅から徒歩約3分。中央町方面へ直進し、武ステーションビルを目指してください。",
  },
  {
    num: "03",
    title: "建物に入り2Fへ",
    body: "建物に看板はありませんが、エントランスからエレベーターで2Fへ上がってください。",
  },
  {
    num: "04",
    title: "203号室がyoru+禅",
    body: "2Fに上がったら203号室です。ドアが閉まっている場合はノックしてください。",
  },
];

export default function JpAccessPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = "アクセス・道順｜yoru+禅 鹿児島中央駅徒歩3分";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'yoru+禅へのアクセス案内。鹿児島中央駅から徒歩約3分、武ステーションビル2F 203号室。看板なしのサロンですが、写真付きの道順案内があります。');
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

      {/* Header */}
      <div
        className="pt-20 pb-12 px-6 text-center border-b border-[#EDE8DC]/10"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}
      >
        <p className="text-[#D4A853]/70 text-xs tracking-[0.2em] uppercase mb-3">Access</p>
        <h1
          className="text-2xl md:text-3xl font-bold text-[#EDE8DC]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          アクセス・道順案内
        </h1>
        <p className="text-[#EDE8DC]/50 text-sm mt-3">
          看板はありませんが、迷わずお越しいただけます。
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-12 space-y-14">

        {/* 基本情報 */}
        <AnimatedSection>
          <div className="bg-[#0D1220]/60 border border-[#EDE8DC]/10 rounded-sm p-5">
            <dl className="space-y-3 text-sm">
              {[
                { label: "住所", value: "鹿児島市中央町6-1 武ステーションビル 2F 203" },
                { label: "最寄り駅", value: "鹿児島中央駅（徒歩約3分）" },
                { label: "営業時間", value: "10:00 – 20:00" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <dt className="text-[#D4A853]/70 w-20 flex-shrink-0">{item.label}</dt>
                  <dd className="text-[#EDE8DC]/70">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>

        {/* Googleマップ */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-4">Map</p>
          <div className="rounded-sm overflow-hidden border border-[#EDE8DC]/10">
            <iframe
              title="yoru+禅 地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.9!2d130.5407!3d31.5892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e6748b1234567%3A0x0!2z5qCq5byP5Lya56S-IOatpuOCueODhuODvOOCt29u44OT44Or2F!5e0!3m2!1sja!2sjp!4v1234567890"
              width="100%"
              height="220"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 text-center">
            <a
              href="https://maps.google.com/?q=鹿児島市中央町6-1+武ステーションビル"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A853]/70 text-xs hover:text-[#D4A853] transition-colors"
            >
              Google マップで開く →
            </a>
          </div>
        </AnimatedSection>

        <div className="border-t border-[#EDE8DC]/10" />

        {/* 道順 */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-6">Route</p>
          <h2
            className="text-lg font-bold text-[#EDE8DC] mb-8"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            鹿児島中央駅からの道順
          </h2>
          <div className="space-y-6">
            {ROUTE_STEPS.map((step, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#D4A853]/40 flex items-center justify-center">
                    <span className="text-[#D4A853] text-xs font-bold">{step.num}</span>
                  </div>
                  <div className="pt-1">
                    <p
                      className="text-[#EDE8DC] text-sm font-bold mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {step.title}
                    </p>
                    <p className="text-[#EDE8DC]/60 text-sm leading-loose">{step.body}</p>
                  </div>
                </div>
                {i < ROUTE_STEPS.length - 1 && (
                  <div className="ml-5 w-px h-4 bg-[#D4A853]/20 mt-2" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <div className="border-t border-[#EDE8DC]/10" />

        {/* 看板なしについて */}
        <AnimatedSection>
          <div className="bg-[#0D1220]/60 border border-[#EDE8DC]/10 rounded-sm p-5">
            <p
              className="text-[#EDE8DC] text-sm font-bold mb-3"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              看板がなくて不安な方へ
            </p>
            <p className="text-[#EDE8DC]/65 text-sm leading-loose mb-4">
              yoru+禅は、外から見てもサロンとわかる看板を設けていません。
              プライバシーを大切にしたプライベートサロンのため、そのような設計にしています。
              武ステーションビルの2Fに上がり、203号室がyoru+禅です。
            </p>
            <p className="text-[#EDE8DC]/65 text-sm leading-loose">
              迷った場合は、お気軽にLINEでご連絡ください。すぐにご案内します。
            </p>
          </div>
        </AnimatedSection>

        {/* 内部リンク */}
        <AnimatedSection>
          <div className="border border-[#EDE8DC]/10 rounded-sm p-5 space-y-3">
            <p className="text-[#EDE8DC]/50 text-xs tracking-wider mb-4">関連ページ</p>
            {[
              { href: "/jp/first", label: "はじめての方へ" },
              { href: "/jp/faq", label: "よくある質問" },
              { href: "/jp/about", label: "yoru+禅 について" },
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
