// components/HeroLuxurySection.tsx

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/homenew.png"
        alt="Luxury cutter"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Extra Gradient for Luxury Feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

      {/* Smoke Overlay (Optional) */}
      <div className="absolute inset-0 bg-[url('/images/smoke.png')] bg-cover bg-center opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Small Heading */}
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary-300 md:text-base">
            The Art of the Ritual
          </p>

          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl text-5xl font-extralight leading-[1.05] text-neutral-1 md:text-7xl lg:text-[80px]">
            The Obsidian Gold Cutter
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-1/80 md:text-xl">
            A masterpiece of precision engineering and heritage craftsmanship.
            Designed for the discerning individual who understands that the
            perfect cut is the beginning of every great journey.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            
            {/* Primary Button */}
            <Link
              href="/shop"
              className="min-w-[260px] rounded-lg bg-primary-300 px-6 py-4 text-sm uppercase tracking-[0.15em] text-black transition duration-300 hover:scale-[1.02] hover:bg-transparent hover:text-neutral-1 hover:border hover:border-primary-300"
            >
              Acquire Now
            </Link>

            {/* Secondary Button */}
            <Link
              href="/details"
              className="min-w-[260px] rounded-lg border border-primary-300 bg-transparent px-6 py-4 text-sm uppercase tracking-[0.15em] text-[#D7B97C] transition duration-300 hover:bg-primary-300 hover:text-black"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;