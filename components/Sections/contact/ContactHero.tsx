import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function ContactHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  const description = (
    <>
      We&apos;re here to assist with orders, product questions, vendor inquiries
      <br className="hidden md:block" />
      and general support from the velarro team.
    </>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780047841641-get-in-touch-(3).webp"
      imageAlt="Velarro Cigars Contact"
    
      title="Get In Touch"
      description={description}
    />
  );
}
