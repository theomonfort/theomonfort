---
title: "Copilot in Slack and Teams: more context, clearer follow-up"
date: "2026-09-25"
summary: "Copilot can use more conversation context, check for similar issues before creating one, and link GitHub work back to the original discussion."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams/"
demoUrl: "https://docs.github.com/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams"
demo:
  - "Setup: enable Copilot cloud agent and cloud sandboxes, install or update the GitHub app in Teams, and connect a GitHub account with write access to a demo repository."
  - "Start a fresh Teams thread with a bug screenshot and a short description. Select the actual @GitHub mention and replace OWNER/DEMO_REPO in the prompt below."
  - "@GitHub Using the screenshot and this thread, check for a similar issue in repo=OWNER/DEMO_REPO. If none exists, create an issue with reproduction steps, expected and actual behavior, and a link to this conversation. Do not change code or open a pull request."
  - "Show the returned issue link and the link back to Teams. Use non-sensitive demo content: the whole thread is captured as context and stored in the generated artifacts."
---

### Key takeaways

- **Richer context**: supported files and message links in Slack; inline images, forwarded messages, and channel / thread history in Teams.
- **More control**: switch models for the next message and keep that choice for the conversation. Task status and recovery are also more reliable.
- **Availability**: public preview for Copilot Business / Enterprise organizations, using existing Copilot entitlements and cloud agent budgets. Some capabilities are rolling out gradually.
