/*
 * /go — 言語・目的分岐 選択ページ
 * Design: 夜桜の間 — 深藍背景、桜金アクセント、2つの大きなCTAボタン
 * Mobile-first, 2ボタン構成
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090369358/SvhX77X4H5HqRSLKCsXQQT/hero-go-2Uphn7rr8BN6BPEkWMneK7.webp";

export default function GoPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1220]/80 via-[#0D1220]/70 to-[#0D1220]/90" />

      {/* Gold vertical accent lines */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A853]/40 to-transparent hidden md:block" />
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A853]/40 to-transparent hidden md:block" />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-lg mx-auto px-6 py-12 flex flex-col items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Logo / Brand */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#D4A853]" />
            <span className="text-[#D4A853] text-xs tracking-[0.3em] uppercase font-light">
              Dry Head Spa
            </span>
            <span className="w-8 h-px bg-[#D4A853]" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#EDE8DC] tracking-wide"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            yoru<span className="text-[#D4A853]">+</span>禅
          </h1>
          <p className="mt-2 text-[#D4A853] text-sm tracking-widest font-light">
            よる・ぜん
          </p>
        </div>

        {/* Main heading */}
        <h2
          className="text-xl md:text-2xl font-medium text-[#EDE8DC] text-center mb-2"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          どちらで予約しますか？
        </h2>

        {/* Sub text */}
        <p className="text-[#EDE8DC]/70 text-sm text-center mb-8 leading-relaxed px-2">
          鹿児島中央駅から徒歩約3分<br className="sm:hidden" />｜完全個室｜英語対応<br className="sm:hidden" />｜荷物預かり（10:00–20:00）
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-4">
          {/* JP Button */}
          <Link href="/jp">
            <button className="zen-shimmer w-full py-5 px-6 rounded-sm text-left group relative overflow-hidden border border-[#D4A853]/50 bg-[#D4A853]/10 hover:bg-[#D4A853]/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[#EDE8DC] text-lg font-medium mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    日本語で予約
                  </div>
                  <div className="text-[#D4A853]/80 text-sm font-light">
                    睡眠・眼精疲労・首肩のお疲れに
                  </div>
                </div>
                <div className="text-[#D4A853] text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </div>
            </button>
          </Link>

          {/* Travel Button */}
          <Link href="/travel">
            <button className="zen-shimmer w-full py-5 px-6 rounded-sm text-left group relative overflow-hidden border border-[#EDE8DC]/30 bg-[#EDE8DC]/5 hover:bg-[#EDE8DC]/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[#EDE8DC] text-lg font-medium mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Travelers
                  </div>
                  <div className="text-[#EDE8DC]/60 text-sm font-light">
                    English&nbsp;/&nbsp;繁體中文&nbsp;/&nbsp;한국어
                  </div>
                </div>
                <div className="text-[#EDE8DC]/60 text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </div>
            </button>
          </Link>
        </div>

        {/* Badge row */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "駅徒歩3分",
            "完全個室",
            "English OK",
            "荷物預かり",
          ].map((badge) => (
            <span
              key={badge}
              className="text-xs text-[#D4A853]/80 border border-[#D4A853]/30 px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Fine print */}
        <p className="mt-8 text-[#EDE8DC]/30 text-xs text-center">
          予約はSquareで確定します。
        </p>

        {/* Address */}
        <p className="mt-2 text-[#EDE8DC]/40 text-xs text-center">
          武ステーションビル 2F 203 / 10:00–20:00
        </p>
      </div>
    </div>
  );
}
