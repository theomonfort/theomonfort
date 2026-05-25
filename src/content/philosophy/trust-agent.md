---
question: エージェントを信頼していい？
short: 検証可能な harness を作れば。盲信ではなく、計測。
questionEn: Can I trust the agent?
shortEn: Only if you build a verifiable harness. Don't blind-faith — measure.
bodyEn: |
  It's not "trust" — it's **verification**.

  - Are there **automated tests** for the output?
  - Can you **roll back via git** for the blast radius?
  - Are you **observing** logs and cost?
  - Is there a clear **boundary** for "from here, human takes over"?

  If those are in place, you don't need to *trust* the agent. **The system guarantees the trust for you.**

  > "Don't trust the agent. Trust your harness."
order: 5
---

「信頼」じゃなく「**検証**」だ。

- 出力に対する**自動テスト**があるか？
- 影響範囲を **git で巻き戻せる**か？
- ログとコストを**観測**しているか？
- "ここから先は人間" の**境界線**があるか？

これが揃っていれば、エージェントを"信頼"する必要はない。**システムが信頼を担保**してくれる。

> "Don't trust the agent. Trust your harness."
