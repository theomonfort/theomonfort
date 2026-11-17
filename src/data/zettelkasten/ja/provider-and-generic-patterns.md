---
title: "プロバイダーパターンと汎用パターン"
---

[[Secret Protection]] は、2種類の組み込みパターンによる決定論的な検出を重ね、さらに [[Custom Patterns|カスタムパターン]]と [[AI-Detected Secrets|AI によるシークレット検出]]を追加します。

## 1. プロバイダーパターン

- **200社以上のクラウドおよび SaaS パートナー**が登録した正規表現形式です（AWS、Azure、GCP、GitHub PAT、Slack、Stripe、OpenAI、Anthropic、Salesforce など）。
- 誤検出率が非常に低く、[[Secret Scanning Alerts|シークレットスキャンアラート]]と [[Push Protection|プッシュ保護]]の両方で既定で有効です。[[Validity Checks|有効性チェック]]と [[Partner Program|パートナープログラム]]の対象にもなります。

## 2. 汎用パターン

- ベンダーの接頭辞がない非構造的な標準形式を検出します。`rsa_private_key`、`openssh_private_key`、MongoDB / MySQL / Postgres の接続文字列、HTTP Basic / Bearer ヘッダーなどが対象です。
- Secret Protection で検出は有効ですが、開発者の作業を妨げないよう [[Push Protection|プッシュ保護]]は**既定で無効**です。チームはパターンごとにプッシュのブロックを有効にするか、[[Rulesets & Merge Protection|ルールセットとマージ保護]]を使って PR 時に適用できます。
