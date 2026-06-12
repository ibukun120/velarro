"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Product, ProductVariant } from "@/types/product";
import { Search, ShoppingBasket, X } from "lucide-react";

import DiscoverDropDown from "./DiscoverDropDown";
import GiftDropDown from "./GiftDropDown";
import ShopDropDown from "./ShopDropDown";
import { mockProducts } from "@/lib/products.data";
import Link from "next/link";
import { useCartStore } from "@/store/cart.store";
import { useCartUIStore } from "@/store/cart-ui.store";
interface NavbarLeftProps {
  isOpen: boolean;
  navTextColor: string;
  iconColor: string;
  toggleMenu: () => void;
}

const links = ["Discover", "Gift", "Shop"];

export default function NavbarLeft({
  isOpen,
  navTextColor,
  iconColor,
  toggleMenu,
}: NavbarLeftProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  const openCart = useCartUIStore((state) => state.openCart);

  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchRef = useRef<HTMLDivElement | null>(null);

  // Dropdown toggle
  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const renderDropdown = () => {
    switch (activeDropdown) {
      case "Discover":
        return <DiscoverDropDown closeDropdown={() => setActiveDropdown(null)} />;
      case "Gift":
        return <GiftDropDown closeDropdown={() => setActiveDropdown(null)} />;
      case "Shop":
        return <ShopDropDown closeDropdown={() => setActiveDropdown(null)} />;
      default:
        return null;
    }
  };

  // Handle outside clicks for standard dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const activeRef = activeDropdown ? containerRefs.current[activeDropdown] : null;
      if (activeRef && !activeRef.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Handle outside clicks for search dropdown
  useEffect(() => {
    const handleClickOutsideSearch = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutsideSearch);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideSearch);
  }, [isSearchOpen]);

  // Filter products based on search query
  const searchResults: Product[] = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return mockProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="flex items-center md:gap-10 gap-5 relative">
      {/* Logo / menu toggle */}
      <div
        onClick={toggleMenu}
        className={`cursor-pointer flex items-center gap-1 hover:text-[#C59949] transition ${iconColor}`}
      >
        <Image src="/logo.jpg" alt="logo" width={45} height={45} />
        <h1
          className={`md:block hover:text-[#C59949] transition hidden cursor-pointer text-sm md:text-2xl uppercase font-medium ${isOpen ? "text-[#C59949]" : navTextColor
            }`}
        >
          {isOpen ? "Close" : "Menu"}
        </h1>
      </div>

      {/* Search Button + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className={`${navTextColor} hover:text-[#C59949] transition`}
          aria-label={isSearchOpen ? "Close search" : "Open search"}
        >
          {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-23.75 left-0 w-screen h-screen bg-white z-30 overflow-auto shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-5 py-3">
                <div className="max-w-3xl mx-auto relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none rounded-t-md"
                  />
                </div>

                <div className="max-h-[70vh] overflow-y-auto max-w-3xl mx-auto block">
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/shop/all-products/${product.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-4 justify-between px-4 py-3 bg-gray-100 my-3 hover:bg-gray-100 transition"
                      >
                        <div className="flex items-center gap-2 ">
                          <Image
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded"
                            width={48}
                            height={48}
                          />
                          <div>
                            <p className="text-sm font-medium">{product.title}</p>
                            <p className="text-xs text-gray-500">{product.brand}</p>
                            {product.variants && product.variants.length > 1 && (
                              <div className="flex justify-center gap-2 mt-2 flex-wrap">
                                {product.variants.map((variant, i) => (
                                  <button
                                    key={i}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedVariant(variant);
                                    }}
                                    className={`px-3 py-1 text-xs border rounded uppercase tracking-widest ${selectedVariant?.label === variant.label
                                        ? "bg-black text-neutral-1 border-black"
                                        : "bg-[#C59949]/10 text-[#333] border-[#C59949]"
                                      }`}
                                  >
                                    {variant.label} - ${variant.price.toFixed(2)}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            useCartStore.getState().addItem(
                              {
                                ...product,
                                selectedVariant: product.variants?.[0], // safe default
                              },
                              1
                            );

                            openCart();
                            setIsSearchOpen(false); // ✅ auto-close dropdown
                          }}
                          className="ml-4 whitespace-nowrap flex items-center space-x-2 rounded-sm bg-[#C59949] px-4 py-2 text-sm uppercase tracking-wide hover:bg-[#333333] hover:text-neutral-1 transition"
                        >
                          <ShoppingBasket size={18} />
                          <span className="mt-1">Add to cart</span>
                        </button>

                      </Link>
                    ))
                  ) : (
                    <p className="p-4 text-sm text-gray-500">
                      No products found, try something else.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation links */}
      {links.map((link) => (
        <div
          key={link}
          ref={(el) => {
            containerRefs.current[link] = el;
          }}
          className="md:flex hidden flex-col relative"
        >
          <button
            onClick={() => toggleDropdown(link)}
            className={`text-sm md:text-2xl uppercase font-medium ${navTextColor} hover:text-[#C59949] transition`}
          >
            {link}
          </button>

          <AnimatePresence>
            {activeDropdown === link && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-23.75 left-0 w-full bg-white shadow-lg z-20 overflow-hidden"
              >
                {renderDropdown()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}