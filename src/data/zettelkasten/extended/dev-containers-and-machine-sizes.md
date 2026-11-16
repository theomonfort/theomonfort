---
title: "Dev Containers & Machine Sizes"
group: "develop"
tags: ["devcontainer", "codespaces", "docker", "compute", "environments"]
aliases: ["devcontainer.json"]
---

**Dev Containers & Machine Sizes** codify reproducible cloud compute for [[GitHub Codespaces]] through `.devcontainer/devcontainer.json`.

## What `devcontainer.json` Configures

- **Base Image & Features**: Declares the container OS, runtimes, build tools, and `postCreateCommand` bootstrap scripts in Git.
- **Pre-installed AI Tooling**: Pre-equips every codespace with [[Copilot in VS Code]] extensions, [[Copilot CLI]], MCP servers, linters, and skills so developers start with zero manual setup.
- **On-Demand Compute Scaling**: Switch machine sizes before or after startup up to **32 cores, 128 GB RAM, and 128 GB storage**, letting even lightweight laptops run heavy parallel builds and AI agents.
