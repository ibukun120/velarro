import ProductCard from "@/components/ui/Cards/ProductCard";
import { Product } from "./wishlist.types";
// import { Cigar } from "@/types/cigar";


// In ProductCard.tsx — extend the props type to include these:


type Props = {
  products: Product[];
  onDelete: (id: number) => void;
  onMoveToCart: (id: number) => void;
};

export default function WishlistGrid({
  products,
  onDelete,
  onMoveToCart,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          {...item}
          variant="wishlist"
          onDelete={() => onDelete(item.id)}
          onMoveToCart={() => onMoveToCart(item.id)}
        />
      ))}
    </div>
  );
}