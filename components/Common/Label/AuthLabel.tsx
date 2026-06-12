import React from "react";

export interface LabelInterface {
  label: string;
  required?: boolean;
  className?: string;
}

export default function AuthLabel({
  label,
  required = false,
  className = "flex gap-0.5",
}: LabelInterface) {
  if (!label) return null;

  return (
    <label className={className}>
      {label}
      {required && <span className="text-error-500 ml-0.5">*</span>}
    </label>
  );
}