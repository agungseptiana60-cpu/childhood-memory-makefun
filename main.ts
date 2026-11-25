// Entry program for the make.fun bounty
// "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// (u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363).
//
// The whole entry is one sentence, at most 280 characters, that
// brings back a childhood memory. The grader runs this program
// and reads the single sentence it writes to entry.txt in the
// output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: keep every concrete detail from the draft (the
// burnt crust, the wooden spoon, the cicadas, the kitchen window),
// but trade the atmospheric ending for an ache that lingers. The
// draft ended on "smoke and rain" and left the judge with a scene;
// the revision ends on a grown-up still chasing a taste from
// childhood, which is the warm ache the judge weighs last and
// remembers longest. "Always" replaces "on summer evenings ...
// would" because a lost routine stings more than a dated one,
// and the summer evenings still sit mid-sentence as the time
// anchor. 266 characters, still one sentence.
export const ENTRY_LINE =
  "My grandmother always saved me the burnt crust from the bottom of the rice pot, scraping it into my bowl with her wooden spoon on summer evenings while cicadas sang outside the kitchen window, and I have spent my whole grown-up life trying to taste that crust again.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 280 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 280) {
  throw new Error(`entry line must be 1-280 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
