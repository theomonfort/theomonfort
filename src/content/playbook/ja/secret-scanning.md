---
title: Secret Scanning
titleEn: Secret Scanning
summary: コミット・Issue・PR・履歴に紛れ込んだ API キーやトークンを自動検出する GitHub のシークレット検知機能。Push protection でコミット前にブロックも可能。public は無料、push protection は private でも無料。
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
    label: About secret scanning
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning
  - group: 📖 公式ドキュメント
    label: About push protection
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection
  - group: 📖 公式ドキュメント
    label: Supported secrets (provider patterns)
    url: https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns
  - group: 📖 公式ドキュメント
    label: Defining custom patterns
    url: https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning
  - group: 📖 公式ドキュメント
    label: Enabling secret scanning for your repo
    url: https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository
  - group: 📰 Recent Changelog
    label: "Secret scanning with GitHub MCP Server is now GA (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-secret-scanning-with-github-mcp-server-is-now-generally-available
  - group: 📰 Recent Changelog
    label: "Secret scanning pattern updates and product improvements (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-secret-scanning-pattern-updates-and-product-improvements
  - group: 📰 Recent Changelog
    label: "Secret scanning in AI coding agents via the GitHub MCP Server (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-secret-scanning-in-ai-coding-agents-via-the-github-mcp-server
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Secret Scanning</strong> は、リポジトリに紛れ込んだ API キー・トークン・接続文字列を自動で見つけてくれる GitHub の検知機能。
  </p>
  <p>
    既にコミット済みのものは <strong>アラート</strong>、これからコミットされるものは <strong>Push protection</strong> で git push の時点でブロック。漏洩前に止めるのが基本戦略。
  </p>
</div>

## Detection と Push protection の違い

Secret Scanning は **2 つのモード** で動く。やるべきは両方 ON。

| 機能 | いつ動く？ | 何をする？ | 対象範囲 |
| --- | --- | --- | --- |
| 🔍 **Secret scanning alerts** | コミット後(履歴も含めて常時) | 検出された secret を Security タブに通知 | コミット履歴・Issue・PR・description・Wiki |
| 🛡️ **Push protection** | `git push` の直前 | secret を含む push を拒否(bypass 可) | これから入る変更のみ |
| ✅ **Validity checks** | アラート発生時 | secret がまだ有効かをプロバイダー API に問い合わせ | 一部対応プロバイダー(AWS、GitHub、Slack ほか) |

> 🔑 **Alerts** = 既に入った secret を見つける、**Push protection** = そもそも入れない。Push protection が一番効く(履歴改変が要らない)。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" target="_blank" rel="noopener noreferrer">About secret scanning ↗</a> ・ <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection" target="_blank" rel="noopener noreferrer">About push protection ↗</a>

## 何を検出するのか

- 🏷️ **Provider patterns** — AWS、Azure、GCP、Stripe、Slack、OpenAI、GitHub PAT など 200+ パートナーが登録した正規表現で検知。誤検知が極めて少ない
- 🧪 Generic / non-provider patterns — `password = "..."` や HTTP basic auth、汎用 API キー風の文字列。AI による検出(Copilot Secret Scanning)も対象に追加可能
- 🛠️ **Custom patterns** — 自社独自トークン用に正規表現を自分で定義(GHAS が必要)
- 📚 対象 — コードだけでなく Issue・PR・コミットメッセージ・description・Wiki・gist まで

> 🤖 Generic secrets と AI detection は誤検知が増えがち。**Push protection** とセットで使うと "通そうとした瞬間に止まる" ので運用しやすい。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns" target="_blank" rel="noopener noreferrer">Supported secrets (provider patterns) ↗</a> ・ <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning" target="_blank" rel="noopener noreferrer">Defining custom patterns ↗</a>

## 漏洩した時の対応フロー

Secret が見つかった時にやることは **検知より修復が大事**。

1. 🚨 **即座に rotate / revoke** — リポジトリから消すだけでは不十分(履歴と他人の clone に残る)
2. 📣 GitHub から通知される — パートナープログラムに参加しているプロバイダーは secret を自動で無効化する場合あり(AWS、GitHub PAT など)
3. 🧹 アラートを close — `Revoked` / `False positive` / `Used in tests` のいずれかでクローズ
4. 🛡️ Push protection を ON にして再発防止

## 始め方（最短ルート）

**Step 1 — Push protection を ON(これが最優先)**

```
Repo → Settings → Code security
  ✅ Secret scanning
  ✅ Push protection
```

Public repo は **デフォルト ON** で完全無料。Private repo のリポレベル push protection は Secret Protection / GHAS が必要だが、ユーザー個人の opt-in なら全プラン無料(`User → Settings → Code security and analysis`)。

**Step 2 — 既存の漏洩をスキャン**

ON にすると過去のコミット履歴も自動でスキャンされる。Security タブにアラートが並ぶので、上から rotate していく。

**Step 3 — Custom pattern を追加**

```
Repo or Org → Settings → Code security → Secret scanning → Custom patterns
```

正規表現で自社独自のトークン形式を登録。Public repo は無料、private repo は GHAS / Secret Protection が必要。Dry run で誤検知をチェックしてから本番投入する。

**Step 4 — Org / Enterprise で一括 ON**

`Org → Settings → Code security` の **default settings** から、新規 / 既存リポジトリにまとめて適用できる。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository" target="_blank" rel="noopener noreferrer">Enabling secret scanning for your repo ↗</a>

## 利用条件と料金

| 機能 | Public repo | Private repo（Non GHAS / Secret Protection） | Private repo（With GHAS / Secret Protection） |
| --- | :---: | :---: | :---: |
| Push protection（ユーザー個人 opt-in） | ✅ 無料 | ✅ 無料(2024〜) | ✅ |
| Push protection（リポ / 組織レベル） | ✅ 無料 | ❌ | ✅ |
| Secret scanning alerts | ✅ 無料 | ❌ | ✅ |
| Partner secret invalidation | ✅ 自動 | ❌ | ✅ 自動 |
| Validity checks | ✅ 無料 | ❌ | ✅ |
| Custom patterns | ✅ 無料 | ❌ | ✅ |
| AI detection (generic) | ✅ 無料 | ❌ | ✅ |

> 💰 2025 年に **GHAS が分割** され、secret scanning だけなら **Secret Protection**($19/月/active committer)で OK(GHAS フル契約は不要)。Code scanning も欲しければ GitHub Code Security と組み合わせる。  
> 🆓 個人でも `Settings → Code security` から **ユーザー push protection** を ON にすると、private repo でも secret push を警告してくれる。まずはこれを全社員に勧めるのが最短の事故防止。  
> 🛡️ Push protection(リポ / 組織レベル)は public repo は完全無料・default ON。private / internal repo で組織全体に強制したい場合のみ Secret Protection / GHAS のライセンスが必要。詳細は <a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection" target="_blank" rel="noopener noreferrer">About push protection ↗</a>。

📘 詳細:
- <a class="retro-link" href="https://github.blog/news-insights/product-news/push-protection-is-generally-available-and-free-for-all-public-repositories/" target="_blank" rel="noopener noreferrer">Push protection is GA & free for all public repos(GitHub Blog)↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2024-02-29-push-protection-is-enabled-for-free-users-on-github/" target="_blank" rel="noopener noreferrer">Push protection enabled for free users(2024 Feb)↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security(2025 Mar)↗</a>
- <a class="retro-link" href="https://docs.github.com/en/get-started/learning-about-github/githubs-plans" target="_blank" rel="noopener noreferrer">GitHub plans pricing ↗</a>

## Secret Risk Assessment(無料の棚卸しスキャン)

<div class="hero-quote">
  <p>
    <strong>Secret Risk Assessment</strong> は、Org 内のすべてのリポジトリ(public・private・internal・archived)を 1 回だけスキャンして「どこにどんな secret が眠っているか」を可視化する機能。
  </p>
  <p>
    <strong>GHAS / Secret Protection 不要・完全無料</strong>(2025〜)で、Team・Enterprise の全 Org が使える。購入前の棚卸しや経営報告にちょうどいい。
  </p>
</div>

- 🔎 対象 — Org に属するすべてのリポ(visibility 問わず)。アーカイブ済みも含む
- 📊 出力 — secret の種類・件数・どの repo に何件あるか、を集計レポートで表示(個別 secret の中身は出さない)
- 🕒 頻度 — **point-in-time の一回スキャン**。継続的な監視ではない(継続したいなら Secret Protection を購入)
- 🔐 プライバシー — 検出された secret の値は GitHub に保存されない。統計データのみが Org 管理者に見える
- 🚀 動かし方 — `Org → Settings → Code security → Secret risk assessment → Run assessment`

> 📊 「とりあえず社内に何件 secret が漏れてるか知りたい」「予算稟議のために数字が欲しい」というケースで真っ先に使う。結果を見て **Secret Protection 導入の是非** を判断すれば良い。

📘 詳細: <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
