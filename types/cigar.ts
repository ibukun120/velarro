export type Cigar = {
  id: number;
  image: string;
  images?: string[];
  badge?: string;
  title: string;
  brand: string;
  format?: string;
  hexCode?: string;
  ringGauge?: number | null;
  size: string;
  length: string;
  lengthCm?: string;
  diameter?: string;
  diameterCm?: string;
  burnTime: string;
  intensity: number;
  flavors: string;
  tasteNotes?: string[];
  wrapper?: string;
  binder?: string;
  filler?: string;
  origin?: {
    wrapper: string;
    binder: string;
    filler: string;
  };
  packaging?: string[];
  pairings?: string[];
  story?: string;
  pricing?: {
    boxOf25?: { price: number; pricePerCigar: number };
    boxOf10?: { price: number; pricePerCigar: number };
  };
};