import HeroSection from "@/components/Common/HeroPage/HeroSection";

export const AboutHeroPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Story" },
  ];

  const description = <>Crafted with purpose, aged with time</>;

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972156194-our-story.webp"
      imageAlt="Our Story"
      title="Our Story"
      description={description}
    
    />
  );
};
