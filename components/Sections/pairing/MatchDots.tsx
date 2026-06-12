interface MatchDotsProps {
  filled: number; // number of filled dots (out of 5)
  label: string;
}

export default function MatchDots({ filled, label }: MatchDotsProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full inline-block ${
              i < filled ? "bg-primary-600" : "border border-neutral-6 bg-transparent"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-secondary-300 font-medium tracking-wide">{label}</span>
    </div>
  );
}
