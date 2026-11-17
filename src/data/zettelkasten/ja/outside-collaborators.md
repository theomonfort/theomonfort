---
title: "外部コラボレーター"
---

**外部コラボレーター**は、標準の個人アカウント型 [[GitHub Enterprise Cloud]] の組織で、外部委託先、ベンダー、パートナーに、正式な組織メンバーにせずリポジトリ単位のアクセスを付与する仕組みです。

## アクセス範囲とライセンス消費

- **リポジトリのみの可視性**: 明示的な [[Repository Roles]]（`Read`、`Triage`、`Write`、`Maintain`、`Admin`）を指定してリポジトリごとに招待します。外部コラボレーターは内部リポジトリ、組織チーム、組織内の他のプライベートリポジトリを閲覧できません。
- **GHE ライセンスへの影響**: **プライベートまたは内部リポジトリ**（フォークを除く）へのアクセスを付与すると、[[GHE & Copilot Licenses]] の **1** シートを自動的に消費します。
- **Copilot シートの割り当て**: 従来の外部コラボレーター専用の Copilot 設定は廃止されています。組織オーナーは通常の組織メンバーと同様に、外部コラボレーターへ **Copilot シート**を直接割り当てます。エンタープライズの請求書には Copilot ライセンス **1** 件が課金されます。

## ガバナンスのガードレールとエンタープライズチームの注意点

- **招待できるユーザーを制限**: デフォルト（「No policy」）では、リポジトリ管理者権限のある組織メンバーは誰でも外部ユーザーを招待でき、気付かないうちにシートが消費されます。[[GitHub Well-Architected Guardrails]] の**ガードレール #08**を適用します。`Inviting outside collaborators = Owners only` を [[Enterprise Policies]] で設定するか、`Allow members to invite outside collaborators` のチェックを `Org -> Settings -> Member privileges` で外します。
- **エンタープライズチームによる昇格に注意**: [[Enterprise & Org Teams]] を組織に割り当てると、そのチーム内の既存の外部コラボレーターは正式なエンタープライズメンバーに変わります。
- **EMU での対応機能**: [[Enterprise Managed Users]] に外部コラボレーターは存在しません。代わりに [[EMU Guest Collaborators]] を使用します。
