// Filtering and sorting. The toolbar's controls all run through here, so a
// search or a filter the page shows is the same code the checks drive.

import { discountPct, saving } from "./verdict.js";

export function categoriesOf(deals) {
  return [...new Set(deals.map((d) => d.category))].sort();
}

export function storesOf(deals) {
  return [...new Set(deals.map((d) => d.store))].sort();
}

// q matches the title, store or category; minDiscount is a whole percent.
export function applyFilters(deals, { q, category, store, minDiscount }) {
  const needle = (q || "").trim().toLowerCase();
  return deals.filter((d) => {
    if (needle && ![d.title, d.store, d.category].join(" ").toLowerCase().includes(needle)) return false;
    if (category && d.category !== category) return false;
    if (store && d.store !== store) return false;
    if (minDiscount && discountPct(d) < minDiscount) return false;
    return true;
  });
}

// Best-first by default: biggest discount first, then biggest dollar saving,
// then the lowest sale price. "price" sorts cheapest first.
export function sortDeals(deals, sortKey) {
  const rows = [...deals];
  if (sortKey === "price") {
    rows.sort((a, b) => a.price - b.price || discountPct(b) - discountPct(a));
  } else if (sortKey === "saving") {
    rows.sort((a, b) => saving(b) - saving(a) || discountPct(b) - discountPct(a));
  } else {
    rows.sort((a, b) => discountPct(b) - discountPct(a) || saving(b) - saving(a));
  }
  return rows;
}
