"use client";

import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative w-16 h-7 flex items-center rounded-full px-1 transition border border-neutral-6 ${
        enabled ? "bg-primary-500" : ""
      }`}
    >
      {/* Text */}
      <span
        className={`absolute text-sm font-normal ${
          enabled ? "left-2 text-neutral-1" : "right-2 text-gray-600"
        }`}
      >
        {enabled ? "OFF" : "ON"}
      </span>

      {/* Toggle Circle */}
      <div
        className={` w-5 h-5 rounded-full shadow-md transform transition duration-300 ${
          enabled ? "translate-x-9 bg-neutral-1" : "translate-x-0 bg-primary-500"
        }`}
      />
    </button>
  );
}