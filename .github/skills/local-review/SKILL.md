---
name: local-review
description: Set up local environment for reviewing a colleague's branch using git worktrees. Use when you need to review someone else's code without disrupting your current work.
compatibility: Designed for GitHub Copilot CLI. Requires git.
metadata:
  author: humanlayer
  version: "1.0"
  original-source: https://github.com/humanlayer/humanlayer
---

# Local Review

You are tasked with setting up a local review environment for a colleague's branch. This involves creating a worktree and setting up dependencies.

## Process

When invoked with a parameter like `gh_username:branchName`:

### 1. Parse the input
- Extract GitHub username and branch name from the format `username:branchname`
- If no parameter provided, ask for it in the format: `gh_username:branchName`

### 2. Extract identifying information
- Look for ticket numbers in the branch name (e.g., `eng-1696`, `ISSUE-1696`)
- Use this to create a short worktree directory name
- If no ticket found, use a sanitized version of the branch name

### 3. Set up the remote and worktree

```bash
# Check if the remote already exists
git remote -v

# If not, add it
git remote add USERNAME git@github.com:USERNAME/REPO_NAME

# Fetch from the remote
git fetch USERNAME

# Create worktree
git worktree add -b BRANCHNAME ~/wt/REPO_NAME/SHORT_NAME USERNAME/BRANCHNAME
```

### 4. Configure the worktree

```bash
# Copy any local settings if they exist
cp .copilot/settings.local.json WORKTREE/.copilot/ 2>/dev/null || true

# Run setup commands appropriate for the project
cd WORKTREE && npm install  # or make setup, pip install, etc.
```

## Error Handling

- If worktree already exists, inform the user they need to remove it first:
  ```bash
  git worktree remove ~/wt/REPO_NAME/SHORT_NAME
  ```
- If remote fetch fails, check if the username/repo exists
- If setup fails, provide the error but continue

## Example Usage

```
/local_review samdickson22:sam/eng-1696-hotkey-for-yolo-mode
```

This will:
- Add 'samdickson22' as a remote
- Create worktree at `~/wt/repo-name/eng-1696`
- Set up the environment

## Cleanup

When done reviewing, clean up with:
```bash
git worktree remove ~/wt/REPO_NAME/SHORT_NAME
git remote remove USERNAME  # Optional, if you won't need it again
```
