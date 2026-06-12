"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// import { Order, FilterTab, OrderTimeFilter } from "@/types/order";
import FilterBar from "./FilterBar";
import OrderCard from "./OrderCard";
import { FilterTab, Order, OrderTimeFilter } from "../../../data/order";
import Container from "@/components/Layouts/Container";

// ─── Mock Data ────────────────────────────────────────────────────────────────
// TODO: Replace with API call → GET /orders
const MOCK_ORDERS: Order[] = [
  {
    id: "TXVD52364512A",
    name: "Velarro Limited Compendium",
    qty: 1,
    size: 10,
    price: 45.0,
    status: "delivered",
    statusLabel: "Delivered on Jan 18",
    daysAgo: 82,
    imageUrl: "/images/orderbk.png",
  },
  {
    id: "TXVD52364512B",
    name: "Velarro Limited Compendium",
    qty: 1,
    size: 10,
    price: 20.0,
    status: "delivered",
    statusLabel: "Delivered on Jan 04",
    daysAgo: 96,
    imageUrl: "/images/orderbk.png",
  },
  {
    id: "TXVD52364512D",
    name: "Velarro Limited Compendium",
    qty: 1,
    size: 10,
    price: 30.0,
    status: "shipped",
    statusLabel: "On the way",
    daysAgo: 5,
    imageUrl: "/images/orderbk.png",
  },
  {
    id: "TXVD52364512E",
    name: "Velarro Limited Compendium",
    qty: 1,
    size: 10,
    price: 50.0,
    status: "cancelled",
    statusLabel: "Cancelled",
    daysAgo: 12,
    imageUrl: "/images/orderbk.png",
  },
];

// ─── Filter helpers ───────────────────────────────────────────────────────────
const TAB_STATUS_MAP: Record<FilterTab, string[]> = {
  all: [],
  "on-way": ["placed", "packed", "shipped", "out_for_delivery", "delayed"],
  delivered: ["delivered"],
  cancelled: ["cancelled"],
  refund: ["refund"],
};

export default function OrderHistory() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [search, setSearch] = useState("");
  const [timeFilter, setTimeFilter] = useState<OrderTimeFilter>("");

  const filtered = useMemo(() => {
    return MOCK_ORDERS.filter((order) => {
      // Tab filter
      const allowed = TAB_STATUS_MAP[activeTab];
      if (allowed.length > 0 && !allowed.includes(order.status)) return false;

      // Time filter
      if (timeFilter && order.daysAgo > parseInt(timeFilter)) return false;

      // Search filter
      if (
        search &&
        !order.name.toLowerCase().includes(search.toLowerCase()) &&
        !order.id.toLowerCase().includes(search.toLowerCase())
      )
        return false;

      return true;
    });
  }, [activeTab, search, timeFilter]);

  const handleOrderClick = (id: string) => {
    router.push(`/order/${id}`);
  };

  return (
    <Container className="flex-1 w-full pt-10 pb-16 mt-5 md:mt-12">
      <h1 className="text-[22px] font-medium mb-6">Order History</h1>

      <FilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchValue={search}
        onSearchChange={setSearch}
        timeFilter={timeFilter}
        onTimeFilterChange={setTimeFilter}
      />

      {/* Order List */}
      <div>
        {filtered.length === 0 ? (
          <p className="text-center text-[14px] text-secondary-300 py-16">
            No orders found.
          </p>
        ) : (
          filtered.map((order) => (
            <OrderCard key={order.id} order={order} onClick={handleOrderClick} />
          ))
        )}
      </div>
    </Container>
  );
}
