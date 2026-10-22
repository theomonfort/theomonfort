---
title: "GitHub CLI：再ログインを繰り返さず、短命な OAuth トークンを使う"
date: "2026-10-21"
summary: "有効期限付きのアクセストークンを選択すると、gh が自動更新します。漏えいしたアクセストークンは数時間で使えなくなり、通常の CLI 操作や設定済みの HTTPS Git 操作は継続できます。"
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-21-github-cli-opt-in-to-expiring-auto-refreshing-oauth-tokens/"
---

### これまでと何が違う？

**これまで**：GitHub CLI の標準の対話型ログインでは、有効期限のない長期利用の OAuth トークンを使っていました。繰り返しログインする必要はない一方、漏えいしたトークンは失効させるまで使われる可能性がありました。

**オプトイン後**：`gh` が**短命なアクセストークンと、ローテーションするリフレッシュトークン**を保存し、必要なときに自動更新します。ログインの利便性を保ちながら、盗まれたアクセストークンは数時間で使えなくなります。保存されたリフレッシュ用の認証情報の保護と、侵害時の失効は引き続き必要です。

### 有効化するには

**GitHub CLI v2.103.0 以降**で実行します。

```sh
gh auth login --expiring
gh auth status
```

`gh auth status` でアクセストークンの有効期限を含む認証状態を確認できます。以後のログインで毎回フラグを付けずに有効期限付きの認証情報を要求するには、次を設定します。

```sh
gh config set expiring_credentials enabled
```

**既存のログインが自動的に変換されるわけではありません。** 手動で渡したトークンの動作も変わらず、PAT や環境変数のトークンが更新可能な OAuth 認証情報になるわけではありません。

### 切り替え前に確認する 2 点

- **HTTPS の Git 操作**：`gh auth setup-git` を実行し、`gh` を Git の認証情報ヘルパーとして使います。`gh` が認証情報の提供と更新を担当します。有効期限を超えたキャッシュを防ぐため、**Git 2.46 以降を推奨**します。SSH キーとは別の話です。
- **トークンをコピーするスクリプト**：`gh auth token` の結果を一度だけ取得して保存するスクリプトや拡張機能は、期限切れで動かなくなります。できるだけ `gh` を直接呼び出すか、外部ツールで必要になるたびに `gh auth token` で新しい値を取得します。ログには出力しないでください。固定の長期トークンを必要とする処理は、移行を見合わせます。

後から `gh auth refresh` でスコープを追加する際も、`--expiring` を付けるか設定を有効にしておきます。そうしないと、有効期限のない認証情報に置き換わることがあります。

### 利用条件

**2026-10-22 時点**では **github.com と ghe.com** で利用できる**オプトインのパブリックプレビュー**です。**GHES は 3.23 以降**で対応します。非対応のサーバーでは有効期限のないトークンにフォールバックするため、フラグだけで判断せず、実際の認証状態を確認してください。

[認証と有効期限付きトークン](https://docs.github.com/en/enterprise-cloud@latest/github-cli/github-cli/authenticating-with-github-cli) / [GitHub CLI v2.103.0](https://github.com/cli/cli/releases/tag/v2.103.0)
