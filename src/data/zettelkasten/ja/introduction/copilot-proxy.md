---
title: "Copilot Proxy"
---

**Copilot Proxy** は、[[GitHub]] の Enterprise 向けセキュリティ / コンプライアンスゲートウェイです。プロンプト（`Context`）と生成結果（`Suggestions`）は、[[GitHub Copilot]] クライアント（[[Copilot SDK]] を含む）と、[[Copilot Multi-Model Catalog & BYOK]] の上流 LLM プロバイダー（`OpenAI`、`Anthropic`、`Google Gemini`、`xAI Grok`、`Microsoft MAI`）の間で、このゲートウェイを通過します。

## ゲートウェイの 5 つの保護機能

1. **PII の除去**: 送信するプロンプトのコンテキストから、個人を特定できる情報を除去します。
2. **不適切なコンテンツのフィルタリング**: 有害またはポリシー違反のプロンプトと応答をブロックします。
3. **一般的な脆弱性のチェック**: [[Trust Pillar]] のスキャンに加えて、生成コードのパターンに一般的なセキュリティ欠陥がないか確認します。
4. **IP（知的財産）フィルター**: 提案を公開コードとの一致フィルターに通し、[[Copilot Trust & IP Protection]] を支えます。
5. **通信中の暗号化**: すべてのリクエストと応答の各経路をエンドツーエンドで暗号化し、[[Copilot Data Residency & FedRAMP]] の地域別ルーティングルールを適用します。
