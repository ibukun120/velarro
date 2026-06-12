"use client";

import React from "react";
import clsx from "clsx";
import { H3 } from "@/components/ui/Typography/Typography";

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
};

export default function SectionCard({
  title,
  children,
  rightContent,
  className,
}: SectionCardProps) {
  return (
    <div
      className={clsx(
        "border border-neutral-6 rounded-lg p-4 sm:p-5 bg-neutral-1",
        className,
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3 sm:mb-4">
        
        <H3 className="text-neutral-13 text-sm sm:text-base">
          {title}
        </H3>

        {rightContent && (
          <div className="text-neutral-11 w-full sm:w-auto">
            {rightContent}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {children}
      </div>
    </div>
  );
}