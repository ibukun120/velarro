"use client";

import { useCheckout } from "@/app/lib/checkout-context";
import Link from "next/link";
import { useState } from "react";

export default function SuccessPage() {
  const { shippingAddress } = useCheckout();

  // Generate order number ONCE (safe)
  const [orderNumber] = useState(
    () => `VL-${Math.floor(10000 + Math.random() * 90000)}`
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f5f0e8] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl border border-[#e8e0d0] w-full max-w-md shadow-lg p-8 text-center">
        
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#22c55e"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-[#2d2416] mb-1">
          Order Placed Successfully!
        </h1>

        {/* Order Number */}
        <p className="text-[#c9a84c] font-bold text-base mb-1">
          Order #{orderNumber}
        </p>

        {/* Delivery */}
        <p className="text-sm text-[#9a8a6a] mb-6">
          Estimated Delivery: March 21–25
        </p>

        {/* Shipping Info */}
        <div className="bg-[#fdf9f0] rounded-xl p-4 text-left mb-6">
          <p className="text-xs font-bold text-[#9a8a6a] uppercase tracking-widest mb-2">
            Shipping To
          </p>

          <div className="flex items-start gap-2">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#c9a84c"
              strokeWidth="2"
              className="mt-0.5 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <div>
              <p className="text-sm font-semibold text-[#2d2416]">
                {shippingAddress?.fullName ?? "John Smith"}
              </p>

              <p className="text-xs text-[#9a8a6a] mt-0.5">
                {shippingAddress?.city && shippingAddress?.country
                  ? `${shippingAddress.city}, ${shippingAddress.country}`
                  : "Texas, United States"}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <button className="w-full py-3 bg-[#c9a84c] text-neutral-1 rounded-xl font-bold text-sm hover:bg-[#b8973b] transition-colors mb-3 flex items-center justify-center gap-2">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          Track Order
        </button>

        <Link
          href="/"
          className="w-full block py-3 border border-[#e8e0d0] text-[#c9a84c] rounded-xl font-semibold text-sm hover:border-[#c9a84c] transition-colors"
        >
          Continue Shopping
        </Link>

        {/* Footer Note */}
        <p className="text-xs text-[#9a8a6a] mt-5">
          A confirmation email has been sent to your registered address.
        </p>
      </div>
    </div>
  );
}