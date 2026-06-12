"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { Order, FilterTab, OrderTimeFilter, TrackingStage } from "@/types/order";
import FilterBar from "./FilterBar";
import OrderCard from "./OrderCard";
import TrackingSidebar from "./TrackingSidebar";
import { FilterTab, Order, OrderTimeFilter, TrackingStage } from "../../../data/order";

// ─── Mock Data ────────────────────────────────────────────────────────────────
// TODO: Replace with API call → GET /orders/:id
const MOCK_ORDER: Order = {
  id: "TXVD52364512D",
  name: "Velarro Limited Compendium",
  qty: 1,
  size: 10,
  price: 30.0,
  status: "shipped",
  statusLabel: "On the way",
  daysAgo: 5,
  imageUrl: "/images/orderbk.png",
  shippingAddress: {
    label: "Work",
    name: "John Smith",
    address: "123 Maple St, Springfield, IL 62704",
    phone: "+1 (555) 012-3456",
  },
  deliveryAddress: {
    label: "Home",
    name: "John Smith",
    address: "123 Maple St, Springfield, IL 62704",
    phone: "+1 (555) 021-4323",
  },
};

// TODO: Replace with API call → GET /orders/:id/tracking
const MOCK_TRACKING: TrackingStage[] = [
  {
    stage: "Order Confirmed",
    date: "Feb 10, 2026",
    events: [
      { text: "Your Order has been placed.", time: "Feb 10, 2026 - 2:10am" },
      { text: "Seller has processes you order.", time: "Feb 10, 2026 - 6:10am" },
      { text: "Your item has been picked up by delivery partner", time: "Feb 10, 2026 - 11:10am" },
    ],
  },
  {
    stage: "Shipped",
    date: "Feb 11, 2026",
    events: [
      { text: "Logistics - XVVHFGFJGHFJFH" },
      { text: "Your item has been shipped", time: "Feb 10, 2026 - 8:10pm" },
      { text: "Your item has been received in the hub nearest to you" },
    ],
  },
  {
    stage: "Out for Delivery",
    date: "Feb 18, 2026",
    events: [
      { text: "Your item is out for delivery", time: "Feb 18, 2026 - 12:10pm" },
    ],
  },
  {
    stage: "Delivered",
    date: "Feb 18, 2026",
    events: [
      { text: "Your item has been delivered", time: "Feb 18, 2026 - 9:10pm" },
    ],
  },
];

// ─── Stepper config ───────────────────────────────────────────────────────────
const STEPS = [
  { key: "placed",            label: "Ordered" },
  { key: "shipped",           label: "Shipped" },
  { key: "out_for_delivery",  label: "Out for Delivery" },
  { key: "delivered",         label: "Delivered" },
];

const STEP_ORDER = ["placed", "packed", "shipped", "out_for_delivery", "delivered"];

function getStepState(stepKey: string, currentStatus: string): "active" | "done" | "pending" {
  if (currentStatus === "cancelled") return "pending";
  const currentIdx = STEP_ORDER.indexOf(currentStatus);
  const stepIdx = STEP_ORDER.indexOf(stepKey);
  if (stepIdx < currentIdx) return "done";
  if (stepIdx === currentIdx) return "active";
  return "pending";
}

interface StepDates {
  placed?: string;
  shipped?: string;
  out_for_delivery?: string;
  delivered?: string;
}

interface OrderDetailProps {
  orderId?: string; // passed from page params; uses mock if undefined
  stepDates?: StepDates;
}
// there orderId param is optional because we can use the same component for both the order list (with mock data) and the order detail page (with real data fetched by id). When orderId is provided, we fetch real data; otherwise, we use mock data for development and testing. it was removed beacuse it was causing hydration mismatch due to the orderId being only available on client side. We can reintroduce it inside the component after validating the orderId param and ensuring it's only used on client side.
export default function OrderDetail({ stepDates }: OrderDetailProps) {
  const router = useRouter();

  // TODO: When API is ready, fetch order by orderId
  const order = MOCK_ORDER;
  const tracking = MOCK_TRACKING;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<"shipping" | "delivery">("shipping");

  // FilterBar state — kept local, can be lifted if needed
  const [activeTab, setActiveTab] = useState<FilterTab>("on-way");
  const [search, setSearch] = useState("");
  const [timeFilter, setTimeFilter] = useState<OrderTimeFilter>("");

  const isCancelled = order.status === "cancelled";

  return (
    <>
      <div className="flex-1 w-full px-4 md:px-12 py-16 mt-6">
        <FilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          searchValue={search}
          onSearchChange={setSearch}
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
        />

        <h1 className="text-[22px] font-medium mb-3">Order Items</h1>
        <p className="text-[13px] text-secondary-300 mb-7">
          Order ID : <span className="text-[#1A1A1A] font-medium">{order.id}</span>
        </p>

        {/* See all updates link */}
        <div className="flex justify-end mb-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-1 text-[13px] text-[#1565C0] hover:underline cursor-pointer"
          >
            See all updates
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Stepper */}
        {!isCancelled ? (
          <div className="flex items-start mb-8">
            {STEPS.map((step, idx) => {
              const state = getStepState(step.key, order.status);
              const date = stepDates?.[step.key as keyof StepDates];

              return (
                <div key={step.key} className="flex-1 flex flex-col items-center relative">
                  {/* Connector line */}
                  {idx < STEPS.length - 1 && (
                    <div className="absolute top-[18px] left-1/2 right-[-50%] h-[1px] bg-[#E5E2DA] z-0" />
                  )}

                  {/* Circle */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium z-10 relative ${
                      state === "active" 
                        ? "bg-primary-100  text-neutral-1"
                        : state === "done"
                        ? "bg-primary-600 text-neutral-1"
                        : "bg-primary-100 text-[#aaa]"
                    }`}
                  >
                    {state === "done" ? "✓" : state === "active" ? idx + 1 : ""}
                  </div>

                  <p className="text-[12px] font-medium mt-2 text-center">{step.label}</p>
                  {date ? (
                    <p className="text-[11px] text-secondary-300 mt-0.5">{date}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          /* Cancelled state */
          <div className="flex items-center gap-2 mb-8 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <p className="text-[13px] text-red-600 font-medium">This order has been cancelled.</p>
          </div>
        )}

        {/* Order Card (non-clickable in detail view) */}
        <div className="pointer-events-none">
          <OrderCard order={order} onClick={() => {}} />
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
          {/* Shipping */}
          {order.shippingAddress && (
            <div>
              <p className="text-[11px] font-medium tracking-[0.08em] text-secondary-300 uppercase mb-3">
                Shipping Address
              </p>
              <div
                onClick={() => setSelectedAddress("shipping")}
                className={`border rounded-[10px] p-4 flex gap-3 items-start cursor-pointer transition-colors ${
                  selectedAddress === "shipping"
                    ? "border-[#C9A84C] bg-[#FDFBF5]"
                    : "border-[#E5E2DA]"
                }`}
              >
                <RadioDot selected={selectedAddress === "shipping"} />
                <div>
                  <p className="text-[13px] font-medium mb-1">
                    {order.shippingAddress.label} - {order.shippingAddress.name}
                  </p>
                  <p className="text-[12px] text-secondary-300 leading-relaxed">
                    {order.shippingAddress.address}
                    <br />
                    {order.shippingAddress.phone}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Delivery */}
          {order.deliveryAddress && (
            <div>
              <p className="text-[11px] font-medium tracking-[0.08em] text-secondary-300 uppercase mb-3">
                Delivery Address
              </p>
              <div
                onClick={() => setSelectedAddress("delivery")}
                className={`border rounded-[10px] p-4 flex gap-3 items-start cursor-pointer transition-colors ${
                  selectedAddress === "delivery"
                    ? "border-[#C9A84C] bg-[#FDFBF5]"
                    : "border-[#E5E2DA]"
                }`}
              >
                <RadioDot selected={selectedAddress === "delivery"} />
                <div>
                  <p className="text-[13px] font-medium mb-1">
                    {order.deliveryAddress.label} - {order.deliveryAddress.name}
                  </p>
                  <p className="text-[12px] text-secondary-300 leading-relaxed">
                    {order.deliveryAddress.address}
                    <br />
                    {order.deliveryAddress.phone}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <button
            // disabled
            className="border border-[#000000] rounded-lg py-3 text-[14px] text-[#000000] bg-white flex items-center justify-center gap-2 cursor-pointer opacity-70 hover:opacity-100"
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat with us
          </button>

          <button
            onClick={() => router.push("/order")}
            className="border-none rounded-lg py-3 text-[14px] font-medium text-neutral-1 bg-[#EF4444] hover:bg-[#B91C1C] transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Tracking Sidebar */}
      <TrackingSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        stages={tracking}
      />
    </>
  );
}

// ─── Radio Dot sub-component ──────────────────────────────────────────────────
function RadioDot({ selected }: { selected: boolean }) {
  return (
    <div
      className={`w-4 h-4 rounded-full border-[1.5px] flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
        selected ? "border-[#C9A84C]" : "border-[#E5E2DA]"
      }`}
    >
      {selected && (
        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
      )}
    </div>
  );
}
