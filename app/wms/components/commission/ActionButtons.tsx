"use client";

interface Props {
  saved: boolean;
  onSave: () => void;
  onCancel: () => void;
}

export default function ActionButtons({ saved, onSave, onCancel }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onSave}
        className={`
          w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest
          text-neutral-1 transition-all duration-200 cursor-pointer
          shadow-[0_4px_12px_rgba(201,151,58,0.35)]
          hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(201,151,58,0.45)]
          ${saved ? "bg-green-500" : "bg-[#C59949] hover:bg-[#A67A28]"}
        `}
      >
        {saved ? "✓ Saved!" : "Save Changes"}
      </button>

      <button
        onClick={onCancel}
        className="
          w-full py-4 rounded-xl font-semibold text-sm text-[#1A1A1A]
          bg-white border-[1.5px] border-[#E0DCDA]
          hover:border-[#bbb] hover:bg-[#f9f9f9]
          transition-all duration-200 cursor-pointer
        "
      >
        Cancel
      </button>
    </div>
  );
}
