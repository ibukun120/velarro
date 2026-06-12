"use client";

import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Sections/pairing/Breadcrumb";
import StepIndicator from "@/components/Sections/pairing/StepIndicator";
import { drinkOptions } from "@/components/Sections/pairing/pairingData";
import PairingButton from "@/components/Sections/pairing/PairingButton";
import Container from "@/components/Layouts/Container";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Pairing Guide", href: "/pairing-guide" },
  { label: "Explore Pairings" },
];

export default function PairingStep1() {
  const router = useRouter();

  const handleDrinkSelect = (drinkId: string) => {
    if (drinkId === "surprise-me") {
      // Surprise Me skips Step 2, goes straight to results via dynamic route
      router.push(`/pairing/selection/surprise-me/no-preference/results`);
    } else {
      router.push(`/pairing/selection/${drinkId}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] mt-10 md:mt-16">
      <Container>
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl text-center text-neutral-13 font-medium mb-12 md:mt-10">
          Find Your Perfect Cigar in{" "}
          <span className="text-primary-500">3 Steps</span> - under 10 seconds
        </h1>

        <StepIndicator currentStep={1} />

        <div className="mb-8">
          <h2 className="text-[28px] text-neutral-13 mb-1">
            What are you <span className="text-primary-500">drinking tonight?</span>
          </h2>
          <p className="text-[16px] text-secondary-300">
            {"Select your companion - we'll find the ideal velarro for it"}
          </p>
        </div>

        {/* Drink grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {drinkOptions.map((drink) => (
            <button
              key={drink.id}
              onClick={() => handleDrinkSelect(drink.id)}
              className="bg-white border border-neutral-6 p-6 flex flex-col items-center gap-3 hover:border-[#b8952a] hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              {/* Placeholder icon circle */}
              <div className="w-12 h-12 rounded-full bg-[#D9D9D9] group-hover:bg-[#c9a84c] transition-colors duration-200" />
              <div className="text-center">
                <p className="text-[26px] font-medium text-secondary-900">
                  
                  {drink.label}

                </p>
                <p className="text-[16px] text-secondary-300 mt-0.5">
                  {drink.id === "surprise-me"
                    ? `All ${drink.cigarCount} Cigars`
                    : `${drink.cigarCount} Cigars`}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between">
          <PairingButton onClick={() => router.back()}>← Back</PairingButton>
          <p className="text-xs italic text-[#8a7a6a]">Step 1 of 2</p>
        </div>
      </Container>
    </div>
  );
}