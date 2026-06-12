import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function TermsHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms & Conditions" },
  ];

  const description = (
    <>
      Our Terms & Conditions explain the standards,
      responsibilities, and protections that apply
      when using our website and services.
    </>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780053336277-terms-and-conditions.webp"
      imageAlt="Terms & Conditions"
      title="Terms & Conditions"
      description={description}
    />
  );
}