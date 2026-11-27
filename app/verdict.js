// The "is it really a deal" signal. Every verdict is computed from the two
// checked prices, plus the deal's evidence flag where one exists. Nothing
// here invents a price history: the bands say only what the discount itself
// shows, and the flags say only what a source reported.

export function discountPct(deal) {
  return Math.round((1 - deal.price / deal.was) * 100);
}

export function saving(deal) {
  return Math.round((deal.was - deal.price) * 100) / 100;
}

// One short, honest verdict per deal. The flag beats the band: a reported
// all-time low stays a true low even at a modest percentage, a refurbished
// unit is labelled as one, and a cut off a raised list price says so.
export function verdictText(deal) {
  const pct = discountPct(deal);
  if (deal.flag === "refurb") {
    return "Real cut on a refurbished unit — the saving is genuine, but it is not a new console.";
  }
  if (deal.flag === "raised") {
    return "Real cut, but the list price was raised earlier this year — the discount is measured off a higher base.";
  }
  if (deal.flag === "low") {
    return "True low — a source reported this as the lowest price ever seen for it.";
  }
  if (pct >= 50) return "True low — half price or better on a current model.";
  if (pct >= 40) return "Strong cut — well below the usual price.";
  if (pct >= 30) return "Solid cut — a real saving on a current model.";
  if (pct >= 20) return "Modest cut — real, but not the year's best price.";
  return "Small cut — a routine sale; the saving is thin.";
}

export function verdictClass(deal) {
  const pct = discountPct(deal);
  if (deal.flag === "low" || pct >= 50) return "verdict-true";
  if (pct >= 30) return "verdict-strong";
  if (pct >= 20) return "verdict-modest";
  return "verdict-thin";
}
