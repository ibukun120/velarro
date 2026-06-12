"use client";

import Image from "next/image";
import { Cigar } from "@/types/cigar";
import { getProductSlug } from "@/lib/productFilterdata";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type ProductCardProps = Omit<Cigar, "id"> & {
  onExplore?: () => void;
  variant?: "default" | "wishlist";
  onDelete?: () => void;
  onMoveToCart?: () => void;
  selected?: boolean;
};

const ProductCard = ({
  image,
  badge,
  title,
  size,
  length,
  burnTime,
  intensity,
  flavors,
  // brand,
  onExplore,
  variant = "default",
  onDelete,
  onMoveToCart,
  selected = false,
}: ProductCardProps) => {
  const router = useRouter();

  const handleExplore = () => {
    if (onExplore) {
      onExplore();
      return;
    }

    router.push(`/product/${getProductSlug(title)}`);
  };
const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div
      className={`
        group
        rounded-md
        bg-neutral-2
        w-full
        border
        cursor-pointer
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
        hover:border-neutral-6
        ${selected ? "border-neutral-5 " : "border-neutral-5"}
      `}
      style={{ padding: "12px" }}
    >
      {/* IMAGE */}
      <div
        className="relative w-full rounded-md overflow-hidden"
        style={{ aspectRatio: "4 / 3" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />

        {/* BADGE */}
        {badge && (
          <div
            className="absolute top-0 left-0 text-neutral-1 text-xs bg-neutral-12 z-10"
            style={{ padding: "4px 10px" }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div
        className="flex flex-col"
        style={{
          marginTop: "16px",
          gap: "10px",
          padding: "0 2px",
        }}
      >
        {/* TITLE */}
        <h2
          className="
            font-semibold
            text-neutral-13
            transition-colors
            duration-300
            group-hover:text-(--color-primary-500)
          "
          style={{ fontSize: "16px" }}
        >
          {title}
        </h2>

        {/* META */}
        <div
          className="text-(--color-neutral-8) flex flex-wrap"
          style={{
            fontSize: "12px",
            gap: "10px",
          }}
        >
          <span>ø {size}</span>
          <span>{length ?? ""}</span>
          <span>{burnTime}</span>
        </div>

        {/* INTENSITY */}
        <div className="flex items-center flex-wrap" style={{ gap: "8px" }}>
          <span
            className="text-(--color-neutral-9)"
            style={{ fontSize: "12px" }}
          >
            INTENSITY
          </span>

          <div className="flex" style={{ gap: "4px" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    i <= intensity
                      ? "bg-(--color-primary-500)"
                      : "border border-(--color-primary-500)"
                  }
                  group-hover:scale-110
                `}
                style={{
                  height: "12px",
                  width: "12px",
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </div>

        {/* FLAVORS */}
        <p
          className="
            italic
            text-(--color-neutral-8)
            transition-colors
            duration-300
            group-hover:text-(--color-neutral-10)
          "
          style={{ fontSize: "10px" }}
        >
          {flavors}
        </p>

        {/* DIVIDER */}
        <div
          className="
            bg-(--color-primary-300)
            transition-all
            duration-500
            group-hover:bg-(--color-primary-500)
          "
          style={{ height: "1px" }}
        />

        {/* FOOTER */}
        {variant === "wishlist" ? (
          <div className="flex items-center gap-2">
            <button
              onClick={onMoveToCart}
              className="
      flex-1
      h-[28px]
      rounded-[6px]
      border
      border-primary-300
      text-primary-500
      text-[12px]
      font-light
      uppercase
      tracking-[0.03em]
    "
            >
              MOVE TO CART
            </button>

         <button
  onClick={() => setShowDeleteModal(true)}
  className="
    shrink-0
    h-[28px]
    px-3
    rounded-[6px]
    border
    border-primary-300
    text-primary-300
    text-[12px]
    font-light
    flex
    items-center
    justify-center
    gap-1
  "
>
  Delete
  <Trash2 size={12} strokeWidth={1.5} />
</button>
          </div>
        ) : (
          <div className="flex items-center ">
            <span
              className="
                font-medium
                text-(--color-neutral-12)
                transition-colors
                duration-300
                group-hover:text-(--color-primary-500)
              "
              style={{ fontSize: "12px" }}
            >
              {/* {brand} */}
            </span>

            <button
              onClick={handleExplore}
              className="
                w-full
                border
                border-neutral-6
                text-neutral-13
                rounded-md
                transition-all
                duration-300
                cursor-pointer
                hover:bg-(--color-primary-500)
                hover:text-neutral-1
                hover:scale-[1.03]
                active:scale-[0.98]
              "
              style={{
                fontSize: "14px",
                padding: "10px 16px",
              }}
            >
              EXPLORE
            </button>
          </div>
        )}
      </div>
      {showDeleteModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
      <h3 className="text-lg font-semibold text-neutral-13 mb-2">
        Delete Product
      </h3>

      <p className="text-sm text-neutral-8 mb-6">
        Are you sure you want to delete this item from your wishlist?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="px-4 py-2 border rounded-xs"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            onDelete?.();
            setShowDeleteModal(false);
          }}
          className="px-4 py-2 bg-error-500 text-white rounded-xs"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ProductCard;
