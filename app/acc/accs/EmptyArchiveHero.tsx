// components/ui/EmptyArchiveHero.tsx

import Container from "@/components/Layouts/Container";
import Link from "next/link";

const EmptyArchiveHero = () => {
  return (
    <section
      className="relative h-screen w-full mt-12 md:mt-16"
      style={{
        backgroundImage: "url('/images/acc1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Top Border */}
      {/* <div className="absolute top-0 left-0 z-20 h-[1px] w-full bg-[#C89B4A]" /> */}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Breadcrumb */}
        <div className="border-b border-[#C89B4A]/40 px-6 py-2 bg-[#2E2E2E]">
          <Container className="flex items-center gap-3 text-sm text-neutral-1/70 py-0!">
            <Link href="/" className="hover:text-neutral-1 transition">
              Home
            </Link>

            <span>{">"}</span>

            <Link href="/discover" className="hover:text-neutral-1 transition">
              Discover
            </Link>

            <span>{">"}</span>

            <Link href="/accessories" className="hover:text-neutral-1 transition">
              Accessories
            </Link>

            <span>{">"}</span>

            <span className="text-primary-600">Cutter</span>
          </Container>
        </div>

        {/* Center Content */}
        <Container className="w-full h-[70vh] md:h-screen">
          <div className="flex flex-1 items-center justify-center px-6 h-full w-full">
          <div className="max-w-4xl text-center ">
            {/* Small Heading */}
            <p className="mb-5 text-sm font-bold uppercase text-[#E9C176] md:text-base">
              Custodian Archive
            </p>

            {/* Main Heading */}
            <h1 className="mx-auto max-w-3xl text-5xl font-semibold uppercase leading-tight text-neutral-1 md:text-7xl tracking-wider">
              The Archive Is <br/>Vacant
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-1/75 md:text-base">
              Your journey with Velarro is just beginning. Your order history
              will appear here <br/> once your first selection is cured and prepared
              for transit.
            </p>

            {/* Button */}
            <div className="mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-lg bg-[#C89B4A] px-8 py-3 text-sm font-medium uppercase tracking-wide text-neutral-1 transition hover:scale-105 hover:bg-[#b88a3d] md:px-10 md:py-3 "
              >
                Shop The Collection
              </Link>
            </div>
          </div>
        </div>
        </Container>
        
      </div>

      {/* Optional Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default EmptyArchiveHero;