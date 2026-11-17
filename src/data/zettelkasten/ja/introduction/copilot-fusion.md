---
title: "Copilot Fusion"
---

**Copilot Fusion**（`Project HydraFusion`、VS Code、Copilot CLI、Copilot App、JetBrains で **`2026-10-28` に GA**）は、[[GitHub]] が [[GitHub Copilot]] 内で提供するマルチモデル調整エンジンです。**ユーザーが推論の労力レベルを選び、Fusion がモデルを選びます**。

## リクエストごとの 4 つの観点による計画

Fusion は各プロンプトについて、**4 つのタスク観点**（`Reasoning`、`Code Generation`、`Debugging`、`Tool Use`）を、[[Copilot Multi-Model Catalog & BYOK]] のポリシー、[[Copilot Data Residency & FedRAMP]] のルール、プロバイダーの現在の稼働状況に照らして評価します。そのうえで [[Fusion Effort Levels]] と [[Fusion Execution Patterns]] を組み合わせ、**統合された 1 つの最終応答**を返します。

## 公開ベンチマーク結果（Artificial Analysis と DeepSWE）

| 指標 | 測定結果 | ベンチマークの詳細 |
| --- | --- | --- |
| **Coding Agent Index** | **60** | `Fusion Max` は `Opus 5.5 Max` との差が 2 ポイント以内 |
| **API コストとトークン** | **1/2**（`50%` 削減） | タスクあたりの平均 API コストとトークン使用量 |
| **実経過時間** | **約 40% 短縮** | タスクあたりの平均完了時間を短縮 |
| **最大コスト削減** | **最大 77% 削減** | `DeepSWE`: `Fusion High` と `GPT-6 Astra (high)` の比較で、より高い精度も達成 |

[[Innovate Pillar]] の主要な GA 機能として提供され、[[Fusion Billing & Launch Pricing]] による透明なトークン計測を行います。
