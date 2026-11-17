---
title: パートナーエージェント
titleEn: Partner agents
summary: Claude や Codex など、Copilot 以外の coding agent を、VS Code・GitHub 上で Copilot と同じ操作感で起動できる仕組み。
icon: /theomonfort/icons/partner-agent.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 15.5
category: develop
related: ['cloud-agent', 'copilot-chat', 'github-copilot']
links:
  - group: GitHub Docs
    label: About Partner agents (third-party agents)
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
    label: Partner agents
    url: https://code.visualstudio.com/docs/copilot/agents/third-party-agents
  - group: VS Code Docs
    label: Cloud agents
    url: https://code.visualstudio.com/docs/copilot/agents/cloud-agents
  - group: VS Code Docs
    label: Agent types (Local / Cloud / Partner)
    url: https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents
  - group: VS Code Docs
    label: Enterprise agent policy
    url: https://code.visualstudio.com/docs/enterprise/manage-ai-settings#_claude-and-codex-availability
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
  - group: 📰 Recent Changelog
    label: "GPT-5.3-Codex default, Business/Enterprise (2026-05-18)"
    url: https://github.blog/changelog/2026-05-17-gpt-5-3-codex-is-now-the-base-model-for-copilot-business-and-enterprise
  - group: 📰 Recent Changelog
    label: "JetBrains inline agent preview (2026-04-24)"
    url: https://github.blog/changelog/2026-04-24-inline-agent-mode-in-preview-and-more-in-github-copilot-for-jetbrains-ides
  - group: 📰 Recent Changelog
    label: "Cloud Claude/Codex model picker (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-model-selection-for-claude-and-codex-agents-on-github-com
  - group: 📰 Recent Changelog
    label: "Claude/Codex for Business & Pro (2026-02-26)"
    url: https://github.blog/changelog/2026-02-26-claude-and-codex-now-available-for-copilot-business-pro-users
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Partner agents</strong> は、Copilot 以外の coding agent を Copilot の workflow に並べる仕組み。
  </p>
  <p>
    代表例は <strong>Anthropic Claude</strong> と <strong>OpenAI Codex</strong>。VS Code でも GitHub でも、Copilot と同じ手触りで起動できる。
  </p>
</div>

## 有効化（Enterprise / Org / 個人） <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-partner-policy" class="demo-toggle" /><label class="h2-demo" for="demo-partner-policy">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-partner-policy" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Partner-agent policies</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-partner-policy" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">ENTERPRISE: OCTODEMO</p>
<p><a class="retro-link" href="https://github.com/enterprises/octodemo/ai-controls/copilot/features" target="_blank" rel="noopener noreferrer">Octodemo の AI controls を開く ↗</a>。サイドバーの <b>Agents</b> を選択。</p>
<p>Claude / Codex の policy と、許可対象の organization を確認。Enterprise owner 権限が必要。</p>
<p class="demo-out">Enterprise policy が、org owner に許可される範囲を決める。</p>
</li>
<li>
<p class="demo-step-title">ORGANIZATION: THEOMONFORT-ORG</p>
<p><a class="retro-link" href="https://github.com/organizations/theomonfort-org/settings/copilot/coding_agent" target="_blank" rel="noopener noreferrer">theomonfort-org の agent 設定を開く ↗</a>：<code class="demo-path">Settings → Copilot → Cloud → Partner agents</code>。</p>
<p><b>Allow Claude coding agent</b> と <b>Allow Codex coding agent</b> を確認。Org owner 権限が必要。</p>
<p class="demo-out">Enterprise policy の範囲内で、各 partner を個別に制御する。</p>
</li>
<li>
<p class="demo-step-title">PERSONAL ACCOUNT</p>
<p><a class="retro-link" href="https://github.com/settings/copilot/coding_agent" target="_blank" rel="noopener noreferrer">個人の agent 設定を開く ↗</a>：<code class="demo-path">Settings → Copilot → Cloud agent → Partner agents</code>。</p>
<p class="demo-out">有料の個人プランでは、cloud agent が有効な自分の repo にトグルが適用される。</p>
</li>
<li>
<p class="demo-step-title">VS CODE と比較</p>
<p>従来の <b>Local</b> harness に代わる <b>Copilot</b> も、手元のマシンで動く。Copilot で Claude モデルを選んでも、Claude harness には切り替わらない。</p>
<p>Claude / Codex harness は VS Code 側の別の制御に従う。<a class="retro-link" href="https://code.visualstudio.com/docs/enterprise/manage-ai-settings#_claude-and-codex-availability" target="_blank" rel="noopener noreferrer">Enterprise-managed settings が適用されると無効になる ↗</a>。別途 provider の認証情報を使っても回避できない。</p>
</li>
</ol>
</div>
</div>

**GitHub 上で動く partner agents はデフォルトで OFF**。契約レベルに応じて有効化する。Org の設定で Enterprise policy を上書きすることはできない。

| レベル | 誰が設定する | 何が起こる |
| --- | --- | --- |
| **🏢 Enterprise** | Enterprise owner | **配下の org** の agent 利用範囲を決める |
| **🏛️ Organization** | Org owner | Claude / Codex を **個別に ON/OFF** |
| **👤 個人（有料プラン）** | 本人 | **自分の repo** で partner を有効化 |

> ⚠️ **Copilot は harness 名であり、cloud 実行という意味ではない**。上の policy は **GitHub 上の agent** が対象。VS Code の **Claude / Codex harness** は別の制御に従い、**Copilot enterprise-managed settings** が適用されると無効になる。


## VS Code × OpenAI Codex

VS Code から Codex を使うには、**OpenAI Codex 拡張** をインストールし、起動時に **「Sign in with Copilot」** を選ぶ。Copilot 経由でログインすれば、別途 OpenAI のアカウント・課金は不要。

<div class="partner-setup-columns">
<div>

### はじめ方

- VS Code Marketplace から **OpenAI Codex 拡張** をインストール
- 拡張を起動して **「Sign in with Copilot」** をクリック
- **Agent Sessions** ビューで Codex セッションを開く

</div>
<div>

### 押さえるポイント

- **専用の拡張が必要**。VS Code にインストールして使う
- **OpenAI モデルのみ**。利用可能なモデルは拡張のピッカーで確認
- **Copilot で課金**。リクエストはすべて Copilot API 経由

</div>
</div>

## VS Code × Claude Code

VS Code Chat の **harness ピッカー** で、`Copilot` の代わりに **`Claude`** を選ぶ。**拡張のインストールは不要**。Copilot Chat に直接統合されている。

<div class="partner-setup-columns">
<div>

### はじめ方

- Chat ビューを開き、**New Chat** をクリック
- **harness ピッカー** から **`Claude`** を選択
- プロンプトを入力し、**Claude Agent SDK** を workspace 上で実行

</div>
<div>

### 押さえるポイント

- **Copilot で課金**。リクエストはすべて Copilot API 経由
- **Permission モードを選択**。Edit automatically / Request approval / Plan
- **Claude 専用コマンド**。専用の slash コマンドが使える

</div>
</div>

## Cloud Agent × Codex / Claude SDK

Copilot Chat のモードではなく、**agent harness** を選ぶ。変わるのは **エージェントの実装**。GitHub の workflow は変わらない。

<div class="partner-setup-columns">
<div>

### Harness を選ぶ

- **Copilot**。Issue → PR を自動化する GitHub 標準の harness
- **OpenAI Codex SDK**。長い coding タスク向けの Codex 特化 harness
- **Claude Agent SDK**。深い reasoning を伴う実装向けの Anthropic の agentic ループ

</div>
<div>

### 変わらないこと

- **Actions → PR**。Actions 上で実行し、pull request を返す流れは同じ
- **同じ安全網**。CodeQL、code review、secret scanning、依存関係チェック
- **Copilot に集約**。請求、rate limit、ガバナンスを同じ契約で管理

</div>
</div>
