// Rendering: deal cards, the stats bar and the empty state. Every card shows
// the product, its store, the sale price big with the usual price struck
// through, the discount badge, the verdict, the check time, the source and
// the store link — the same fields the screenshots must show.

import { deals } from "./deals.js";
import { discountPct, saving, verdictText, verdictClass } from "./verdict.js";

export function fmtMoney(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
}

export function fmtChecked() {
  // CHECKED_AT is 2026-11-27T08:00:00Z; shown the same way on every card.
  return "27 Nov 2026, 08:00 UTC";
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function cardHtml(deal) {
  const pct = discountPct(deal);
  const save = saving(deal);
  return `<article class="card" data-id="${deal.id}">
    <div class="card-top"><span class="chip">${esc(deal.category)}</span><span class="store">${esc(deal.store)}</span></div>
    <h2 class="card-title">${esc(deal.title)}</h2>
    <div class="price-row"><span class="sale">${fmtMoney(deal.price)}</span><span class="was">${fmtMoney(deal.was)}</span><span class="badge">-${pct}%</span></div>
    <div class="save-line">You save ${fmtMoney(save)}</div>
    <p class="verdict ${verdictClass(deal)}">${esc(verdictText(deal))}</p>
    <p class="meta">Checked ${fmtChecked()} · Source: ${esc(deal.source)}</p>
    <a class="store-link" href="${esc(deal.url)}" target="_blank" rel="noopener">View at ${esc(deal.store)} &rarr;</a>
  </article>`;
}

export function renderList(rows) {
  const grid = document.getElementById("deals");
  const count = document.getElementById("result-count");
  count.textContent = rows.length === 1 ? "1 deal" : `${rows.length} deals`;
  if (rows.length === 0) {
    grid.innerHTML = `<p class="empty">No deals match those filters. Clear the search or pick a wider discount range.</p>`;
    return;
  }
  grid.innerHTML = rows.map(cardHtml).join("");
}

export function renderStats() {
  const stores = new Set(deals.map((d) => d.store)).size;
  const cats = new Set(deals.map((d) => d.category)).size;
  const totalSave = deals.reduce((a, d) => a + (d.was - d.price), 0);
  document.getElementById("stats").innerHTML =
    `<strong>${deals.length} verified deals</strong> · <strong>${stores} stores</strong> · <strong>${cats} categories</strong> · <strong>${fmtMoney(Math.round(totalSave))} total savings</strong>`;
}
