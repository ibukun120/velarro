"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

type CancelSuccessPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function CancelSuccessPopup({
  open,
  onClose,
}: CancelSuccessPopupProps) {
    const router = useRouter();
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
      {/* POPUP */}
      <div
        className="
          w-full
          max-w-[340px]
          bg-white
          rounded-xl
          shadow-2xl
          border
          border-[#DDD6CC]
          p-5
        "
      >
        {/* ICON */}
        <div className="flex justify-center">
          <div
            className="
              w-[52px]
              h-[52px]
              rounded-full
              bg-[#DDECD5]
              flex
              items-center
              justify-center
            "
          >
            <Check
              size={24}
              className="text-[#8BB174]"
            />
          </div>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-center
            text-[24px]
            font-semibold
            text-black
            mt-5
          "
        >
          Cancellation Successful
        </h2>

        {/* ORDER ID */}
        <p
          className="
            text-center
            text-[13px]
            text-[#C89A5B]
            mt-1
          "
        >
          Order #VL-10482
        </p>

        {/* PRODUCT CARD */}
        <div
          className="
            mt-5
            bg-[#F7F3EA]
            rounded-md
            p-3
          "
        >
          <p
            className="
              text-[10px]
              text-[#777]
              mb-2
            "
          >
            Order Cancelled
          </p>

          <div className="flex items-center gap-3">
            {/* IMAGE */}
            <div
              className="
                relative
                w-[42px]
                h-[42px]
                rounded-md
                overflow-hidden
                shrink-0
              "
            >
              <Image
                src="/userDashboard/order.png"
                alt="product"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p
                className="
                  text-[11px]
                  font-medium
                  text-black
                "
              >
                Velarro Limited Compendium
              </p>

              <p
                className="
                  text-[10px]
                  text-[#666]
                  mt-0.5
                "
              >
                Qty - 1
              </p>

              <p
                className="
                  text-[11px]
                  font-semibold
                  text-black
                  mt-1
                "
              >
                ₹30.00
              </p>
            </div>
          </div>
        </div>

        <button
  onClick={() => {
    onClose();
    router.push("/product");
  }}
  className="
    w-full
    h-[42px]
    rounded-md
    bg-[#C89A5B]
    text-neutral-1
    text-[13px]
    font-medium
    mt-5
    hover:opacity-90
    transition-all
  "
>
  Continue Shopping
</button>

        {/* FOOTER */}
        <p
          className="
            text-center
            text-[10px]
            text-[#777]
            mt-4
          "
        >
          A confirmation email has been sent to your
          registered address.
        </p>
      </div>
    </div>
  );
}