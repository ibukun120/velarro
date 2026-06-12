"use client";

import React, { useState } from "react";
import { List, ChevronDown, LayoutGrid } from "lucide-react";
import BuyAgainCard from "./BuyAgainCard";
import SavedItemsList from "./SaveditemsList";
import { SavedItemType, CartItemType } from "@/types/cart";

interface YourItemsSectionProps {
  buyAgainItems: CartItemType[];
  onMoveToCart: (id: string) => void;
  savedItems: SavedItemType[];
  onDeleteSavedItem: (id: string) => void;
  onDeleteBuyAgain: (id: string) => void;
  onMoveBuyAgainToCart: (id: string) => void;
}

export default function YourItemsSection({
  buyAgainItems,
  onMoveToCart,
  savedItems,
  onDeleteSavedItem,
  // onDeleteBuyAgain,
  onMoveBuyAgainToCart,
}: YourItemsSectionProps) {
  const [activeTab, setActiveTab] = useState<"saved" | "buy-again">("saved");

  return (
    <div className="mt-12 mb-6">
      <div className="bg-neutral-1 rounded-lg shadow-sm overflow-hidden">
        <div className="px-8 py-8 max-lg:px-4 max-lg:py-6">
          <h2 className="text-[28px] max-lg:text-[24px] leading-8.75 tracking-[-0.001] text-secondary-900 mb-5">
            Your items
          </h2>

          <div className="flex justify-between pb-0 relative max-lg:flex-col max-lg:gap-4 max-lg:items-start">
            <div className="flex gap-8 max-lg:gap-4 text-xl max-lg:text-base leading-6.5">
              <button
                onClick={() => setActiveTab("saved")}
                className={` transition-colors tracking-tight ${
                  activeTab === "saved"
                    ? "text-neutral-12 border-b border-neutral-6"
                    : "text-neutral-10 hover:text-neutral-11"
                }`}
              >
                {savedItems.length > 0
                  ? "Items save for later"
                  : "No items save for later"}
              </button>
              <button
                onClick={() => setActiveTab("buy-again")}
                className={` transition-colors tracking-tight ${
                  activeTab === "buy-again"
                    ? "text-neutral-12 border-b-2 border-neutral-6"
                    : "text-neutral-10 hover:text-neutral-11"
                }`}
              >
                Buy it again
              </button>
            </div>
            {activeTab === "saved" ? (
              <button className="flex items-center gap-2 border border-neutral-6 rounded-lg px-3 py-1.5 text-sm text-primary-800 bg-white hover:bg-gray-50 mb-2">
                <List size={18} className="text-primary-500" />
                <p className="text-xs leading-4.5 tracking-[0.4px]">List</p>
                <ChevronDown size={18} className="text-primary-500" />
              </button>
            ) : (
              <button className="flex items-center gap-2 border border-neutral-6 rounded-lg px-3 py-1.5 text-sm text-primary-800 bg-neutral-1 mb-2">
                <LayoutGrid size={18} className="text-primary-500" />
                <p className="text-xs leading-4.5 tracking-[0.4px]">Gallery</p>
                <ChevronDown size={18} className="text-primary-500" />
              </button>
            )}
          </div>
          {activeTab === "buy-again" ? (
            <BuyAgainCard
              buyAgainItems={buyAgainItems}
              onMoveToCart={onMoveBuyAgainToCart}
            />
          ) : (
            <div
              className={`mt-3 ${savedItems.length === 0 ? "p-0 border-0" : "p-4 border border-secondary-400 "}`}
            >
              {savedItems.length === 0 ? (
                <div className="p-4 text-secondary-400 text-lg font-medium border rounded-b-lg mt-4">
                  No item
                </div>
              ) : (
                <>
                  <div className="flex justify-between max-lg:flex-col max-lg:gap-3">
                    <div className="flex gap-4 mb-6 max-lg:mb-2 max-lg:overflow-x-auto max-lg:whitespace-nowrap max-lg:pb-1">
                      <button className="px-4 py-1.5 border border-[#c4a675] rounded text-xs leading-4.25 font-medium hover:bg-orange-50 transition-colors">
                        Ultra-Premium Labels
                      </button>
                      <button className="px-4 py-1.5 border border-[#c4a675] rounded text-xs leading-4.25 font-medium hover:bg-orange-50 transition-colors">
                        Platinum Edition
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {savedItems.map((item) => (
                      <SavedItemsList
                        key={item.id}
                        title={item.title}
                        specs={item.specs}
                        intensity={item.intensity}
                        description={item.description}
                        salesText={item.salesText}
                        price={item.price}
                        image={item.image}
                        onDelete={() => onDeleteSavedItem(item.id)}
                        onMoveToCart={() => onMoveToCart(item.id)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
