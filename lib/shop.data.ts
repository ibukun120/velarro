
type Category = {
  title: string;
  href: string;
  image?: string;
};


export const circleItems = [
    { title: "Zino Z Collection Green", image: "/images/shop1.avif" },
    { title: "Davidoff Year of the Horse", image: "/images/shop2.avif" },
    { title: "Gifting 2025", image: "/images/shop3.avif" },
    { title: "Davidoff Grande Humidor", image: "/images/shop4.avif" },
    { title: "Davidoff Chefs Edition 2025", image: "/images/shop5.avif" },
    { title: "Winston Churchill Humidors", image: "/images/shop6.avif" },
    { title: "Oro Blanco Special Reserve 111 Years", image: "/images/shop7.avif" },
    { title: "Davidoff Travel Humidor Business", image: "/images/shop8.avif" },
    { title: "Discover Davidoff Maduro", image: "/images/shop9.avif" },
];


export const categories: Category[] = [
  {
    title: "Show All",
    href: "/shop",
  },
  {
    title: "Cigars",
    image: "/cigar8.avif",
    href: "/shop/cigars",
  },
  {
    title: "Cigarillos",
    image: "/images/shop11.avif",
    href: "/shop/cigarillos",
  },
  {
    title: "Accessories",
    image: "/cigar9.avif",
    href: "/shop/accessories",
  },
  {
    title: "Pipe & Tobacco",
    image: "/images/shop10.avif",
    href: "/shop/pipe-tobacco",
  },
  {
    title: "All Products",
    image: "/cigar7.avif",
    href: "/shop/all-products",
  },
];