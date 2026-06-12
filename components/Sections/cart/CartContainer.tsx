"use client";

// import React from "react";
import CartItem from "./CartItem";
import { CartItemType } from "@/types/cart";
import { useRouter } from "next/navigation";
import AuthSubmitButton from "@/components/ui/Buttons/AuthSubmitButton";

interface CartContainerProps {
  items: CartItemType[];
  totalItems: number;
  subtotal: number;
  onSelect: (id: string) => void;
  onQuantityChange: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
  onSave: (id: string) => void;
  onShare: (id: string) => void;
  onDeselectAll: () => void;
}

export default function CartContainer({
  items,
  totalItems,
  subtotal,
  onSelect,
  onQuantityChange,
  onDelete,
  onSave,
  onShare,
  // onDeselectAll,
}: CartContainerProps) {
  const router = useRouter();

  return (
    <>
      <h1 className="text-[40px] max-lg:text-[28px] text-secondary-900 mb-6 max-lg:mb-4">
        Shopping Cart
      </h1>
      <div className="bg-neutral-1 rounded-md shadow-sm overflow-hidden sm:px-4 px-2">
        {/* <h1 className="text-[40px] max-lg:text-[28px] text-secondary-900 mb-6 max-lg:mb-4">
          Shopping Cart
        </h1> */}
        <div className="py-3 px-0 sm:p-4">
          <div className="hidden md:flex justify-between border-b border-secondary-100 mb-2 py-4 text-[22px] leading-6.5 tracking-tight font-medium text-neutral-13">
            <div className="flex-1 lg:w-107.5 lg:flex-none pl-2">Items</div>
            {/* <div className="w-45 hidden lg:block">Quantity</div> */}
            <div className="w-57.5 text-right pr-6">Price</div>
          </div>

          <div className="flex flex-col gap-2 ">
            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onSelect={onSelect}
                onQuantityChange={onQuantityChange}
                onDelete={onDelete}
                onSave={onSave}
                onShare={onShare}
              />
            ))}
          </div>

          <div className="py-6 max-lg:py-4 text-right max-lg:text-center mt-4">
            <span className="lg:text-2xl text-lg text-secondary-900 max-lg:block">
              Subtotal({totalItems} Items) = ₹ {subtotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      {/*
      <div className="flex max-lg:flex-col gap-4 mt-6 px-3">
        <button
          onClick={onDeselectAll}
          className="flex-1 bg-primary-300 text-xl leading-6.5 tracking-tight text-neutral-1 py-2 rounded-md transition-colors"
        >
          Deselect all
        </button>
        <button
          onClick={() => router.push("/product")}
          className="flex-1 bg-error-600 text-xl leading-6.5 tracking-tight hover:bg-error-500 text-neutral-1 py-2 rounded-md transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => router.push("/checkout")}
          className="flex-1 bg-success-600 text-xl leading-6.5 tracking-tight hover:bg-success-500 text-neutral-1 py-2 rounded-md transition-colors"
        >
          Proceed to Buy
        </button>
      </div> */}
      <div className="flex max-lg:flex-col gap-4 mt-6 px-3 sm:px-1">
        

        <AuthSubmitButton
        // {() => router.push("/checkout")}
          onClick={() => router.push("/payment")}
          text="PROCEED TO BUY"
          size="md"
          fullWidth
          className="flex-1 bg-primary-500 text-md leading-6.5 rounded-md tracking-tight hover:bg-primary-600 text-neutral-1 py-2 transition-colors w-full! cursor-pointer duration-300"
        />
      </div>
    </>
  );
}