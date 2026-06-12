"use client";

import Container from "@/components/Layouts/Container";

type Step = { label: string; number: number };

const steps: Step[] = [
  { label: "Shipping", number: 1 },
  { label: "Payment", number: 2 },
  { label: "Review", number: 3 },
];

export default function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <Container className="flex items-center justify-center gap-0 mb-8">
      
      {steps.map((step, idx) => {
        const isCompleted = currentStep > step.number;
        const isActive = currentStep === step.number;

        return (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${isCompleted ? "bg-[#C59949] text-neutral-1" : isActive ? "bg-[#C59949] text-neutral-1" : "bg-[#e8e0d0] text-[#b0a080]"}`}
              >
                {isCompleted ? (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium transition-colors duration-300
                  ${isActive || isCompleted ? "text-[#C59949]" : "text-[#b0a080]"}`}
              >
                {step.label}
              </span>
            </div>

            {idx < steps.length - 1 && (
              <div
                className={`w-24 h-0.5 mb-5 mx-1 transition-all duration-500
                  ${currentStep > step.number ? "bg-[#c9a84c]" : "bg-[#e8e0d0]"}`}
              />
            )}
          </div>
        );
      })}
    </Container>
  );
}
