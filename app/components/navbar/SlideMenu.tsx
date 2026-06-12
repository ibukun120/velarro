"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import ExtraIcons from "./ExtraIcons";
import SocialIcons from "./SocialIcons";
import ScrollIndicator from "./ScrollIndicator";
import { MapPin, BellDot, Wine, LucideIcon } from "lucide-react";
import Link from "next/link";

interface SlideMenuProps {
  isOpen: boolean;
}

interface ExtraInfo {
  icon: LucideIcon;
  title: string;
}

export default function SlideMenu({ isOpen }: SlideMenuProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const percentage = (container.scrollLeft / maxScroll) * 100;

    setIndicator(percentage || 0);
  };

  const extras: ExtraInfo[] = [
    { icon: MapPin, title: "Store Locator" },
    { icon: BellDot, title: "News & Events" },
    { icon: Wine, title: "Pairing Guide" },
  ];

  const images = [
    "/cigar1.webp",
    "/cigar2.webp",
    "/cigar3.webp",
    "/cigar4.avif",
    "/cigar6.avif",
    "/cigar7.avif",
    "/cigar8.avif",
    "/cigar9.avif",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }}
          exit={{ x: "-100%", transition: { duration: 0.5, ease: [0.77, 0, 0.175, 1] } }}
          className="fixed top-23.75 left-0 h-screen w-full md:w-[50%] lg:w-[32%] bg-white z-40 px-4 py-4 overflow-y-auto"
        >
          {/* Image scroller */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full overflow-x-auto flex gap-4 py-4 scroll-smooth no-scrollbar"
          >
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="menu-img"
                width={350}
                height={240}
                className="shrink-0 w-[33%] h-auto object-cover rounded"
              />
            ))}
          </div>

          <ScrollIndicator indicator={indicator} />

          <div className="mt-10 space-y-10 flex flex-col items-center">
            {[
              { title: "Discover", href: "/discover" },
              { title: "Gift", href: "/gift" },
              { title: "Shop", href: "/shop" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-4xl text-gray-500 font-normal hover:text-[#C59949] transition"
              >
                {item.title}
              </Link>
            ))}

            <ExtraIcons extras={extras} />
            <SocialIcons />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
