'use client';

import { Product } from "@/types/product";
import ProductCard from "../../_components/ProductCard";


type Props = {
  products: Product[];
  onProductClick?: (product: Product) => void;
};

export default function GiftSellers({ products, onProductClick }: Props) {
  if (!products.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <h3 className="text-2xl font-semibold mb-8 text-center">Gift Sellers</h3>

      <div className="flex gap-8 overflow-x-auto px-6 scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="min-w-[300px] max-w-[300px] shrink-0">
            <ProductCard
              product={product}
              onClick={() => onProductClick?.(product)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
