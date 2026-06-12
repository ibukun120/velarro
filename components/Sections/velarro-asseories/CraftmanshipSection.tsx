// components/CraftsmanshipSection.tsx

import Container from "@/components/Layouts/Container";
import Image from "next/image";
import Link from "next/link";

const CraftsmanshipSection = () => {
  return (
    <Container className="w-full bg-secondary-300 py-20 lg:py-30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
        
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          {/* Small Heading */}
          <div className="mb-8">
            <p className="mb-2 text-lg uppercase tracking-[0.15em] font-semibold text-primary-300">
              Craftsmanship
            </p>

            <div className="h-[1px] w-40 bg-[#D7B97C]" />
          </div>

          {/* Main Title */}
          <h2 className="mb-8 text-4xl font-light text-neutral-1 md:text-5xl">
            Forged in Obsidian
          </h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-base leading-8 text-[#F3F3F3]/90">
            <p>
              Every Velarro cutter begins its life as a single block of
              aerospace-grade surgical steel, hand-polished over forty-eight
              hours until it achieves a mirror finish.
            </p>

            <p>
              The mechanism utilizes a proprietary dual-guillotine system with
              obsidian-infused blades, ensuring a clean, effortless snap that
              preserves the integrity of the cigar&apos;s cap. It is more than a
              tool; it is a declaration of intent.
            </p>
          </div>

          {/* Link */}
          <Link
            href="/story"
            className="mt-14 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary-300 transition hover:opacity-80"
          >
            Read the Full Story
            <span>→</span>
          </Link>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          
          {/* Large Image */}
          <div className="relative h-[440px] w-full overflow-hidden md:w-[55%]">
            <Image
              src="/images/craft1.png"
              alt="Luxury cutter close-up"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Image */}
          <div className="relative h-[330px] w-full overflow-hidden md:mt-0 md:w-[45%]">
            <Image
              src="/images/craft2.png"
              alt="Craftsman working"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CraftsmanshipSection;