"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap: Record<string, string> = {
  dashboard: "Dashboard",
  profile: "My Profile",
  addresses: "Addresses",
  orders: "My Orders",
  wishlist: "Wish List",
  "vendor-status": "Vendor Status",
  settings: "Settings",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="text-xs md:text-sm text-secondary-400 flex items-center px-10  font-medium bg-[#1D1C1A99]  backdrop-blur-xl py-3">
      {/* Home */}
      <Link href="/" className="hover:underline text-primary-100">
        Home
      </Link>

      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");

        return (
          <span key={path} className="flex items-center text-primary-100 px-1 font-medium">
            <span>{">"}</span>

            <Link href={path} className="hover:underline ml-1.5 text-primary-500 text-xs md:text-sm font-medium capitalize">
              {labelMap[segment] || segment}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
