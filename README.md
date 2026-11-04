# Théo Monfort

GitHub Japan のソリューションズエンジニア。

GitHub Copilot や AI 駆動開発に関するプレイブック、ハンズオン、更新情報を日本語と英語で公開しています。

[サイトを見る](https://theomonfort.github.io/theomonfort/)

## Changelog

更新情報は `src/content/changelog/ja/` と `src/content/changelog/en/` に同じファイル名で追加します。Universe 2026 の対象記事には frontmatter に `event: universe-2026` を指定すると、カテゴリとは別に白い文字のイベントバッジと虹色の枠が表示されます。日付だけでは判定しません。複数の発表をまとめる場合は、代表の `source` に加えて本文にすべての公式発表へのリンクを載せます。

## GitHub Actions の依存関係更新

`.github/dependabot.yml` で GitHub Actions の更新を毎週確認します。Dependabot は更新用の PR を作成し、ロックファイルを導入済みの `deploy.yml` のアクションを更新する場合は、`.github/workflows/actions.lock` も同じ PR で更新します。自動マージは設定していないため、変更をレビューしてからマージします。
