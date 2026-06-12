'use client';

import { useState } from "react";
import { Product, ProductVariant } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

type Props = {
  product: Product;
  onClick?: () => void;
};

export default function ProductCard({ product, onClick }: Props) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants?.[0] ?? null
  );

  return (
    <div
      onClick={onClick}
      className="group text-center transition cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-white p-4 shadow-sm border border-gray-200 transition-shadow">

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 right-3 z-10 
              ${product.badge === "BESTSELLER" ? "bg-black" : "bg-[#C59949]"}
              text-neutral-1 text-[13px] tracking-wide
              inline-flex items-center justify-center
              px-2 py-1`}
          >
            {product.badge}
          </span>
        )}

        {/* Rating Badge */}
        {product.ratingBadge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <div className="w-14 h-14 rounded-full bg-white border border-[#C59949] flex flex-col items-center justify-center text-center shadow-sm font-normal p-1 text-[15px]">
              <span className="text-lg font-semibold leading-none">
                {product.ratingBadge.score}
              </span>
              <span className="text-[10px] uppercase text-gray-500 leading-tight">
                {product.ratingBadge.label}
              </span>
            </div>
          </div>
        )}

        {/* Image */}
         <div className="relative mb-4 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={280}
            height={280}
            className="mx-auto transition-transform duration-300 group-hover:scale-105"
          />
         </div>

        {/* Brand & Title */}
        <p className="text-xl text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-2xl font-medium uppercase leading-snug tracking-wider">
          {product.title}
        </h3>

        {/* Specs */}
        <div className="flex items-center justify-center gap-4 mt-2">
          {product.specs?.map((spec, i) => {
            const Icon = LucideIcons[spec.iconName as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
            return (
              <div key={i} className="flex items-center gap-1 text-xs">
                {Icon && <Icon size={15} className="text-[#333333]" />}
                <span>{spec.label}</span>
              </div>
            );
          })}
        </div>

        {/* Variant Selection */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex justify-center gap-2 mt-2 flex-wrap">
            {product.variants.map((variant, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariant(variant);
                }}
                className={`px-3 py-1 text-xs border rounded uppercase tracking-widest ${
                  selectedVariant?.label === variant.label
                    ? "bg-black text-neutral-1 border-black"
                    : "bg-[#C59949]/10 text-[#333] border-[#C59949]"
                }`}
              >
                {variant.label} - ${variant.price.toFixed(2)}
              </button>
            ))}
          </div>
        )}

        {/* Intensity / Format */}
        <p className="text-md mt-1 text-[#333333]">
          Intensity {product.intensity} | Format {product.format}
        </p>

        {/* CTA */}
        {product.ctaLabel && product.ctaHref && (
          <Link
            href={product.ctaHref}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick?.();
            }}
            className="mt-4 block w-full bg-[#C59949] text-neutral-1 rounded-sm text-sm font-medium uppercase tracking-widest py-3 transition-all duration-300 hover:bg-[#191919] hover:text-neutral-1"
          >
            {product.ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
}