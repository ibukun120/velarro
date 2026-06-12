"use client";

import HeroSection from "@/components/Common/HeroPage/HeroSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ComingSoonHeroProps {
  pageTitle?: string;
}

export default function ComingSoonHero({
  pageTitle = "Coming Soon",
}: ComingSoonHeroProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: pageTitle },
  ];

  const description = (
    <div className="flex flex-col items-center">
      {/* <h2 className="mt-4 text-[24px] sm:text-[30px] md:text-[38px] font-semibold text-primary-600 leading-tight">
        Curated Deals Are on the Way..
      </h2> */}

      <p className="mt-4 max-w-[620px] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-1/80">
        A new Velarro collection is being carefully prepared.
        Like everything we craft, it will be worth the wait.
      </p>

      <Link
        href="/"
        className="
          mt-8
          inline-flex
          items-center
          gap-3
          bg-[#C89A44]
          px-10
          py-3
          rounded-md
          text-neutral-1
          text-md
          tracking-wide
          transition-all
          duration-300
          hover:bg-[#b88934]
          hover:scale-[1.02]
        "
      >
        <ArrowLeft size={16} />
        Go Back
      </Link>
    </div>
  );

  return (
    <HeroSection
      breadcrumbItems={breadcrumbItems}
      backgroundImage="/images/coomingsoon.png"
      imageAlt={pageTitle}
      title={`${pageTitle} Are on the Way..`}
      description={description}
    />
  );
}