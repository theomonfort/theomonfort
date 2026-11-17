---
title: "Copilot のデータレジデンシーと FedRAMP"
---

**Copilot のデータレジデンシーと FedRAMP**（`2026-04-13` 提供）は、地域内のデータ主権に対応するホスティングと政府向けコンプライアンスの保証を、[[GitHub Copilot]] のモデルルーティングへ直接拡張します。

## 地域と規制に対応するモデル制御

- **米国と EU のデータレジデンシー**: 地域別の Enterprise 環境と組み合わせることで、Copilot のプロンプト処理とモデル推論を厳密に**米国**または **EU** の地理的境界内に保持します。
- **FedRAMP 認定モデル**: 公共部門や規制対象のワークロードを、**FedRAMP 認定**のモデルエンドポイントに限定します。
- **ポリシーを考慮したルーティング統合**: 地域と FedRAMP の制約が、[[Copilot Proxy]]、[[Copilot Multi-Model Catalog & BYOK]]、[[Copilot Fusion]] によって適用される利用可能なモデル群を自動で絞り込み、[[Copilot Trust & IP Protection]] を強化します。
