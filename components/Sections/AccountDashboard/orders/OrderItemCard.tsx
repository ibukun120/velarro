"use client";

import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import clsx from "clsx";

type OrderItemCardProps = {
  title?: string;
  wrapper?: string;
  binder?: string;
  filler?: string;
  quantity?: number;
  price?: string;
  oldPrice?: string;
  image?: string;
  discounted?: boolean;
};

export default function OrderItemCard({
  title = "Velarro Limited Compendium",
  wrapper = "Corojo 99 Maduro",
  binder = "Criollo 98",
  filler = "Criollo + Piloto Cubano",
  quantity = 1,
  price = "₹20.00",
  oldPrice = "₹30.00",
  image = "/userDashboard/order.png",
  discounted = true,
}: OrderItemCardProps) {
  return (
    <div className="bg-neutral-1 border border-neutral-6 rounded-md px-4 sm:px-5 py-5">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

        {/* 🔹 LEFT */}
        <div className="flex items-start gap-4 min-w-0 flex-1">

          {/* IMAGE */}
          <div className="relative w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-2xl overflow-hidden shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-1 min-w-0 flex-1">

            {/* TITLE */}
            <Text
              className="
                text-base sm:text-lg
                font-medium
                text-neutral-9
                leading-[130%]
                line-clamp-2
              "
            >
              {title}
            </Text>

            {/* DETAILS */}
            <div className="space-y-0.5">
              
              <Text
                variant="sm"
                className="text-neutral-7 leading-[150%] break-words"
              >
                Wrapper: {wrapper}
              </Text>

              <Text
                variant="sm"
                className="text-neutral-7 leading-[150%] break-words"
              >
                Binder: {binder}
              </Text>

              <Text
                variant="sm"
                className="text-neutral-7 leading-[150%] break-words"
              >
                Filler: {filler}
              </Text>
            </div>
          </div>
        </div>

        {/* 🔹 RIGHT */}
        <div
          className="
            flex items-center justify-between
            sm:justify-end
            gap-6 sm:gap-10
            pl-[88px] sm:pl-0
          "
        >
          
          {/* QUANTITY */}
          <div className="flex flex-col items-start sm:items-center">
            
            <Text
              variant="sm"
              className="text-neutral-6 mb-1 sm:hidden"
            >
              Qty
            </Text>

            <Text className="text-lg sm:text-xl text-neutral-9 font-medium">
              {quantity}
            </Text>
          </div>

          {/* PRICE */}
          <div className="flex flex-col items-end">

            <Text
              variant="sm"
              className="text-neutral-6 mb-1 sm:hidden"
            >
              Price
            </Text>

            <div className="flex items-center gap-2 flex-wrap justify-end">

              {/* OLD PRICE */}
              {discounted && (
                <Text className="text-lg sm:text-2xl text-neutral-6 line-through">
                  {oldPrice}
                </Text>
              )}

              {/* FINAL PRICE */}
              <Text
                className={clsx(
                  "text-xl sm:text-2xl font-medium",
                  discounted
                    ? "text-success-600"
                    : "text-neutral-9"
                )}
              >
                {price}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}