// import Image from "next/image";
import CurationSection from "./accs/CurationSection";
import BespokeServicesSection from "./accs/BespokeServicesSection";
import EmptyArchiveHero from "./accs/EmptyArchiveHero";

/**
 * AccessoriesPage
 *
 * Assembles the page from section components:
 *
 *  ┌──────────────────────┐
 *  │  Navbar              │  ← top nav bar + breadcrumb
 *  ├──────────────────────┤
 *  │  Hero Image          │  ← large product photo
 *  ├──────────────────────┤
 *  │  CurationSection     │  ← "A Note on Curation"
 *  ├──────────────────────┤
 *  │  BespokeServices     │  ← "Exclusive Enquiries" CTA
 *  ├──────────────────────┤
 *  │  Footer              │  ← nav links + social + copyright
 *  └──────────────────────┘
 */
export default function AccessoriesPage() {
  return (
    <div className="w-full  ">
      {/* Hidden background rectangle (layout parity) */}
      {/* <Image
        className="hidden self-stretch max-w-full object-cover"
        alt=""
        src="/images/acc1.png"
        width={1440}
        height={100}
        preload={true}
      /> */}

      <main className="flex flex-col w-full">
        
        {/* ── Hero image + content ── */}
        <section className="">
          {/* <Image
            className="relative max-h-full max-w-full flex-shrink-0 object-cover"
            loading="lazy"
            alt="Featured accessory"
            src="/images/acc1.png"
            width={1280}
            height={800}
          /> */}

          <div >
            <div className="flex flex-col">
              <EmptyArchiveHero />
              {/* ── Curation section ── */}
              <CurationSection />

              {/* ── Bespoke / enquiries CTA ── */}
              <BespokeServicesSection />
              
            </div>

            
          </div>
        </section>
      </main>

      {/* Mobile menu icon */}
      {/* <div className="flex max-w-full flex-shrink-0 items-start self-stretch px-[50px]">
        <Image
          className="relative max-w-full flex-1 flex-shrink-0"
          alt="menu"
          src="/images/acc1.png"
          width={1340}
          height={2}
        />
      </div> */}
    </div>
  );
}
