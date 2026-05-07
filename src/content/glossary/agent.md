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

## Agent / Harness under the hood

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
