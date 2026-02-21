---
name: commit
description: Create git commits for session changes with clear, atomic messages. Use when you need to commit changes made during a coding session with proper commit messages following best practices.
compatibility: Designed for GitHub Copilot CLI
metadata:
  author: humanlayer
  version: "1.0"
  original-source: https://github.com/humanlayer/humanlayer
---

# Commit Changes

You are tasked with creating git commits for the changes made during this session.

## Process

### 1. Think about what changed
- Review the conversation history and understand what was accomplished
- Run `git status` to see current changes
- Run `git --no-pager diff` to understand the modifications
- Consider whether changes should be one commit or multiple logical commits

### 2. Plan your commit(s)
- Identify which files belong together
- Draft clear, descriptive commit messages
- Use imperative mood in commit messages (e.g., "Add feature" not "Added feature")
- Focus on why the changes were made, not just what

### 3. Present your plan to the user
- List the files you plan to add for each commit
- Show the commit message(s) you'll use
- Ask: "I plan to create [N] commit(s) with these changes. Shall I proceed?"

### 4. Execute upon confirmation
- Use `git add` with specific files (never use `-A` or `.`)
- Create commits with your planned messages using `git commit -m`
- Show the result with `git --no-pager log --oneline -n [number]`

## Important Guidelines

- **NEVER add co-author information or AI attribution**
- Commits should be authored solely by the user
- Do not include any "Generated with AI" messages
- Do not add "Co-Authored-By" lines
- Write commit messages as if the user wrote them
- Never commit temporary files, test scripts, or files not part of the changes
- Group related changes together
- Keep commits focused and atomic when possible
