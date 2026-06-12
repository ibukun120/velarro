// import React from "react";
import Image from "next/image";
import { CartItemType } from "@/types/cart";
// import { FaRupeeSign } from "react-icons/fa";

interface BuyAgainCardProps {
  buyAgainItems: CartItemType[];
  onMoveToCart: (id: string) => void;
}

export default function BuyAgainCard({
  buyAgainItems,
  onMoveToCart,
}: BuyAgainCardProps) {
  return (
    <div className="mt-3 p-4 border border-secondary-400 rounded-xs">
      {buyAgainItems.map((item, index) => (
        <div
          key={item.id}
          className={`flex items-center max-lg:items-start justify-between max-lg:flex-col px-2 max-lg:px-0 py-2 max-lg:py-4 max-lg:gap-4 ${buyAgainItems.length-1 !== index ? "border-b border-secondary-400": ""}`}
        >
          <div className="flex items-center gap-6 max-lg:gap-3">
            <div className="relative w-21.25 h-21.25 bg-[#f0f0f0] rounded-xl shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={85}
                  height={85}
                  className="w-full h-full object-cover rounded-xl mix-blend-multiply"
                />
              ) : (
                <svg
                  className="w-8 h-8 text-neutral-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-sm leading-5 font-bold text-neutral-12">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-12 leading-4 font-extralight"> 
                Qty: {item.quantity} • Size: {item.size || "-"}
              </p>
              {item.inStock ? (
                <p className="text-xs text-success-600">
                  Instock
                </p>
              ) : (
                <p className="text-xs text-neutral-10 cursor-not-allowed">
                  Out of stock
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col max-lg:flex-row items-end max-lg:items-center max-lg:justify-between max-lg:w-full justify-center gap-3">
            <div
              className={`text-2xl leading-7.5 tracking-tighter ${
                item.inStock ? "text-neutral-12" : "text-neutral-6"
              }`}
            >
              ₹{item.price.toFixed(2)}
              
            </div>
            <button
              onClick={() => onMoveToCart(item.id)}
              disabled={!item.inStock}
              className={`p-1 border text-xs leading-4.25 rounded ${
                item.inStock
                  ? "border-neutral-6 text-neutral-13 hover:bg-neutral-3 px-2"
                  : "border-secondary-200 text-neutral-10 bg-neutral-1 cursor-not-allowed px-2"
              }`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}

      {buyAgainItems.length === 0 && (
        <div className="p-4 text-secondary-400 text-lg border rounded-lg mt-4">
          No item
        </div>
      )}
    </div>
  );
}
