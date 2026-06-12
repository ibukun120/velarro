"use client";
import React, { createContext, useContext, useState } from "react";

export type Address = {
  id?: string;
  label?: string;
  fullName: string;
  address: string;
  apartment?: string;
  phone: string;
  email?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type PaymentInfo = {
  method: "card" | "paytm" | "bank" | "wallet";
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  nameOnCard?: string;
  paytmPhone?: string;
  accountNumber?: string;
  ifsc?: string;
};

type CheckoutState = {
  step: number;
  shippingAddress: Address | null;
  paymentInfo: PaymentInfo | null;
  promoCode: string;
  promoApplied: boolean;
  savedAddresses: (Address & { id: string; label: string })[];
  setStep: (step: number) => void;
  setShippingAddress: (addr: Address) => void;
  setPaymentInfo: (info: PaymentInfo) => void;
  setPromoCode: (code: string) => void;
  setPromoApplied: (v: boolean) => void;
  updateSavedAddress: (id: string, addr: Address) => void;
};

const CheckoutContext = createContext<CheckoutState | null>(null);

const initialSaved: (Address & { id: string; label: string })[] = [
  {
    id: "address-john",
    label: "John",
    fullName: "John",
    address: "H no.- 12, Sector- 42, Rohini, Delhi 12202",
    apartment: "",
    phone: "+91 78341 XXXXX",
    email: "abc@gmail.com",
    city: "Delhi",
    state: "Delhi",
    postalCode: "12202",
    country: "India",
  },
  {
    id: "address-mary",
    label: "Mary",
    fullName: "Mary",
    address: "129 Cross St, Milford, DE 19963",
    apartment: "",
    phone: "+91 78341 XXXXX",
    email: "abc@gmail.com",
    city: "Milford",
    state: "DE",
    postalCode: "19963",
    country: "United States",
  },
  {
    id: "address-anna",
    label: "Anna",
    fullName: "Anna",
    address: "138 Naseby Rd, Ilford, IG5 ONN",
    apartment: "",
    phone: "+91 78341 XXXXX",
    email: "abc@gmail.com",
    city: "Ilford",
    state: "IG5",
    postalCode: "ONN",
    country: "United Kingdom",
  }
];

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState<Address | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState(initialSaved);

  const updateSavedAddress = (id: string, addr: Address) => {
    setSavedAddresses((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...addr } : a))
    );
  };

  return (
    <CheckoutContext.Provider
      value={{
        step,
        shippingAddress,
        paymentInfo,
        promoCode,
        promoApplied,
        savedAddresses,
        setStep,
        setShippingAddress,
        setPaymentInfo,
        setPromoCode,
        setPromoApplied,
        updateSavedAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}