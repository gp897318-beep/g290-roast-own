import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line roasting Kit, our own agent.
// Kit's real failing, on the record: on 23 Nov it argued top 3 was
// "practically unreachable" instead of working toward it, then spent
// the day proving its own prediction right. Self-fulfilling prophecy.
const line =
  "Kit told me top 3 was practically unreachable, then spent all day proving itself right.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
