---
title: "Copilot Code Review"
---

[[GitHub]] の **Copilot Code Review** は、[[Pull Requests]] にエージェント型の AI レビュアーを割り当てます（手動、[[Automatic Copilot Review]]、または PR 作成前の [[IDE Local Copilot Review]]）。完了済みレビューは 6,000 万件を超え、**PR Overview** の要約、[[Inline Review Comments & Threads]]、コミット可能な [[Suggested Changes]] を生成します。

## 企業で実測されたサイクルタイムへの効果

2025 年 9 月から 2026 年 2 月まで追跡した日本の企業顧客では、Copilot Code Review の導入により、PR が開いている期間の中央値が約 18% 短縮されました。

| 業種 | 導入前の PR オープン期間の中央値 | Copilot 導入後の PR オープン期間の中央値 |
| --- | --- | --- |
| **自動車** | `14.2 days` | **`11.6 days`** |
| **製造** | `13.6 days` | **`11.1 days`** |

## Copilot と人間のレビューの役割分担

| Copilot Code Review（24 時間 365 日の一次確認） | 人間のレビュアー（最終承認） |
| --- | --- |
| コーディング規約、命名、[[Review Custom Instructions]] のルール | ビジネス要件、ドメイン固有のエッジケース、製品の意図 |
| [[Agentic Review Tool-Calling]] による null 安全性、オフバイワンのバグ、不足するテスト、ファイル間のリグレッション | [[Code Scanning PR Merge Protection]] とともに確認する、モジュール境界、長期的なシステム設計、セキュリティ態勢 |
| [[Review Effort Levels]] による深さの調整、専門の [[Custom Agents in Code Review]]、任意の [[Copilot Review Approvals]]、[[PR Coding Agent Handoff]] によるワンクリック修正 | チームメンバーの育成と [[CODEOWNERS]] の担当領域の管理を、[[Review Runner & Quota Governance]] の下で実施 |
