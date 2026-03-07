---
title: Custom Instructions
layout: default
parent: Copilot
nav_order: 4
---

# Custom Instructions

📖 **Official docs**: [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)

## Why Custom Instructions Matter

Out of the box, Copilot knows how to code — but it doesn't know **your** codebase, your conventions, or your team's preferences. Custom instructions bridge that gap. They tell Copilot:

- What framework and patterns your project uses
- How you name things, handle errors, write tests
- What to avoid (e.g., "never use `any` in TypeScript")
- What tools and libraries to prefer

Without instructions, Copilot guesses. With instructions, it **follows your rules**.

## Repository-Level Instructions

Create a file at `.github/copilot-instructions.md` in your repo. Every Copilot surface — VS Code Chat, CLI, Copilot Edits, agent mode — reads this file automatically.

```markdown
<!-- .github/copilot-instructions.md -->

# Project Instructions

This is a Next.js 14 app using the App Router, TypeScript, and Tailwind CSS.

## Code Style
- Use functional components with arrow functions
- Prefer `interface` over `type` for object shapes
- Use `zod` for all input validation
- Error handling: always use custom `AppError` class from `src/lib/errors.ts`

## Testing
- Use Vitest, not Jest
- Co-locate test files: `MyComponent.test.tsx` next to `MyComponent.tsx`
- Minimum coverage: test happy path + one error case

## Do NOT
- Use `any` type — use `unknown` and narrow
- Import from `src/` using relative paths — use `@/` alias
- Add new dependencies without documenting why in the PR description
```

> 💡 **Theo's Tip**: Keep your `copilot-instructions.md` under 500 lines. Every line consumes context window space on every interaction. Be concise — rules, not essays.

## User-Level Instructions

Create a file at `~/.copilot/copilot-instructions.md` for instructions that apply to **every project** on your machine. These are your personal preferences.

```markdown
<!-- ~/.copilot/copilot-instructions.md -->

# Personal Preferences

- Always respond in English unless I write in Japanese — then respond in Japanese
- When generating commit messages, use conventional commit format (feat:, fix:, docs:)
- Prefer simple solutions over clever ones
- When I ask to "clean up" code, preserve behavior — only improve readability
- Include JSDoc comments on all exported functions
```

### How Instructions Are Merged

When both files exist, Copilot loads them in this order:

| Priority | Source | Scope |
|----------|--------|-------|
| 1 (loaded first) | `~/.copilot/copilot-instructions.md` | All projects on your machine |
| 2 (loaded second) | `.github/copilot-instructions.md` | Current repository only |
| 3 (highest priority) | Your prompt | Current conversation |

Later instructions can override earlier ones. If your personal instructions say "use tabs" but the repo instructions say "use 2-space indentation," the repo wins.

> 💡 **Theo's Tip**: Put **universal preferences** (language, commit style, response format) in your user-level file. Put **project-specific rules** (framework, patterns, file structure) in the repo-level file. Never duplicate between the two.

## Writing Effective Instructions

### What Works Well

- **Concrete rules** — "Use `snake_case` for database column names"
- **File references** — "Follow the pattern in `src/routes/users.ts` for all new routes"
- **Negative constraints** — "Never use `console.log` in production code — use the logger from `src/lib/logger.ts`"
- **Short, scannable lists** — bullet points beat paragraphs

### What Doesn't Work

- **Vague guidance** — "Write good code" (means nothing to an LLM)
- **Overly long context** — 2,000 lines of instructions wastes your context window
- **Contradictory rules** — "Always use classes" + "Prefer functional style" = confused output
- **Implementation details** — Don't paste entire files; reference them by path instead

## Custom Agents

Agents are **specialized personas** with their own instructions and tool access. Create them in `.github/agents/` (repo-level) or `~/.copilot/agents/` (user-level).

### Agent File Structure

```markdown
<!-- .github/agents/code-reviewer.md -->
---
description: "Reviews code changes for bugs, security issues, and style violations"
tools:
  - github
---

# Code Reviewer Agent

You are a senior code reviewer. When asked to review, follow these steps:

1. Read the diff of the PR or staged changes
2. Check for:
   - Logic errors and edge cases
   - Security vulnerabilities (SQL injection, XSS, auth bypasses)
   - Violations of the project's coding standards
3. Provide feedback as a numbered list with file:line references
4. Rate severity: 🔴 must fix, 🟡 should fix, 🟢 nitpick

## Rules
- Never comment on formatting — assume the linter handles it
- If the code looks good, say so briefly. Don't invent issues.
- Reference specific lines, not vague areas
```

### Invoking an Agent

In the CLI, use `@code-reviewer` to invoke the agent. In VS Code Chat, type `@code-reviewer` in the chat input. The agent must have valid YAML frontmatter with at least a `description` field to appear.

> 💡 **Theo's Tip**: The `tools` field in agent frontmatter controls what the agent can access. Omit `tools` and the agent gets the default toolset. Add `github` to give it MCP access to issues, PRs, and repos. This is how you build agents that can query your project's GitHub data.

## Custom Skills

Skills are **reusable, parameterized tasks** that an agent can invoke. They live in `.github/skills/` (repo-level) or `~/.copilot/skills/` (user-level).

### Skill File Structure

```
.github/skills/
└── generate-docs/
    └── SKILL.md
```

```markdown
<!-- .github/skills/generate-docs/SKILL.md -->
---
description: "Generates API documentation from source code"
---

# Generate API Documentation

Scan all files in `src/routes/` and generate a markdown file at `docs/api-reference.md` with:

1. Each route endpoint (method + path)
2. Request parameters and body schema
3. Response format with example JSON
4. Authentication requirements

Use the existing `docs/api-reference.md` as a template if it exists. Preserve any manually-written sections marked with `<!-- manual -->`.
```

### How Skills Differ from Agents

| Aspect | Agent | Skill |
|--------|-------|-------|
| File location | `agents/my-agent.md` | `skills/my-skill/SKILL.md` |
| Invocation | `@agent-name` | Agent decides to use it, or invoke with `/skills` |
| Purpose | Persona with its own behavior | Reusable task recipe |
| Has tools? | Yes — declare in frontmatter | No — the invoking agent provides tools |
| Conversation? | Interactive | One-shot execution |

> 💡 **Theo's Tip**: Think of agents as **who** and skills as **what**. An agent is a code reviewer who knows how to behave. A skill is a documentation generator that any agent can run. You can have a `code-reviewer` agent that invokes a `generate-changelog` skill.

## Real-World Examples

### Migration Assistant Agent

```markdown
<!-- .github/agents/migrator.md -->
---
description: "Assists with codebase migrations — framework upgrades, API changes, dependency swaps"
tools:
  - github
---

# Migration Assistant

You help migrate codebases between framework versions. When asked to migrate:

1. Identify all files affected by the migration
2. Make changes file-by-file, explaining each change
3. Run tests after each batch of changes
4. If tests fail, fix the issue before continuing

## Rules
- Never delete files without asking first
- Preserve all comments and documentation
- If a migration step is ambiguous, explain both options and ask which to use
```

### Documentation Skill

```markdown
<!-- .github/skills/update-readme/SKILL.md -->
---
description: "Updates the README.md based on current project state"
---

# Update README

1. Read the project's package.json (or equivalent) for name, description, and scripts
2. Scan src/ for the main entry point and key modules
3. Update README.md sections: Description, Installation, Usage, Scripts, Project Structure
4. Preserve any sections marked with `<!-- keep -->` comments
5. Add a "Last updated" timestamp at the bottom
```

## Prompt Engineering Tips

1. **Be specific about output format** — "Return a markdown table" beats "summarize the results"
2. **Use examples** — show one correct example and Copilot will follow the pattern
3. **Set boundaries** — "Only modify files in `src/components/`" prevents scope creep
4. **Reference existing code** — "Follow the pattern in `src/routes/users.ts`" is more effective than describing the pattern
5. **Keep instructions under 500 lines** — beyond that, the signal-to-noise ratio drops and context gets wasted

> 💡 **Theo's Tip**: Test your instructions by starting a fresh session and asking Copilot to do something your instructions should influence. If it ignores a rule, the rule is probably too vague or buried too deep in the file. Move important rules to the top.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
