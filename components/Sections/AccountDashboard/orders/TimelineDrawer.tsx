"use client";

import { X, Check } from "lucide-react";
import clsx from "clsx";

type Variant =
  | "delivered"
  | "inprogress"
  | "cancelled";

type TimelineDrawerProps = {
  open: boolean;
  onClose: () => void;
  variant?: Variant;
};

/* ================= DELIVERED ================= */

const deliveredTimeline = [
  {
    title: "Order Confirmed",
    date: "Feb 10, 2026",
    details: [
      "Your Order has been placed.",
      "Seller has processed your order.",
      "Your item has been picked up by delivery partner",
    ],
  },
  {
    title: "Shipped",
    date: "Feb 11, 2026",
    details: [
      "Logistics - XVVHFGJGHFJFH",
      "Your item has been shipped",
      "Your item has been received in the hub nearest to you",
    ],
  },
  {
    title: "Out for Delivery",
    date: "Feb 18, 2026",
    details: [
      "Your item is out for delivery",
    ],
  },
  {
    title: "Delivered",
    date: "Feb 18, 2026",
    details: [
      "Your item has been delivered",
    ],
  },
];

/* ================= INPROGRESS ================= */

const inprogressTimeline = [
  {
    title: "Order Confirmed",
    date: "Feb 10, 2026",
    details: [
      "Your Order has been placed.",
      "Seller has processed your order.",
    ],
  },
  {
    title: "Shipped",
    date: "Feb 11, 2026",
    details: [
      "Your item has been shipped",
      "Your item reached nearest hub",
    ],
  },
  {
    title: "Out for Delivery",
    date: "Feb 18, 2026",
    details: [
      "Your item is out for delivery",
    ],
  },
  {
    title: "Delivered",
    date: "Pending",
    details: [
      "Waiting for delivery completion",
    ],
  },
];

/* ================= CANCELLED ================= */

const cancelledTimeline = [
  {
    title: "Order Confirmed",
    date: "Feb 10, 2026",
    details: [
      "Your Order has been placed.",
      "Seller has processed your order.",
    ],
  },
  {
    title: "Cancelled",
    date: "Feb 12, 2026",
    details: [
      "Your order has been cancelled successfully.",
      "Refund will be processed in 5-7 business days.",
    ],
  },
];

export default function TimelineDrawer({
  open,
  onClose,
  variant = "delivered",
}: TimelineDrawerProps) {

  /* ================= TIMELINE ================= */

  const timeline =
    variant === "delivered"
      ? deliveredTimeline
      : variant === "inprogress"
      ? inprogressTimeline
      : cancelledTimeline;

  return (
    <>
      {/* ================= BACKDROP ================= */}

      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 z-40 transition-all duration-300",
          open
            ? "bg-neutral-13/20 backdrop-blur-[1px] opacity-100 h-full"
            : "bg-transparent opacity-0 pointer-events-none"
        )}
      />

      {/* ================= DRAWER ================= */}

      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl transition-transform duration-300",
          open
            ? "translate-x-0"
            : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">

          <h3 className="text-sm font-semibold text-neutral-900">
            See all Updates
          </h3>

          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <span>Close</span>

            <X size={16} />
          </button>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="px-5 py-6 overflow-y-auto h-full">

          <div className="space-y-8">

            {timeline.map((item, i) => {

              /* ================= STATES ================= */

              const isCompleted =
                variant === "delivered"
                  ? true
                  : variant === "inprogress"
                  ? i < 3
                  : i < 2;

              const isCancelledStep =
                item.title === "Cancelled";

              return (
                <div
                  key={i}
                  className="flex gap-4 relative"
                >

                  {/* ================= CONNECTING LINE ================= */}

                  {i !== timeline.length - 1 && (
                    <div
                      className={clsx(
                        "absolute left-[17px] top-10 h-[calc(100%+24px)] border-l-2 border-dashed",
                        variant === "cancelled"
                          ? "border-error-200"
                          : "border-neutral-300"
                      )}
                    />
                  )}

                  {/* ================= CIRCLE ================= */}

                  <div
                    className={clsx(
                      "z-10 w-9 h-9 flex items-center justify-center rounded-full text-neutral-1 shrink-0",
                      isCancelledStep
                        ? "bg-error-500"
                        : isCompleted
                        ? "bg-green-500"
                        : "bg-neutral-300"
                    )}
                  >
                    <Check size={18} />
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="flex-1">

                    {/* TITLE + DATE */}

                    <div className="flex justify-between items-start gap-2">

                      <p
                        className={clsx(
                          "font-medium text-base",
                          isCancelledStep
                            ? "text-error-600"
                            : isCompleted
                            ? "text-green-600"
                            : "text-neutral-500"
                        )}
                      >
                        {item.title}
                      </p>

                      <span className="text-xs text-neutral-500 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    {/* DETAILS */}

                    <div className="mt-1 space-y-1">

                      {item.details.map((d, idx) => (
                        <p
                          key={idx}
                          className="text-xs text-neutral-600 leading-relaxed"
                        >
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}