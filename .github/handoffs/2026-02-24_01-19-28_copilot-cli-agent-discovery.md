---
date: 2026-02-24T01:19:28Z
git_commit: 223dea2
branch: main
repository: cockpit
topic: "Copilot CLI Agent Discovery & Documentation"
tags: [documentation, copilot-cli, agents, knowledge]
status: in-progress
---

# Handoff: Documenting Copilot CLI agent format differences and capabilities

## Task(s)
1. **Explored custom agent discovery in Copilot CLI** — completed
   - Investigated why `/agent` doesn't show the repo's custom agents
   - Root cause: agents in `.github/agents/` use VS Code `chatagent` fenced code block format, which the CLI doesn't recognize

2. **Documented findings in Copilot CLI knowledge file** — completed
   - Added a "Discovery" section to the Copilot CLI knowledge doc with three subsections:
     - VS Code Agents vs CLI Agents format differences
     - The CLI agent experience (impressive to watch in terminal)
     - Terminal access power (install libraries on the fly, edit any file format, connect to APIs, no plugins needed)

3. **Converting VS Code agents to CLI-compatible format** — not started (discussed but not requested)

## Critical References
- `/Users/theomonfort/Documents/Dev/theomonfort/.github/agents/` — all 6 agents use VS Code `chatagent` format
- `/Users/theomonfort/Documents/Dev/theomonfort/40-knowledge/42-copilot/github-copilot-cli.md` — knowledge file with new Discovery section

## Recent Changes
- `40-knowledge/42-copilot/github-copilot-cli.md` (in `theomonfort` repo): Added "Discovery" section before "Essential Commands" section, covering:
  - VS Code vs CLI agent format incompatibility
  - CLI agent live terminal experience
  - Power of terminal access (pip install on the fly, API access, no plugins)

## Learnings
- **VS Code agent format**: Uses ` ```chatagent ` fenced code block wrapping YAML frontmatter. References VS Code-specific tools (`vscode`, `edit`, `search`, IDE extensions). Only recognized by VS Code Copilot Chat.
- **CLI agent format**: Uses plain markdown with standard YAML frontmatter (no code fence wrapper). Recognized by `/agent` in Copilot CLI.
- Both formats use `.agent.md` extension in `.github/agents/` — the filename and path are identical, only the internal format differs.
- The user's 6 agents (codebase-analyzer, codebase-locator, codebase-pattern-finder, meeting-summarizer, note-organizer, web-search-researcher) were all created from VS Code, hence the incompatible format.
- **Compaction note**: `/compact` only reduces conversation history, not system prompts/tools/instructions. Small conversations see minimal savings.
- **Checkpoints**: Automatic session snapshots used for resuming context and handing off work.

## Artifacts
- `/Users/theomonfort/Documents/Dev/theomonfort/40-knowledge/42-copilot/github-copilot-cli.md` — updated with Discovery section (not yet committed)

## Action Items & Next Steps
1. **Commit the knowledge file changes** in the `theomonfort` repo (the Discovery section addition)
2. **Generate Japanese translation** of the updated knowledge file per the repo's translation rule (english → japanese)
3. **Optionally convert VS Code agents to CLI format** — would require rewriting the 6 agent files to use plain markdown frontmatter instead of `chatagent` code blocks, and replacing VS Code-specific tool references with CLI-compatible ones
4. **Research exact CLI agent spec** — the precise YAML frontmatter fields and tool references for CLI agents haven't been fully documented yet

## Other Notes
- The `cockpit` repo (current working directory) and the `theomonfort` repo are separate. The knowledge files and agents live in `theomonfort` at `/Users/theomonfort/Documents/Dev/theomonfort/`.
- The repo's `copilot-instructions.md` has a translation rule: when English knowledge docs are updated, Japanese translations should be auto-generated in corresponding `*.02-japanese/` folders.
- The `/agent` command in Copilot CLI, the `/skills` command, and `@agent-name` mentions are the key entry points for custom agent interaction.
