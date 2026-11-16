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
  hex: "#86efac"
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
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-your-organization
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

<div class="hero-quote">
  <p>
    GitHub は 2009 年に <strong>Issues</strong> を導入し、作業の追跡をコードの隣に置いた。
  </p>
  <p>
    本章は <strong>コラボレーション</strong> を支える <strong>Issues・Discussions・Projects</strong> を一巡り。
  </p>
</div>

## <span class="slide-heading-text">Issues & Sub-issues</span> <span class="slide-heading-links" aria-label="実例"><a class="h2-doc" href="https://github.com/microsoft/vscode/issues" target="_blank" rel="noopener noreferrer">VS Code ↗</a><a class="h2-doc" href="https://github.com/rust-lang/rust/issues" target="_blank" rel="noopener noreferrer">Rust ↗</a><a class="h2-doc" href="https://github.com/vercel/next.js/issues" target="_blank" rel="noopener noreferrer">Next.js ↗</a><a class="h2-doc" href="https://github.com/github/docs/issues" target="_blank" rel="noopener noreferrer">GitHub Docs ↗</a></span>

Issues はバグ・タスク・要望を 1 件ずつ追跡する基本単位。Sub-issues で大きな課題を分解し、親子の進捗を可視化できる。

| 機能 | できること | ここがいい |
| --- | --- | --- |
| 🐛 Issue | 1 件のタスクを追跡 | ラベル・担当・期日で整理 |
| 🧩 Sub-issue | 親 Issue を分割 | 進捗バーで完了率が見える |
| 📝 Templates | フォームで入力を構造化 | 抜け漏れない起票 |
| 🔗 リンク | PR で `Closes #123` | マージで Issue 自動クローズ |
| 🤖 Copilot 割当 | Issue を担当に指定 | 自動で PR を起票 |

## Issue Fields（NEW） <a class="h2-doc" href="https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-issue-fields" class="demo-toggle" /><label class="h2-demo" for="demo-issue-fields">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-issue-fields" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Issue fields</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-issue-fields" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li><p class="demo-step-title">組織の設定を開く</p><p>組織管理者として <a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/issue-fields" target="_blank" rel="noopener noreferrer">theomonfort-org の Issue fields ↗</a> を開く。場所は <code class="demo-path">Settings › Planning › Issue fields</code>。</p></li>
<li><p class="demo-step-title">フィールドを確認する</p><p><code class="demo-path">Priority</code> などの既存フィールドを開き、名前・型・選択肢を確認する。フィールドの追加・カスタマイズはこの画面から行う。</p></li>
<li><p class="demo-step-title">ISSUE TYPE ごとの表示を確認する</p><p><code class="demo-path">Pin to types</code> で、どの Issue type に表示するかを確認する。</p><p class="demo-out">対応する type の Issue では、共通のフィールドを使って優先度・工数・期日を整理できる。</p></li>
</ol>
</div>
</div>

Issue に **構造化された型付きメタデータ** を付与する仕組み。2026-07-02 に **一般提供（GA）**。全 Organization に既定で 4 フィールド（`Priority`・`Effort`・`Start date`・`Target date`）が用意され、Repository 横断で優先度・工数・期日を **一貫して検索・集計** できる。

| フィールド | 型 | 既定で付く type | 用途 |
| --- | --- | --- | --- |
| 🔺 Priority | 単一選択 | 全 type | 優先度を統一表記 |
| ⏱️ Effort | 数値 / 選択 | Bug / Task / Feature | 見積・工数 |
| 📅 Start / Target date | 日付 | Feature のみ | 開始・期限 |
| 🛠️ カスタム | 任意 | — | 組織独自の値 |

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

> 💡 実例: <a class="retro-link" href="https://github.com/orgs/vitejs/projects/1" target="_blank" rel="noopener noreferrer">Vite Team Board ↗</a>（OSS が公開 Project でタスクを管理）。

## ★ 使いどころ

会話 → 計画 → 実装が地続きになるのが最大の強み。

| 段階 | 道具 |
| --- | --- |
| 💬 相談 | Discussions |
| 🧩 分解 | Issue + Sub-issues |
| 📋 計画 | Projects |
| 🚀 実装 | PR (Issue に自動リンク) |

> 🎯 全部 GitHub 内で完結 = 別ツール往復ゼロ。これがチーム速度の核。
