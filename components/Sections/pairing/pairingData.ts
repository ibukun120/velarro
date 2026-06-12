export type MatchLevel = "Perfect Match" | "Strong Match" | "Good Match";
export type StrengthBadge = "PERFECT MATCH" | "PERFECT" | "STRONG" | "GOOD";

export interface CigarCard {
  id: string;
  collection: string;
  name: string;
  vitola: string;
  size: string;
  ringGauge: string;
  tastingNotes: string;
  pairsWith: string;
  preparation: string;
  matchDots: number; // out of 5
  matchLevel: MatchLevel;
  badge: StrengthBadge;
  image?: string;
}

export type StrengthKey = "light" | "medium" | "full" | "no-preference";
export type DrinkKey =
  | "whisky"
  | "rum"
  | "sparkling"
  | "wine"
  | "coffee"
  | "beer"
  | "cocktail"
  | "surprise-me";

export interface DrinkOption {
  id: DrinkKey;
  label: string;
  cigarCount: number;
}

export interface StrengthOption {
  id: StrengthKey;
  label: string;
  description: string;
}

// ─── DRINK OPTIONS (Step 1) ───────────────────────────────────────────────────
export const drinkOptions: DrinkOption[] = [
  { id: "whisky", label: "Whisky", cigarCount: 14 },
  { id: "rum", label: "Rum", cigarCount: 4 },
  { id: "sparkling", label: "Sparkling", cigarCount: 4 },
  { id: "wine", label: "Wine", cigarCount: 2 },
  { id: "coffee", label: "Coffee", cigarCount: 2 },
  { id: "beer", label: "Beer", cigarCount: 1 },
  { id: "cocktail", label: "Cocktail", cigarCount: 3 },
  { id: "surprise-me", label: "Surprise Me", cigarCount: 30 },
];

// ─── STRENGTH OPTIONS (Step 2) ────────────────────────────────────────────────
export const strengthOptions: Record<DrinkKey, StrengthOption[]> = {
  whisky: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  rum: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  sparkling: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  wine: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  coffee: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  beer: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  cocktail: [
    { id: "light", label: "Light", description: "Delicate, floral, and airy. Perfect for beginners or daytime enjoyment." },
    { id: "medium", label: "Medium", description: "Balanced body with smooth complexity. Ideal for the everyday smoker." },
    { id: "full", label: "Full", description: "Bold, rich, and intense. For those who love a powerful smoke." },
    { id: "no-preference", label: "No Preference", description: "Show me everything — I'll decide from the full range." },
  ],
  "surprise-me": [],
};

// ─── CIGAR CARDS DATA ─────────────────────────────────────────────────────────

const whiskyCigars: Record<StrengthKey, CigarCard[]> = {
  light: [
    {
      id: "vintage-88-lancero",
      collection: "Velarro Vintage No. 88",
      name: "Vintage No. 88 - Lancero",
      vitola: "Lancero",
      size: "7.5in",
      ringGauge: "38",
      tastingNotes: "Dried floral, honey, ceder, almonds. Soft airy refined finish.",
      pairsWith: "Indri",
      preparation: "Sip Lightly to preserve subtlety. Allow cigar to lead.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/trini.png",
    },
    {
      id: "velarro-private-celler-lancero",
      collection: "Velarro Private Celler",
      name: "Velarro Private Celler - Lancero",
      vitola: "Lancero",
      size: "7.5in",
      ringGauge: "38",
      tastingNotes: "Floral spice, vanilla bean, cedar, roasted coffee. Dried apricot sweetness.",
      pairsWith: "Rampur + Honey",
      preparation: "Add small honey drop and stir. Sip slowly for layered complexity.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/rampur.png"
    },
  ],
  medium: [
    {
      id: "velarro-reserve-robusto",
      collection: "Velarro Reserve",
      name: "Velarro Reserve - Robusto",
      vitola: "Robusto",
      size: "5.0in",
      ringGauge: "50",
      tastingNotes: "Cedar, roasted coffee, almond, vanilla. Lightly leathery with balanced smoothness.",
      pairsWith: "Paul John Nirvana",
      preparation: "Serve Neat and sip casually. Let cigar lead the experience.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/paulg.png"
    },
    {
      id: "velarro-terra-suprema-toro",
      collection: "Velarro Terra Suprema",
      name: "Velarro Terra Suprema - Toro",
      vitola: "Toro",
      size: "6.0in",
      ringGauge: "54",
      tastingNotes: "Earthy tones, cedar, roasted nuts, black pepper. Softens with honey.",
      pairsWith: "Amrut Fusion",
      preparation: "Serve neat. Let earthy notes align naturally.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/glass.png"
    },
  ],
  full: [
    {
      id: "limited-compendium-salomones",
      collection: "Velarro Limited Compendium",
      name: "Limited Compendium - Salomones",
      vitola: "Salomones",
      size: "7.2in",
      ringGauge: "57",
      tastingNotes: "Dark chocolate, cedar warmth, prune sweetness, roasted nuts. Long leathery earthy finish.",
      pairsWith: "Amrut Fusion Single Malt",
      preparation: "Let whisky rest to open smoky fruit. Sip slowly between draws.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT MATCH",
      image: "/images/pairing/paulg.png"
    },
    {
      id: "masterpiece-blend-diademes",
      collection: "Velarro Masterpiece Blend",
      name: "Masterpiece Blend - Diademes",
      vitola: "Diademes",
      size: "8.5in",
      ringGauge: "52",
      tastingNotes: "Cacao and oak, roasted almonds, dark cherry. Refined leather, lingering complexity.",
      pairsWith: "Paul John Edited",
      preparation: "Allow Whiskey to breathe. Slow deliberate sips to mirror layered evolution.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT MATCH",
      image: "/images/pairing/paulg.png"
    },
    {
      id: "opus-magnifique-double-corona",
      collection: "Velarro Opus Magnifique",
      name: "Opus Magnifique - Double Corona",
      vitola: "Double Corona",
      size: "7.6in",
      ringGauge: "49",
      tastingNotes: "Dark chocolate, oak, roasted coffee, cinnamon spice. Warm structured aromatic finish.",
      pairsWith: "Indri-Trini",
      preparation: "Sip neat and slowly. Maintain calm pace to match steady evolution.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT MATCH",
      image: "/images/pairing/trini.png"
    },
    {
      id: "velarro-anejo-10-churchill",
      collection: "Velarro Anejo 10",
      name: "Velarro Añejo 10 - Churchill",
      vitola: "Churchill",
      size: "7.0in",
      ringGauge: "48",
      tastingNotes: "Dark chocolate, leather, dried fruit, oak. Caramel-rich with smooth aged depth.",
      pairsWith: "Amrut Peated",
      preparation: "Small sips to match intensity. Let smoke settle before each sip.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT",
      image: "/images/pairing/orange.png"
    },
    {
      id: "velarro-sovereign-toro",
      collection: "Velarro Sovereign",
      name: "Velarro Sovereign - Toro",
      vitola: "Toro",
      size: "6.0in",
      ringGauge: "54",
      tastingNotes: "Leather, black pepper, cacao, roasted nuts. Espresso-like deep intense finish.",
      pairsWith: "Amrut Fusion",
      preparation: "Sip Slowly and consistently. Maintain rhythm with each draw.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT",
      image: "/images/pairing/glass.png"
    },
    {
      id: "centennial-reserve-toro-gordo",
      collection: "Velarro Centennial Reserve",
      name: "Centennial Reserve - Toro Gordo",
      vitola: "Toro Gordo",
      size: "6.5in",
      ringGauge: "56",
      tastingNotes: "Black pepper, roasted almonds, cacao, oak. Leathery and powerful finish.",
      pairsWith: "Rampur Double Cask",
      preparation: "Swirl gently before sipping. Flavors unfold gradually alongside cigar.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT",
      image: "/images/pairing/rampur.png",
    },
    {
      id: "imperial-double-corona",
      collection: "Velarro Imperial",
      name: "Imperial - Double Corona",
      vitola: "Double Corona",
      size: "7.6in",
      ringGauge: "49",
      tastingNotes: "Leather, black pepper, cacao, roasted nuts. Bold espresso-driven finish.",
      pairsWith: "Amrut Cask Strength",
      preparation: "Small pours due to intensity. Sip slowly and deliberately.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT",
      image: "/images/pairing/glass.png",
    },
    {
      id: "obsidian-robusto-gordo",
      collection: "Velarro Obsidian",
      name: "Obsidian - Robusto Gordo",
      vitola: "Robusto Gordo",
      size: "5.5in",
      ringGauge: "56",
      tastingNotes: "Dark chocolate, espresso, leather, oak. Intense and long finish.",
      pairsWith: "Amrut Peated",
      preparation: "Serve neat. Sip sparingly. Let each draw fully develop.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT",
      image: "/images/pairing/orange.png",
    },
    {
      id: "oro-oscuro-double-corona",
      collection: "Velarro Oro Oscuro",
      name: "Oro Oscuro - Double Corona",
      vitola: "Double Corona",
      size: "7.5in",
      ringGauge: "49",
      tastingNotes: "Dark cherries, cacao, roasted coffee, molasses. Bold, sweet, enduring finish.",
      pairsWith: "Rampur select",
      preparation: "Add a drop of water to unlock fruit. Alternative draw and sip.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/rampur.png"
    },
    {
      id: "black-label-reserve-churchill",
      collection: "Velarro Black Label Reserve",
      name: "Black Label Reserve - Churchill",
      vitola: "Churchill",
      size: "7.0in",
      ringGauge: "50",
      tastingNotes: "Roasted nuts, cacao, cedar, black pepper. Molasses sweetness with bold edge.",
      pairsWith: "Paul John Bold",
      preparation: "Serve neat. Measured sips to complement spice intensity.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/paulg.png"
    },
  ],
  "no-preference": [], // computed below
};

// Whisky no-preference = all unique cigars across light + medium + full
whiskyCigars["no-preference"] = [
  ...whiskyCigars.full,
  ...whiskyCigars.medium,
  ...whiskyCigars.light,
];

// ─── RUM ──────────────────────────────────────────────────────────────────────
const rumCigars: Record<StrengthKey, CigarCard[]> = {
  light: [], // No Exact Match
  medium: [
    {
      id: "velarro-grand-cru-toro",
      collection: "Velarro Grand Cru",
      name: "Velarro Grand Cru - Toro",
      vitola: "Toro",
      size: "6.0in",
      ringGauge: "54",
      tastingNotes: "Hazelnut, dark chocolate, oak, brioche. Caramel-rich and rounded finish.",
      pairsWith: "Old Monk Supreme",
      preparation: "Room temperature. Sip slowly for a dessert-like pairing.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/oldmonk1.png"
    },
    {
      id: "midnight-gold-gran-toro",
      collection: "Velarro Midnight Gold",
      name: "Midnight Gold - Gran Toro",
      vitola: "Gran Toro",
      size: "6.5in",
      ringGauge: "58",
      tastingNotes: "Caramel, roasted almonds, vanilla, leather. Subtle rum sweetness.",
      pairsWith: "McDowell's Celebration Rum",
      preparation: "Neat at room temperature. Sip gently to soften intensity.",
      matchDots: 3,
      matchLevel: "Good Match",
      badge: "GOOD",
      image: "/images/pairing/mcrum.png",
    },
  ],
  full: [
    {
      id: "velarro-heritage-collection-salomones",
      collection: "Velarro Heritage Collection",
      name: "Velarro Heritage Collection - Salomones",
      vitola: "Salomones",
      size: "7.2in",
      ringGauge: "57",
      tastingNotes: "Dark Cherries, roasted coffee, cinnamon, cedar. Softens into vanilla with warmth.",
      pairsWith: "Old Monk Legend",
      preparation: "Warm Rum in hand before sipping. Let each sip follow the draw.",
      matchDots: 5,
      matchLevel: "Perfect Match",
      badge: "PERFECT",
      image: "/images/pairing/oldmonk1.png",
    },
    {
      id: "velarro-nocturne-toro",
      collection: "Velarro Nocturne",
      name: "Velarro Nocturne - Toro",
      vitola: "Toro",
      size: "6.0in",
      ringGauge: "54",
      tastingNotes: "Dark praline, roasted almonds, cacao, black pepper. Bold with rum sweetness.",
      pairsWith: "Old Monk Gold Reserve",
      preparation: "Warm slightly before sipping. Keep pace slow and steady.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/oldmonk2.png"
    },
  ],
  "no-preference": [],
};
rumCigars["no-preference"] = [
  ...rumCigars.full,
  ...rumCigars.medium,
];

// ─── SPARKLING ────────────────────────────────────────────────────────────────
const sparklingCigars: Record<StrengthKey, CigarCard[]> = {
  light: [
    {
      id: "velarro-solstice-lancero",
      collection: "Velarro Solstice",
      name: "Velarro Solstice - Lancero",
      vitola: "Lancero",
      size: "7.5in",
      ringGauge: "38",
      tastingNotes: "Dried flowers, citrus, cedar, honey. Soft bright vanilla-kissed finish.",
      pairsWith: "Sula Sparkling",
      preparation: "Serve chilled. Light sips to enhance brightness.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/sula3.png",
    },
  ],
  medium: [
    {
      id: "signature-no1-perfecto-grande",
      collection: "Velarro Signature No.1",
      name: "Signature No. 1 - Perfecto Grande",
      vitola: "Perfecto Grande",
      size: "6.5in",
      ringGauge: "54",
      tastingNotes: "Cedar, honey, roasted coffee, buttery brioche. Smooth, slightly sweet, elegant.",
      pairsWith: "Sula Brut",
      preparation: "Serve well chilled. Light sips to refresh palate between draws.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/sula1.png"
    },
    {
      id: "platinum-celebration-gran-churchill",
      collection: "Velarro Platinum Celebration",
      name: "Platinum Celebration - Gran Churchill",
      vitola: "Gran Churchill",
      size: "7.5in",
      ringGauge: "52",
      tastingNotes: "Vanilla, cream, brioche, roasted coffee. Smooth honeyed luxurious finish.",
      pairsWith: "Moët Brut",
      preparation: "Keep chilled to maintain bubbles. Sip lightly to cleanse each draw.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/moetchamp.png",
    },
    {
      id: "velarro-jubilee-edition-robusto",
      collection: "Velarro Jubilee Edition",
      name: "Velarro Jubilee Edition - Robusto",
      vitola: "Robusto",
      size: "5.0in",
      ringGauge: "50",
      tastingNotes: "Cedar, cashew, roasted coffee, vanilla. Caramel-sweet and smooth.",
      pairsWith: "Sula Brut",
      preparation: "Serve chilled for crisp contrast. Light sips between draws.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/sula1.png"
    },
  ],
  full: [], // No Exact Match
  "no-preference": [],
};
sparklingCigars["no-preference"] = [
  ...sparklingCigars.light,
  ...sparklingCigars.medium,
];

// ─── WINE ─────────────────────────────────────────────────────────────────────
const wineCigars: Record<StrengthKey, CigarCard[]> = {
  light: [
    {
      id: "velarro-royal-leaf-churchill",
      collection: "Velarro Royal Leaf",
      name: "Velarro Royal Leaf - Churchill",
      vitola: "Churchill",
      size: "7.0in",
      ringGauge: "48",
      tastingNotes: "Cream, floral spice, cedar, cashew. Dried apricot sweetness in the finish.",
      pairsWith: "Sula Chenin Blanc",
      preparation: "Serve chilled. Let acidity balance the cigar's softness.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/sula1.png"
    },
    {
      id: "velarro-epoque-robusto-extra",
      collection: "Velarro Époque",
      name: "Velarro Époque - Robusto Extra",
      vitola: "Robusto Extra",
      size: "5.0in",
      ringGauge: "48",
      tastingNotes: "Cashew, brioche, vanilla bean, citrus brightness. Smooth with roasted coffee hints.",
      pairsWith: "Sula Riesling",
      preparation: "Serve chilled. Let sweetness complement citrus notes.",
      matchDots: 3,
      matchLevel: "Good Match",
      badge: "GOOD",
      image: "/images/pairing/sula2.png",
    },
  ],
  medium: [], // No Exact Match
  full: [],   // No Exact Match
  "no-preference": [],
};
wineCigars["no-preference"] = [...wineCigars.light];

// ─── COFFEE ───────────────────────────────────────────────────────────────────
const coffeeCigars: Record<StrengthKey, CigarCard[]> = {
  light: [
    {
      id: "primera-cosecha-petit-corona",
      collection: "Velarro Primera Cosecha",
      name: "Primera Cosecha - Petit Corona",
      vitola: "Petit Corona",
      size: "4.5in",
      ringGauge: "42",
      tastingNotes: "Floral spice, cedar, almonds, brioche. Soft and honeyed finish.",
      pairsWith: "Cappuccino",
      preparation: "Serve with creamy foam. Sip gently to match softness.",
      matchDots: 3,
      matchLevel: "Good Match",
      badge: "GOOD",
      image: "/images/pairing/goldcup.png",
    },
  ],
  medium: [
    {
      id: "velarro-puro-oro-robusto",
      collection: "Velarro Puro Oro",
      name: "Velarro Puro Oro - Robusto",
      vitola: "Robusto",
      size: "5.0in",
      ringGauge: "50",
      tastingNotes: "Cedar, roasted almonds, cream, caramel. Smooth with vanilla sweetness.",
      pairsWith: "Filter Coffee",
      preparation: "Serve hot and strong. Sip slowly to balance creaminess.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/whitecup.png"
    },
  ],
  full: [], // No Exact Match
  "no-preference": [],
};
coffeeCigars["no-preference"] = [
  ...coffeeCigars.medium,
  ...coffeeCigars.light,
];

// ─── BEER ─────────────────────────────────────────────────────────────────────
const beerCigars: Record<StrengthKey, CigarCard[]> = {
  light: [
    {
      id: "estate-series-lonsdale",
      collection: "Velarro Estate Series",
      name: "Estate Series - Lonsdale",
      vitola: "Petit Corona",
      size: "6.5in",
      ringGauge: "42",
      tastingNotes: "Cedar, fresh bread, malt, honey. Nutty and soft finish.",
      pairsWith: "Wheat Beer",
      preparation: "Serve well chilled. Light sips to refresh between draws.",
      matchDots: 3,
      matchLevel: "Good Match",
      badge: "GOOD",
      image: "/images/pairing/beer.png"
    },
  ],
  medium: [], // No Exact Match
  full: [],   // No Exact Match
  "no-preference": [],
};
beerCigars["no-preference"] = [...beerCigars.light];

// ─── COCKTAIL ─────────────────────────────────────────────────────────────────
const cocktailCigars: Record<StrengthKey, CigarCard[]> = {
  light: [
    {
      id: "velarro-crown-reserve-petit-robusto",
      collection: "Velarro Crown Reserve",
      name: "Velarro Crown Reserve - Petit Robusto",
      vitola: "Petit Robusto",
      size: "4.0in",
      ringGauge: "50",
      tastingNotes: "Hazelnut, cedar, cream, roasted almonds. Vanilla-smooth and approachable.",
      pairsWith: "Baileys",
      preparation: "Serve chilled. Small sips to enhance sweetness.",
      matchDots: 3,
      matchLevel: "Good Match",
      badge: "GOOD",
      image: "/images/pairing/teacocktail.png"
    },
    {
      id: "velarro-verde-classico-corona-larga",
      collection: "Velarro Verde Classico",
      name: "Velarro Verde Classico - Corona Larga",
      vitola: "Corona Larga",
      size: "6.0in",
      ringGauge: "44",
      tastingNotes: "Fresh herbs, cedar, cream, toasted bread. Light with cashew smoothness.",
      pairsWith: "Gin & Tonic",
      preparation: "Build fresh with mint and lime. Sip slowly for herbal lift.",
      matchDots: 3,
      matchLevel: "Good Match",
      badge: "GOOD",
      image: "/images/pairing/whitecocktail.png"
    },
  ],
  medium: [
    {
      id: "velarro-exclusivo-toro",
      collection: "Velarro Exclusivo",
      name: "Velarro Exclusivo - Toro",
      vitola: "Toro",
      size: "6.0in",
      ringGauge: "54",
      tastingNotes: "Chocolate, roasted coffee, cinnamon, hazelnut. Oaky and warm finish.",
      pairsWith: "Amrut + Cinnamon",
      preparation: "Serve well chilled. Light sips to refresh palate between draws.",
      matchDots: 4,
      matchLevel: "Strong Match",
      badge: "STRONG",
      image: "/images/pairing/orangecocktail.png"
    },
  ],
  full: [], // No Exact Match
  "no-preference": [],
};
cocktailCigars["no-preference"] = [
  ...cocktailCigars.medium,
  ...cocktailCigars.light,
];

// ─── ALL PAIRINGS DATA ────────────────────────────────────────────────────────
export const pairingData: Record<DrinkKey, Record<StrengthKey, CigarCard[]>> = {
  whisky: whiskyCigars,
  rum: rumCigars,
  sparkling: sparklingCigars,
  wine: wineCigars,
  coffee: coffeeCigars,
  beer: beerCigars,
  cocktail: cocktailCigars,
  "surprise-me": {
    light: [],
    medium: [],
    full: [],
    "no-preference": [
      ...whiskyCigars["no-preference"],
      ...rumCigars["no-preference"],
      ...sparklingCigars["no-preference"],
      ...wineCigars["no-preference"],
      ...coffeeCigars["no-preference"],
      ...beerCigars["no-preference"],
      ...cocktailCigars["no-preference"],
    ],
  },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
export function getCigars(drink: DrinkKey, strength: StrengthKey): CigarCard[] {
  return pairingData[drink]?.[strength] ?? [];
}

export function getDrinkLabel(drink: DrinkKey): string {
  return drinkOptions.find((d) => d.id === drink)?.label ?? drink;
}

export function getStrengthLabel(strength: StrengthKey): string {
  const labels: Record<StrengthKey, string> = {
    light: "Light Body",
    medium: "Medium Body",
    full: "Full Body",
    "no-preference": "No Preference",
  };
  return labels[strength];
}
