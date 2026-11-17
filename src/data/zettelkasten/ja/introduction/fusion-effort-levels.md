---
title: "Fusion の Effort レベル"
---

**Fusion の Effort レベル**は、[[Copilot Fusion]] で開発者が操作する設定です。[[Copilot Surfaces|Copilot の利用環境]]ごとにモデルを手動で切り替える代わりに、タスクごとにコストと処理の深さのバランスを選べます。

## 3段階の Effort

| Effort レベル | 対象プラン | 想定する作業 |
| --- | --- | --- |
| **Standard** | すべての Copilot プラン | 日常的なコーディング、簡単な質問、単一モデルのタスク |
| **High** | Pro+、Max、Business、Enterprise | 複雑なバグ、デバッグでの原因追跡、複数ファイルの変更 |
| **Max** | Pro+、Max、Business、Enterprise | 最も深いアーキテクチャ推論と、複数モデルによる徹底した批評 |

## ガバナンスとポリシーのルール

- **Effort とモデル単位の推論は別**: Effort は [[Fusion Execution Patterns|Fusion の実行パターン]]を含むルーティング計画全体を制御します。一方、内部の各ステップは、それぞれ独自のモデル、コンテキストウィンドウ、推論予算を設定します。
- **利用可否はポリシーに従う**: [[Copilot Multi-Model Catalog & BYOK|Copilot のマルチモデルカタログと BYOK]]および [[Copilot Data Residency & FedRAMP|Copilot のデータレジデンシーと FedRAMP]]の管理者モデルポリシーは引き続き適用されます。必要な最先端モデルを無効にすると `Max` が利用できなくなる場合があり、上位の Effort は [[Fusion Billing & Launch Pricing|Fusion の課金と提供開始時の価格]]におけるトークン支出に影響します。
