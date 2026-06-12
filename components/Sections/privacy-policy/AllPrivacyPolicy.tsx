import React from "react";
import PrivacyPolicyHero from "@/components/Sections/privacy-policy/PrivacyPolicyHero";
import PrivacyPolicyIntro from "@/components/Sections/privacy-policy/PrivacyPolicyIntro";
import PrivacyPolicySection from "@/components/Sections/privacy-policy/PrivacyPolicySection"
// import VelarroFooter from "@/components/ui/Footers/VelarroFooter";


export default function AllPrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyHero />
      <PrivacyPolicyIntro />
      <PrivacyPolicySection/>
      {/* <VelarroFooter /> */}
    </>
  );
}
