# Théo Monfort

GitHub Japan のソリューションズエンジニア。

GitHub Copilot や AI 駆動開発に関するプレイブック、ハンズオン、更新情報を日本語と英語で公開しています。

[サイトを見る](https://theomonfort.github.io/theomonfort/)

## 表示テーマ

通常表示では画面右下の `RETRO` / `PHOSPHOR` ボタンでテーマを切り替えます。プレゼンモードでは左上の言語ボタン横に表示します。選択はページ移動や再読み込み後も保持されます。BGM 機能は廃止しました。操作音と 3D マップの環境音は個別の既存機能として残しています。

Playbook の 3D マップでは、惑星やミッションの選択中も `Escape` キーを 1 回押すと 2D 一覧に戻ります。

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

## Daily Tech Digest

`.github/workflows/daily-tech-digest.md` は独自実装の GitHub Agentic Workflow です。毎日 08:00 JST（23:00 UTC）に GitHub Changelog、GitHub Blog、Microsoft DevBlogs、Microsoft Security Blog の公式 RSS を取得し、日本語のプリセールス向けダイジェストを最大 1 件の Issue にまとめます。管理者向けの変更、セキュリティ、DevOps / プラットフォーム、開発者向けの順に優先します。Actions のスケジュール実行は遅れる場合があります。

前回の成功した実実行のチェックポイントから収集し、保持されたチェックポイントがない場合は直近 24 時間を使います。対象期間は記事公開日時について開始時刻を含まず、終了時刻を含みます。閉じた Issue も含む過去の `[daily-tech-digest]` Issue の出典 URL と照合し、同じ JST 日付の 2 件目は作成しません。対象更新がなければ Issue は作成しません。同日スキップ、失敗、プレビューではチェックポイントを進めず、正常な対象なし判定でもチェックポイントを保存します。RSS に後から掲載された過去日付の記事、フィードから消えた記事、90 日のチェックポイント保持期間を超える停止中の更新は網羅できません。

### 有効化とプレビュー

ソースと生成済みの `daily-tech-digest.lock.yml` を `main` にマージするとスケジュールが有効になります。個人所有のリポジトリなので Copilot の推論には `COPILOT_GITHUB_TOKEN` Actions シークレットが必要です。ユーザー自身を Resource owner とする fine-grained PAT で、Account permissions の **Copilot Requests: Read** と有効な Copilot ライセンスを確認してください。シークレット名が存在しても、有効期限や推論権限は実行時にしか確認できません。`copilot-requests: write` による組織課金の認証は個人リポジトリでは使いません。

Actions が有効で、リポジトリの Issue が有効である必要があります。コレクターとエージェントは読み取り専用です。Issue 書き込み権限は生成済みの safe-output ジョブだけに分離し、トークンはこのリポジトリの `GITHUB_TOKEN` を明示します。ラベル作成、外部リポジトリへの書き込み、設定変更は行いません。

Actions 画面の **Daily Tech Digest** から手動実行できます。`dry_run` は既定で `true` です。プレビューは Issue を作成せず、チェックポイントも変更しません。検証済みの本文または対象なし理由は safe-output ジョブの Step Summary に表示されます。本番の手動実行だけ `dry_run=false` を選びます。セットアップ、フィード取得、履歴照合、検証の失敗は Actions のエラーとして表示し、失敗通知用 Issue は作成しません。

### 更新とローカル検証

生成済みファイルは直接編集せず、リポジトリと同じ `gh-aw v1.2.2` で再生成してください。

```sh
gh aw compile daily-tech-digest --no-check-update
python3 -B -m unittest automation.test_daily_tech_digest
pnpm build
```

ローカルテストは合成 RSS / API データを使い、Issue を作成しません。Copilot の実際の日本語要約と推論認証の確認には、マージ後の手動 dry-run が必要です。

公式資料: [認証](https://github.github.io/gh-aw/reference/auth/)、[safe outputs](https://github.github.io/gh-aw/reference/safe-outputs/)、[カスタムジョブ](https://github.github.io/gh-aw/reference/steps-jobs/)。
