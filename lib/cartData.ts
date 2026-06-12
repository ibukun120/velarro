import { CartItemType, SavedItemType } from "@/types/cart";

export const mockCartItems: CartItemType[] = [
  {
    id: "1",
    title: "Velarro Limited Compendium",
    image: "/productDetails/img1.png", // Placeholder image for box
    size: "10",
    notes: "Vanilla, brioche, roasted coffee, cream, honey",
    deliveryDate: "30th March",
    inStock: true,
    limitedDeal: true,
    coupon: "Save 5%",
    originalPrice: 45.00,
    price: 45.0,
    quantity: 1,
    selected: false,
  },
  {
    id: "2",
    title: "Velarro Opus Magnifique",
    image: "/productDetails/img2.png", // Placeholder image for single item
    size: "10",
    notes: "Vanilla, brioche, roasted coffee, cream, honey",
    deliveryDate: "30th March",
    inStock: true,
    price: 20.0,
    quantity: 2,
    selected: false,
  },
];

export const buyAgainItems: CartItemType[] = [
  {
    id: "3",
    title: "Platinum Celebration",
      image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959502876-catagory-3-celebration-series-platinum-celebration.webp", // Placeholder image for box
    size: "10",
    notes: "Vanilla, brioche, roasted coffee, cream, honey",
    deliveryDate: "30th March",
    inStock: true,
    limitedDeal: true,
    coupon: "Save 5%",
    originalPrice: 450,
    price: 456,
    quantity: 1,
    selected: false,
  },
  {
    id: "4",
    title: "Celebration Gold",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959994269--catagory-8-celebration-gold-jubilee-edition.webp", // Placeholder image for single item
    size: "",
    notes: "Vanilla, brioche, roasted coffee, cream, honey",
    deliveryDate: "30th March",
    inStock: false,
    price: 20.0,
    quantity: 2,
    selected: false,
  },
];

export const savedItems : SavedItemType[]= [
  {
    id: "5",
    title: "Platinum Celebration",
    specs: "⌀ 52 RG • 7.5 in • 100-120min",
    intensity: 4, // out of 5
    description: "Vanilla, brioche, roasted coffee, cream, honey",
    salesText: "+200 bought last month",
    price: 45.0,
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959502876-catagory-3-celebration-series-platinum-celebration.webp",
    tag: "Top Gift",
    labels: ["Ultra-Premium Labels", "Platinum Edition"],
  },
  {
    id: "6",
    title: "Celebration Gold",
    specs: "⌀ 52 RG • 7.5 in • 100-120min",
    intensity: 4,
    description: "Vanilla, brioche, roasted coffee, cream, honey",
    salesText: "+100 bought last month",
    price: 48.0,
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959994269--catagory-8-celebration-gold-jubilee-edition.webp",
    tag: "Top Gift",
    labels: ["Ultra-Premium Labels", "Platinum Edition"],
  },
  {
    id: "7",
    title: "After Dark",
    specs: "⌀ 52 RG • 7.5 in • 100-120min",
    intensity: 4,
    description: "Vanilla, brioche, roasted coffee, cream, honey",
    salesText: "+250 bought last month",
    price: 50.0,
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959869868-category-7-obsidian.webp",
    tag: "Top Gift",
    labels: ["Ultra-Premium Labels", "Platinum Edition"],
  },
  {
    id: "8",
    title: "House Collection",
    specs: "⌀ 52 RG • 7.5 in • 100-120min",
    intensity: 4,
    description: "Vanilla, brioche, roasted coffee, cream, honey",
    salesText: "+350 bought last month",
    price: 60.0,
      image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959672656-category-6---grand-cru.webp",
    tag: "Top Gift",
    labels: ["Ultra-Premium Labels", "Platinum Edition"],
  },
];