"use client";

import { AgreementType } from "./CommissionSettings";

// import { AgreementType } from "../CommissionSettings";

const GUIDANCE: Record<Exclude<AgreementType, null>, { title: string; text: string }> = {
  percentage: {
    title: "Strategic Guidance",
    text: "A 10% commission rate is currently 2% above the industry average for your category. Consider tiered pricing to reward high-volume partners.",
  },
  fixed: {
    title: "Fixed Model Insight",
    text: "Fixed per-order commissions reduce earnings variability. Best suited for low-margin, high-volume product catalogues where predictability is key.",
  },
  tiered: {
    title: "Tier Optimisation Tip",
    text: "Partners reaching the $50K/month tier generate 3x more revenue. Consider reducing your base tier rate to incentivise faster volume growth.",
  },
};

interface Props {
  activeType: AgreementType;
  commissionRate: number;
}

export default function StrategicGuidance({ activeType }: Props) {
  if (!activeType) return null;
  const { title, text } = GUIDANCE[activeType];

  return (
    <div className="bg-[#D4A84B] rounded-2xl p-5 text-neutral-1 shadow-sm flex gap-3">
      <svg
        className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <div>
        <p className="text-sm font-bold mb-1">{title}</p>
        <p className="text-xs opacity-85 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
