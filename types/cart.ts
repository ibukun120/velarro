
export interface CartItem {
  productId: string;
  slug: string;
  brand: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
   selectedVariant?: {
    label: string;
    price: number;
  };
}

export interface CartTotals {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
}

export interface CartState {
  items: CartItem[];
  totals: CartTotals;
}

export interface CartItemType {
  id: string;
  title: string;
  image: string;
  size: string;
  notes: string;
  deliveryDate: string;
  inStock: boolean;
  selected: boolean;
  quantity: number;
  originalPrice?: number;
  price: number;
  limitedDeal?: boolean;
  coupon?: string;
}

export interface SavedItemType {
  id: string;
  title: string;
  specs: string;
  intensity: number;
  description: string;
  salesText: string;
  price: number;
  image: string;
  tag?: string;
  labels?: string[];
}
