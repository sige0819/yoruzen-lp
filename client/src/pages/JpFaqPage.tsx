/*
 * /jp/faq — よくある質問
 * Design: 夜桜の間 — 深藍背景、桜金アクセント
 * 役割: 不安解消・来店前の疑問を網羅的に解消する
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

const FAQ_CATEGORIES = [
  {
    category: "来店・アクセス",
    items: [
      {
        q: "看板はありますか？",
        a: "外から見てもサロンとわかる看板はありません。武ステーションビルの2Fに上がり、203号室がyoru+禅です。迷った場合はLINEでご連絡ください。",
      },
      {
        q: "迷ったらどうすればいいですか？",
        a: "LINEでご連絡いただければ、すぐにご案内します。アクセスページにも写真付きの道順案内があります。",
      },
      {
        q: "駐車場はありますか？",
        a: "専用駐車場はございません。近隣のコインパーキングをご利用ください。鹿児島中央駅から徒歩約3分のため、電車・バスでのご来店が便利です。",
      },
    ],
  },
  {
    category: "施術について",
    items: [
      {
        q: "頭にオイルや水は使いますか？",
        a: "頭部はオイルも水も使わないドライヘッドスパです。髪や服が濡れないため、施術後すぐに外出できます。なお、足元ケアにはココナッツオイルを使用するメニューがございます。",
      },
      {
        q: "着替えは必要ですか？",
        a: "着替えは不要です。普段着のままお越しください。",
      },
      {
        q: "施術中はどんな体勢ですか？",
        a: "リクライニングチェアに座った状態で施術を受けます。横になる必要はありません。",
      },
      {
        q: "男性も利用できますか？",
        a: "はい、男性のお客様もご利用いただけます。",
      },
      {
        q: "妊娠中でも利用できますか？",
        a: "妊娠中の方は事前にご相談ください。体調によってはお断りする場合があります。",
      },
    ],
  },
  {
    category: "予約・キャンセル",
    items: [
      {
        q: "当日予約はできますか？",
        a: "空きがあれば当日予約も可能ですが、事前予約をおすすめします。Square予約ページでリアルタイムの空き状況をご確認ください。",
      },
      {
        q: "予約変更・キャンセルはできますか？",
        a: "Square予約ページからキャンセル・変更が可能です。直前のキャンセルはなるべくお早めにご連絡ください。",
      },
      {
        q: "遅刻した場合はどうなりますか？",
        a: "遅刻分は施術時間が短くなる場合があります。余裕をもってお越しください。",
      },
    ],
  },
  {
    category: "お支払い・荷物",
    items: [
      {
        q: "支払い方法は何が使えますか？",
        a: "現金・クレジットカード・Square QR決済に対応しています。一部モバイル決済・交通系ICはご利用いただけません。",
      },
      {
        q: "荷物を預かってもらえますか？",
        a: "営業時間内（10:00–20:00）に荷物をお預かりできます。旅行中の方もお気軽にどうぞ。",
      },
    ],
  },
];

export default function JpFaqPage() {
  const [visible, setVisible] = useState(false);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.title = "よくある質問｜yoru+禅 鹿児島ドライヘッドスパ";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'yoru+禅のよくある質問。看板・アクセス・施術内容・着替え・男性利用・支払い・予約変更など、来店前の疑問にお答えします。');
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const toggle = (key: string) => {
    setOpenMap(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
        <p className="text-[#D4A853]/70 text-xs tracking-[0.2em] uppercase mb-3">FAQ</p>
        <h1
          className="text-2xl md:text-3xl font-bold text-[#EDE8DC]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          よくある質問
        </h1>
        <p className="text-[#EDE8DC]/50 text-sm mt-3">
          来店前の疑問にお答えします。
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-12 space-y-12">

        {FAQ_CATEGORIES.map((cat, ci) => (
          <AnimatedSection key={ci} delay={ci * 60}>
            <p className="text-[#D4A853]/80 text-xs tracking-[0.2em] uppercase mb-5">{cat.category}</p>
            <div className="space-y-2">
              {cat.items.map((faq, fi) => {
                const key = `${ci}-${fi}`;
                const isOpen = openMap[key];
                return (
                  <div key={fi} className="border border-[#EDE8DC]/10 rounded-sm overflow-hidden">
                    <button
                      className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-[#EDE8DC]/5 transition-colors"
                      onClick={() => toggle(key)}
                    >
                      <span className="text-[#EDE8DC]/90 text-sm font-medium leading-snug">
                        Q. {faq.q}
                      </span>
                      <span className="text-[#D4A853] text-lg flex-shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-[#EDE8DC]/65 text-sm leading-relaxed border-t border-[#EDE8DC]/10 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        ))}

        <div className="border-t border-[#EDE8DC]/10" />

        {/* 解決しない場合 */}
        <AnimatedSection>
          <div className="bg-[#0D1220]/60 border border-[#EDE8DC]/10 rounded-sm p-5">
            <p
              className="text-[#EDE8DC] text-sm font-bold mb-3"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              解決しない場合は
            </p>
            <p className="text-[#EDE8DC]/65 text-sm leading-loose">
              上記以外のご質問は、LINEまたは予約ページのメッセージ機能からお気軽にお問い合わせください。
            </p>
          </div>
        </AnimatedSection>

        {/* 内部リンク */}
        <AnimatedSection>
          <div className="border border-[#EDE8DC]/10 rounded-sm p-5 space-y-3">
            <p className="text-[#EDE8DC]/50 text-xs tracking-wider mb-4">関連ページ</p>
            {[
              { href: "/jp/first", label: "はじめての方へ" },
              { href: "/jp/access", label: "アクセス・道順案内" },
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
