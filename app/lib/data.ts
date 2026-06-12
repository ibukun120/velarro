export const cartItems = [
  {
    id: 1,
    name: "Celebration Gold",
    qty: 1,
    size: "10",
    price: 45,
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959994269--catagory-8-celebration-gold-jubilee-edition.webp",
  },
  {
    id: 2,
    name: "After Dark",
    qty: 2,
    size: "",
    price: 20,
     image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779959869868-category-7-obsidian.webp",
  },
];

export const savedAddresses = [
  {
    id: "home",
    label: "Home",
    name: "John Smith",
    address: "123 Maple St, Springfield, IL 62704",
    phone: "+1 (555) 012-3456",
  },
  {
    id: "work",
    label: "Work",
    name: "John Smith",
    address: "123 Maple St, Springfield, IL 62704",
    phone: "+1 (555) 021-4323",
  },
];

export const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
export const shipping = 5;
export const tax = 3;
export const total = subtotal + shipping + tax;
