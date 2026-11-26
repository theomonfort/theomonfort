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
    label: Agent harnesses and native Codex setup
    url: https://code.visualstudio.com/docs/agents/run/agent-harnesses#_codex
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
    label: "Codex Agent Host / SDK download (2026-09-16)"
    url: https://code.visualstudio.com/updates/v1_138#_expanded-codex-support-in-the-agent-host
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


## VS Code × OpenAI Codex <a class="h2-doc" href="https://code.visualstudio.com/docs/agents/run/agent-harnesses#_codex" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-partner-codex" class="demo-toggle" /><label class="h2-demo" for="demo-partner-codex">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-partner-codex" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Native Codex setup</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-partner-codex" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">CODEX AGENT HOST を有効化</p>
<p>VS Code の設定で <code class="demo-path">chat.agentHost.codexAgent.enabled</code> を <b>true</b> にする。</p>
<p class="demo-out">OpenAI 拡張なしで、Agents window に Codex が表示される。Enterprise-managed settings で無効化されている場合、ユーザー設定では上書きできない。</p>
</li>
<li>
<p class="demo-step-title">エディターの CHAT ビューでも使う</p>
<p><code class="demo-path">chat.editor.codex.preferAgentHost</code> を <b>true</b> にし、表示される案内に従って VS Code を再起動する。</p>
<p class="demo-out">Chat の Codex がネイティブ統合に切り替わる。拡張が入っている場合はその選択肢を置き換えるため、両方を用意する必要はない。</p>
</li>
<li>
<p class="demo-step-title">HARNESS を選択</p>
<p>Chat を開き、<b>New Chat</b> → <code class="demo-path">Session Target → Codex</code> を選ぶ。</p>
<p class="demo-out">入力欄に <b>Chat with Codex</b> と表示される。Copilot harness 内で Codex モデルを選ぶ操作とは異なる。</p>
</li>
<li>
<p class="demo-step-title">SDK をダウンロード</p>
<p><b>Download the Codex Agent</b> が表示されたら、<b>Download</b> をクリック。モデルが利用可能なら、プロンプトの送信でも SDK のダウンロードが始まる。</p>
<p class="demo-out">ダウンロードするのは agent の実行用 SDK であり、単体の Codex アプリではない。<a class="retro-link" href="https://code.visualstudio.com/updates/v1_138#_on-demand-agent-sdk-downloads" target="_blank" rel="noopener noreferrer">VS Code 1.138 のダウンロード案内 ↗</a></p>
</li>
<li>
<p class="demo-step-title">モデルの利用経路を選択</p>
<p>Copilot 経由のモデルを使う場合は GitHub にサインインする。<a class="retro-link" href="https://code.visualstudio.com/docs/agents/run/agent-harnesses#_codex" target="_blank" rel="noopener noreferrer">VS Code の公式ドキュメント ↗</a> では、この経路に <b>Copilot Pro+</b> が必要（2026-11-17 時点）。</p>
<p>代わりにアカウントメニューの <b>Sign in to ChatGPT</b> も使える。両方にサインインしている場合、Copilot の利用枠と課金を使うには <b>ChatGPT</b> ではなく <b>Copilot</b> のモデルグループを選ぶ。</p>
<p class="demo-out">選択した provider に応じて、アカウント、利用制限、課金先が決まる。</p>
</li>
</ol>
</div>
</div>

**実験的な Agent Host 統合**により、**VS Code から Codex harness を直接使える**。単体の Codex アプリや OpenAI 拡張は不要。

<div class="partner-setup-columns">
<div>

### はじめ方

- **ネイティブ統合**を有効化（設定値は **DEMO**）
- **New Chat → Session Target → Codex** を選択
- **Download** で SDK を取得、または最初のプロンプトを送信

</div>
<div>

### 利用条件（2026-11-17 時点）

- **Copilot 経由のモデル**：VS Code 公式では **Pro+** が必要。Copilot で課金
- **ChatGPT でサインイン**：別の利用経路。利用制限と課金先も別
- **OpenAI 拡張**：引き続き選べるが、必須ではない

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

## サードパーティ agent の sandbox 境界 <a class="h2-doc" href="https://code.visualstudio.com/docs/agents/run/agent-sandboxing" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="partner-setup-columns">
<div>

### Claude Code

- **Shell sandbox（opt-in、デフォルト OFF）**：Bash / PowerShell command と子プロセスが対象。
- **対象外**：Read / Edit / Write、web tool、hook、local MCP、LSP（別の制御）。

<a class="retro-link" href="https://code.claude.com/docs/en/sandboxing#what-runs-outside-the-sandbox" target="_blank" rel="noopener noreferrer">Claude Code の sandbox docs ↗</a>

</div>
<div>

### OpenAI Codex

- **ローカルの既定**：built-in file operation と起動した command を sandbox 内で実行。
- **Approval は別の制御**：`danger-full-access` では sandbox の制限がなくなる。

<a class="retro-link" href="https://learn.chatgpt.com/docs/sandboxing" target="_blank" rel="noopener noreferrer">Codex の sandbox docs ↗</a>

</div>
</div>

> **適用範囲：** provider docs は各 provider の既定値を説明するもので、VS Code 統合では動作が異なる場合がある。`chat.agent.sandbox.enabled` は shared runtime の標準 tool を使う Copilot harness session のみが対象で、Claude / Codex harness には適用されない。
