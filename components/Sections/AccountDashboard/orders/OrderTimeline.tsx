"use client";

import { Text } from "@/components/ui/Typography/Typography";
import clsx from "clsx";

const steps = [
  { title: "Ordered", date: "Feb 10" },
  { title: "Shipped", date: "Feb 16" },
  { title: "Out for Delivery", date: "Feb 24" },
  { title: "Delivered", date: "Feb 28" },
];

type Variant =
  | "delivered"
  | "inprogress"
  | "cancelled";

type OrderTimelineProps = {
  currentStep: number;
  variant?: Variant;
};

export default function OrderTimeline({
  currentStep,
  variant = "delivered",
}: OrderTimelineProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto mt-4">

      {/* LINE */}
      <div className="absolute top-5 -translate-y-1/2 left-[48px] right-[50px] h-[2px] bg-primary-100" />

      {/* STEPS */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {

          const isActive = index < currentStep;

          /* ================= COLORS ================= */

          const activeCircle =
            variant === "cancelled"
              ? "bg-error-500 text-neutral-1"
              : "bg-neutral-6 text-neutral-1";

          const activeText =
            variant === "cancelled"
              ? "text-error-500"
              : "text-primary-500";

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center relative z-10"
            >

              {/* CIRCLE */}
              <div
                className={clsx(
                  "w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition",
                  isActive
                    ? activeCircle
                    : "bg-primary-100 text-transparent"
                )}
              >
                {isActive ? index + 1 : ""}
              </div>

              {/* TITLE */}
              <Text
                className={clsx(
                  "mt-2 text-sm font-medium",
                  isActive
                    ? activeText
                    : "text-primary-300"
                )}
              >
                {step.title}
              </Text>

              {/* DATE */}
              <Text
                variant="sm"
                className="text-secondary-300 mt-1"
              >
                {step.date}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
}