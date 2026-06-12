"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Bell, Download } from "lucide-react";
import StatCard from "../components/StatCard";


type Order = {
  id: number;
  orderId: string;
  customer: string;
  fees: number;
  status: "Shipped" | "Picking" | "Processing" | "On Hold";
  time: string;
};

const orders: Order[] = [
  { id: 1, orderId: "#ORD-8246", customer: "Global Dist. Ltd", fees: 12, status: "Picking", time: "10 min ago" },
  { id: 2, orderId: "#ORD-8247", customer: "Northstar Inc.", fees: 2, status: "Processing", time: "2 min ago" },
  { id: 3, orderId: "#ORD-8248", customer: "Metro Wholesale", fees: 8, status: "Shipped", time: "12 min ago" },
  { id: 4, orderId: "#ORD-8249", customer: "Pacific Goods", fees: 1, status: "On Hold", time: "15 min ago" },
  { id: 5, orderId: "#ORD-8250", customer: "Clearview corp", fees: 6, status: "Shipped", time: "20 min ago" },
];

export default function Page() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [showExport, setShowExport] = useState(false)

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Shipped":
        return "bg-[#99E4B5] text-[#188C43]";
      case "Picking":
        return "bg-[#FFF3E0] text-[#ED6C02]";
      case "Processing":
        return "bg-[#A5C6FB] text-[#2A5CAF]";
      case "On Hold":
        return "bg-[#F8A9A9] text-[#AA3030]";
      default:
        return "";
    }
  };

  return (
    <div className="">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[28px] font-semibold">Earning Dashboard</h1>

        <div className="flex items-center gap-4">
          <button className="px-2 py-1 border border-[#D1AD6D] rounded-lg bg-[#F5F5F5] cursor-pointer">
            <Bell size={20} className="text-[#D1AD6D]" />
          </button>

          <div className="relative">
            <button 
            onClick={()=> setShowExport(!showExport)}
            className="flex items-center gap-2 border border-[#D1AD6D] px-4 py-1 rounded-lg bg-[#F5F5F5] text-[#D1AD6D] cursor-pointer">
              <span className="text-black">Export</span>
              <Download size={16} />
            </button>

            {/* static dropdown */}
            {showExport && <div className="absolute right-0 mt-2 w-24 bg-white shadow rounded">
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">PDF</p>
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">CSV</p>
            </div>}
          </div>
        </div>
      </div>

      {/* ✅ STAT CARDS */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Current Month Earnings"
          value="12,450.00"
          sub="+14 this week"
          path="/svgs/icion4.svg"
          cl="text-[#22C55E]"
        />
        <StatCard
          title="Total Sales"
          value="482"
          sub="Active listings 24"
          path="/svgs/icion2.svg"
          cl="text-[#22C55E]"
        />
        <StatCard
          title="Pending Settlements"
          value="3,105.50"
          sub="Processing (Next payout: oct25)"
          path="/svgs/icion3.svg"
          cl="text-[#EF4444]"
        />
      </div>

      {/* ✅ EARNING TREND */}
      <h2 className="text-[22px] font-semibold mb-4">Earning Trend</h2>

      <div className="border border-[#D1AD6D] rounded-xl p-6 mb-10 bg-[#FFFFFF]">
        <p className="text-[16px] mb-2">
          Current Stock: <span className="font-semibold">182,340 units</span>
        </p>
        <p className="text-sm text-gray-500 mb-6">↑ -1.2% vs last period</p>

        {/* Fake chart UI (matches design spacing) */}
        <div className="h-[250px] flex items-end justify-between text-sm text-gray-500">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-2 h-[120px] bg-[#C59949]/30 rounded-full"></div>
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ SETTLEMENT HISTORY */}
      <h2 className="text-[22px] font-semibold mb-4">
        Settlement History
      </h2>

      <div className="bg-white">
        <table className="w-full text-left">
          <thead className="bg-[#D1AD6D] text-black">
            <tr>
              <th className="p-4">Period</th>
              <th className="p-4">Orders</th>
              <th className="p-4">Fees</th>
              <th className="p-4">Refunds</th>
              <th className="p-4">Net Amount</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* SUMMARY ROW */}
            <tr className="border-t text-[#595959] border-[#BFBFBF]">
              <td className="p-4">August 2024</td>
              <td className="p-4">14800.00</td>
              <td className="p-4">1850</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded bg-[#99E4B5] text-[#188C43]">
                  Shipped
                </span>
              </td>
              <td className="p-4">2 min ago</td>
              <td className="p-4 text-right text-[#188C43]">Normal</td>
            </tr>

            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t text-[#595959] relative border-[#BFBFBF]"
              >
                <td className="p-4">{order.orderId}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.fees}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">{order.time}</td>

                <td className="p-4 text-right relative">
                  <button
                    onClick={() => toggleDropdown(order.id)}
                    className="p-2 hover:bg-gray-200 rounded"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openDropdown === order.id && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-4 mt-2 w-24 bg-white shadow rounded z-50 text-left"
                    >
                      <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-green-600">
                        Normal
                      </p>
                      <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-yellow-600">
                        Urgent
                      </p>
                      <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                        High
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}