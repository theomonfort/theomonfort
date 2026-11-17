---
title: "Cloud Agent の検証ツール"
---

**Cloud Agent の検証ツール**（`Settings -> Copilot -> Cloud agent -> Validation tools` で既定でオン）は、[[Copilot Cloud Agent]] が生成したコードを自動チェックし、プルリクエストの作成前に検出した問題を自己修正します。

## 4 つの組み込み検証（GHAS ライセンス不要）

| 検証ツール | 検証対象 |
| --- | --- |
| **CodeQL Code scanning** | SQL インジェクション、XSS、安全でない API の脆弱性 |
| **Copilot Code Review** | ロジックのバグ、リグレッション、不要な複雑さ |
| **Secret Scanning** | ハードコードされた API キー、トークン、認証情報 |
| **依存関係の脆弱性チェック** | 新しく追加したパッケージを GitHub Advisory Database と照合 |

## パートナー SDK の適用範囲

- [[Partner Agents]]（`OpenAI Codex SDK` または `Claude Agent SDK`）を Cloud Agent 内で実行する場合も、4 つの検証ツールすべてが同じ PR 作成前の安全対策を無料で適用します。
