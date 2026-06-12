"use client";

import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/navigation"; 
import { Order } from "./order.types";


const statusStyles = {
  Delivered: "text-success-900 bg-success-50",
  Inprogress: "text-warning-500 bg-warning-100",
  Cancelled: "text-error-600 bg-error-100",
};

export default function OrderCard({
  status,
  date,
  orderId,
  productName,
  price,
  image,
}: Order) {
  
  const router = useRouter(); 

  return (
    <div
      onClick={() =>
    router.push(
      `/orders/${status.toLowerCase()}/${orderId}`
    )
  }
      className="w-full bg-neutral-1 rounded-2xl border border-neutral-6 shadow-sm p-3 sm:p-4 hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-col gap-3">

        {/* Status + Date */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={clsx(
              "text-[10px] sm:text-xs px-2 py-1 rounded-sm font-medium flex items-center gap-1 shrink-0",
              statusStyles[status]
            )}
          >
            <span className="w-2 h-2 rounded-full bg-current"></span>
            {status}
          </span>

          <Text className="text-[10px] sm:text-xs text-neutral-8 truncate">
            | {date}
          </Text>
        </div>

        {/* Content */}
        <div className="flex items-center justify-between gap-2">
          
          {/* LEFT */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-lg overflow-hidden shrink-0">
              <Image
                src={image}
                alt="product"
                fill
                className="object-cover pointer-events-none" // ✅ IMPORTANT
              />
            </div>

            <div className="space-y-1 min-w-0">
              
              <Text className="text-xs sm:text-sm text-neutral-8 truncate">
                Order ID: {orderId}
              </Text>

              <Text className="text-xs sm:text-sm text-neutral-8 truncate">
                {productName}
              </Text>

              <Text className="text-xs sm:text-sm font-semibold text-neutral-9">
                {price}
              </Text>
            </div>
          </div>

          {/* RIGHT ICON */}
          <ChevronRight className="text-gray-400 shrink-0 pointer-events-none" /> {/* ✅ */}
        </div>
      </div>
    </div>
  );
}