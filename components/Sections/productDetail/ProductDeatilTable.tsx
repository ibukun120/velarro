"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import datas, { findProductBySlug } from "@/lib/productFilterdata";

interface ProductDetailsTableProps {
  productId?: string;
}

export default function ProductDetailsTable({ productId }: ProductDetailsTableProps) {
  // Find the product by slug
  const product = useMemo(() => {
    if (!productId) return null;
    return findProductBySlug(productId);
  }, [productId]);

  // Fallback to first product if none found
  const displayProduct = product || datas[0];

  // Build dynamic product details from the selected product
  const productDetails = [
    { label: "FORMAT", value: displayProduct.format, icon: "/icons/columns.svg" },
    { label: "RING GAUGE", value: displayProduct.ringGauge ? `${displayProduct.ringGauge}` : "N/A", icon: "/icons/life-buoy.svg" },
    { label: "LENGTH", value: `${displayProduct.length} / ${displayProduct.lengthCm}`, icon: "/icons/git-commit.svg" },
    { label: "DIAMETER", value: displayProduct.diameterCm, icon: "/icons/crosshair.svg" },
    { label: "WRAPPER", value: displayProduct.origin.wrapper, icon: "/icons/map.svg" },
    { label: "BINDER", value: displayProduct.origin.binder, icon: "/icons/filter.svg" },
    {
      label: "FILLER",
      value: displayProduct.origin.filler,
      icon: "/icons/database.svg",
    },
    { label: "ORIGIN", value: "Nicaragua", icon: "/icons/globe.svg" },
    { label: "ENJOYMENT TIME", value: displayProduct.duration, icon: "/icons/clock.svg" },
    {
      label: "PACKAGING",
      value: displayProduct.packaging.join(", "),
      icon: "/icons/codepen.svg",
    },
  ];

  const [activeTab, setActiveTab] = useState<"details" | "story">("details");

  return (
    <div className="bg-primary-50 w-full">
      <div className="flex flex-col gap-4 my-8">
        {/* ================= TABS ================= */}
        <div className="flex gap-6 border-y border-primary-100 px-4 pt-2 overflow-x-auto ">
          <button
            onClick={() => setActiveTab("details")}
            className={`text-xs sm:text-sm pb-2 whitespace-nowrap transition ${
              activeTab === "details"
                ? "text-primary-600 border-b-2 border-neutral-6"
                : "text-secondary-400"
            }`}
          >
            PRODUCT DETAILS
          </button>

          <button
            onClick={() => setActiveTab("story")}
            className={`text-xs sm:text-sm pb-2 whitespace-nowrap transition ${
              activeTab === "story"
                ? "text-primary-600 border-b-2 border-neutral-6"
                : "text-secondary-400"
            }`}
          >
            THE STORY
          </button>
        </div>

        {/* ================= CONTENT ================= */}

        {activeTab === "details" ? (
          <div className="border-y border-neutral-6 w-full lg:w-[60%]">
            {productDetails.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[30%_50%] grid-cols-2 border-b border-neutral-6 last:border-b-0"
              >
                {/* LEFT SIDE (ICON + LABEL) */}
                <div className="px-3 sm:px-4 py-2  flex items-center gap-2 text-sm text-primary-700 font-medium tracking-wide">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={18}
                    height={18}
                    className="object-contain"
                  />

                  <span>{item.label}</span>
                </div>

                {/* RIGHT SIDE (VALUE) */}
                <div className="px-3 sm:px-4 py-2 text-xs text-secondary-500 break-words">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-neutral-6 rounded-lg w-full lg:w-[75%] p-5 sm:p-6 text-[12px] font-normal text-neutral-13 leading-lg flex flex-col gap-4">
            <p className="font-bold text-[12px]">
              The Platinum Celebration - A Cigar Born for the Extraordinary
            </p>

            <p>
              The Platinum Celebration was created for moments that deserve to
              be savored, not rushed. Crafted in the volcanic valleys of <span className="font-bold">Estelí, Nicaragua,</span>  it reflects time, patience, and purpose.
            </p>

            <p>
              A <span className="font-bold">Habano 2000</span> wrapper from Jalapa brings a smooth, even burn,
              layered over a <span className="font-bold">Criollo 98 binder</span> and a carefully aged filler of <span className="font-bold">Piloto Cubano</span> and <span className="font-bold">Ometepe</span> tobaccos. Together, they deliver a
              refined profile that evolves as you smoke.
            </p>

            <p>
              It opens with soft <span className="font-bold">vanilla,</span> moves into <span className="font-bold">brioche and roasted coffee,</span> and finishes with a touch of <span className="font-bold">honey</span> and a long, creamy aftertaste.
              With over <span className="font-bold">100 minutes of burn time,</span> it rewards those willing to
              slow down.
            </p>

            <p>
              The Gran Churchill format is intentional. It is built for
              presence, not speed. Paired with Champagne, whiskey, or quiet, it
              does not compete with the moment. It completes it.
            </p>

            <p>
              Each cigar is <span className="font-bold">hand-rolled</span> by a select few artisans, inspected, and
              finished with care. It is not made quickly. It is made right.
            </p>
          </div>
        )}

        <div className="border-b border-neutral-6 px-4 py-2"></div>
      </div>
    </div>
  );
}