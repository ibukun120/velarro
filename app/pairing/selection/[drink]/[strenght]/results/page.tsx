"use client";

import Container from "@/components/Layouts/Container";
import Breadcrumb from "@/components/Sections/pairing/Breadcrumb";
import CigarCard from "@/components/Sections/pairing/CigarCard";
import FilterTag from "@/components/Sections/pairing/FilterTag";
import NoMatchFound from "@/components/Sections/pairing/NoMatchFound";
import PairingButton from "@/components/Sections/pairing/PairingButton";
import { DrinkKey, getCigars, getDrinkLabel, getStrengthLabel, StrengthKey } from "@/components/Sections/pairing/pairingData";
import StepIndicator from "@/components/Sections/pairing/StepIndicator";
import { useRouter, useParams } from "next/navigation";
   


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Pairing Guide", href: "/pairing-guide" },
  { label: "Explore Pairings", href: "/pairing" },
];

const VALID_STRENGTHS: StrengthKey[] = ["light", "medium", "full", "no-preference"];

export default function PairingResults() {
  const router = useRouter();
  const params = useParams();

  const drink = params.drink as DrinkKey;
  const strengthParam = (params.strenght ?? params.strength) as string;

  // Validate strength param — fallback to no-preference only if truly invalid
  const strength: StrengthKey = VALID_STRENGTHS.includes(strengthParam as StrengthKey)
    ? (strengthParam as StrengthKey)
    : "no-preference";

  const drinkLabel = getDrinkLabel(drink);
  const strengthLabel = getStrengthLabel(strength);
  const cigars = getCigars(drink, strength);
  const hasResults = cigars.length > 0;
  const isNoPreference = strength === "no-preference";
  const isSurpriseMe = drink === "surprise-me";

  const handleRemoveStrength = () => {
    router.push(`/pairing/selection/${drink}/no-preference/results`);
  };

  const handleRemoveDrink = () => {
    router.push("/pairing/selection");
  };

  return (
    <div className="min-h-screen bg-primary-50 mt-10 md:mt-16 ">
      <Container>
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl text-center text-[#1a1208] font-medium mb-12 md:mt-10">
          Find Your Perfect Cigar in{" "}
          <span className="text-[#b8952a]">3 Steps</span> - under 10 seconds
        </h1>

        <StepIndicator currentStep={3} />

        {/* Filter tags */}
        <div className="flex gap-3 flex-wrap mb-4">
          <FilterTag label={drinkLabel} onRemove={handleRemoveDrink} />
          {/* Show strength tag only when a specific strength is selected (not no-preference or surprise-me) */}
          {!isNoPreference && !isSurpriseMe && (
            <FilterTag label={strengthLabel} onRemove={handleRemoveStrength} />
          )}
        </div>

        {hasResults ? (
          <>
            <p className="text-xs font-bold tracking-widest text-primary-500 uppercase mb-1">
              {cigars.length} CIGARS FOUND
            </p>
            <h2 className="text-2xl md:text-4xl text-neutral-13 mb-1">
              Your <span className="text-primary-500 ">perfect pairing</span>
            </h2>
            <p className="text-sm text-[#8a7a6a] mb-8">
              Ranked by match quality - tasting notes & preparation included
            </p>

            {/* Cigar cards grid — responsive columns based on count */}
            <div
              className={`grid gap-6 mb-10 ${
                cigars.length === 1
                  ? "grid-cols-1 max-w-sm"
                  : cigars.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {cigars.map((cigar) => (
                <CigarCard key={cigar.id} cigar={cigar} />
              ))}
            </div>

            {/* Bottom buttons */}
            <div className="flex gap-4 flex-wrap">
              {!isSurpriseMe && (
                <PairingButton onClick={() => router.push(`/pairing/selection/${drink}`)}>
                  ← Refine
                </PairingButton>
              )}
              <PairingButton variant="outline" onClick={() => router.push("/pairing/selection")}>
                Start Over →
              </PairingButton>
            </div>
          </>
        ) : (
          <NoMatchFound />
        )}
      </Container>
    </div>
  );
}