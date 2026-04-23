# 🎮 AI KAIHATSU QUEST

> AI駆動開発 の伝説的な道場 — レトロJRPG × 80s Tokyo neon × 現代の開発体験

ファミコン／FF6／Dragon Quest／Sega Saturn のメニュー美学に、渋谷の夜のネオンと CRTスキャンライン を重ねた、AI駆動開発の入門サイト。

## ✨ Features

- 🏠 **イソメトリック・ハブ部屋** — 家具をクリックして各セクションへ
- 📖 **12用語の glossary** — Prompt / Context / Harness / MCP / Skills / Agents …
- 🎴 **スキル装備所** — `theomonfort` skills を1クリックでコピー、💾 セーブポイントで一括装備
- 💭 **哲学Q&A** — Dragon Quest 風タイプライター演出（クリックでスキップ可）
- 🌐 **リンクの泉** — GitHub Blog / Changelog / Japan YouTube&X / Well-Architected
- 📜 **マニフェスト** — 巻物UIで情熱を伝える
- 🎮 **インタラクティブ装飾**
  - CRT scanlines + flicker (toggleable, `prefers-reduced-motion` 対応)
  - 8bit BGM (WebAudio で生成、デフォルトOFF)
  - XP HUD — スクロールで EXP 加算 → LEVEL UP！
  - Konami code (↑↑↓↓←→←→BA) → 隠し部屋
  - Boot sequence (POWER ON → ロゴ)

## 🛠️ Stack

- [Astro 5](https://astro.build) (static, MDX content collections)
- [Tailwind CSS 3](https://tailwindcss.com) + custom retro tokens
- [React 18](https://react.dev) (interactive islands only)
- [Howler.js](https://howlerjs.com) (audio scaffolding)
- WebAudio API (procedural chiptune)
- Google Fonts: `Press Start 2P`, `DotGothic16`, `VT323`, `Noto Sans JP`, `IBM Plex Mono`

## 🚀 開発

```bash
pnpm install
pnpm dev      # → http://localhost:4321
pnpm build    # → ./dist
pnpm preview
```

## 📂 Structure

```
src/
├── components/
│   ├── layout/        # Layout, Nav, Footer
│   ├── retro/         # PixelBox, MenuArrow, TypewriterText, CRTOverlay
│   ├── room/          # IsoRoom (hub)
│   └── interactive/   # BGM, Konami, XPHud, BootSequence, SkillGallery
├── content/
│   ├── glossary/      # 12 用語 (.md)
│   └── philosophy/    # 7 Q&A (.md)
├── pages/             # / /glossary /skills /philosophy /links /manifesto /secret
├── lib/               # sfx, konami
└── styles/            # tokens, globals
```

## 🎨 Design tokens

| Color | Hex |
|---|---|
| midnight | `#0a0e27` |
| deep-purple | `#1a0b2e` |
| neon-magenta | `#ff2e88` |
| neon-cyan | `#00f0ff` |
| crt-amber | `#ffb000` |
| gb-green | `#9bbc0f` |
| phosphor | `#e8f4ff` |

## 🥚 Easter eggs

- Konami code (↑↑↓↓←→←→BA) → `/secret`
- スクロールで EXP 加算 → 100% で LEVEL UP fanfare
- BGM toggle (右下) — WebAudio で生成される 8bit ペンタトニック・ループ
- CRT toggle (左下) — フリッカ + scanline + ノイズ

## 📜 License

Code: MIT — Content: CC-BY 4.0
