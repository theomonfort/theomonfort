---
title: "Copilot コネクター"
---

**Copilot コネクター**（パブリックプレビュー、`2026-10-28` の開始時点で検証済みの 26 サービス）は、GitHub 検証済みの MCP サーバーです。手動の MCP JSON 設定に代わり、シングルサインオンで外部のチームツールへ接続します。

## 対応環境と例

- **例**: **Slack** から API に関する決定を取得、**Figma** の UI デザインを確認、**Work IQ** 経由で Teams や SharePoint のドキュメントを取得。
- **有効化場所**: [[GitHub Copilot App]]、[[Copilot in VS Code]]、[[Copilot CLI]]、GitHub Web で `Customize -> MCP -> GitHub verified` を開きます（[[Connected Cloud Continuity]] 経由で Mobile も利用可能）。
- **実行境界**: Organization の MCP 許可リストポリシーに従います。ローカルセッションとクラウドサンドボックスで動作しますが、Actions 上の [[Cloud Agent MCP Configuration]] では**動作しません**。
