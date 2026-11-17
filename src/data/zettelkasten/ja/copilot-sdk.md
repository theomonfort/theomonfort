---
title: "Copilot SDK"
---

**Copilot SDK**（`github/copilot-sdk`、`2026-04-02` にパブリックプレビュー）は、エンジニアリングチームが独自の社内開発者ポータル、CLI、カスタムアプリへ [[GitHub Copilot]] の機能を直接組み込むための SDK です。

## Copilot の各環境での役割

- 7 つの主要な [[Copilot Surfaces]] の 1 つで、対話型 IDE、Copilot App、Copilot CLI、Cloud Agent を補完します。
- チームが独自の LLM ゲートウェイを保守する代わりに、Enterprise 認証、[[Copilot Multi-Model Catalog & BYOK]] のポリシー、[[Copilot Proxy]] のコンプライアンス保護策を再利用します。
- [[SDLC Stage 05 Operate]] で GitHub の REST/GraphQL API や Webhook と自然に接続し、企業固有のワークフローを構築できます。
