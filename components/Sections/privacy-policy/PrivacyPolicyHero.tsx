import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function PrivacyPolicyHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" },
  ];

  const description = (
    <div className="text-lg md:text-4xl md:leading-8.75 font-thin text-neutral-1">
      Velarro Technologies Private Limited
    </div>
  );

  const bottomLeftBlock = (
    <div className="flex flex-col gap-2 md:gap-7">
      <span className="text-primary-500 font-light text-xl md:text-4xl leading-8.75">Updated</span>
      <span className="text-neutral-1 text-md md:text-lg font-light">May 7th, 2026</span>
    </div>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780051891676-privacy-policy-(2).webp"
      imageAlt="Velarro Cigars Contact"
     
      title="Global Data Privacy Policy"
      description={description}
      bottomLeftBlock={bottomLeftBlock}
    />
  );
}
