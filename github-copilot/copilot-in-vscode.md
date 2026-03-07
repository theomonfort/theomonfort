---
title: Copilot in VS Code
layout: default
parent: Copilot
nav_order: 3
---

# GitHub Copilot in VS Code

📖 **Official docs**: [GitHub Copilot in VS Code](https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot)

## Setup

### Required Extensions

Install both from the VS Code Extensions marketplace (`Cmd+Shift+X`):

| Extension | What It Does |
|-----------|-------------|
| **GitHub Copilot** | Inline ghost text suggestions as you type |
| **GitHub Copilot Chat** | Chat panel, slash commands, agent mode, Copilot Edits |

After installing, sign in with your GitHub account when prompted. You need an active **Copilot Individual**, **Business**, or **Enterprise** subscription.

```
# Verify from the command palette (Cmd+Shift+P)
GitHub Copilot: Sign In
GitHub Copilot: Status
```

> 💡 **Theo's Tip**: If Copilot suggestions stop appearing, check the status bar icon at the bottom of VS Code. A spinning icon means it's thinking; a crossed-out icon means it's disabled for that language. Click it to toggle.

## Inline Suggestions

Copilot's core feature is **ghost text** — gray, inline completions that appear as you type. You don't need to open a panel or type a command; just write code and Copilot predicts what comes next.

### Key Interactions

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Option+]` | `Alt+]` |
| Previous suggestion | `Option+[` | `Alt+[` |
| Accept next word only | `Cmd+→` | `Ctrl+→` |
| Trigger suggestion manually | `Option+\` | `Alt+\` |

### Getting Better Suggestions

- **Write a comment first** — a clear comment like `// Parse CSV and return array of objects` gives Copilot strong context
- **Name things well** — `getUsersByRole(role)` produces better completions than `getData(x)`
- **Open related files** — Copilot reads your open tabs for context. Keep interfaces, types, and related modules open

> 💡 **Theo's Tip**: If the inline suggestion is 80% right but the last line is wrong, use **accept next word** (`Cmd+→`) to take it word by word. Faster than rewriting the whole thing.

## Copilot Chat Panel

Open the Chat panel with `Cmd+Shift+I` (Mac) or `Ctrl+Shift+I` (Windows). This is your conversational interface — ask questions, get explanations, generate code.

### Slash Commands

| Command | What It Does |
|---------|-------------|
| `/explain` | Explains the selected code in plain language |
| `/fix` | Proposes a fix for errors or bugs in selected code |
| `/tests` | Generates unit tests for the selected code |
| `/doc` | Adds documentation comments to functions/classes |
| `/new` | Scaffolds a new project or file from a description |

### Context Participants

Prefix your message with a **participant** to focus Copilot's attention:

| Participant | Scope |
|-------------|-------|
| `@workspace` | Entire project — searches across all files, understands project structure |
| `@vscode` | VS Code settings, keybindings, and extension APIs |
| `@terminal` | Terminal output and shell context |
| `@github` | GitHub issues, PRs, repos (requires GitHub MCP connection) |

```
@workspace Where is the authentication middleware defined?
@terminal What does this error mean and how do I fix it?
```

> 💡 **Theo's Tip**: `@workspace` is the most powerful participant. It indexes your entire project and can answer structural questions like "How do API routes connect to the database layer?" Use it before grepping manually.

## Copilot Edits (Multi-File Editing)

Copilot Edits lets you make changes across **multiple files** in a single conversation. Instead of generating code you have to copy-paste, Edits applies changes directly to your files with a diff view for review.

### How to Use It

1. Open the Chat panel and switch to **Edits** mode (click the pencil icon or use `Cmd+Shift+I` → select Edits)
2. **Add files** to the working set — click "Add Files" or drag files into the panel
3. Describe the change you want in natural language
4. Review the proposed diffs file-by-file
5. **Accept** or **Discard** each change

```
Add error handling to all API route handlers in src/routes/.
Use a consistent try/catch pattern that logs the error and returns a 500 response.
```

> 💡 **Theo's Tip**: Be explicit about which files to modify. If you add 20 files but only describe changes relevant to 3, Copilot may make unnecessary edits to the others. Keep the working set tight.

## Agent Mode

Agent mode is Copilot's most autonomous capability in VS Code. Instead of just suggesting code, the agent **plans, executes, observes, and iterates** — running terminal commands, editing files, and fixing errors in a loop.

### How It Works

1. Switch to **Agent** mode in the Chat panel (select from the mode dropdown)
2. Describe your task in natural language
3. The agent creates a plan and begins executing — you'll see it editing files and running commands
4. **Approve or reject** each terminal command before it runs (unless you enable auto-approve)

### What the Agent Can Do

- **Edit multiple files** across your project
- **Run terminal commands** — install dependencies, run tests, execute scripts
- **Read command output** and fix errors automatically
- **Use MCP servers** for external tool access (databases, APIs, services)
- **Iterate** — if tests fail after a change, the agent reads the error and tries again

### MCP Server Integration

Agent mode supports **Model Context Protocol (MCP) servers**, which extend the agent's capabilities beyond your local filesystem:

```jsonc
// .vscode/mcp.json
{
  "servers": {
    "github": {
      "command": "gh",
      "args": ["copilot", "mcp"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost:5432/mydb"]
    }
  }
}
```

> 💡 **Theo's Tip**: Agent mode burns through context fast. For large tasks, break them into smaller prompts. "Add authentication to the API" is too broad — try "Add JWT verification middleware to `src/middleware/auth.ts`" instead.

## Next Edit Suggestions (NES)

Next Edit Suggestions predict **where you'll edit next** and what the change should be. After you make a change in one file, Copilot may highlight a related location — in the same file or a different one — with a suggested edit.

- A **blue sparkle icon** appears in the gutter next to the predicted edit location
- Press `Tab` to accept the suggestion, `Esc` to dismiss
- NES works across files — rename a parameter in a function definition and NES suggests updating the call sites

Enable it in settings:

```json
{
  "github.copilot.nextEditSuggestions.enabled": true
}
```

> 💡 **Theo's Tip**: NES is especially powerful during refactors. Rename a variable, and NES will chase the change across files. It's like a smarter find-and-replace that understands intent.

## Keyboard Shortcuts Reference

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Open Chat panel | `Cmd+Shift+I` | `Ctrl+Shift+I` |
| Inline Chat (in editor) | `Cmd+I` | `Ctrl+I` |
| Accept inline suggestion | `Tab` | `Tab` |
| Next inline suggestion | `Option+]` | `Alt+]` |
| Previous inline suggestion | `Option+[` | `Alt+[` |
| Accept next word | `Cmd+→` | `Ctrl+→` |
| Trigger suggestion | `Option+\` | `Alt+\` |
| Open Quick Chat | `Cmd+Shift+Option+L` | `Ctrl+Shift+Alt+L` |
| Toggle Copilot on/off | Command Palette → `GitHub Copilot: Toggle` | Same |

## When to Use VS Code Chat vs CLI

| Scenario | VS Code Chat | CLI |
|----------|-------------|-----|
| Writing new code with editor context | ✅ Best — sees open tabs, cursor position | Works but no editor integration |
| Debugging with breakpoints | ✅ Best — integrates with debugger | ❌ No debugger access |
| Multi-file refactoring (small scope) | ✅ Copilot Edits | ✅ Works well |
| Multi-file refactoring (large scope) | Slower — sequential | ✅ Fleet mode is faster |
| Working over SSH / remote server | ❌ Needs VS Code running | ✅ Native environment |
| CI log investigation | Possible with `@github` | ✅ Best — built-in MCP |
| Creating non-code files (Excel, PPT) | ❌ Limited | ✅ Full shell access |
| Quick code question while typing | ✅ Inline Chat (`Cmd+I`) | Requires context switch |

> 💡 **Theo's Tip**: You don't have to choose one. Run VS Code and the CLI side by side. Use VS Code for active coding and the CLI for automation, investigation, and tasks that need shell access. They share the same Copilot subscription.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
