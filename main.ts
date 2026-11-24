// make.fun entry: a short, funny rant about a small everyday annoyance.
// The judge reads one rant at a time and picks the one that lands hardest.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One deterministic rant. No clock, no random source, no network, no secrets.
const RANT =
  "Someone sees me coming and holds the elevator door from twenty feet away. Now I have to sprint in the exact gait of a grateful person instead of the relaxed walk of a man with nowhere to be, while they watch to be sure I made it. We will never speak again. I will think about this for years.";

// The sealed gate accepts 1..400 UTF-8 characters, non-blank, and nothing else.
// Check the trimmed length too: a line of spaces is invalid even when it is long.
const size = RANT.trim().length;
if (size < 1 || size > 400) {
  throw new Error("rant must be a non-blank line of 1..400 characters");
}

function emit(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), RANT, "utf8");
}

emit();
