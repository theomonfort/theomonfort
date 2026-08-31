---
title: VS Code Agents ウィンドウ
titleEn: VS Code Agents Window
summary: すべてのワークスペースを 1 つのウィンドウから横断できる、チャット中心の専用 VS Code ウィンドウ。リポジトリごとにウィンドウを開かずに、全プロジェクトのエージェントセッションを 1 つのリストで開始・監視・レビューできる。
icon: 🪟
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 16.8
category: develop
related: ['copilot-app', 'copilot-chat', 'agentic-workflow', 'harness-engineering']
links:
  - group: 📖 公式ドキュメント
    label: Use the Agents window (Preview)
    url: https://code.visualstudio.com/docs/agents/run/agents-window
  - group: 📖 公式ドキュメント
    label: Manage agent sessions
    url: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
  - group: 📖 公式ドキュメント
    label: Choose a harness and code isolation
    url: https://code.visualstudio.com/docs/agents/run/agent-harnesses
  - group: 📖 公式ドキュメント
    label: Use the Chat view
    url: https://code.visualstudio.com/docs/agents/run/chat-view
  - group: 📖 公式ドキュメント
    label: Remote agent sessions
    url: https://code.visualstudio.com/docs/agents/run/remote-agent-sessions
  - group: 🔧 カスタマイズ
    label: Agent customizations editor
    url: https://code.visualstudio.com/docs/agent-customization/overview
  - group: 🌐 ブラウザ
    label: Agents window on the web
    url: https://insiders.vscode.dev/agents
  - group: 📰 発表
    label: "VS Code 1.120 リリースノート"
    url: https://code.visualstudio.com/updates/v1_120
---

## 一言で

<div class="hero-quote hero-quote-soon">
  <p>
    <strong>Agents ウィンドウ</strong>は、エディタではなく<strong>チャットを主役にした</strong>専用の VS Code ウィンドウ。
  </p>
  <p>
    <strong>1 つのウィンドウから全ワークスペースを横断</strong>できるので、高レベルのタスクを投げて複数エージェントをまとめて追える。
  </p>
</div>

> 🎯 Chat ビューは**開いているフォルダ 1 つ**に縛られる。Agents ウィンドウは**どこにも縛られず**、全ワークスペースが見える。
> ⚠️ VS Code **1.120** で登場した **Preview** 機能。セッション・設定・キーバインドは両者で共通。

## 開き方

入口は 4 つ。どれもメインのエディタウィンドウと並ぶ同じウィンドウを開く。

- 🖱️ タイトルバーの **Open in Agents** ボタン。
- ⌨️ コマンドパレットの **Chat: Open Agents window**。
- 💻 ターミナルから `code --agents`。
- 🌐 <a class="retro-link" href="https://insiders.vscode.dev/agents" target="_blank" rel="noopener noreferrer">insiders.vscode.dev/agents ↗</a> なら任意のデバイスから操作できる。

```bash
code --agents          # Agents ウィンドウを直接開く
```

> 💡 タイトルバーのボタンを誤って消しても大丈夫。右クリックの **Hide 'Open in Agents'** で隠れているだけで、コマンドパレットと CLI は使える。

## 5 つのパネル

レイアウトは固定で、各パネルは**フォーカス中のセッション**に追従する。

| パネル | 中身 |
| --- | --- |
| 📋 **セッション一覧** | ワークスペース別のセッション + ワークスペース非依存の **Chats** |
| 🔧 **Customizations** | エージェント・スキル・instructions・フック・MCP サーバー・プラグイン |
| 💬 **チャット領域** | アクティブセッションの会話とプロンプト入力 |
| 🔀 **Changes** | ブランチ / 未コミット / 全体 / 直前ターンの差分と Git 操作 |
| 📁 **Files** | セッションの worktree（変更ファイルだけでなく全ファイル） |

> 📝 **Quick chat** は `Chats` グループに入りワークスペースを持たないため、アクティブな間は **Files** と **Changes** が消える。

## セッションと分離

各セッションは**独立した git worktree** を持つので、並行タスクが同じファイルを奪い合わない。

- 🌿 **セッションごとに worktree**: 専用ブランチと独立した作業ツリー。
- 🧩 **セッションごとに harness**: 作成時に Copilot / Claude / Codex を選ぶ。
- 🎛️ **開始時に設定**: エージェント・モデル・権限レベル・分離モード。
- 🔭 **アクティブセッションが基準**: Files・Changes・ターミナル・タスク・統合ブラウザすべてがフォーカスに追従。ブラウザのタブとページ状態もセッション単位で保持される。

> 🔑 セッションはこのウィンドウ専用ではなく、通常の VS Code ウィンドウにも同じものが出る。詳細は <a class="retro-link" href="https://code.visualstudio.com/docs/agents/run/agent-harnesses" target="_blank" rel="noopener noreferrer">harness と code isolation ↗</a> を参照。

## 並列で動かす

2 つめのエージェントを起動しても、1 つめの文脈を失わない。

| ショートカット | 動作 |
| --- | --- |
| `Alt`+`Enter` | その場を離れずに**バックグラウンド**で実行 |
| `⌘N` / `Ctrl+N` | 新規セッション |
| `⌘K ⌘N` / `Ctrl+K Ctrl+N` | 新規 quick chat |
| `⌘1`–`⌘9` / `Ctrl+1`–`Ctrl+9` | グリッド位置でセッションにフォーカス |
| `⌘K ⌘W` / `Ctrl+K Ctrl+W` | 開いているセッションを全部閉じる |

**Open to the Side**、一覧からのドラッグ、`Alt`+クリックで並べて表示。**ピン留め**すればビューが置き換わらない。

> 💡 本命は `Alt`+`Enter`。長いタスクを投げつつ、いま読んでいたセッションにそのまま留まれる。

## ★ 使いどころ

**リポジトリをまたいで一斉に展開する**ことこそ、このウィンドウの存在理由。

セッション一覧をワークスペース別にまとめ、**New Session from Pull Request** で PR の差分とコメントを文脈に持つセッションを開く。worktree はその PR ブランチを追跡するので、レビューして追加コミットし、**Sync Changes** で同じ PR に戻せる。

worktree 作成時に自動実行される**タスク**を設定しておけば、新しい worktree は目を通す前に依存関係のインストールを済ませてくれる。

> 🎯 1 ウィンドウ・N リポジトリ・N エージェント。様子を見るためだけにプロジェクトごとの VS Code ウィンドウを開く必要がなくなる。

## 立ち位置

同じエージェントでも、**どこから指示するか**で役割が変わる。

| 面 | 対象範囲 | 得意なこと |
| --- | --- | --- |
| 🪟 **Agents ウィンドウ** | **全ワークスペース同時** | プロジェクト横断の並列オーケストレーション |
| 💬 **Chat ビュー** | 開いているフォルダ | 編集中のコードに寄り添う |
| 🖥️ **Copilot App** | 専用デスクトップアプリ | GitHub ネイティブなトリアージ〜マージ |
| ⌨️ **Copilot CLI** | ターミナル | スクリプトと CI |

> ⚠️ **Preview の制限**: multi-root セッション非対応、Copilot Cloud セッションは GitHub リポジトリ限定、エージェント選択に plan agent がない（`/plan` を使う）、拡張機能は `extensions.supportAgentsWindow` での opt-in が必要。
> 💡 <a class="retro-link" href="/theomonfort/playbook/copilot-app">Copilot App ↗</a> と <a class="retro-link" href="/theomonfort/playbook/copilot-chat">Copilot Chat ↗</a> も参照。
