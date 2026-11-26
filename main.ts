import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// Gate: entry must be 1-280 chars of UTF-8 text, not only whitespace.
// MAX_CHARS mirrors the sealed scorer's upper bound for this bounty.
const MAX_CHARS = 280;

const LINE =
  "I unplugged the smart toaster. It sent me 3 notifications, a firmware update, and a message saying it misses me. It is a toaster. It has abandonment issues.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
