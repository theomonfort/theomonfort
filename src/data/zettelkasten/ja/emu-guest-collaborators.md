---
title: "EMU ゲストコラボレーター"
---

**EMU ゲストコラボレーター**は、[[Enterprise Managed Users]] および [[GHE.com Data Residency|GHE.com のデータレジデンシー]]を利用するエンタープライズで、外部ベンダーや委託先に制限付きアクセスを提供します。これらの環境では、個人アカウントの [[Outside Collaborators|外部コラボレーター]]は、[[EMU Account Restrictions|EMU アカウントの制約]]により利用できません。

## IdP によるプロビジョニングと内部リポジトリの分離

- **IdP 管理の ID**: 委託先や協力会社の開発者には、まずエンタープライズの単一 IdP（Entra ID、Okta、PingFederate）で ID を発行し、**Guest collaborator** エンタープライズロールで [[SCIM Provisioning|SCIM プロビジョニング]]を行います（[[Enterprise Admin Roles|エンタープライズの管理ロール]]を参照）。
- **内部リポジトリへのアクセス制限**: 通常の EMU メンバーはエンタープライズ内のすべての `internal` InnerSource リポジトリに自動的に読み取り権限を得ますが、**ゲストコラボレーターは内部リポジトリを閲覧できません**。対象リポジトリまたはチームへ明示的に追加された場合は例外です。
- **組織とチームへの限定的なアクセス**: 管理者は、対象のプライベートリポジトリへ直接、または [[IdP Group & Team Sync|IdP グループとチームの同期]]を使う委託先専用チームを通じてアクセスを付与します。

## シートと Copilot の課金ルール

- **GHE ライセンス**: ゲストコラボレーターを組織へ追加するか、プライベートリポジトリへのアクセスを付与すると、[[GHE & Copilot Licenses|GHE と Copilot のライセンス]]に基づき GitHub Enterprise の **1** シートを消費します（組織間では [[Multi-Org Seat Deduplication|複数組織間のシート重複排除]]を適用）。
- **Copilot ライセンス**: ゲストコラボレーターへ Copilot Business または Enterprise を割り当てると、Copilot の **1** シートが課金され、エンタープライズの [[Shared AI Credit Pool|共有 AI クレジットプール]]にアクセスできます。[[User-Level Budgets|ユーザー単位の予算]]がある場合は、その制限に従います。
