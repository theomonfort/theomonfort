# 👋 テオ・モンフォル (Théo Monfort)

**ソリューションズ・エンジニア @ GitHub Japan 🇯🇵**

GitHub Japan で、日本の開発者と企業がより良いソフトウェアを作るお手伝いをしています。
Copilot、Actions、プラットフォーム規模の導入まで、**AI駆動開発** をテーマに日々活動しています。

---

## 🎮 AI 駆動開発 QUEST — レトロ道場

> AI 駆動開発をテーマにしたレトロ CRT 風サイト ── GitHub Copilot で何ができるのかを「読んで」「動かして」体験してもらうために作りました。

🌐 **公開中: https://theomonfort.github.io/theomonfort/**

バイリンガル (日本語 / 英語) 対応。H2 ごとにスライドに分割される **プレゼンテーション・モード** 付き。

- 📘 **プレイブック (Playbook)** — Copilot 各機能の解説カード集。**INTRODUCTION → PLAN → DEVELOP → REVIEW → SECURE → OPERATE → ADMINISTRATION** のライフサイクル順に整理 (Chat、CLI、Agent Mode、Cloud Agent、Code Review、Custom Agents、Hooks、MCP、Code Scanning、Secret Scanning、Dependabot、GHAS、Agentic Workflow、…)
- 🛠 **ハンズオン (Hands-on)** — 15 ステップのワークショップ。**PLAN → CODE → REVIEW → TEST & SECURE → OPERATE** を一気通貫で体験
- 🎴 **装備所 (Equipment)** — エージェント・スキルを `gh skill install …` でワンクリック導入
- 📰 **Changelog**: 気になる GitHub の更新を新しい順に紹介。日本語の要点、補足、デモメモと公式リンクを掲載。

**スタック:** Astro 6 · MDX · React 19 · Tailwind 3 · Mermaid (図) · GSAP (アニメーション)

本文の読みやすさを優先し、Playbook と Changelog の本文、カードタイトル、サイトナビゲーションには **Noto Sans JP**（`font-body`）を使用。Playbook の目次は DotGothic16、各記事の冒頭タイトル、ロゴ、大きなセクション名は Press Start 2P を維持。スライドの見出しは英字に目次と同じ DotGothic16、日本語に M PLUS 1 Code を使用し、カテゴリ色の文字に同色の小さな三角マーカーを添えています。`globals.css` の Latin 専用フォント定義で、日本語への影響を限定しています。下線や文字のグローは使用しません。スライドカウンターには VT323、コードには IBM Plex Mono を残し、ネオンカラーと角張った枠でゲームの雰囲気を保っています。日本語版と英語版で同じ方針を適用します。

Playbook の本文と引用ブロックでも、英字には DotGothic16、日本語には Noto Sans JP を使用します。コードの等幅書体と Changelog の本文書体は変更しません。

## Changelog の追加方法

`src/content/changelog/ja/` と `src/content/changelog/en/` に同名の Markdown ファイルを追加します（例: `2026-09-10-pull-requests-page.md`）。

Frontmatter は `title`、`date`（`"YYYY-MM-DD"`）、`summary`、`category`（`review` / `security`）、`source`（公式の完全な URL）が必須。`status` と `demo`（デモ手順の文字列配列）は任意です。本文は要点や補足を自由に記述できます。日付の降順で自動表示されるため、並び順の手動管理は不要です。

表示先は `/theomonfort/changelog` と `/theomonfort/en/changelog`。追加後は `pnpm build` で確認します。
