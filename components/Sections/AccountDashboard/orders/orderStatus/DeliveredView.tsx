"use client";

import { useState } from "react";

import Container from "@/components/Layouts/Container";

import OrderHeader from "./OrderHeader";
import OrderItemCard from "../OrderItemCard";
import OrderSummary from "../OrderSummary";
import TimelineDrawer from "../TimelineDrawer";

import { Search } from "lucide-react";
import { FiLink } from "react-icons/fi";
import ChatModal from "../chatbot/ChatModal";

export default function DeliveredView() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  return (
    <Container className="py-4 md:py-6 max-w-5xl">
      {/* HEADER */}
      <OrderHeader variant="delivered" onOpen={() => setOpenDrawer(true)} />

      <div className="space-y-4 mt-4">
        {/* PRODUCT 1 */}
        <OrderItemCard
          title="Velarro Limited Compendium"
          wrapper="Corojo 99 Maduro"
          binder="Criollo 98"
          filler="Criollo + Piloto Cubano"
          quantity={1}
          price="₹20.00"
          discounted={true}
          image="/userDashboard/order.png"
        />

        {/* PRODUCT 2 */}
        <OrderItemCard
          title="Velarro Centennial Reserve"
          wrapper="Corojo 99 Maduro"
          binder="Criollo 98"
          filler="Criollo + Piloto Cubano"
          quantity={1}
          price="₹30.00"
          discounted={false}
          image="/userDashboard/order.png"
        />

        {/* PRODUCT 3 */}
        <OrderItemCard
          title="Velarro Signature No 1"
          wrapper="Habano 200"
          binder="Criollo 98"
          filler="Criollo + Piloto Cubano"
          quantity={1}
          price="₹25.00"
          discounted={true}
          image="/userDashboard/order.png"
        />

        {/* ORDER SUMMARY */}
        <OrderSummary
          variant="delivered"
          total="₹75.00"
          subtotal="₹75.00"
          shipping="₹5.00"
          discount="-₹15.00"
          taxableValue="₹75.00"
          tax="₹3.75"
          itemsCount={3}
        />

        {/* VIEW INVOICE */}
        <button
          className="
            w-full
            h-[44px]
            rounded-md
            border
            border-primary-300
            bg-primary-50
            text-primary-500
            text-[15px]
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            hover:bg-primary-100
          "
        >
          <FiLink className="text-primary-500 text-md" />
          View Invoice
        </button>

        {/* PAYMENT METHOD */}
        <div
          className="
            bg-primary-50
            border
            border-primary-300
            rounded-md
            py-6
            px-4
            text-center
          "
        >
          <p className="text-[15px] text-primary-500">Payment Method</p>

          <div className="w-[160px] h-[1px] bg-primary-300 mx-auto my-2" />

          <p className="text-[15px] text-neutral-8">Visa ending -1234</p>
        </div>

        {/* SHIPPING ADDRESS */}
        <div className="bg-neutral-1 rounded-lg p-4 border border-neutral-6">
          <h3 className="text-[15px] font-semibold text-neutral-9 mb-4">
            Shipped
          </h3>

          <div className="space-y-1 text-[14px] text-neutral-7">
            <p>Alex</p>
            <p>123 Maple St, Springfield, IL</p>
            <p>62704</p>
            <p>7985630123</p>
          </div>
        </div>

        {/* CHAT BUTTON */}
        <button
          onClick={() => setOpenChat(true)}
          className=" w-full h-[44px]
    rounded-[6px]
    border
    border-[#777]
    text-[#555]
    text-[15px]
    flex
    items-center
    justify-center
    gap-2
    bg-transparent
    hover:bg-[#ECE5D8]
    transition-all
    duration-300
  "
        >
          <Search size={16} />
          Chat with us
        </button>
      </div>

      {/* TIMELINE DRAWER */}
      <TimelineDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="delivered"
      />
      <ChatModal open={openChat} onClose={() => setOpenChat(false)} />
    </Container>
  );
}
