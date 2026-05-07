---
title: エージェント
titleEn: Agent
summary: LLM が次の一手を決め、ツールを実行し、その結果を文脈に戻しながら完了まで進む基本ループ。
icon: 🔁
color: cyan
order: 3
category: develop
related: ['copilot-chat', 'harness-engineering', 'cli', 'cloud-agent']
---

## The good old days

昔の LLM chat はシンプルだった。You が prompt を投げ、LLM が answer を返す。

```mermaid
flowchart LR
  You[You] -->|Prompt| LLM[The LLM]
  LLM -->|Answer| You

  classDef human fill:#102033,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px;
  classDef llm fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:2px;
  class You human;
  class LLM llm;
```

> この世界では、context はほぼ **prompt の中に人間が手で詰めるもの** だった。

## Current

現在は、project context と tools を持つ **agent / harness** が LLM の前に立つ。

```mermaid
flowchart LR
  Project[You + Project] -->|prompts / instructions / skills / MCP| Agent[The Agent<br/>aka Harness<br/><br/>Copilot Chat<br/>Copilot CLI<br/>Cloud Agent<br/>Claude Code<br/>Codex]
  Agent -->|answer / PR / edit| Project
  Agent -->|context| LLM[The LLM]
  LLM -->|next step| Agent
  Agent -->|tool call| Tools[Tools<br/>read / edit / run]
  Tools -->|result| Agent

  classDef human fill:#102033,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px;
  classDef llm fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:2px;
  classDef agent fill:#132812,stroke:#9bbc0f,color:#f4ffd8,stroke-width:2px;
  classDef context fill:#20242a,stroke:#8b949e,color:#d0d7de,stroke-width:2px;
  class Project human;
  class LLM llm;
  class Agent agent;
  class Tools context;
```

> No magic. Agent は、LLM を直接呼ぶ代わりに、**何を読ませるか・どの tool を使わせるか・結果をどう戻すか** を管理する layer。

## Agent / Harness の裏側（Simplified）

- **Execution Loop**：LLM が次の一手を決め、tool 実行 → 結果を context に戻す、を `done` まで繰り返す。
- **Context Management**：system prompt、available tools、user task、tool results を整理し、毎回の LLM call に必要な context として渡す。

```python
# --- Setup ---
system_prompt = "You are a helpful coding assistant..."
available_tools = [search_web, read_file, edit_file, run_terminal]

# --- Agent Loop ---
user_task = input("How can I help you?")
context = [system_prompt, available_tools, user_task]

while True:
    next_step = await llm.determine_next_step(context)
    context.append(next_step)

    if next_step.intent == "done":
        return next_step.final_answer

    result = await execute_tool(next_step.tool, next_step.args)
    context.append(result)
```
