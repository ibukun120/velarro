"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import datas, { findProductBySlug } from "@/lib/productFilterdata";

interface PackagingOption {
  id: string;
  label: string;
  sub: string;
  price: string;
  per?: string;
}

const packagingOptions: PackagingOption[] = [
  {
    id: "1",
    label: "Box of 20",
    sub: "Best value - save 15%",
    price: "₹320",
    per: "₹16.00 / cigar",
  },
  {
    id: "2",
    label: "Box of 10",
    sub: "Perfect for gifting",
    price: "₹175",
    per: "₹17.50 / cigar",
  },
  {
    id: "3",
    label: "Single Piece",
    sub: "Trial pack",
    price: "₹20",
  },
];

interface ProductInfoSectionProps {
  productId?: string;
}

export default function ProductInfoSection({ productId }: ProductInfoSectionProps) {
  // Find the product by slug
  const product = useMemo(() => {
    if (!productId) return null;
    return findProductBySlug(productId);
  }, [productId]);

  // Fallback to first product if none found
  const displayProduct = product || datas[0];

  // Create images array (use product image + fallback images)
  const images = [
    displayProduct.image,
    "/ProductDetails/image-1.jpeg",
    "/ProductDetails/image-2.jpeg",
    "/ProductDetails/image-3.jpeg",
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [selectedPack, setSelectedPack] = useState("1");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
const handleAddToCart = async () => {
  try {
    setLoading(true);

    console.log("Product added to cart");

    setTimeout(() => {
      router.push("/cart");
    }, 500);
  } catch (error) {
    console.error("Add to cart failed", error);
  } finally {
    setLoading(false);
  }
};

  const handleWishlist = () => {
    setIsWishlisted((prev) => !prev);

    console.log(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="bg-primary-50 mt-20 ">
      {/* LEFT + RIGHT */}
      <div className="grid lg:grid-cols-10 gap-[40px]">
        {/* ================= LEFT (70%) ================= */}
        <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-4">
          {/* ===== BREADCRUMB (MOBILE ONLY) ===== */}
          <div className="block lg:hidden font-medium text-xs sm:text-xs text-secondary-400 py-2 px-1">
            Home &gt; Products &gt; All Products &gt; All Cigars &gt;
            <span className="text-secondary-700"> {displayProduct.title}</span>
          </div>

          {/* ===== MAIN IMAGE ===== */}
          <div className="relative w-full rounded-lg  aspect-[818/660] bg-neutral-1 border-2 border-neutral-6  px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-1  overflow-hidden">
            <Image
              src={images[activeImage]}
              alt="Product"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 818px"
              quality={100}
              priority
            />

            {/* Badge */}
            <span className="absolute top-0 left-0 sm:top-0 sm:left-0 bg-info-900 text-neutral-1 text-[10px] sm:text-xs px-3 sm:px-6 py-1 sm:py-2">
              {displayProduct.badge}
            </span>
          </div>

          {/* Dots */}
          <div className="flex justify-center ">
            <div className="flex items-center gap-1 sm:gap-2 rounded-[16px] px-4 sm:px-3 py-2 bg-neutral-1 ">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`cursor-pointer rounded-full transition-all duration-300 
          ${
            i === activeImage
              ? "w-22 sm:w-24 lg:w-22 h-3.5 bg-[#B89B5E]"
              : "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-primary-100"
          }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3  gap-2 sm:gap-3">
            {images.slice(1).map((img, i) => {
              const index = i + 1;
              return (
                <div
                  key={`${img}-${i}`}
                  onClick={() => setActiveImage(index)}
                  className="relative w-full aspect-square rounded-lg cursor-pointer border-2 border-neutral-6 bg-neutral-1 overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 33vw, 250px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT (30%) ================= */}
        <div className="lg:col-span-3 flex flex-col gap-6 sm:gap-8 ">
          
            {/* Title */}
            <div className="flex flex-col gap-2 sm:gap-4">
              <h1 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[100%] font-serif capitalize">
                {displayProduct.title}
              </h1>

              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-600">
                {displayProduct.format} · {displayProduct.brand}
              </p>

              <div className="w-full sm:w-3/4 h-[1px] bg-primary-600 "></div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-4 text-center text-xs border border-neutral-6 rounded-md">
              {[
                ["Ring Gauge", displayProduct.ringGauge ? `⌀ ${displayProduct.ringGauge}` : "N/A"],
                ["Length", displayProduct.length],
                ["Diameter", displayProduct.diameterCm],
                ["Duration", displayProduct.duration],
              ].map(([label, value], i) => (
                <div key={i} className="border border-[#D6C7A1] py-2">
                  <p className="text-primary-600 text-[10px] sm:text-xs">
                    {label}
                  </p>
                  <p className="font-semibold text-[10px] sm:text-xs">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Intensity + Body */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { title: "INTENSITY", value: displayProduct.intensity },
                { title: "BODY", value: displayProduct.body },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-4  ">
                  <p className="text-[10px] sm:text-xs text-neutral-13">
                    {item.title}
                  </p>

                  <div className="flex gap-2 sm:gap-3 ">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${
                          i < item.value
                            ? "bg-primary-600"
                            : "border border-neutral-6"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] sm:text-xs text-neutral-13">
                TASTE NOTES
              </p>
              <p className="text-neutral-13 text-[10px] sm:text-xs italic">
                {displayProduct.flavors}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] sm:text-xs text-neutral-13">
                RECOMMENDED PAIRINGS
              </p>

              <div className="flex flex-wrap gap-2">
                {displayProduct.pairings.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] sm:text-xs text-neutral-13 bg-primary-100 border-[0.5px] border-neutral-6"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Blend */}
            <div className="border-l-2 bg-neutral-1 border-neutral-6 text-xs sm:text-sm px-3 py-2">
              <p className="font-medium text-neutral-13">BLEND & ORIGIN</p>
              <p className="text-neutral-13">
                {displayProduct.origin.wrapper} Wrapper | {displayProduct.origin.binder} Binder | {displayProduct.origin.filler} Filler
              </p>
              <p className="italic text-neutral-13">
                Hand-rolled in {displayProduct.origin.filler.includes("Nicaragua") ? "Nicaragua" : "Dominican Republic"}
              </p>
            </div>

            {/* Packaging */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium tracking-wide text-primary-600">
                SELECT PACKAGING
              </p>

              {packagingOptions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPack(item.id)}
                  className={`px-3 sm:px-4 py-3 border cursor-pointer transition rounded-lg ${
                    selectedPack === item.id
                      ? "border-neutral-6 bg-primary-50"
                      : "border-primary-100 bg-neutral-1"
                  }`}
                >
                  <div className="flex justify-between items-center rounded-lg">
                    {/* LEFT */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center justify-center">
                        <div
                          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border flex items-center justify-center ${
                            selectedPack === item.id
                              ? "border-neutral-6"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedPack === item.id && (
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-600" />
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs sm:text-sm font-medium text-secondary-400">
                          {item.label}
                        </p>
                        <p className="text-xs text-primary-600 font-semibold pt-1">
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="text-right">
                      <p className="text-lg font-semibold text-primary-800">
                        {item.price}
                      </p>

                      {item.per && (
                        <p className="text-xs text-primary-600 font-semibold pt-1">
                          {item.per}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ideal For */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] sm:text-xs text-neutral-13 py-1">
                IDEAL FOR
              </p>

              <div className="flex flex-wrap gap-3 ">
                {displayProduct.for.map((item) => (
                  <span key={item} className="text-[10px] rounded-sm sm:text-[11px] px-2 py-1 border-[0.5px] border-neutral-6 bg-primary-100 text-neutral-13">
                    {item.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 ">
              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                disabled={loading}
                className="w-[70%] border rounded-md  bg-primary-400 hover:bg-primary-600 text-neutral-1 py-3 text-sm tracking-wide disabled:opacity-50 transition-all duration-300"
              >
                {loading ? "ADDING..." : "ADD TO CART"}
              </button>

              {/* WISHLIST */}
              <button
                onClick={handleWishlist}
                className="w-[30%] flex items-center rounded-md justify-center gap-2 bg-neutral-1 text-secondary-400"
              >
                {/* Icon */}
                <span className="text-[14px] sm:text-base">
                  {isWishlisted ? "❤️" : "♡"}
                </span>

                {/* Text */}
                <span className="text-[11px] sm:text-sm tracking-wide">
                  WISHLIST
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}