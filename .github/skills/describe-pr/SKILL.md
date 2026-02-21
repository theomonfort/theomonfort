---
name: describe-pr
description: Generate comprehensive PR descriptions by analyzing code changes, running verification tests, and creating structured documentation. Use when you need to create or update a pull request description.
compatibility: Designed for GitHub Copilot CLI. Requires gh CLI.
metadata:
  author: humanlayer
  version: "1.0"
  original-source: https://github.com/humanlayer/humanlayer
---

# Generate PR Description

You are tasked with generating a comprehensive pull request description.

## Steps to Follow

### 1. Identify the PR to describe
- Check if the current branch has an associated PR:
  ```bash
  gh pr view --json url,number,title,state 2>/dev/null
  ```
- If no PR exists for the current branch, or if on main/master, list open PRs:
  ```bash
  gh pr list --limit 10 --json number,title,headRefName,author
  ```
- Ask the user which PR they want to describe if unclear

### 2. Gather comprehensive PR information
- Get the full PR diff:
  ```bash
  gh pr diff {number}
  ```
- If you get an error about no default remote repository, instruct the user to run `gh repo set-default`
- Get commit history:
  ```bash
  gh pr view {number} --json commits
  ```
- Review the base branch:
  ```bash
  gh pr view {number} --json baseRefName
  ```
- Get PR metadata:
  ```bash
  gh pr view {number} --json url,title,number,state
  ```

### 3. Analyze the changes thoroughly
- Read through the entire diff carefully
- For context, read any files that are referenced but not shown in the diff
- Understand the purpose and impact of each change
- Identify user-facing changes vs internal implementation details
- Look for breaking changes or migration requirements

### 4. Handle verification requirements
- Look for verification steps that can be automated (tests, lints, builds)
- For each verification step:
  - If it's a command you can run (like `make test`, `npm test`), run it
  - If it passes, note it as verified
  - If it fails, note what failed
  - If it requires manual testing, note it for the user

### 5. Generate the description

Use this template structure:

```markdown
## Summary
[Brief description of what this PR does and why]

## Changes Made
- [Change 1]
- [Change 2]
- [Change 3]

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## How to Test
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Verification
- [ ] Tests pass
- [ ] Linting passes
- [ ] Build succeeds
- [ ] Manual testing completed

## Additional Notes
[Any additional context, screenshots, or information]
```

### 6. Update the PR
- Update the PR description directly:
  ```bash
  gh pr edit {number} --body "$(cat description.md)"
  ```
- Or show the user the generated description for review first
- Confirm the update was successful

## Important Notes

- Be thorough but concise - descriptions should be scannable
- Focus on the "why" as much as the "what"
- Include any breaking changes or migration notes prominently
- If the PR touches multiple components, organize the description accordingly
- Always attempt to run verification commands when possible
- Clearly communicate which verification steps need manual testing
