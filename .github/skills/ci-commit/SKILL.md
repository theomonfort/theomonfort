---
name: ci-commit
description: Create git commits for session changes automatically without user confirmation. Use for CI/automation workflows where commits should be created without interactive approval.
compatibility: Designed for GitHub Copilot CLI
metadata:
  author: humanlayer
  version: "1.0"
  original-source: https://github.com/humanlayer/humanlayer
---

# CI Commit Changes

You are tasked with creating git commits for the changes made during this session without requiring user confirmation.

## Process

### 1. Think about what changed
- Review the conversation history and understand what was accomplished
- Run `git status` to see current changes
- Run `git --no-pager diff` to understand the modifications
- Consider whether changes should be one commit or multiple logical commits

### 2. Plan your commit(s)
- Identify which files belong together
- Draft clear, descriptive commit messages
- Use imperative mood in commit messages
- Focus on why the changes were made, not just what

### 3. Execute immediately
- Use `git add` with specific files (never use `-A` or `.`)
- Never commit dummy files, test scripts, or other files which were not part of your changes
- Create commits with your planned messages using `git commit -m`
- Show the result with `git --no-pager log --oneline -n [number]`

## Important Guidelines

- **NEVER stop and ask for feedback from the user** - this is for automated workflows
- Group related changes together
- Keep commits focused and atomic when possible
- The user trusts your judgment - they asked you to commit
