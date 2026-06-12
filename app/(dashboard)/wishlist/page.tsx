"use client";

import { useMemo, useState } from "react";

import Container from "@/components/Layouts/Container";

import {
  initialProducts,
  tabs,
} from "@/components/Sections/AccountDashboard/wishlist/wishlist.config";

import WishlistTabs from "@/components/Sections/AccountDashboard/wishlist/WishlistTabs";
import WishlistGrid from "@/components/Sections/AccountDashboard/wishlist/WishlistGrid";


import { H1 } from "@/components/ui/Typography/Typography";
import EmptyWishlist from "@/app/emptywishlist/EmptyWishlist";

export default function WishlistPage() {

  /* ================= STATE ================= */

  const [products, setProducts] =
    useState(initialProducts);

  const [activeTab, setActiveTab] =
    useState(tabs[0]);

  /* ================= DELETE ================= */

  const handleDelete = (id: number) => {
    setProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* ================= MOVE TO CART ================= */

  const handleMoveToCart = (id: number) => {
    console.log("Move to cart:", id);

    // future:
    // addToCart(id)
    // removeWishlist(id)
  };

  /* ================= FILTER PRODUCTS ================= */

 const filteredProducts = useMemo(() => {
  if (activeTab === "All") {
    return products;
  }

  const normalizedActiveTab = activeTab.toLowerCase().trim();

  return products.filter((item) => {
    const category = item.category?.toLowerCase().trim() ?? "";
    return category === normalizedActiveTab;
  });
}, [products, activeTab]);

  /* ================= UI ================= */

  return (
    <Container className="flex flex-col gap-4 sm:gap-6">

      {/* TITLE */}
      <H1>
        Wish list
      </H1>

      {/* TABS */}
      <div className="overflow-x-auto -mx-2 px-2 sm:mx-0 sm:px-0">
        <WishlistTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      {/* CONTENT */}
      <div className="w-full">

        {filteredProducts.length > 0 ? (

          <WishlistGrid
            products={filteredProducts}
            onDelete={handleDelete}
            onMoveToCart={handleMoveToCart}
          />

        ) : (

          <EmptyWishlist/>

        )}

      </div>
    </Container>
  );
}