"use client";

import { useState } from "react";

type Props = {
  title: string;
};

export default function FilterSection({ title }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#C59949] py-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-md font-none"
      >
        {title}
        <span className="text-2xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-3 text-sm text-[#333333]">
          {/* placeholder for slider / inputs */}
          Filter options here
        </div>
      )}
    </div>
  );
}