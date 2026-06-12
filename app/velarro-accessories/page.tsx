"use client";

import { motion } from "framer-motion";

import Container from "@/components/Layouts/Container";
import AccessorySection from "@/components/Sections/velarro-asseories/AccessorySection";
import HeroSection from "@/components/Common/HeroPage/HeroSection";

// ─── Sections Data ───────────────────────────────────────────────────────────
const sections = [
  {
    tag: "For the perfect storage",
    title: "Humidors",
    desc: "It all begins with how a cigar is kept. Only a cigar that is well taken care of while stored will live up to Velarro high standard.",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780055664581-humidors-(2).webp",
    imageAlt: "Open humidor filled with cigars",
  },
  {
    tag: "For the perfect cut",
    title: "Cutters",
    desc: "Cutting something as superbly crafted as one of Velarro handmade cigars correctly is essential if you wish to get the most out of it.",
    image: "/images/a3.png",
    imageAlt: "Cigar cutter on leather case",
  },
  {
    tag: "For the perfect toast",
    title: "Lighters",
    desc: "Lighting your cigar is the most emotive part of the cigar ritual. It follows right after you have correctly toasted your cigar.",
    image: "/images/a2.png",
    imageAlt: "Premium cigar lighter",
  },
  {
    tag: "For the perfect ritual",
    title: "Ashtrays",
    desc: "If you are sharing the ritual with someone else, taste journeys and topics of conversation will begin to emerge. At the centre of this experience should be a Velarro ashtray.",
    image: "/images/a1.png",
    imageAlt: "Velarro branded ashtray",
  },
  {
    tag: "For the perfect travel",
    title: "Cigar Cases",
    desc: "There will be a moment in every aficionado's life in which they wish they had their favourite cigars with them. It is Velarro's goal to fill time beautifully.",
    image: "/images/a6.png",
    imageAlt: "Leather cigar travel case",
  },
  {
    tag: "For the perfect puff",
    title: "Pipes and Tobacco",
    desc: "Velarro pipes, accessories and tobacco are meticulously curated for the ultimate in refined smoking enjoyment. Hand-crafted pipes and specially selected tobacco fill time beautifully.",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779978629301-pipes.webp",
    imageAlt: "Handcrafted pipe and tobacco",
  },
  {
    tag: "For the perfection",
    title: "Other Accessories",
    desc: "Velarro offers luxury cigar accessories including travel pouches, cigar rests, storage tubes, and handcrafted essentials for modern cigar enthusiasts.",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780055669272-other-accesories.webp",
    imageAlt: "Whisky glass beside a cigar",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function AccessoriesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Accessories" },
  ];

  const description = (
    <>
      Discover our complete collection of meticulously crafted accessories,
      designed to elevate every moment of the cigar ritual.
    </>
  );

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        breadcrumbItems={breadcrumbItems}
        backgroundImage="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779965998986-accessories.webp"
        imageAlt="Accessories"
        title="Accessories"
        description={description}
      />

      {/* Category Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Container className="py-4">
          <div className="inline-flex flex-wrap justify-center gap-5 md:gap-10 bg-primary-100/40 rounded-lg px-5 py-3 mx-auto">
            {sections.map((section, index) => (
              <motion.button
                key={section.title}
                onClick={() => {
                  const element = document.getElementById(
                    section.title.toLowerCase().replace(/\s+/g, "-"),
                  );

                  if (element) {
                    const offset = 100; // adjust if needed

                    const top =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset;

                    window.scrollTo({
                      top,
                      behavior: "smooth",
                    });
                  }
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                px-5 py-1.5
                text-[14px]
                rounded-md
                border border-neutral-6
                bg-primary-50
                text-secondary-500
                hover:bg-primary-500
                hover:text-neutral-1
                transition-all duration-300
              "
              >
                {section.title}
              </motion.button>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* Accessory Sections */}
      <div className="space-y-8 md:space-y-14">
        {sections.map((section, index) => (
          <motion.div
            id={section.title.toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-36"
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <AccessorySection section={section} index={index} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
