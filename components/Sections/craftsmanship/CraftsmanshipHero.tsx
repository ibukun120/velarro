import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function CraftsmanshipHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Craftsmanship" },
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
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779893028740-craftsmanship-hero-section.webp"
      imageAlt="Craftsmanship & Heritage"
      title="Craftsmanship & Heritage"
      description={description}
      breadcrumbClassName="
        top-7
        md:top-13
        lg:top-15
      "
    />
  );
}