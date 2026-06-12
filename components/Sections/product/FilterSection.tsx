"use client";

import { useState, useMemo } from "react";
import { Plus, Minus } from "lucide-react";
import { FILTER_DATA } from "@/lib/filter.data";
import { ProductFilterItem } from "@/lib/productFilterdata";
import Image from "next/image";

interface FilterSectionProps {
  checked: Record<string, boolean>;
  intensity: number;
  onToggleCheck: (key: string) => void;
  onIntensityChange: (value: number) => void;
  data?: ProductFilterItem[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getSelectionsBySection(
  checked: Record<string, boolean>
): Record<string, string[]> {
  return Object.entries(checked).reduce<Record<string, string[]>>(
    (acc, [key, isChecked]) => {
      if (!isChecked) return acc;
      const parts = key.split("__");
      const label = parts[0];
      const value = parts.length === 3 ? parts[2] : parts[1];
      if (!acc[label]) acc[label] = [];
      acc[label].push(value);
      return acc;
    },
    {}
  );
}

function getTimeBucket(time: number): string | null {
  if (time < 30) return "Under 30 min";
  if (time >= 40 && time <= 59) return "40–59 min";
  if (time >= 60 && time <= 79) return "60–79 min";
  if (time >= 70 && time <= 99) return "70–99 min";
  if (time >= 100 && time <= 119) return "100-119 min";
  if (time >= 120 && time <= 140) return "120-140 min";
  return null;
}

function softMatch(a: string, b: string): boolean {
  const norm = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  const na = norm(a);
  const nb = norm(b);
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  const tokensA = new Set(na.split(" ").filter((t) => t.length > 2));
  return nb.split(" ").some((t) => t.length > 2 && tokensA.has(t));
}

// Returns true if the cigar matches ALL selected filter sections
// excludeSection lets us skip one section when computing availability for it
function cigarMatchesSelections(
  cigar: ProductFilterItem,
  selectionsBySection: Record<string, string[]>,
  excludeSection?: string
): boolean {
  for (const [section, values] of Object.entries(selectionsBySection)) {
    if (section === excludeSection || values.length === 0) continue;

    let matches = false;

    if (section === "FORMAT") {
      matches = values.some((v) => softMatch(cigar.format, v));
    } else if (section === "ORIGIN") {
      const originVals = [
        cigar.origin?.wrapper,
        cigar.origin?.binder,
        cigar.origin?.filler,
      ].filter(Boolean) as string[];
      matches = values.some((v) => originVals.some((o) => softMatch(o, v)));
    } else if (section === "SIZE") {
      matches = values.some((v) => softMatch(cigar.size, v));
    } else if (section === "TASTE NOTES") {
      const flavorList = cigar.flavors?.split(",").map((f) => f.trim()) ?? [];
      matches = values.some((v) => flavorList.some((f) => softMatch(f, v)));
    } else if (section === "PAIRINGS") {
      matches = values.some((v) => cigar.pairings?.some((p) => softMatch(p, v)));
    } else if (section === "ENJOYMENT TIME") {
      const bucket = getTimeBucket(cigar.enjoymentTime);
      matches = bucket ? values.includes(bucket) : false;
    }

    if (!matches) return false;
  }
  return true;
}

// Returns the set of values that are still valid for a section,
// given all OTHER sections' current selections
function getAvailableForSection(
  section: string,
  subheading: string | undefined,
  data: ProductFilterItem[],
  selectionsBySection: Record<string, string[]>
): Set<string> {
  const available = new Set<string>();

  const eligible = data.filter((cigar) =>
    cigarMatchesSelections(cigar, selectionsBySection, section)
  );

  eligible.forEach((cigar) => {
    if (section === "FORMAT") {
      if (cigar.format) available.add(cigar.format);
    } else if (section === "ORIGIN") {
      if (!subheading || subheading === "Wrapper") {
        if (cigar.origin?.wrapper) available.add(cigar.origin.wrapper);
      }
      if (!subheading || subheading === "Binder") {
        if (cigar.origin?.binder) available.add(cigar.origin.binder);
      }
      if (!subheading || subheading === "Filler") {
        if (cigar.origin?.filler) available.add(cigar.origin.filler);
      }
    } else if (section === "SIZE") {
      if (cigar.size) available.add(cigar.size);
    } else if (section === "TASTE NOTES") {
      cigar.flavors?.split(",").map((f) => f.trim()).forEach((f) => available.add(f));
    } else if (section === "PAIRINGS") {
      cigar.pairings?.forEach((p) => available.add(p));
    } else if (section === "ENJOYMENT TIME") {
      const bucket = getTimeBucket(cigar.enjoymentTime);
      if (bucket) available.add(bucket);
    }
  });

  return available;
}

// ─── Component ────────────────────────────────────────────────────────────────

const FilterSection = ({
  checked,
  intensity,
  onToggleCheck,
  onIntensityChange,
  data = [],
}: FilterSectionProps) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [availability, setAvailability] = useState<"in" | "out" | null>(null);

  const toggle = (label: string) =>
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  const selectionsBySection = useMemo(
    () => getSelectionsBySection(checked),
    [checked]
  );

  const hasAnySelection = Object.values(selectionsBySection).some(
    (v) => v.length > 0
  );

  // ── Checkbox renderer ─────────────────────────────────────────────────────
  const renderCheckbox = (item: string, label: string, subheading?: string) => {
    const key = subheading
      ? `${label}__${subheading}__${item}`
      : `${label}__${item}`;

    // SIZE and INTENSITY are never disabled
    const alwaysActive = label === "SIZE" || label === "INTENSITY";

    let disabled = false;

    if (!alwaysActive && hasAnySelection) {
      const available = getAvailableForSection(
        label,
        subheading,
        data,
        selectionsBySection
      );
      // Use softMatch so "Bourbon Whiskey" matches "Bourbon Whiskey" across data variations
      disabled = !Array.from(available).some((a) => softMatch(a, item));
    }

    const isChecked = !!checked[key];

    return (
      <label
        key={key}
        className={`flex items-center gap-[10px] select-none ${
          disabled ? "opacity-35 cursor-not-allowed" : "cursor-pointer group"
        }`}
      >
        <div
          onClick={() => {
            if (disabled) return;
            onToggleCheck(key);
          }}
          className={`shrink-0 rounded-sm border flex items-center justify-center transition-colors ${
            isChecked
              ? "bg-[var(--color-primary-500)] border-[var(--color-primary-500)]"
              : disabled
              ? "border-neutral-300 bg-neutral-100"
              : "border-black bg-white"
          }`}
          style={{ width: "14px", height: "14px" }}
        >
          {isChecked && (
            <svg
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "12px", height: "12px" }}
            >
              <path
                d="M2 5l2.5 2.5L8 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <span
          className={`text-[13px] transition-colors ${
            disabled
              ? "text-neutral-400"
              : isChecked
              ? "text-[var(--color-primary-500)]"
              : "text-[var(--color-neutral-9)] group-hover:text-[var(--color-neutral-13)]"
          }`}
        >
          {item}
        </span>
      </label>
    );
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="w-full md:w-[350px] hide-scrollbar md:border-r border-neutral-200 flex flex-col min-h-0">

      {/* HEADER — not scrolled, always visible */}
      <div
        className="flex-shrink-0  flex items-center justify-between cursor-pointer md:cursor-default"
        style={{ padding: "12px 20px 16px" }}
        onClick={() => setFiltersVisible((prev) => !prev)}
      >
        <span className="text-[14px] tracking-widest text-neutral-12 uppercase font-semibold">
          Filters
        </span>
        <Image
          src="/images/products/filter.svg"
          alt="Filters"
          width={14}
          height={14}
        />
      </div>

      {/* SCROLLABLE BODY */}
      <div
        className={`flex-col flex-1 min-h-0 ${
          filtersVisible ? "flex" : "hidden"
        } md:flex`}
        style={{ padding: "0 20px 40px" }}
      >
        {/* CLEAR ALL */}
        <div className="pb-3">
          <button
            onClick={() => {
              Object.keys(checked).forEach((k) => {
                if (checked[k]) onToggleCheck(k);
              });
              setAvailability(null);
            }}
            className="text-neutral-12 text-[13px] underline w-full text-right font-semibold"
          >
            Clear filters
          </button>
        </div>

        {/* AVAILABILITY */}
        <div className="border-b border-[var(--color-primary-200)]">
          <button
            onClick={() => toggle("AVAILABILITY")}
            className="flex items-center justify-between w-full text-left"
            style={{ paddingTop: "18px", paddingBottom: "18px" }}
          >
            <span
              className={`text-[14px] tracking-widest font-semibold uppercase transition-colors ${
                open["AVAILABILITY"]
                  ? "text-[var(--color-primary-500)]"
                  : "text-neutral-12"
              }`}
            >
              AVAILABILITY
            </span>
            {open["AVAILABILITY"] ? (
              <Minus size={12} className="text-[var(--color-primary-500)]" />
            ) : (
              <Plus size={12} className="text-neutral-12" />
            )}
          </button>

          {open["AVAILABILITY"] && (
            <div className="flex flex-col pb-4" style={{ gap: "10px" }}>
              {(["in", "out"] as const).map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-[10px] cursor-pointer"
                  onClick={() =>
                    setAvailability((prev) => (prev === val ? null : val))
                  }
                >
                  <div
                    className={`shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                      availability === val
                        ? "bg-[var(--color-primary-500)] border-[var(--color-primary-500)]"
                        : "bg-white border-black"
                    }`}
                    style={{ width: "14px", height: "14px" }}
                  />
                  <span className="text-[var(--color-neutral-9)]" style={{ fontSize: "13px" }}>
                    {val === "in" ? "In stock" : "Out of stock"}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* FILTER SECTIONS */}
        <div className="flex-1 hide-scrollbar">
          <div className="flex flex-col divide-y divide-[var(--color-primary-200)]">
          {FILTER_DATA.map(({ label, type, options }) => (
            <div key={label}>
              <button
                onClick={() => toggle(label)}
                className="flex items-center justify-between w-full text-left"
                style={{ paddingTop: "18px", paddingBottom: "18px" }}
              >
                <span
                  className={`text-[14px] tracking-widest font-semibold uppercase transition-colors ${
                    open[label]
                      ? "text-[var(--color-primary-500)]"
                      : "text-neutral-12"
                  }`}
                >
                  {label}
                </span>
                {open[label] ? (
                  <Minus size={12} className="text-[var(--color-primary-500)]" />
                ) : (
                  <Plus size={12} className="text-neutral-12" />
                )}
              </button>

              {open[label] && (
                <div style={{ paddingBottom: "16px" }}>

                  {/* INTENSITY */}
                  {type === "intensity" && (
                    <div className="flex items-center" style={{ gap: "12px" }}>
                      <span className="text-[var(--color-neutral-9)]" style={{ fontSize: "13px" }}>
                        Intensity
                      </span>
                      <div className="flex gap-[4px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <button
                            key={i}
                            onClick={() => onIntensityChange(i === intensity ? 0 : i)}
                            className={`rounded-full transition-all ${
                              i <= intensity
                                ? "bg-[var(--color-primary-500)]"
                                : "border border-[var(--color-primary-500)]"
                            }`}
                            style={{ width: "14px", height: "14px" }}
                          />
                        ))}
                      </div>
                      <span className="text-[var(--color-neutral-9)]" style={{ fontSize: "13px" }}>
                        {intensity}/5
                      </span>
                    </div>
                  )}

                  {/* CHECKBOXES */}
                  {type === "checkbox" && (
                    <div className="flex flex-col" style={{ gap: "10px" }}>
                      {options.map((option, idx) => {
                        if (typeof option === "object" && "subheading" in option) {
                          return (
                            <div key={idx} className="flex flex-col" style={{ gap: "8px" }}>
                              <span
                                className="text-[var(--color-neutral-10)] font-medium"
                                style={{ fontSize: "12px", marginTop: idx === 0 ? "0px" : "6px" }}
                              >
                                {option.subheading}
                              </span>
                              {option.items.map((item: string) =>
                                renderCheckbox(item, label, option.subheading)
                              )}
                            </div>
                          );
                        }
                        return renderCheckbox(option as string, label);
                      })}
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;