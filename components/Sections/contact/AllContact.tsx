import React from "react";
import ContactHero from "./ContactHero";
import ContactIntro from "./ContactIntro";
import ContactSection from "./ContactSection";
// import VelarroFooter from "@/components/ui/Footers/VelarroFooter";
// import Container from "@/components/Layouts/Container";

export default function AllContact() {
  return (
    <>
      <ContactHero />
      <ContactIntro />
      <ContactSection />
      {/* <VelarroFooter /> */}
    </>
  );
}
