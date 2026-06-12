"use client";

import { AlertCircle, RotateCcw } from "lucide-react";
import { H3, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Buttons/CommonButtons";

export default function ApplicationAlert({
  onReApply,
}: {
  onReApply: () => void;
}) {
  return (
    <div className="mt-4 sm:mt-6 bg-error-100 border border-error-100 rounded-lg p-3 sm:p-4 flex flex-col gap-3">
  
  {/* HEADER (ICON + TITLE SAME LINE) */}
  <div className="flex items-center gap-2">
    <AlertCircle className="text-error-400 w-5 h-5 shrink-0" />

    <H3 className="text-neutral-12 text-sm sm:text-base whitespace-nowrap">
      Application Rejected
    </H3>
  </div>

  {/* CONTENT */}
  <div className="w-full">
    <Text className="text-sm">
      Submitted business documents could not be verified. Please ensure your
      tax ID matches your registered business name and upload a valid
      utility bill from the last 3 months.
    </Text>

    {/* BUTTON */}
    <div className="mt-3 sm:mt-4">
      <Button
        onClick={onReApply}
        className="bg-secondary-800 text-neutral-1 hover:bg-secondary-800/90 flex items-center justify-center gap-2 border border-warning-600 w-full sm:w-auto"
      >
        <RotateCcw className="w-4 h-4" />
        Re-Apply
      </Button>
    </div>
  </div>
</div>
  );
}