"use client";

import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-[700px] text-center">
        <h2
          className="
            text-[32px]
            md:text-[48px]
            font-light
            text-neutral-8
            leading-tight
            tracking-[-0.02em]
          "
        >
          Nothing in the Humidor Yet
        </h2>

        <p
          className="
            mt-4
            text-[18px]
            md:text-[24px]
            leading-relaxed
            text-neutral-500
            max-w-[600px]
            mx-auto
          "
        >
          Your cart is Empty. All that&apos;s missing is a cigar worthy of the
          Velarro collection.
        </p>

        <Link
          href="/product"
          className="
            inline-flex
            items-center
            justify-center
            mt-10
            h-14
            px-8
            rounded-md
            bg-primary-400
            hover:bg-primary-600
            text-white
            text-lg
            font-medium
            transition-all
            duration-300
            hover:opacity-90
          "
        >
          Browse The Collection
        </Link>
      </div>
    </div>
  );
}