---
title: "データレジデンシー対応の Copilot"
---

**データレジデンシー対応の Copilot** は、[[GHE.com Data Residency]] でホストされる Enterprise 向けに、GitHub Copilot のプロンプト、コンテキスト、モデル推論の処理方法を管理します。

## 対象プランと既定のリージョン間ルーティング

- **対象 SKU**: `*.ghe.com` では、[[GHE & Copilot Licenses]] の **Copilot Business** と **Copilot Enterprise** のシートのみ対応します（`GHE.com` に Copilot Free と Copilot Pro はありません）。
- **既定の動作**: 初期状態では、ユーザーが標準のトークン料金で AI モデルの全カタログを利用できるように、Copilot の推論、プロンプト、運用ログが **Enterprise のホスティングリージョン外に出る場合があります**。

## リージョン内モデルを強制するポリシー

Enterprise Owner は、[[Enterprise Policies]] の **Restrict Copilot to data residency compliant models**（既定で無効）を有効にし、対応する環境では Copilot の処理をデータレジデンシーの境界内に保持できます。

| 観点 | 既定（`Policy Disabled`） | 厳密なリージョン内処理（`Policy Enabled`） |
| --- | --- | --- |
| **推論、プロンプト、ログ** | リージョン境界を越える可能性あり | **リージョン内での保持を保証** |
| **利用可能な AI モデル** | 一般提供とプレビューの全モデル | **リージョン適合認定済みのモデルのみ** |
| **[[Usage-Based Billing]] のコスト** | 標準のモデルトークン料金 | **AI クレジット消費が 10% 増加** |
| **対応する `GHE.com` リージョン** | EU、オーストラリア、米国、日本 | **米国と EU のみ** |

## 日本とオーストラリアのリージョンに関する注意

- **日本（`JP`）とオーストラリア（`AU`）**: 現在、Copilot のモデル推論をリージョン内で実行できるのは**米国**と **EU** のみです。`GHE.com` の日本（`2025-12-18` に GA）またはオーストラリアでホストされる Enterprise でも、Copilot のプロンプトと推論はホームリージョン外で処理されます。
