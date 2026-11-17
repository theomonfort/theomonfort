---
title: "Agent Merge"
---

**Agent Merge** は、[[GitHub]] 上の **GitHub Copilot app** で、開いている PR の統合直前の作業を自律的に引き受ける機能です。統合を妨げる技術的な障害をすべて解消し、ブランチ保護で許可され次第、PR をマージします。

## Agent Merge の動作

| ステップ / 特性 | 実行時の動作 |
| --- | --- |
| **PR 上部の切り替え** | Copilot app の [[Pull Requests]] 上部で **Agent merge** をオンにすると、ワークスペースの Copilot セッションがライフサイクルの定期確認を担当します |
| **障害の解消** | 新しい [[Inline Review Comments & Threads]]（人間または [[Copilot Code Review]] によるもの）を読み、失敗した [[Required Status Checks]] を診断し、Git のマージ競合を解決して、テスト済みのコミットをプッシュします |
| **永続的なバックグラウンドループ** | 定期的な確認を通じてバックグラウンドで非同期に動作し、**Copilot app の再起動後も継続**します |
| **自動停止** | PR がマージされた瞬間に**自動でオフ**になります（直接のマージ、[[Auto-Merge]]、[[Merge Queue]] のいずれでも同様です） |

## ガバナンスの境界

- **ルールセットを迂回しない**: Agent Merge は、ユーザーとリポジトリの [[PR Rulesets]] の範囲内で厳密に動作します。`main` に入る変更を最終的に決めるのは、[[Required Pull Request Reviews]] で必要な人間の承認、[[CODEOWNERS]] の承認、必須の CI / セキュリティチェックです。
