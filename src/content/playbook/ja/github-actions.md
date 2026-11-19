---
title: GitHub Actions
titleEn: GitHub Actions
summary: GitHub にネイティブ統合された CI/CD・自動化プラットフォーム。.github/workflows/*.yml に書いた手順を push / PR / schedule で自動実行する。public は無料、private は無料枠 + 従量課金。Cloud Agent や Copilot Code Review もこの上で動く。
icon: /theomonfort/icons/github-actions.svg
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#5eead4"
order: 19.2
category: secure
related: ['cloud-agent', 'copilot-code-review', 'agentic-workflow', 'dependabot']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Actions documentation
    url: https://docs.github.com/actions
  - group: 📖 公式ドキュメント
    label: Workflow syntax
    url: https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions
  - group: 📖 公式ドキュメント
    label: About billing for GitHub Actions
    url: https://docs.github.com/en/billing/concepts/product-billing/github-actions
  - group: 📖 公式ドキュメント
    label: Actions runner pricing
    url: https://docs.github.com/en/billing/reference/actions-runner-pricing
  - group: 💰 課金
    label: Set up budgets and alerts
    url: https://docs.github.com/en/billing/how-tos/set-up-budgets
  - group: 💰 課金
    label: Using soft budgets to monitor without blocking
    url: https://docs.github.com/en/billing/tutorials/soft-budgets
  - group: 💰 課金
    label: Actions usage metrics
    url: https://docs.github.com/en/actions/concepts/metrics
  - group: 🛒 Marketplace
    label: GitHub Marketplace · Actions
    url: https://github.com/marketplace?type=actions
  - group: 📰 Recent Changelog
    label: "Actions workflow lockfiles are generally available (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available
  - group: 📰 Recent Changelog
    label: "GitHub Actions: Upcoming image migrations (2026-05-14)"
    url: https://github.blog/changelog/2026-05-14-github-actions-upcoming-image-migrations
  - group: 📰 Recent Changelog
    label: "Actions workflows are limited to 50 reruns (2026-04-10)"
    url: https://github.blog/changelog/2026-04-10-actions-workflows-are-limited-to-50-reruns
  - group: 📰 Recent Changelog
    label: "Actions OIDC tokens now support repository custom properties (2026-03-12)"
    url: https://github.blog/changelog/2026-03-12-actions-oidc-tokens-now-support-repository-custom-properties
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>GitHub Actions</strong> は「継続的インテグレーション / 継続的デリバリー(CI/CD)」のプラットフォーム。
  </p>
  <p>
    でも <strong>DevOps だけじゃない</strong>。push・PR・issue・label・schedule など <strong>リポジトリで起きるあらゆるイベント</strong> で workflow を走らせられる = <strong>ほぼ何でも自動化</strong> できる基盤。
  </p>
</div>

## どんな workflow を自動化できる?

CI/CD だけでなく、**SDLC のあらゆる工程** をイベント起点で自動化できる。

<div class="actions-sdlc">
<img src="/theomonfort/github-actions-sdlc.svg" alt="GitHub Actions が SDLC 全体（Plan・Code・Build・Test・Release・Deploy・Operate・Monitor）で使える様子" width="919" height="610" />
</div>

## 改善する指標(DORA メトリクス)

自動化(CI/CD・テスト・レビュー)の狙いは、開発の **スピードと安定性** を両立させること。ものさしは <a class="retro-link" href="https://dora.dev/" target="_blank" rel="noopener noreferrer">DORA の 4 指標 ↗</a>、これを Elite に近づける。

<div class="tbl-fit">

| DORA 指標 | 🟢 Elite | 🟣 High | 🟠 Medium | 🔴 Low |
| --- | --- | --- | --- | --- |
| 🚀 デプロイ頻度 | 1 日に複数回 | 日〜週に 1 回 | 週〜月に 1 回 | 月〜半年に 1 回 |
| ⏱️ リードタイム | < 1 日 | 1 日〜1 週 | 1 週〜1 月 | 1〜6 か月 |
| ❌ 変更失敗率 | 0–15% | 0–15% | 0–15% | 46–60% |
| 🔧 平均復旧時間(MTTR) | < 1 時間 | < 1 日 | < 1 日 | 1 週〜1 月 |

</div>

## アーキテクチャ:clone → 実行 → 破棄

GitHub 上の repo が **クラウドの使い捨て VM** に clone され、そこで test 等を実行 → 結果を返して **VM は破棄** される。

<div class="actions-architecture">
<svg viewBox="0 0 1100 210" role="img" aria-label="イベントで runner を起動、リポジトリを clone して手順を実行し、結果を GitHub に返して VM を破棄する">
<defs><marker id="actions-flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10 Z" /></marker></defs>
<g class="actions-sdlc-links" marker-end="url(#actions-flow-arrow)">
<path d="M225 125 H300" /><path d="M495 125 H570" /><path d="M765 125 H840" /><path d="M670 80 V35 H130 V75" />
</g>
<g class="actions-sdlc-nodes">
<rect x="35" y="80" width="190" height="90" /><rect x="305" y="80" width="190" height="90" /><rect x="575" y="80" width="190" height="90" /><rect x="845" y="80" width="190" height="90" />
</g>
<g class="actions-flow-text">
<text x="130" y="112"><tspan class="actions-sdlc-title">GitHub</tspan><tspan x="130" dy="27">Repository</tspan></text>
<text x="400" y="112"><tspan class="actions-sdlc-title">Runner VM</tspan><tspan x="400" dy="27">使い捨て・クラウド</tspan></text>
<text x="670" y="112"><tspan class="actions-sdlc-title">Steps 実行</tspan><tspan x="670" dy="27">Test・build</tspan></text>
<text x="940" y="112"><tspan class="actions-sdlc-title">Job 完了</tspan><tspan x="940" dy="27">VM を破棄</tspan></text>
<text x="265" y="112">① 起動</text><text x="535" y="112">② Clone</text><text x="805" y="112">④ 完了</text><text x="400" y="24">③ 結果・ログ</text>
</g>
</svg>
</div>

> 🔁 結果は checks・ログ・artifact として GitHub に戻り、VM は毎回破棄される。

## 仕組み(コアコンセプト)

イベントで新しい VM を起動し、リポジトリを取得して手順を順に実行する。

<div class="actions-concepts">
<p>📁 <strong>Workflow:</strong> <code>.github/workflows/*.yml</code>（複数ファイル可）。</p>
<p>⚡ <strong>イベント:</strong> <code>push</code>、<code>pull_request</code>、cron <code>schedule</code>、手動 <code>workflow_dispatch</code>、<code>issues</code>、<code>release</code> など 35+。</p>
<p>🖥️ <strong>Runner:</strong> ジョブごとに新しい GitHub-hosted Linux / Windows / macOS VM。</p>
<p>📦 <strong>Checkout:</strong> <code>actions/checkout</code> で <code>$GITHUB_WORKSPACE</code> に clone。ジョブ間で状態を引き継がない。</p>
<p>⏱️ <strong>制限:</strong> 1 ジョブ 6 時間、1 workflow 35 日。matrix で並列実行可。</p>
<p>🔐 <strong>Secrets:</strong> <code>Settings → Secrets</code> に保存し、<code>${{ secrets.NAME }}</code> で参照。ログではマスク。</p>
<p>状態の保持には <code>actions/cache</code>、artifact、デプロイ済み環境を使う。</p>
</div>

## Runner を選ぶ <a class="h2-doc" href="https://docs.github.com/en/actions/concepts/runners/github-hosted-runners" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<p class="actions-compact-lead"><strong>管理を任せるなら GitHub-hosted。自社環境で動かすなら Self-hosted。</strong></p>

<table class="compact-table actions-runners">
<thead><tr><th></th><th>GitHub-hosted</th><th>Self-hosted</th></tr></thead>
<tbody>
<tr><td>保守</td><td>GitHub が環境を管理</td><td>更新とセキュリティは自社で管理</td></tr>
<tr><td>容量</td><td>プランの上限内で自動起動</td><td>自社設備、Kubernetes なら ARC</td></tr>
<tr><td>接続</td><td>公開ネットワーク / 構成したプライベート接続</td><td>自社ネットワークと専用機器</td></tr>
<tr><td>実行料金</td><td>public の標準 runner は無料、ほかは従量課金</td><td>インフラ代のみ、Actions の実行課金なし</td></tr>
</tbody>
</table>

管理を任せたまま高性能にするなら、Team / Enterprise Cloud の **larger runners**。

## Marketplace で部品を再利用 <a class="h2-doc" href="https://docs.github.com/en/actions/reference/security/secure-use" target="_blank" rel="noopener noreferrer">📖 Docs</a>

各 step を自作せず、<a class="retro-link" href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">Marketplace の action ↗</a> を組み合わせる。

<table class="compact-table">
<thead><tr><th>やりたいこと</th><th>再利用する action</th></tr></thead>
<tbody>
<tr><td>コードを取得</td><td><code>actions/checkout</code></td></tr>
<tr><td>Node.js を準備</td><td><code>actions/setup-node</code></td></tr>
<tr><td>コンテナーをビルド</td><td><code>docker/build-push-action</code></td></tr>
</tbody>
</table>

<ul class="actions-compact-list">
<li><strong>ソースを確認</strong>。認証済み公開者もレビュー。</li>
<li><strong>lockfile または完全な SHA で固定</strong>。タグは移動可能。</li>
<li><strong>Org の許可リスト</strong>を Settings → Actions → General で設定。</li>
</ul>

## Workflow を 1 つ作る <a class="h2-doc" href="https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Node.js プロジェクトに <code>.github/<wbr>workflows/<wbr>ci.yml</code> を追加:

<div class="pre-compact">

```yaml
name: CI
on: { push: { branches: [main] }, pull_request: {} }
permissions: { contents: read }
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - { uses: actions/setup-node@v7, with: { node-version: 24 } }
      - run: npm ci && npm test
```

</div>

push → **Actions のログと PR チェック**。lockfile または完全な SHA で固定。

## 実行料金と無料枠 <a class="h2-doc" href="https://docs.github.com/en/billing/concepts/product-billing/github-actions" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="info-actions-pricing" class="demo-toggle" /><label class="h2-demo h2-info" for="info-actions-pricing">&#9432; INFO</label>

<div class="demo-panel is-info">
<label class="demo-scrim" for="info-actions-pricing" aria-label="料金の詳細を閉じる"></label>
<div class="demo-window" role="group" aria-label="実行料金とストレージ料金">
<div class="demo-head"><span class="demo-tag">INFO</span><span class="demo-name">実行料金とストレージ</span><label class="demo-close" for="info-actions-pricing" aria-label="閉じる">&#10005;</label></div>
<div class="info-body">
<p>USD、2026-11-11 時点。無料の実行枠は固定の分数ではなく月ごとの金額。対象 runner とクラウドサンドボックスの CPU / メモリが同じ枠を使う。</p>
<ul class="info-list">
<li><b>標準単価:</b> Linux x64 2-core は $0.006/分、Windows x64 2-core は $0.010/分、macOS 3/4-core は $0.062/分。<a class="retro-link" href="https://docs.github.com/en/billing/reference/actions-runner-pricing" target="_blank" rel="noopener noreferrer">全サイズと料金 ↗</a>。</li>
<li><b>Larger runners:</b> public repo でも有料。Team / Enterprise Cloud では対象の利用分を無料の実行枠から差し引ける。</li>
<li><b>Artifact:</b> Free 500 MB、Pro 1 GB、Team 2 GB、Enterprise Cloud 50 GB。Packages と共有。超過は $0.25/GB-month。</li>
<li><b>Cache:</b> repo ごとに別枠で 10 GB。追加容量を設定した場合、超過は $0.07/GB-month。カスタムイメージも別枠で、超過単価は同じ。</li>
<li><b>請求:</b> リポジトリ所有者が支払う。ストレージは時間単位で累積し、削除しても過去の利用料金は消えない。</li>
</ul>
</div>
</div>
</div>

<p class="actions-compact-lead"><strong>Public の標準 runner と self-hosted の実行は無料</strong>。それ以外の対象利用は共通の無料枠から消費。</p>

| プラン | 月の実行無料枠 |
| --- | ---: |
| Free | $12 |
| Pro / Team | $18 |
| Enterprise Cloud | $300 |

<p class="actions-pricing-note">USD、<strong>2026-11-11 時点</strong>。$300 は Linux 2-core <strong>50,000 分</strong>相当（$0.006/分）。超過分は従量課金、ストレージは別枠。</p>

## CI 以外の利用も予算に含める <a class="h2-doc" href="https://docs.github.com/en/billing/how-tos/set-up-budgets" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<p class="actions-compact-lead"><strong>自動化は実行枠を共有。AI クレジットは別のメーター。</strong></p>

<table class="compact-table">
<thead><tr><th>利用元</th><th>実行枠の消費</th></tr></thead>
<tbody>
<tr><td>CI、<a class="retro-link" href="/theomonfort/playbook/code-scanning/">CodeQL</a>、<a class="retro-link" href="/theomonfort/playbook/code-quality/">Code Quality</a></td><td>ホスト型 runner での実行 / スキャン</td></tr>
<tr><td><a class="retro-link" href="/theomonfort/playbook/copilot-code-review/">Copilot Code Review</a></td><td>エージェントの文脈取得とツール実行</td></tr>
<tr><td><a class="retro-link" href="/theomonfort/playbook/cloud-agent/">Copilot のクラウドタスク</a></td><td>Actions またはサンドボックスの実行</td></tr>
</tbody>
</table>

<div class="actions-budget-notes">
<p><strong>監視:</strong> soft budget の <strong>75 / 90 / 100%</strong> 通知と利用指標を確認。</p>
<p><strong>停止は慎重に:</strong> “Stop usage when budget limit is reached” は、<strong>その予算の対象範囲</strong>の追加有料利用を止める。</p>
<p>Code Review は Actions によるエージェント機能なしでも動作可能。Actions 予算で <strong>Copilot 全体が止まるわけではない</strong>。</p>
</div>

## Workflow lockfiles (GA) <a class="h2-doc" href="https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-actions-lockfiles" class="demo-toggle" /><label class="h2-demo" for="demo-actions-lockfiles">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-actions-lockfiles" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">このサイトの workflow を固定</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-actions-lockfiles" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">タグとコミットを比較</p>
<p><a class="retro-link" href="https://github.com/actions/checkout/tree/v4" target="_blank" rel="noopener noreferrer">checkout@v4 ↗</a> と、<a class="retro-link" href="https://github.com/actions/checkout/commit/11d5960a326750d5838078e36cf38b85af677262" target="_blank" rel="noopener noreferrer">固定したコミット ↗</a> を開く。</p>
<p class="demo-out">タグは移動できるが、完全な SHA は特定のリビジョンを識別する。<code>v4.4.0</code> もタグ。</p>
</li>
<li>
<p class="demo-step-title">既存の LOCKFILE を開く</p>
<p><a class="retro-link" href="https://github.com/theomonfort/theomonfort/blob/main/.github/workflows/actions.lock" target="_blank" rel="noopener noreferrer">このサイトの actions.lock ↗</a> を開き、<code class="demo-path">workflows</code> と <code class="demo-path">dependencies</code> を見せる。</p>
<p class="demo-out">checkout の SHA をコミット画面と照合。<code>owner_id</code>、<code>repo_id</code>、推移的依存の <code>upload-artifact</code> も確認する。</p>
</li>
<li>
<p class="demo-step-title">ファイルを変更せず検証</p>
<p>最新のサイトを checkout し、<code>gh-actions-lock</code> を導入済みの環境で実行:</p>
<code class="demo-cmd">gh actions-lock --verify .github/workflows/deploy.yml</code>
<p class="demo-out">workflow と lockfile が一致すれば成功。現在の <code>v4</code> タグが、記録した <code>v4.4.0</code> のコミットと同じとは限らない。</p>
</li>
<li>
<p class="demo-step-title">LOCKFILE を段階的に必須化</p>
<p>権限のある管理者として <a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/actions/rules" target="_blank" rel="noopener noreferrer">theomonfort-org → Actions Policies ↗</a> を開く。</p>
<p>場所: Organization の <code class="demo-path">Settings → Actions → Policies → New policy → New policy</code>（ドロップダウン内）。名前とデモ対象 repo / workflow を設定し、<code class="demo-path">Require lockfile</code> をオンにして保存。</p>
<p class="demo-out">Enterprise Cloud では <code>Evaluate</code> から開始し、<code>Policy insights</code> を確認。対象 workflow の導入完了後に <code>Active</code> にする。</p>
</li>
</ol>
</div>
</div>

**なぜ重要？** `v4` のような action のタグは、別のコードを指すように変更できる。workflow を変更していなくても、次のビルドで未確認の変更や悪意のあるコードが実行されるおそれがある。

**何をする？** lockfile は、各 action と、その action が依存する action の正確なコミットを記録する。GitHub Actions は、移動するタグではなく、記録されたコミットを実行する。

- **更新をレビュー:** Dependabot が <a class="retro-link" href="https://github.com/theomonfort/theomonfort/blob/main/.github/dependabot.yml" target="_blank" rel="noopener noreferrer">action の更新 ↗</a>と lockfile の変更を、同じプルリクエストで提案する。
- **導入を必須化:** 管理者は、選択した workflow が lockfile を使うまで<a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/actions/rules" target="_blank" rel="noopener noreferrer">実行をブロック ↗</a>できる。
