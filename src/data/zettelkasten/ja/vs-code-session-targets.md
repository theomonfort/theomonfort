---
title: "VS Code のセッション実行先"
---

**VS Code のセッション実行先**は、[[Copilot in VS Code|VS Code の Copilot]]または [[VS Code Agents Window|VS Code の Agents ウィンドウ]]から作業を開始する際に、**モデル**、**エージェント基盤**、**実行場所**を分離します。

## 利用可能なセッション実行先

| 実行先 | 起動方法 | 実行場所 |
| --- | --- | --- |
| **Copilot（ローカル）** | 既定の Chat セッション | ローカルワークスペース上の共通 Copilot エージェント基盤 |
| **Copilot CLI** | `Chat: New Copilot CLI Session` または `copilot` | [[Copilot CLI]] によるローカルターミナルのランタイム |
| **Claude / Codex** | `Session Target` → パートナーのエージェント基盤 | [[Partner Agents|パートナーエージェント]]（ネイティブの `Claude` または `Codex` 拡張機能） |
| **Cloud** | `Session Target -> Cloud` | [[Connected Cloud Continuity|接続されたクラウドでの継続]]または [[Copilot Cloud Agent]] による管理対象サンドボックス |

## 重要な違い

- Copilot 内で Claude モデルを選んでも、エージェント基盤が [[Claude Code on GitHub|GitHub 上の Claude Code]] に切り替わる**わけではありません**。
- [[Remote Agent Control|エージェントのリモート制御]]で既存のマシンに接続する場合、そのホストに接続するのであり、セッションを [[Local & Cloud Sandboxes|ローカルとクラウドのサンドボックス]]へ移動するわけではありません。
