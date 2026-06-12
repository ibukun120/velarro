export type OrderStatus =
  | "placed"
  | "packed"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "delayed";

export type FilterTab = "all" | "on-way" | "delivered" | "cancelled" | "refund";

export type OrderTimeFilter = "" | "1" | "30" | "90" | "180";

export interface TrackingEvent {
  text: string;
  time?: string; // optional — handle gracefully if missing
}

export interface TrackingStage {
  stage: string;
  date?: string;
  events: TrackingEvent[];
}

export interface Address {
  label: string;   // e.g. "Work", "Home"
  name: string;    // e.g. "John Smith"
  address: string; // e.g. "123 Maple St, Springfield, IL 62704"
  phone: string;
}

export interface Order {
  id: string;
  name: string;
  qty: number;
  size: number;
  price: number;
  status: OrderStatus;
  statusLabel: string;     // human-readable label e.g. "Delivered on Jan 18"
  daysAgo: number;         // for Order Time filter — replace with real date when API is ready
  imageUrl?: string;       // optional product image
  tracking?: TrackingStage[];
  shippingAddress?: Address;
  deliveryAddress?: Address;
}
