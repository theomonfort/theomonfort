---
title: "Dynamic workflows: define multi-agent processes in code"
date: "2026-10-01"
summary: "In Copilot CLI, the Copilot app, and the Copilot SDK, define in code how automated steps and the work of multiple agents fit together. Run the same steps every time, and pause or resume long runs."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/"
demoUrl: "https://docs.github.com/copilot/how-tos/use-copilot-agents/use-dynamic-workflows"
demo:
  - "Setup: no setup is needed in the Copilot app. In the CLI, run /update, then /experimental on (or start with --experimental). Use a demo repository with a few changed files."
  - "Create a dynamic workflow named review-changed that lists changed files, asks an agent to review them, and summarizes the findings."
  - "Point out that creating a workflow does not run it, then ask \"What dynamic workflows are available?\" to confirm it is registered. Next, ask Copilot to run it on just two or three files with an AI credit limit."
  - "Open /workflows in the CLI or the Workflows button in the app to show phases, subagents, and AI credit usage. A running workflow can be paused and resumed later."
---

### Key takeaways

- **What it can do**: run commands and tools, run tasks in parallel, pass structured results between stages, have subagents verify each other, and pause for review before resuming.
- **How it differs from `/fleet`**: with `/fleet`, Copilot decides how to split the work each time. With a dynamic workflow, the author defines the steps, conditions, and handoffs in code.
- **Create and share**: ask Copilot to write one, or write it yourself with the built-in authoring guidance. Workflows live in Copilot extensions and are session-scoped by default. Copy them to your personal or repository extensions directory to reuse or share them.
- **Set limits**: cap concurrent subagents, total subagents, running time, and AI credits. The credit limit is approximate and can be exceeded, so test on a small scope first.
- **Availability**: all Copilot plans. In the CLI, `copilot workflow run` starts a workflow directly from a terminal or script (grant permissions up front).

[How dynamic workflows work (official documentation)](https://docs.github.com/en/copilot/concepts/agents/dynamic-workflows) / [Compared with autopilot and /fleet](https://docs.github.com/en/copilot/concepts/agents/dynamic-workflows#how-dynamic-workflows-differ-from-autopilot-and-fleet)
