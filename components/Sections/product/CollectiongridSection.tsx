"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { ProductFilterItem, getProductSlug } from "@/lib/productFilterdata";
import ProductCard from "@/components/ui/Cards/ProductCard";

const TABS = ["ALL", "ACCESSORIES", "CIGARS"] as const;
type Tab = (typeof TABS)[number];

interface CollectiongridSectionProps {
  data: ProductFilterItem[];
  selectedItem: ProductFilterItem | null;
  onSelectItem: (item: ProductFilterItem) => void;
}

const CollectiongridSection = ({
  data,
  selectedItem,
  onSelectItem,
}: CollectiongridSectionProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Sort By");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;
  const topBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const top = topBarRef.current?.offsetTop;
    if (typeof top === "number") {
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [currentPage]);

  const handleExplore = (item: ProductFilterItem) => {
    onSelectItem(item);
    router.push(`/product/${getProductSlug(item.title)}`);
  };

  const filtered = useMemo(
    () =>
      data.filter((c) =>
        query
          ? c.title.toLowerCase().includes(query.toLowerCase()) ||
            c.flavors.toLowerCase().includes(query.toLowerCase())
          : true,
      ),
    [data, query],
  );

  const sorted = useMemo(() => {
    const items = [...filtered];
    switch (sortBy) {
      case "Intensity: Low to High":
        return items.sort((a, b) => a.intensity - b.intensity);
      case "Intensity: High to Low":
        return items.sort((a, b) => b.intensity - a.intensity);
      case "Name: A–Z":
        return items.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return items;
    }
  }, [filtered, sortBy]);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [query, sortBy, activeTab, data.length]);

  const pageItems = sorted.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    // 1. Outer wrapper
    <div 
    ref={topBarRef}
    className="flex-1 min-w-0 overflow-hidden bg-primary-50 ">
      {/* 2. Encloses tabs + search/sort + cards */}
      <div
        className="flex flex-col w-full"
        style={{ padding: "24px", gap: "24px" }}
      >
        {/* 3. Top bar — stacks on mobile */}
        <div
          ref={topBarRef}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          style={{ gap: "12px" }}
        >
          {/* 4. Tabs */}
          <div className="flex items-center" style={{ gap: "16px" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                // onClick={() => setActiveTab(tab)}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                style={{ paddingBottom: "4px" }}
                className={`text-[12px] sm:text-[13px] tracking-widest uppercase border-b-2 transition ${
                  activeTab === tab
                    ? "border-primary-500 text-primary-500"
                    : "border-transparent text-neutral-8 hover:text-neutral-11"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 5. Search + Sort — stacks on very small screens */}
          <div className="flex flex-wrap items-center" style={{ gap: "12px" }}>
            {/* 5a. Search bar */}
            <div className="flex items-center border border-primary-300  px-3 py-3 rounded-md bg-neutral-1 flex-1 sm:flex-none">
              <input
                value={query}
                // onChange={(e) => setQuery(e.target.value)}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="text-sm outline-none w-full sm:w-28 text-neutral-11 placeholder:text-neutral-6 bg-neutral-1"
              />
              <Search size={20} className="text-primary-500" />
            </div>

            {/* 5b. Sort by */}
            <div className="flex-1 sm:flex-none">
              <select
                value={sortBy}
                // onChange={(e) => setSortBy(e.target.value)}
                onChange={(e) => { 
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full sm:w-auto text-sm border px-3 py-3 border-primary-300 rounded-md bg-neutral-1 text-neutral-10 outline-none cursor-pointer"
              >
                <option>Sort By</option>
                <option>Intensity: Low to High</option>
                <option>Intensity: High to Low</option>
                <option>Name: A–Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* 6. Card grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div  />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-y-auto pt-2"
          style={{ gap: "24px" }}
        >
          {pageItems.map((cigar) => (
            <ProductCard
              key={cigar.id}
              {...cigar}
              selected={selectedItem?.id === cigar.id}
              onExplore={() => handleExplore(cigar)}
            />
          ))}
        </div>
        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex gap-0.5 items-center text-[15px] cursor-pointer hover:scale-105 text-black disabled:opacity-50 transition-all duration-300 font-bold mr-2"
              >
                <ChevronLeft size={25} className="text-primary-500" />
                Prev
              </button>

              <div className="flex items-center text-xs text-[var(--color-neutral-9)]">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-[40px] h-[32px] border border-neutral-6 text-[15px] text-neutral-10 cursor-pointer ${
                      currentPage === page
                        ? "bg-primary-500"
                        : "bg-white hover:bg-primary-50 bg-transparent"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex gap-0.5 items-center text-[15px] cursor-pointer hover:scale-105 text-black disabled:opacity-50 transition-all duration-300 font-bold ml-2"
              >
                Next
                <ChevronRight size={25} className="text-primary-500" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectiongridSection;
