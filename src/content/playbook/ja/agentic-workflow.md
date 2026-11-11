---
title: エージェンティック・ワークフロー
titleEn: Agentic Workflow
summary: GitHub Actions の上で AI エージェントを走らせる新しい自動化。Markdown に「やってほしいこと」を自然言語で書くだけで、判断と行動を伴うワークフローが動く。
icon: /theomonfort/icons/agentic-workflow.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 16
category: operate
related: ['cloud-agent', 'mcp', 'agent-skills', 'instructions']
links:
  - label: gh-aw CLI（GitHub）
    url: https://github.com/github/gh-aw
  - label: 公式ドキュメント（gh-aw）
    url: https://github.github.io/gh-aw/introduction/overview/
  - label: クイックスタートと認証
    url: https://github.github.com/gh-aw/setup/quick-start/
  - label: Peli's Agent Factory（Blog）
    url: https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/
  - label: githubnext/agentics（サンプル集）
    url: https://github.com/githubnext/agentics
  - label: gh-aw Wizard（ワークフロー生成）
    url: https://githubnext.github.io/gh-aw-wizard/
  - group: 📰 Recent Changelog
    label: "GitHub Agentic Workflows generally available (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available
  - group: 📰 Recent Changelog
    label: "Agentic workflows no longer need a personal access token (2026-06-11)"
    url: https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/
  - group: 📰 Recent Changelog
    label: "View Agentic Workflow configs in the Actions run summary (2026-03-26)"
    url: https://github.blog/changelog/2026-03-26-view-agentic-workflow-configs-in-the-actions-run-summary
---

## 一言で

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Agentic Workflow</strong> は <strong>GitHub Actions の上で AI エージェント</strong> が作業を自動化する仕組み。
  </p>
  <p>
    cron や issue / PR イベントをきっかけに、<strong>文脈を読み、判断し、実行する</strong>。
  </p>
</div>

## 仕組みと GA の提供範囲 <a class="h2-doc" href="https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2026-10-28 に GA**。GitHub.com の Free、Team、Enterprise が対象。標準の Copilot エンジンには **Copilot ライセンス**が必要。

| 構成 | 設定するもの |
| --- | --- |
| 記述 | Markdown の指示 + Actions のトリガー |
| 実行 | Copilot などのエージェント、MCP / ツール |
| 制御 | 原則 read-only、書き込みは検証済み `safe-outputs` 経由 |

既存の **runner group と Actions ポリシー**を引き継ぐ。

> **Org の Copilot を PAT なしで利用:** “Allow use of Copilot CLI billed to the organization” を有効化し、`copilot-requests: write` を付与。他のエンジンは個別の認証が必要。

## 何ができるか

| ユースケース | 何をする |
| --- | --- |
| 🏷️ **Issue Triage** | 新しい issue を読み、**ラベル付け・優先度判定・担当者提案** を自動化。曖昧なら追加情報をリクエスト |
| 📚 **Wiki Generator** | コードベースを定期スキャンし、**Wiki / README を自動生成・更新** |
| 🔍 **CI Failure Analyst** | 失敗した CI を読み解き、**原因を特定して PR にコメント** |
| 📝 **Docs Maintainer** | 古いリンク・例・API 説明を検出し、**最新の実装に合わせて修正 PR** を起こす |

> 🧪 サンプル集 <a href="https://github.com/githubnext/agentics" target="_blank" rel="noopener noreferrer" class="retro-link">githubnext/agentics</a> に動くテンプレートが揃っている。コピペで動かせる。<br />📝 開発者の実例ブログ <a href="https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/" target="_blank" rel="noopener noreferrer" class="retro-link">Peli's Agent Factory</a> も最初に読むと雰囲気が掴める。

## 始め方（4 ステップ） <a class="h2-doc" href="https://github.github.com/gh-aw/setup/quick-start/" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="code-agentic-workflow" class="demo-toggle" /><label class="h2-demo h2-info" for="code-agentic-workflow">&lt;/&gt; CODE</label>

<div class="demo-panel is-info">
<label class="demo-scrim" for="code-agentic-workflow" aria-label="workflow の例を閉じる"></label>
<div class="demo-window" role="group" aria-label="Issue の要件を確認する workflow の例">
<div class="demo-head"><span class="demo-tag">CODE</span><span class="demo-name">Issue clarifier</span><label class="demo-close" for="code-agentic-workflow" aria-label="閉じる">&#10005;</label></div>
<div class="info-body">
<p><code>.github/workflows/issue-clarifier.md</code> として保存。この例は Copilot の Org 課金を使うため、先にスライド 2 のポリシーを有効化する。</p>

```yaml
---
on:
  issues:
    types: [opened]
permissions:
  contents: read
  issues: read
  copilot-requests: write
safe-outputs:
  add-comment:
---

新しく開かれた issue を読み、要件が曖昧なら、
実際の挙動、再現手順、期待する挙動を確認する。
明確ならコメントしない。
```

<p><code>gh aw compile</code> で生成した YAML をレビューし、両方をコミットする。<code>NAME.lock.yml</code> は実行される workflow であり、Actions の依存関係を固定する <code>actions.lock</code> とは別物。</p>
</div>
</div>
</div>

1. **導入:** `gh extension install github/gh-aw`
2. **記述:** <code>.github/<wbr>workflows/<wbr>NAME.md</code> にトリガーと指示を書く。
3. **生成:** `gh aw compile` で `NAME.lock.yml` を作る。
4. **両方をレビューして push**。Actions で実行結果を確認。

**実行前に:** Actions を有効化し、使うエンジンの認証を設定する。完全な例は **CODE** ボタンから確認できる。
