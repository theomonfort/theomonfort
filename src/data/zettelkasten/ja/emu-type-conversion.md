---
title: "EMU タイプの変換"
---

**EMU タイプの変換**は、個人アカウント型の [[GitHub Enterprise Cloud]] と [[Enterprise Managed Users]] の間で移行するための6段階の手順です（`github.com ->` [[GHE.com Data Residency|GHE.com のデータレジデンシー]]や `EMU -> non-EMU` を含む）。エンタープライズの ID タイプはその場で変更できないため、この移行が必要です（[[Org Transfer & Migration Limits|組織移管と移行の制限]]を参照）。

## 変換を完了する6段階の手順

1. **棚卸しと移行先エンタープライズの作成**: [[GitHub Enterprise Importer]] の移行対象と対象外（シークレット、Apps、Packages、Projects、LFS、ルールセット）を確認し、[[Enterprise Trial & Initial Setup|エンタープライズの試用と初期設定]]で新しい移行先を用意します。
2. **移行先の ID と移行トークンを設定**:
   - 移行先 EMU の IdP に [[SAML & OIDC SSO|SAML と OIDC の SSO]]と [[SCIM Provisioning|SCIM プロビジョニング]]を設定します（`EMU -> non-EMU` では個人アカウントを確認）。
   - 移行元に `org owner` / `migrator`、移行先に `enterprise owner` ロールを付与し（[[Enterprise Admin Roles|エンタープライズの管理ロール]]を参照）、SSO 承認済みの classic PAT を作成して、IP 許可リストが `GEI` の通信を許可することを確認します。
3. **組織名の重複を解消し、テスト組織でリハーサル**:
   - 組織のスラッグは `github.com` 全体で一意です。新しい移行先スラッグを選ぶか、先に移行元組織の名前を変更して元の名前を空けます。
   - 使い捨ての**テスト組織**に CLI で完全移行を試行し、所要時間と警告を確認して手順5〜6も練習します。本番ではテスト組織から同期せず、**新たな完全移行**を実行します。
4. **書き込みを停止し、`gh gei migrate-org` を実行**:
   - 移行元組織へのプッシュ、PR / Issue の編集、ボットの動作を停止します（`GEI` に差分同期はありません）。
   - 移行を阻む [[Enterprise & Repo Rulesets|エンタープライズとリポジトリのルールセット]]に `Repository migrations -> Exempt` を追加し、全リポジトリの移行ログを確認します。`Succeeded` でもデータ欠落の警告が含まれる場合があります。
5. **メンバーをプロビジョニングし、マネキンを再割り当て**:
   - SCIM で社員と [[EMU Guest Collaborators|EMU ゲストコラボレーター]]をプロビジョニングし、[[IdP Group & Team Sync|IdP グループとチームの同期]]でチームを再構成します。`gh gei generate-mannequin-csv` を実行し、CSV を移行先組織のメンバーに対応付けてから `gh gei reclaim-mannequin` を実行します。
   - 開発者は PAT / SSH キーを新しく作成し、Git のリモートを更新します（該当する場合は `*.ghe.com` の URL）。
6. **サービスの復元、切り替え、旧環境の課金終了**:
   - Actions のシークレット、変数、環境、ランナー、GitHub Apps、**シークレット付き webhook**、`.github/CODEOWNERS`、ルールセットを再作成します（リポジトリはプライベートとして移行されます）。
   - 検証完了まで移行元組織の凍結を維持し、移行先を再開して、GitHub Sales と旧エンタープライズの課金終了を調整します。
