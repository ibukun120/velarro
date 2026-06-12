"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "../../../data/productHeroData";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductHomePage() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[current];

  return (
    <section
      className="
        relative
        h-[70vh]
        md:h-[70vh]
        lg:h-[80vh]
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Title */}
      <div className="absolute bottom-10 md:bottom-14 left-1/2 z-30 flex w-full -translate-x-1/2 flex-col items-center justify-center px-4">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-[26px]
            md:text-[42px]
            lg:text-[58px]
            uppercase
            tracking-[3px]
            text-neutral-1
          "
        >
          {currentSlide.subtitle}
        </motion.h1>
      </div>

      {/* Indicators */}
      {/* <div className="absolute right-4 md:right-10 lg:right-14 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              index === current
                ? "h-14 w-3 rounded-full bg-primary-100"
                : "h-3 w-3 rounded-full bg-primary-100/70 hover:bg-primary-100"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}