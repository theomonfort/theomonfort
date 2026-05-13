---
title: エージェンティック・ワークフロー
titleEn: Agentic Workflow
summary: GitHub Actions の上で AI エージェントを走らせる新しい自動化。Markdown に「やってほしいこと」を自然言語で書くだけで、判断と行動を伴うワークフローが動く。
icon: 🔄
color: green
order: 16
category: operate
related: ['cloud-agent', 'mcp', 'agent-skills', 'instructions']
links:
  - label: gh-aw CLI（GitHub）
    url: https://github.com/github/gh-aw
  - label: 公式ドキュメント（gh-aw）
    url: https://github.github.io/gh-aw/introduction/overview/
  - label: Peli's Agent Factory（Blog）
    url: https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/
  - label: githubnext/agentics（サンプル集）
    url: https://github.com/githubnext/agentics
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Agentic Workflow</strong> は <strong>GitHub Actions の上で AI エージェント</strong> が作業を自動化する仕組み。
  </p>
  <p>
    cron や issue / PR イベントをきっかけに、<strong>文脈を読み、判断し、実行する</strong>。
  </p>
</div>

## 仕組み

### 概要
- GitHub Actions 上で **AI エージェント** が作業を自動化
- 現在 <a href="https://github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview/" target="_blank" rel="noopener noreferrer" class="retro-link">テクニカルプレビュー中</a>（2026 年 2 月 13 日発表）

### 構成要素

- ⚡ **トリガー** — `schedule (cron)` / `issue` / `PR` / `comment` / `@mention` など Actions と同じ
- 📄 **記述** — `.github/workflows/NAME.md` に **自然言語の Markdown** で「やってほしいこと」を書く
- 🤖 **エージェント** — Copilot / Claude / Codex などをランナー上で起動
- 🔌 **MCP / ツール** — エージェントが GitHub API・外部サービスを呼び出して実作業
- 🛡️ **safe-outputs** — デフォルト **read-only**。書き込みは PR / コメント / Label など **検証済みの境界** 経由のみ

## 何ができるか

| ユースケース | 何をする |
| --- | --- |
| 🏷️ **Issue Triage** | 新しい issue を読み、**ラベル付け・優先度判定・担当者提案** を自動化。曖昧なら追加情報をリクエスト |
| 📚 **Wiki Generator** | コードベースを定期スキャンし、**Wiki / README を自動生成・更新** |
| 🔍 **CI Failure Analyst** | 失敗した CI を読み解き、**原因を特定して PR にコメント** |
| 📝 **Docs Maintainer** | 古いリンク・例・API 説明を検出し、**最新の実装に合わせて修正 PR** を起こす |

> 🧪 サンプル集 <a href="https://github.com/githubnext/agentics" target="_blank" rel="noopener noreferrer" class="retro-link">githubnext/agentics</a> に動くテンプレートが揃っている。コピペで動かせる。<br />📝 開発者の実例ブログ <a href="https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/" target="_blank" rel="noopener noreferrer" class="retro-link">Peli's Agent Factory</a> も最初に読むと雰囲気が掴める。

## 始め方（4 ステップ）

1. **Step 1 — CLI 拡張をインストール** — `gh extension install github/gh-aw`
2. **Step 2 — Markdown を書く** — `.github/workflows/NAME.md` にトリガーと指示を記述
3. **Step 3 — コンパイル** — `gh aw compile` で `NAME.lock.yml` を生成
4. **Step 4 — コミット & push** — lock ファイルを含めて push、以降は Actions が自動起動

```yaml
---
on:
  issues:
    types: [opened]
permissions: read-all
safe-outputs:
  add-comment:
---

# Issue Clarifier
新しく開かれた issue を読み、要件が曖昧なら
- 何が起きているのか / 再現手順 / 期待される挙動
の 3 点を確認するコメントを投稿せよ。明確なら何もしない。
```

> ⚠️ **lock ファイルは Git にコミット**。これが実際に動く Actions ワークフローで、監査・レビューの対象。
