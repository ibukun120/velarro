import { Product } from "@/types/product";

export type OrderStatus =
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderItem {
  product: Product;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  invoiceUrl?: string;
  tracking?: {
    carrier: string;
    trackingNumber: string;
    trackingUrl?: string;
  };
}
