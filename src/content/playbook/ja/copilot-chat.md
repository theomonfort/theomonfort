---
title: Copilot in VS Code
titleEn: Copilot in VS Code
summary: VS Code の Chat view と Agents window で Copilot を使う。共通の harness と、ほかの Copilot 画面につながる session を活用する。
icon: /theomonfort/icons/copilot-chat.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 3.5
category: develop
related: ['mcp', 'instructions', 'cli', 'cloud-agent', 'partner-agent', 'copilot-app']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Copilot on GitHub.com and GitHub Mobile
    url: https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github
  - group: 📖 公式ドキュメント
    label: VS Code Chat view and CLI sessions
    url: https://code.visualstudio.com/docs/agents/run/chat-view
  - group: 📖 公式ドキュメント
    label: Move from the Local to the Copilot harness
    url: https://code.visualstudio.com/docs/agents/run/move-to-copilot
  - group: 📖 公式ドキュメント
    label: Chat controls and shortcuts
    url: https://code.visualstudio.com/docs/chat/chat-overview
  - group: 📖 公式ドキュメント
    label: Choose an agent harness
    url: https://code.visualstudio.com/docs/agents/run/agent-harnesses
  - group: 📖 公式ドキュメント
    label: Remote agent hosts in VS Code
    url: https://code.visualstudio.com/docs/agents/run/remote-agent-sessions
  - group: 📖 公式ドキュメント
    label: Copilot CLI remote control and reconnection
    url: https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-remote-control
  - group: 📰 発表
    label: "Connected Copilot cloud experience (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/
  - group: 📰 発表
    label: "VS Code: Copilot harness by default (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/
  - group: 🤖 Models
    label: Supported AI models in GitHub Copilot
    url: https://docs.github.com/copilot/reference/ai-models/supported-models
  - group: 🤖 Models
    label: GitHub Copilot Fusion
    url: https://docs.github.com/en/copilot/concepts/models/copilot-fusion
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>GitHub Copilot</strong> は、<strong>VS Code</strong>、<strong>GitHub.com</strong>、<strong>GitHub Mobile</strong>、<strong>Copilot CLI</strong>、<strong>GitHub Copilot app</strong> で使える。
  </p>
  <p>
    ここでは <strong>VS Code</strong> に注目。コードの横で使う <strong>Chat view</strong> と、複数プロジェクトを扱う <strong>Agents window</strong>。
  </p>
</div>

## 既定の Copilot harness <a class="h2-doc" href="https://code.visualstudio.com/docs/agents/run/move-to-copilot" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2026-10-28** から、CLI / app とランタイムを共有する **Copilot** が既定。**Local** は従来のエディター専用 harness。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Sandbox と assisted permissions</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/move-to-copilot#_why-move-to-the-copilot-harness" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">安全に実行</span><span class="ctl-v">設定したファイルとネットワークの境界内で build / test。Assisted permissions で日常的な呼び出しを承認し、それ以外は確認する。</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">Copilot Fusion</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agent-customization/language-models#_use-copilot-fusion" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">モデル選択</span><span class="ctl-v">タスクに合うモデルの選択と、作成からレビューまでの連携を任せる。</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔄</span><span class="ctl-name">Agents window と cloud session</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/move-to-copilot#_continue-between-interfaces" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">作業を継続</span><span class="ctl-v">Agents window で複数プロジェクトを管理し、エディターで継続。cloud sandbox なら PC を閉じても作業が続く。</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔌</span><span class="ctl-name">Copilot connectors</span><span class="ctl-when">Preview</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agent-customization/copilot-connectors" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">Context</span><span class="ctl-v">MCP server を自分で設定せずに、チームのサービスへ接続する。</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🎨</span><span class="ctl-name">Canvases</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/canvases" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">一緒に操作</span><span class="ctl-v">タスクボードや対話型の図を使う。<code>chat.canvases.enabled</code> を有効にして session を開始。</span></p></div>
</details>
<details class="ctl-item" name="copilot-harness">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🏢</span><span class="ctl-name">組織のガバナンス</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/enterprise/manage-ai-settings" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">管理と強制</span><span class="ctl-v">ファイル、ネットワーク、権限をランタイムで制限。モデル / effort の初期値を設定し、承認済み skills / tools / hooks を plugins で配布。</span></p></div>
</details>
</div>
</div>

## VS Code のショートカット <a class="h2-doc" href="https://code.visualstudio.com/docs/chat/chat-overview" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Chat を開く: **Mac `⌃⌘I`** / **Windows & Linux `Ctrl+Alt+I`**（**2026-11-06 時点**）。

| ショートカット / 入口 | 何ができる？ |
| --- | --- |
| **`/`**、例: **`/plan`** | こちらも試してみよう！ `/chronicle` `/env` `/compact` `/rename` `/vscode-pet` `/yolo` `/create-canvas` |
| **`#`** / **Add Context (+)** | ファイル、symbol、画像、issue、PR を添付 |
| <img src="/theomonfort/icons/vscode-extensions.svg" alt="" width="24" height="24" style="display:inline-block;width:1em;height:1em;vertical-align:-0.15em" title="Extensions icon by Microsoft (Codicons), CC BY 4.0" /> **Chat: Open Customizations** | Skills、agents、instructions、hooks、MCP、plugins を管理 |

Copilot harness では **`@` chat participants は非推奨で非対応**。直接質問して context を添付する。

## VS Code から別の session へ <a class="h2-doc" href="https://code.visualstudio.com/docs/agents/run/agent-harnesses" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| Session | 始め方 |
| --- | --- |
| <a class="retro-link" href="/theomonfort/playbook/cli/">Copilot CLI ↗</a> | **Chat: New Copilot CLI Session**、またはターミナルで `copilot` |
| **Claude / Codex**<br/><a class="retro-link" href="/theomonfort/playbook/partner-agent/">Partner agents ↗</a> | **Session Target** → 利用可能な partner harness。設定とポリシーに従う |
| **Cloud**<br/><a class="retro-link" href="/theomonfort/playbook/cloud-agent/">Cloud Agent ↗</a> | **Session Target → Cloud**: 管理された sandbox で実行、後から再接続。<a class="retro-link" href="https://code.visualstudio.com/docs/agents/run/cloud-sandbox-sessions" target="_blank" rel="noopener noreferrer">Docs ↗</a> |

**モデル ≠ harness ≠ 実行場所**。Claude モデルを選んでも Copilot harness のまま。**Cloud** は実行先の選択。

遠隔操作は **既存のホスト** への接続であり、session を cloud sandbox に移す機能ではない。

## モデルの選び方 <a class="h2-doc" href="https://code.visualstudio.com/docs/agent-customization/language-models" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**おすすめは Copilot Fusion。** モデル選びと使い分けを任せる。利用可否はプラン、harness、組織ポリシーによって異なる。<a class="retro-link" href="https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/" target="_blank" rel="noopener noreferrer">Blog ↗</a> / <a class="retro-link" href="https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/" target="_blank" rel="noopener noreferrer">Universe 2026 ↗</a>

| 選択肢 | モデル例 / 設定 |
| --- | --- |
| **モデル系統** | **GPT / Codex**、**Claude**、**Gemini**、**MAI** |
| **BYOK** | Bring Your Own Key: 自分のキーで接続。<a class="retro-link" href="https://code.visualstudio.com/docs/agent-customization/language-models#_bring-your-own-language-model-key" target="_blank" rel="noopener noreferrer">設定方法 ↗</a> |
| **ローカルモデル** | 対応ハードウェアで Copilot の <a class="retro-link" href="https://code.visualstudio.com/docs/agent-customization/language-models#_use-on-device-models" target="_blank" rel="noopener noreferrer">on-device モデル ↗</a>、または **BYOK 経由の Ollama** |

## Copilot の利用画面 <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Copilot in the cloud** では、同じ cloud sandbox session をこれらの画面から継続できる（**2026-10-28** から）。<a class="retro-link" href="https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/" target="_blank" rel="noopener noreferrer">Changelog ↗</a>

<table class="compact-table">
<thead><tr><th>利用画面</th><th>入口</th></tr></thead>
<tbody>
<tr><td><strong>VS Code</strong></td><td><strong>Chat view</strong> / <strong>Agents window</strong></td></tr>
<tr><td><strong>GitHub.com</strong></td><td><strong>Copilot</strong> / repo の <strong>Agents</strong> タブ</td></tr>
<tr><td><strong>GitHub Mobile</strong></td><td><strong>Copilot</strong> タブ</td></tr>
<tr><td><strong>Copilot CLI</strong></td><td>ターミナルで <code>copilot</code></td></tr>
<tr><td><strong>GitHub Copilot app</strong></td><td>複数タスクを並行して進めるデスクトップ app</td></tr>
</tbody>
</table>

**有料プラン向け**で、ポリシーに従う。**ホストのオフライン ≠ session の失効。**

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="copilot-remote-lifecycle">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔌</span><span class="ctl-name">何をオンラインに保つ？</span><a class="ctl-doc" href="https://code.visualstudio.com/docs/agents/run/remote-agent-sessions" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">ホスト</span><span class="ctl-v">作業フォルダーを持つマシンと agent のプロセスを起動し、接続可能にしておく。デスクトップ VS Code がホストならアプリも起動したままにする。GitHub Actions の runner や管理型 cloud sandbox とは別。</span></p>
<p class="ctl-row"><span class="ctl-k">オフライン</span><span class="ctl-v">スリープや通信断では遠隔操作が使えなくなるが、自動的な失効や削除ではない。元のホストへ再接続する。同期された会話履歴は実行中のプロセスでも作業フォルダーのバックアップでもない。</span></p>
<p class="ctl-row"><span class="ctl-k">CLI の再開</span><span class="ctl-v">CLI を終了した場合、保存済み session と作業フォルダーがある元のマシンで <code>copilot --continue</code> / <code>copilot --resume</code> を使う。以前有効にした遠隔操作も再有効化される。<a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-remote-control#reconnection" target="_blank" rel="noopener noreferrer">CLI docs ↗</a></span></p>
</div>
</details>
</div>
</div>
