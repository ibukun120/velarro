interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export default function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-700 text-primary-300 text-sm font-medium tracking-wide">
      {label}
      <button
        onClick={onRemove}
        className="text-[#e8d9b0] hover:text-neutral-1 transition-colors ml-1 leading-none cursor-pointer"
        aria-label={`Remove ${label} filter`}
      >
        <span className="text-primary-800">✕</span>
      </button>
    </span>
  );
}
