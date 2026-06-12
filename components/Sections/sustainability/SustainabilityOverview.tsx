import ApproachStatement from "./ApproachStatement";
import ContentSection from "./ContentSection";
//import type { SustainabilitySection } from "@/types";


export interface SustainabilitySection {
  id: string;
  title: string;
  body: string;
}

// ─── Static data ─────────────────────────────────────────────────────────────
const sections: SustainabilitySection[] = [
  {
    id: "responsible-sourcing",
    title: "Responsible Sourcing",
    body: "Tobacco leaves, coffee beans, and tea leaves are selected through traceable agricultural partners that follow soil stewardship practices, reduced pesticide dependency, and crop rotation methods where applicable. Priority is given to estates that maintain long-term land viability rather than yield maximization. Suppliers are required to comply with local environmental regulations and provide documentation on cultivation practices.",
  },
  {
    id: "handcrafted-production",
    title: "Handcrafted production standards",
    body: "All cigars and cigarillos are hand-rolled in controlled production environments that minimize industrial energy use. Velarro avoids unnecessary mechanization in final assembly to preserve craftsmanship while limiting energy intensity. Production waste, including leaf trimmings, is segregated for composting or agricultural reuse where supply-chain infrastructure allows.",
  },
  {
    id: "sustainable-materials",
    title: "Sustainable materials in apparel and accessories",
    body: "Velarro apparel is developed using certified organic cotton and low-impact dye processes. The focus is on fiber integrity, reduced water consumption, and elimination of synthetic blends where performance requirements do not demand them. Packaging textiles and accessory components are selected for durability to reduce replacement cycles and downstream waste.",
  },
  {
    id: "packaging-reduction",
    title: "Packaging reduction and material control",
    body: "Packaging systems are designed with minimal layering and a preference for recyclable or compostable substrates. Rigid presentation boxes use responsibly sourced paperboard and reduced lamination. Where luxury finishing techniques are used, they are applied selectively rather than across full surfaces to limit material complexity and recycling friction.",
  },
  {
    id: "transport-efficiency",
    title: "Transport and distribution efficiency",
    body: "Distribution planning prioritizes consolidated shipping and regional batching to reduce transport emissions intensity. Air freight is minimized except where product integrity or timing requirements are critical. Inventory positioning is structured to reduce unnecessary long-haul redistribution.",
  },
  {
    id: "water-land-impact",
    title: "Water and land impact awareness",
    body: "Agricultural partners are encouraged to implement water-efficient irrigation systems and soil conservation methods. Velarro does not assume direct control over farmland operations but enforces supplier alignment through procurement standards and periodic review.",
  },
  {
    id: "continuous-improvement",
    title: "Continuous improvement framework",
    body: "Sustainability performance is treated as an evolving baseline. Velarro maintains internal audits across materials, packaging, and logistics, with iterative updates to sourcing criteria as higher-standard materials and processes become commercially viable.",
  },
];

// ─── SustainabilityOverview ───────────────────────────────────────────────────
// Wraps the approach statement + all individual section cards.
// ──────────────────────────────────────────────────────────────────────────────

export default function SustainabilityOverview() {
  return (
    <main
      className="
        w-full flex flex-col items-start
        pt-11 pb-[78px] px-0
        gap-[75px]
        max-w-[1243px]
        z-[5]
        max-[1250px]:pt-[29px] max-[1250px]:pb-[51px] max-[1250px]:max-w-full
        max-[1100px]:pt-5 max-[1100px]:pb-[33px]
        max-[750px]:gap-[37px] max-[750px]:pb-[21px]
        max-[450px]:gap-[19px]
      "
      aria-label="Sustainability content"
    >
      <ApproachStatement />

      {sections.map((section) => (
        <ContentSection key={section.id} section={section} />
      ))}
    </main>
  );
}