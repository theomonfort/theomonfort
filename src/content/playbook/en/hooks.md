---
title: Hooks
titleEn: Hooks
summary: A mechanism for injecting custom shell scripts into the agent execution lifecycle (session start, prompt submission, pre/post tool execution, error, session end). Configured via `.github/hooks/hooks.json`. The most powerful hook is PreToolUse, which can deny specific commands (rm -rf, sudo, pushes to production, etc.) to block the agent. Works with both Copilot CLI and Cloud Agent.
icon: 🪝
color: green
order: 8.75
category: plan
related: ['harness-engineering', 'custom-agent', 'instructions']
links:
  - group: 📖 Official documentation
    label: About hooks (Cloud Agent concepts)
    url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-hooks
  - group: 📖 Official documentation
    label: Using hooks with GitHub Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-hooks
  - group: 📖 Official documentation
    label: Hooks configuration reference
    url: https://docs.github.com/en/copilot/reference/hooks-configuration
  - group: 📖 Official documentation
    label: GitHub Copilot CLI hooks reference
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-hooks-reference
  - group: 🎓 Tutorial
    label: Using hooks with Copilot CLI for predictable, policy-compliant execution
    url: https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Hooks</strong> are a mechanism for injecting custom shell scripts into the Copilot agent execution lifecycle. They capture <strong>6 events: session start / prompt submission / pre- and post-tool execution / error / session end</strong>.
  </p>
  <p>
    The most powerful is <strong>PreToolUse</strong>. It lets you declaratively set guardrails like <strong>"never let the agent run <code>rm -rf</code>"</strong> or "block <code>kubectl apply</code> to production".
  </p>
</div>

> 🧠 Instructions are "requests" that rely on the agent's judgment, whereas hooks **stop the execution logic itself**. If you need policy enforcement, hooks are the only choice.
> 🔧 Both Copilot **CLI** and Copilot **Cloud Agent** use the same `hooks.json` format (only the load path differs — see below).

## The 6 hook types

| Hook | When it runs | What you get as input | What you can do |
| --- | --- | --- | --- |
| 🟢 **sessionStart** | New / resume / startup | `source` (new/resume/startup), `initialPrompt` | Log initialization, environment setup, notification |
| 📝 **userPromptSubmitted** | The moment the user submits a prompt | `prompt` | Prompt audit log, keyword alerts |
| 🛡️ **preToolUse** ★ | **Right before** tool execution | `toolName`, `toolArgs` | **Block execution with deny** · allow · ask |
| 📊 **postToolUse** | **Right after** tool execution | `toolName`, `toolArgs`, `toolResult.{resultType, textResultForLlm}` | Result logging, failure notifications, statistics |
| 💥 **errorOccurred** | When the agent crashes with an error | `error.{message, name, stack}` | Slack/email notification, incident log |
| 🔚 **sessionEnd** | When the session ends | `reason` (complete/error/abort/timeout/user_exit) | Cleanup, summary dispatch |

> 🔑 **Only PreToolUse can stop the agent in its tracks**. Think of the other five as "observe / record / notify" hooks.

## Configuration

Place **one or more `.json` files** with any name under `.github/hooks/`. Copilot CLI reads from the **current directory**; Cloud Agent reads from `.github/hooks/` on the **default branch**.

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

This is the **killer feature** of Hooks. The script receives `toolName` and `toolArgs` describing what the agent is about to execute, and returning **`{"permissionDecision": "deny", "permissionDecisionReason": "..."}`** is all it takes to stop it.

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
if echo "$COMMAND" | grep -qE 'rm -rf /|sudo |mkfs|dd if=|:(\)\{ :\|:&\};:'; then
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

| Output field | Value | Meaning |
| --- | --- | --- |
| `permissionDecision` | `"deny"` | **Blocks execution**. The reason is returned to the agent, which tries an alternative approach |
| `permissionDecision` | `"allow"` / no output | Proceeds as normal |
| `permissionDecision` | `"ask"` | (currently only deny is implemented) |
| `permissionDecisionReason` | string | Rejection reason shown to the agent and on screen |

> 🎯 Common real-world targets to block:
> - **Destructive shell commands** — `rm -rf /`, `dd if=`, `mkfs`, fork bomb
> - **Privilege escalation** — `sudo`, `chmod 777`
> - **Production deployments** — `kubectl --context prod`, `terraform apply` against prod state, `gh release create v*`
> - **Read-only paths** — when the `edit` tool tries to touch `secrets/` or `infra/prod/`
> - **Remote destructive actions** — `gh repo delete`, `git push --force` to `main`

## Common use cases

| Pattern | Hook(s) | What it does |
| --- | --- | --- |
| 🛡️ **Guardrails** | preToolUse | Deny dangerous commands, production access, and read-only paths |
| 📋 **Compliance audit** | sessionStart + userPromptSubmitted + preToolUse + postToolUse + sessionEnd | Log all events as JSON Lines, keep an audit trail for SOC2/ISO |
| 💸 **Cost / usage tracking** | postToolUse | Generate a CSV of user × tool type and hand it to finance |
| 🧪 **Quality gate** | preToolUse (on `edit`/`create`) | Run `npm run lint-staged` and deny on failure |
| 🔔 **Incident alerts** | errorOccurred | Automatic notification via Slack webhook / email |
| 🔐 **Secret redaction** | postToolUse | Mask tokens in tool results before logging |

## Differences: CLI vs Cloud Agent

| | Copilot CLI | Copilot Cloud Agent |
| --- | --- | --- |
| Config file location | Reads from the **current directory** (`.github/hooks/*.json`) | `.github/hooks/*.json` on the **default branch** |
| Scope | Your local session only | Enforced for **all Cloud Agent sessions** on the repo |
| Debugging | Test locally with `echo '{}' \| ./guard.sh` | Merge to repo first, then start a session |

> 📝 When prototyping hooks locally, the easiest flow is **develop with CLI → commit to `.github/hooks/` in the repo**. Cloud Agent picks them up automatically.

## Troubleshooting

- ❌ **hooks not running** — Check: is the file directly under `.github/hooks/`? Is `version: 1` present? Is `chmod +x` applied? Is the shebang (`#!/bin/bash`) included?
- ❌ **Broken JSON output** — With Bash, use `jq -c` for compact one-line output; with PowerShell, use `ConvertTo-Json -Compress`
- ❌ **Timeout** — Default is 30 seconds. Either raise `timeoutSec` or lighten the validation
- 🐛 **Local testing**:
  ```bash
  echo '{"timestamp":1,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"rm -rf /\"}"}' \
    | ./guard.sh | jq .
  ```

📘 Further reading:
- <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-hooks" target="_blank" rel="noopener noreferrer">About hooks (Cloud Agent concepts) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/reference/hooks-configuration" target="_blank" rel="noopener noreferrer">Hooks configuration reference ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks" target="_blank" rel="noopener noreferrer">Tutorial: hooks for predictable, policy-compliant execution ↗</a>
