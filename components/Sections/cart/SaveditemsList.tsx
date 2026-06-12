// import React from "react";
import { Trash } from "lucide-react";
import Image from "next/image";

interface SavedItemListProps {
  title: string;
  specs: string;
  intensity: number;
  description: string;
  salesText: string;
  price: number;
  image: string;
  onDelete: () => void;
  onMoveToCart: () => void;
}

export default function SavedItemsList({
  title,
  specs,
  intensity,
  description,
  salesText,
  price,
  image,
  onDelete,
  onMoveToCart,
}: SavedItemListProps) {
  return (
    <div className="border border-neutral-6 rounded-lg p-4 flex flex-col relative w-full bg-neutral-1 hover:scale-105 transition-all duration-500">
      {/* Image Placeholder */}
      <div className="bg-[#f0f0f0] rounded-lg w-full aspect-4/3 relative mb-4 overflow-hidden ">
        <div className="absolute top-0 left-0 bg-info-900 text-neutral-1 text-[10px] font-medium px-1.5 py-1 rounded-tl-lg z-10">
          Top Gift
        </div>
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        )}
      </div>

      <h3 className="text-base font-semibold text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="text-[13px] text-neutral-13 my-2 tracking-wide">
        {specs}
      </p>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] text-neutral-13 tracking-wider">
          INTENSITY
        </span>
        <div className="flex gap-1.5 pl-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`w-2 h-2 rounded-full ${
                level <= intensity ? "bg-primary-600" : "border border-neutral-6"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <p className="text-[10px] leading-4.25 text-neutral-13 italic mb-4">
        {description}
      </p>

      <div className="w-full h-[1px] border-b border-neutral-6"></div>

      <div className="flex justify-between items-center mt-auto pt-2 mb-4">
        <span className="text-[8px] leading-3">{salesText}</span>
        <span className="text-xs leading-4 font-bold text-[#010101]">
         ₹{price.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between gap-3">
        <button 
          onClick={onDelete}
          className="flex items-center justify-between gap-2.5 border border-neutral-6 rounded-[5px] p-1 text-[#010101] text-xs transition-colors cursor-pointer"
        >
          <Trash size={18} className="text-primary-500" /> <p className="text-xs leading-4.25">Delete</p>
        </button>
        <button 
          onClick={onMoveToCart}
          className="border border-neutral-6 rounded-sm px-2 py-1 text-[#010101] text-xs leading-4.25 transition-colors cursor-pointer hover:bg-orange-50"
        >
          Move To Cart
        </button>
      </div>
    </div>
  );
}
