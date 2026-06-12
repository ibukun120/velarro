"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const options = [
  "All Time",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
];

export default function DateRangeDropdown() {
  const [selected, setSelected] = useState("Select Date Range");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full sm:w-auto">
      
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 w-full sm:w-auto px-3 sm:px-4 py-1.5 border border-neutral-6 rounded-md text-xs sm:text-sm bg-neutral-1 hover:bg-neutral-4"
      >
        <span className="truncate">{selected}</span>

        <ChevronDown
          className={clsx(
            "w-4 h-4 transition shrink-0",
            open && "rotate-180"
          )}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-44 max-w-full bg-neutral-1 border border-neutral-6 rounded-lg shadow-md z-50">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="px-4 py-2 text-xs sm:text-sm cursor-pointer hover:bg-neutral-4"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}