import React from "react";

import Container from "@/components/Layouts/Container";
import HeroSection from "@/components/Sections/sustainability/HeroSection";
import SustainabilityOverview from "@/components/Sections/sustainability/SustainabilityOverview";

export default function Sustainabilty() {
  return (
    <div>
      <HeroSection />
      <Container>
        <SustainabilityOverview />
      </Container>
    </div>
  );
}
