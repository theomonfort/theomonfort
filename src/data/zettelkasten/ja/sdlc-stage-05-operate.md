---
title: "SDLC ステージ05：運用"
---

**SDLC ステージ05：運用**は、[[AI Developer Platform|AI 開発者プラットフォーム]]の循環を完成させます。コードが [[SDLC Stage 04 Test & Secure|SDLC ステージ04：テストとセキュリティ]]を通過した後も、リポジトリの自己保守、観測可能性、継続的な学習を維持します。

## 運用とインテリジェンスの機能

| 機能 | 分類 | 運用での役割 |
| --- | --- | --- |
| **Agentic Workflows** | Copilot | GitHub Actions のスケジュールとイベントで動作する、Markdown で定義されたリポジトリエージェント（[[Scale Pillar|Scale の柱]]で一般提供） |
| **Copilot Memory と Dreaming** | Copilot | [[Innovate Pillar|Innovate の柱]]におけるリポジトリ知識の永続化（`Memory` は一般提供）とバックグラウンドでのコンテキスト統合（`Dreaming` はパブリックプレビュー） |
| **Copilot Metrics** | Copilot | 企業内の各チームにおける導入、使用状況、コード生成、ROI のテレメトリ |
| **REST と GraphQL API** | プラットフォーム標準 | [[Copilot SDK]] とともに、イベント Webhook とプログラムによるプラットフォーム拡張性を提供 |
| **Packages と Registry** | プラットフォーム標準 | Actions とリポジトリ権限に統合された、コンテナおよび言語パッケージのホスティング |

## 運用とガバナンスの詳細ノート

- **継続的な運用**：[[Agentic Workflows]]、[[Copilot Memory]]、[[Copilot Dreaming]]、[[Copilot Metrics|Copilot のメトリクス]]、[[Packages & GitHub Apps|Packages と GitHub Apps]]。
- **プラットフォームと FinOps の制御**：[[Enterprise Governance|Enterprise のガバナンス]]、[[Usage-Based Billing|従量課金]]、[[Copilot Managed Settings|Copilot の管理対象設定]]。
