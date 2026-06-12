import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function SustainabilityHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Sustainability" },
  ];

  const description = (
    <>
      By combining timeless craftsmanship with responsible
      practices, we strive to ensure that every Velarro
      creation reflects not only excellence today, but
      consideration for generations to come.
    </>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780031091015-sustainability.webp"
      imageAlt="Sustainability"
      title="Sustainability"
      description={description}
    />
  );
}