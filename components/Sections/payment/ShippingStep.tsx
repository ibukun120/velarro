"use client";
import { useState } from "react";
import OrderSummary from "./OrderSummary";
import { Address, useCheckout } from "@/app/lib/checkout-context";
import Container from "@/components/Layouts/Container";

type Props = { onNext: () => void };

export default function ShippingStep({ onNext }: Props) {
  const { savedAddresses, setShippingAddress } = useCheckout();
  const [selectedSaved, setSelectedSaved] = useState<string>(
    savedAddresses[0]?.id || "",
  );
  const [deliveryInstructions, setDeliveryInstructions] = useState("");

  const selectSaved = (addr: Address & { id: string }) => {
    setSelectedSaved(addr.id);
  };

  const handleContinue = () => {
    const addr = savedAddresses.find((a) => a.id === selectedSaved);
    if (addr) {
      setShippingAddress(addr);
      onNext();
    }
  };

  return (
    <Container className="flex flex-col max-w-5xl mx-auto pb-12 pt-6">
      <h1 className="text-[28px] font-bold text-[#1A1A1A] mb-6 font-['Outfit',sans-serif] tracking-wide">
        Shipping Address
      </h1>

      {/* Main Addresses Container */}
      <div className="border border-[#D8BB85] rounded-xl p-6 bg-white mb-8">
        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {savedAddresses.map((addr) => {
            const isSelected = selectedSaved === addr.id;
            return (
              <div
                key={addr.id}
                onClick={() => selectSaved(addr)}
                className="relative flex items-start gap-4 cursor-pointer"
              >
                {/* Custom Radio */}
                <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                  <div
                    className={`w-[22px] h-[22px] rounded-full border-[3px] flex items-center justify-center transition-all ${
                      isSelected ? "border-neutral-6" : "border-neutral-6"
                    }`}
                  >
                    {
                      isSelected &&
                    <div
                      className={`w-[10px] h-[10px] rounded-full bg-primary-500`}
                    />
                    }
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <p
                      className={`font-semibold text-[15px] ${
                        isSelected ? "text-[#1A1A1A]" : "text-[#737373]"
                      }`}
                    >
                      {isSelected ? `Delivering to ${addr.label}` : addr.label}
                    </p>
                    <button
                      className="text-xs font-semibold text-[#C59949] hover:text-[#B8973B] hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Edit function can be added later
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-[13px] text-[#737373] flex flex-col gap-[3px] mt-2 leading-snug">
                    <p>{addr.address}</p>
                    <p>{addr.country}</p>
                    <p>
                      Email:{" "}
                      <span className="font-medium">
                        {addr.email || "abc@gmail.com"}
                      </span>
                    </p>
                    <p>
                      Phone: <span className="font-medium">{addr.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider line matching image */}
        <div className="w-full h-px bg-[#D8BB85] mt-8 mb-6 opacity-40"></div>

        {/* Add Delivery Address */}
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#C59949] text-[15px]">
            Add delivery address
          </p>
          <input
            value={deliveryInstructions}
            onChange={(e) => setDeliveryInstructions(e.target.value)}
            placeholder="Add deleivery instructions"
            className="w-full sm:w-[320px] border border-[#D8BB85] rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#C59949] text-[#1A1A1A] placeholder-[#D8D3C5] transition-colors"
          />
        </div>
      </div>

      {/* Order Summary Component */}
      <div className="mb-8">
        <OrderSummary />
      </div>

      {/* Button Row exactly like image */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <button className="w-full sm:w-1/2 py-4 text-base font-semibold text-primary-500 bg-white border border-neutral-6 rounded-lg hover:bg-[#FDF9F0] transition-colors cursor-pointer text-center">
          Back to address
        </button>
        <button
          onClick={handleContinue}
          className="w-full sm:w-1/2 py-4 bg-primary-500 text-neutral-1 rounded-lg text-base font-bold hover:bg-[#C4A46A] transition-colors shadow-sm cursor-pointer text-center"
        >
          Continue to payment
        </button>
      </div>

      {/* Money back / Guarantee Section */}
      {/* <div className="mt-8 border-2 border-dashed border-neutral-6 rounded-xl p-4 flex flex-col items-center justify-center ">
        <svg
          width="20"
          height="30"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70 10 L125 37 L125 75 Q125 110 70 130 Q15 110 15 75 L15 37 Z"
            fill="none"
            stroke="#C4972A"
            strokeWidth="18"
            strokeLinejoin="round"
          />
          <polyline
            points="48,72 63,87 92,55"
            fill="none"
            stroke="#C4972A"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-xs font-medium text-neutral-8 text-center">
          30-day money back guarantee and 1-year warranty on all
        </p>
      </div> */}
    </Container>
  );
}