---
title: "Observation & Audit Hooks"
group: "hooks"
tags: ["audit", "logging", "telemetry", "hooks"]
aliases: ["sessionStart", "postToolUse", "sessionEnd"]
---

**Observation & Audit Hooks** cover the five non-blocking events in [[Hooks]] that observe, record, and notify across Copilot sessions while [[PreToolUse Guardrails]] handles blocking.

## The 5 Observe / Record / Notify Events

| Hook Event | When It Fires | Input Payload (CLI / Cloud) | Typical Actions |
| --- | --- | --- | --- |
| **`sessionStart`** | New, resumed, or started session | `source`, `initialPrompt` | Initialize audit logs, check environment, send start notice |
| **`userPromptSubmitted`** | Immediately when user submits a prompt | `prompt` | Prompt compliance audit log, sensitive keyword alerts |
| **`postToolUse`** | Immediately after a tool finishes | `toolResult` | Record command/tool outputs, alert on test failures, gather stats |
| **`errorOccurred`** | When the agent hits a runtime error | `error` | Dispatch Slack/email alert, write incident diagnostics |
| **`sessionEnd`** | When the session terminates | `reason` | Clean up temporary processes/files, send session summary |

Configured in `.github/hooks/*.json` via [[Hooks Configuration & Surfaces]].
