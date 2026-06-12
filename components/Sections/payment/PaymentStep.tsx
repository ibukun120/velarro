"use client";
import { useState } from "react";
import OrderSummary from "./OrderSummary";
import { useCheckout } from "@/app/lib/checkout-context";
import Container from "@/components/Layouts/Container";

type Props = { onNext: () => void; onBack: () => void };
type Method = "card" | "upi" | "allaypay" | "cybersource";

export default function PaymentStep({ onNext, onBack }: Props) {
  const { setPaymentInfo } = useCheckout();
  const [method, setMethod] = useState<Method>("card");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [cardForm, setCardForm] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  // Promo code state
  const [promoCode, setPromoCodeLocal] = useState("");

  const formatCardNumber = (val: string) =>
    val
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3)
      return cleaned.slice(0, 2) + " / " + cleaned.slice(2);
    return cleaned;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (method === "card") {
      if (!cardForm.number || cardForm.number.replace(/\s/g, "").length < 16)
        newErrors.number = "Enter valid card number";
      if (!cardForm.expiry) newErrors.expiry = "Required";
      if (!cardForm.cvv || cardForm.cvv.length < 3) newErrors.cvv = "Required";
      if (!cardForm.name) newErrors.name = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setPaymentInfo({
      method: "card", // Simplified since the others just use card for now
      cardNumber: cardForm.number,
      expiry: cardForm.expiry,
      cvv: cardForm.cvv,
      nameOnCard: cardForm.name,
    });
    onNext();
  };

  const methods = [
    {
      id: "card" as Method,
      label: "Credit / Debit Card",
      sub: "Visa, Mastercard, Amex",
      icon: (
        <svg
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <rect x="5" y="14" width="3" height="2" rx="0.5" />
        </svg>
      ),
    },
    {
      id: "upi" as Method,
      label: "Scan and pay with UPI",
      sub: "You will need to Scan the QR code on the payment page to complete the payment.",
      icon: (
        <svg
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
          <circle cx="12" cy="12" r="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h2M17 12h2"
          />
        </svg>
      ),
    },
    {
      id: "allaypay" as Method,
      label: "AllayPay",
      sub: "Current: $240.50",
      icon: (
        <svg
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 12V8a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 12H15a2 2 0 01-2-2V8"
          />
          <circle cx="17" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "cybersource" as Method,
      label: "Cybersource",
      sub: "Current: $240.50",
      icon: (
        <svg
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 10h11a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-7a2 2 0 012-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 10V6a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h2"
          />
        </svg>
      ),
    },
  ];

  const inputClass = (field: string) =>
    `w-full border rounded-lg px-4 py-3 text-sm bg-primary-50 focus:outline-none focus:ring-1 focus:ring-primary-500 text-neutral-8 placeholder-neutral-6 transition-colors ${
      errors[field] ? "border-red-400" : "border-neutral-6"
    }`;

  return (
    <Container className="flex flex-col max-w-5xl mx-auto pb-12 pt-6">
      <h1 className="text-[30px] font-bold text-neutral-8 mb-1 font-['Outfit',sans-serif] tracking-wide">
        Payment Method
      </h1>
      <p className="text-base text-neutral-8 mb-8">
        Choose how you&apos;d like to pay for your order.
      </p>

      {/* Method Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {methods.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              setMethod(m.id);
              setErrors({});
            }}
            className={`relative border rounded-xl p-4 text-left transition-all duration-200 flex items-start gap-4
              ${
                method === m.id
                  ? "border-2 border-neutral-6 bg-primary-50"
                  : "border-primary-300 bg-white hover:border-primary-300 hover:bg-primary-50/50"
              }`}
          >
            <span className="text-primary-500 flex-shrink-0 mt-0.5">
              {m.icon}
            </span>
            <div className="flex-1 pr-6">
              <p className="text-base font-bold text-neutral-8">{m.label}</p>
              <p className="text-xs text-neutral-8 mt-1">{m.sub}</p>
            </div>
            {method === m.id && (
              <div className="absolute top-5 right-4">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Dynamic Form */}
      {method === "card" && (
        <div className="bg-white border border-neutral-6 rounded-[16px] p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-neutral-8 mb-2 block">
                Card Number
              </label>
              <input
                value={cardForm.number}
                onChange={(e) =>
                  setCardForm((p) => ({
                    ...p,
                    number: formatCardNumber(e.target.value),
                  }))
                }
                placeholder="0000 0000 0000 0000"
                className={inputClass("number")}
              />
              {errors.number && (
                <p className="text-xs text-red-500 mt-1">{errors.number}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-bold text-neutral-8 mb-2 block">
                Name on Card
              </label>
              <input
                value={cardForm.name}
                onChange={(e) =>
                  setCardForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="e.g. JOHN DOE"
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-bold text-neutral-8 mb-2 block">
                Expiration Date
              </label>
              <input
                value={cardForm.expiry}
                onChange={(e) =>
                  setCardForm((p) => ({
                    ...p,
                    expiry: formatExpiry(e.target.value),
                  }))
                }
                placeholder="MM / YY"
                className={inputClass("expiry")}
              />
              {errors.expiry && (
                <p className="text-xs text-red-500 mt-1">{errors.expiry}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-bold text-neutral-8 mb-2 block">
                CVV
              </label>
              <input
                value={cardForm.cvv}
                onChange={(e) =>
                  setCardForm((p) => ({
                    ...p,
                    cvv: e.target.value.replace(/\D/g, "").slice(0, 4),
                  }))
                }
                placeholder="1234"
                className={inputClass("cvv")}
              />
              {errors.cvv && (
                <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#22c55e"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="text-sm text-neutral-8">
              Payments are secure & encrypted
            </p>
          </div>
        </div>
      )}

      {method === "upi" && (
        <div className="bg-white border border-neutral-6 rounded-[16px] p-6 mb-6">
          <div className="bg-primary-50 border border-primary-300 rounded-xl p-4 text-sm text-neutral-8">
            You will be provided a QR code on the next step to complete the
            payment via UPI securely.
          </div>
        </div>
      )}

      {method === "allaypay" && (
         <div className="bg-white border border-neutral-6 rounded-[16px] p-6 mb-6">
          <div className="bg-primary-50 border border-primary-300 rounded-xl p-4 text-sm text-neutral-8">
            You will be securely redirected to AllayPay to complete your
            purchase.
          </div>
        </div>
      )}

      {method === "cybersource" && (
        <div className="bg-white border border-neutral-6 rounded-[16px] p-6 mb-6">
          <div className="bg-primary-50 border border-primary-300 rounded-xl p-4 text-sm text-neutral-8">
            You will be securely redirected to CyberSource to complete your
            purchase.
          </div>
        </div>
      )}

      {/* Promo Code independent block */}
      <div className="bg-white border border-neutral-6 rounded-[16px] p-6 mb-6">
        <p className="text-xs font-bold text-neutral-8 uppercase tracking-wider mb-3">
          HAVE A PROMO CODE?
        </p>
        <div className="w-1/2 flex gap-4">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCodeLocal(e.target.value)}
            placeholder="Enter code"
            className="flex-1 border border-neutral-6 rounded-lg px-3 py-2.25 text-sm bg-primary-50 focus:outline-none focus:ring-1 focus:ring-primary-500 text-neutral-8 placeholder-neutral-6 transition-colors"
          />
          <button
            onClick={() => {}} // Integration logic could go here
            className="bg-primary-500 text-neutral-1 px-8 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Order Summary Formatted by User */}
      <div className="mb-8">
        <OrderSummary />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={onBack}
          className="w-full sm:w-1/2 py-4 text-base font-bold text-primary-500 bg-white border border-neutral-6 rounded-lg hover:bg-primary-50 transition-all text-center"
        >
          Back to Address
        </button>
        <button
          onClick={handleNext}
          className="w-full sm:w-1/2 py-4 bg-primary-500 text-neutral-1 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-sm text-center"
        >
          Review Order
        </button>
      </div>

      {/* Money back / Guarantee Section */}
      {/* <div className="mt-8 border-2 border-dashed border-neutral-6 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
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
