---
title: コラボレーションツール
titleEn: Collaboration Tools
summary: チームで一緒に開発を進めるための GitHub の道具箱。GitHub が発明した Pull Request を入口に、Issues・Sub-issues、Discussions、Projects を一巡りして、それぞれの「ここがいい」と次に読むべき公式リンクを押さえる。
icon: /theomonfort/hi5-pixel-hand.png
color: green
accent:
  text: text-gameboy-green
  border: border-gameboy-green
  glow: hover:shadow-gameboy-green
  shadow: shadow-gameboy-green
  hex: "#9bbc0f"
order: 3.4
category: plan
related: ['github', 'pull-requests', 'enterprise-setup']
links:
  - group: 📖 公式ドキュメント
    label: About issues
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
  - group: 📖 公式ドキュメント
    label: About sub-issues
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues
  - group: 📖 公式ドキュメント
    label: Managing issue fields in an organization
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization
  - group: 📰 発表
    label: "Issue fields are now generally available (2026-07-02)"
    url: https://github.blog/changelog/2026-07-02-issue-fields-are-now-generally-available/
  - group: 📖 公式ドキュメント
    label: GitHub Discussions
    url: https://docs.github.com/en/discussions
  - group: 📖 公式ドキュメント
    label: About Projects
    url: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects
  - group: 🎓 チュートリアル
    label: Quickstart for Projects
    url: https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects
  - group: 🎓 チュートリアル
    label: Quickstart for Discussions
    url: https://docs.github.com/en/discussions/quickstart
---

## 一言で

<div class="hero-quote hero-quote-green">
  <p>
    GitHub は 2009 年に <strong>Issues</strong> を導入し、作業の追跡をコードの隣に置いた。
  </p>
  <p>
    本章は <strong>コラボレーション</strong> を支える <strong>Issues・Discussions・Projects</strong> を一巡り。
  </p>
</div>

## Issues & Sub-issues

Issues はバグ・タスク・要望を 1 件ずつ追跡する基本単位。Sub-issues で大きな課題を分解し、親子の進捗を可視化できる。

| 機能 | できること | ここがいい |
| --- | --- | --- |
| 🐛 Issue | 1 件のタスクを追跡 | ラベル・担当・期日で整理 |
| 🧩 Sub-issue | 親 Issue を分割 | 進捗バーで完了率が見える |
| 📝 Templates | フォームで入力を構造化 | 抜け漏れない起票 |
| 🔗 リンク | PR で `Closes #123` | マージで Issue 自動クローズ |
| 🤖 Copilot 割当 | Issue を担当に指定 | 自動で PR を起票 |

> 💡 実例: <a class="retro-link" href="https://github.com/microsoft/vscode/issues" target="_blank" rel="noopener noreferrer">VS Code ↗</a> · <a class="retro-link" href="https://github.com/rust-lang/rust/issues" target="_blank" rel="noopener noreferrer">Rust ↗</a> · <a class="retro-link" href="https://github.com/vercel/next.js/issues" target="_blank" rel="noopener noreferrer">Next.js ↗</a> · <a class="retro-link" href="https://github.com/github/docs/issues" target="_blank" rel="noopener noreferrer">GitHub Docs ↗</a>

## Issue Fields（NEW）

Issue に **構造化された型付きメタデータ** を付与する仕組み。2026-07-02 に **一般提供（GA）**。全 Organization に既定で 4 フィールド（`Priority`・`Effort`・`Start date`・`Target date`）が用意され、Repository 横断で優先度・工数・期日を **一貫して検索・集計** できる。

| フィールド | 型 | 用途 |
| --- | --- | --- |
| 🔺 Priority | 単一選択 | 優先度を統一表記で管理 |
| ⏱️ Effort | 数値 / 選択 | 見積・工数を記録 |
| 📅 Start / Target date | 日付 | 開始・期限を追跡 |
| 🛠️ カスタム | 任意 | 組織独自の値を追加 |

**Public Preview からの進化:**

- 📋 Issues 一覧に **フィールド値を直接表示** — 開かずに優先度・工数を一覧で確認
- 🌐 **Public Project 対応** — 可視性を制御しつつ、ログアウト中でも公開フィールドを閲覧可
- 🤖 **MCP 連携** — Copilot が Issue の作成・更新時にフィールド値を読み書き
- 🌏 フィールド名が **非英語文字** に対応（Issue types と同等）

> ⚙️ 設定: 組織管理者は **Settings › Planning › Issue fields** からフィールドの追加・カスタマイズ、Issue type ごとの表示設定が可能。

## Discussions

質問・アイデア・お知らせなど「答えが 1 つに決まらない会話」の場。Issues がタスク追跡なら、Discussions は対話の場所。

- 💬 Q&A 形式で **ベストアンサー** を選べる
- 📣 リリースや方針の **アナウンス** に最適
- 🗳️ ポーリングでチームの意見を集約
- 🔄 議論が固まったら Issue に昇格できる

> 💡 実例: <a class="retro-link" href="https://github.com/orgs/community/discussions" target="_blank" rel="noopener noreferrer">GitHub Community ↗</a> — GitHub 自身が Discussions で運営。

## Project Planning

Projects はスプレッドシート/ボード/ロードマップで Issues・PR を横断管理するプランニングツール。

- 📋 Table / Board / Roadmap の 3 ビュー
- 🏷️ カスタムフィールド (優先度・見積・期日)
- 🤖 ワークフローで自動でステータス更新
- 📊 Insights で進捗をグラフ化

> 💡 実例: <a class="retro-link" href="https://github.com/orgs/github/projects/4247" target="_blank" rel="noopener noreferrer">GitHub Public Roadmap ↗</a> — 公開 Project でロードマップを運用。

## ★ 使いどころ

会話 → 計画 → 実装が地続きになるのが最大の強み。

| 段階 | 道具 |
| --- | --- |
| 💬 相談 | Discussions |
| 🧩 分解 | Issue + Sub-issues |
| 📋 計画 | Projects |
| 🚀 実装 | PR (Issue に自動リンク) |

> 🎯 全部 GitHub 内で完結 = 別ツール往復ゼロ。これがチーム速度の核。
