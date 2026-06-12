"use client";

import { H1, Text } from "@/components/ui/Typography/Typography";
import OrderTimeline from "../OrderTimeline";

type Variant = "delivered" | "inprogress" | "cancelled";

type OrderHeaderProps = {
  variant: Variant;
  onOpen?: () => void;
};

export default function OrderHeader({ variant, onOpen }: OrderHeaderProps) {
  /* ================= DELIVERED ================= */
  if (variant === "delivered") {
    return (
      <div className="space-y-4">
        {/* TOP */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          {/* LEFT */}
          <div>
            <H1 className="mb-1 font-light text-[28px]">Order Details</H1>

            <Text className="text-neutral-9">Order ID: ABC-687463830</Text>

            {/* DELIVERY INFO */}
            <div className="pt-2">
              <h2 className="text-[18px] sm:text-2xl font-bold text-neutral-13">
                Delivered Feb 28, 2026
              </h2>

              <p className="text-sm sm:text-base text-neutral-8 mt-1">
                Your package was left near the front door or porch.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="sm:text-right">
            {/* STATUS */}
            <span className="inline-flex items-center gap-1 text-success-900 text-sm bg-success-50 px-3 py-2 rounded-md font-medium">
              ● Delivered
            </span>

            {/* LINK */}
            <p
              onClick={onOpen}
              className="text-sm py-2 text-[#629BF8] cursor-pointer font-bold mt-1 underline"
            >
              See all updates →
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <OrderTimeline currentStep={4} variant="delivered" />
      </div>
    );
  }

  /* ================= CANCELLED ================= */
  if (variant === "cancelled") {
    return (
      <div className="space-y-6">
        {/* TOP */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          {/* LEFT */}
          <div>
            <H1 className="mb-1">Order Cancelled</H1>

            <Text className="text-neutral-9">Order ID: ABC-687463830</Text>

            {/* <p className="text-sm text-error-600 mt-3 max-w-xl">
              This order has been cancelled successfully. Refund will be
              processed within 5-7 business days.
            </p> */}
          </div>

          {/* RIGHT */}
          <div className="sm:text-right">
            <span className="inline-flex items-center gap-1 text-error-700 text-sm bg-error-100 px-3 py-2 rounded-md font-medium">
              ● Cancelled
            </span>

            <p
              onClick={onOpen}
              className="text-sm py-2 text-[#629BF8] cursor-pointer font-bold mt-1 underline"
            >
              See all updates →
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <OrderTimeline currentStep={1} variant="cancelled" />
      </div>
    );
  }

  /* ================= INPROGRESS ================= */
   /* ================= INPROGRESS ================= */
  return (
    <div className="space-y-4">
      {/* TOP */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        
        {/* LEFT */}
        <div>
          <H1 className="mb-1">
            Order Details
          </H1>

          <Text className="text-neutral-9">
            Order ID: ABC-687463830
          </Text>

          {/* INFO */}
          <div className="pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-13">
              Arriving Feb 28, 2026
            </h2>

            <p className="text-sm sm:text-base text-neutral-8 mt-1">
              Your order is currently on the way.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sm:text-right">
          <span className="inline-flex items-center gap-1 text-warning-500 text-sm bg-warning-100 px-3 py-2 rounded-md font-medium">
            ● In progress
          </span>

          <p
            onClick={onOpen}
            className="text-sm py-2 text-[#629BF8] cursor-pointer font-bold mt-1 underline"
          >
            See all updates →
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <OrderTimeline
        currentStep={3}
        variant="inprogress"
      />
    </div>
  );
}
