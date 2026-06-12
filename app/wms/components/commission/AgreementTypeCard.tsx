"use client";

import { AgreementType } from "./CommissionSettings";

const OPTIONS = [
  {
    type: "percentage" as const,
    title: "Percentage Based",
    description: "Static revenue share on every successful transaction.",
  },
  {
    type: "fixed" as const,
    title: "Fixed Per Order",
    description: "Flat dollar amount regardless of total order value.",
  },
  {
    type: "tiered" as const,
    title: "Tiered Commission",
    description: "Variable rates based on monthly sales volume threshold.",
  },
];

interface Props {
  activeType: AgreementType;
  onToggle: (type: Exclude<AgreementType, null>) => void;
}

export default function AgreementTypeCard({ activeType, onToggle }: Props) {
  return (
    <div className="bg-white rounded-lg p-7 shadow-sm mb-5 border border-[#C59949]">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-5">
        Current Agreement Type
      </p>

      <div className="flex flex-col gap-3">
        {OPTIONS.map(({ type, title, description }) => {
          const isActive = activeType === type;
          return (
            <div
              key={type}
              onClick={() => onToggle(type)}
              className={`
                flex items-center gap-4 px-4 py-4 rounded-lg border-[1.5px] cursor-pointer
                transition-all duration-200 select-none
                ${
                  isActive
                    ? "border-[#D4A84B] bg-[#FBF3E4]"
                    : "border-[#E0DCDA] hover:border-[#E8C87A] hover:translate-x-0.5"
                }
              `}
            >
              {/* Radio circle */}
              <div
                className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  transition-all duration-200
                  ${isActive ? "border-[#D4A84B] bg-[#D4A84B]" : "border-[#E0DCDA]"}
                `}
              >
                <div
                  className={`
                    w-2 h-2 rounded-full bg-white transition-all duration-200
                    ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                  `}
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#A67A28]" : "text-[#1A1A1A]"
                  }`}
                >
                  {title}
                </h3>
                <p className="text-xs text-[#888] mt-0.5">{description}</p>
              </div>

              {/* Check badge */}
              <div
                className={`
                  w-6 h-6 rounded-full bg-[#D4A84B] flex items-center justify-center
                  transition-all duration-300
                  ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
