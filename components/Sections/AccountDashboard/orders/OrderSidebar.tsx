"use client";

import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";

export default function OrderSidebar() {
  return (
    <div className="space-y-4">

      {/* 🔸 VIEW INVOICE */}
      <button className="w-full bg-primary-100 border border-neutral-6 rounded-md px-4 py-3 flex items-center justify-center gap-2 hover:bg-primary-200 transition">
        
        {/* Icon Image */}
        <Image
          src="/icons/link.svg"
          alt="invoice"
          width={16}
          height={16}
        />

        <Text className="text-sm font-medium text-neutral-900">
          View Invoice
        </Text>
      </button>

      {/* 🔸 PAYMENT METHOD */}
      <div className="bg-primary-100 border border-neutral-6 rounded-md px-4 py-3">
        
        <Text className="text-sm font-medium text-center text-neutral-900">
          Payment Method
        </Text>

        <div className="my-3 border-t border-neutral-6" />

        <Text className="text-sm text-center text-neutral-800">
          Visa ending -1234
        </Text>
      </div>

      {/* 🔸 SHIPPING CARD */}
      <div className="bg-neutral-1 border border-primary-300 shadow-sm rounded-2xl p-4">
        
        <Text className="font-semibold text-neutral-900 mb-3">
          Shipped
        </Text>

        <div className="space-y-1">
          <Text variant="sm" className="text-neutral-900">
            Alex
          </Text>

          <Text variant="sm" className="text-neutral-8 leading-relaxed">
            123 Maple St, Springfield, IL 62704
          </Text>

          <Text variant="sm" className="text-neutral-900">
            7985630123
          </Text>
        </div>
      </div>
    </div>
  );
}