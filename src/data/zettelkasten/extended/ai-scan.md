---
title: "AI Scan"
group: "secure"
tags: ["sast", "ai", "prompt-injection", "scanning"]
aliases: ["AI Scanning"]
---

**AI Scan** extends [[Code Scanning]] (under a [[Code Security]] license) to languages, frameworks, and AI threat classes that deterministic [[CodeQL]] queries do not cover.

## Three Modes

1. **AI scan for pull requests** (GA): Automatically analyzes PR diffs written in languages outside CodeQL support (such as PHP, Bash, HCL/Terraform, or Dockerfiles) or unsupported frameworks in supported languages.
2. **AI scan for repositories** (Public Preview): On-demand full scan of the default branch across **any language**, triggered from the Security tab by admins or security managers.
3. **AI scan for AI apps and agents** (Public Preview): Inspects PRs that wire LLM prompts, tool calls, or external data sources to detect **indirect prompt injection** paths before merge.
