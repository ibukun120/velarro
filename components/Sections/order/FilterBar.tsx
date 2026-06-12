"use client";

import { useState } from 'react';
import { FilterTab, OrderTimeFilter } from "../../../data/order";
// import Container from '@/components/Layouts/Container';

// import { FilterTab, OrderTimeFilter } from "@/types/order";

interface FilterBarProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  searchValue: string;
  onSearchChange: (val: string) => void;
  timeFilter: OrderTimeFilter;
  onTimeFilterChange: (val: OrderTimeFilter) => void;
}

const TABS: { label: string; value: FilterTab }[] = [
  { label: "ALL", value: "all" },
  { label: "On the way", value: "on-way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Refund", value: "refund" },
];

const TIME_OPTIONS: { label: string; value: OrderTimeFilter }[] = [
  { label: "Order Time", value: "" },
  { label: "1 Day", value: "1" },
  { label: "30 Days", value: "30" },
  { label: "90 Days", value: "90" },
  { label: "6 Months", value: "180" },
];

export default function FilterBar({
  activeTab,
  onTabChange,
  searchValue,
  onSearchChange,
  timeFilter,
  onTimeFilterChange,
}: FilterBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative border-b border-t border-neutral-6 pt-3">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Tabs */}
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={`text-[13px] px-[18px] py-2.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.value
                  ? "border-neutral-6 text-secondary-700 font-medium"
                  : "border-transparent text-secondary-300 font-normal hover:text-secondary-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2.5 pb-2.5">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary-500"
              width={13}
              height={13}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border border-neutral-6 rounded-md py-1.5 pl-8 pr-3 text-[13px] text-secondary-700 bg-white outline-none w-[180px] placeholder:text-[#aaa] focus:border-neutral-6 transition-colors"
            />
          </div>

          {/* Time Dropdown */}
          <div className="relative">
            <select
              value={timeFilter}
              onChange={(e) => onTimeFilterChange(e.target.value as OrderTimeFilter)}
              className="border border-neutral-6 rounded-md py-1.5 pl-3 pr-8 text-[13px] text-secondary-700 bg-white outline-none cursor-pointer appearance-none focus:border-neutral-6 transition-colors"
            >
              {TIME_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary-300 pointer-events-none"
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between px-4">
        <span className="text-sm font-medium text-secondary-700">Filters</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-secondary-300 hover:text-secondary-700 transition-colors"
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border border-neutral-6 rounded-b-md shadow-lg z-10">
          {/* Tabs */}
          <div className="flex flex-col">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  onTabChange(tab.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-[13px] px-4 py-3 border-b border-neutral-6 transition-all cursor-pointer text-left ${
                  activeTab === tab.value
                    ? "bg-primary-600 text-neutral-1 font-medium"
                    : "text-secondary-300 hover:bg-secondary-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="p-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary-500"
                width={13}
                height={13}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="border border-neutral-6 rounded-md py-2 pl-8 pr-3 text-[13px] text-secondary-700 bg-white outline-none w-full placeholder:text-[#aaa] focus:border-[#C9A84C] transition-colors"
              />
            </div>

            {/* Time Dropdown */}
            <div className="relative">
              <select
                value={timeFilter}
                onChange={(e) => onTimeFilterChange(e.target.value as OrderTimeFilter)}
                className="border border-neutral-6 rounded-md py-2 pl-3 pr-8 text-[13px] text-secondary-700 bg-white outline-none cursor-pointer appearance-none focus:border-[#C9A84C] transition-colors w-full"
              >
                {TIME_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary-300 pointer-events-none"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
