'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { Product, ProductVariant } from "@/types/product";
import { useCartStore } from "@/store/cart.store";
import { useCartUIStore } from "@/store/cart-ui.store";

type Props = {
  product: Product;
  selectedVariant: ProductVariant | null;
  setSelectedVariant: (variant: ProductVariant) => void;
  onClose: () => void;
};

export default function ProductModal({ product, selectedVariant, setSelectedVariant, onClose }: Props) {
  const router = useRouter();
  const openCart = useCartUIStore((s) => s.openCart);


  const isNew = product.badge === "NEW";
  const showBadge = Boolean(product.badge);

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative bg-white/95 w-full max-w-220 max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-8 rounded-sm scrollbar-thin scrollbar-thumb-black/60 scrollbar-track-transparent">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-xl text-[#C59949] hover:text-black"
          >
            ✕
          </button>

          {/* LEFT — IMAGE */}
          <div className="relative flex items-center justify-center">
            {showBadge && (
              <span className="absolute top-0 right-0 -translate-x-1/2 bg-black text-neutral-1 text-[10px] tracking-widest px-3 py-1 uppercase">
                {product.badge}
              </span>
            )}

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

            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="flex flex-col justify-center text-center items-center">

            {/* Brand */}
            <p className="text-md tracking-widest text-gray-500 uppercase mb-1">
              {product.brand} - Cigar
            </p>

            {/* Title */}
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium tracking-widest uppercase mb-3">
              {product.title}
            </h2>

            {/* Specs */}
            <div className="flex flex-wrap justify-center md:justify-center gap-4 mb-4">
              {product.specs?.map((spec, i) => {
                const Icon =
                  LucideIcons[spec.iconName as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
                return (
                  <div key={i} className="flex items-center gap-1 text-md text-[#333333]">
                    {Icon && <Icon size={14} className="text-[#333333]" />}
                    <span>{spec.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Variants */}
            {product.variants && (
              <div className="flex flex-wrap gap-3 justify-center md:justify-center mb-6">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(variant)}
                    className={`border px-4 py-2 uppercase tracking-widest text-sm transition ${selectedVariant?.label === variant.label
                      ? "border-black bg-black text-neutral-1"
                      : "border-[#C59949] bg-[#C59949]/10 text-[#333]"
                      }`}
                  >
                    {variant.label} - €{variant.price.toFixed(2)}
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs uppercase text-gray-600">
              <span>Format: {product.format}</span>
              <span>Ring Gauge: {product.ringGauge}</span>
              <span>Length: {product.lengthIn} in / {product.lengthCm} cm</span>
              <span>Diameter: {product.diameterCm} cm</span>
              <span>Duration: {product.duration}</span>
              <span>Intensity: {product.intensity}/5</span>
              <span>Body: {product.body}/5</span>
            </div>

            {/* ACTIONS */}
            {isNew ? (
              <>
                <p className="text-md text-gray-500 mb-3 text-center md:text-left">
                  Enter your email to be notified when this item is back in stock
                </p>
                <div className="flex gap-2 justify-center md:justify-center mb-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border px-3 py-2 text-md rounded-sm"
                  />
                  <button className="bg-[#C59949] text-black rounded-sm px-4 text-md uppercase tracking-widest">
                    Notify me
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col md:flex-row gap-3 w-full">
                <button
                  onClick={() => {
                    onClose();
                    router.push(`/shop/all-products/${product.slug}`);
                  }}
                  className="flex-1 hover:bg-[#C59949]/40 bg-transparent border border-[#C59949] py-2 uppercase text-md tracking-widest  hover:text-[#333333] transition rounded-sm"
                >
                  View
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (selectedVariant) {
                      useCartStore.getState().addItem({ ...product, selectedVariant });
                      openCart();
                      onClose();
                    }
                  }}
                  className="flex-1 bg-[#C59949] text-black py-2 uppercase text-md tracking-widest hover:opacity-90 transition hover:bg-[#333333] hover:text-neutral-1 rounded-sm"
                >
                  Add to cart
                </button>
              </div>

            )}
          </div>
        </div>
      </div>
    </>
  );
}