"use client";

import Image from "next/image";
import { useCheckout } from "@/app/lib/checkout-context";
import { cartItems, shipping, subtotal, tax, total } from "@/app/lib/data";

export default function OrderSummary({
  showPromo = false,
}: {
  showPromo?: boolean;
}) {
  const { promoCode, setPromoCode, promoApplied, setPromoApplied } =
    useCheckout();

  return (
    <div className="flex flex-col gap-4">
      {/* Order Card */}
      <div className="bg-white rounded-2xl border border-primary-300">
        <div className="flex items-center gap-2 p-6 border-b border-neutral-5">
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#C9A84C"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="font-semibold text-[#2D2416] text-md tracking-wide">
            Order Summary
          </h3>
        </div>

        <div className="flex flex-col gap-4 p-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#F0EBE0]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-neutral-8 leading-tight">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-8 mt-0.5">
                  Qty: {item.qty}
                  {item.size ? ` • Size ${item.size}` : ""}
                </p>
              </div>
              <span className="text-sm font-semibold text-neutral-8">
                ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="p-6 flex flex-col gap-1.5">
          <div className="flex justify-between text-sm text-neutral-8">
            <span>Subtotal ({cartItems.length} items)</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-8">
            <span>Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-8">
            <span>Estimated Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-base text-[#2D2416] mt-2 pt-2 border-t border-neutral-5">
            <span>Total</span>
            <span className="text-primary-500 text-2xl">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-4 bg-primary-50 rounded-b-xl p-6 flex flex-col justify-center">
          <p className="text-xs font-bold text-primary-500 uppercase tracking-wider">
            Estimated Delivery
          </p>
          <p className="text-sm font-bold text-neutral-8 mt-1">
            March 21 - March 25, 2026
          </p>
        </div>

      </div>

      {/* Promo Code */}
      {showPromo && (
        <div className="bg-white rounded-md border border-[#E8E0D0] p-5">
          <p className="text-xs font-bold text-[#2D2416] uppercase tracking-wider mb-3">
            Have a promo code?
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 border border-[#E8E0D0] rounded-lg px-3 py-2 text-sm bg-[#FDF9F0] focus:outline-none focus:border-[#C9A84C] text-[#2D2416] placeholder-[#C4B896]"
            />
            <button
              onClick={() => setPromoApplied(true)}
              className="bg-[#C9A84C] text-neutral-1 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#B8973B] transition-colors"
            >
              Apply
            </button>
          </div>
          {promoApplied && (
            <p className="text-xs text-green-600 mt-2">✓ Promo code applied!</p>
          )}
        </div>

      )}
    </div>
  );
}