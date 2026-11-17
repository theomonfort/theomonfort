---
title: "GitHub Enterprise Server"
---

**GitHub Enterprise Server**（`GHES`）は、オンプレミスまたは顧客管理のクラウド VPC に導入する [[GitHub]] のセルフホスト型仮想アプライアンスです。管理者はインフラストラクチャ、ネットワーク分離、アップグレードの保守時間帯を完全に制御できます。

## クラウドとの ID とリリース周期の違い

- **インスタンス内のアカウント**: `GHES` は [[Enterprise Managed Users]] に対応していません。アカウントはアプライアンス上に存在し、組み込みパスワード、**LDAP**、**CAS**、**SAML** で認証します。
- **管理者によるアップグレード**: 機能はまず [[GitHub Enterprise Cloud]] で公開され、その後 `GHES` の定期的な機能リリース（`3.13+` や `3.17+` など）に含まれます。管理者がテストし、手動で適用します。
- **ハイブリッドライセンス**: **GitHub Connect** で `GHES` をエンタープライズのクラウドアカウントにリンクすると、[[Multi-Org Seat Deduplication|複数組織間のシート重複排除]]と、クラウドで割り当てた Copilot ライセンスを利用できます。

## GHEC / GHE.com との機能差

| 分野 | `GHES` の対応状況 | 運用上の詳細 |
| --- | --- | --- |
| **GitHub Actions** | セルフホステッドランナーのみ | GitHub ホステッドランナーはなし。`github.com` のアクションの参照には **GitHub Connect** が必要 |
| **GitHub Copilot** | IDE と CLI のみ | Web Chat、クラウドエージェント、Copilot コードレビュー、Spaces はなし。ライセンスはクラウドで割り当て。オフライン CLI はプレビュー |
| **GitHub Packages** | 対応（Maven / Gradle を含む） | [[GHE.com Data Residency|GHE.com のデータレジデンシー]]と異なり、サイト管理者が Packages を有効にすると `GHES` は Maven / Gradle に対応 |
| **Dependabot** | 条件付き | **GitHub Connect** とセルフホステッド Actions ランナーが必要 |
| **シークレットスキャン** | 一部対応 | AI による汎用シークレット検出はなし |
| **Codespaces と Sponsors** | 利用不可 | クラウドホスト型 Codespaces と GitHub Sponsors は `GHES` で利用不可 |
| **リポジトリの可視性** | インスタンス内 | `GHES` の「パブリック」リポジトリは、アプライアンスへのネットワーク / アカウントアクセスを持つユーザーだけが閲覧可能 |

## GHES からクラウドへの移行経路

セルフホストのインフラストラクチャを廃止するエンタープライズは、[[GitHub Migrations|GitHub 移行]]を通じてリポジトリをクラウドへ移します。Git LFS を含むモノレポをほぼ無停止で切り替える場合は [[Enterprise Live Migrator]]（`GHES 3.17+` → `GHE.com`）、通常の凍結を伴う移行には [[GitHub Enterprise Importer]]（`GHES 3.4.1+` → `github.com` または `GHE.com`）を使用します。
