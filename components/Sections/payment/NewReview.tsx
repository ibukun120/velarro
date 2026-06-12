"use client";

import Container from "@/components/Layouts/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const addresses = [
  {
    id: 1,
    name: "Delivering to John",
    line1: "H no.- 12, Sector- 42, Rohini, Delhi 12202",
    line2: "India",
    email: "abc@gmail.com",
    phone: "+91 78341 XXXXX",
  },
  {
    id: 2,
    name: "Mary",
    line1: "129 Cross St, Milford, DE 19963,",
    line2: "United States",
    email: "abc@gmail.com",
    phone: "+91 78341 XXXXX",
  },
  {
    id: 3,
    name: "Anna",
    line1: "138 Naseby Rd, Ilford, IG5 0NN,",
    line2: "United Kingdom",
    email: "abc@gmail.com",
    phone: "+91 78341 XXXXX",
  },
];

const orderItems = [
  {
    id: 1,
    name: "Velarro Limited Compendium",
    quantity: 9,
    priceEach: 45,
    total: 405,
    image: "/images/cigat-img-1.jpg",
  },
  {
    id: 2,
    name: "Velarro Opus Magnifique",
    quantity: 9,
    priceEach: 10,
    total: 90,
    image: "/images/cigar-img-2.jpg",
  },
];

export default function ReviewOrder() {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [promoCode, setPromoCode] = useState("");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [agreed, setAgreed] = useState(false);
  //   const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const router = useRouter();

  const handlePlaceOrder = () => {
    if (!agreed) {
      setAgreeError(true);
      return;
    }

    router.push("/payment/success");
  };

  return (
    <Container className="w-full md:!px-20 py-8">
      <h1 className="text-2xl font-bold text-black mb-6">Review Your Order</h1>

      {/* Order Summary */}
      <div className="bg-white border border-primary-300 rounded-lg mb-4 overflow-hidden">
        <div className="px-5 py-5 border-b border-secondary-400 font-bold text-neutral-8">
          Order Summary
        </div>
        <div className="px-5 py-5 space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Items</span>
            <span className="text-neutral-8">$495.00</span>
          </div>
          <div className="flex justify-between text-[14px] text-neutral-8 border-gray-100">
            <span>Shipping & handling</span>
            <span className="flex items-center gap-2">
              <span className="line-through text-green-600">$10.49</span>
              <span className="text-green-600 text-xs font-medium">FREE</span>
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 border-gray-100">
            <span>Estimated tax to be collected</span>
            <span className="text-neutral-8">₹32.77</span>
          </div>
          <div className="flex justify-between items-center border-t border-t-primary-300 border-gray-100 pt-3">
            <span className="font-extrabold text-gray-900 text-[16px]">
              Order total
            </span>
            <span className="text-[24px] font-semibold text-primary-500">
              ₹527.77
            </span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white border border-primary-300 rounded-lg mb-4 overflow-hidden">
        <div className="px-5 pt-4 font-bold text-neutral-13 text-[18px]">
          Payment Method
        </div>
        <div className="px-5 py-4 space-y-3">
          <button className="text-[#B87B2F] text-[16px] cursor-pointer hover:underline font-bold">
            Change payment method
          </button>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Add promo code"
            className="w-50 block border border-[#B87B2F] rounded-md px-3 py-2 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-[#B87B2F] placeholder:text-primary-200"
          />
        </div>
      </div>

      {/* Delivery Addresses */}
      <div className="bg-white border border-primary-300 rounded-lg py-3 mb-4 overflow-hidden">
        <div className="px-5 py-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {addresses.map((addr) => (
              <div key={addr.id} className="relative">
                <div className="flex items-start gap-2">
                  {/* Radio */}
                  <button
                    onClick={() => setSelectedAddress(addr.id)}
                    className={`mt-1 w-4 h-4 rounded-full border-4 flex-shrink-0 transition-colors ${
                      selectedAddress === addr.id
                        ? "border-neutral-6 bg-white"
                        : "border-primary-100 bg-white"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[18px] font-bold text-neutral-13 pr-8">
                      {addr.name}
                    </p>
                    <p className="text-[14px] text-neutral-8 font-light mt-1 leading-relaxed">
                      {addr.line1}
                      <br />
                      {addr.line2}
                      <br />
                      Email: {addr.email}
                      <br />
                      Phone: {addr.phone}
                    </p>
                  </div>
                </div>
                <button className="absolute top-1 right-0 md:right-32 font-bold text-[#B87B2F] text-xs hover:underline">
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* Add address */}
          <div className="border-t border-primary-300 pt-2">
            <button className=" text-primary-500 text-[18px] font-bold hover:underline">
              Add delivery address
            </button>
          </div>

          {/* Delivery instructions */}
          <input
            type="text"
            value={deliveryNote}
            onChange={(e) => setDeliveryNote(e.target.value)}
            placeholder="Add delivery instructions"
            className="w-full md:w-[380px] border border-primary-300 rounded-md px-3 py-2 text-[16px] text-primary-500 outline-none focus:ring-1 focus:ring-primary-500 placeholder:text-primary-200"
          />
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white border border-primary-300 rounded-lg mb-4 overflow-hidden">
        <div className="px-5 py-4 divide-y divide-gray-100">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              {/* Image placeholder — replace with Next.js <Image /> when you have real images */}

              <div className="w-14 h-14 rounded-lg bg-amber-100 flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-neutral-8">{item.name}</p>
                <p className="text-xs text-neutral-8 mt-0.5">
                  Quantity: {item.quantity} &nbsp; &nbsp; <br />
                  <span className="text-[14px] font-bold">
                    ₹{item.priceEach}.00 each
                  </span>
                </p>
              </div>
              <span className="text-[14px] font-bold text-neutral-13 flex-shrink-0">
                ₹{item.total}.00
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-transparent border border-primary-300 rounded-lg mb-4 px-5 py-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 accent-primary-500 flex-shrink-0"
          />
          <span className="text-sm text-neutral-13 leading-relaxed">
            I agree to the{" "}
            <span
              onClick={() => router.push("/termsandconditions")}
              className="text-primary-500 font-bold hover:underline cursor-pointer"
            >
              Terms & Conditions
            </span>{" "}
            and the{" "}
            <span
              onClick={() => router.push("/privacy-policy")}
              className="text-primary-500 font-bold hover:underline cursor-pointer"
            >
              Privacy Policy
            </span>
            . I understand that my order will be processed immediately.
          </span>
        </label>
      </div>
      <h1></h1>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-primary-500 hover:bg-primary-400 text-neutral-1 font-medium py-4 rounded-lg transition-all duration-500 text-base cursor-pointer"
      >
        Place Order
      </button>
    </Container>
  );
}
