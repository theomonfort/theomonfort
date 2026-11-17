---
title: "Copilot のマルチモデルカタログと BYOK"
---

**Copilot のマルチモデルカタログと BYOK** は、[[GitHub Copilot]] ユーザーに、ベンダーとの個別契約なしで最先端モデル群を提供し、必要に応じてカスタムエンドポイントにも対応します。

## 対応モデルファミリーと独自キー

- **標準対応のモデルファミリー**: **OpenAI GPT**（`GPT-5.5` を含む。`2026-04-24` に GA）、**Anthropic Claude**、**Google Gemini**、**xAI Grok**、**Microsoft MAI**、**Kimi**。
- **カスタムモデルと BYOK**: 対応する [[Copilot Surfaces]] で Bring Your Own Key（`BYOK`）とカスタムモデルのデプロイを利用できます。プランのティア、クライアントの対応、管理者ポリシーに従います。

## ポリシーを考慮したモデルプール

- 管理者の許可リスト、[[Copilot Data Residency & FedRAMP]] の境界、サブスクリプションの利用権限により、ワークスペースで有効なモデルが決まります。
- ホスト型モデルへのプロンプトは [[Copilot Proxy]] を通過し、[[Copilot Fusion]] がステップごとにポリシー承認済みの有効なモデルプールから動的に選びます（[[Partner Agents on One Subscription]] を補完）。
