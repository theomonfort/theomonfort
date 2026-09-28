---
title: "Copilot App の動きを OpenTelemetry で確認"
date: "2026-09-22"
summary: "Copilot App のエージェントの動作データを、組織の監視ツールに送信できるようになりました。Enterprise の管理設定で一元的に構成します。"
category: copilot
source: "https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app/"
---

### 覚えておきたいこと

- **何をしたか追える**：モデルへのリクエストやツールの利用を、OpenTelemetry 対応の監視ツールで順に確認。予期しない動作の調査に役立ちます。
- **設定は一元管理**：`managed-settings.json` の `telemetry` で送信を有効化し、送信先のエンドポイントを指定。
- **内容は既定で収集しない**：プロンプト、応答、ツールの引数は、有効化しない限り対象外。内容の収集を有効にする前に、機密情報への影響を確認してください。

[OpenTelemetry によるエージェント監視（公式ドキュメント）](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/enterprise/opentelemetry)
