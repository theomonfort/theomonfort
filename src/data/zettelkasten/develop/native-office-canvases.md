---
title: "Native Office Canvases"
group: "copilot-app"
tags: ["canvases", "word", "excel", "powerpoint"]
aliases: ["Office Files", "Canvases"]
---

**Native Office Canvases** (shipped in [[GitHub Copilot App]] `v1.1.35`, `2026-11-04`) let Copilot create and edit real `.docx`, `.xlsx`, and `.pptx` artifacts directly inside built-in side-panel editors, alongside Browser, Editor, and Terminal canvases.

## Native Document Types

| Canvas | Typical Deliverable |
| --- | --- |
| **Word (`.docx`)** | Turn a brief in [[Copilot App Projects]] into a structured specification |
| **Excel (`.xlsx`)** | Build tables, formulas, and charts |
| **PowerPoint (`.pptx`)** | Author and revise presentation slide decks |

## Native Editing vs Desktop Automation

- Office canvases edit document models natively without launching external desktop apps via [[Computer Use]], and pair cleanly with [[Copilot Image Generation]] and [[Copilot in VS Code]] canvases (`chat.canvases.enabled`).
