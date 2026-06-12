"use client";

import { useState } from "react";

import Container from "@/components/Layouts/Container";
import { H1 } from "@/components/ui/Typography/Typography";

import OrderFilters from "@/components/Sections/AccountDashboard/orders/OrderFilters";
import OrderCard from "@/components/Sections/AccountDashboard/orders/OrderCard";


import { OrderStatus } from "@/components/Sections/AccountDashboard/orders/order.types";
import EmptyOrders from "@/app/emptywishlist/EmptyOrders";

type Order = {
  status: OrderStatus;
  date: string;
  orderId: string;
  productName: string;
  price: string;
  image: string;
};

const orders: Order[] = [
  {
    status: "Delivered",
    date: "3 May 2026",
    orderId: "ABC-687463830",
    productName: "Velarro Limited Compendium",
    price: "₹30.00",
    image: "/userDashboard/order.png",
  },
  {
    status: "Inprogress",
    date: "10 May 2026",
    orderId: "ABC-65457789",
    productName: "Velarro Limited Compendium",
    price: "₹45.00",
    image: "/userDashboard/order.png",
  },
  {
    status: "Cancelled",
    date: "8 May 2026",
    orderId: "ABC-111222333",
    productName: "Velarro Limited Compendium",
    price: "₹20.00",
    image: "/userDashboard/order.png",
  },
];

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] =
    useState<"All" | OrderStatus>("All");

  const filteredOrders =
    activeFilter === "All"
      ? orders
      : orders.filter((order) => order.status === activeFilter);

  return (
    <Container className="space-y-4 px-0 sm:px-4 md:px-6 lg:px-8 sm:space-y-6">
      {/* TITLE */}
      <H1 className="mb-2 text-lg sm:mb-4 sm:text-xl md:mb-6 md:text-2xl">
        Orders
      </H1>

      {/* FILTERS */}
      <div className="-mx-2 px-2 sm:mx-0 sm:px-0">
        <OrderFilters
          active={activeFilter}
          setActive={setActiveFilter}
        />
      </div>

      {/* ORDERS */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-3 sm:space-y-4">
          {filteredOrders.map((order, index) => (
            <OrderCard key={index} {...order} />
          ))}
        </div>
      ) : (
        <EmptyOrders />
      )}
    </Container>
  );
}