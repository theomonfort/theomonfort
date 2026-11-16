---
title: "Plugin Marketplaces & CLI"
group: "plan"
tags: ["copilot-plugin", "marketplaces", "cli", "governance", "plugins"]
aliases: ["copilot plugin"]
---

**Plugin Marketplaces & CLI** manage installation, local testing, and enterprise marketplace policies for [[Agent Plugins]].

## Built-in Marketplaces & CLI Commands

Two marketplaces ship out of the box: **`copilot-plugins`** (GitHub official) and **`awesome-copilot`** (community, shared with [[Skill Registries & CLI]]).

| Command | Action |
| --- | --- |
| `copilot plugin marketplace browse awesome-copilot` | Browse available plugins in a marketplace |
| `copilot plugin install <name>@awesome-copilot` | Install from a marketplace (also accepts `owner/repo`, `owner/repo:path`, or git URL) |
| `copilot plugin list` | Show installed plugins and their enabled state |
| `copilot plugin uninstall <name>` | Remove an installed plugin |
| `copilot --plugin-dir ./my-plugin` | Load a plugin directly from disk during development without installing |

## User-Level Install Scope & Enterprise Policy

- **User-Level Only**: Installs write to `~/.copilot/installed-plugins/` and apply across **every project on your machine**, not per repository.
- **Enterprise Governance**: Controlled in [[Copilot Managed Settings]] via `extraKnownMarketplaces` (with `autoUpdate`), `enabledPlugins` (`true` forces auto-install, `false` disables), and `strictKnownMarketplaces` (`[]` blocks all marketplaces).
