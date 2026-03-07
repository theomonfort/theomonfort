---
title: Copilot for Pull Requests
layout: default
parent: Copilot
nav_order: 5
---

# Copilot for Pull Requests

📖 **Official docs**: [Using Copilot to work with pull requests](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-to-work-with-pull-requests)

## Copilot Code Review

Copilot can review your pull requests — reading the diff, analyzing changes, and leaving inline comments just like a human reviewer. It catches bugs, security issues, and logic errors before your teammates even open the PR.

### How to Request a Review

1. Open a pull request on GitHub
2. Click **Reviewers** in the sidebar
3. Select **Copilot** from the reviewer list
4. Copilot analyzes the diff and posts inline review comments within minutes

You can also request a review on **specific files** — click the `...` menu on any changed file and select "Ask Copilot to review."

### What Copilot Checks

| Category | Examples |
|----------|---------|
| **Bugs** | Null pointer dereference, off-by-one errors, race conditions |
| **Security** | SQL injection, XSS, hardcoded secrets, insecure deserialization |
| **Logic errors** | Unreachable code, inverted conditions, missing return statements |
| **Error handling** | Unhandled exceptions, swallowed errors, missing try/catch |
| **Performance** | N+1 queries, unnecessary re-renders, missing indexes |
| **Best practices** | Missing input validation, improper use of async/await |

> 💡 **Theo's Tip**: Copilot review is **not a replacement** for human review — it's a first pass. Use it to catch the obvious stuff so your human reviewers can focus on architecture, design, and business logic.

## Agentic Code Review (Feb 2026+)

Since February 2026, Copilot code review uses an **agentic architecture**. Instead of a single-pass analysis, the agent:

1. **Plans** — reads the PR description, diff, and linked issues to understand intent
2. **Explores** — navigates the codebase beyond the diff to understand context (reads related files, checks types, follows imports)
3. **Reasons** — identifies issues based on full context, not just the changed lines
4. **Reviews** — posts detailed comments with explanations and suggested fixes

This means Copilot can catch issues that require **understanding code outside the diff** — like breaking a contract defined in another file or introducing an inconsistency with existing patterns.

### Requesting Agentic Review

The agentic review is the default when you add Copilot as a reviewer. No special configuration needed. The review may take slightly longer than the previous single-pass model (1–3 minutes for typical PRs), but the quality is significantly higher.

> 💡 **Theo's Tip**: The agentic reviewer reads files beyond the diff. If your PR touches an interface, it will check implementations. If you change a utility function, it will look at call sites. This is why it catches things that simple diff-based tools miss.

## PR Descriptions and Summaries

Copilot can **generate PR descriptions** automatically when you create a pull request.

### How to Enable

1. When creating a PR on GitHub.com, click the **Copilot sparkle icon** (✨) next to the description field
2. Copilot reads the diff and generates a structured summary: what changed, why, and key files affected
3. Edit the generated text as needed, then submit

### What the Summary Includes

- **Overview** — one-paragraph explanation of the change
- **Key changes** — bulleted list of the most important modifications
- **Files changed** — grouped by area (e.g., "API routes," "Tests," "Configuration")
- **Testing notes** — what was tested and how (if detectable from the diff)

> 💡 **Theo's Tip**: Generated summaries are a starting point. Always add the **why** — Copilot can see what changed but not the business reason behind it. A good PR description explains motivation, not just mechanics.

## Custom Review Instructions

You can customize what Copilot focuses on during reviews by adding a review section to your `.github/copilot-instructions.md`:

```markdown
<!-- .github/copilot-instructions.md -->

## Code Review

When reviewing pull requests in this repository:

- Flag any new API endpoint that lacks authentication middleware
- Check that all database queries use parameterized statements
- Verify that new environment variables are documented in `.env.example`
- Ensure all user-facing strings are wrapped in the i18n translation function
- Reject any PR that adds a dependency without updating `docs/dependencies.md`
```

These instructions are loaded every time Copilot reviews a PR in this repository. They stack with Copilot's built-in review capabilities — your custom rules are checked in addition to the default analysis.

## Copilot Workspace: Issue to PR

Copilot Workspace takes you from an **issue description to a ready-to-review PR** in a guided flow:

1. **Open an issue** and click "Open in Copilot Workspace"
2. Copilot analyzes the issue and proposes a **specification** — what needs to change
3. Review and edit the spec, then click "Generate Plan"
4. Copilot creates a **step-by-step plan** with specific file changes
5. Review the plan, then click "Implement"
6. Copilot generates the code changes — you see full diffs for each file
7. **Iterate** — ask Copilot to adjust any file, regenerate, or refine
8. Click **"Create Pull Request"** when satisfied

### When to Use Workspace vs Agent Mode

| Scenario | Copilot Workspace | Agent Mode (VS Code/CLI) |
|----------|-------------------|--------------------------|
| Starting from a GitHub issue | ✅ Designed for this | Works, but no issue integration |
| Need a guided, reviewable flow | ✅ Step-by-step with approval gates | Agent runs autonomously |
| Complex multi-file changes | ✅ Shows full plan before executing | ✅ Also handles well |
| Working locally with tests | Runs in cloud — limited testing | ✅ Full local environment |
| Need iteration speed | Slower — regeneration takes time | ✅ Faster feedback loop |

> 💡 **Theo's Tip**: Workspace shines for well-defined issues with clear acceptance criteria. If your issue says "Add pagination to the /users endpoint," Workspace will nail it. If your issue says "Improve performance," use agent mode instead — it can profile, measure, and iterate.

## GitHub Models in PR Workflows

You can call **GitHub Models API** directly from GitHub Actions to add AI capabilities to your PR workflows — without needing Copilot's agentic runtime.

### Example: Auto-Generate Release Notes

```yaml
# .github/workflows/release-notes.yml
name: Generate Release Notes
on:
  pull_request:
    types: [closed]
    branches: [main]

permissions:
  models: read
  contents: write

jobs:
  release-notes:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Generate notes with AI
        run: |
          python3 scripts/generate-release-notes.py \
            --pr-number ${{ github.event.pull_request.number }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The script calls the GitHub Models inference endpoint to summarize the PR's changes into user-facing release notes. No Copilot agent needed — just a direct API call.

> 💡 **Theo's Tip**: GitHub Models API has rate limits (~100 requests/day for premium models on Copilot Business). For high-volume repos, batch your inputs — send multiple PRs in one API call rather than one call per PR.

## Setting Up Auto-Review

You can configure Copilot to **automatically review every PR** without manually adding it as a reviewer.

### Organization-Level Settings

1. Go to **Organization Settings → Copilot → Policies**
2. Enable **"Copilot code review"**
3. Choose: review all PRs, or only PRs that match specific criteria (e.g., certain branches, file paths, or labels)

### Repository-Level Settings

1. Go to **Repository Settings → Code review → Copilot**
2. Enable automatic review
3. Optionally set **file path patterns** to limit review scope (e.g., `src/**` only)

### Branch Protection Integration

Add Copilot as a **required reviewer** in branch protection rules:

1. Go to **Repository Settings → Branches → Branch protection rules**
2. Enable "Require pull request reviews before merging"
3. Add **Copilot** to the required reviewers list

This blocks merging until Copilot has reviewed the PR — useful for compliance and audit trails.

## Limitations

What Copilot review does **NOT** catch:

| Limitation | Details |
|-----------|---------|
| **Business logic correctness** | Copilot doesn't know your product requirements — it can't verify that a discount calculation matches your pricing model |
| **Architecture decisions** | It won't flag that you should use a queue instead of synchronous processing |
| **Performance at scale** | It catches obvious N+1 queries but can't predict behavior under production load |
| **Infrastructure concerns** | Terraform misconfigurations, Kubernetes resource limits, network policies |
| **Test quality** | It checks that tests exist but can't verify they test the right behavior |
| **Cross-PR context** | Each review is isolated — it doesn't know that another PR is about to change the same code |

> ⚠️ **Theo's Tip**: The most dangerous false sense of security is thinking "Copilot approved it, so it's fine." Copilot is a reviewer, not an approver. Treat its comments like suggestions from a junior engineer who has read every file but doesn't understand the business.

## Best Practices

| Practice | Why |
|----------|-----|
| Write clear PR descriptions | Copilot uses the description to understand intent — vague descriptions produce vague reviews |
| Keep PRs small (< 400 lines) | Smaller diffs get more precise feedback; large diffs get surface-level comments |
| Link issues to PRs | Copilot reads linked issues for additional context on what the change should accomplish |
| Add custom review instructions | Tell Copilot what matters in your repo — security rules, naming conventions, required patterns |
| Review Copilot's comments critically | Accept the valid ones, dismiss the noise — and use "Not helpful" feedback to improve future reviews |
| Combine with CI checks | Copilot handles code quality; CI handles builds, tests, and linting — they complement each other |
| Enable auto-review on `main` branches | Catch issues early without relying on someone to manually request Copilot |
| Don't skip human review | Copilot augments human reviewers — it doesn't replace them |

> 💡 **Theo's Tip**: The single biggest improvement you can make to Copilot PR reviews is writing a good `.github/copilot-instructions.md` with a code review section. Generic reviews are useful. Reviews that know your team's conventions are **transformative**.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
