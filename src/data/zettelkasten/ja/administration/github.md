---
title: "GitHub"
---

**GitHub** は、エンタープライズ向けホスティング、ID ライフサイクル制御、ライセンスの一元管理、トークン従量課金による AI FinOps、階層的なガバナンス、プラットフォーム間の移行ツールを提供します。

## エンタープライズ管理のアーキテクチャ

- **導入モデルとデータレジデンシー**: `github.com` 上の [[GitHub Enterprise Cloud]]、IdP が所有する [[Enterprise Managed Users]]、リージョン別サブドメインで分離する [[GHE.com Data Residency]]、セルフホストの [[GitHub Enterprise Server]] から事前に選びます。
- **ID とプロビジョニング**: [[SAML & OIDC SSO]] と自動化した IdP のライフサイクルプロビジョニングを組み合わせ、認証の一元化とセッションの取り消しを強制します。
- **ライセンスとシート管理**: [[GHE & Copilot Licenses]] の下で、エンタープライズシート、複数組織間の重複排除、Copilot Business / Enterprise プランをまとめます。
- **従量課金と FinOps**: [[Usage-Based Billing]] で AI トークンとクラウドコンピューティングを計測し、[[Cost Centers]] に支出を配賦して、[[Budgets & Spending Limits]] で上限を適用します。
- **ガバナンス、ルールセット、AI 制御**: [[Enterprise Governance]] でアクセスとポリシーを上位から適用し、[[Enterprise & Repo Rulesets]] でブランチとタグを保護し、[[Copilot Managed Settings]] で開発者クライアントを制限します。
- **エンタープライズ移行**: [[GitHub Migrations]] を使い、ホスティングモデルや ID の境界を越えて組織とリポジトリを移行します。
