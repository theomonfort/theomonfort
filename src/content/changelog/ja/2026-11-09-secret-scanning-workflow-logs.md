---
title: "Secret scanning が GitHub Actions のワークフローログをスキャン"
date: "2026-11-09"
summary: "GitHub Actions のワークフローログに誤って出力された secret を検出し、既存の secret scanning アラートに表示できるようになりました。"
category: security
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs/"
---

### 覚えておきたいこと

- **これまでのリスク**：ワークフローのログにトークンや API キーが誤って出力されても、ログは secret scanning の対象外でした。ログを閲覧できる人に認証情報を使われ、リポジトリやクラウドなどのサービスへアクセスされるおそれがあります。
- **対応**：完了したワークフローのログを provider のパターンでスキャンし、検出結果を Secret scanning のアラート一覧に追加します。アラートから該当ログを開け、対応する secret type では有効性チェックも行います。ログを削除した後もアラートは残ります。
- **利用条件**：GitHub Enterprise Cloud の Secret Protection または GitHub Advanced Security 向けのパブリックプレビューです。Enterprise owner が **Policies → Advanced Security** で有効にし、ライセンスの対象で secret scanning が有効なリポジトリに適用します。既定では無効です。
- **注意点**：有効化後に完了したワークフローだけが対象で、過去ログは遡ってスキャンされません。generic / custom / AI 検出パターンや、Actions によりマスク済みの secret は検出されません。プレビュー中は通知も届かないため、アラート一覧を確認してください。

[Playbook：Secret scanning alerts（スライド 3）](https://theomonfort.github.io/theomonfort/playbook/secret-scanning/?present=1&slide=3)
