"use client";

import { useState } from "react";
import { Product, ProductVariant } from "@/types/product";

import {
  Breadcrumbs,
  FiltersSidebar,
  Pagination,
  ProductGrid,
  SortDropdown,

} from "../all-products/index";

import ProductPageBg from "./_components/ProductPage-Bg";
import ProductModal from "./_components/ProductModal";
import { mockProducts } from "@/lib/products.data";

const ITEMS_PER_PAGE = 6;

export default function AllProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<string>("Featured Items");
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);


  const sortedProducts = [...mockProducts];

  // --- Sorting logic ---
  switch (sortBy) {
    case "Price: Ascending":
      sortedProducts.sort(
        (a, b) => (a.variants?.[0]?.price ?? 0) - (b.variants?.[0]?.price ?? 0)
      );
      break;

    case "Price: Descending":
      sortedProducts.sort(
        (a, b) => (b.variants?.[0]?.price ?? 0) - (a.variants?.[0]?.price ?? 0)
      );
      break;

    case "A to Z":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "Z to A":
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;

    case "Newest Items":
      // If you add a `createdAt` field to Product, uncomment below
      // sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;

    default:
      break; // Featured Items: keep original order
  }

  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
      <ProductPageBg />
      <Breadcrumbs />

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Left sidebar */}
        <FiltersSidebar />

        {/* Main content */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <p className="text-md text-gray-600 space-x-1">
              <span className="font-medium">{visibleProducts.length}</span> items of{" "}
              <span className="font-medium">{totalItems}</span>
            </p>

            <div>
              <span className="mr-2">Sort by:</span>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          <ProductGrid products={visibleProducts} onProductClick={setSelectedProduct} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          selectedVariant={selectedVariant ?? selectedProduct?.variants?.[0] ?? null}
          setSelectedVariant={setSelectedVariant}
          onClose={() => {
            setSelectedProduct(null);
            setSelectedVariant(null); 
          }}
        />

      )}
    </>
  );
}