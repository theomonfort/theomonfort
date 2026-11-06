---
title: Copilot CLI
titleEn: Copilot CLI
summary: ターミナルに住むCopilot。IDEを選ばず、計画→実装→レビューを Shift+Tab だけで往復する"端末の中の同僚"。
icon: /theomonfort/icons/cli.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 14
category: develop
related: ['agent-skills', 'mcp', 'custom-agent', 'cloud-agent']
links:
  - label: GitHub Copilot CLI — Docs
    url: https://docs.github.com/copilot/github-copilot-in-the-cli
  - label: GitHub Copilot CLI — Overview
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview
  - label: Rubber Duck — cross-model second opinion
    url: https://github.blog/ai-and-ml/github-copilot/github-copilot-cli-combines-model-families-for-a-second-opinion/
  - label: Remote control CLI sessions (now GA)
    url: https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code
  - label: BYOK & Local models 対応
    url: https://github.blog/changelog/2026-04-07-copilot-cli-now-supports-byok-and-local-models/
  - group: 🖥️ TUI
    label: Browsing issues, pull requests, and gists from Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/browse-issues-prs-gists
  - group: 🖥️ TUI
    label: CLI command reference (/experimental, /theme)
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
  - group: 🛡️ Sandbox
    label: About local sandboxing
    url: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes
  - group: 🛡️ Sandbox
    label: About cloud sandboxes
    url: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes
  - group: 🛡️ Sandbox
    label: Using local sandboxing
    url: https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing
  - group: 🤖 非対話モード
    label: Running Copilot CLI programmatically
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically
  - group: 🤖 非対話モード
    label: Programmatic reference (full flag list)
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference
  - group: 🤖 非対話モード
    label: Automating tasks with Copilot CLI and GitHub Actions
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions
  - group: 📰 Recent Changelog
    label: "Cloud sandboxes: 一般提供開始 (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience
  - group: 📰 Recent Changelog
    label: "Local sandboxing: 一般提供開始 (2026-10-07)"
    url: https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available
  - group: 📰 Recent Changelog
    label: "Improved UI, Rubber Duck, scheduling & voice input (2026-06-02)"
    url: https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/
  - group: 📰 Recent Changelog
    label: "Remote control of CLI sessions — GA (mobile/web/VS Code) (2026-05-18)"
    url: https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code
  - group: 📰 Recent Changelog
    label: "Custom registry-based MCP allowlists (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-copilot-cli-supports-custom-registry-based-mcp-allowlists
  - group: 📰 Recent Changelog
    label: "GitHub Copilot CLI is now generally available (2026-02-25)"
    url: https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Copilot CLI</strong> は、ターミナルの中にいる Copilot。
  </p>
  <p>
    基本は VS Code の Copilot と同じように、質問・計画・編集・実行を手伝う。ただし CLI ならではの機能と Harness があるので、ここから一緒に見ていく。
  </p>
</div>

## 主要機能

ターミナル一枚に、フルスタックの AI 環境が乗る。

- **複数ファイルの文脈把握**：リポジトリ全体を一つのワークスペースとして扱う。
- **コード生成・編集**：ターミナルから修正し、差分を確認して承認できる。
- **コマンド実行**：ビルド・テスト・lint などを実行し、結果を読んで次に進む。
- **IDE を選ばない**：VS Code、Vim、SSH 先など、ターミナルがあれば使える。
- **Skills / MCP 対応**：必要な能力や外部ツールを追加できる。
- **非対話実行**：CI、cron、script から `copilot -p "..."` で実行できる。

## CLI と VS Code Chat の違い

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🖥️</span><span class="ctl-name">UI</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">とても軽い。ターミナル中心なので、コマンドを覚える必要があり、エディタ UI は最小限。一方で CLI をすぐ開けるので、folder、PowerPoint、Excel など手元の computer resource に対して作業しやすい。</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">画面上で選択肢・設定・ファイル移動・inline diff・debugger を扱いやすい。</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧪</span><span class="ctl-name">新機能の速さ</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v"><code>/limits</code>、<code>/fleet</code>、<code>/share</code>、Rubber Duck など、新しい実験が入りやすい。</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">より安定志向。CLI で育った良いアイデアを取り込んでいくことが多い。</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">Sub-agent</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">Explore、Task、Rubber Duck、Code Review など、built-in agent を多く持ち、native に起動できる。</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">現時点では限定的だが、少しずつ追いついている。</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧭</span><span class="ctl-name">Session management</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v"><code>/context</code>、<code>/compact</code>、<code>/session</code> などで、session を細かく制御しやすい。</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">改善中だが、今は CLI ほど細かくはない。</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔀</span><span class="ctl-name">Partner agent</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Copilot CLI</span><span class="ctl-v">Copilot CLI は Copilot の Harness 内で動く。Codex / Claude の Harness は使えず、使えるのはそれらの <strong>model</strong>。</span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">VS Code 内では、Copilot、Codex、Claude などの agent / extension を切り替えやすい。</span></p>
</div>
</details>
<details class="ctl-item" name="cli-vscode-comparison">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">コード検索</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">CLI / app</span><span class="ctl-v">ローカルのテキスト検索と、GitHub 上でインデックス済みのリポジトリのセマンティック検索。<a class="retro-link" href="https://github.com/github/copilot-cli/blob/main/changelog.md" target="_blank" rel="noopener noreferrer">CLI リリースノート ↗</a></span></p>
<p class="ctl-row"><span class="ctl-k">VS Code Chat</span><span class="ctl-v">Workspace のテキスト検索とセマンティック検索に加え、エディタの文脈やシンボル参照を利用。<a class="retro-link" href="https://code.visualstudio.com/docs/agents/reference/workspace-context" target="_blank" rel="noopener noreferrer">Docs ↗</a></span></p>
<p class="ctl-row"><span class="ctl-k">Blackbird</span><span class="ctl-v">GitHub 側のコード検索エンジン。エディタ専用のインデックスではない。<a class="retro-link" href="https://github.blog/engineering/architecture-optimization/the-technology-behind-githubs-new-code-search/" target="_blank" rel="noopener noreferrer">仕組み ↗</a></span></p>
</div>
</details>
</div>
</div>

## 強力なビルトインエージェント <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents#built-in-agents" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-cli-agent-definitions" class="demo-toggle" /><label class="h2-demo" for="demo-cli-agent-definitions">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-cli-agent-definitions" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Agent definitions</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-cli-agent-definitions" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">インストール済みのバージョンを確認</p>
<code class="demo-cmd">copilot --version</code>
<p class="demo-out">表示された CLI のバージョンを控える。</p>
</li>
<li>
<p class="demo-step-title">定義フォルダーを開く</p>
<p>ローカルの CLI インストール先で <code class="demo-path">definitions/</code> を探す。Apple silicon 搭載 Mac の例：</p>
<p><code class="demo-path">~/.copilot/pkg/darwin-arm64/&lt;version&gt;/definitions/</code></p>
<p><code class="demo-path">&lt;version&gt;</code> をインストール済みのバージョンに置き換える。場所は OS やインストール方法によって異なる。</p>
</li>
<li>
<p class="demo-step-title">エージェントの定義を読む</p>
<p><code class="demo-path">explore.agent.yaml</code> などの <code class="demo-path">*.agent.yaml</code> をエディタで開く。</p>
<p class="demo-out">インストール済みファイルは変更せず、ビルトインエージェントの定義を確認する。</p>
</li>
</ol>
</div>
</div>

Copilot CLI には、よくあるタスク向けのビルトインエージェントがある。**`/subagents`** で確認し、使うモデルを設定できる。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔎</span><span class="ctl-name">Explore</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">できること</span><span class="ctl-v">コードをメインの文脈に追加せず、素早くコードベースを分析し、コードについて質問できるようにする。</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛠️</span><span class="ctl-name">Task</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">できること</span><span class="ctl-v">テストやビルドなどのコマンドを実行し、成功時は短い要約、失敗時は完全な出力を返す。</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧠</span><span class="ctl-name">General purpose</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">できること</span><span class="ctl-v">すべてのツールと高度な推論が必要な複雑な複数ステップのタスクを、メイン会話とは別の文脈で処理する。</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📝</span><span class="ctl-name">Code review</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">できること</span><span class="ctl-v">本当に重要な問題だけを見つけることに集中してコード変更をレビューし、ノイズを最小化する。</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📚</span><span class="ctl-name">Research</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">できること</span><span class="ctl-v">コードベース、関連リポジトリ、Web を横断して深く調査し、引用付きの詳細レポートを作成する。</span></p></div>
</details>
<details class="ctl-item" name="cli-built-in-agents">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🦆</span><span class="ctl-name">Rubber duck</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body"><p class="ctl-row"><span class="ctl-k">できること</span><span class="ctl-v">複雑なタスクに対して建設的な批評役としてフィードバックを返す。Copilot CLI が自動的に使う。</span></p></div>
</details>
</div>
</div>

## Rubber Duck — クロスモデルレビュー

> 🦆 **Experimental**：メインモデルとは **異なるモデルファミリー** が「セカンドオピニオン」として、計画・実装・テストの各段階で独立レビュー。

```mermaid
flowchart LR
  User([👤 開発者])
  Main["🧠 Main Model<br/>例: Claude"]
  Out["📝 計画 / 実装 / テスト"]
  Duck["🦆 Rubber Duck<br/>例: GPT-5.4"]
  Final([✅ 検証済み出力])
  User --> Main
  Main --> Out
  Out -->|"独立レビュー"| Duck
  Duck -->|"盲点 / 前提誤り"| Main
  Main --> Final

  classDef user fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef main fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef duck fill:#1a1500,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef out fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  class User,Final user
  class Main main
  class Duck duck
  class Out out
```

**なぜ効く？** ── 同じモデルが自分の出力をチェックすると、**同じ前提・同じ盲点** に引っかかる。別ファミリーのモデルなら、訓練データも価値観も違うので **見えていなかったロジックエラー** を拾える。

## その他の便利コマンド

CLI は slash command で、モデル・共有・実験機能・環境情報などをすぐ確認できる。

| コマンド | 使いどころ |
|---|---|
| `/help` | 利用できるコマンドやショートカットを確認する。 |
| `/model` | 使用するモデルを確認・切り替える。 |
| `/ide` | VS Code などの IDE と接続する。 |
| `/share` | 現在のセッションを共有する。 |
| `/experimental` | 実験的な機能を確認・有効化する。 |
| `/chronicle` | セッションの流れや作業履歴を確認する。 |
| `/task` | background で動いている agent や task を確認する。 |
| `/fleet [PROMPT]` | 計画をサブタスクに分け、subagent で並列実行する。<a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet" target="_blank" rel="noopener noreferrer">Docs ↗</a> |
| `/limits set max-ai-credits N` | セッションの AI Credits 上限(soft cap)を設定する。<a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/set-session-limit" target="_blank" rel="noopener noreferrer">Docs ↗</a> |
| `/ask` | 作業を進める前に、質問として Copilot に相談する。 |
| `/env` | CLI が見ている環境情報を確認する。 |

> 💰 **エージェントは予算を把握している**：使用量・残量・上限が `<session_limits_status>` としてモデルに渡るので、寄り道を控え、最後の 1 回はツールを使わず進捗と残作業をまとめて止まる。`/fleet` の subagent も同じ上限を共有する。非対話では `--max-ai-credits N`。

## 🖥️ TUI(ターミナル UI)

`/experimental on` で、再設計されたターミナル UI を試せる。テーマ対応のセマンティックカラーを備え、`/theme` で確認できる。GitHub リポジトリ内では `Tab` キーで下の表のメニューを行き来できる。

| タブ | 中身 |
|---|---|
| **Session** | 通常の対話セッション(デフォルト) |
| **Issues** | リポジトリの Issue を一覧・閲覧 |
| **Pull requests** | PR を一覧・閲覧 |
| **Gists** | 自分の Gist を一覧・閲覧 |

> 📝 スクリーンリーダー対応をはじめ、ほかにも多くの UI 改善が入っている。詳しくは <a class="retro-link" href="https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/" target="_blank" rel="noopener noreferrer">changelog ↗</a>。

## 🛡️ Sandbox <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes" target="_blank" rel="noopener noreferrer">📖 Docs</a>

どちらも **一般提供済み** (2026-11-06 時点)。

| | 🖥️ ローカル Sandbox | ☁️ クラウド Sandbox |
|---|---|---|
| **GA** | 2026-10-07 | 2026-10-28 |
| **起動** | `/sandbox enable` | `copilot --cloud` (対話専用) |
| **実行環境** | macOS / Linux / 対応更新済みの Windows 11 | GitHub ホストの Linux。再開可能 |

ローカルは **デフォルト OFF**。ファイルツールのポリシー適用はベストエフォート、リモート MCP は対象外。クラウドは **Copilot 有料プラン** が必要。

## 非対話モード ★ <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically" target="_blank" rel="noopener noreferrer">📖 Docs</a>

1 つのプロンプトを実行して終了。**script、cron、バッチファイル、GitHub Actions** から定型作業を自動化。

<div class="det-widget">
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cli-programmatic" open>
<summary class="det-btn"><span class="det-icon" aria-hidden="true">▶️</span><span class="det-name">実行と出力</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Run &amp; output</span></p>
<p class="det-why"><code>copilot -p 'README.md を要約して' -s</code><br><br><code>-p</code> / <code>--prompt</code>: 1 ターン実行して終了。<br><code>-s</code>: 応答テキストだけを出力。パイプ向け。<br><code>--no-ask-user</code>: 確認質問を省略。</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛡️</span><span class="det-name">ツールの権限</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Permissions</span></p>
<p class="det-why">タスクに必要なツールだけ許可する:<br><code>--allow-tool='shell(npm:*), write'</code><br><br>Sandbox 外で <code>--allow-all</code> は使わない。<code>--no-ask-user</code> はツールの権限を付与しない。</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-name">認証</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Authentication</span></p>
<p class="det-why">優先順: <code>COPILOT_GITHUB_TOKEN</code> → <code>GH_TOKEN</code> → <code>GITHUB_TOKEN</code><br><br><b>Copilot Requests</b> 権限付きの <b>fine-grained PAT</b> を使用。classic PAT (<code>ghp_</code>) は非対応。</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎯</span><span class="det-name">再現性</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Repeatability</span></p>
<p class="det-why"><code>--model MODEL</code>: モデルを固定。<br><code>--share='./session.md'</code>: 会話ログを保存。<br><b>YES/NO</b> など出力形式も固定。対話モードで試してから <code>-p</code> で自動化する。</p>
</div>
</details>
<details class="det-pick" name="cli-programmatic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚙️</span><span class="det-name">ユースケース</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Use cases</span></p>
<p class="det-why">コミットメッセージとリリースノート。<br>lint 修正とテスト生成。<br><code>/review</code> による PR レビューと依存関係の監査。<br>README、JSDoc、翻訳。</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">項目を選択 ▸</p></div>
</div>
</div>
