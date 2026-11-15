---
title: "CLI Terminal UI"
group: "develop"
tags: ["cli", "tui", "accessibility", "themes"]
aliases: ["Copilot TUI"]
---

**CLI Terminal UI** (enabled with `/experimental on` in [[Copilot CLI]]) provides a theme-aware, screen-reader-accessible terminal interface for browsing repository context without leaving the shell.

## Tab Navigation Inside a Repository

| Tab | What You Can Browse |
| --- | --- |
| **Session** | Active interactive Copilot conversation (default) |
| **Issues** | Repository issues ready for triage or [[Cloud Agent Entry Points]] |
| **Pull requests** | Open repository pull requests |
| **Gists** | Personal GitHub gists |

## Customization

- Run `/theme` to inspect and switch semantic terminal color palettes alongside [[CLI Slash Commands & Fleet]].
