---
title: Code Scanning
layout: default
parent: GHAS
nav_order: 1
---

# Code Scanning

📖 **Official docs**: [About code scanning](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)

## What Is Code Scanning

Code scanning is **static analysis integrated directly into your pull request workflow**. Every time code is pushed, GitHub analyzes it for security vulnerabilities, bugs, and coding errors — then surfaces results as alerts inline on the PR, before the code is merged.

- **Shift left** — catch issues during review, not after deployment
- **Developer-native** — results appear as PR annotations, not in a separate security tool
- **Extensible** — use CodeQL (GitHub's engine), third-party tools, or both

## CodeQL — GitHub's Semantic Analysis Engine

CodeQL treats code as data. It builds a **database** from your source code, then runs queries against it — like SQL, but for code.

1. **Build phase** — CodeQL extracts a snapshot of your codebase into a relational database
2. **Analysis phase** — predefined (or custom) queries run against the database
3. **Results** — vulnerabilities surface as SARIF alerts tied to specific lines

This means CodeQL doesn't just pattern-match. It understands **data flow** — tracking how user input travels through your application to a dangerous sink (SQL injection, XSS, path traversal, etc.).

## Default Setup vs Advanced Setup

| | Default Setup | Advanced Setup |
|---|---|---|
| **Configuration** | One-click in repo settings | Custom `.github/workflows/codeql.yml` |
| **Languages** | Auto-detected | Explicitly specified |
| **Query suites** | `default` or `security-extended` | Any suite, including custom queries |
| **Build steps** | Automatic (autobuild) | Fully customizable |
| **Schedule** | Managed by GitHub | You control the cron schedule |
| **Best for** | Most repositories | Monorepos, custom builds, advanced tuning |

## Enabling Code Scanning — Default Setup

The fastest path:

1. Go to **Settings → Code security → Code scanning**
2. Click **Set up → Default**
3. Review the detected languages and query suite
4. Click **Enable CodeQL**

That's it. GitHub handles the workflow, scheduling, and language detection.

## Advanced Setup — Custom Workflow

When you need full control, create `.github/workflows/codeql.yml`:

```yaml
name: "CodeQL Analysis"

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: "30 6 * * 1" # Weekly Monday 6:30 UTC

jobs:
  analyze:
    name: Analyze (${{ matrix.language }})
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      contents: read
    strategy:
      fail-fast: false
      matrix:
        language: ["javascript-typescript", "python"]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}
          queries: security-extended  # or security-and-quality

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3
        with:
          category: "/language:${{ matrix.language }}"
```

## Supported Languages

| Language | CodeQL Coverage | Build Required |
|----------|----------------|----------------|
| C / C++ | Full | Yes |
| C# | Full | Yes |
| Go | Full | No (source-based) |
| Java / Kotlin | Full | Yes |
| JavaScript / TypeScript | Full | No (source-based) |
| Python | Full | No (source-based) |
| Ruby | Full | No (source-based) |
| Swift | Full | Yes |

> 💡 **Theo's Tip**: For compiled languages (C/C++, C#, Java), autobuild works in most cases. If it fails, replace the autobuild step with your actual build commands — `mvn install`, `dotnet build`, etc.

## Understanding Results

When CodeQL finds something, it creates an **alert** with:

- **Severity** — critical, high, medium, or low (mapped to CVSS)
- **CWE** — the weakness category (e.g., CWE-89 for SQL injection)
- **Data flow path** — step-by-step trace from source to sink
- **Affected lines** — exact code location in the PR diff

### Alert Lifecycle

| Status | Meaning |
|--------|---------|
| **Open** | Active vulnerability requiring attention |
| **Fixed** | Resolved — the vulnerable code was changed |
| **Dismissed** | Manually closed (false positive, won't fix, used in tests) |

Dismissed alerts require a **reason** — creating an audit trail for compliance.

## Custom CodeQL Queries

Write your own `.ql` files to enforce organization-specific rules:

```ql
/**
 * @name Use of banned API function
 * @description Detects calls to the deprecated internal auth method.
 * @kind problem
 * @problem.severity warning
 * @id myorg/banned-api
 */

import javascript

from CallExpr call
where call.getCalleeName() = "legacyAuthenticate"
select call, "Use modernAuth() instead of the deprecated legacyAuthenticate()."
```

Reference custom queries in your workflow:

```yaml
- name: Initialize CodeQL
  uses: github/codeql-action/init@v3
  with:
    languages: javascript-typescript
    queries: ./custom-queries/banned-apis.ql
```

## CodeQL Packs

CodeQL packs let you **publish and share queries** across repositories:

```bash
# Install a pack from the GitHub Container Registry
codeql pack download myorg/security-queries

# Use in your workflow
queries: packs: myorg/security-queries
```

This is how large organizations standardize their security rules — write once, enforce everywhere.

## Third-Party SARIF Integration

Any tool that produces **SARIF** (Static Analysis Results Interchange Format) output can feed into code scanning:

```yaml
- name: Run ESLint with SARIF output
  run: npx eslint . --format @microsoft/eslint-formatter-sarif --output-file eslint.sarif
  continue-on-error: true

- name: Upload SARIF
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: eslint.sarif
```

Popular tools with SARIF support: **ESLint**, **Semgrep**, **Checkov**, **Trivy**, **SonarQube**.

## Copilot Autofix

When code scanning finds a vulnerability, **Copilot Autofix** generates a suggested fix directly in the alert. It analyzes the data flow path, understands the vulnerability class, and proposes a concrete code change you can commit with one click.

- Works on CodeQL alerts across all supported languages
- Generates fixes for common vulnerability classes (injection, XSS, path traversal)
- Available on pull request alerts and existing repository alerts

> 💡 **Theo's Tip**: Autofix suggestions are a starting point — always review the proposed change. For complex data flow issues, the fix might need adjustment to match your application's architecture.

## Performance Tips for Large Repos

| Technique | Impact |
|-----------|--------|
| Limit `paths` / `paths-ignore` in the workflow trigger | Avoid scanning unchanged code |
| Pin specific languages instead of auto-detection | Skip languages you don't need |
| Use `security-extended` instead of `security-and-quality` | Fewer queries, faster scans |
| Cache CodeQL databases between runs | Significant speedup for compiled languages |
| Run on `ubuntu-latest` with higher-spec runners | More CPU = faster analysis |

```yaml
# Example: scope scanning to only your source code
on:
  push:
    paths:
      - "src/**"
      - "!src/**/*.test.js"
```

> 💡 **Theo's Tip**: For monorepos, consider splitting CodeQL into **separate workflows per language**. This lets them run in parallel and avoids one slow build blocking results for interpreted languages that scan in seconds.

> 💡 **Theo's Tip**: Enable `security-extended` as your default query suite — it includes everything in `default` plus additional queries for broader coverage without the noise of `security-and-quality`. It's the sweet spot for most teams.

---

Created by **Theo Monfort** ([@theomonfort](https://github.com/theomonfort))
