---
title: "エンタープライズガバナンス"
---

**エンタープライズガバナンス**は、リポジトリごとではなく上位から制御を適用し、[[GitHub]] の組織、リポジトリ、CI/CD パイプライン、Copilot クライアント全体で**誰が何をできるか**を定義します。

## 上位から適用する5つのガバナンス層

| 層 | 適用範囲 | 主な制御と例 |
| --- | --- | --- |
| **1. ポリシー** | 組織 → エンタープライズ | [[Enterprise Policies|エンタープライズポリシー]]の 2FA、リポジトリの可視性、Actions 許可リスト、Copilot モデルへのアクセス |
| **2. 管理ロール** | 組織 → エンタープライズ | [[Enterprise Admin Roles|エンタープライズの管理ロール]]の Enterprise Owner、Org Owner、Security Manager、Billing Manager、カスタムロール |
| **3. 権限ロール** | 組織 → リポジトリ | [[Base Repository Permissions|基本リポジトリ権限]]の下限と、[[Repository Roles|リポジトリロール]]の累積的な `Read`..`Admin` の権限階層 |
| **4. ルールセット** | エンタープライズ / 組織 / リポジトリ | [[Enterprise & Repo Rulesets|エンタープライズとリポジトリのルールセット]]で、カスタムプロパティのフィルターを使ったブランチ、タグ、プッシュの制御 |
| **5. クライアント設定** | Copilot CLI / IDE / App | [[Copilot Managed Settings|Copilot の管理設定]]の MDM、`managed-settings.json`、サンドボックス、MCP 許可リスト |

## 基本的なアーキテクチャ原則

- **アクセスはグループ経由のみ**: [[Organization Topology Models|組織構成モデル]]で組織を設計し、[[IdP Group & Team Sync|IdP グループとチームの同期]]と [[Enterprise & Org Teams|エンタープライズチームと組織チーム]]を使って、すべての権限を `IdP -> Teams -> Repositories` 経由で付与します。個々のユーザーへ直接付与しません。
- **下位では制限の強化のみ**: リポジトリ自体はポリシーを持ちません。組織は [[Enterprise Policies|エンタープライズポリシー]]を継承し、制限を厳しくできますが、エンタープライズが強制するルールを緩めることはできません。
- **プラットフォーム運用の健全性**:
  - エンタープライズ全体で使う **GitHub Apps** は組織ごとではなく、**エンタープライズレベル**で一度だけインストールし、承認の分散や設定のずれを防ぎます。
  - REST / GraphQL API のポーリングでレート制限を消費せず、シークレットと SSL で保護した**イベント駆動の webhook** を使用します。
  - **監査ログストリーミング**を外部 SIEM やオブジェクトストレージに設定し、デフォルトの短い保持期間を超えてコンプライアンスの証跡を保存します。[[GitHub Well-Architected Guardrails|GitHub Well-Architected のガードレール]]にある21項目すべての推奨事項と併せて実施します。
