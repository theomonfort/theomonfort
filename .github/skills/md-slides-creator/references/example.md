---
title: 例エントリー（Example）
titleEn: Example
summary: スライドエンジン向けに書かれた最小完全例。`## ` ごとに 1 スライド、frontmatter からタイトルスライドとリンクスライドが自動生成される構造を示す。
icon: 📘
color: cyan
order: 999
category: introduction
related: []
links:
  - group: 📖 公式ドキュメント
    label: Astro Content Collections
    url: https://docs.astro.build/en/guides/content-collections/
  - group: 📖 公式ドキュメント
    label: GitHub Flavored Markdown
    url: https://github.github.com/gfm/
  - group: 🎓 チュートリアル
    label: Markdown guide
    url: https://www.markdownguide.org/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Markdown 1 ファイル</strong> で <strong>長文ドキュメント</strong> と <strong>スライドデッキ</strong> を両立させる。
  </p>
  <p>
    ルールはひとつ — <code>## H2</code> ごとに <strong>1 スライド</strong>。
  </p>
</div>

> 🎯 frontmatter がタイトルスライド、本文の H2 が中身スライド、`links[]` が最後のリンクスライドになる。
> 💡 H1 (`#`) は使わない — frontmatter のタイトルと重複する。

## 何ができる?

| パターン | 使う要素 | 効果 |
| --- | --- | --- |
| 🎙️ 強い導入 | `<div class="hero-quote">` | スピーチバブル風の主役ブロック |
| 📊 比較 | GFM テーブル | スライドに収まる対照表 |
| 💬 補足 | `>` 引用 + emoji | サブ情報を 1 行で添える |
| 🧪 サンプル | 言語付きコードフェンス | コピペ可能な例 |
| 🔗 詳細 | `<a class="retro-link">` | retro 風スタイルの外部リンク |

## 設定方法

```yaml
---
title: タイトル
titleEn: Title
summary: 1 行説明
icon: 📘
color: cyan
order: 999
category: introduction
links:
  - group: 📖 公式ドキュメント
    label: Docs
    url: https://example.com
---
```

- 📦 `color` は magenta / cyan / amber / green
- 📂 `category` は introduction / plan / develop / review / secure / operate
- 🔢 `order` は小数で OK — 後から差し込みやすい
- 🌐 `links[].url` は **必ず完全修飾 URL** (Zod が弾く)

## ★ よくあるパターン

```bash
# プロジェクトをビルドしてプレビュー
pnpm build && pnpm dev --host 127.0.0.1
```

> 🔑 `P` でプレゼンモード · `←` `→` でスライド送り · `Esc` で終了。

## トラブルシュート

- ❌ **スライドが分かれない** → 区切りは `## H2` のみ。`---` (hr) では分かれない。
- ❌ **タイトルが二重に出る** → 本文に `# H1` を書かない。
- ❌ **`pnpm build` が落ちる** → `links[].url` が完全修飾 URL か、`category` が enum 値か確認。
- ✅ **見た目チェック** → ブラウザで `P` を押し、各スライドが画面に収まっているか目視で確認。

📘 詳細:
- <a class="retro-link" href="https://docs.astro.build/en/guides/content-collections/" target="_blank" rel="noopener noreferrer">Astro Content Collections ↗</a>
- <a class="retro-link" href="https://github.github.com/gfm/" target="_blank" rel="noopener noreferrer">GitHub Flavored Markdown ↗</a>
