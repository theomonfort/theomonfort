---
title: Secret Scanning
titleEn: Secret Scanning
summary: コミット・Issue・PR・履歴に紛れ込んだ API キーやトークンを自動検出する GitHub のシークレット検知機能。Public repo の基本機能は無料、private / internal repo は Secret Protection が必要。
icon: /theomonfort/icons/secret-scanning.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.6
category: secure
related: ['dependabot', 'github-advanced-security']
links:
  - group: 📖 公式ドキュメント
    label: Secret scanning — core concepts
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/secret-scanning
  - group: 📖 公式ドキュメント
    label: Push protection — core concepts
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/push-protection
  - group: 📖 公式ドキュメント
    label: Full list of supported patterns (provider + generic)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/reference/secret-security/supported-secret-scanning-patterns
  - group: 📖 公式ドキュメント
    label: Validity checks
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/validity-checks
  - group: 📖 公式ドキュメント
    label: Custom patterns
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/custom-patterns
  - group: 📖 公式ドキュメント
    label: Secret scanning partner program
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secret-scanning-partner-program
  - group: 📖 公式ドキュメント
    label: Public monitoring
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring
  - group: 📖 公式ドキュメント
    label: About GitHub Advanced Security products
    url: https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security
  - group: 🔧 手順ガイド
    label: Enable secret scanning on a repository
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning
  - group: 🔧 手順ガイド
    label: Define custom patterns
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns
  - group: 📰 Recent Changelog
    label: "Secret scanning public monitoring for enterprises (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises/
  - group: 📰 Recent Changelog
    label: "Secret scanning with GitHub MCP Server is now GA (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-secret-scanning-with-github-mcp-server-is-now-generally-available/
  - group: 📰 Recent Changelog
    label: "Secret scanning pattern updates and product improvements (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-secret-scanning-pattern-updates-and-product-improvements/
  - group: 📰 Recent Changelog
    label: "Secret scanning in AI coding agents via the GitHub MCP Server (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-secret-scanning-in-ai-coding-agents-via-the-github-mcp-server/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Secret Scanning</strong> は、リポジトリに紛れ込んだ API キー・トークン・接続文字列を自動で見つけてくれる GitHub の検知機能。
  </p>
  <p>
    既にコミット済みのものは <strong>アラート</strong>、これから push されるものは <strong>Push protection</strong> で <code>git push</code> の時点でブロック。漏洩前に止めるのが基本戦略。
  </p>
</div>

## なぜ private repo でも secret はダメなのか

<strong>「Private」はセキュリティ対策ではなく、可視性の設定にすぎない。</strong>secret はコードに置かずシークレットマネージャーで管理し、**Push protection** で入口を塞ぐ。private repo でも平文で置いてはいけない理由は 8 つある。

<div class="risk-widget">
<p class="risk-hint">▸ + をクリックして表示</p>
<div class="risk-list">
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">01</span><span class="risk-icon" aria-hidden="true">🌐</span><span class="risk-label">アクセス範囲は想像以上に広い</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">読み取り権限を持つ Org メンバー全員（数十〜数百人、協力会社や無関係なチーム含む）が閲覧可能。内部フォーク・GitHub App・OAuth App・CI/CD・ランナーが権限を継承。<b>誰が読んだかのログは残らない</b>。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">02</span><span class="risk-icon" aria-hidden="true">🔓</span><span class="risk-label">ワンクリックで public 化</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">操作ミス・リポ移管・Org 設定ミス・ポリシー変更で公開に。攻撃者の自動スキャンは新規 public repo を<b>数秒で検知</b>、漏洩トークンが 60 秒以内に悪用された例も。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">03</span><span class="risk-icon" aria-hidden="true">♾️</span><span class="risk-label">Git 履歴は永久に残る</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">後続コミットで削除しても消えない。履歴・全 clone・フォーク・バックアップ・CI キャッシュに残存。唯一の対処は <b>rotate</b> でありファイル削除ではない。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">04</span><span class="risk-icon" aria-hidden="true">💻</span><span class="risk-label">開発端末が弱点になる</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why"><b>git clone</b> のたびに未管理のラップトップへコピー。マルウェア 1 件・盗難 1 台・アカウント侵害 1 件で十分。被害はサーバー 1 台でなく開発者 N 人分。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">05</span><span class="risk-icon" aria-hidden="true">🎣</span><span class="risk-label">アカウント侵害 = 即アクセス</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">開発者 1 人のフィッシングで、その人が読める全リポの全 secret が流出。secret 自体に <b>MFA・保存時暗号化・有効期限などの追加保護はない</b>。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">06</span><span class="risk-icon" aria-hidden="true">🔗</span><span class="risk-label">ソフトウェアサプライチェーン</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">現在の<b>攻撃ベクトル第 1 位</b>。private repo の secret から本番・レジストリ・クラウドへラテラルムーブメント。Uber・CircleCI・Codecov・Internet Archive が該当例。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">07</span><span class="risk-icon" aria-hidden="true">📋</span><span class="risk-label">コンプライアンスと監査</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">ISO 27001・SOC 2・PCI-DSS・ISMAP は集中管理・rotate・アクセス追跡を要求。Git に平文の secret は 3 点すべて不適合で<b>監査指摘は確実</b>。</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">08</span><span class="risk-icon" aria-hidden="true">💸</span><span class="risk-label">インシデントの実コスト</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">緊急 rotate・本番停止・フォレンジック調査・顧客通知。シークレットマネージャー設定に必要な <b>30 分</b>と比べてほしい。</p>
</details>
</div>
</div>

## 主な機能 <input type="checkbox" id="demo-secret-scanning" class="demo-toggle" /><label class="h2-demo" for="demo-secret-scanning">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-secret-scanning" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Secret Scanning</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-secret-scanning" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">PUSH PROTECTION</p>
<p><code class="demo-path">ghas-test-1</code> で、生成した secret を push する。</p>
<code class="demo-cmd">./demo/secret-scanning/01-push-protection.sh</code>
<p class="demo-out">push が<b>ブロック</b>され、ターミナルに解除用の URL が表示される。</p>
<p>どのパターンを push protection の対象にするかは Enterprise 単位で制御する：<a href="https://github.com/enterprises/octodemo/settings/security_analysis/pattern_configurations" target="_blank" rel="noopener noreferrer">octodemo → Pattern configurations ↗</a>。<b>Enterprise setting</b> 列でパターンごとに ON / OFF を切り替える。<b>Alert total</b>・<b>False positives</b>・<b>Bypass rate</b> が並ぶので、ノイズと risk のバランスを実データで説明できる。</p>
<p class="demo-out">同じページは <b>何を検出するのか</b> のスライドでも扱う（generic patterns を掘り出す）。</p>
</li>
<li>
<p class="demo-step-title">BYPASS PUSH PROTECTION</p>
<p>ブロックメッセージ内の <code class="demo-path">unblock-secret</code> URL をブラウザで開き、理由を選んで bypass する。</p>
<p class="demo-out">「secret can now be pushed」と表示される。</p>
<p>同じブランチをもう一度 push する。</p>
<code class="demo-cmd">git push origin HEAD</code>
<p><b>Security → Secret scanning</b> のクローズ済みアラートを開き、<b>誰が・どの理由で</b> bypass したかを見せる。</p>
<p>bypass を野放しにしない設定：<code class="demo-path">Settings → Advanced Security → Push protection</code> で <b>Who can bypass push protection</b> を <b>Specific roles or teams</b> に（= Delegated bypass）。</p>
</li>
<li>
<p class="demo-step-title">VALIDITY CHECK</p>
<p><b>Security → Secret scanning</b> の default ビューで <b>Validity フィルター</b>を使う。</p>
<p class="demo-out">「今も有効な secret」から優先的に対応でき、実リスク順にトリアージできる。</p>
</li>
</ol>
</div>
</div>

Secret Scanning は 5 つの機能で構成される。入口を塞ぐ **Push protection** が最優先で、残りは検知・対応・provider 連携を支える。

<div class="ctl-widget">
<p class="ctl-hint">▸ + をクリックして詳細を表示</p>
<div class="ctl-list">
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Push protection</span><span class="ctl-when"><code>git push</code> の直前</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/push-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">secret を含む push を<b>その場で拒否</b>。bypass は可能だが理由の記録が残る</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">これから入る変更のみ。<b>AI 検出パスワードは対象外</b>(ノイズが多くブロックできない)</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔍</span><span class="ctl-name">Secret scanning alerts</span><span class="ctl-when">コミット後・常時</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/secret-scanning" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">検出された secret を <b>Security and quality</b> タブに通知</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">全ブランチの Git 履歴全体・Issue・PR・GitHub Discussions・Wiki・secret gists。新しい secret type の追加時に<b>再スキャン</b>される</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">✅</span><span class="ctl-name">Validity checks</span><span class="ctl-when">アラート発生時</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/validity-checks" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">secret が<b>まだ有効か</b>をプロバイダー API に問い合わせ、対応の優先順位を判断できる</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">一部対応プロバイダー(AWS、GitHub、Slack ほか)。<b>AI 検出パスワードは対象外</b>(問い合わせ先のプロバイダーがない)</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤝</span><span class="ctl-name">Partner program</span><span class="ctl-when">public repo で常時 ON</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secret-scanning-partner-program" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">200+ パートナーの secret が漏れると GitHub が <b>provider に直接通報</b>。provider 側で revoke / 再発行される</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">public repo・public npm package のみ。<b>自分のアラート一覧には出ない</b>(無料・設定変更不可)</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🌐</span><span class="ctl-name">Public monitoring</span><span class="ctl-when">github.com 全体をリアルタイム</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">何をする？</span><span class="ctl-v">自分の repo の外(個人フォーク・OSS・公開 issue / PR)で漏れた secret を <b>エンタープライズに帰属</b>させて通知</span></p>
<p class="ctl-row"><span class="ctl-k">対象範囲</span><span class="ctl-v">公開コンテンツのみ。<b>private repo は絶対にスキャンしない</b>。GHEC Enterprise 向け</span></p>
</div>
</details>
</div>
</div>

## 何を検出するのか <input type="checkbox" id="demo-secret-detect" class="demo-toggle" /><label class="h2-demo" for="demo-secret-detect">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-secret-detect" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">検出タイプ</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-secret-detect" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">GENERIC PATTERNS はどこに隠れているか</p>
<p><a href="https://github.com/enterprises/octodemo/settings/security_analysis/pattern_configurations" target="_blank" rel="noopener noreferrer">octodemo → Pattern configurations ↗</a> を開き、default patterns タブをスクロールする。</p>
<p class="demo-out">一覧は<b>フラット</b>。カテゴリ列も provider / generic の区別も絞り込みもない。generic patterns は確かに存在するが、generic とは表示されない。</p>
<p>名前で指し示す。この 10 個が generic patterns のすべて：</p>
<p><code class="demo-path">rsa_private_key</code> <code class="demo-path">openssh_private_key</code> <code class="demo-path">ec_private_key</code> <code class="demo-path">pgp_private_key</code> <code class="demo-path">generic_private_key</code> <code class="demo-path">mongodb_connection_string</code> <code class="demo-path">mysql_connection_url</code> <code class="demo-path">postgres_connection_string</code> <code class="demo-path">http_basic_authentication_header</code> <code class="demo-path">http_bearer_authentication_header</code></p>
<p class="demo-out">いずれも <b>GitHub default</b> は <b>Disabled</b>。検知は動くが push protection は効かない。<b>Enterprise setting</b> 列で ON にして初めて対象になる。</p>
</li>
<li>
<p class="demo-step-title">CUSTOM PATTERN と DRY RUN</p>
<p><code class="demo-path">Settings → Advanced Security → Custom patterns → New pattern</code></p>
<p>該当する secret はデモリポジトリに仕込み済みなので、パターンを作るだけでよい：</p>
<p><b>Pattern name</b> — <code class="demo-path">Octodemo internal service token</code></p>
<p><b>Secret format</b> — <code class="demo-path">octodemo_(live|test)_[A-Za-z0-9]{32}</code></p>
<p><b>Test string</b> — <code class="demo-path">octodemo_live_L1QNGy4DLxQJ8C85kfwP0lmvCHLDuVxJ</code></p>
<p>Test string が緑にならないと保存できない。緑になったら <b>Save and dry run</b>。</p>
<p class="demo-out">dry run は<b>アラートを作らずに</b>仕込んだ secret を検出する。結果を確認してから <b>Publish pattern</b>、必要なら push protection も ON にする。</p>
</li>
</ol>
</div>
</div>

検出エンジンは **4 種類**。パートナー固有の厳密な形式から、AI しか拾えない非構造化 secret まで多層でカバーする。

<div class="det-widget">
<p class="det-hint">▸ クリックして詳細を表示</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-name">Provider patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-title">Provider patterns</span></p>
<p class="det-why">AWS、Azure、GCP、Stripe、Slack、OpenAI、GitHub PAT など <b>200+ パートナー</b>が登録した正規表現で検知。誤検知が極めて少ない。</p>
<p class="det-doc"><a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns" target="_blank" rel="noopener noreferrer">📘 Supported secrets ↗</a></p>
</div>
</details>
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧪</span><span class="det-name">Generic patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🧪</span><span class="det-title">Generic patterns</span></p>
<p class="det-why">private key、接続文字列、HTTP basic auth などの汎用パターン。網が広い分、provider patterns よりトリアージ前提で運用する。<b>デフォルトでは push protection の対象外</b>で、Pattern configurations でパターンごとに ON にする必要がある。</p>
</div>
</details>
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI-detected secrets</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">AI-detected secrets</span></p>
<p class="det-why">パスワードなどの<b>非構造化 secret</b> を AI で検出。正規表現では届かない領域をカバーする。どう設定しても <b>push protection も validity check も非対応</b>で、アラートとしてトリアージする。</p>
</div>
</details>
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-name">Custom patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-title">Custom patterns</span></p>
<p class="det-why"><b>自社独自のトークン形式</b>に正規表現を定義。社内サービスのトークンやレガシーな認証情報など、パートナーが登録しないものを拾う。</p>
<p class="det-doc"><a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning" target="_blank" rel="noopener noreferrer">📘 Defining custom patterns ↗</a></p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">タイプを選択 ▸</p></div>
</div>
</div>

## 漏洩した secret の対応方法 <input type="checkbox" id="demo-secret-campaign" class="demo-toggle" /><label class="h2-demo" for="demo-secret-campaign">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-secret-campaign" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Security campaigns</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-secret-campaign" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">CAMPAIGNS タブ</p>
<p><a href="https://github.com/orgs/theomonfort-org/security/campaigns" target="_blank" rel="noopener noreferrer">theomonfort-org → Campaigns ↗</a> を開く。</p>
<p class="demo-out">トラッキング画面。各 campaign の <b>期限</b>・<b>担当者</b>・未対応 / 対応済みの消化状況が並ぶ。伝えたいのは <b>アラートに担当者と期限が付く場所がここ</b>（スプレッドシートではない）ということ。</p>
</li>
<li>
<p class="demo-step-title">SECRET SCANNING フィルターから作成</p>
<p><code class="demo-path">Create campaign → From secret scanning filters</code></p>
<p>その場でフィルターを組み立てて絞り込みの考え方を見せる。<code class="demo-path">is:open</code> から始め、対象リポジトリを絞り、<b>Validity</b> で <b>Active</b> と <b>Unknown</b> を選ぶ。</p>
<p class="demo-out">フィルターを足すたびに件数が減るのを見せる。これが要点で、<b>バックログではなく終われるリスト</b>になる。保存できるのは <b>1000 alerts まで</b>。</p>
</li>
<li>
<p class="demo-step-title">名前・期限・公開</p>
<p><b>Save as → Draft campaign</b> で下書きし、名前・説明・<b>期限</b>・<b>campaign manager</b> を入力。</p>
<p>manager の候補に <b>org owner と security manager しか出ない</b>ことに触れる。</p>
<p class="demo-out"><b>Review and publish</b> でアラートを見られる人全員に通知が飛び、各リポジトリの Security タブに campaign が出る。secret campaign が <b>public preview</b> であることも一言添える。</p>
</li>
</ol>
</div>
</div>

Secret が見つかった時にやることは **検知より修復が大事**。規模が大きいときは生のアラート一覧を追わず、**security campaign** として回す。

<div class="rem-widget">
<p class="rem-hint">▸ ステップをクリックして詳細を表示</p>
<div class="rem-flow">
<div class="rem-row">
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🎯</span><span class="rem-name">対象を絞る</span></summary>
<div class="rem-plate">
<p class="rem-title">🎯 SCOPE — 重要リポジトリから</p>
<p class="rem-why"><code>Org → Security and quality → Campaigns → Create campaign → From secret scanning filters</code></p>
<p class="rem-why">組織全体ではなく重要なリポジトリに絞る。リポジトリのカスタムプロパティ(<code>props.BusinessPriority:Urgent</code>)が使いやすい。<b>1000 alerts</b> が上限であり、目安でもある。</p>
</div>
</details>
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">⚡</span><span class="rem-name">優先度をつける</span></summary>
<div class="rem-plate">
<p class="rem-title">⚡ TRIAGE — 実リスク順に</p>
<p class="rem-why">validity を <b>Active</b> と <b>Unknown</b> に絞る。<b>Active</b> は今すぐ悪用できる生きた鍵。<b>Unknown</b> は無効と確認できていないので、生きている前提で扱う。</p>
<p class="rem-why"><b>Inactive</b> は後回しでよい。これでバックログが「片付ける価値のあるリスト」になる。</p>
</div>
</details>
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">👤</span><span class="rem-name">担当と期限</span></summary>
<div class="rem-plate">
<p class="rem-title">👤 OWN — 担当者と期限を決める</p>
<p class="rem-why">campaign には必ず <b>期限</b> と <b>campaign manager</b> を設定する。manager に指定できるのは <b>org owner と security manager</b> のみ。</p>
<p class="rem-why">どちらか欠けると rotate は進まない。公開するとアラートを見られる人全員に通知が飛び、各リポジトリの Security タブに campaign が出る。</p>
</div>
</details>
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🚨</span><span class="rem-name">rotate して close</span></summary>
<div class="rem-plate">
<p class="rem-title">🚨 ROTATE — 無効化してクローズ</p>
<p class="rem-why">リポジトリから消すだけでは不十分で、履歴と他人の clone に残り続ける。</p>
<p class="rem-why"><b>public repo</b> で漏れた partner secret は provider 側で revoke され、<b>自分のアラート一覧には出ない</b>。最後に <code>Revoked</code> / <code>False positive</code> / <code>Used in tests</code> で close し、campaign を消化する。</p>
</div>
</details>
</div>
<div class="rem-screen"><p class="rem-empty">ステップを選択 ▸</p></div>
</div>
</div>

## 始め方（最短ルート）

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Settings → Advanced Security</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 1 · PUSH PROTECTION</span>
    </div>
    <p><strong>これから</strong>入る secret を push 時にブロック。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Security → Secret scanning</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 2 · 既存の漏洩</span>
    </div>
    <p><strong>過去の履歴</strong>も自動スキャン。上から rotate。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>… → Custom patterns</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 3 · CUSTOM PATTERNS</span>
    </div>
    <p>自社独自のトークン形式を正規表現で登録。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Org → … → Configurations</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 4 · 全体展開</span>
    </div>
    <p>設定 1 つで Org / Enterprise 全体に一括適用。</p>
  </div>
</div>

> ⚠️ 旧来の Org REST API フィールドは **2026-04-21 に削除済み**。security configurations API を使う。

## 利用条件と製品

<table class="availability-table">
<thead>
<tr>
<th>機能</th>
<th>Public repo</th>
<th>Private / internal<br>製品なし</th>
<th>Secret Protection / GHAS</th>
</tr>
</thead>
<tbody>
<tr><td>Secret scanning alerts</td><td>✅ 無料</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Push protection（リポ / 組織）</td><td>✅ 無料</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Partner program alerts（provider に通知）</td><td>✅ 無料・常時 ON</td><td>❌</td><td>❌ public repo のみ</td></tr>
<tr><td>Validity checks</td><td>❌</td><td>❌</td><td>✅ 対応 provider</td></tr>
<tr><td>Generic patterns</td><td>❌</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Custom patterns</td><td>❌</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>AI-detected secrets</td><td>❌</td><td>❌</td><td>✅ 含む</td></tr>
<tr><td>Public monitoring</td><td>❌</td><td>❌</td><td>✅ GHEC Enterprise</td></tr>
</tbody>
</table>

> 🆓 **ユーザー push protection** は全プランで無料・デフォルト ON だが、public repo への push のみが対象。**Partner alerts** も public repo / public npm package の漏洩だけを provider に通知する(常時 ON、設定変更は不可)。
>
> 👤 **ユーザー所有リポジトリ** は例外扱い。アラートには GHEC の **Enterprise Managed Users**、または Secret Protection を有効にした GHES が必要。Org 所有の private / internal repo なら Team / GHEC で Secret Protection があれば良い。
>
> 💰 Generic / Custom / AI detection、Validity checks、private / internal repo の保護には **Secret Protection または従来の GHAS** が必要。**Public monitoring** は GHEC Enterprise 向けの enterprise-wide 機能。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">Advanced Security products ↗</a> / <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secret-scanning-partner-program" target="_blank" rel="noopener noreferrer">Partner program ↗</a> / <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Public monitoring（NEW） <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">📖 Docs</a>

- 🌐 **公開コンテンツのみ**（git・PR・issue・discussion）。自分の repo の外の漏洩を拾う
- ⚡ リアルタイム監視。Secret Protection / GHAS 対象、追加費用なし
- 🧩 設定不要。有効化した時点で既存の finding も出る

<div class="tbl-compact">

| 帰属の方式 | 判定 | 捕捉できる漏洩 |
| --- | --- | --- |
| 👤 メンバー帰属 | committer がメンバー | 管理・既知アカウント |
| 🌐 検証済みドメイン | 自社ドメインの email | 仕事用 email の個人 |

</div>

<div class="cal-compact">

> ⚙️ **Security and quality** から enterprise owner / security manager が有効化する。

</div>

## Secret Risk Assessment <a class="h2-doc" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Org 全体をスキャンし、secret の在りかを可視化。**Team / Enterprise は無料**。

- 🔎 **対象** — Org の全リポジトリ。visibility 問わず、アーカイブ済みも含む
- 📊 **出力** — secret の種類と件数を repo ごとに集計。値は保存も表示もされない
- 🕒 **頻度** — point-in-time。`Rerun scan` で 90 日ごとに再実行。継続監視ではない
- 🚀 **実行** — `Org → Security and quality → Assessments → Scan your organization`。初回は無料の code security assessment も走る

<div class="cal-compact">

> 📊 「社内に何件漏れているか」を知る用途と、予算稟議の数字づくりに使う。

</div>
