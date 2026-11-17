---
title: クラウドエージェント
titleEn: Cloud Agent
summary: IDEを離れても夜通し働く"分身"。Issue を投げれば GitHub Actions ランナー上で実装し、検証まで終えた PR を持って帰ってくる。
icon: /theomonfort/icons/cloud-agent.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 15
category: develop
related: ['partner-agent', 'copilot-code-review', 'instructions', 'mcp']
links:
  - label: Customize the agent environment
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment
  - label: Extend Cloud Agent with MCP
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/extend-cloud-agent-with-mcp
  - label: Validation tools — docs
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings#enabling-or-disabling-built-in-code-quality-and-security-validation-tools
  - label: Claude & Codex on Cloud Agent (changelog)
    url: https://github.blog/changelog/2026-02-04-claude-and-codex-are-now-available-in-public-preview-on-github/
  - label: Validation tools 20% faster (changelog)
    url: https://github.blog/changelog/2026-04-10-copilot-cloud-agents-validation-tools-are-now-20-faster/
  - group: 📰 Recent Changelog
    label: "Apply Copilot code review feedback via Cloud Agent (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-easily-apply-copilot-code-review-feedback-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "One-click fixes for failing Actions via Cloud Agent (2026-05-18)"
    url: https://github.blog/changelog/2026-05-18-one-click-fixes-for-failing-actions-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "Start Cloud Agent tasks via the REST API (2026-05-13)"
    url: https://github.blog/changelog/2026-05-13-start-copilot-cloud-agent-tasks-via-the-rest-api
  - group: 📰 Recent Changelog
    label: "Fix merge conflicts in three clicks (2026-04-13)"
    url: https://github.blog/changelog/2026-04-13-fix-merge-conflicts-in-three-clicks-with-copilot-cloud-agent
  - group: 📰 Recent Changelog
    label: "Research, plan, and code with Cloud Agent (2026-04-01)"
    url: https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Cloud Agent</strong> は、GitHub 上で非同期に動く Copilot。
  </p>
  <p>
    Issue やタスクを渡すと、クラウドでコードを読み、実装し、検証し、PR として返してくれる。
  </p>
</div>

## できること

- **Background 実行**：IDE を閉じても、処理はクラウドで継続する。
- **Actions 上で実行**：セッションは GitHub Actions runner 上で動くため、実行ログを追えて透明性が高い。
- **チームで確認**：Cloud Agent のセッションはチーム全員が参照でき、作業内容を共有しやすい。
- **Repo 全域コンテキスト**：依存関係やモジュール構造を踏まえて編集できる。
- **検証まで実行**：テスト・ビルド・静的解析などを実行し、結果を PR に反映する。
- **複数ハーネス対応**：Anthropic Claude SDK や OpenAI Codex SDKも選択できる。(Partner Agent)

## 起動方法

- **VS Code から**：Chat の `Local` と書いてあるところから `Cloud` に切り替える。
- **GitHub.com から**：リポジトリ画面の **Agents パネル** から起動する。プロンプトとブランチ起点を指定するだけ。
- **Issue から**：Issue を **Copilot に assign** するだけ。タイトルと本文がそのままタスク仕様になる。
- **CLI から**：`/delegate` を使って Copilot Cloud Agent に作業を渡す。他の SDK / Harness には delegate できない。

## 環境カスタマイズ <span class="slide-heading-links"><input type="checkbox" id="demo-cloud-setup" class="demo-toggle" /><label class="h2-demo" for="demo-cloud-setup">Code</label></span>

<div class="demo-panel cloud-code-panel">
<label class="demo-scrim" for="demo-cloud-setup" aria-label="コード例を閉じる"></label>
<div class="demo-window" role="group" aria-label="Cloud Agent 環境設定のコード">
<div class="demo-head"><span class="demo-tag">CODE</span><span class="demo-name">copilot-setup-steps.yml</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-cloud-setup" aria-label="閉じる">&#10005;</label></div>
<div class="cloud-code-example">

```yaml
name: "Copilot Setup Steps"
on: workflow_dispatch
jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: {lfs: true}
      - uses: actions/setup-node@v4
        with: {node-version: "20"}
      - run: npm ci
      - run: pip install -r requirements.txt
    env:
      MY_API_BASE: https://api.example.com
```

</div>
</div>
</div>

リポジトリに **任意で** `.github/workflows/copilot-setup-steps.yml` を置くと、Cloud Agent の **GitHub Actions 環境を完全に制御** できる。未設定なら Ubuntu のデフォルト環境で依存を自動推測。

**カスタマイズできること：**

- 🛠️ ツール・依存関係の **事前インストール**（npm / pip / apt …）
- 💪 GitHub-hosted ランナーの **サイズ拡張**
- 🏠 **self-hosted ランナー** で実行
- 🪟 **Windows** 開発環境への切替（デフォルトは Ubuntu Linux）
- 📦 **Git LFS** の有効化
- 🔑 **環境変数** の設定
- 🔥 エージェント **ファイアウォール** の無効化・カスタマイズ

## MCP サーバーで外部ツールを追加 <span class="slide-heading-links"><a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/extend-cloud-agent-with-mcp" target="_blank" rel="noopener noreferrer">📖 Docs</a><a class="h2-demo" href="https://github.com/theomonfort-org/.github-private/settings/copilot/mcp" target="_blank" rel="noopener noreferrer">&#9658; DEMO</a></span>

**GitHub MCP と Playwright MCP はデフォルトで有効**。追加サーバーは、ローカルとは別の **クラウド専用設定** で管理する。

リポジトリの `Settings → Copilot → MCP servers` で設定する。共有された設定が、そのリポジトリの Cloud Agent セッションに適用される。

## 検証ツール（デフォルト ON）

Cloud Agent は生成コードに対し、PR 作成前に **4 つの検証** を自動実行。**問題を検出したら自前で修正を試みてから** PR を出す。

- **CodeQL Code scanning**
- **Copilot Code Review**
- **Secret Scanning**
- **Dependency Vulnerability checks**

> 💰 **無料で使える** ── GitHub Advanced Security ライセンスは **不要**。設定は `Settings → Copilot → Cloud agent → Validation tools` から ON/OFF 可能。

## チームでの活用イメージ

**退社前** ── 残った Issue を 3 件、Cloud Agent に assign して帰る。

**夜間** ── ランナー上で Cloud Agent が黙々と実装・自己検証。CodeQL も Code Review もパスしたものだけが PR になる。

**翌朝** ── レビュー待ちの PR が並んでいる。あなたの仕事は "書く" ではなく **"判断する"**。人間は意思決定に集中、機械は反復に集中 ── これが AI 駆動開発のチーム運用の最小単位。

## ワークフロー全体図

人は **Issue を整える・レビューする・マージする** だけ。実装と修正のループは Cloud Agent が回す。

<figure class="cloud-swimlane-figure" role="group" aria-labelledby="cloud-workflow-caption">
<div class="cloud-swimlane">
<div class="cloud-lane cloud-lane-agent"><strong>☁️ Cloud Agent</strong></div>
<div class="cloud-lane cloud-lane-human"><strong>👤 人（開発者）</strong></div>
<svg class="cloud-lane-connectors" viewBox="0 0 1100 360" aria-hidden="true">
<defs><marker id="cloud-lane-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 10 5 0 10z" fill="#93a8ff"/></marker></defs>
<g marker-end="url(#cloud-lane-arrow)">
<path d="M170 252H190V245H210"/><path d="M285 205V170H360V122"/><path d="M435 89H490"/>
<path d="M560 122V180H550V205"/><path d="M630 245H685V175H795V122"/><path d="M860 122V170H835V190"/>
<path d="M890 245H920V252H945"/><path d="M835 300V316H550V285"/>
<path class="cloud-next-connector" d="M1010 285V347H100V285"/>
</g>
</svg>
<div class="cloud-lane-node cloud-node-artifacts">成果物<br />作成</div>
<div class="cloud-lane-node cloud-node-pr">PR 作成</div>
<div class="cloud-lane-node cloud-node-fix">指摘を修正</div>
<div class="cloud-lane-node cloud-node-issue">Issue の<br />内容を調整</div>
<div class="cloud-lane-node cloud-node-assign">Copilot に<br />assign</div>
<div class="cloud-lane-node cloud-node-review">コメントで<br />レビュー</div>
<div class="cloud-lane-node cloud-node-decision"><span>完了？</span></div>
<div class="cloud-lane-node cloud-node-merge">マージ</div>
<span class="cloud-edge-label cloud-label-ok">OK</span>
<span class="cloud-edge-label cloud-label-feedback">修正 NG / 追加指摘</span>
<span class="cloud-edge-label cloud-label-next">次の Issue へ</span>
</div>
<figcaption id="cloud-workflow-caption" hidden>人が Issue を調整して assign し、Cloud Agent が成果物と PR を作成。人のレビュー指摘を Cloud Agent が修正し、人が完了を判断する。未完了なら追加指摘に戻り、完了ならマージして次の Issue へ進む。</figcaption>
</figure>
