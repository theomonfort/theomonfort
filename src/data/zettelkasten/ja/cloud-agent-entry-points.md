---
title: "Cloud Agent の起動方法"
---

**Cloud Agent の起動方法**により、開発者は作業の発生場所から非同期の [[Copilot Cloud Agent]] タスクを開始できます。

## Cloud Agent を起動する方法

- **GitHub Issues**: Issue を `Copilot` に直接割り当てます。Issue のタイトルと本文がタスクの仕様になります。
- **GitHub.com の Agents パネルと PR**: リポジトリの **Agents** タブから開始するほか、Copilot Code Review のフィードバックをワンクリックで適用（`2026-05-19`）、失敗した Actions ワークフローの修正（`2026-05-18`）、マージ競合の 3 クリックでの解決（`2026-04-13`）ができます。
- **VS Code**: [[VS Code Session Targets]] または [[VS Code Agents Window]] で `Cloud` に切り替えます。
- **Copilot CLI**: [[CLI Slash Commands & Fleet]] から `/delegate` を実行します（委任先は Copilot ハーネスのみ）。
- **REST API**: Cloud Agent のタスクをプログラムで起動できます（`2026-05-13`）。
