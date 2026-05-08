---
title: サードパーティエージェント
titleEn: Third-party agents
summary: Claude や Codex など、Copilot 以外の coding agent を、VS Code・GitHub 上で Copilot と同じ操作感で起動できる仕組み。
icon: 🧬
color: magenta
order: 15.5
category: develop
related: ['cloud-agent', 'copilot-chat', 'github-copilot']
links:
  - group: GitHub Docs
    label: About third-party agents
    url: https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents
  - group: GitHub Docs
    label: Anthropic Claude in GitHub Copilot
    url: https://docs.github.com/en/copilot/concepts/agents/anthropic-claude
  - group: GitHub Docs
    label: OpenAI Codex in GitHub Copilot
    url: https://docs.github.com/en/copilot/concepts/agents/openai-codex
  - group: Policies
    label: Manage policies (個人 / Pro+)
    url: https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-agents-in-your-repositories
  - group: Policies
    label: Manage policies (Organization)
    url: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies
  - group: Policies
    label: Manage policies (Enterprise)
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies
  - group: VS Code Docs
    label: Third-party agents in Visual Studio Code
    url: https://code.visualstudio.com/docs/copilot/agents/third-party-agents
  - group: VS Code Docs
    label: Cloud agents in Visual Studio Code
    url: https://code.visualstudio.com/docs/copilot/agents/cloud-agents
  - group: VS Code Docs
    label: VS Code agent types (Local / Cloud / Third-party)
    url: https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents
  - group: VS Code Docs
    label: Enterprise — enable/disable agents in VS Code
    url: https://code.visualstudio.com/docs/enterprise/ai-settings#_enable-or-disable-the-use-of-agents
  - group: OpenAI Codex
    label: OpenAI Codex VS Code extension
    url: https://marketplace.visualstudio.com/items?itemName=openai.chatgpt
  - group: OpenAI Codex
    label: OpenAI Codex official docs
    url: https://developers.openai.com/codex
  - group: Claude
    label: Claude Code — VS Code extension
    url: https://code.claude.com/docs/en/vs-code
  - group: Claude
    label: Claude Agent SDK
    url: https://code.claude.com/docs/en/agent-sdk/overview
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Third-party agents</strong> は、Copilot 以外の coding agent を Copilot の workflow に並べる仕組み。
  </p>
  <p>
    代表例は <strong>Anthropic Claude</strong> と <strong>OpenAI Codex</strong>。VS Code でも GitHub でも、Copilot と同じ手触りで起動できる。
  </p>
</div>

> 大事なのは、これは **Copilot Chat のモード** ではないということ。**どの provider / harness にタスクを渡すか** の話。請求・rate limit・ガバナンスはすべて **Copilot サブスクリプション側に集約** される。

## 有効化（Enterprise / Org / 個人）

Third-party agents は **デフォルトで OFF**。使う前に、契約レベルに応じた管理者が **policy** で許可する必要がある。**3 段階のガバナンス階層** で制御される。

| レベル | 誰が設定する | どこで | 何が起こる |
| --- | --- | --- | --- |
| **🏢 Enterprise** | Enterprise owner | Enterprise → Policies → Copilot | 配下の **全 org** に対する上限を設定（Allow / Block / No policy） |
| **🏛️ Organization** | Org owner | Organization → Settings → Copilot → Coding agent | org メンバーに対して Claude / Codex を **個別に ON/OFF** |
| **👤 個人 (Pro / Pro+)** | 本人 | [Settings → Copilot → Cloud agent → Partner agents](https://github.com/settings/copilot/coding_agent) | 自分の repo で **トグル** で有効化 |

> ⚠️ VS Code の **local agent**（chat 内で動く Claude / Codex セッション）は **この policy の対象外**。Local の制御は VS Code 側の設定（`github.copilot.chat.claudeAgent.enabled` など）で行う。


## VS Code × OpenAI Codex

VS Code から Codex を使うには、**OpenAI Codex 拡張** をインストールし、起動時に **「Sign in with Copilot」** を選ぶ。Copilot 経由でログインすれば、別途 OpenAI のアカウント・課金は不要。

**手順**

1.  VS Code Marketplace から **OpenAI Codex 拡張** をインストール
2. 拡張を起動して **「Sign in with Copilot」** をクリック
3. Agent Sessions ビューに Codex セッションが現れる


**ポイント**

- 🧩 **拡張のインストールが必要**（Marketplace から OpenAI Codex 拡張）
- 🤖 利用可能なモデルは **OpenAI 系のみ**：`Auto` / `GPT-5.2-Codex` / `GPT-5.3-Codex` / `GPT-5.4` / `GPT-5.4 nano`
- 🌐 リクエストは **すべて Copilot API 経由** — GitHub の billing が適用される


## VS Code × Claude Code

VS Code Chat の **Session Type ピッカー** で、`Local` の代わりに **`Claude`** を選ぶだけ。**拡張のインストールは不要** — Copilot Chat に直接統合されている。

**手順**

1. Chat ビューを開き、**New Chat (`+`)** をクリック
2. **Session Type ドロップダウン** から **`Claude`** を選択
3. プロンプトを入力 → Claude Agent SDK が直接 workspace 上で動く

**ポイント**

- 🧩 **拡張不要** — Copilot Chat にネイティブ統合（Codex とは違って Marketplace から何も入れない）
- 🤖 利用可能なモデル：`Auto` / `Claude Opus 4.5` / `Claude Opus 4.6` / `Claude Opus 4.7` / `Claude Sonnet 4.5` / `Claude Sonnet 4.6`
- 🌐 リクエストは **すべて Copilot API 経由** — GitHub の billing が適用される
- 🛡️ **Permission モード** が選べる：Edit automatically / Request approval / Plan
- ⚙️ Claude 専用 slash コマンドが使える


## Cloud Agent × Codex / Claude SDK

GitHub の **Cloud Agent** にタスクを delegate するとき、ハーネスとして **Copilot / OpenAI Codex SDK / Claude Agent SDK** から選べる。Cloud Agent の枠組み（GitHub Actions 上で実行、PR を返す）はそのまま、**中身のエージェント実装だけ差し替え** られる。

**選択ポイント**

| ハーネス | 強み | 使いどころ |
| --- | --- | --- |
| **Copilot** | GitHub に最適化された標準ハーネス | デフォルトの選択肢、Issue → PR の自動化 |
| **OpenAI Codex SDK** | Codex モデル系列に最適化 | コーディング特化のロングタスク |
| **Claude Agent SDK** | Anthropic の agentic ループ | 長文の reasoning が必要な実装 |

**共通の利点**

- ☁️ 実行環境は Cloud Agent と同じ（GitHub Actions runner）
- 🔐 セキュリティ・検証ツール（CodeQL / Code Review / Secret Scanning / Dependency checks）も **同じ網がかかる**
- 💰 課金は **Copilot 側** に集約
