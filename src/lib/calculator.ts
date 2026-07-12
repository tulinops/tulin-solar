const PER_KW_COST = 200000 / 3; // ≈ ₹66,667 per kW
const RATE_PER_UNIT = 8; // ≈ ₹8 / unit

export function formatINR(n: number) {
  return Math.round(n).toLocaleString("en-IN");
}

export function calculateSolarPlan(kw: number) {
  const cost = Math.round((kw * PER_KW_COST) / 1000) * 1000;
  const subsidy = kw >= 3 ? 78000 : kw * 30000;
  const finalPrice = Math.max(0, cost - subsidy);

  const genLow = kw * 120;
  const genHigh = kw * 140;
  const genAvg = kw * 130;

  const monthlySavings = Math.round((genAvg * RATE_PER_UNIT) / 100) * 100;
  const annualSavings = monthlySavings * 12;
  const payback = Math.max(1, Math.round((finalPrice / annualSavings) * 10) / 10);

  return { cost, subsidy, finalPrice, genLow, genHigh, monthlySavings, annualSavings, payback };
}
