"use client";


import Link from "next/link";
import { MapPin, UserRound, ShoppingCart } from "lucide-react";
// import { useCartStore } from "@/store/cart.store";


interface NavbarRightProps {
  isOpen: boolean;
  navTextColor: string;
  iconColor: string;
  toggleCart: () => void;
  onAccountClick: () => void;
}

export default function NavbarRight({ navTextColor, iconColor, toggleCart, onAccountClick }: NavbarRightProps) {
  // const itemCount = useCartStore((state) => state.items.length);

  return (
    <div className="flex items-center md:gap-10 gap-5">
      <div className={`hidden md:flex items-center gap-2 hover:text-[#C59949] transition ${iconColor}`}>
        <MapPin className="md:h-5 md:w-5 h-5 w-5" />
        <Link href="/" className={`hidden lg:block hover:text-[#C59949] transition text-sm md:text-2xl uppercase font-medium ${navTextColor}`}>
          Store Locator
        </Link>
      </div>

      <div
        onClick={onAccountClick}
        className={`flex items-center gap-2 hover:text-[#C59949] transition ${iconColor} cursor-pointer`}
      >
        <UserRound className="md:h-5 md:w-5 h-5 w-5" />
        <span className={`md:block hidden hover:text-[#C59949] transition text-sm md:text-2xl uppercase font-medium ${navTextColor}`}>
          Account
        </span>
      </div>

      <div onClick={toggleCart} className={`flex relative items-center gap-2 hover:text-[#C59949] transition ${iconColor} cursor-pointer`}>
        {/* {itemCount > 0 && <span className="absolute top-[-8] right-10">{itemCount}</span>} */}
        <ShoppingCart className="md:h-5 md:w-5 h-5 w-5" />
        <div className="md:block hidden text-sm md:text-2xl uppercase font-medium">Cart</div>
      </div>
    </div>
  );
}
