---
title: "Copilot のメトリクス"
---

**Copilot のメトリクス**は、[[GitHub Copilot]] の導入状況、エージェント活用の成熟度、エンジニアリングの速度を、Organization と Enterprise 全体で定量化します。[[SDLC Stage 05 Operate]] で活用します。

## ダッシュボード、成熟度グループ、エクスポート API

- **利用と効果のダッシュボード**: 28 日間の Usage Dashboard（アクティブユーザー、モデル構成、[[Copilot Surfaces]] の環境別内訳）と、6 か月間の **Copilot Impact Dashboard** を組み合わせます。後者は成熟度グループ（`Passive -> Code-first -> Agent-first -> Multi-agent`）と、[[Pull Requests]] のサイクルタイム、マージ処理量、[[DORA Metrics]] の関係を示します。
- **NDJSON エクスポート API とシートの照合**: 1 年分の NDJSON REST エクスポート API が、[[GHE & Copilot Licenses]] と [[License Audit & Seat Reclamation]] の請求シート用エンドポイントを補完します。
- **クライアント OpenTelemetry**: [[Copilot CLI]] と [[GitHub Copilot App]] のローカルエージェントのスパンを、[[Copilot Managed Settings]] の `telemetry` を通じて Enterprise の可観測性パイプラインへストリーミングできます。
