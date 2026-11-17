---
title: Codespaces
titleEn: Codespaces
summary: クラウド上にホストされる、カスタマイズ可能なリモート開発環境。AI を"安全に閉じ込めて"実験・作業できる、AI駆動開発の理想的な遊び場。
icon: /theomonfort/github-vscode-mark.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 17
category: develop
related: ['cloud-agent', 'agentic-workflow', 'cli']
links:
  - group: GitHub Docs
    label: Codespaces (overview)
    url: https://github.com/features/codespaces
  - group: GitHub Docs
    label: Codespaces documentation
    url: https://docs.github.com/en/codespaces
  - group: GitHub Docs
    label: Choosing the machine type for your codespace
    url: https://docs.github.com/en/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace
  - group: Dev Containers
    label: devcontainer.json reference
    url: https://containers.dev/
  - group: Dev Containers
    label: Introduction to dev containers (GitHub Docs)
    url: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
  - group: 📰 Recent Changelog
    label: "Codespaces is now GA for GitHub Enterprise with data residency (2026-04-01)"
    url: https://github.blog/changelog/2026-04-01-codespaces-is-now-generally-available-for-github-enterprise-with-data-residency
  - group: 📰 Recent Changelog
    label: "Codespaces with data residency now available in Japan (2026-03-19)"
    url: https://github.blog/changelog/2026-03-19-codespaces-with-data-residency-now-available-in-japan
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Codespaces</strong> は、GitHub がクラウドでホストする <strong>すぐ使える・設定可能な VS Code 開発環境</strong>。
  </p>
  <p>
    ブラウザを開けば、数秒で <strong>フル開発環境</strong> が立ち上がる。協働者の多いリポジトリで <strong>全員にまったく同じ環境</strong> を配りたいとき、あるいは AI を安全に試す <strong>サンドボックス</strong> として最適。
  </p>
</div>

## 特徴 <a class="h2-doc" href="https://docs.github.com/en/codespaces/about-codespaces/deep-dive" target="_blank" rel="noopener noreferrer">📖 Docs</a>

どこから接続しても、コードとツールは **同じクラウド開発環境** で動く。

<figure class="codespaces-workspace" aria-label="Codespace への 3 つの接続方法">
<div class="codespaces-diagram">
<ul class="codespaces-access" aria-label="接続方法">
<li>
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="18" rx="1"/><path d="M2 8H22M6 5.5H6.1M9 5.5H9.1"/></svg>
<div><strong>ブラウザ</strong><span>github.com で開く</span></div>
</li>
<li>
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21H16M12 17V21M9 8L6 10L9 12M15 8L18 10L15 12"/></svg>
<div><strong>VS Code Desktop</strong><span>リモート接続</span></div>
</li>
<li>
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="18" rx="1"/><path d="M6 8L10 12L6 16M13 16H18"/></svg>
<div><strong>GitHub CLI</strong><code>gh codespace ssh</code></div>
</li>
</ul>
<svg class="codespaces-connectors" viewBox="0 0 80 292" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<defs><marker id="codespaces-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0L10 5L0 10Z"/></marker></defs>
<path class="codespaces-branches" d="M0 42H32V250H0M0 146H78" marker-end="url(#codespaces-arrow)"/>
</svg>
<span class="codespaces-stacked-arrow" aria-hidden="true">↓</span>
<div class="codespaces-container">
<div class="codespaces-container-head"><h3>自分の Codespace</h3><span>Docker 開発コンテナ</span></div>
<div class="codespaces-config"><code>devcontainer.json</code><p>基本イメージ + features + 作成後のセットアップ</p></div>
<p class="codespaces-tools"><strong>事前設定：</strong>Copilot / MCP server / VS Code 拡張 / linter</p>
<p class="codespaces-repeatable">同じ設定から、誰でも同じ開発環境へ。</p>
</div>
</div>
<figcaption class="codespaces-compute">
<p><span>必要に応じて最大</span><strong>32 <span>core</span></strong><strong>128 <span>GB RAM</span></strong><strong>128 <span>GB ストレージ</span></strong></p>
<p>起動後もサイズ変更可能。重いビルドや並列実行に合わせて拡張。<span>利用状況とポリシーにより制限あり。2026-11-16 時点。</span></p>
</figcaption>
</figure>

## メリット

- 🚀 **セットアップ 0 分** — "Open in Codespaces" を押すだけ
- 👥 **全員同じ環境** — "自分のマシンでは動く" が消える
- 🌍 **どこからでもアクセス** — ブラウザさえあれば OK
- 💪 **非力なマシンでも OK** — 手元が古い PC でも、クラウド側で **最大 32 core / 128 GB RAM** を使える
- 🛡️ **AI を安全に隔離** — 壊れたら捨てて作り直す
- 🤖 **AI ツール pre-install** — Copilot CLI・MCP server・Skills を事前装備

