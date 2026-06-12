import Image from "next/image";
import { CigarCard as CigarCardType } from "@/components/Sections/pairing/pairingData";
import MatchDots from "./MatchDots";

interface CigarCardProps {
  cigar: CigarCardType;
}

const badgeColors: Record<string, string> = {
  "PERFECT MATCH": "bg-[#7a6435] text-[#e8d9b0]",
  PERFECT: "bg-[#7a6435] text-[#e8d9b0]",
  STRONG: "bg-[#7a6435] text-[#e8d9b0]",
  GOOD: "bg-[#7a6435] text-[#e8d9b0]",
};

export default function CigarCard({ cigar }: CigarCardProps) {
  return (
    <div className="bg-white border border-neutral-6 flex flex-col overflow-hidden">
      {/* Image area */}
      <div className="relative bg-primary-900 h-50 w-full flex-shrink-0 overflow-hidden">
        <Image
          src={cigar.image ?? "/images/c1.png"}
          alt={cigar.name}
          fill
          className="object-cover"
        />

        <span
          className={`absolute top-3 right-3 text-[10px] font-bold tracking-widest px-2 py-1 border border-primary-300 ${
            badgeColors[cigar.badge] ?? "bg-primary-500 text-primary-500"
          }`}
        >
          {cigar.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-[14px] tracking-widest text-primary-500 uppercase">
          {cigar.collection}
        </p>
        <h3 className="text-[20px] font-medium text-secondary-900 leading-tight text-nowrap">
          {cigar.name}
        </h3>
        <p className="text-[14px] text-secondary-300">
          {cigar.vitola} . {cigar.size} | Ring Gauge {cigar.ringGauge}
        </p>
        <p className="text-[14px] text-secondary-500 leading-relaxed">{cigar.tastingNotes}</p>

        <hr className="border-primary-300 my-1" />

        <p className="text-[14px] tracking-widest text-secondary-500 uppercase">
          PAIRS WITH{" "}
          <span className="italic font-normal text-primary-500 normal-case tracking-normal text-[14px]">
            {cigar.pairsWith}
          </span>
        </p>

        <hr className="border-primary-300 my-1" />

        <p className="text-sm text-secondary-500 leading-relaxed">{cigar.preparation}</p>

        <div className="mt-2">
          <MatchDots filled={cigar.matchDots} label={cigar.matchLevel} />
        </div>

        <button className="mt-3 text-xs font-bold tracking-widest text-primary-600 uppercase text-left hover:text-primary-500 transition-colors cursor-pointer">
          ----- FULL GUIDE
        </button>
      </div>
    </div>
  );
}
