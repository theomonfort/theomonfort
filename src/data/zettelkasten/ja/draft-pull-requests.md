---
title: "ドラフトプルリクエスト"
---

**ドラフトプルリクエスト**は、[[Pull Requests|プルリクエスト]]を [[GitHub Flow]] に沿って早期に作成し、CI パイプラインを実行してフィードバックを得るための仕組みです。早すぎるマージを防ぎ、レビュアーへの不要な通知を抑えられます。

## ライフサイクルと通知の動作

| 状態 / 操作 | GitHub UI と `gh` CLI | レビュアーとマージへの影響 |
| --- | --- | --- |
| **ドラフトとして作成** | **Create draft pull request** または `gh pr create --draft` | マージボタンがロックされ、[[CODEOWNERS]] と [[Team Review Assignment|チームへのレビュー割り当て]]のリクエストは保留される |
| **早期に Copilot へ依頼** | Copilot の横の **Request** をクリックするか、[[Automatic Copilot Review|Copilot の自動レビュー]]で `Review draft pull requests` を有効化 | 人間のレビュアーへ通知する前に [[Copilot Code Review]] を実行 |
| **レビュー準備完了にする** | **Ready for review** をクリック、または `gh pr ready` を実行 | マージ可能な状態になり、[[CODEOWNERS]] とチームへのレビュー通知を送信 |
| **ドラフトに戻す** | サイドバーの **Convert to draft**（`gh pr ready --undo`） | レビュー中にスコープが変わった場合、マージ可能な状態を一時停止 |

## エージェントのデフォルト出力

- [[PR Coding Agent Handoff|PR のコーディングエージェントへの引き継ぎ]]（Copilot Cloud Agent）や [[Copilot Autofix in PRs|PR の Copilot Autofix]]（Agentic Autofix）によるバックログ修正など、非同期のコーディングワークフローはデフォルトで**ドラフト PR**を作成します。チームに承認を依頼する前に、開発者がセッションログや CI チェックを確認できます。
