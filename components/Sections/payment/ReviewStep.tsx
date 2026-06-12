"use client";
import { useState } from "react";
import Image from "next/image";
// import OrderSummary from "./OrderSummary";    
import { useCheckout } from "@/app/lib/checkout-context";
import { cartItems, shipping, subtotal, tax, total } from "@/app/lib/data";
import Container from "@/components/Layouts/Container";

type Props = { onPlaceOrder: () => void; onEditShipping: () => void; onEditPayment: () => void };

export default function ReviewStep({ onPlaceOrder, onEditShipping, onEditPayment }: Props) {
  const { shippingAddress, paymentInfo } = useCheckout();
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  const handlePlace = () => {
    if (!agreed) { setAgreeError(true); return; }
    onPlaceOrder();
  };

  const getPaymentSummary = () => {
    if (!paymentInfo) return "No payment selected";
    switch (paymentInfo.method) {
      case "card": {
        const last4 = paymentInfo.cardNumber?.replace(/\s/g, "").slice(-4);
        return `Visa ending in ${last4 || "****"}`;
      }
      case "paytm": return `Paytm — ${paymentInfo.paytmPhone || ""}`;
      case "bank": return `Bank Transfer — ${paymentInfo.ifsc || ""}`;
      case "wallet": return "Wallet Balance ($240.50)";
      default: return "Payment selected";
    }
  };

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold text-[#2d2416] mb-6">Review Your Order</h1>

        {/* Shipping */}
        <div className="bg-white border border-[#e8e0d0] rounded-2xl p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
              </svg>
              <h3 className="font-semibold text-[#2d2416] text-sm">Shipping Address</h3>
            </div>
            <button
              onClick={onEditShipping}
              className="flex items-center gap-1 text-xs text-[#c9a84c] font-semibold hover:text-[#b8973b] transition-colors"
            >
              Edit
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
          </div>
          <p className="text-sm font-medium text-[#2d2416]">{shippingAddress?.fullName}</p>
          <p className="text-sm text-[#9a8a6a] mt-0.5">{shippingAddress?.address}</p>
          {shippingAddress?.city && (
            <p className="text-sm text-[#9a8a6a]">{shippingAddress.city}, {shippingAddress.state}</p>
          )}
        </div>

        {/* Payment */}
        <div className="bg-white border border-[#e8e0d0] rounded-2xl p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <h3 className="font-semibold text-[#2d2416] text-sm">Payment Method</h3>
            </div>
            <button
              onClick={onEditPayment}
              className="flex items-center gap-1 text-xs text-[#c9a84c] font-semibold hover:text-[#b8973b] transition-colors"
            >
              Edit
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-[#1a1f71] text-neutral-1 px-1.5 py-0.5 rounded">VISA</span>
            <p className="text-sm text-[#2d2416]">{getPaymentSummary()}</p>
          </div>
        </div>

        {/* Items */}
        <div className="bg-white border border-[#e8e0d0] rounded-2xl p-5 mb-4">
          <h3 className="font-semibold text-[#2d2416] text-sm mb-4">Items ({cartItems.length})</h3>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border border-[#f0ebe0] rounded-xl p-3">
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#f0ebe0]">
                  <Image src={item.image} alt={item.name} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#2d2416]">{item.name}</p>
                  <p className="text-xs text-[#9a8a6a] mt-0.5">Quantity: {item.qty}</p>
                  <p className="text-xs text-[#9a8a6a]">₹{(item.price / item.qty).toFixed(2)} each</p>
                </div>
                <span className="text-sm font-bold text-[#2d2416]">₹{item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className={`border rounded-xl p-4 flex gap-3 items-start transition-colors ${agreeError ? "border-red-300 bg-red-50" : "border-[#e8e0d0] bg-white"}`}>
          <button
            onClick={() => { setAgreed(!agreed); setAgreeError(false); }}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all cursor-pointer
              ${agreed ? "border-[#c9a84c] bg-[#c9a84c]" : "border-[#c4b896]"}`}
          >
            {agreed && (
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            )}
          </button>
          <p className="text-sm text-[#5a4a2a]">
            I agree to the{" "}
            <button className="text-[#c9a84c] font-semibold hover:underline">Terms & Conditions</button>
            {" "}and the{" "}
            <button className="text-[#c9a84c] font-semibold hover:underline">Privacy Policy</button>
            . I understand that my order will be processed immediately.
          </p>
        </div>
        {agreeError && <p className="text-xs text-red-500 mt-1 ml-1">Please agree to the terms to continue</p>}
      </div>

      {/* Right */}
      <div>
        <div className="bg-white rounded-2xl border border-[#e8e0d0] p-5 mt-0 md:mt-15">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#f0ebe0]">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <h3 className="font-semibold text-[#2d2416] text-sm tracking-wide">Order Summary</h3>
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex justify-between text-xs text-[#9a8a6a]">
              <span>Subtotal ({cartItems.length} items)</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-[#9a8a6a]">
              <span>Shipping</span><span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-[#9a8a6a]">
              <span>Estimated Tax</span><span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-base text-[#2d2416] mt-2 pt-2 border-t border-[#f0ebe0]">
              <span>Total</span><span className="text-[#c9a84c]">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlace}
            className="w-full py-3 bg-[#c9a84c] text-neutral-1 rounded-md font-bold text-sm hover:bg-[#b8973b] transition-colors shadow-sm cursor-pointer"
          >
            Place Order
          </button>

          <div className="mt-4 bg-[#fdf9f0] rounded-xl p-3 flex gap-2 items-start">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
            </svg>
            <div>
              <p className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-wider">Estimated Delivery</p>
              <p className="text-xs font-medium text-[#2d2416] mt-0.5">March 21 - March 25, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
