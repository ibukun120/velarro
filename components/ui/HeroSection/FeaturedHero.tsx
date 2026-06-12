"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroImages from "@/lib/heroImages.data";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[300px] sm:h-[500px] md:h-[777px]">

      {/* Images */}
      {heroImages.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay Text */}
          <div
            className="absolute left-1/2 -translate-x-1/2 text-neutral-1 font-light tracking-widest z-10 text-center w-full"
            style={{ bottom: "40px" }}
          >
            <span className="text-[16px] sm:text-[22px] md:text-[30px]">
              {item.title}
            </span>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex z-20"
        style={{ bottom: "16px", gap: "8px" }}
      >
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[var(--color-primary-300)]"
                : "bg-white/50"
            }`}
            style={{ width: index === current ? "24px" : "8px" }}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;