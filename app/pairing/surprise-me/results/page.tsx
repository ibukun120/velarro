"use client";

// import Breadcrumb from "@/app/components/pair/Breadcrumb";
import Container from "@/components/Layouts/Container";
import Breadcrumb from "@/components/Sections/pairing/Breadcrumb";
import CigarCard from "@/components/Sections/pairing/CigarCard";
import FilterTag from "@/components/Sections/pairing/FilterTag";
import PairingButton from "@/components/Sections/pairing/PairingButton";
import { getCigars } from "@/components/Sections/pairing/pairingData";
import StepIndicator from "@/components/Sections/pairing/StepIndicator";
import { useRouter } from "next/navigation";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Pairing Guide", href: "/pairing-guide" },
  { label: "Explore Pairings", href: "/pairing" },
];

export default function SurpriseMeResults() {
  const router = useRouter();
  const cigars = getCigars("surprise-me", "no-preference");

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-6 py-8">
      <Container >
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl text-center text-[#1a1208] font-semibold mb-8">
          Find Your Perfect Cigar in{" "}
          <span className="text-[#b8952a]">3 Steps</span> - under 10 seconds
        </h1>

        <StepIndicator currentStep={3} />

        {/* Filter tag */}
        <div className="flex gap-3 flex-wrap mb-4">
          <FilterTag label="Surprise Me" onRemove={() => router.push("/pairing")} />
        </div>

        <p className="text-xs font-bold tracking-widest text-[#b8952a] uppercase mb-1">
          {cigars.length} CIGARS FOUND
        </p>
        <h2 className="text-2xl text-[#1a1208] mb-1">
          Your <span className="text-[#b8952a] italic">perfect pairing</span>
        </h2>
        <p className="text-sm text-[#8a7a6a] mb-8">
          Ranked by match quality - tasting notes & preparation included
        </p>

        {/* Cigar cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {cigars.map((cigar) => (
            <CigarCard key={cigar.id} cigar={cigar} />
          ))}
        </div>

        {/* Bottom buttons */}
        <div className="flex gap-4 flex-wrap">
          <PairingButton variant="outline" onClick={() => router.push("/pairing")}>
            Start Over →
          </PairingButton>
        </div>
      </Container>
    </div>
  );
}