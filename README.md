# Théo Monfort

GitHub Japan のソリューションズエンジニア。

GitHub Copilot や AI 駆動開発に関するプレイブック、ハンズオン、更新情報を日本語と英語で公開しています。

[サイトを見る](https://theomonfort.github.io/theomonfort/)

## 表示テーマ

通常表示では画面右下の `RETRO` / `PHOSPHOR` ボタンでテーマを切り替えます。プレゼンモードでは左上の言語ボタン横に表示します。選択はページ移動や再読み込み後も保持されます。BGM 機能は廃止しました。操作音と 3D マップの環境音は個別の既存機能として残しています。

## Playbook のアーカイブ

通常の一覧から外す項目は、日英両方の frontmatter に `archived: true` を指定します。`/theomonfort/archive`（英語は `/theomonfort/en/archive`）に表示され、通常の一覧、2D/3D マップ、プレゼン目次、前後の項目ナビゲーションからは外れます。既存の `/playbook/<slug>` URL とスライドのディープリンクは維持します。アーカイブされた項目の目次と前後移動はアーカイブ内に限定し、一覧に戻る操作もアーカイブへ戻ります。

## Playbook の折りたたみ表示

長いコード例は、既存の `demo-toggle` / `demo-panel is-info` を使い、見出し横の `CODE` ボタンから開くポップアップに配置できます。`Escape`、閉じるボタン、背景クリックで閉じ、スライド移動時にも閉じます。

項目数が多い一覧には `ctl-widget ctl-compact` を使います。同じ `name` の `<details>` で説明を 1 件ずつ開き、低い画面では文字サイズを抑えます。モバイルでは要約の補助タグを隠すため、設定パスなどの情報は展開後の本文にも記載してください。日本語と英語の構造を揃えます。

開閉時の再センタリングでスライド全体が動く場合は `ctl-widget ctl-stable` を使います。そのスライドだけをプレゼンモードで上寄せし、見出しの位置を固定します。行の開閉アニメーションと通常のドキュメント表示は変わりません。

導入文が長い場合は、段落に `ctl-intro`、一覧に `ctl-widget ctl-tight` を指定できます。プレゼンモードの行間と余白だけを詰め、文字サイズと通常表示は維持します。

## Playbook の動画

動画スライドの例は `src/content/playbook/ja/copilot-app.md` と英語版を参照してください。動画とポスターは `public/media/` に置き、両言語で同じ `/theomonfort/media/` URL を使います。`data-playbook-video` 内の動画は `data-src` と `preload="metadata"` を使い、プレゼンでは対象スライドに入るまで動画を読み込みません。

共通処理は `src/lib/playbook-video.ts`。クリックで全画面再生し、Esc で同じスライドに戻ります。動画操作中のキーはスライド移動に使わず、スライドやページを離れると一時停止します。全画面表示や再生に失敗した場合は、ローカライズしたメッセージと通常の操作ボタン、MP4 へのリンクを残します。

## Zettelkasten の言語

プレゼンの `Z` ボタンで開くナレッジグラフは、サイトの日本語 / 英語の切り替えに連動します。ノート本文、タイトル、検索、操作ラベルが切り替わります。製品名、タグ、ファイル名は共通です。

英語の原文は `src/data/zettelkasten/<vault>/`、共通の日本語訳は `src/data/zettelkasten/ja/<slug>.md` に置きます。共通訳の原文は `extended` を優先し、そこにないノートは vault 名のアルファベット順で最初の原文を使います。本文が異なる vault には `ja/<vault>/<slug>.md` を追加します。日本語ファイルには `title` と本文だけを記述し、分類とタグは原文から引き継ぎます。原文を更新するときは対応する日本語訳も更新してください。

リンク先の `[[English Title]]` とファイル名は翻訳しません。英語タイトルは別名として維持されるため、既存のリンクとスライド対応は変わりません。表示ラベルは日本語タイトルに切り替わり、必要なら `[[English Title|日本語ラベル]]` で指定できます。翻訳とリンクの整合性は `node --test src/lib/zettelkasten/localize.test.js`、サイト全体は `pnpm build` で確認します。

## Changelog

更新情報は `src/content/changelog/ja/` と `src/content/changelog/en/` に同じファイル名で追加します。Universe 2026 の対象記事には frontmatter に `event: universe-2026` を指定すると、カテゴリとは別に白い文字のイベントバッジと虹色の枠が表示されます。日付だけでは判定しません。複数の発表をまとめる場合は、代表の `source` に加えて本文にすべての公式発表へのリンクを載せます。

## GitHub Actions の依存関係更新

`.github/dependabot.yml` で GitHub Actions の更新を毎週確認します。Dependabot は更新用の PR を作成し、ロックファイルを導入済みの `deploy.yml` のアクションを更新する場合は、`.github/workflows/actions.lock` も同じ PR で更新します。自動マージは設定していないため、変更をレビューしてからマージします。
