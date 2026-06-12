"use client";

import { Text } from "@/components/ui/Typography/Typography";
import Image from "next/image";
import clsx from "clsx";

type OrderSummaryProps = {
  total?: string;
  subtotal?: string;
  shipping?: string;
  discount?: string;
  tax?: string;
  taxableValue?: string;
  itemsCount?: number;
variant?: "delivered" | "inprogress" | "cancelled";
};

export default function OrderSummary({
  total = "₹30.00",
  subtotal = "₹30.00",
  shipping = "₹5.00",
  discount = "-₹5.00",
  tax = "₹1.5",
  taxableValue = "₹28.5",
  itemsCount = 1,
  variant = "delivered",
}: OrderSummaryProps) {
  return (
    <div className="bg-neutral-1 border border-neutral-6 rounded-2xl overflow-visible shadow-sm">

      {/* HEADER */}
      <div className="px-5 py-4 border-b border-neutral-6 flex items-center gap-2">

        <Image
          src="/icons/orderSummary.svg"
          alt="summary"
          width={18}
          height={18}
        />

        <h3 className="font-semibold text-neutral-9 text-lg">
          Order Summary
        </h3>
      </div>

      {/* BODY */}
      <div className="p-5 space-y-4">

        {/* ROWS */}
        <div className="space-y-3">

          {/* SUBTOTAL */}
          <Row
            label={
              variant === "inprogress"
                ? `Item(s) Subtotal (${itemsCount})`
                : `Gross Amount (${itemsCount} items)`
            }
            value={subtotal}
          />

          {/* SHIPPING */}
          <Row
            label={
              variant === "inprogress"
                ? "Shipping & Handling"
                : "Shipping"
            }
            value={shipping}
          />

          {/* DISCOUNT */}
          <Row
            label={
              variant === "inprogress"
                ? "Total before tax:"
                : "Discount"
            }
            value={discount}
            green
          />

          {/* TAXABLE VALUE */}
          <Row
            label={
              variant === "inprogress"
                ? "Estimated tax to be collected"
                : "Taxable Value"
            }
            value={taxableValue}
          />

          {/* TAX VALUE */}
          {variant === "inprogress" ? (
            <TaxRow value={tax} />
          ) : (
            <Row label="IGST" value={tax} />
          )}
        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-6 pt-4">

          {/* TOTAL */}
          <div className="flex items-center justify-between">

            <Text className="text-xl font-semibold text-neutral-9">
              {variant === "inprogress"
                ? "Grand Total"
                : "Total"}
            </Text>

            <Text className="text-4xl font-semibold text-[#C89A5B]">
              {total}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= ROW ================= */

type RowProps = {
  label: string;
  value: string;
  green?: boolean;
};

function Row({
  label,
  value,
  green = false,
}: RowProps) {
  return (
    <div className="flex items-center justify-between gap-4">

      {/* LABEL */}
      <Text className="text-neutral-7 text-sm">
        {label}
      </Text>

      {/* VALUE */}
      <Text
        className={clsx(
          "text-sm font-medium",
          green
            ? "text-success-600"
            : "text-neutral-9"
        )}
      >
        {value}
      </Text>
    </div>
  );
}

/* ================= TAX TOOLTIP ROW ================= */

function TaxRow({
  value,
}: {
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">

      {/* LEFT */}
      <div className="flex items-center gap-1 relative group">

        <Text className="text-neutral-7 text-sm">
          Tax Value
        </Text>

        {/* INFO ICON */}
        <button className="w-4 h-4 rounded-full border border-[#C89A5B] text-[#C89A5B] text-[10px] flex items-center justify-center">
          i
        </button>

        {/* TOOLTIP */}
        <div className="absolute left-5 top-5  w-[260px] bg-[#F7F2E9] border border-[#C89A5B] rounded-2xl px-4 py-3 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">

          <p className="text-xs text-neutral-9 leading-[140%]">
            Selling Price = 75
          </p>

          <ul className="list-disc pl-4 mt-1 space-y-1">
            <li className="text-xs text-neutral-7 leading-[130%]">
              Total Price you see is inclusive of
              the product price, taxes and GT
              charges of 3.75
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <Text className="text-sm font-medium text-neutral-9">
        {value}
      </Text>
    </div>
  );
}