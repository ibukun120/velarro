import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function PressHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Media Corner" },
  ];

  const description = (
    <>
      Velarro works with a curated network of journalists,
      editors, and media professionals whose publications
      reflect the values the house was built on.
    </>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780055914284-press-image.webp"
      imageAlt="Media Corner"
      title="Media Corner"
      description={description}
    />
  );
}