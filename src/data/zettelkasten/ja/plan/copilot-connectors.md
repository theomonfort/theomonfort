---
title: "Copilot コネクター"
---

**Copilot コネクター**（パブリックプレビュー、VS Code で `2026-10-28` に提供）は、[[GitHub]] 検証済みの連携で、リモート HTTP の [[MCP Servers]] を基盤とします。GitHub が管理するセットアップとシングルサインオン認証を提供します。

## 手動の MCP サーバーと Copilot コネクター

| 観点 | 手動の MCP サーバー | Copilot コネクター |
| --- | --- | --- |
| **概要** | MCP を通じた独自またはサードパーティのツール / コンテキスト | GitHub 検証済みで、すぐ使える MCP 連携 |
| **設定** | [[MCP Configuration]] を編集し、自分で認証を設定 | サービスを選び、一度サインインしてアクセスを承認 |
| **利用可能な環境** | 設定した環境のみ | 対応環境間で自動再利用（**GitHub Actions セッションを除く**） |
| **選択肢** | 任意の独自、社内、サードパーティサーバー | GitHub がサポートするコネクターカタログ |

## 4 つの環境でのコネクターの場所

- **Web / Cloud**: `github.com/copilot/customize`（カスタマイズページ）
- **Copilot App**: `Customize -> MCP -> GitHub verified`
- **Copilot CLI**: `/mcp -> Connectors`
- **VS Code**: `Agents window -> Customizations`
