"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Buttons/CommonButtons";

const cards = [
  {
    id: 1,
    title: "Jubilee Edition",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959994269--catagory-8-celebration-gold-jubilee-edition.webp",
    link: "/product/jubilee-edition",
  },
  {
    id: 4,
    title: "Ashtrays",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972674534-ashtrays.webp",
    link: "/product/1",
  },
  {
    id: 2,
    title: "Verde Classico",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779960055077-category-9-verde-classico.webp",
    link: "/product/verde-classico",
  },
  {
    id: 5,
    title: "Lighters",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972669282-lighters.webp",
    link: "/product/1",
  },
  {
    id: 3,
    title: "Heritage Collection",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959204015-category-2-heritage-collection.webp",
    link: "/product/heritage-collection",
  },

  {
    id: 6,
    title: "Cutters",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972663543-cutter.webp",
    link: "/product/1",
  },
];

export default function CollectionCarousel() {
  const [current, setCurrent] = useState(2);

  const cardWidth = 400;
  const visibleCards = 3;
  const containerWidth = cardWidth * visibleCards;

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="w-full py-4 bg-neutral-2">
      <div className="text-center mb-10 relative ">
        <div className="inline-block border-b-2 border-neutral-6 px-4 py-0.5 mb-6">
          <p className="text-4xl text-neutral-13 font-light tracking-wide">
            Dive deep into our premium collections
          </p>
        </div>
        <h2 className="text-6xl font-light text-neutral-13 tracking-tight leading-tight">
          Velarro Cigars & Accessories
        </h2>
      </div>
      <div className="relative flex items-center justify-center gap-0">
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="
            absolute left-0 z-20
            bg-neutral-1
            flex items-center justify-center
            border-2 border-neutral-6
            text-primary-500
            hover:bg-primary-500
            hover:text-neutral-1
            h-8 w-8 rounded-full
            cursor-pointer
            transition-all duration-300
            hover:scale-110
            active:scale-95
          "
        >
          <ArrowLeft />
        </button>

        {/* CAROUSEL */}
        <div className="w-full lg:w-[1200px] overflow-hidden">
          <div
            className="
              flex py-8
              transition-transform duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{
              transform: `translateX(-${
                current * cardWidth - containerWidth / 2 + cardWidth / 2
              }px)`,
            }}
          >
            {cards.map((card, index) => {
              const isCenter = index === current;

              return (
                <div
                  key={card.id + index}
                  className="w-[400px] flex-shrink-0 flex justify-center"
                >
                  <div
                    className={`
                      bg-neutral-3
                      rounded-md
                      shadow
                      p-3
                      border
                      overflow-hidden
                      transition-all duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:-translate-y-2
                      hover:shadow-2xl
                      ${
                        isCenter
                          ? "w-[350px] scale-105 opacity-100 z-10 border-neutral-6"
                          : "w-[300px] scale-90 opacity-85 border-transparent"
                      }
                    `}
                  >
                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-md">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={400}
                        height={192}
                        className={`
                        w-full
                        h-70
                        object-cover
                        rounded-md
                        transition-transform duration-700 ease-in-out
                        ${isCenter ? "scale-100 hover:scale-110" : "scale-100"}
                      `}
                      />

                      <div className="absolute inset-0 bg-[#15141466]" />
                    </div>

                    {/* TITLE */}
                    <h3
                      className={`
                        my-3
                        text-sm
                        font-medium
                        text-shadow-neutral-12
                        transition-all duration-500
                        ${
                          isCenter
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-90"
                        }
                      `}
                    >
                      {card.title}
                    </h3>

                    {/* BUTTON */}
                    <div
                      className={`
                        flex w-full
                        transition-all duration-500
                        ${
                          isCenter
                            ? "opacity-100 translate-y-0"
                            : "opacity-90 translate-y-1"
                        }
                      `}
                    >
                      <Link href={card.link} className="w-full">
                        <Button
                          variant="product"
                          className="w-full mt-auto py-[14px] rounded-sm font-light"
                        >
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="
            absolute right-0 z-20
            bg-white
            flex items-center justify-center
            border-2 border-neutral-6
            text-primary-500
            hover:bg-primary-500
            hover:text-neutral-1
            h-8 w-8 rounded-full
            cursor-pointer
            transition-all duration-300
            hover:scale-110
            active:scale-95
          "
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
