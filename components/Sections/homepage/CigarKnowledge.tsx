"use client";
// import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Buttons/CommonButtons";

const cards = [
  {
    id: 1,
    mainTitle: "Limited Compendium",
    subTitle: "The Perfect Whiskey & Cigar Pairing",
    description:
      "Discover how to match profiles for an unforgettable experience",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959177459-category-1-limited-compendium.webp",
  },
  {
    id: 2,
    mainTitle: "Reserve",
    subTitle: "Core Portfolio",
    description:
      "Our Most exclusive selection, aged for a minimum of five years in spanish cedar.",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959667048-category-6---reserve.webp",
  },
  {
    id: 3,
    mainTitle: "Night Series",
    subTitle: "Nocturne",
    description:
      "Rich and sophisticated selections designed for evenings of quiet luxury.",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959886063-category-7-nocturne.webp",
  },
];

export default function CigarKnowledge() {
  // const [active, setActive] = useState(0);
  // const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-8 mx-auto bg-neutral-2 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10 relative">
        <div className="inline-block border-b-2 border-neutral-6 px-4 py-0.5 mb-6">
          <p className="text-[32px] text-neutral-13 font-light tracking-wide">
            Cigar Knowledge
          </p>
        </div>
        <h2 className="text-[40px] font-light text-neutral-13 tracking-tight leading-tight">
          Expand your horizons
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-neutral-3 border border-neutral-6 rounded-[14px] px-4 py-5 flex flex-col
            
            transition-all duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:-translate-y-2
                      hover:shadow-2xl "
          >
            {/* Image */}
            <div className="overflow-hidden aspect-[1.2] w-full relative rounded-lg mb-5">
              <Image
                src={card.image}
                alt={card.mainTitle}
                fill
                className="object-cover block hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Text and Button Wrapper */}
            <div className="flex flex-col flex-grow items-start px-1 text-left">
              <h3 className="text-[20px] font-semibold text-neutral-12 mb-2 font-medium">
                {card.mainTitle}
              </h3>
              <p className="text-[18px] tracking-[0.01] text-neutral-11 mb-3">
                {card.subTitle}
              </p>
              <p className="text-[16px] text-neutral-11 leading-[1.6] mb-6 flex-grow">
                {card.description}
              </p>
              <Button
                variant="product"
                className="w-full mt-auto py-[14px] rounded-sm"
              >
                Explore
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
