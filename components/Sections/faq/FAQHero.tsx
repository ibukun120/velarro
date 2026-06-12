import HeroSection from "@/components/Common/HeroPage/HeroSection";

export const FAQHero = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Frequently Asked Questions" },
  ];

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780053229803-faq-section.webp"
      imageAlt="Frequently Asked Questions"
      title="Frequently Asked Questions"
    />
  );
};
