"use client";

import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import Breadcrumb from "@/components/Sections/pairing/Breadcrumb";
import { DrinkKey, StrengthKey, strengthOptions } from "@/components/Sections/pairing/pairingData";
import PairingButton from "@/components/Sections/pairing/PairingButton";
import StepIndicator from "@/components/Sections/pairing/StepIndicator";
import Container from "@/components/Layouts/Container";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Pairing Guide", href: "/pairing-guide" },
  { label: "Explore Pairings", href: "/pairing" },
];

export default function PairingStep2() {
  const router = useRouter();
  const params = useParams();
  const drink = params.drink as DrinkKey;
  const [selected, setSelected] = useState<StrengthKey | null>(null);

  const options = strengthOptions[drink] ?? [];

  // this was commented out because it was causing hydration mismatch due to getDrinkLabel using the drink param which is only available on client side. We can reintroduce it inside the component after validating the drink param and ensuring it's only used on client side.
  // const drinkLabel = getDrinkLabel(drink);

  const handleSelect = (id: StrengthKey) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  const handleSeeMyPairings = () => {
    const strengthToNavigate = selected;
    if (!strengthToNavigate) return;
    router.push(`/pairing/selection/${drink}/${strengthToNavigate}/results`);
  };

  return (
    <div className="min-h-screen bg-primary-50 mt-10 md:mt-16">
      <Container>
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl text-center text-neutral-13 font-medium mb-12 md:mt-10">
          Find Your Perfect Cigar in{" "}
          <span className="text-primary-500">3 Steps</span> - under 10 seconds
        </h1>

        <StepIndicator currentStep={2} />

        <div className="mb-8">
          <h2 className="text-3xl text-neutral-13 mb-1">
            How <span className="text-primary-500">bold</span> do you like your smoke?
          </h2>
          <p className="text-sm text-[#8a7a6a]">
            This narrows down the body and intensity of your ideal cigar
          </p>
        </div>

        {/* Strength options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {options.map((option) => {
            const isSelected = selected === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id as StrengthKey)}
                className={`border p-4 text-left transition-all duration-200 cursor-pointer
                  ${isSelected
                    ? "border-neutral-6 bg-primary-500/10 shadow-md"
                    : "border-neutral-6 bg-white hover:border-neutral-6 hover:shadow-sm"
                  }`}
              >
                <h3
                  className={`text-[28px] tracking-wide uppercase mb-2 ${
                    isSelected ? "text-primary-500" : "text-primary-500"
                  }`}
                >
                  {option.label}
                </h3>
                <p className="text-[16px] text-[#4a3c28] leading-relaxed">{option.description}</p>
              </button>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-64 flex-col md:flex-row gap-4">
          <div className="flex gap-3 ">
            <PairingButton onClick={() => router.push("/pairing/selection")}>← Back</PairingButton>
            <PairingButton
              onClick={handleSeeMyPairings}
              variant="outline"
              className={!selected ? "opacity-50 cursor-not-allowed" : ""}
            >
              See My Pairings →
            </PairingButton>
          </div>
          <p className="text-xs italic text-[#8a7a6a]">Step 1 of 2</p>
        </div>
      </Container>
    </div>
  );
}