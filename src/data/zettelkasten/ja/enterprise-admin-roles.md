---
title: "エンタープライズの管理ロール"
---

**エンタープライズの管理ロール**は、[[Enterprise Governance|エンタープライズガバナンス]]において、プラットフォーム管理、課金、セキュリティ監督、リポジトリアクセスを分離します。限定的なロールで足りる場面で広範な `Owner` 権限を与える**アンチパターン #10**を防ぎます。

## 組み込みおよびカスタムの管理ロール

| ロール | 範囲 | 機能と最小権限のガードレール |
| --- | --- | --- |
| **Enterprise Owner** | エンタープライズ | SSO / SCIM、[[Enterprise Policies|エンタープライズポリシー]]、課金、エンタープライズのルールセットを管理。ただしデフォルトでは**組織設定やリポジトリのコードにアクセスできない** |
| **Billing Manager** | エンタープライズ / 組織 | [[Enterprise Procurement Channels|エンタープライズの調達経路]]、[[Cost Centers|コストセンター]]、[[Budgets & Spending Limits|予算と支出制限]]、[[Budget Threshold Alerts|予算しきい値アラート]]、請求書を管理し、**コードアクセスや管理者権限は一切持たない** |
| **Organization Owner** | 単一組織 | 組織内の管理とリポジトリを完全に制御。**人数は最小限としつつ、ロックアウト防止のため必ず2人以上を維持** |
| **Security Manager** | 組織 | Org Owner でなくても、組織の全リポジトリへの `Read` 権限と GitHub Advanced Security のアラートおよび有効化を全面的に管理する権限を付与 |
| **Guest Collaborator** | エンタープライズ（`EMU`） | 外部委託先による `internal` リポジトリの閲覧を制限（[[EMU Guest Collaborators|EMU ゲストコラボレーター]]を参照） |
| **カスタム組織 / エンタープライズロール** | エンタープライズ / 組織（`GHEC`） | 単一の業務に合わせた詳細な権限セット（例: エンタープライズ / 組織の監査ログ閲覧、[[GitHub Enterprise Importer]] の移行担当者） |

## 安全なロール割り当て

個人をその都度昇格させず、企業の IdP セキュリティグループと同期した [[Enterprise & Org Teams|エンタープライズチームと組織チーム]]を通じて管理ロールを割り当てます（`IdP -> Enterprise/Org Team -> Role`）。リポジトリ単位の作業には [[Repository Roles|リポジトリロール]]を使用します。
