"use client";

import { Text } from "@/components/ui/Typography/Typography";
import { Circle, CircleCheckBig, ClipboardCheck } from "lucide-react";
// import Image from "next/image";

const steps = [
  // { label: "Add a Profile picture", completed: true },
  { label: "Add a contact information", completed: true },
  { label: "Add a Phone number", completed: true },
  { label: "Add Address", completed: false },
  { label: "Placed Order", completed: false },
  { label: "Push notification", completed: false },
];

export default function ProfileStatus() {
  const progress = 50;

  return (
    <div className="bg-neutral-1 rounded-lg p-4 sm:p-5">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <ClipboardCheck
            size={24}
            strokeWidth={1.8}
            className="text-neutral-8"
          />
          <Text className="text-neutral-11 font-medium text-base sm:text-lg whitespace-nowrap">
            Profile Status
          </Text>
        </div>

        <Text className="text-neutral-11 font-medium text-base sm:text-lg shrink-0">
          {progress}%
        </Text>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-secondary-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-primary-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 w-full mt-2 px-1 sm:px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-1.5">
            {step.completed ? (
              <CircleCheckBig
                size={14}
                className="mt-[2px] text-neutral-11 shrink-0"
              />
            ) : (
              <Circle size={14} className="mt-[2px] text-neutral-6 shrink-0" />
            )}

            <span
              className={`text-xs leading-tight ${
                step.completed ? "text-neutral-11" : "text-neutral-6"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
