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
  hex: "#00f0ff"
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
    url: https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions
  - group: 📖 公式ドキュメント
    label: Actions runner pricing
    url: https://docs.github.com/en/billing/reference/actions-runner-pricing
  - group: 🛒 Marketplace
    label: GitHub Marketplace · Actions
    url: https://github.com/marketplace?type=actions
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

<img src="/theomonfort/github-actions-sdlc.svg" alt="GitHub Actions が SDLC 全体（Plan・Code・Build・Test・Release・Deploy・Operate・Monitor）で使える様子" style="width:100%;max-width:760px;display:block;margin:1.2em auto;" />

## 改善する指標(DORA メトリクス)

自動化(CI/CD・テスト・レビュー)の狙いは、開発の **スピードと安定性** を両立させること。ものさしは <a class="retro-link" href="https://dora.dev/" target="_blank" rel="noopener noreferrer">DORA の 4 指標 ↗</a>、これを Elite に近づける。

| DORA 指標 | 🟢 Elite | 🟣 High | 🟠 Medium | 🔴 Low |
| --- | --- | --- | --- | --- |
| 🚀 デプロイ頻度 | 1 日に複数回 | 1 日〜1 週に 1 回 | 1 週〜1 月に 1 回 | 1 月〜6 月に 1 回 |
| ⏱️ リードタイム | < 1 日 | 1 日〜1 週 | 1 週〜1 月 | 1 月〜6 月 |
| ❌ 変更失敗率 | 0–15% | 0–15% | 0–15% | 46–60% |
| 🔧 平均復旧時間(MTTR) | < 1 時間 | < 1 日 | < 1 日 | 1 週〜1 月 |

> 🎯 スピード(頻度・リードタイム)と安定性(失敗率・復旧時間)を **同時に** 上げるのが自動化の価値。

## アーキテクチャ:clone → 実行 → 破棄

GitHub 上の repo が **クラウドの使い捨て VM** に clone され、そこで test 等を実行 → 結果を返して **VM は破棄** される。

```mermaid
flowchart LR
  REPO["🐙 GitHub<br/>📦 Repository"]
  VM["☁️ Runner VM<br/>使い捨て・クラウド"]
  RUN["▶️ steps 実行<br/>✅ test ・ 🏗️ build"]
  GONE["💥 VM 破棄"]
  REPO -->|① event で起動| VM
  VM -->|② repo を clone| RUN
  RUN -->|③ 結果・ログを返す| REPO
  RUN -->|④ 完了| GONE

  classDef gh fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef vm fill:#1a0a2e,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef run fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef gone fill:#2a0a0a,stroke:#ff5555,color:#ff5555,stroke-width:2px
  class REPO gh
  class VM vm
  class RUN run
  class GONE gone
```

> 🔁 結果は checks・ログ・artifact として GitHub に戻り、VM は毎回破棄される。

## 仕組み(コアコンセプト)

すごくシンプル: **イベントが起きたら、まっさらな VM を借りて、リポを clone して、書いた手順を順に走らせる**。

- 📁 **配置場所** — `.github/workflows/*.yml`(複数ファイル可)
- ⚡ **トリガー** — `push` / `pull_request` / `schedule`(cron) / `workflow_dispatch`(手動) / `issues` / `release` ほか 35+ イベント
- 🖥️ **実行環境** — ジョブごとに新品の **GitHub-hosted runner**(Linux / Windows / macOS の VM)が起動
- 📦 **リポは毎回 clone** — `actions/checkout` で `$GITHUB_WORKSPACE` に full clone(状態は前回のジョブから引き継がない)
- ⏱️ **時間制限** — 1 ジョブ最大 6 時間、1 workflow 最大 35 日(matrix で並列もできる)
- 🔐 **シークレット** — `Settings → Secrets` に保存 → `${{ secrets.NAME }}` で参照(ログにマスク)

> 🧠 「毎回ゼロから」が GitHub Actions の鉄則。状態を保ちたいなら `actions/cache` か artifact、デプロイ済みのものに頼る。

## GitHub-hosted runner と Self-hosted runner

| 観点 | 🟢 GitHub-hosted runner | 🛠️ Self-hosted runner |
| --- | --- | --- |
| 管理 | GitHub が提供・更新・破棄 | 自分のサーバー / VM / k8s に常駐させる |
| OS | Linux / Windows / macOS | 何でも(Raspberry Pi、社内 LAN、GPU マシンも可) |
| ネットワーク | 公開インターネット | 社内ネットワーク・VPN 内のリソースに直接アクセス可 |
| スケール | 必要な時に自動起動、並列無制限(プラン枠内) | 自分でキャパシティ管理 |
| 料金 | **時間課金**(下表) | **runner 自体は無料**(自前のインフラ代だけ) |
| 用途 | 一般的な CI/CD、OSS、軽量ジョブ | 専用 HW、社内資産アクセス、機密案件、巨大ビルド |

> 🌐 中間として **larger runners**(GitHub-hosted の高スペック)や **Actions Runner Controller** で k8s 上に自動スケールする self-hosted runner を建てる手もある。

## Marketplace で部品を再利用

ゼロから書く必要はない。**GitHub Marketplace** に **20,000+** の再利用可能な action が公開されている。

```yaml
steps:
  - uses: actions/checkout@v4              # GitHub 公式: リポを clone
  - uses: actions/setup-node@v4            # Node.js 環境セットアップ
    with: { node-version: 20 }
  - uses: docker/build-push-action@v5      # Docker イメージビルド & push
  - uses: aws-actions/configure-aws-credentials@v4
```

- 🏷️ **公式 verified actions** — GitHub・AWS・Azure・GCP・Docker・HashiCorp ほか主要ベンダー
- 🔓 **OSS の action** — 誰でも公開可能(`uses: owner/repo@sha` で参照)
- 📌 **必ずバージョン固定** — タグ(`@v4`)よりも **コミット SHA で pin** が安全(supply chain 攻撃対策)
- 🛡️ **Org で許可リスト** — `Settings → Actions → Allowed actions` で利用可能な action を絞れる

## 始め方(最短ルート)

`.github/workflows/ci.yml` を 1 つ置くだけ:

```yaml
name: CI
on:
  push:        { branches: [main] }
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm test
```

push した瞬間から **Actions タブ** で実行ログが見える。失敗すれば PR にも ❌ が付く。

> 🚀 まず `runs-on: ubuntu-latest` で全部書いて、必要に応じて Windows / macOS / larger runner / self-hosted へスケールアウトすれば良い。

## 利用条件と料金

**Public repo は GitHub-hosted runner も完全無料・並列上限のみ**。Private repo はプランごとに無料枠 → 超過分は従量課金。

### プランごとの無料枠(private repo / 月)

| プラン | Actions 分 / 月 | ストレージ |
| --- | :---: | :---: |
| Free | 2,000 分 | 500 MB |
| Pro | 3,000 分 | 1 GB |
| Team | 3,000 分 | 2 GB |
| Enterprise | 50,000 分 | 50 GB |

> 💡 無料枠は **Linux 1 分 = 1 分** カウント。Windows は **2 倍**、macOS は **10 倍** 消費するので注意。

### OS / サイズ別の単価(超過時 · 2-core 標準)

| OS / Runner | 倍率 | 単価(USD/分) | 備考 |
| --- | :---: | :---: | --- |
| Linux 2-core | 1× | $0.008 | 標準・最安 |
| Windows 2-core | 2× | $0.016 | Linux の 2 倍 |
| macOS 3-core | 10× | $0.08 | iOS / mac ビルド用 |
| Linux 4-core(larger) | — | $0.016 | Team / Enterprise |
| Linux 8-core(larger) | — | $0.032 | |
| Linux 16-core(larger) | — | $0.064 | |
| Linux 64-core(larger) | — | $0.256 | 巨大ビルド用 |
| GPU runner | — | $0.07〜 | ML / 推論 |

> 💰 ストレージ超過は **$0.25 / GB**(artifacts + Actions cache + Packages 合算)。  
> 🛠️ **Self-hosted runner は GitHub 課金なし**(現時点)。自前サーバー / k8s に建てれば実行時間は無料、ただしメンテと電気代は自分持ち。  
> 🌍 課金は **active committer ベースではなく実行時間ベース**。1 人開発でも CI を回しまくれば請求が来る。

## Cloud Agent / Copilot Code Review もここで動く

> 🤖 **Copilot Cloud Agent** がタスクを実装する時、**Copilot Code Review** が PR を読みに行く時 — どちらも裏側では **GitHub Actions の workflow** として動いている。Actions の無料枠を消費し、Actions のログとして表示される。詳細は <a class="retro-link" href="/theomonfort/playbook/cloud-agent/">Cloud Agent</a> ・ <a class="retro-link" href="/theomonfort/playbook/copilot-code-review/">Copilot Code Review</a> 参照。

