---
title: "VS Code の Agents ウィンドウ"
---

**VS Code の Agents ウィンドウ**（VS Code `1.120` で提供、プレビュー）は、[[GitHub]] のチャット中心の専用ウィンドウです。[[Copilot in VS Code|VS Code の Copilot]]のように開いている1つのフォルダーに限定されず、すべてのワークスペースを同時に扱います。

## 開くための4つの方法

1. VS Code のタイトルバーで **Open in Agents** をクリックします。
2. コマンドパレットから **Chat: Open Agents window** を実行します。
3. ターミナルで `code --agents` を実行します。
4. [[Remote Agent Control|エージェントのリモート制御]]を使い、任意のデバイスのブラウザーで `insiders.vscode.dev/agents` を開きます。

## アーキテクチャと制約

- [[Agents Window Five Panels|Agents ウィンドウの5つのパネル]]、[[Git Worktree Isolation|Git Worktree による分離]]、[[VS Code Session Targets|VS Code のセッション実行先]]を1つの管理拠点から調整します。デスクトップの [[GitHub Copilot App]] に相当します。
- **プレビューの制限**：マルチルートセッションには非対応。Cloud セッションには GitHub 上のリポジトリが必要です。独立した計画モードのドロップダウン項目に代わり `/plan` を使い、VS Code 拡張機能は `extensions.supportAgentsWindow` で対応を明示します。
