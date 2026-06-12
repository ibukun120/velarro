import React from "react";

import Container from "@/components/Layouts/Container";
import HeroSection from "@/components/Sections/Terms&Condition/HeroSection";
import ContentSection from "@/components/Sections/Terms&Condition/ContentSection";

export default function TermsAndCondition() {
  return (
    <div>
      <HeroSection />
      <Container>
        <ContentSection/>
      </Container>
    </div>
  );
}
