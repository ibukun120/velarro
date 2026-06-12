export type ProductSpec = {
  iconName: string; 
  label: string;
};

export type ProductVariant = {
  label: string;     
  price: number;      
};

export type ProductTabKey =
  | "cigar-story"
  | "gift-sellers"
  | "taste-description"
  | "cigar-pairing"
  | "cigar-stories"
  | "enjoyment-details";

export type CigarStoryItem = {
  title: string;
  description: string;
  format: string;
  size: string;
  intensity: string | number;
};

export type ProductStory = {
  intro?: string;
  cigars?: CigarStoryItem[];
  image?: string;
};

export type ProductTab = {
  key: ProductTabKey;
  label: string;
  content?: {
    text?: string;
    image?: string;
    items?: {
      title: string;
      description: string;
      format?: string;
      size?: string;
      intensity?: string | number;
    }[];
    imagePosition?: "left" | "right";
  };
  scrollToId?: string;
};

export type EnjoymentDetailSection = {
  title: string;
  flavors: string[];
  description: string;
};

export type Product = {
  id: number | string;
  brand: string;
  price?: number;
  title: string;
  slug: string;
  image: string;
  images?: string[];
  intensity: string | number;
  body?: number;
  ringGauge?: number;
  lengthIn?: number;
  lengthCm?: number;
  diameterCm?: number;
  duration?: string;
  enjoymentTime?: number;
  selectedVariant?: ProductVariant;

  format: string;
  badge?: "BESTSELLER" | "TOP GIFT" | "NEW";
  ctaLabel?: string;
  ctaHref?: string;
  boxLabel?: string;
  specs?: ProductSpec[];
  ratingBadge?: {
    score: number;  
    label: string;   
  };
  variants?: ProductVariant[];
  tasteNotes?: string[];
  pairings?: string[];
  packaging?: string[];
  for?: string[];
  origin?: string;
  cigarStory?: CigarStoryItem[];
  giftSellers?: Product[];
  tabs?: ProductTab[];
  enjoymentDetails?: {
    intro: string;
    sections: EnjoymentDetailSection[];
  };
  similarProducts?: Product[];
};
