---
title: "CODEOWNERS"
---

**CODEOWNERS**（`.github/CODEOWNERS`、ルートの `CODEOWNERS`、または `docs/CODEOWNERS`）は、[[GitHub]] のリポジトリ内のファイルパスを担当の `@username` または `@org/team` に対応付け、ドラフトではない [[Pull Requests]] で自動的にレビューを依頼します。

## パターンの優先順位と例

ルールは `.gitignore` 形式のパターンを上から順に評価し、**最後に一致したパターンが優先**されます。

```text
# Default fallback owner for the entire repository
*                       @octo-org/core-eng

# Frontend and database domain owners
/src/ui/**              @octo-org/frontend
/src/db/**              @octo-org/data-platform

# High-sensitivity CI workflows and enterprise Copilot settings
/.github/workflows/**   @octo-org/security-eng
/copilot/**             @octo-org/ai-governance
```

## 重要なガバナンスとチームのルール

| ルール / 制約 | 詳細 |
| --- | --- |
| **書き込み権限が必要** | 指定するユーザーとチームには、リポジトリの明示的な **Write** 以上の権限が必要です。なければレビュー依頼とオーナー承認の強制は適用できません |
| **Organization チームと Enterprise チーム** | Organization チーム（`@org/team`）は `CODEOWNERS` で使用でき、[[Team Review Assignment]] と連携します。**Enterprise チーム（`@/ent:team`）は `CODEOWNERS` で非対応**です（2026-10-14 時点） |
| **ドラフト時は通知しない** | [[Draft Pull Requests]] は、作成者が **Ready for review** をクリックするまでコードオーナーへの通知を待ちます |
| **必須ゲート** | **Require review from Code Owners** を [[Required Pull Request Reviews]]（[[PR Rulesets]] 内）で有効にすると、変更したすべてのパスのオーナーが承認するまでマージをブロックします |
| **重要アセットの保護** | `.github/CODEOWNERS` 自体、`.github/workflows/**`、`.github-private` の `copilot/**` 管理設定を、専任の管理 / セキュリティチームで保護します |
