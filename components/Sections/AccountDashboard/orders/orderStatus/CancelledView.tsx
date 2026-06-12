"use client";

import { useState } from "react";

import Container from "@/components/Layouts/Container";

import OrderHeader from "./OrderHeader";
import OrderItemCard from "../OrderItemCard";
import OrderSummary from "../OrderSummary";
import TimelineDrawer from "../TimelineDrawer";

import { Search } from "lucide-react";
import { FiLink } from "react-icons/fi";

import CancelOrderPopup from "./CancelOrderPopup";
import CancelSuccessPopup from "./CancelSuccessPopup";
import ChatModal from "../chatbot/ChatModal";

export default function CancelledView() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [openCancelPopup, setOpenCancelPopup] =
    useState(false);

  const [openSuccessPopup, setOpenSuccessPopup] =
    useState(false);

  return (
    <Container className="py-4 md:py-6 max-w-5xl">
      {/* HEADER */}
      <OrderHeader
        variant="cancelled"
        onOpen={() => setOpenDrawer(true)}
      />

      <div className="space-y-3 mt-4">
        {/* DATE */}
        <p className="text-[12px] text-neutral-6 px-1">
          3 May 2026
        </p>

        {/* PRODUCT CARD */}
        <OrderItemCard
          title="Velarro Limited Compendium"
          wrapper="Corojo 99 Maduro"
          binder="Criollo 98"
          filler="Criollo + Piloto Cubano"
          quantity={1}
          price="₹30.00"
          discounted={false}
          image="/userDashboard/order.png"
        />

        {/* ORDER SUMMARY */}
        <OrderSummary
          variant="cancelled"
          total="₹83.75"
          subtotal="₹75.00"
          shipping="₹5.00"
          discount="₹15.00"
          taxableValue="₹75.00"
          tax="₹3.75"
          itemsCount={1}
        />

        {/* VIEW INVOICE */}
        <button
          className="
            w-full
            h-[38px]
            rounded-[4px]
            border
            border-[#D8B16A]
            bg-[#EFE1C4]
            text-[#8B6A2F]
            text-[13px]
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            hover:bg-[#E8D4AB]
          "
        >
          <FiLink className="text-primary-500 text-sm" />
          View Invoice
        </button>

        {/* PAYMENT METHOD */}
        <div
          className="
            bg-[#F7F3EA]
            border
            border-[#D8B16A]
            rounded-md
            py-5
            px-4
            text-center
          "
        >
          <p className="text-[13px] text-[#6D5A37]">
            Payment Method
          </p>

          <div className="w-[120px] h-[1px] bg-[#D8B16A] mx-auto my-2" />

          <p className="text-[13px] text-[#444]">
            Visa ending -1234
          </p>
        </div>

        {/* SHIPPING ADDRESS */}
        <div className="bg-neutral-1 rounded-lg p-4 border border-[#DDD6CC]">
          <h3 className="text-[14px] font-semibold text-[#222] mb-3">
            Shipping Address
          </h3>

          <div className="space-y-1 text-[13px] text-[#666]">
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

        {/* CANCEL ORDER BUTTON */}
        <button
          onClick={() => setOpenCancelPopup(true)}
          className="
            w-full
            h-[42px]
            rounded-[6px]
            border
            border-[#D8B16A]
            bg-[#EFE1C4]
            text-[#8B6A2F]
            text-[14px]
            font-medium
            transition-all
            duration-300
            hover:bg-[#E8D4AB]
          "
        >
          Cancel Order
        </button>
      </div>

      {/* TIMELINE DRAWER */}
      <TimelineDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="cancelled"
      />

      {/* CANCEL POPUP */}
      <CancelOrderPopup
        open={openCancelPopup}
        onClose={() => setOpenCancelPopup(false)}
        onConfirm={() => {
          setOpenCancelPopup(false);

          setTimeout(() => {
            setOpenSuccessPopup(true);
          }, 200);
        }}
      />

      {/* SUCCESS POPUP */}
      <CancelSuccessPopup
        open={openSuccessPopup}
        onClose={() =>
          setOpenSuccessPopup(false)
        }
      />
      <ChatModal
        open={openChat}
        onClose={() => setOpenChat(false)}
      />
    </Container>
  );
}