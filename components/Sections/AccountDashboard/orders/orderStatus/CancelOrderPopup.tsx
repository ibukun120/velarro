"use client";

import { useState } from "react";

type CancelOrderPopupProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const reasons = [
  "Ordered by mistake",
  "Found a better alternative",
  "Delivery is taking too long",
  "Want to modify my order",
  "Other",
];

export default function CancelOrderPopup({
  open,
  onClose,
  onConfirm,
}: CancelOrderPopupProps) {
  const [selectedReason, setSelectedReason] =
    useState("");

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black/40
        backdrop-blur-[2px]
        flex
        items-center
        justify-center
        px-4
      "
    >
      {/* MODAL */}
      <div
        className="
          w-full
          max-w-[520px]
          bg-white
          rounded-lg
          border
          border-[#B9B9B9]
          shadow-xl
          p-5
        "
      >
        {/* TITLE */}
        <h2 className="text-[20px] font-semibold text-black">
          Proceed with cancellation?
        </h2>

        {/* SUBTEXT */}
        <p className="text-[12px] text-black mt-4">
          Before you proceed, let us know the reason
          for cancellation
        </p>

        {/* OPTIONS */}
        <div className="mt-5 space-y-3">
          {reasons.map((reason) => (
            <label
              key={reason}
              className="
                flex
                items-center
                gap-2
                cursor-pointer
                text-[12px]
                text-black
              "
            >
              <input
                type="radio"
                name="cancelReason"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) =>
                  setSelectedReason(e.target.value)
                }
                className="
                  w-3.5
                  h-3.5
                  accent-[#C58B45]
                  cursor-pointer
                "
              />

              {reason}
            </label>
          ))}
        </div>

        {/* OTHER INPUT */}
        {selectedReason === "Other" && (
          <input
            type="text"
            className="
              mt-3
              w-full
              h-[30px]
              border
              border-[#BDBDBD]
              rounded-[4px]
              px-2
              text-sm
              outline-none
            "
          />
        )}

        {/* INFO */}
        <p className="text-[12px] text-black mt-5 leading-relaxed">
          If you proceed, this item will be removed
          from your order and any eligible refund
          will be processed accordingly.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 mt-5">
          {/* KEEP BUTTON */}
          <button
            onClick={onClose}
            className="
              h-[36px]
              px-5
              rounded-[4px]
              border
              border-[#8D8D8D]
              bg-white
              text-[12px]
              text-black
              font-medium
              hover:bg-gray-50
              transition-all
            "
          >
            Keep my order
          </button>

          {/* CANCEL BUTTON */}
          <button
            onClick={onConfirm}
            className="
              h-[36px]
              px-6
              rounded-[4px]
              bg-[#F2C9A6]
              text-neutral-1
              text-[12px]
              font-medium
              hover:opacity-90
              transition-all
            "
          >
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
}