import { create } from "zustand";
import { CartItem, CartState, CartTotals } from "@/types/cart";
import { Product, ProductVariant } from "@/types/product";

/* ------------------ CONFIG ------------------ */

const CART_STORAGE_KEY = "velarro_cart";

const TAX_RATE = 0.075;
const DISCOUNT_THRESHOLD = 300;
const DISCOUNT_AMOUNT = 25;

/* ------------------ STORAGE HELPERS ------------------ */

const loadCartFromStorage = (): CartState | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveCartToStorage = (cart: CartState) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

/* ------------------ TOTALS ------------------ */

function calculateTotals(items: CartItem[]): CartTotals {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const discount = subtotal >= DISCOUNT_THRESHOLD ? DISCOUNT_AMOUNT : 0;
  const total = subtotal + tax - discount;

  return { subtotal, tax, discount, total };
}

/* ------------------ ACTIONS ------------------ */

interface CartActions {
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

/* ------------------ STORE ------------------ */

export const useCartStore = create<CartState & CartActions>((set, get) => {
  const storedCart = loadCartFromStorage();

  return {
    items: storedCart?.items ?? [],
    totals:
      storedCart?.totals ?? { subtotal: 0, tax: 0, discount: 0, total: 0 },

    addItem: (
  product: Product & { selectedVariant?: ProductVariant },
  quantity = 1
) => {
  const variantKey = product.selectedVariant?.label ?? "default";

  const existing = get().items.find(
    (i) =>
      i.productId === product.id.toString() &&
      i.selectedVariant?.label === variantKey
  );

  const updatedItems = existing
    ? get().items.map((i) =>
        i.productId === product.id.toString() &&
        i.selectedVariant?.label === variantKey
          ? { ...i, quantity: i.quantity + quantity }
          : i
      )
    : [
        ...get().items,
        {
          productId: product.id.toString(),
          slug: product.slug,
          brand: product.brand,
          title: product.title,
          image: product.image,
          price: product.selectedVariant?.price ?? 0,
          quantity,
          selectedVariant: product.selectedVariant,
        },
      ];

  const updatedCart = {
    items: updatedItems,
    totals: calculateTotals(updatedItems),
  };

  saveCartToStorage(updatedCart);
  set(updatedCart);
},


    updateQuantity: (productId: string, quantity: number) => {
      const updatedItems = get().items.map((i) =>
        i.productId === productId
          ? { ...i, quantity: Math.max(1, quantity) }
          : i
      );

      const updatedCart = {
        items: updatedItems,
        totals: calculateTotals(updatedItems),
      };

      saveCartToStorage(updatedCart);
      set(updatedCart);
    },

    removeItem: (productId: string) => {
      const updatedItems = get().items.filter(
        (i) => i.productId !== productId
      );

      const updatedCart = {
        items: updatedItems,
        totals: calculateTotals(updatedItems),
      };

      saveCartToStorage(updatedCart);
      set(updatedCart);
    },

    clearCart: () => {
      const emptyCart = {
        items: [],
        totals: { subtotal: 0, tax: 0, discount: 0, total: 0 },
      };

      saveCartToStorage(emptyCart);
      set(emptyCart);
    },
  };
});
