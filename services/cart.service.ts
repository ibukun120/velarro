import { CartItem, CartState, CartTotals } from "@/types/cart";
import { Product, ProductVariant } from "@/types/product";

/**
 * Mock server-side cart storage
 */
let serverCart: CartItem[] = [];

/**
 * Pricing config
 */
const TAX_RATE = 0.075;
const DISCOUNT_THRESHOLD = 300;
const DISCOUNT_AMOUNT = 25;

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

export const cartService = {
  getCart(): CartState {
    return {
      items: serverCart,
      totals: calculateTotals(serverCart),
    };
  },

  addItem(
    product: Product & { selectedVariant: ProductVariant },
    quantity = 1
  ): CartState {
    const existingItem = serverCart.find(
      (item) =>
        item.productId === product.id.toString() &&
        item.selectedVariant?.label === product.selectedVariant.label
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      serverCart.push({
        productId: product.id.toString(),
        slug: product.slug,
        brand: product.brand,
        title: product.title,
        image: product.image,
        price: product.selectedVariant.price, 
        quantity,
        selectedVariant: product.selectedVariant,
      });
    }

    return this.getCart();
  },

  updateQuantity(productId: string, quantity: number): CartState {
    serverCart = serverCart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    );

    return this.getCart();
  },

  removeItem(productId: string): CartState {
    serverCart = serverCart.filter(
      (item) => item.productId !== productId
    );

    return this.getCart();
  },

  mergeCart(guestItems: CartItem[]): CartState {
    guestItems.forEach((guestItem) => {
      const existing = serverCart.find(
        (item) =>
          item.productId === guestItem.productId &&
          item.selectedVariant?.label === guestItem.selectedVariant?.label
      );

      if (existing) {
        existing.quantity += guestItem.quantity;
      } else {
        serverCart.push(guestItem);
      }
    });

    return this.getCart();
  },

  clear(): CartState {
    serverCart = [];
    return this.getCart();
  },
};