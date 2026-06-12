export type OrderStatus = "Delivered" | "Inprogress" | "Cancelled";

export type Order = {
  status: OrderStatus;
  date: string;
  orderId: string;
  productName: string;
  price: string;
  image: string;
};