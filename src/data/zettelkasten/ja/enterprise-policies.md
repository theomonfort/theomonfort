---
title: "エンタープライズポリシー"
---

**エンタープライズポリシー**は、[[Enterprise Governance|エンタープライズガバナンス]]の最上位から組織とプラットフォーム全体にガードレールを適用します。リポジトリ自体にポリシー設定はなく、組織はエンタープライズが強制するポリシーを**厳しくすることしかできません**（緩和は不可）。`Enabled` / `Disabled` と `No policy` / `Let organizations decide` の違いが重要です。

## リポジトリ、アクセス、トークンのポリシー

- **可視性とフォーク**: パブリックリポジトリの作成を禁止します。特に OSS 専用組織以外、または [[EMU Account Restrictions|EMU アカウントの制約]]下では全体に適用します。可視性を変更したりリポジトリを削除したりできるユーザーを制限し、プライベート / 内部リポジトリのフォークはデフォルトで無効にします。
- **外部招待と PAT**: [[Outside Collaborators|外部コラボレーター]]の招待を `Owners only` に限定し（初期値は `No policy`）、fine-grained Personal Access Token に管理者承認フローを必須化します（[[GitHub Well-Architected Guardrails|GitHub Well-Architected のガードレール]]を参照）。
- **Apps と監査ログ**: エンタープライズ全体の GitHub Apps をエンタープライズレベルで一元的にインストールし、SIEM / クラウドストレージへの**監査ログストリーミング**を有効化して、UI の短い標準保持期間を超えてイベントを保存します。

## GitHub Actions のサプライチェーンポリシー

未検証のサードパーティコードにビルドをさらす**ガバナンスのアンチパターン #04（`Allow all actions`）**を避けます。

- 許可するアクションを **GitHub 作成**、**Verified Creators**、明示的な社内用 / SHA 固定の許可リストに限定します。
- ワークフローのデフォルト `GITHUB_TOKEN` 権限を **`read-only`** にし、Actions による PR 自動承認を無効化します。Actions の実行とセルフホステッドランナーグループの対象を、承認済みリポジトリに限定します。

## Copilot モデルとエンタープライズで直接割り当てたユーザーのポリシー

- **グローバルモデルポリシーと自動選択**: **Global model policy**（GA `2026-08-26`、[[Enterprise & Org Teams|エンタープライズチームと組織チーム]]によるモデルの対象指定は `2026-07-31` プレビュー）で新規モデルのエンタープライズ既定値を設定します。クライアントの既定は **Auto model selection**（GA `2026-07-01`）とし、必要なら [[Copilot with Data Residency|データレジデンシー対応 Copilot]]でリージョン内モデルを強制します。
- **エンタープライズで直接割り当てたユーザーのポリシー**: 組織に所属せず、エンタープライズから直接 **Copilot Business** を付与されたユーザー（[[GHE & Copilot Licenses|GHE と Copilot のライセンス]]を参照）には、「Let organizations decide」は適用されません。機能の利用可否は `Enterprise -> AI controls -> Copilot -> Policies for enterprise-assigned users` で管理します。`Disabled` にすると、組織へ委任されたすべての機能がそのユーザーでは無効になります。
