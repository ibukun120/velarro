"use client";

import clsx from "clsx";
import DateRangeDropdown from "./DateRangeFilter";
import { OrderStatus } from "./order.types"; // ✅ FIXED

type FilterType = "All" | OrderStatus;

const filters: FilterType[] = [
  "All",
  "Inprogress",
  "Delivered",
  "Cancelled",
];

interface Props {
  active: FilterType;
  setActive: (value: FilterType) => void;
}

export default function OrderFilters({ active, setActive }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={clsx(
              "px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm border border-neutral-6 transition shrink-0",
              active === item
                ? "bg-primary-500 text-neutral-1"
                : "bg-neutral-1 text-neutral-8 hover:bg-gray-100"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Dropdown */}
      <div className="w-full sm:w-auto">
        <DateRangeDropdown />
      </div>
    </div>
  );
}