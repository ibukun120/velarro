"use client";

import { Suspense } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import productFilterData, { ProductFilterItem } from "@/lib/productFilterdata";
import ProductCard from "@/components/ui/Cards/ProductCard";
import Link from "next/link";

interface CollectionProps {
  data?: ProductFilterItem[];
}

type CategoryItem = {
  id: number;
  name: string;
  image: string;
};

const accessoriesData: CategoryItem[] = [
  {
    id: 1,
    name: "All Categories",
    image: "/images/products/product-accessory1.png",
  },
  {
    id: 2,
    name: "Humidors",
    image: "/images/products/product-accessory1.png",
  },
  {
    id: 3,
    name: "Ashtrays",
    image: "/images/products/product-accessory3.png",
  },
  {
    id: 4,
    name: "Cutters",
    image: "/images/products/product-accessory4.png",
  },
  {
    id: 5,
    name: "Pipes",
    image: "/images/products/product-accessory5.png",
  },
  {
    id: 6,
    name: "Cigar cases",
    image: "/images/products/product-accessory6.png",
  },
  {
    id: 7,
    name: "Lighters",
    image: "/images/products/product-accessory7.png",
  },
];

const cigarsData: CategoryItem[] = [
  {
    id: 1,
    name: "All Series",
    image: "/images/products/cigar1.png",
  },
  {
    id: 2,
    name: "Heritage Line",
    image: "/images/products/cigar2.png",
  },
  {
    id: 3,
    name: "Dark Series",
    image: "/images/products/cigar3.png",
  },
  {
    id: 4,
    name: "Celebration Series",
    image: "/images/products/cigar4.png",
  },
  {
    id: 5,
    name: "Prestige Series",
    image: "/images/products/cigar5.png",
  },
  {
    id: 6,
    name: "House Collection",
    image: "/images/products/cigar6.png",
  },
  {
    id: 7,
    name: "After Dark",
    image: "/images/products/cigar1.png",
  },
  {
    id: 8,
    name: "Collector",
    image: "/images/products/cigar1.png",
  },
  {
    id: 9,
    name: "Celebration Gold",
    image: "/images/products/cigar1.png",
  },
  {
    id: 10,
    name: "Terrior Series",
    image: "/images/products/cigar1.png",
  },
  {
    id: 11,
    name: "PLATINUM",
    image: "/images/products/cigar1.png",
  },
];

function CollectionContent({ data = productFilterData }: CollectionProps) {
  const searchParams = useSearchParams();

  const initialTab =
    searchParams?.get("tab") === "accessories" ? "accessories" : "cigars";

  const [activeTab, setActiveTab] = useState<"accessories" | "cigars">(
    initialTab,
  );

  const [activeAccessory, setActiveAccessory] = useState(1);

  const seriesImageMap = useMemo(
    () =>
      new Map(cigarsData.map((item) => [item.name.toLowerCase(), item.image])),
    [],
  );

  const filteredSeriesItems = useMemo(() => {
    const seriesSet = new Set<string>();

    data.forEach((product) => {
      if (product.series) {
        seriesSet.add(product.series);
      }
    });

    const seriesArray = Array.from(seriesSet).sort();

    return [
      { id: 1, name: "All Series", image: "/images/products/cigar1.png" },
      ...seriesArray.map((seriesName, index) => ({
        id: index + 2,
        name: seriesName,
        image:
          seriesImageMap.get(seriesName.toLowerCase()) ??
          "/images/products/cigar1.png", 
      })),
    ];
  }, [data, seriesImageMap]);

  const initialCigar = (() => {
    const series = searchParams?.get("series");

    if (!series) return 1;

    const foundCigar = filteredSeriesItems.find(
      (item) => item.name.toLowerCase() === series.toLowerCase(),
    );

    return foundCigar?.id || 1;
  })();

  const [activeCigar, setActiveCigar] = useState(initialCigar);
  const [currentPage, setCurrentPage] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const PAGE_SIZE = 6;

  const scrollRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const currentData =
    activeTab === "accessories" ? accessoriesData : filteredSeriesItems;

  const getSeriesKey = (name: string) => {
    if (name === "All Series") return null;
    if (name.endsWith(" Series")) return name.replace(" Series", "");
    return name;
  };

  const selectedCigar = filteredSeriesItems.find(
    (item) => item.id === activeCigar,
  );
  const selectedCigarSeries = selectedCigar
    ? getSeriesKey(selectedCigar.name)
    : null;

  const cigarsToShow =
    activeTab === "cigars"
      ? selectedCigarSeries === null
        ? data
        : data.filter((product) => {
            if (!product.series) return false;

            const productSeriesKey = product.series.endsWith(" Series")
              ? product.series.replace(/ Series$/i, "")
              : product.series;

            return (
              productSeriesKey.toLowerCase() ===
              selectedCigarSeries.toLowerCase()
            );
          })
      : [];

  const totalPages = Math.max(1, Math.ceil(cigarsToShow.length / PAGE_SIZE));
  const paginatedCigars = cigarsToShow.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  // Reset to page 1 whenever the filter or tab changes

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 350;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollButtons();

    const handleResize = () => updateScrollButtons();
    const scrollEl = scrollRef.current;

    if (scrollEl) {
      scrollEl.addEventListener("scroll", updateScrollButtons);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", updateScrollButtons);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [currentData]);

  useEffect(() => {
    const selectedSeriesIds = new Set(
      filteredSeriesItems.map((item) => item.id),
    );

    if (!selectedSeriesIds.has(activeCigar)) {
       queueMicrotask(() => {
      setActiveCigar(1);
      setCurrentPage(1);
    });
  }
  }, [filteredSeriesItems, activeCigar]);

  return (
    <section className="w-full bg-white py-4 sticky h-[100vh] top-0 overflow-y-auto hide-scrollbar">
      <div className="px-4">
        {/* btns options */}
        <div className="flex flex-row sm:items-center sm:justify-start gap-4 mb-2 text-xs">
          <Link href="/" className=" px-4 pb-1 border-r border-r-neutral-6">Home</Link >

          
          <button className=" border-b border-b-neutral-6 px-2 pb-1 text-neutral-13">Cigars</button>
        </div>

        {/* Tabs */}
        <div
          id="profile"
          className="mb-2 flex items-center justify-center gap-4"
        >
          <button
            onClick={() => setActiveTab("cigars")}
            className={clsx(
              "py-1 px-10 text-[14px] font-semibold cursor-pointer uppercase",
              activeTab === "cigars"
                ? "border-b-2 border-b-neutral-6 text-neutral-13"
                : " text-neutral-13",
            )}
          >
            Cigars
          </button>

          <button
            onClick={() => setActiveTab("accessories")}
            className={clsx(
              "py-1 px-10 text-[14px] font-semibold  cursor-pointer uppercase",
              activeTab === "accessories"
                ? "border-b-2 border-b-neutral-6 text-neutral-13"
                : " text-neutral-13",
            )}
          >
            Accessories
          </button>
        </div>

        {/* Slider Section */}
        <div className="relative hide-scrollbar">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-10px] top-[70px] z-20 hidden h-10 w-10 items-center justify-center lg:flex hover:bg-neutral-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="text-[#C8A25A]" />
            </button>
          )}

          {/* Scroll Area */}
          <div
            ref={scrollRef}
            className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2 px-8 min-h-[200px] items-center"
          >
            {currentData.map((item) => {
              const isActive =
                activeTab === "accessories"
                  ? activeAccessory === item.id
                  : activeCigar === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(1);

                    if (activeTab === "accessories") {
                      setActiveAccessory(item.id);
                    } else {
                      setActiveCigar(item.id);
                    }
                  }}
                  className={`min-w-[150px] cursor-pointer transition-transform duration-300 ${isActive ? "scale-105" : "scale-100"}`}
                >
                  {/* Image Card */}
                  <div
                    className={clsx(
                      "relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden bg-transparent transition-all duration-300",
                      isActive &&
                        "scale-110 border-2 border-neutral-6 rounded-lg",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className={clsx(
                        "object-cover transition-all duration-300 border border-neutral-6 rounded-lg",
                        isActive && " scale-110 ",
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={clsx(
                      "mt-4 text-center text-[12px] font-semibold w-[130px] uppercase transition-all duration-300  text-neutral-13",
                    )}
                  >
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-[-10px] top-[70px] z-20 hidden h-10 w-10 items-center justify-center lg:flex hover:bg-neutral-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="text-[#C8A25A]" />
            </button>
          )}
        </div>

        {activeTab === "cigars" ? (
          <div className="mt-10 hide-scrollbar">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-[24px] font-semibold text-[#222222]">
                  {/* {selectedCigarSeries === null
                    ? "All Cigars"
                    : `${selectedCigarSeries} Series`} */}
                </h2>
                <p className="text-sm text-[#6D6D6D]">
                  {/* {cigarsToShow.length} product
                  {cigarsToShow.length === 1 ? "" : "s"} available */}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2">
              {paginatedCigars.map((product) => {
                const { id, ...productProps } = product;
                return <ProductCard key={id} {...productProps} />;
              })}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
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
        ) : (
          <div className="flex min-h-[500px] flex-col items-center justify-center">
            <Image
              src="/images/products/coming-soon.png"
              alt="coming soon"
              width={550}
              height={250}
              className="object-cover"
            />

            <p className="text-center text-[28px] text-[#6D6D6D]">
              Something rare is on it&apos;s way
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Collection({
  data = productFilterData,
}: CollectionProps) {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[100vh] bg-primary-50"></div>
      }
    >
      <CollectionContent data={data} />
    </Suspense>
  );
}
