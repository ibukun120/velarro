"use client";

import Button from "@/components/ui/Buttons/CommonButtons";
import { Text } from "@/components/ui/Typography/Typography";
import Image from "next/image";

const orders = [
  {
    id: 1,
    name: "Velarro Limited",
    qty: 1,
    size: 10,
    price: "₹45.00",
    image: "/userDashboard/order.png",
  },
  {
    id: 2,
    name: "Velarro Reserve",
    qty: 2,
    size: 8,
    price: "₹60.00",
    image: "/userDashboard/order.png",
  },
  {
    id: 3,
    name: "Velarro Classic Edition",
    qty: 1,
    size: 9,
    price: "₹50.00",
    image: "/userDashboard/order.png",
  },
  {
    id: 4,
    name: "Velarro Premium",
    qty: 3,
    size: 7,
    price: "₹75.00",
    image: "/userDashboard/order.png",
  },
];

export default function RecentOrders() {
  return (
    <div className="relative bg-neutral-1 rounded-lg border border-neutral-6 py-2 px-4 flex flex-col h-[210px]">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <Text className="font-semibold text-neutral-13">Recent orders</Text>

        <Button
          variant="primary"
          className="px-4 py-1 text-sm bg-primary-400 hover:bg-primary-600 flex items-center gap-2"
        >
          VIEW
          <span className="text-lg">›</span>
        </Button>
      </div>

      {/* SUBTEXT */}
      <Text className="text-sm text-neutral-13 ">
        Check your recent order placed
      </Text>

      {/* SCROLL AREA */}
      <div className="flex flex-col gap-2 mt-3 flex-1 overflow-y-auto pr-1">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between bg-neutral-1 rounded-lg p-1"
          >
            <div className="flex  items-center gap-3">
              <Image
                src={order.image}
                alt={order.name}
                width={50}
                height={50}
                className="rounded-md object-cover"
              />

              <div className="flex flex-col">
                <Text className="">
                  {order.name}
                </Text>
                <Text variant="sm" className=" text-neutral-8">
                  Qty: {order.qty} · Size: {order.size}
                </Text>
              </div>
            </div>

            <Text className="text-xs font-semibold text-neutral-8">
              {order.price}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
