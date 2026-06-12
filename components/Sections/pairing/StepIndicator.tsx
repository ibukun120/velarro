interface Step {
  number: number;
  label: string;
}

interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

const steps: Step[] = [
  { number: 1, label: "WHAT ARE YOU DRINKING?" },
  { number: 2, label: "HOW STRONG?" },
  { number: 3, label: "YOUR PAIRINGS" },
];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full mb-16">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center w-full">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div
              key={step.number}
              className={`flex items-center ${index !== steps.length - 1 ? "flex-1" : ""}`}
            >
              {/* Step */}
              <div className="flex items-center gap-3 shrink-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[20px] font-semibold border-2 transition-all
                  ${
                    isActive
                      ? "bg-secondary-500 border-secondary-500 text-primary-500"
                      : isCompleted
                        ? "bg-primary-500 border-neutral-6 text-secondary-900"
                        : "bg-transparent border-neutral-6 text-primary-500"
                  }`}
                >
                  {step.number}
                </div>

                <span
                  className={`text-sm font-semibold tracking-wide max-w-[140px]
                  ${isActive ? "text-secondary-500" : "text-primary-500"}`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector */}
              {index < steps.length -1 && (
                <div className="flex-1 h-px mx-4 bg-[#c9a84c]/40" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Layout (Vertical) */}
      <div className="flex flex-col gap-6 md:hidden">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div key={step.number} className="flex items-start gap-4">
              {/* Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2
                  ${
                    isActive
                      ? "bg-secondary-900 border-neutral-6 text-primary-500"
                      : isCompleted
                        ? "bg-primary-500 border-neutral-6 text-neutral-1"
                        : "bg-transparent border-neutral-6 text-primary-500"
                  }`}
                >
                  {step.number}
                </div>

                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="w-px h-10 bg-[#c9a84c]/40 mt-2" />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-sm font-semibold tracking-wide
                ${isActive ? "text-secondary-900" : "text-primary-300"}`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
