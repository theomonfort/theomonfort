---
title: "Faster C++ code navigation in Copilot CLI"
date: "2026-09-22"
summary: "Whole codebase indexing builds a reusable map of functions, classes, and their relationships across your C++ project, including files that aren't open."
category: copilot
source: "https://github.blog/changelog/2026-09-22-faster-c-code-intelligence-with-whole-codebase-indexing/"
---

### Key takeaways

- **For developers**: less waiting when asking "Where is this function defined?" or "Where is it used?" across the project. This speeds up code exploration, not your program.
- **Where it works**: GitHub Copilot CLI on Windows, macOS, and Linux, with the Microsoft C++ Language Server plugin and project compilation information (`compile_commands.json`) configured.
- **On by default once set up**: the first index can take time and extra memory. It is then reused and updated. Check progress with `/lsp logs`.

[Setup and prerequisites (official documentation)](https://github.com/microsoft/cpp-language-server)
