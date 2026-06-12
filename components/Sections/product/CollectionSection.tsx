"use client";

import { useMemo, useState } from "react";
import productFilterData  from "@/lib/productFilterdata";

import FilterSection from "../product/FilterSection";
// import CollectiongridSection from "../product/CollectiongridSection";
// import Pagination from "@/components/Common/Pagination/Pagination";

import datas, { ProductFilterItem } from "@/lib/productFilterdata";

import Collection from "./Collection";

function parseEnjoymentTime(time: number | string | undefined): number | null {
  if (typeof time === "number") return time;
  if (typeof time === "string") {
    const parsed = parseInt(time.replace(/[^0-9]/g, ""), 10);
    return Number.isNaN(parsed) ? null : parsed;
  }
  return null;
}

const CollectionSection = () => {
  const data = datas as ProductFilterItem[];

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [intensity, setIntensity] = useState<number>(0);

  // user selected item
  // const [manualSelectedItem, setManualSelectedItem] =
  //   useState<ProductFilterItem | null>(null);

  const toggleCheck = (key: string) => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // selected filters
  const selectedFilters = useMemo(() => {
    return Object.entries(checked).reduce<
      Record<string, (string | { subheading: string; value: string })[]>
    >((acc, [key, value]) => {
      if (!value) return acc;

      const parts = key.split("__");
      const label = parts[0];
      let filterValue: string | { subheading: string; value: string };

      // Format: label__subheading__option or label__option
      if (parts.length === 3) {
        // Has subheading (e.g., ORIGIN__Wrapper__Corojo 99 Puro)
        filterValue = { subheading: parts[1], value: parts[2] };
      } else {
        // No subheading (e.g., FORMAT__Churchill)
        filterValue = parts[1];
      }

      if (!acc[label]) {
        acc[label] = [];
      }

      acc[label].push(filterValue);

      return acc;
    }, {});
  }, [checked]);

  // filtered products
  const filteredData = useMemo(() => {
    return data.filter((cigar) => {
      // intensity filter
      if (intensity > 0 && cigar.intensity !== intensity) {
        return false;
      }

      // dynamic filters
      for (const [label, options] of Object.entries(selectedFilters)) {
        if (!options.length) continue;

        // FORMAT
        if (label === "FORMAT") {
          const formatOptions = options.map((opt) =>
            typeof opt === "object" ? opt.value : opt,
          );
          if (!formatOptions.includes(cigar.format ?? "")) {
            return false;
          }
        }

        // ORIGIN
        else if (label === "ORIGIN") {
          const matches = options.some((filterItem) => {
            if (typeof filterItem === "object" && "subheading" in filterItem) {
              // Item has subheading - check specific category
              const { subheading, value } = filterItem;
              if (subheading === "Wrapper" && cigar.origin?.wrapper === value)
                return true;
              if (subheading === "Binder" && cigar.origin?.binder === value)
                return true;
              if (subheading === "Filler" && cigar.origin?.filler === value)
                return true;
              return false;
            } else {
              // No subheading - check all categories
              const originValues = [
                cigar.origin?.wrapper,
                cigar.origin?.binder,
                cigar.origin?.filler,
              ].filter(Boolean) as string[];
              return originValues.includes(filterItem as string);
            }
          });

          if (!matches) {
            return false;
          }
        }

        // SIZE
        else if (label === "SIZE") {
          const diameter = parseFloat(cigar.diameterCm ?? "0");

          const matches = options.some((filterItem) => {
            const option =
              typeof filterItem === "object" ? filterItem.value : filterItem;
            if (option.startsWith("Small")) {
              return diameter >= 1.9 && diameter <= 2.0;
            }

            if (option.startsWith("Medium")) {
              return diameter > 2.0 && diameter <= 2.2;
            }

            if (option.startsWith("Large")) {
              return diameter > 2.2 && diameter <= 2.4;
            }

            return false;
          });

          if (!matches) {
            return false;
          }
        }

        // TASTE NOTES
        else if (label === "TASTE NOTES") {
          const flavorText = (cigar.flavors ?? "").toLowerCase();

          const matches = options.some((filterItem) => {
            const option =
              typeof filterItem === "object" ? filterItem.value : filterItem;
            return flavorText.includes(option.toLowerCase());
          });

          if (!matches) {
            return false;
          }
        }

        // PAIRINGS
        else if (label === "PAIRINGS") {
          const pairings = cigar.pairings;

          const matches =
            Array.isArray(pairings) &&
            options.some((filterItem) => {
              const option =
                typeof filterItem === "object" ? filterItem.value : filterItem;
              return pairings.some(
                (pairing) => pairing.toLowerCase() === option.toLowerCase(),
              );
            });

          if (!matches) {
            return false;
          }
        }

        // ENJOYMENT TIME
        else if (label === "ENJOYMENT TIME") {
          const time = parseEnjoymentTime(cigar.enjoymentTime ?? cigar.duration);

          const matches = options.some((filterItem) => {
            const option =
              typeof filterItem === "object" ? filterItem.value : filterItem;
            if (time === null) {
              return false;
            }

            if (option === "Under 30 min") {
              return time < 30;
            }

            if (option === "40–59 min") {
              return time >= 40 && time <= 59;
            }

            if (option === "60–79 min") {
              return time >= 60 && time <= 79;
            }

            if (option === "70–99 min") {
              return time >= 70 && time <= 99;
            }

            if (option === "100-119 min") {
              return time >= 100 && time <= 119;
            }

            if (option === "120-140 min") {
              return time >= 120 && time <= 140;
            }

            return false;
          });

          if (!matches) {
            return false;
          }
        }
      }

      return true;
    });
  }, [selectedFilters, intensity, data]);

  // auto fallback selected item
  // const selectedItem =
  //   manualSelectedItem &&
  //   filteredData.some((item) => item.id === manualSelectedItem.id)
  //     ? manualSelectedItem
  //     : (filteredData[0] ?? null);

  return (
    <div className="flex flex-col bg-neutral-1 pb-[64px]">
      <main
        className="
    flex
    flex-col
    md:flex-row
  "
      >
        {/* FILTER */}
        <div
          className="
            w-full
            md:w-[350px]
            md:border-r
            border-neutral-6
          "
        >
          <aside>
            <FilterSection
              checked={checked}
              intensity={intensity}
              onToggleCheck={toggleCheck}
              onIntensityChange={setIntensity}
              data={productFilterData}
            />
          </aside>
        </div>

        {/* GRID */}
        <div
          className="
    flex-1
    min-w-0
  "
        >
          <Collection data={filteredData} />
          {/* <CollectiongridSection
            data={filteredData}
            selectedItem={selectedItem}
            onSelectItem={setManualSelectedItem}
          /> */}
          {/* <Pagination totalPages={7} /> */}
        </div>
      </main>
    </div>
  );
};

export default CollectionSection;
