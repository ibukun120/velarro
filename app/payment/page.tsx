"use client";

import { useCheckout } from "../lib/checkout-context";
import Navbar from "../../components/Sections/payment/Navbar";
import PaymentStep from "../../components/Sections/payment/PaymentStep";
// import ReviewStep from "../../components/Sections/payment/ReviewStep";
import ShippingStep from "../../components/Sections/payment/ShippingStep";
import StepIndicator from "../../components/Sections/payment/StepIndicator";
import SuccessPage from "../../components/Sections/payment/SuccessPage";
import NewReview from "@/components/Sections/payment/NewReview";

export default function CheckoutPage() {
  const { step, setStep } = useCheckout();

  if (step === 4) {
    return (
      <>
        <Navbar />
        <SuccessPage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <Navbar />
      <div className=" mx-auto py-8">
        <StepIndicator currentStep={step} />

        {step === 1 && (
          <ShippingStep onNext={() => setStep(2)} />
        )}
        {step === 2 && (
          <PaymentStep onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          // <ReviewStep
          //   onPlaceOrder={() => setStep(4)}
          //   onEditShipping={() => setStep(1)}
          //   onEditPayment={() => setStep(2)}
          // />
          <NewReview/>
        )}
      </div>

      {/* Footer */}
      {/* <footer className="mt-5 border-t border-[#e8e0d0] py-5 px-6 bg-[#f5f0e8]">
        <div className="w-full md:max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs text-black">© 2026 Velarro. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="text-xs text-black hover:text-gray-800 transition-colors cursor-pointer">Privacy Policy</button>
            <button className="text-xs text-black hover:text-gray-800 transition-colors cursor-pointer">Terms of Service</button>
            <button className="text-xs text-black hover:text-gray-800 transition-colors cursor-pointer">Help Center</button>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
