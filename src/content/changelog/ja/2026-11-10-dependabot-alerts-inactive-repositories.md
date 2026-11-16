---
title: "長期間使われていないリポジトリで Dependabot alerts を一時停止"
date: "2026-11-10"
summary: "2026年12月8日から、1年間活動のない多くのリポジトリで Dependabot alerts が一時停止されます。既存アラートは削除されず、再開時に復元されます。"
category: security
source: "https://github.blog/changelog/2026-11-10-dependabot-alerts-will-pause-on-inactive-repositories/"
---

### 覚えておきたいこと

- **背景**：脆弱性の発見とアラートが増える中、開発が止まったリポジトリまで常に処理すると、現在開発中のリポジトリに対する Dependabot の速度と信頼性を保ちにくくなります。
- **変更**：2026年12月8日から、過去1年間に活動がない多くのリポジトリで Dependabot alerts が無効になります。活動には、ブランチまたはタグへの push、リポジトリの作成、Dependabot alerts の有効化が含まれます。
- **アラートは保持**：既存のアラートは削除されずアーカイブされます。再び push するか、設定で alerts を有効にすると自動で復元され、1年間の活動期間もリセットされます。
- **対象外**：Dependabot alerts を有効にする強制セキュリティ設定が適用されたリポジトリ、および Enterprise ポリシーでリポジトリ管理者による alerts の切り替えが許可されていないリポジトリは停止されません。
- **適用範囲**：GitHub.com の全プランと、データ所在地を含む GitHub Enterprise Cloud が対象です。データ所在地の顧客ではアーカイブ済みアラートも同じリージョンに保管されます。GitHub Enterprise Server は対象外です。

[Dependabot alerts の有効化・無効化（公式ドキュメント）](https://docs.github.com/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts#enabling-or-disabling-dependabot-alerts-for-a-repository) / [組織のセキュリティ設定（公式ドキュメント）](https://docs.github.com/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration)
