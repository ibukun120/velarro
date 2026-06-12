"use client";

import { useState } from "react";

import Container from "@/components/Layouts/Container";
import CigarKnowledge from "../components/Sections/homepage/CigarKnowledge";
import CollectionCarousel from "../components/Sections/homepage/CollectionCarousel";
import Gifting from "../components/Sections/homepage/Gifting";

import StayInKnow from "../components/Sections/homepage/Stayinknow";
import AgeVerification from "./ageverification/page";
import HeroCarousel from "@/components/Sections/homepage/HeroCarousel";
import CookieBanner from "@/components/Common/HeroPage/CookieBanner";


export default function Home() {
  const [showAgePopup, setShowAgePopup] = useState(() => {
    if (typeof window === "undefined") return false;

    const verified = sessionStorage.getItem("velarro-age-verified");

    return !verified;
  });

  return (
    <>
      {/* AGE VERIFICATION POPUP */}
      {showAgePopup && (
        <AgeVerification
          onClose={() => setShowAgePopup(false)}
        />
      )}

      {/* HOME PAGE */}
      <main className="bg-[#F9F5ED]">
        <HeroCarousel />

        <Container className="bg-[#F9F5ED]">
          <CollectionCarousel />
        </Container>

        <Gifting />

        <Container className="bg-[#F9F5ED]">
          <CigarKnowledge />
          <StayInKnow />
        </Container>
      </main>

      {/* COOKIE BANNER */}
    {!showAgePopup && <CookieBanner />}
    </>
  );
}