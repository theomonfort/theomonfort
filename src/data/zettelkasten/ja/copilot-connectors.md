---
title: "Copilot コネクター"
---

**Copilot コネクター**（パブリックプレビュー、`2026-10-28` の開始時点で**検証済みの 26 サービス**）は、[[GitHub]] 検証済みの連携で、リモート HTTP の [[MCP Servers]] を基盤とします。手動の JSON 設定に代わり、GitHub が管理するセットアップとシングルサインオン認証を提供します。

## 手動の MCP サーバーと Copilot コネクター

| 観点 | 手動の MCP サーバー | Copilot コネクター |
| --- | --- | --- |
| **概要** | [[MCP Servers]] を通じた独自またはサードパーティのツール / コンテキスト | GitHub 検証済みで、すぐ使える MCP 連携（例: **Slack**、**Figma**、Teams / SharePoint 用の **Work IQ**） |
| **設定** | [[MCP Configuration]] を編集し、自分で認証を設定 | サービスを選び、OAuth / SSO で一度サインインしてアクセスを承認 |
| **利用可能な環境** | 設定した環境のみ | 対応環境間で自動再利用（[[Connected Cloud Continuity]] 経由の Mobile も含む） |
| **実行境界** | ローカル、IDE、または [[Cloud Agent MCP Configuration]] | ローカルとクラウドサンドボックスのセッション（Actions 上の [[Copilot Cloud Agent]] セッションは**対象外**） |

## 4 つの環境での有効化場所（[[MCP Allowlist Governance]] に従う）

- **Web / Cloud**: `github.com/copilot/customize`（カスタマイズページ）
- **[[GitHub Copilot App]]**: `Customize -> MCP -> GitHub verified`
- **[[Copilot CLI]]**: `/mcp -> Connectors`
- **[[Copilot in VS Code]]**: [[VS Code Agents Window]] 内の `Agents window -> Customizations`
