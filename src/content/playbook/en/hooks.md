---
title: Hooks
titleEn: Hooks
summary: A mechanism for injecting custom scripts into the agent execution lifecycle (session start, prompt submission, pre/post tool execution, error, session end). Configured via `.github/hooks/hooks.json`. The most powerful hook is PreToolUse, which can deny specific commands (rm -rf, sudo, pushes to production, etc.) to block the agent. Works with both Copilot CLI and Cloud Agent.
icon: /theomonfort/icons/fence.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 7.5
category: plan
related: ['harness-engineering', 'custom-agent', 'instructions']
links:
  - group: 📖 Official documentation
    label: About hooks
    url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-hooks
  - group: 📖 Official documentation
    label: Using hooks with GitHub Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-hooks
  - group: 📖 Official documentation
    label: Using hooks with Copilot cloud agent
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks
  - group: 📖 Official documentation
    label: Working with hooks in Copilot SDK
    url: https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/working-with-hooks
  - group: 📖 Official documentation
    label: Hooks configuration reference
    url: https://docs.github.com/en/copilot/reference/hooks-configuration
  - group: 📖 Official documentation
    label: Agent hooks in Visual Studio Code
    url: https://code.visualstudio.com/docs/agent-customization/hooks
  - group: 🎓 Tutorial
    label: Using hooks with Copilot CLI for predictable, policy-compliant execution
    url: https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Hooks</strong> inject custom scripts into the Copilot agent execution lifecycle and capture <strong>6 events: session start / prompt submission / pre- and post-tool execution / error / session end</strong>.
  </p>
</div>

> 🧠 Instructions are "requests" that rely on the agent's judgment, whereas hooks **stop the execution logic itself**. If you need policy enforcement, hooks are the only choice.

## The 6 hook types

| Hook | When it runs | Input (CLI / Cloud Agent) | What you can do |
| --- | --- | --- | --- |
| 🟢 **sessionStart** | New / resume / startup | `source`, `initialPrompt` | Log initialization, environment setup, notification |
| 📝 **userPromptSubmitted** | The moment the user submits a prompt | `prompt` | Prompt audit log, keyword alerts |
| 🛡️ **preToolUse** ★ | **Right before** tool execution | `toolName`, `toolArgs` | **Block execution with deny** · allow · ask |
| 📊 **postToolUse** | **Right after** tool execution | `toolResult` | Result logging, failure notifications, statistics |
| 💥 **errorOccurred** | When the agent crashes with an error | `error` | Slack/email notification, incident log |
| 🔚 **sessionEnd** | When the session ends | `reason` | Cleanup, summary dispatch |

> 🔑 **Only PreToolUse can stop the agent in its tracks**. Think of the other five as "observe / record / notify" hooks.

## Configuration

Place **one or more `.json` files** with any name under `.github/hooks/`. CLI / VS Code read locally; Cloud Agent reads from `.github/hooks/` on the **default branch**.

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/guard.sh",
        "powershell": "./scripts/guard.ps1",
        "cwd": ".",
        "timeoutSec": 30,
        "env": { "LOG_LEVEL": "INFO" }
      }
    ]
  }
}
```

- 📦 Write both `bash` and `powershell` for cross-OS compatibility
- ⏱️ Default timeout is **30 seconds**. Raise `timeoutSec` for heavy validations
- 🔁 Stacking **multiple hooks in an array** for the same event runs them top to bottom
- 📥 Scripts receive **JSON on stdin** and optionally return **JSON on stdout**

## ★ Blocking specific commands (PreToolUse)

The script receives what the agent is about to run as `toolName` and `toolArgs`, and can stop execution by returning `{"permissionDecision": "deny", "permissionDecisionReason": "..."}`.

```bash
#!/bin/bash
# .github/hooks/scripts/guard.sh
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# Pass through anything that isn't bash
if [ "$TOOL_NAME" != "bash" ]; then
  exit 0
fi

COMMAND=$(echo "$TOOL_ARGS" | jq -r '.command')

# 🚨 Blocklist of dangerous commands
if echo "$COMMAND" | grep -qE 'rm -rf /|sudo |mkfs|dd if=|:\(\)\{'; then
  jq -nc \
    --arg reason "Forbidden command: $COMMAND" \
    '{permissionDecision: "deny", permissionDecisionReason: $reason}'
  exit 0
fi

# 🔒 Block changes to production environments
if echo "$COMMAND" | grep -qE 'kubectl .*--context[= ]prod|terraform apply.*prod'; then
  jq -nc '{permissionDecision: "deny", permissionDecisionReason: "Changes to production require human review"}'
  exit 0
fi

# Allow everything else (no output or "allow")
exit 0
```

## Where are hooks loaded from?

| Agent | Where hooks are read from | Scope |
| --- | --- | --- |
| 💻 **Copilot CLI** | `.github/hooks/*.json` in the **current directory** | **Only your CLI session** |
| 🧑‍💻 **VS Code agent** | `.github/hooks/*.json` in the **open workspace** | **Only your VS Code agent session** |
| ☁️ **Copilot Cloud Agent** | `.github/hooks/*.json` on the **default branch** in GitHub | **All Cloud Agent sessions** for that repo |

> 📝 Watch the surface differences: **hooks.json** uses `timeout`(VS Code) vs `timeoutSec`(CLI/Cloud), and **scripts** use `tool_name` / `tool_input` / `hookSpecificOutput`(VS Code) vs `toolName` / `toolArgs` / `permissionDecision`(CLI/Cloud).
