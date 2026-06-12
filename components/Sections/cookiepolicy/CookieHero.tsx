import HeroSection from "@/components/Common/HeroPage/HeroSection";

export default function CookieHero() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cookie Policy" },
  ];

  const description = (
    <>
      Explore how we use cookies and tracking technologies
      to improve usability, measure performance, and tailor
      content to your needs.
    </>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780057276498-cookie-policy.webp"
      imageAlt="Cookie Policy"
      title="Cookie Policy"
      description={description}
    />
  );
}