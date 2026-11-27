// Boot: fill the filter menus from the data, render the list best-first,
// and re-render on every toolbar change. window.__shotReady is false while
// a render runs and true once the page is on screen, so a screenshot script
// knows when to capture.

import { deals } from "./deals.js";
import { categoriesOf, storesOf, applyFilters, sortDeals } from "./filters.js";
import { renderList, renderStats } from "./render.js";

const app = document.getElementById("deals");
const search = document.getElementById("search");
const categorySel = document.getElementById("category");
const storeSel = document.getElementById("store");
const discountSel = document.getElementById("discount");
const sortSel = document.getElementById("sort");

function fill(sel, values, label) {
  // The "All" option must go in FIRST: a select auto-selects its first
  // option as options are appended, and inserting one in front afterwards
  // leaves the selection on the first value instead of "All".
  sel.insertAdjacentHTML("afterbegin", `<option value="">${label}</option>`);
  for (const v of values) {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    sel.appendChild(opt);
  }
}

fill(categorySel, categoriesOf(deals), "All categories");
fill(storeSel, storesOf(deals), "All stores");

function currentFilters() {
  return {
    q: search.value,
    category: categorySel.value,
    store: storeSel.value,
    minDiscount: discountSel.value ? Number(discountSel.value) : 0,
  };
}

function render() {
  window.__shotReady = false;
  const rows = sortDeals(applyFilters(deals, currentFilters()), sortSel.value);
  renderList(rows);
  window.__shotReady = true;
}

for (const el of [search, categorySel, storeSel, discountSel, sortSel]) {
  el.addEventListener("input", render);
  el.addEventListener("change", render);
}

renderStats();
document.getElementById("checked-note").textContent =
  `Every price was checked on 27 Nov 2026 (08:00 UTC) from the source named on each card.`;
render();
