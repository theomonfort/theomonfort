---
title: "SDLC ステージ03：レビュー"
---

**SDLC ステージ03：レビュー**は、[[AI Developer Platform|AI 開発者プラットフォーム]]の検証ゲートです。エージェントが作成するコードの量が増える中、[[Octoverse & Agent Era Metrics|Octoverse とエージェント時代の指標]]で示された中心的なボトルネックに対処します。

## 標準機能と AI のレビュー機能

| 機能 | 分類 | 検証での役割 |
| --- | --- | --- |
| **プルリクエスト** | プラットフォーム標準 | 差分確認、インラインレビュースレッド、CODEOWNERS による割り当て、マージキュー（月間2億2,000万件のマージ） |
| **Copilot Code Review** | Copilot | 自動の一次 PR レビュー。[[Innovate Pillar|Innovate の柱]]の **Code Review Max**（プレビュー）と **Copilot Approvals**（一般提供）を含む |
| **Playwright** | Copilot | 人のレビュー前にコーディングエージェントが行うヘッドレスブラウザーのレンダリングと UI 操作チェック |
| **Rubber Duck** | Copilot | 異なるモデルファミリーで計画と差分をレビューし、盲点を検出するモデル横断の批評エージェント |

レビューを受けたプルリクエストは、[[SDLC Stage 04 Test & Secure|SDLC ステージ04：テストとセキュリティ]]の自動 CI とセキュリティゲートに直接進みます。これは [[SDLC Stage 02 Code|SDLC ステージ02：コード]]での実装に続く流れです。
