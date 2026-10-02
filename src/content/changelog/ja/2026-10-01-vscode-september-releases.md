---
title: "VS Code 9 月リリース：定期タスクから PR マージまでエージェントに"
date: "2026-10-01"
summary: "VS Code 1.136〜1.140 のまとめ。Agents ウィンドウに Automations と Agent merge が登場し、実装から PR のマージまでをエージェントに任せやすくなりました。"
category: copilot
status: "VS Code 1.136〜1.140"
source: "https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases/"
demoUrl: "https://code.visualstudio.com/docs/agents/run/automations"
demo:
  - "準備：VS Code を最新版に更新し、Agents ウィンドウを開く。サイドバーに Automations が表示されなければ、chat.automations.enabled を有効化。"
  - "Automations → Create Automation を選び、デモ用リポジトリのワークスペースを指定。最初は Schedule を Manual にして、次のプロンプトで作成する。"
  - "現在のブランチで過去 24 時間のコミットを要約してください。機能追加、修正、メンテナンスに分け、コミットへの参照を付け、ドキュメント更新が必要そうな変更を指摘してください。ファイルは変更しないでください。"
  - "Run now で実行し、History から結果のセッションを開いて見せる。そのあと Schedule を Daily に変更できることを示す。実行中は PC が起動していて VS Code または Agent Host が動いている必要があり、実行ごとに利用量を消費する。"
---

### Agents ウィンドウ

- **Automations（プレビュー）**：定型タスクを毎時 / 毎日 / 毎週、または手動で実行。テンプレートか独自のプロンプトから作成し、`.automation.md` ファイルでチームと共有可能。
- **Agent merge（プレビュー）**：レビュー指摘、失敗したチェック、マージコンフリクト、ワークフローの再実行にエージェントが対応し、マージ可能になるまで繰り返す。`chat.agentMerge.enabled` を有効にし、Agents ウィンドウのセッションから開始。
- **PR 作成フォーム**：Copilot、Claude、Codex のセッションから、タイトルと説明を確認、編集し、ドラフトやマージ設定を選んで PR を作成。
- **Dev Container でセッション実行**：プロジェクトで設定したツールと依存関係でエージェントが作業。SSH、Tunnel、WSL のリモートホストにも対応。
- **セッション整理**：PR マージ後の Mark as Done 提案、自動クリーンアップ、対応が必要なセッションのアプリバッジ（いずれもプレビュー）。

### チャットと GitHub 連携

- **Issue / PR をコンテキストに追加**：Add Context から追加するか、新規セッションの入力欄に URL を貼り付け。説明文やコメントのコピペが不要に。
- **クイックチャットを後からプロジェクトへ**：ワークスペースなしで始めたチャットに、会話を保ったままローカルフォルダーを紐づけ。
- **HydraFusion も VS Code で**：対象ユーザーはプレビュー機能を有効にすると、モデルピッカーで選択可能（リサーチプレビュー）。詳しくは [9 月 30 日の HydraFusion](#2026-09-30-hydrafusion-vscode-app) を参照。

VS Code 1.136〜1.140 の更新から、エージェント関連の主な機能をピックアップしました。プレビュー機能は順次展開中のため、設定が既定で有効になっていない場合があります。

[VS Code リリースノート](https://code.visualstudio.com/updates) / [Agent merge の使い方](https://code.visualstudio.com/docs/agents/run/agents-window#_finish-a-pull-request-with-agent-merge)
