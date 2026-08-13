// Approximate, fixed conversion rate for display purposes only.
// For accurate/live rates, connect a currency API before going live.
const PKR_TO_SAR = 1 / 75; // ~75 PKR per 1 SAR (update this periodically)

export function formatDualPrice(pkr) {
  const sar = Math.round(pkr * PKR_TO_SAR);
  return { pkr, sar };
}