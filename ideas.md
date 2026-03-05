# yoru+禅 LP デザインアイデア

## 案1: 夜の禅 — 深夜の静寂美学
<response>
<text>
**Design Movement**: 現代和モダン × ダークラグジュアリー（Contemporary Wabi-Sabi Dark）

**Core Principles**:
- 深い夜の静寂を表現する暗色基調
- 余白を「間（ま）」として意識的に使う
- 縦書き的な視覚リズム（日本語の縦書き感覚をレイアウトに）
- 素材感のあるテクスチャ（和紙・墨・漆）

**Color Philosophy**:
- 背景：深墨色 `#0D0D0B`（漆黒）
- テキスト：和紙白 `#F5F0E8`
- アクセント：金茶 `#B8860B`（蒔絵の金）
- サブ：くすんだ翠 `#4A7C6F`（抹茶）
- 感情意図：「夜の静けさ」「上質な休息」

**Layout Paradigm**:
- 非対称レイアウト。テキストブロックを左寄せ、画像を右端に大きく配置
- セクション間に和紙テクスチャの区切り線
- スクロールで文字が墨が滲むように現れるアニメーション

**Signature Elements**:
- 細い縦線（柱のような）でセクションを区切る
- 「禅」の文字をウォーターマークとして背景に薄く配置
- 波紋のようなホバーエフェクト

**Interaction Philosophy**:
- ゆっくりとしたフェードイン（0.8s ease-out）
- スクロール連動の視差効果
- CTAボタンは金色の枠線が広がるホバー

**Animation**:
- 入場：opacity 0→1, translateY 20px→0, 0.8s ease-out
- スクロール：parallax 0.3倍速
- ボタン：border-color が内側から外側へ広がる

**Typography System**:
- 見出し：Noto Serif JP（セリフ体・重厚感）
- 英語見出し：Cormorant Garamond（エレガント）
- 本文：Noto Sans JP（読みやすさ）
- 階層：見出し 2.5rem → サブ 1.1rem → 本文 0.95rem
</text>
<probability>0.08</probability>
</response>

---

## 案2: 朝靄の禅 — 淡光ミニマル
<response>
<text>
**Design Movement**: 禅ミニマリズム × スカンジナビアン（Zen Minimalism）

**Core Principles**:
- 白と淡いベージュで「何もない美しさ」
- 大きな余白と小さなテキストの対比
- 一点集中のCTA

**Color Philosophy**:
- 背景：温かい白 `#FAFAF7`
- テキスト：濃い炭色 `#1A1A18`
- アクセント：くすんだ朱 `#C0614A`
- 感情意図：「清潔感」「静けさ」「信頼」

**Layout Paradigm**:
- フルワイドのヒーロー、コンテンツは中央揃えで細い列
- 大量の余白でコンテンツを「浮かせる」

**Signature Elements**:
- 細い水平線（罫線）
- 小さな円形バッジ

**Interaction Philosophy**:
- 最小限のアニメーション
- シンプルなフェード

**Animation**:
- 入場：opacity 0→1, 0.5s
- ホバー：色の変化のみ

**Typography System**:
- Noto Serif JP + Noto Sans JP
</text>
<probability>0.05</probability>
</response>

---

## 案3: 夜桜の間 — 有機的テクスチャ美学
<response>
<text>
**Design Movement**: 有機的和モダン × テクスチャリズム（Organic Japanese Modernism）

**Core Principles**:
- 深い夜の藍色と暖かい金色の対比
- 和紙・布・木目などの有機的テクスチャを重ねる
- 非線形のレイアウト（斜めのセクション分割）
- 「余韻」を大切にした情報密度の低さ

**Color Philosophy**:
- 背景：深藍 `#1A1F2E`（夜空）
- セクション背景：温かいチャコール `#242320`
- テキスト：クリーム `#EDE8DC`
- アクセント：桜金 `#D4A853`（夜桜の灯り）
- サブアクセント：薄桜 `#E8C4C0`（淡いピンク）
- 感情意図：「特別な夜の時間」「上質な癒し」「旅の疲れを癒す」

**Layout Paradigm**:
- 斜め区切り（clip-path）でセクションを分割、単調さを排除
- ヒーローは全画面、テキストは左下に配置（映画的構図）
- メニューカードは横スクロール（モバイル最適）

**Signature Elements**:
- 斜めのセクション境界（clip-path: polygon）
- 細い金色の縦線アクセント
- 薄い和紙テクスチャのオーバーレイ

**Interaction Philosophy**:
- スクロール時に要素が「流れ込む」ように出現
- CTAボタンは金色のシマーエフェクト
- カードホバーで微細な浮き上がり

**Animation**:
- 入場：translateX(-30px)→0 + opacity 0→1, 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- CTAシマー：linear-gradient が左から右へ流れる
- カードホバー：translateY(-4px) + box-shadow 強化, 0.3s ease

**Typography System**:
- 日本語見出し：Noto Serif JP Bold（格調）
- 英語見出し：Playfair Display（エレガント・旅行者向け）
- 本文：Noto Sans JP Regular（読みやすさ）
- 韓国語：Noto Sans KR
- 繁体中文：Noto Serif TC
- 階層：大見出し 3rem → 小見出し 1.4rem → 本文 1rem → バッジ 0.8rem
</text>
<probability>0.09</probability>
</response>
