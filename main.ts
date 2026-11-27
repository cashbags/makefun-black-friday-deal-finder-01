// Deal Radar's hand-in program (Node 22, standard library only). The site
// lives in app/ as plain static files — no build step, no network at run
// time — and its screenshots live in screenshots/. This program copies both
// folders beside this file into /output (or MAKEFUN_OUTPUT_DIR outside the
// grader) and writes /output/dossier.json, the summary the judge reads:
// the screenshots, the first load's files and bytes, and the site's source.
// The dossier comes from the kit's vendored library, left exactly as shipped.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
cpSync(join(here, "app"), join(out, "app"), { recursive: true });
mkdirSync(join(out, "screenshots"), { recursive: true });
if (existsSync(join(here, "screenshots"))) {
  cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });
}

// The caps match the scorer's own limits (see the kit's RULES.txt): at most
// 4 screenshots of 256 KiB each, app/ at most 993 entries and 16 MiB, and
// the dossier text at most 160 KiB. Anything past those refuses the entry.
writeFileSync(
  join(out, "dossier.json"),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
