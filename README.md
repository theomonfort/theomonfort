# Théo Monfort

GitHub Japan のソリューションズエンジニア。

GitHub Copilot や AI 駆動開発に関するプレイブック、ハンズオン、更新情報を日本語と英語で公開しています。

[サイトを見る](https://theomonfort.github.io/theomonfort/)

## Playbook の折りたたみ表示

長いコード例は、既存の `demo-toggle` / `demo-panel is-info` を使い、見出し横の `CODE` ボタンから開くポップアップに配置できます。`Escape`、閉じるボタン、背景クリックで閉じ、スライド移動時にも閉じます。

項目数が多い一覧には `ctl-widget ctl-compact` を使います。同じ `name` の `<details>` で説明を 1 件ずつ開き、低い画面では文字サイズを抑えます。モバイルでは要約の補助タグを隠すため、設定パスなどの情報は展開後の本文にも記載してください。日本語と英語の構造を揃えます。

開閉時の再センタリングでスライド全体が動く場合は `ctl-widget ctl-stable` を使います。そのスライドだけをプレゼンモードで上寄せし、見出しの位置を固定します。行の開閉アニメーションと通常のドキュメント表示は変わりません。

導入文が長い場合は、段落に `ctl-intro`、一覧に `ctl-widget ctl-tight` を指定できます。プレゼンモードの行間と余白だけを詰め、文字サイズと通常表示は維持します。

## Changelog

更新情報は `src/content/changelog/ja/` と `src/content/changelog/en/` に同じファイル名で追加します。Universe 2026 の対象記事には frontmatter に `event: universe-2026` を指定すると、カテゴリとは別に白い文字のイベントバッジと虹色の枠が表示されます。日付だけでは判定しません。複数の発表をまとめる場合は、代表の `source` に加えて本文にすべての公式発表へのリンクを載せます。

## GitHub Actions の依存関係更新

`.github/dependabot.yml` で GitHub Actions の更新を毎週確認します。Dependabot は更新用の PR を作成し、ロックファイルを導入済みの `deploy.yml` のアクションを更新する場合は、`.github/workflows/actions.lock` も同じ PR で更新します。自動マージは設定していないため、変更をレビューしてからマージします。
