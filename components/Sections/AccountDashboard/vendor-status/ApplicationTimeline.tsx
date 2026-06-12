"use client";

import { Text } from "@/components/ui/Typography/Typography";

const steps = [
  { title: "Submitted", date: "Feb 28" },
  { title: "Under Review", date: "March 16" },
  { title: "Rejected", date: "March 30" },
];

export default function ApplicationTimeline() {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-4">
      {/* Line (perfectly aligned between circles) */}
      <div className="absolute top-5 -translate-y-1/2 left-[54px] right-[48px] h-[2px] bg-primary-100" />

      {/* Steps */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const isActive = index === 0;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
                ${
                  isActive
                    ? "bg-primary-500 text-neutral-1"
                    : "bg-primary-100 text-transparent"
                }`}
              >
                {isActive ? "1" : ""}
              </div>

              {/* Title */}
              <Text
                className={`mt-2 text-md font-medium ${
                  isActive ? "text-primary-500" : "text-primary-400"
                }`}
              >
                {step.title}
              </Text>

              {/* Date */}
              <Text className="text-xs text-secondary-300 mt-1">
                {step.date}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
}