"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import { X } from "lucide-react";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
import {
  
  Package,
  
  Sparkles,
  Mail,
  Monitor,
  PhoneCall,
  
} from "lucide-react";
const sidebarItems = [
  // {
  //   label: "Products",
  //   icon: LayoutGrid,
  //   pagelink: "/product",
  // },
  {
    label: "Accessories",
    icon: Package,
    pagelink: "/velarro-accessories",
  },
  // {
  //   label: "Partner",
  //   icon: UsersRound,
  //   pagelink: "/becomeseller",
  // },
  {
    label: "Deals",
    icon: Sparkles,
    pagelink: "/coming?title=Curated Deals",
  },
  {
    label: "Careers",
    icon: Mail,
    pagelink: "/coming?title=Careers",
  },
  {
    label: "News & Events",
    icon: Monitor,
    pagelink: "/coming?title=News%20%26%20Events",
  },
  {
    label: "Get In Touch",
    icon: PhoneCall,
    pagelink: "/contact",
  },
];
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);
  /* ESC KEY CLOSE */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  /* CLICK OUTSIDE CLOSE */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* OVERLAY */}
      <div
        className={`
          absolute
          inset-0
          transition-opacity
          duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
      />
      {/* SIDEBAR */}
      <aside
        ref={sidebarRef}
        className={`
    absolute
    left-0
    top-[44px]
    md:top-[48px]
    lg:top-[85px]
    h-[calc(100vh-44px)]
    md:h-[calc(100vh-48px)]
    lg:h-[calc(100vh-85px)]
    w-[320px]
    md:w-[360px]
    bg-primary-50
    shadow-2xl
    transition-transform
    duration-300
    ease-in-out
    flex
    flex-col
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between
            px-6
            py-5
            border-b
            border-primary-100
          "
        >
          <div>
            <h2
              className="
                text-[24px]
                font-semibold
                text-secondary-700
              "
            >
              Estate Index
            </h2>
            <span
              className="
                block
                w-35
                h-[2px]
                bg-primary-500
                mt-2
              "
            />
          </div>
          <button
            onClick={onClose}
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              hover:bg-primary-100
              transition-all
            "
          >
            <X size={22} className="text-secondary-700" />
          </button>
        </div>
        {/* MENU */}
        <nav className="flex flex-col px-4 py-5 flex-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              pagelink={item.pagelink}
              onClose={onClose}
            />
          ))}
        </nav>
        {/* <div className="px-4 pb-6 mt-auto">
          <Link
            href="/accessibility"
            onClick={onClose}
            className="
      flex
      items-center
      justify-center
      w-12
      h-12
      rounded-full
      border
      border-secondary-500
      hover:bg-primary-100
      transition-all
      duration-300
    "
          >
            <Accessibility
              size={22}
              strokeWidth={1.8}
              className="text-secondary-700"
            />
          </Link>
        </div> */}
      </aside>
    </div>
  );
}
/* ================= ITEM ================= */
import { LucideIcon } from "lucide-react";
interface SidebarItemProps {
  label: string;
  icon: LucideIcon;
  pagelink?: string;
  onClose: () => void;
}
function SidebarItem({
  label,
  icon: Icon,
  pagelink,
  onClose,
}: SidebarItemProps) {
  return (
    <Link
      href={pagelink || "/"}
      onClick={onClose}
      className="
        group
        flex
        items-center
        gap-5
        px-4
        py-4
        rounded-xs
        hover:bg-primary-100
        transition-all
        duration-300
      "
    >
      <div
        className="
          shrink-0
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Icon size={20} strokeWidth={1.8} className="text-primary-900" />
      </div>
      <span
        className="
          text-[18px]
          font-light
          text-primary-900
          tracking-[-0.25%]
          leading-[26px]
        "
      >
        {label}
      </span>
    </Link>
  );
}
