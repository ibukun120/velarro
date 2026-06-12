import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function AccessibilityHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Accessibility Statement" },
  ];

  const description = (
    <>
      Discover our complete collection of meticulously crafted
      accessories, designed to elevate every moment of the cigar ritual.
    </>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780100669166-accessibility-page.webp"
      imageAlt="Accessibility background"
      title="Accessibility Statement"
      description={description}
    />
  );
}