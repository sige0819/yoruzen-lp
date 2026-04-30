/*
 * /jp/first — はじめての方へ
 * Design: 夜桜の間 — 深藍背景、桜金アクセント
 * 役割: 不安解消・来店前の疑問を静かに解消する
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

const STEPS = [
  {
    num: "01",
    title: "Square予約ページから予約",
    body: "日時・メニューを選んで予約を確定してください。確認メールが届きます。当日予約も空きがあれば可能ですが、事前予約をおすすめします。",
  },
  {
    num: "02",
    title: "武ステーションビル2Fへ",
    body: "鹿児島中央駅から徒歩約3分。建物に看板はありませんが、エレベーターで2Fへ上がり、203号室がyoru+禅です。迷ったらLINEでご連絡ください。",
  },
  {
    num: "03",
    title: "ドアをノック・または入室",
    body: "ドアが閉まっている場合はノックしてください。スタッフがご案内します。",
  },
  {
    num: "04",
    title: "施術前のカウンセリング",
    body: "初回は簡単なカウンセリングがあります。体調・気になる部位・施術の強さなどをお伝えください。",
  },
  {
    num: "05",
    title: "施術",
    body: "完全個室でリクライニングチェアに座って施術を受けます。服装はそのままで大丈夫です。頭にオイル・水は使いません。",
  },
  {
    num: "06",
    title: "お会計・退室",
    body: "施術後にお会計です。現金・クレジットカード・Square QR決済に対応しています。施術後すぐ外出できます。",
  },
];

const NOTES = [
  { label: "服装", body: "着替えは不要です。普段着のままお越しください。" },
  { label: "持ち物", body: "特に必要なものはありません。荷物は営業時間内（10:00–20:00）にお預かりできます。" },
  { label: "支払い", body: "現金・クレジットカード・Square QR決済に対応しています。一部モバイル決済・交通系ICはご利用いただけません。" },
  { label: "男性の利用", body: "男性のお客様もご利用いただけます。" },
  { label: "遅刻", body: "遅刻分は施術時間が短くなる場合があります。余裕をもってお越しください。" },
  { label: "キャンセル", body: "Square予約ページからキャンセル・変更が可能です。直前のキャンセルはなるべくお早めにご連絡ください。" },
];

export default function JpFirstPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.title = "はじめての方へ｜ヒロット専門 yoru+禅 鹿児島中央駅";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'yoru+禅への初めての来店ガイド。予約方法・来店の流れ・服装・支払い方法・当日の注意点をわかりやすくご案内します。');
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
        <p className="text-[#D4A853]/70 text-xs tracking-[0.2em] uppercase mb-3">First Visit</p>
        <h1
          className="text-2xl md:text-3xl font-bold text-[#EDE8DC]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          はじめての方へ
        </h1>
        <p className="text-[#EDE8DC]/50 text-sm mt-3">
          初めてのご来店でも、安心してお越しください。
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-12 space-y-14">

        {/* 来店の流れ */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-6">Flow</p>
          <h2
            className="text-lg font-bold text-[#EDE8DC] mb-8"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            来店の流れ
          </h2>
          <div className="space-y-6">
            {STEPS.map((step, i) => (
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
                {i < STEPS.length - 1 && (
                  <div className="ml-5 w-px h-4 bg-[#D4A853]/20 mt-2" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <div className="border-t border-[#EDE8DC]/10" />

        {/* 当日の注意点 */}
        <AnimatedSection>
          <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-6">Notes</p>
          <h2
            className="text-lg font-bold text-[#EDE8DC] mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            当日について
          </h2>
          <div className="space-y-5">
            {NOTES.map((note, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="flex gap-4">
                  <dt className="text-[#D4A853]/70 text-xs w-16 flex-shrink-0 pt-0.5">{note.label}</dt>
                  <dd className="text-[#EDE8DC]/65 text-sm leading-loose">{note.body}</dd>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <div className="border-t border-[#EDE8DC]/10" />

        {/* アクセスリンク */}
        <AnimatedSection>
          <div className="bg-[#0D1220]/60 border border-[#EDE8DC]/10 rounded-sm p-5">
            <p className="text-[#EDE8DC]/50 text-xs tracking-wider mb-3">迷ったときは</p>
            <p className="text-[#EDE8DC]/70 text-sm leading-loose mb-4">
              建物に看板はありませんが、アクセスページに写真付きの道順案内があります。
              それでも迷った場合は、LINEでご連絡いただければご案内します。
            </p>
            <Link href="/jp/access">
              <span className="text-[#D4A853] text-sm hover:text-[#E5BC6A] transition-colors flex items-center gap-1">
                アクセス・道順案内を見る →
              </span>
            </Link>
          </div>
        </AnimatedSection>

        {/* 内部リンク */}
        <AnimatedSection>
          <div className="border border-[#EDE8DC]/10 rounded-sm p-5 space-y-3">
            <p className="text-[#EDE8DC]/50 text-xs tracking-wider mb-4">関連ページ</p>
            {[
              { href: "/jp/access", label: "アクセス・道順案内" },
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
