export type FilterOption = {
  label: string;
  type: "checkbox" | "intensity";
  options: (string | { subheading: string; items: string[] })[];
};

export const FILTER_DATA: FilterOption[] = [
  {
    label: "FORMAT",
    type: "checkbox",
    options: [
      "Churchill", "Corona Larga", "Diademas", "Double Corona",
      "Gran Churchill", "Gran Toro", "Lancero", "Lonsdale",
      "Perfecto Grande", "Petit Corona", "Petit Robusto", "Robusto",
      "Robusto Extra", "Robusto Gordo", "Salomones", "Toro",
      "Toro Box-pressed", "Toro Gordo",
    ],
  },
  {
    label: "ORIGIN",
    type: "checkbox",
    options: [
      {
        subheading: "Wrapper",
        items: [
          "Corojo 99", "Corojo 99 Maduro", "Habano 2000",
          "Habano 2000 Maduro", "Corojo 99 Puro", "Criollo 98 Puro",
          "Habano 2000 Puro", "Piloto Cubano Puro", "Ometepe Hybrid Puro",
        ],
      },
      {
        subheading: "Binder",
        items: [
          "Criollo 98", "Corojo 99 Puro", "Criollo 98 Puro",
          "Habano 2000 Puro", "Piloto Cubano Puro", "Ometepe Hybrid Puro",
        ],
      },
      {
        subheading: "Filler",
        items: [
          "Piloto Cubano", "Ometepe", "Corojo", "Criollo",
          "Corojo + Piloto", "Piloto Cubano + Ometepe", "Criollo + Corojo",
          "Criollo + Piloto", "Corojo + Ometepe", "Ometepe + Corojo",
          "Corojo + Piloto Cubano", "Criollo + Piloto Cubano",
        ],
      },
    ],
  },
  {
    label: "SIZE",
    type: "checkbox",
    options: [
      "Small: 1.9 to 2.0 cm",
      "Medium: 2.0 to 2.2 cm",
      "Large: 2.2 to 2.4 cm",
    ],
  },
  {
    label: "INTENSITY",
    type: "intensity",
    options: [],
  },
  {
    label: "TASTE NOTES",
    type: "checkbox",
    options: [
      "Cedar Wood", "Roasted Coffee", "Vanilla", "Almond", "Leather",
      "Hazelnut", "Dark Chocolate", "Oak wood", "Brioche", "Caramel",
      "Cream", "Floral Spice", "Cashew", "Dried Apricots", "Black Pepper",
      "Cocoa", "Roasted nuts", "Dark Praline'", "Malt", "Honey",
      "Dried Fruit", "Citrus", "Dark cherries", "Molasses", "Prune",
      "Earth", "Fresh herbs",
    ],
  },
  {
    label: "PAIRINGS",
    type: "checkbox",
    options: [
      "Espresso", "Coffee", "Cappuccino", "Champagne", "Bourbon whiskey",
      "Rye whiskey", "Dark rum", "Rum", "Whiskey", "Whiskey sour",
      "Wheat beer", "Cocktails", "Citrus cocktails", "Mojito",
    ],
  },
  {
    label: "ENJOYMENT TIME",
    type: "checkbox",
    options: [
      "Under 30 min", "40–59 min", "60–79 min",
      "70–99 min", "100-119 min", "120-140 min",
    ],
  },
];