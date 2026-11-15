---
title: "CodeQL"
group: "scanning"
tags: ["codeql", "sast", "semantic-analysis"]
---

**CodeQL** is GitHub's semantic code analysis engine. Unlike regex linters, CodeQL extracts source code into a **relational database** capturing the AST, control-flow graph, and data-flow graph, then runs declarative `FROM / WHERE / SELECT` queries over that database.

## Cross-Product Engine

CodeQL powers three distinct surfaces across [[GitHub]]:

1. [[Code Scanning]]: Traces taint from untrusted **sources** (HTTP inputs, CLI args) to dangerous **sinks** (SQL queries, shell commands, HTML output) when no **sanitizer** intervenes, catching SQL/command injection, SSRF, XSS, auth flaws, C/C++ memory corruption, and [[GitHub Actions]] workflow injection across C/C++, C#, Go, Java/Kotlin, JS/TS, Python, Ruby, Rust, and Swift.
2. [[Code Quality]]: Executes 383 deterministic reliability and maintainability rules across C#, Go, Java/Kotlin, JS/TS, Python, and Ruby.
3. [[Reachability Analysis]]: Traces call paths in [[Dependabot]] to prove whether vulnerable third-party functions are actually reachable from application code.

Hosted CodeQL execution on private repositories shares the monthly runner allowance in [[Actions Compute & Budgets]] (or runs free on self-hosted [[Actions Runners]]). Internal wrappers and custom frameworks can be taught to CodeQL without writing QL code using YAML **data extensions (`models-as-data`)**, and rich data-flow paths feed directly into [[Copilot Autofix]].
