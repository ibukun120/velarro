"use client";

interface Props {
  salesAmount: number | "";
  onSalesChange: (val: number | "") => void;
  commission: number;
  netEarnings: number;
}

function formatCurrency(val: number): string {
  if (val >= 1_000_000) return "$" + (val / 1_000_000).toFixed(1) + "M";
  if (val >= 1_000)
    return "$" + val.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return "$" + val.toFixed(val % 1 === 0 ? 0 : 2);
}

export default function EarningsPreview({
  salesAmount,
  onSalesChange,
  commission,
  netEarnings,
}: Props) {
  return (
    <div className="bg-[#C59949] rounded-2xl p-7 text-neutral-1 shadow-lg">
      {/* Header */}
      <p className="text-xs font-bold uppercase tracking-widest opacity-90">
        Estimated Earnings Preview
      </p>
      <p className="text-xs opacity-75 mt-0.5 mb-6">
        Calculated based on current settings
      </p>

      {/* Sales Input */}
      <div className="mb-5">
        <p className="text-xs opacity-80 mb-1.5">If sales =</p>
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold opacity-60 pt-1">$</span>
          <input
            type="number"
            value={salesAmount}
            onChange={(e) =>
              onSalesChange(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="10,000"
            className="
              bg-transparent border-b-2 border-white/40 focus:border-white/90
              outline-none text-3xl font-bold text-neutral-1 placeholder:text-neutral-1/40
              w-44 pb-0.5 transition-colors duration-200
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
              [&::-webkit-inner-spin-button]:appearance-none
            "
          />
          {/* Trend icon */}
          <svg
            className="ml-auto opacity-70"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/20 mb-5" />

      {/* Commission + Net */}
      <div>
        <p className="text-xs opacity-80 mb-1.5">Commission =</p>
        <div className="flex justify-between items-end">
          <span className="text-3xl font-bold">
            {salesAmount !== "" ? formatCurrency(commission) : "$0"}
          </span>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-75">
              Net Earnings
            </p>
            <p className="text-xl font-bold">
              {salesAmount !== "" ? formatCurrency(netEarnings) : "$0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
