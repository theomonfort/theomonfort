---
applyTo: "**/*.{astro,css,tsx,jsx,ts,js,html}"
description: "フロントエンドのデザイントークン（レトロ JRPG テーマ）"
---

# フロントエンド設計ルール

スタイル・コンポーネント・レイアウトを触るときは、以下のトークンを必ず適用する。

## テーマ

レトロ JRPG / サイバーパンクのアーケード。深紫 → 濃紺 → 漆黒のラジアル背景にネオンのアクセント、ピクセル系タイポグラフィ。

## カラー

| 役割 | Hex | Tailwind |
| ----------------- | --------- | ------------------- |
| 漆黒 (ベース) | `#05060f` | `bg-shadow-ink` |
| 濃紺 (パネル) | `#0a0e27` | `bg-midnight` |
| 深紫 (背景上端) | `#1a0b2e` | `bg-deep-purple` |
| ネオンマゼンタ | `#ff2e88` | `text-neon-magenta` |
| ネオンシアン | `#00f0ff` | `text-neon-cyan` |
| アンバー | `#ffb000` | `text-crt-amber` |
| フォスファ緑 | `#9bbc0f` | `text-gb-green` |
| 本文テキスト | `#e8f4ff` | `text-phosphor` |

`body` 背景は深紫 → 濃紺 → 漆黒のラジアルグラデで作る。

## フォント

| 用途 | フォント | Tailwind |
| --------------------------------------- | ------------------- | --------------- |
| ブランド見出し (H1・ロゴ・大型ラベル) | `'Press Start 2P'` | `font-pixel` |
| 本文・見出し (日 + 英、既定) | `'DotGothic16'` | `font-pixel-jp` |
| プレゼンモードの装飾 (slide counter 等) | `'VT323'` | `font-terminal` |
| コードブロック | `'IBM Plex Mono'` | `font-mono` |

`'Press Start 2P'` は小文字グリフを持たない（全部大文字になる）ので、ブランドロゴと最上位の見出しに限定。本文・節見出し・TOC・リンク・カードの説明など、**プロースは原則すべて `font-pixel-jp` (DotGothic16)** を使う — 日本語とラテン文字を一つのピクセルグリッドで揃えられる。すべて `monospace` / `sans-serif` を fallback に。

## エフェクト

- 控えめな CRT スキャンライン (`.crt-lines`) を全画面オーバーレイに。
- ネオングロー: `shadow-neon-magenta` / `-cyan` / `-amber` / `-green` (= `0 0 8px <color>, 0 0 24px <rgba>`)。
- ボーダー: `1px dashed` または `2px solid` のネオンカラー。コントラストは高めに、淡いパステルグラデは禁止。

## してはいけないこと

- 明るい / 白の背景。
- pill 形状 / 4px 超の角丸。
- 灰色のソフトドロップシャドウ（グローのみ使う）。
