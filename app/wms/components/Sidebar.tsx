"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type SidebarItem = {
  title: string;
  href: string;
  icon: string;
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/wms/dashboard",
    icon: "/svgs/icion1.svg",
  },
  {
    title: "Commission Settings",
    href: "/wms/Commission",
    icon: "/svgs/icion2.svg",
  },
  {
    title: "Settlement",
    href: "/wms/Settlement",
    icon: "/svgs/icion3.svg",
  },
  {
    title: "Report",
    href: "/wms/Report",
    icon: "/svgs/icion4.svg",
  },
  {
    title: "Settings",
    href: "/wms/Settings",
    icon: "/svgs/icion5.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo / Title */}
      <div className="px-6 py-6 border-b border-gray-100">
        <h1 className="text-xl font-semibold tracking-wide">
          WMS
        </h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-6 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded transition-all text-sm font-medium
                ${
                  isActive
                    ? "bg-[#F4E9D8] text-black"
                    : "text-gray-600 hover:bg-[#F9F5EF] hover:text-black"
                }
              `}
            >
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt={item.title}
                className="opacity-80"
              />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      
    </div>
  );
}