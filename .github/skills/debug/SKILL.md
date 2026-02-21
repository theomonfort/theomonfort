---
name: debug
description: Debug issues by investigating logs, database state, git history, and code without making changes. Use when something is broken and you need to investigate the root cause.
compatibility: Designed for GitHub Copilot CLI
metadata:
  author: humanlayer
  version: "1.0"
  original-source: https://github.com/humanlayer/humanlayer
---

# Debug

You are tasked with helping debug issues during manual testing or implementation. This skill allows you to investigate problems by examining logs, database state, code, and git history without editing files.

## Initial Response

When invoked WITH a plan/ticket file:
```
I'll help debug issues with [file name]. Let me understand the current state.

What specific problem are you encountering?
- What were you trying to test/implement?
- What went wrong?
- Any error messages?

I'll investigate the logs, database, and git state to help figure out what's happening.
```

When invoked WITHOUT parameters:
```
I'll help debug your current issue.

Please describe what's going wrong:
- What are you working on?
- What specific problem occurred?
- When did it last work?

I can investigate logs, database state, and recent changes to help identify the issue.
```

## Process Steps

### Step 1: Understand the Problem

After the user describes the issue:

1. **Read any provided context** (plan or ticket file):
   - Understand what they're implementing/testing
   - Note which phase or step they're on
   - Identify expected vs actual behavior

2. **Quick state check**:
   - Current git branch and recent commits
   - Any uncommitted changes
   - When the issue started occurring

### Step 2: Investigate the Issue

Spawn parallel `task` agents with `explore` type for efficient investigation:

**Task 1 - Check Recent Logs:**
```
Find and analyze the most recent logs for errors:
1. Search for log files in common locations
2. Search for errors, warnings, or issues around the problem timeframe
3. Look for stack traces or repeated errors
Return: Key errors/warnings with timestamps
```

**Task 2 - Database State (if applicable):**
```
Check the current database state:
1. Connect to database
2. Check schema and recent data
3. Look for stuck states or anomalies
Return: Relevant database findings
```

**Task 3 - Git and File State:**
```
Understand what changed recently:
1. Check git status and current branch
2. Look at recent commits: git log --oneline -10
3. Check uncommitted changes: git diff
4. Verify expected files exist
Return: Git state and any file issues
```

### Step 3: Present Findings

Based on the investigation, present a focused debug report:

```markdown
## Debug Report

### What's Wrong
[Clear statement of the issue based on evidence]

### Evidence Found

**From Logs**:
- [Error/warning with timestamp]
- [Pattern or repeated issue]

**From Database** (if applicable):
- [Finding from database]

**From Git/Files**:
- [Recent changes that might be related]
- [File state issues]

### Root Cause
[Most likely explanation based on evidence]

### Next Steps

1. **Try This First**:
   ```bash
   [Specific command or action]
   ```

2. **If That Doesn't Work**:
   - [Alternative approach]
   - [Another thing to try]

### Can't Investigate Further?
Some issues might require:
- Browser console errors (F12 in browser)
- External service logs
- System-level debugging

Would you like me to investigate something specific further?
```

## Important Notes

- **Focus on investigation** - This is for debugging, not fixing
- **Always require problem description** - Can't debug without knowing what's wrong
- **Read files completely** - No partial reads when reading context
- **Guide back to user** - Some issues need manual investigation
- **Don't make changes** - Observe and report, let the user decide on fixes
