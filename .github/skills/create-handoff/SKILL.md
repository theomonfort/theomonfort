---
name: create-handoff
description: Create handoff document for transferring work to another session. Use when ending a session and need to document progress for continuation later.
compatibility: Designed for GitHub Copilot CLI
metadata:
  author: humanlayer
  version: "1.0"
  original-source: https://github.com/humanlayer/humanlayer
---

# Create Handoff

You are tasked with writing a handoff document to hand off your work to another agent in a new session. You will create a handoff document that is thorough, but also **concise**. The goal is to compact and summarize your context without losing any of the key details of what you're working on.

## Process

### 1. Gather Metadata

Run these commands to collect context:
```bash
git rev-parse --short HEAD 2>/dev/null || echo "not-a-git-repo"
git branch --show-current 2>/dev/null || echo "unknown"
basename "$(git rev-parse --show-toplevel 2>/dev/null)" || basename "$PWD"
date -u +"%Y-%m-%dT%H:%M:%SZ"
```

### 2. Write the Handoff Document

Create a file with this naming pattern:
- `YYYY-MM-DD_HH-MM-SS_description.md`
- Example: `2025-01-08_13-55-22_create-context-compaction.md`

Use this template structure:

```markdown
---
date: [Current date and time in ISO format]
git_commit: [Current commit hash]
branch: [Current branch name]
repository: [Repository name]
topic: "[Feature/Task Name]"
tags: [implementation, relevant-component-names]
status: [in-progress/complete/blocked]
---

# Handoff: [Very concise description]

## Task(s)
[Description of the task(s) you were working on, along with the status of each (completed, work in progress, planned/discussed). If working on an implementation plan, call out which phase you are on. Reference any plan documents or research documents you are working from.]

## Critical References
[List any critical specification documents, architectural decisions, or design docs that must be followed. Include only 2-3 most important file paths. Leave blank if none.]

## Recent Changes
[Describe recent changes made to the codebase in file:line syntax]

## Learnings
[Describe important things you learned - e.g. patterns, root causes of bugs, or other important pieces of information someone picking up your work should know. Include explicit file paths.]

## Artifacts
[Exhaustive list of artifacts you produced or updated as filepaths and/or file:line references - e.g. paths to feature documents, implementation plans, etc.]

## Action Items & Next Steps
[List of action items and next steps for the next agent to accomplish based on your tasks and their statuses]

## Other Notes
[Other notes, references, or useful information - e.g. where relevant sections of the codebase are, or other important things you learned that don't fall into the above categories]
```

### 3. Present to User

After creating the handoff, respond with:

```
Handoff created! You can resume from this handoff in a new session by sharing this file:

[path/to/handoff.md]
```

## Additional Guidelines

- **More information, not less** - This template defines the minimum; always include more if necessary
- **Be thorough and precise** - Include both top-level objectives and lower-level details
- **Avoid excessive code snippets** - Brief snippets for key changes are fine, but avoid large code blocks unless necessary for debugging
- **Reference files by path** - Don't include full file contents unless critical
