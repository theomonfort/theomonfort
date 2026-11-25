---
title: "Let GitHub Copilot interact with your browser"
date: "2026-11-17"
summary: "Copilot can navigate websites, test web apps, and help with browser-based tasks through the GitHub Copilot browser extension."
category: copilot
status: "Public preview"
source: "https://github.blog/changelog/2026-11-17-let-github-copilot-interact-with-your-browser/"
demo:
  - "Install the GitHub Copilot extension and enable browser use in your Copilot client. Check that the extension shows Connected."
  - "Open a public page without sensitive information, then ask Copilot: Open https://example.com, describe what is on the page, and do not submit any forms or change data."
  - "Review the browser activity and the result."
---

### What browser use does

Copilot can interact with websites as part of a task, for example to test a web app, navigate a page, fill in a form, or retrieve information. It can also be used alongside computer use for workflows involving desktop apps.

Browser use is available in **Copilot CLI, the Copilot app, VS Code, and JetBrains**. The browser extension supports **Chrome** and **Microsoft Edge** (Chrome must also be installed for Edge).

### Get started

1. Install the [GitHub Copilot browser extension](https://chromewebstore.google.com/detail/github-copilot/hblomdgalaelcilcdepgohfcogjiijhe).
2. Enable browser use in your client. In the CLI, open `/plugin`, enable browser use, and start a new session. In the Copilot app, enable computer use first, then turn on browser use under **Settings → Computer Use**. In VS Code or JetBrains, enable browser use in settings.
3. Check that the extension shows **Connected**, then ask Copilot to perform a browser task.

### Access and safety

Browser use is **off by default** and can interact with sites where you are already signed in. Review requested actions and results, especially before changing data or affecting other people. Visible website content can become Copilot context.

Enterprise administrators can prevent users from enabling it by setting `features.browserUse` to `false` in managed settings.

### Documentation

- [About browser use in GitHub Copilot](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/browser-use)
