// components/HeroCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { heroSlides } from "../../../data/homepagedatas";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mapping from carousel subtitles to actual product series names
const seriesMapping: Record<string, string> = {
  "Collector Series": "Collector",
  "Heritage Series": "Heritage Line",
  "Celebration Series": "Celebration",
  "Dark Series": "Dark",
  "Prestige Series": "Prestige",
  "House Collection": "House Collection",
  "After Dark Series": "After Dark",
  "Celebration Gold": "Celebration Gold",
  "Terroir Series": "Terrior Series", // Note: product data has "Terrior" spelling
};

export default function HeroCarousel() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[current];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-secondary-600">
      {/* Slide wrapper with motion */}
      {/* // AFTER */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title ?? currentSlide.subtitle}
              fill
              priority={true}
              className="object-cover"
            />
          </div>

          {current !== 0 && (
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          )}

          {/* CONTENT */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <div className="text-center text-neutral-1 flex justify-center items-center flex-col gap-4 sm:gap-5 md:gap-6">
              {/* TITLE */}
              <h1
                className="
                  font-extralight tracking-tight leading-none

                  text-[42px]
                  sm:text-[60px]
                  md:text-[80px]
                  lg:text-[100px]
                 
                "
              >
                {currentSlide.subtitle}
              </h1>

              {/* CTA */}
              <div className="flex justify-center items-center gap-2 sm:gap-2.5 leading-6 tracking-[0.15px]">
                <span
                  className="
                    uppercase

                    text-[14px]
                    sm:text-[18px]
                    md:text-[22px]
                    lg:text-2xl
                  "
                >
                  Shop Now
                </span>

                <button
                  onClick={() => {
                    const mappedSeriesName =
                      seriesMapping[currentSlide.subtitle] ||
                      currentSlide.subtitle;
                    router.push(
                      `/product?tab=cigars&series=${encodeURIComponent(mappedSeriesName)}#profile`,
                    );
                  }}
                  className="
                    bg-neutral-2 rounded-md text-neutral-12
                    cursor-pointer
                    hover:scale-105 transition-all duration-300
                    border
                    border-neutral-6
                    p-2
                    sm:py-2.5 sm:px-2.5
                    md:py-3 md:px-3.5 hover:bg-primary-500 hover:border-neutral-6  hover:text-neutral-1
                  "
                >
                  <ArrowRight
                    className="
                      w-4 h-4
                      sm:w-5 sm:h-5
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Indicators */}
      <div
        className="
    absolute
    right-3 sm:right-5 md:right-10 lg:right-14

    top-[58%] md:top-[50%]

    -translate-y-1/2
    flex gap-2 sm:gap-3
    p-1.5
    flex-col
    rounded-full
    z-30
  "
      >
        {Array.from({ length: 5 }).map((_, index) => {
          // active indicator logic
          const activeIndex = current % 5;

          return (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all flex flex-col ${
                index === activeIndex
                  ? `
                    h-10 sm:h-14 md:h-18
                    w-2.5 sm:w-3 md:w-3.5
                    bg-primary-100
                    rounded-full
                  `
                  : `
                    w-2.5 h-2.5
                    sm:w-3 sm:h-3
                    md:w-3.5 md:h-3.5
                    rounded-full
                    bg-primary-100
                    cursor-pointer
                  `
              }`}
            />
          );
        })}
      </div>
      {/* <div className="absolute bottom-[-22px] z-50">
        <div className="p-1.5 rounded-xl bg-white">
          <p className="bg-[#B38B42] text-neutral-1 px-2 py-1 rounded-lg">
            Become Seller
          </p>
        </div>
      </div> */}
    </div>
  );
}
