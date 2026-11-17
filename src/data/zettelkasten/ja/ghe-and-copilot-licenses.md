---
title: "GHE と Copilot のライセンス"
---

**GHE と Copilot のライセンス**は、[[GitHub]] のエンタープライズが基本プラットフォームのシート、コミッター向けセキュリティライセンス、開発者向け AI プランを購入し、割り当てる仕組みです。請求は1つのエンタープライズ請求書にまとめられます。

## 3層のエンタープライズライセンスとサービスモデル

| 課金カテゴリ | 製品 / SKU | 消費するユーザー |
| --- | --- | --- |
| **ユーザーライセンス** | **GitHub Enterprise** または **Visual Studio Subscription** バンドル | 組織への参加、またはプライベート / 内部リポジトリへのアクセスがあるユーザー（[[Enterprise Procurement Channels|エンタープライズの調達経路]]を参照） |
| **コミッターライセンス** | **GitHub Advanced Security**（`Code Security` / `Secret Protection`） | 保護されたプライベート / 内部リポジトリへコミットをプッシュまたはマージするアクティブコミッター |
| **従量課金アドオン** | **Copilot Business / Enterprise**、**Actions**、**Codespaces**、**Packages**、**Git LFS** | シート保有者と、[[Usage-Based Billing|従量課金]]におけるトークン / コンピューティングの消費（`LFS` は現在、移行期間中無料） |

## Copilot Business と Copilot Enterprise

- **エンタープライズ単位の課金**: Copilot のシートは未使用でも割り当て時点から課金されます（請求期間の途中では日割り計算）。[[Multi-Org Seat Deduplication|複数組織間のシート重複排除]]により、ユーザーごとの重複が排除されます。
- **2つのエンタープライズ向けプラン**:
  - **Copilot Business（1ユーザーあたり月額 `$19`）**: [[Shared AI Credit Pool|共有 AI クレジットプール]]に `1,900` AI クレジット（`$19` 相当）を含みます。エンタープライズに属さない単独の組織でも利用できます。
  - **Copilot Enterprise（1ユーザーあたり月額 `$39`）**: `3,900` AI クレジット（`$39` 相当）に加え、リポジトリのインデックス化された知識を使う `github.com` の Web Chat、ファインチューニングモデル、エンタープライズ監査ログを含みます（[[GitHub Enterprise Cloud]] が必要）。

## 組織での割り当てとエンタープライズからの直接割り当て

各組織は Copilot のプランを**1つ**選びます（Business **または** Enterprise。同一組織内で混在不可）。`2025-10-28` の GA 以降、管理者はエンタープライズレベルで **Copilot Business** を直接割り当てることもできます。

| 割り当て画面 | 利用可能なプラン | 対象とポリシーの動作 |
| --- | --- | --- |
| **Org → Copilot → Access** | Business **または** Enterprise（組織のプランに一致） | その組織のメンバー（[[Outside Collaborators|外部コラボレーター]] / [[EMU Guest Collaborators|EMU ゲストコラボレーター]]も含む）が対象 |
| **Enterprise → Copilot → Access** | **Business のみ**（GA `2025-10-28`） | すべての組織でユーザーに追従。または GHE シートを消費せずに**未所属ユーザー**へ付与（[[License Audit & Seat Reclamation|ライセンス監査とシート回収]]を参照） |

組織に所属せず、エンタープライズから直接ライセンスを付与されたユーザーには「Let organizations decide」は適用されず、[[Enterprise Policies|エンタープライズポリシー]]の **Policies for enterprise-assigned users** に従います。
