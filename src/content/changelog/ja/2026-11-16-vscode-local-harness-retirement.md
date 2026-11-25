---
title: "VS Code の Local harness が 2027 年 2 月に終了"
date: "2026-11-16"
summary: "Local harness は 2027 年 2 月に削除されます。Copilot harness への移行、カスタマイズの互換性確認、組織で管理するワークフローと制御の検証を進めましょう。"
category: copilot
source: "https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027/"
---

### Copilot harness への移行

VS Code 1.146 で Local harness が非推奨になり、2027 年 2 月に削除されます。VS Code 1.143 以降、新しいセッションでは Copilot harness が既定です。移行期間中は組織のポリシーで許可されている場合に Local harness を引き続き使えますが、新機能や改善は Copilot harness に重点が置かれます。

Copilot harness を選んでも、ファイルがクラウドに移動することはありません。Copilot CLI や GitHub Copilot app と同じコーディングエージェントのランタイムを使い、Agent Host プロセスが動作していれば、エディターと Agents ウィンドウの間で同じセッションを継続できます。エディターが提供するツールを使うには、エディターへの接続が必要です。

### 2027 年 2 月までに準備すること

- **ユーザー**：VS Code で新しいセッションを開始し、**Session Target** で **Copilot** を選択します。また、[カスタマイズの互換性を確認](https://code.visualstudio.com/docs/agent-customization/migrate-customizations)してください。harness を切り替えても、すべてのカスタマイズが自動変換されるわけではありません。
- **管理者**：`vscode.temporaryDefaultToLocalHarness` の例外設定を確認し、必要なワークフロー、権限制御、サンドボックス設定を Copilot harness で検証します。この一時設定も Local harness とともに削除されます。

[Local harness 移行ガイド](https://code.visualstudio.com/docs/agents/run/move-to-copilot)
