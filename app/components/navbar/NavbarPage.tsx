
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCartUIStore } from "@/store/cart-ui.store";

import { NavbarLeft, NavbarMiddle, NavbarRight, SlideMenu, CartSlider } from ".";
import DiscoverDropDown from "./DiscoverDropDown";
import GiftDropDown from "./GiftDropDown";
import ShopDropDown from "./ShopDropDown";
import AccountSlider from "../accounts/account-slider";

export default function NavbarPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { isCartOpen, toggleCart } = useCartUIStore();

  const pathname = usePathname();
  const isProductPage =
    pathname.startsWith("/shop/all-products/") &&
    pathname.split("/").length === 4;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  //const toggleCart = () => setIsCartOpen((prev) => !prev);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow =
      isOpen || isCartOpen || isAccountOpen ? "hidden" : "";

  }, [isOpen, isCartOpen, isAccountOpen]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = current - previous;

    if (direction > 0 && current > 100) setHidden(true);
    else if (direction < 0) setHidden(false);

    setHasScrolled(current > 100);
  });

  const navTextColor =
    isAccountOpen || isOpen ? "text-[#333333]" : "text-neutral-1";

  const iconColor = navTextColor;
  const isAuthenticated = true;

  const navbarBg = isAccountOpen
    ? "bg-white"
    : isOpen
      ? "bg-white"
      : isProductPage
        ? "bg-[#333333]"
        : hasScrolled
          ? "bg-black/80"
          : "bg-transparent";

  // Shop sub-links
  const shopLinks = ["All", "Cigars", "Cigarillos", "Accessories", "Pipe & Tobacco"];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        layout
        variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 px-5 pt-5 z-50
    transition-colors duration-500 ease-in-out
    ${navbarBg}`}
      >
        <div className="mx-auto flex items-center justify-between pb-5 border-b border-[#C59949] transition-all duration-300">
          <NavbarLeft isOpen={isOpen} navTextColor={navTextColor} iconColor={iconColor} toggleMenu={toggleMenu} />

          <NavbarMiddle isOpen={isOpen} />

          <NavbarRight
            isOpen={isOpen}
            navTextColor={navTextColor}
            iconColor={iconColor}
            toggleCart={toggleCart}
            onAccountClick={() => {
              if (isAuthenticated) {
                setIsAccountOpen(true); // open account menu
              } else {
                window.location.href = "/account/login";
              }
            }}
          />

          {/* Mobile dropdown buttons */}
          {
            !pathname.startsWith("/shop") && (
              <div className="absolute left-0 right-0 -bottom-9 md:hidden flex justify-center gap-8 z-50">
                {["Discover", "Gift", "Shop"].map((link) => (
                  <div key={link} className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link ? null : link)}
                      className="text-md uppercase font-medium text-neutral-1 hover:text-[#C59949] transition tracking-widest"
                    >
                      {link}
                    </button>

                    {/* Mobile dropdown */}
                    {activeDropdown === link && (
                      <div className="absolute md:static top-full left-0 w-screen md:hidden z-50">

                        {link === "Discover" && <DiscoverDropDown closeDropdown={() => {
                          // setActiveDropdown(null)
                          }} />}
                        {link === "Gift" && <GiftDropDown closeDropdown={() => {
                          // setActiveDropdown(null)
                          }} />}
                        {link === "Shop" && <ShopDropDown closeDropdown={() => setActiveDropdown(null)} />}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          }
        </div>

        {/* Shop sub-links below border-b */}
        {pathname.startsWith("/shop") && (
          <div className="hidden md:flex overflow-x-auto md:justify-center gap-10 py-3  lg:space-x-5 scrollbar-hide">
            {shopLinks.map((link) => (
              <button
                key={link}
                className="text-lg md:text-xl uppercase font-medium text-neutral-1 hover:text-[#C59949] transition whitespace-nowrap"
              >
                {link}
              </button>
            ))}
          </div>
        )}

        {/* Mobile shop links */}
        {pathname.startsWith("/shop") && (
          <div className="md:hidden flex overflow-x-auto gap-8 py-2 px-4 scrollbar-hide">
            {shopLinks.map((link) => (
              <button
                key={link}
                className="text-md uppercase font-medium text-neutral-1 hover:text-[#C59949] transition whitespace-nowrap"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </motion.nav>

      <SlideMenu isOpen={isOpen} />
      <CartSlider />
      <AccountSlider
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        user={{ firstName: "Akeem", lastName: "Odede" }}
        isAuthenticated={true}
        onTabSelect={(tab) => console.log("Selected tab from slider:", tab)}
      />
    </>
  );
}