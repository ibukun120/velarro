"use client";

interface Props {
  commissionRate: number;
  onRateChange: (rate: number) => void;
}

const APPLIES_TO_OPTIONS = ["All Products", "Selected Categories", "Custom Rules"];

export default function CommissionRateCard({ commissionRate, onRateChange }: Props) {
  return (
    <div className="bg-white rounded-lg p-7 shadow-sm border border-[#C59949]">
      <div className="grid grid-cols-2 gap-6">
        {/* Rate Input */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">
            Commission Rate
          </p>
          <div className="flex items-center border-[1.5px] border-[#E0DCDA] bg-[#EAEAEA] rounded-lg overflow-hidden w-fit">
            <input
              type="number"
              min={0}
              max={100}
              value={commissionRate}
              onChange={(e) => onRateChange(Number(e.target.value))}
              className="w-32 px-3 py-2 text-2xl bg-[#EAEAEA] font-extrabold text-[#1A1A1A] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="pr-3 text-[#888] font-medium text-base">%</span>
          </div>
          <p className="text-xs text-[#888] mt-2">Standard platform fee applied.</p>
        </div>

        {/* Applies To */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-3">
            Applies To
          </p>
          <div className="flex flex-col gap-2.5">
            {APPLIES_TO_OPTIONS.map((label, i) => (
              <label key={label} className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" defaultChecked={i === 0} className="hidden peer" />
                <div className="w-[18px] h-[18px] border-2 border-[#E0DCDA] rounded flex items-center justify-center flex-shrink-0 peer-checked:bg-[#D4A84B] peer-checked:border-[#D4A84B] transition-all duration-150">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1.5 5L4 7.5L8.5 2.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#1A1A1A]">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Effective From */}
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-2">
          Effective From
        </p>
        <div className="flex items-center gap-2.5 border-[1.5px] border-[#E0DCDA] rounded-lg px-4 py-2.5 w-[230px] text-sm text-[#555] bg-[#EAEAEA]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          01 April, 2026
        </div>
      </div>
    </div>
  );
}
