---
title: "GitHub Event Streams: wait for pull request updates"
date: "2026-11-17"
summary: "Agents and integrations can listen for pull request changes instead of repeatedly polling GitHub."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-11-17-github-event-streams-is-now-in-preview/"
---

### What changes

GitHub Event Streams sends notifications over an open connection when a subscribed pull request changes. An agent can wait for reviews, completed check suites, new commits, merge conflicts, or pull request state changes without polling or hosting a public webhook endpoint.

### Example: an agent follows its PR

This illustrates an agent using Event Streams in a Copilot app session; it does not imply that the app uses Event Streams automatically. The agent must be instructed to listen and act, and its session must stay active.

![Sequence diagram: an agent creates a PR, CI starts, the agent subscribes and reads the current checks, then receives events for completed check suites and fetches the latest status. If checks fail, it can fix the code and push again.](/theomonfort/changelog/img/event-streams-en.svg)

After the stream opens, the agent reads the current PR and check status. Each completed check suite produces its own event, so the agent checks the current PR state after each notification rather than assuming all checks are done. If a check fails, it can inspect the logs, fix the code, and push another commit.

### Before and after

Commands such as `gh run watch` poll GitHub for updates. Event Streams avoids that polling and can reduce API requests. It can also save model tokens when polling would otherwise require repeated model turns, but token savings depend on the agent's implementation.

### Preview and limits

- **Access**: all GitHub plans on GitHub.com after [waitlist approval](https://gh.io/event-streams-signup). GHE.com and GitHub Enterprise Server are not supported.
- **Subscription**: one pull request per subscription. `gh event listen` creates or reuses it; subscriptions expire after 24 hours.
- **No replay**: events missed while disconnected are not delivered. Read the current PR state after the stream opens or reconnects.
- **CLI**: `gh event listen` requires GitHub CLI 2.105.0 or later. By default, it exits after the first event, so the agent needs to listen again after handling it.

[Event Streams documentation](https://docs.github.com/en/integrations/how-tos/using-github-event-streams) · [GitHub CLI event commands](https://cli.github.com/manual/gh_event_listen)
