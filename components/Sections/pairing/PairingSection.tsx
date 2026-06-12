import Container from "@/components/Layouts/Container";
import PairingCard from "./PairingCard";
// import PairingHeroVariant from "./BottomHero";

const pairings = [
  {
    category: "Category 01 Featured",
    title: "Cigars & Whisky",
    description:
      "The rich, smoky notes of Amrut Fusion and Paul John expressions complement the depth and complexity of Velarro's full-bodied blends, creating a harmonious sensory experience. Eight cigars in the collection are whisky-matched.",
    drinkKey: "whisky" as const,
  },
  {
    category: "Category 02",
    title: "Cigars & Rum",
    description:
      "From Old Monk Legend to McDowell's Reserve — dark, aged rums match the sweetness and earthiness of Velarro's medium-bodied profiles.",
    drinkKey: "rum" as const,
  },
  {
    category: "Category 03",
    title: "Cigars & Sparkling",
    description:
      "Moët Brut, Sula Brut, and Sula Sparkling cleanse the palate and amplify the lighter floral notes of Velarro's milder lanceros and coronas.",
    drinkKey: "sparkling" as const,
  },
  {
    category: "Category 04",
    title: "Cigars & Wine",
    description:
      "Sula Chenin Blanc and Riesling bring delicate acidity to the floral, fruit-forward Velarro lanceros and light coronas.",
    drinkKey: "wine" as const,
  },
  {
    category: "Category 05",
    title: "Cigars & Coffee",
    description:
      "Filter coffee, cappuccino, and espresso deepen the roasted, nutty notes inherent to Vellaro’s medium profile blends.",
    drinkKey: "coffee" as const,
  },
  {
    category: "Category 06",
    title: "Cigars & Cocktails",
    description:
      "Gin & Tonic, Baileys on ice, and infused spirits create unexpected, refreshing pairings with Velarro's lighter, herb-forward vitolas.",
    drinkKey: "cocktail" as const,
  },
];

export default function PairingSection() {
  return (
    <section className="bg-primary-50">
      {/* Header */}
      {/* py-20 px-6 md:px-16 */}
      <Container>
        <div className="mb-12">
          {/* <p className="text-sm text-gray-600 mb-6">
            Find Your Perfect Pairing -- &gt;
          </p> */}

          {/* <Container className="h-[50vh]">

          </Container>

          <p className="text-[16px] tracking-widest text-primary-500 uppercase mb-2">
            --- Pairing Categories
          </p>

          <h2 className="text-3xl text-[#1a1a1a]">
            Six Ways to <span className="text-primary-500">Savour</span>
          </h2> */}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairings.map((item, index) => (
            <PairingCard key={index} {...item}  />
          ))}
        </div>
      </Container>
    </section>
  );
}
