"use client";

const TIERS = [
  { range: "₹0 – $5,000 / month", rate: "5%" },
  { range: "₹5,001 – $20,000 / month", rate: "8%" },
  { range: "₹20,001 – $50,000 / month", rate: "11%" },
  { range: "₹50,001+ / month", rate: "15%" },
];

export default function TieredPanel() {
  return (
    <div className="bg-[#C59949] rounded-2xl p-7 text-neutral-1 shadow-lg">
      <p className="text-[10px] font-bold uppercase tracking-widest opacity-90 mb-4">
        Volume Tiers &amp; Rates
      </p>
      <div className="flex flex-col">
        {TIERS.map(({ range, rate }, i) => (
          <div
            key={range}
            className={`flex justify-between items-center py-3 ${
              i < TIERS.length - 1 ? "border-b border-white/20" : ""
            }`}
          >
            <span className="text-sm opacity-80">{range}</span>
            <span className="text-lg font-bold">{rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
