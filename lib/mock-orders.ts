import { Order } from "@/types/order";
import { mockProducts } from "./products.data";


export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-10234",
    createdAt: "2026-01-12T10:30:00Z",
    status: "SHIPPED",
    items: [
      {
        product: mockProducts[0],
        quantity: 2,
        unitPrice: 7.2,
      },
    ],
    totalAmount: 14.4,
    invoiceUrl: "/mock/invoices/ORD-10234.pdf",
    tracking: {
      carrier: "DHL",
      trackingNumber: "DHL123456789",
      trackingUrl: "https://www.dhl.com",
    },
  },
  {
    id: "2",
    orderNumber: "ORD-10218",
    createdAt: "2026-01-05T14:10:00Z",
    status: "DELIVERED",
    items: [
      {
        product: mockProducts[0],
        quantity: 1,
        unitPrice: 32.4,
      },
    ],
    totalAmount: 32.4,
    invoiceUrl: "/mock/invoices/ORD-10218.pdf",
  },
];
