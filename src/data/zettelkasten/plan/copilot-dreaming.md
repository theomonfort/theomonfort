---
title: "Copilot Dreaming"
group: "context"
tags: ["dreaming", "memory", "instructions", "skills", "copilot"]
---

**Copilot Dreaming** *(Public Preview, OFF by default)* is [[GitHub]] Copilot's scheduled background maintenance job that refines [[Copilot Memory]] and proposes repository customization updates automatically.

## Requirements & Availability

- Requires an eligible **non-Pro paid plan**, **`GPT-6.1 Sol` enabled** in [[Copilot Model Selection]], and **cloud session sync** enabled for Repository and Personal scopes (not available on GHEC with data residency).
- Each background run consumes AI credits even when no file or memory changes are produced.

## Three Scopes & Delivery Mechanisms

| Scope | What Dreaming Updates | How Changes Land |
| --- | --- | --- |
| **Repository** | Deduplicates [[Copilot Memory]] and proposes improvements to [[Repository Instructions]] and [[Agent Skills]] | Opens a **Pull Request** (must be merged to modify repo files) |
| **Personal** | Deduplicates and updates personal memories | Never modifies [[Personal Instructions]] or personal skill files |
| **Code Review** | Internal review guidance derived from merged PR review threads | Updates internal guidance without opening a Pull Request |
