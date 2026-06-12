// import React from "react";
import {
  Square,
  SquareCheckBig,
  Trash,
  Bookmark,
  Share,
  Minus,
  Plus,
  ChevronDown,
  SquareCheck,
} from "lucide-react";
import { CartItemType } from "@/types/cart";
import Image from "next/image";

export interface CartItemProps extends CartItemType {
  onSelect: (id: string) => void;
  onQuantityChange: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
  onSave: (id: string) => void;
  onShare: (id: string) => void;
}

export default function CartItem({
  id,
  title,
  image,
  size,
  notes,
  deliveryDate,
  inStock,
  selected,
  quantity,
  originalPrice,
  price,
  limitedDeal,
  coupon,
  onSelect,
  onQuantityChange,
  onDelete,
  onSave,
  onShare,
}: CartItemProps) {
  return (
    <div className="flex flex-col border-b-[0.8px] border-secondary-100 overflow-hidden bg-neutral-1 py-2">
      {/* DESKTOP & TABLET VIEW (md and up) */}
      <div className="hidden md:flex justify-between w-full">
        {/* Left: Items (and Quantity closely below it on tablet) */}
        <div className="flex flex-col flex-wrap  gap-2 lg:gap-4 flex-1 md:flex-none lg:w-107.5 pb-4">
          <div className="flex justify-between lg:gap-4 gap-2">
            <button
              onClick={() => onSelect(id)}
              className="text-primary-500 hover:text-primary-600 transition-colors flex items-start"
            >
              {selected ? <SquareCheck size={22} /> : <Square size={22} />}
            </button>

            <div className="relative w-36 h-36 rounded-[16px] overflow-hidden shrink-0 bg-neutral-5 hover:scale-105 transition-all duration-300">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-5" />
              )}
            </div>

            <div className="flex flex-col lg:w-70">
              <h3 className="text-[16px] mb-0.5 font-bold text-neutral-9 leading-tight">
                {title}
              </h3>
              <p className="text-xs mb-0.5 text-neutral-8">Size: {size}</p>
              <p className="text-xs mb-0.5 text-neutral-8">{notes}</p>
              <p className="text-xs mb-0.5 text-neutral-8">
                Delivered by {deliveryDate}
              </p>
              <p
                className={`text-xs ${inStock ? "text-success-500" : "text-error-400"}`}
              >
                {inStock ? "Instock" : "Out of stock"}
              </p>

              {/* main */}
              <div className="flex gap-2 mt-5">
                <div className="flex items-center gap-2.5 border border-neutral-6  rounded-[5px] overflow-hidden bg-neutral-1 px-2 py-1 w-20">
                  <button
                    onClick={() =>
                      quantity === 1 ? onDelete(id) : onQuantityChange(id, -1)
                    }
                    className="text-primary-500 hover:bg-primary-50 transition-colors"
                  >
                    {quantity === 1 ? <Trash size={16} /> : <Minus size={14} />}
                  </button>

                  <div className="text-xs text-[#010101] min-w-[1rem] text-center">
                    {quantity}
                  </div>

                  <button
                    onClick={() => onQuantityChange(id, 1)}
                    className="text-primary-500 hover:bg-primary-50 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => onSave(id)}
                    className="flex items-center gap-2 text-xs text-neutral-8 border font-light border-neutral-6 px-2 py-1 rounded-[5px] transition-colors"
                  >
                    <Bookmark size={16} className=" text-primary-500" />
                    <span>Save To Later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* quantity on tablet goes under the items section */}
          <div className="flex lg:hidden items-center shrink-0 pl-10.5 mt-2">
            <div className="flex items-center gap-2.5 border border-neutral-6 rounded-[5px] overflow-hidden bg-neutral-1 px-2 py-1">
              <button
                onClick={() => onQuantityChange(id, -1)}
                className="text-primary-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <Minus size={14} />
              </button>
              <div className=" text-xs text-[#010101] min-w-[1rem] text-center">
                {quantity}
              </div>
              <button
                onClick={() => onQuantityChange(id, 1)}
                className=" text-primary-500 hover:bg-primary-50 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        
        {/* Right: Badges, Price, Actions */}
        <div className="flex flex-col gap-1 justify-center items-end shrink-0 lg:w-57.5 ">
          {limitedDeal && (
            <div className="text-error-600 bg-error-100 py-1 px-2 text-sm leading-5.25 tracking-tighter rounded-lg">
              Limited deal offer
            </div>
          )}
          {coupon && (
            <div className="border border-neutral-6 rounded-md p-1 text-xs leading-4.25 flex items-center justify-between text-center gap-1 bg-white">
              <span className="text-success-500">Coupons Collected:</span>
              <div className="text-[#010101]">
                <span>{coupon}</span>
              </div>
              <ChevronDown size={18} className="text-primary-600" />
            </div>
            

            
          )}

          <div className="text-right flex items-center gap-2 mt-2">
          {originalPrice && (
            <span className="text-xl text-neutral-7 tracking-tight line-through">
              ₹{originalPrice.toFixed(0)}
              
            </span>
          )}
          <span className="text-xl leading-6.5 tracking-tight text-neutral-13">
            {/* ₹ {price.toFixed(2)} */}
            ₹42.99
          </span>
        </div>
        </div>

        
      </div>
      {/* <div className="hidden md:flex justify-end items-center gap-2 -mt-3 ml-10">
        
        <div className="text-right flex items-center gap-2">
          {originalPrice && (
            <span className="text-xl text-neutral-7 tracking-tight line-through">
              ₹{originalPrice.toFixed(0)}
            </span>
          )}
          <span className="text-xl leading-6.5 tracking-tight text-neutral-13">
            ₹ {price.toFixed(2)}
          </span>
        </div>
      </div> */}

      {/* MOBILE VIEW (Strictly < md) */}
      <div className="flex flex-col md:hidden w-full gap-3">
        {/* Row 1: Items */}
        <div className="flex gap-2">
          <button
            onClick={() => onSelect(id)}
            className="text-primary-500 hover:text-primary-600 transition-colors flex items-start mt-1 shrink-0"
          >
            {selected ? <SquareCheckBig size={20} /> : <Square size={20} />}
          </button>

          <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-[10px] sm:rounded-xl overflow-hidden shrink-0 bg-neutral-5">
            {image ? (
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-neutral-5" />
            )}
          </div>

          <div className="flex flex-col flex-1 w-full min-w-0">
            <h3 className="text-[13px] sm:text-sm font-bold text-neutral-8 leading-tight truncate whitespace-normal line-clamp-2">
              {title}
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-8 mt-1 font-medium truncate">
              Size: {size}
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-8 italic font-medium mt-0.5 truncate">
              {notes}
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-8 mt-1 font-medium truncate">
              Delivered by {deliveryDate}
            </p>
            <p
              className={`text-[11px] sm:text-xs mt-0.5 truncate ${inStock ? "text-success-500" : "text-error-400"}`}
            >
              {inStock ? "Instock" : "Out of stock"}
            </p>
          </div>
        </div>

        {/* Row 2: Quantity and Price Inline */}
        <div className="flex justify-between items-end w-full pl-7 sm:pl-8.5 flex-wrap gap-y-2">
          {/* Quantity */}
          <div className="flex items-center gap-2 border border-neutral-6 rounded-sm overflow-hidden bg-neutral-1 px-1.5 py-0.5 mb-1 shrink-0">
            <button
              onClick={() => onQuantityChange(id, -1)}
              className="text-primary-500  transition-colors disabled:opacity-50"
              disabled={quantity <= 1}
            >
              <Minus size={12} />
            </button>
            <div className=" text-[11px] text-[#010101] min-w-[0.8rem] text-center">
              {quantity}
            </div>
            <button
              onClick={() => onQuantityChange(id, 1)}
              className=" text-primary-500 transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Badges & Price */}
          <div className="flex flex-col items-end gap-1 flex-1 pl-2">
            {limitedDeal && (
              <div className="text-error-600 text-2xs sm:text-xs leading-tight tracking-tighter truncate w-full text-right">
                Limited deal offer
              </div>
            )}
            {coupon && (
              <div className="border border-neutral-6 rounded-sm px-1 py-0.5 text-2xs leading-tight flex items-center justify-between gap-1 bg-white truncate max-w-full">
                <span className="text-success-500 font-medium truncate">
                  Coupons: Save 5%
                </span>
                <ChevronDown size={12} className="text-primary-600 shrink-0" />
              </div>
            )}
            <div className="text-right flex items-center gap-1.5 mt-1 flex-wrap justify-end">
              {originalPrice && (
                <span className="text-sm sm:text-base text-neutral-7 tracking-tight line-through">
                  ₹{originalPrice.toFixed(0)}
                </span>
              )}
              <span className="text-base sm:text-lg font-medium tracking-tight text-error-600 whitespace-nowrap">
                ₹{price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Actions */}
        <div className="flex gap-1.5 sm:gap-2.5 w-full pl-7 sm:pl-8.5 mt-1 flex-wrap">
          <button
            onClick={() => onDelete(id)}
            className="flex items-center gap-1.5 text-[11px] sm:text-xs text-error-500 border font-light border-error-500 px-1.5 py-1 rounded-sm bg-error-50 transition-colors whitespace-nowrap"
          >
            <Trash size={12} className="text-error-500" />
            <span>Delete</span>
          </button>
          <button
            onClick={() => onSave(id)}
            className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 border font-light border-neutral-6 px-1.5 py-1 rounded-sm transition-colors whitespace-nowrap"
          >
            <Bookmark size={12} className="text-primary-500" />
            <span>Save</span>
          </button>
          <button
            onClick={() => onShare(id)}
            className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 border font-light border-neutral-6 px-1.5 py-1 rounded-sm transition-colors whitespace-nowrap"
          >
            <Share size={12} className="text-primary-500" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}