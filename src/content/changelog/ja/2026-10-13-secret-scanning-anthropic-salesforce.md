---
title: "Secret scanning：Anthropic キーを push protection で既定ブロック、Salesforce がパートナーに"
date: "2026-10-13"
summary: "Anthropic の API キー 2 種類を新たに検出し、push protection で既定でブロックします。Salesforce が secret scanning パートナーに加わり、Cloudsmith の API キーも検出対象になりました。"
category: security
source: "https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce/"
demoUrl: "https://github.com/enterprises/octodemo/settings/security_analysis/pattern_configurations?query=anthropic&page=0&tab=native"
demo:
  - "octodemo の Pattern configurations を開き、anthropic で検索して anthropic_service_api_key と anthropic_user_api_key の GitHub default を見せる。設定は変更しない。"
  - "同じ画面の Enterprise setting 列で、既定値をパターン単位で上書きできることを説明する。本物の Anthropic キーは push しない。"
---

### 覚えておきたいこと

- **Anthropic キーを既定でブロック**：`anthropic_service_api_key` と `anthropic_user_api_key` を新たに検出し、push protection の既定対象に追加。secret scanning が有効なリポジトリ（無料の public リポジトリを含む）では、これらを含むコミットの push が自動でブロックされます。
- **Salesforce がパートナーに**：public リポジトリで `salesforce_marketing_cloud_api_oauth2_token` が見つかると、GitHub が Salesforce に通知し、Salesforce 側で失効やローテーションができます。
- **Cloudsmith も検出**：`cloudsmith_api_key` がリポジトリ内で自動検出されるようになりました。
- **Partner と User の違い**：Partner secret は public リポジトリで見つかると発行元に自動通知されます。User secret は public / private リポジトリでアラートを作成します。

[Playbook：何を検出するのか（スライド 4）](https://theomonfort.github.io/theomonfort/playbook/secret-scanning/?present=1&slide=4)

[サポートされている secret パターン（公式ドキュメント）](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns) / [Secret scanning について](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning) / [Secret scanning パートナープログラム](https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program)
