# Deal Radar — Black Friday 2026

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/cashbags/makefun-black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/cashbags/makefun-black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

**Deal Radar** is a static Black Friday deal finder: **63 real deals across 10 stores and 10 categories**, every price checked by the builder on 27 Nov 2026 from the source named on each card. Built for the [make.fun Black Friday deal finder bounty](https://make.fun/c/black-friday-deal-finder-01?ref=qrg7fvky).

Each card shows the product, store, sale price, usual price, discount, an honest "is it really a deal" verdict computed from the two prices, when the price was checked, the source that showed it, and a link to the product at its store. Search and filters by category, store and discount all work; the list sorts biggest-discount first by default.

## Run it

Serve `app/` with any static server and open `index.html` — no build step, no network request at runtime:

```sh
python3 -m http.server 8080 --directory app
```

## Layout

- `app/index.html` — the page shell: header, toolbar, deal grid, footer
- `app/style.css` — the whole look: warm paper, ink text, sale red, amber badges
- `app/deals.js` — the 63 checked deals (product, store, prices, link, check time, source)
- `app/verdict.js` — discount math and the per-deal verdict
- `app/filters.js` — search, category/store/discount filters, best-first sorting
- `app/render.js` — deal cards, stats bar, empty state
- `app/main.js` — boot: fills the menus, wires the toolbar, renders the list
- `main.ts` — the hand-in program: copies `app/` + `screenshots/` to `/output` and writes `dossier.json`
- `screenshots/` — 4 real Chromium captures of the site running (desktop cover, filtered view, search view, phone view)
