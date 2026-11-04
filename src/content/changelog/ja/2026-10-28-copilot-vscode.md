---
title: "VS Code の Copilot：継続するエージェントとつながるセッション"
date: "2026-10-28"
summary: "同じセッションを複数クライアントで継続し、ローカルやリモートでエージェントを実行。Agents ウィンドウで複数のアプローチを比較し、カスタマイズも管理できます。"
category: copilot
event: universe-2026
status: "Universe 更新まとめ"
source: "https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases"
---

### 作業を止めずに続ける

- **クラウドセッションの継続**：VS Code で始めた作業を Copilot app、Mobile、github.com、CLI で再開できます。
- **Agent Host**：個々のエディターウィンドウからセッションを分離。Remote SSH や dev tunnels で別端末のエージェントも使えます。実行先の端末と Agent Host は起動しておく必要があります。
- **エディターと Agents ウィンドウ**：同じライブセッションのまま表示を切り替えます。`code agent host --github-environment` で端末を登録すると GitHub Mobile から操作できます。
- **共通の harness**：Microsoft Copilot SDK をベースにした Copilot harness が、両方の表示で新規セッションの既定になります。

### 比較とカスタマイズ

- **モデル比較（プレビュー）**：モデルや harness を並列実行し、Judge に結果の推薦を依頼したり、複数の案を統合したりできます。
- **Computer use（実験段階）**：macOS と Windows のアプリを操作。アプリごとの承認と組織の制御に対応します。
- **Customization Marketplace とコネクタ（プレビュー）**：スキル、MCP サーバー、プラグイン、外部サービスとの接続を探せます。Business と Enterprise では Editor preview features ポリシーの許可が必要です。
- **プラグイン制御**：管理者が必須化、禁止、マーケットプレイス制限を設定。リポジトリの既定値は、Enterprise ポリシーで強制しない限り推奨設定です。

[VS Code 1.144 リリースノート](https://code.visualstudio.com/updates/v1_144)
