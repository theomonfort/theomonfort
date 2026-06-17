---
title: Code Scanning
titleEn: Code Scanning
summary: コードの中の脆弱性を CodeQL が静的解析で見つけ、Copilot Autofix が PR で直してくれる GitHub のセキュリティ機能。Default setup なら設定ファイル不要で 1 クリック。public は無料、private は GHAS / Code Security が必要。
icon: /theomonfort/icons/code-scanning.png
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 19.4
category: secure
related: ['github-advanced-security', 'dependabot', 'secret-scanning']
links:
  - group: 📖 公式ドキュメント
    label: About code scanning
    url: https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning
  - group: 📖 公式ドキュメント
    label: About CodeQL
    url: https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql
  - group: 📖 公式ドキュメント
    label: Configuring default setup
    url: https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
  - group: 📖 公式ドキュメント
    label: About Copilot Autofix
    url: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning
  - group: 📖 公式ドキュメント
    label: SARIF support for code scanning
    url: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Code security risk assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🆓 無料の棚卸し (Risk Assessment)
    label: Code Security Risk Assessment GA (2026/04)
    url: https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/
  - group: 📰 Recent Changelog
    label: "Expanded OIDC support for Dependabot and code scanning (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-expanded-oidc-support-for-dependabot-and-code-scanning
  - group: 📰 Recent Changelog
    label: "CodeQL now supports sanitizers and validators in models-as-data (2026-04-21)"
    url: https://github.blog/changelog/2026-04-21-codeql-now-supports-sanitizers-and-validators-in-models-as-data
  - group: 📰 Recent Changelog
    label: "Link code scanning alerts to GitHub Issues (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-link-code-scanning-alerts-to-github-issues
  - group: 📰 Recent Changelog
    label: "Batch apply security alert suggestions on PRs (2026-04-07)"
    url: https://github.blog/changelog/2026-04-07-code-scanning-batch-apply-security-alert-suggestions-on-pull-requests
  - group: 📰 Recent Changelog
    label: "Faster incremental CodeQL analysis on pull requests (2026-03-24)"
    url: https://github.blog/changelog/2026-03-24-faster-incremental-analysis-with-codeql-in-pull-requests
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Code Scanning</strong> は、リポジトリのソースコードを <strong>静的解析</strong>(SAST)して脆弱性を見つける GitHub の機能。
  </p>
  <p>
    解析エンジンは GitHub 製の <strong>CodeQL</strong>(セマンティック解析)で、見つかった脆弱性は <strong>Copilot Autofix</strong> が AI で修正コード付きの提案まで生成してくれる。Default setup なら 1 クリックで開始。
  </p>
</div>

## Default setup と Advanced setup の違い

CodeQL の有効化方法は 2 つ。**まず Default で十分**。

| 観点 | 🟢 Default setup | 🛠️ Advanced setup |
| --- | --- | --- |
| 設定 | UI で 1 クリック、設定ファイル不要 | `.github/workflows/codeql.yml` を書く |
| 言語検出 | GitHub が自動検出 | YAML で明示 |
| クエリ | `default` セット(GitHub 推奨) | `default` / `security-extended` / `security-and-quality` / カスタム |
| トリガー | push / PR / weekly schedule(自動) | 自分で設定 |
| ビルド | 多くの言語で build 不要(autobuild) | 自分でビルドコマンド指定可 |
| 対象 | クリックで全リポに展開可 | 細かいチューニングが必要なケース |

> 🔑 monorepo・特殊なビルド・カスタムクエリが要らない限り **Default setup がベストプラクティス**。あとから Advanced に切り替え可能。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Configuring default setup ↗</a>

## CodeQL が見つけてくれる脆弱性

CodeQL は **コードを「クエリ可能なデータ」に変換** してから解析するので、grep ベースの SAST より意味を理解した検出ができる。

- 🐛 **インジェクション系** — SQL injection / Command injection / Path traversal / XSS / SSRF
- 🔓 **認証・認可** — 認可漏れ（broken access control）、弱い暗号アルゴリズム (MD5/SHA1)、安全でない乱数生成
- 💣 **メモリ系(C/C++)** — buffer overflow / use after free / null deref
- 🧩 **データフロー追跡** — ユーザー入力(taint source)が危険な関数(sink)に届くかを追跡
- 🌐 **対応言語** — C/C++、C#、Go、Java/Kotlin、JavaScript/TypeScript、Python、Ruby、Swift

> 🔬 CodeQL のクエリは [github/codeql](https://github.com/github/codeql) で OSS 公開されている。自社で独自クエリを書いて拡張可能。

## Copilot Autofix で AI が直す ★

Code Scanning 最大のキラー機能。CodeQL のアラートに対して **AI が修正コードを生成** し、PR にそのままコミットできる。

- 🤖 **どう動く** — アラートを LLM(GPT-4 系)に渡し、該当コード + 周辺コンテキスト + CodeQL の説明を元に diff を生成
- 💬 **どこに表示** — アラート画面 **および** PR にインライン表示。コミット先は **既存ブランチ** または **新規ブランチ** から選択
- ⚡ **MTTR 短縮** — GitHub の社内データで修正時間が 3〜4 倍速に
- 🌐 **対応言語** — JavaScript/TypeScript、Python、Java/Kotlin、C# ほか CodeQL がサポートする言語
- 🆓 **OSS は無料** — public repo の Copilot Autofix は 2024 から完全無料(Copilot 契約も不要)

> 💡 「脆弱性を見つける」だけでなく「**直すところまで AI に任せる**」が新しい標準。レビューの負担が大幅に下がる。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning" target="_blank" rel="noopener noreferrer">About Copilot Autofix ↗</a>

## Copilot へのアサイン — 修正をエージェントに依頼(Public Preview)

**何ができる** — Code Scanning のアラートを **Copilot Coding Agent** に直接アサインすると、Copilot が脆弱性を解析 → 修正計画を立案 → **ドラフト PR を自動作成** してくれる。

- 🎯 **2 つのアサイン方法** — **一括**:Security Campaign で複数アラートを選択 → 「Assign Copilot」で 1 つの PR にまとめて修正 / **個別**:アラート詳細ページの assignee picker から Copilot を選択
- 🤖 **Copilot がやること** — 脆弱性を解析 → 修正計画を立案 → ドラフト PR を作成。PR 上で `@copilot` にコメントすれば反復修正も可
- 📦 **出力** — リポジトリ全体を踏まえた **複数ファイルの変更**(Autofix のインライン単一ファイル修正とは異なる)
- 🛂 **利用条件** — GitHub Code Security または GHAS **+** Copilot Coding Agent(GHEC)。事前に Copilot Autofix で修正提案が生成済みであること(Autofix 対応クエリのみ)
- 📅 **ステータス** — Public Preview(2025-10-28)

📘 詳細: <a class="retro-link" href="https://github.blog/changelog/2025-10-28-assign-code-scanning-alerts-to-copilot-for-automated-fixes-in-public-preview/" target="_blank" rel="noopener noreferrer">Assign code scanning alerts to Copilot(changelog)↗</a>

## Autofix と Copilot へのアサインの違い

| 項目 | 🔧 **Autofix(修正提案)** | 🤖 **Copilot へのアサイン** |
| --- | --- | --- |
| **出力** | インライン修正パッチ — **既存ブランチ** または **新規ブランチ** に直接コミット可 | Copilot ボットが作成するドラフト Pull Request |
| **修正範囲** | 単一ファイル・最小限の局所修正 | 複数ファイル対応。リポジトリ全体を踏まえた変更が可能 |
| **対応単位** | 個別のみ(アラートごとに「Generate fix」を 1 件ずつ実行) | 個別 + 一括対応可。Security Campaign で複数アラートを選択し、1 つの PR にまとめて修正依頼可能 |
| **検証** | 提案時点では検証なし(マージ後の再スキャンで確認) | サンドボックスでコード解析。PR 上で CodeQL / CI が自動実行され結果を事前確認可能 |
| **反復・修正** | 一発提案、再生成不可。気に入らなければ破棄 | PR 上で `@copilot` にコメントすることで反復的に再修正・追加対応が可能 |
| **所要時間** | 数秒(同期処理) | 数分(バックグラウンド非同期処理) |
| **ライセンス・コスト** | 無償。GHAS / GitHub Code Security があれば追加ライセンス不要 | Copilot Coding Agent ライセンスが必要。プレミアムリクエストを消費 |
| **前提条件** | アラートの CodeQL クエリが Autofix 対応である必要あり(未対応クエリでは「Generate fix」が表示されない) | Autofix の修正提案が既に生成済みであることが必要 |

> 🔑 **使い分けの目安** — まず **Autofix** で素早く局所修正。複数ファイルや大きめのリファクタが必要なら **Copilot へのアサイン** にエスカレーション。

## Security Campaigns — 組織横断で計画的に修正

**何か** — **期限付き・組織横断の修正キャンペーン**。対象アラートを絞り込み、オーナー・期限を設定し、ダッシュボードで進捗追跡。

- 🎯 **ユースケース** — 「プロダクト X の SQLi critical を Q2 末までに修正」/ `security-extended` バックログ一掃 / インシデント後の CVE 横断対応
- 🧭 **絞り込み** — severity / CWE / クエリ / 言語 / repo / team / 経過日数(プレビュー付き)
- 👥 **オーナー** — CODEOWNERS / 指定チームに自動ルーティング、team 別に進捗確認
- ⏰ **期限・ダッシュボード** — due date 設定 + open / fixed / overdue を可視化
- 🤖 **Copilot へのアサインと組合せ** — Autofix 対応アラートを一括選択 → repo ごとに 1 PR を自動生成
- 🛂 **権限** — **security manager / org owner** が Org レベルで作成

**作り方**
- `Org → Security and quality → Campaigns → New campaign` — **From template** / **From code scanning filters** / **From secret scanning filters** から選択

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">About security campaigns(GitHub Docs)↗</a>

## 始め方（最短ルート）

**Step 1 — Default setup を ON(これだけで OK)**

```
Repo → Settings → Code security → Code scanning
  → Set up CodeQL → Default
```

GitHub が言語を自動検出して CodeQL workflow を裏で生成。Push と PR で自動実行され、結果は **Security タブ** + PR の Files changed タブにインラインコメントで表示される。

**Step 2 — Copilot Autofix を ON**

Code scanning settings 内の **Copilot Autofix** を有効化。アラート画面に「Generate fix」が出るようになる。

**Step 3 — Advanced setup へ移行(必要なら)**

```yaml
# .github/workflows/codeql.yml
name: CodeQL
on:
  push: { branches: [main] }
  pull_request: { branches: [main] }
  schedule: [{ cron: '30 5 * * 1' }]
jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions: { security-events: write, contents: read }
    strategy:
      matrix: { language: [javascript, python] }
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}
          queries: security-extended
      - uses: github/codeql-action/analyze@v3
```

**Step 4 — サードパーティ SAST も統合(SARIF)**

Semgrep、ESLint security、Snyk などは **SARIF** 形式で結果をアップロードすれば Security タブに同居できる。

```yaml
- uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
```

**Step 5 — Org / Enterprise で一括 ON**

`Org → Settings → Code security → default settings` で新規 / 既存リポに一括適用。Security campaign で「全リポの critical を 30 日以内に修正」のようなキャンペーン管理もできる(Code Security)。

## 利用条件と料金

| 機能 | Public repo | Private repo（Non GHAS / Code Security） | Private repo（With GHAS / Code Security） |
| --- | :---: | :---: | :---: |
| CodeQL(default + advanced) | ✅ 無料 | ❌ | ✅ |
| Third-party SARIF upload | ✅ 無料 | ❌ | ✅ |
| Copilot Autofix | ✅ 無料(2024〜) | ❌ | ✅ |
| Security overview / campaigns | ✅ 無料 | ❌ | ✅ |
| PR インラインコメント | ✅ 無料 | ❌ | ✅ |
| Custom CodeQL クエリ | ✅ 無料 | ❌ | ✅ |

> 💰 2025 年に GHAS が分割され、code scanning だけなら **GitHub Code Security**($30/月/active committer)で OK(GHAS フル契約は不要)。Secret scanning も欲しければ Secret Protection と組み合わせる。  
> 🆓 **Public repo は CodeQL も Autofix も完全無料**。OSS なら今すぐ ON にしない理由がない。  
> ⚙️ Code scanning の workflow は GitHub-hosted runner で実行され、public repo は無料、private repo は GHAS/Code Security 契約に含まれる(別途 Actions 課金は不要)。

📘 詳細:
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security(2025 Mar)↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning" target="_blank" rel="noopener noreferrer">SARIF support for code scanning ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configuring-global-security-settings-for-your-organization" target="_blank" rel="noopener noreferrer">Org default security settings ↗</a>

## Code Security Risk Assessment(無料の棚卸しスキャン)

**何ができる** — Org 内で **最もアクティブな最大 20 リポジトリ** を 1 クリックで CodeQL スキャンし、どこにどんなコード脆弱性が眠っているかを可視化する機能。**GHAS / Code Security ライセンス不要・完全無料**(2026 年 4 月 GA)。

- 🔎 **対象** — 最近のコミットが活発な repo を最大 20 件までセレクト(毎回選び直し可)
- 📊 **出力** — **重大度 (severity) ・ 言語 ・ ルール種別** ごとに集計したレポート、**Copilot Autofix で修正可能な件数** も表示
- 🕒 **頻度** — **90 日に 1 回** 再実行できる(point-in-time の棚卸し)
- 🛂 **権限** — Organization owner / security manager のみ実行可能
- 🚀 **動かし方** — `Org → Security → Assessments → Run code security risk assessment`
- 🆓 **コスト** — ライセンス不要、Actions 分も消費しない — Code Security 購入前の判断材料に最適

> 📊 Secret Risk Assessment(<a class="retro-link" href="/theomonfort/playbook/secret-scanning">Secret Scanning ↗</a> 参照)とセットで「うちの組織のセキュリティ姿勢」を 1 日で可視化できる。結果を見て **Code Security 導入の是非** を判断するのが定石。

📘 詳細:
- <a class="retro-link" href="https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment GA(2026/04)↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment(GitHub Docs)↗</a>
- <a class="retro-link" href="https://github.blog/security/application-security/how-exposed-is-your-code-find-out-in-minutes-for-free/" target="_blank" rel="noopener noreferrer">How exposed is your code? Find out in minutes — for free ↗</a>
