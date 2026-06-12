"use client";

// import Breadcrumb from "@/components/Sections/AccountDashboard/Breadcrumb";
// import FeaturedNav from "@/components/ui/Navbar/FeaturedNav";
import MobileAccountDrawer from "@/components/Sections/AccountDashboard/AccountSidebar/MobileAccountDrawer";
import Sidebar from "@/components/Sections/AccountDashboard/AccountSidebar/Sidebar";

import { Toaster } from "sonner";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-screen flex flex-col ">
      {/* 🔝 Navbar */}
      {/* <header className="h-16 border-b bg-neutral-1 flex items-center">
        <FeaturedNav />
      </header> */}

      {/* 🔹 Breadcrumb */}
      {/* <div className="py-3 md:py-1 mt-12 md:mt-18">
        <Breadcrumb />
      </div> */}

      {/* 🔹 Layout */}
      <div className="flex flex-1 overflow-hidden border-t border-neutral-6 mt-20">
        {/* Sidebar Desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <Toaster position="top-right" richColors />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 pb-32 md:pb-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>

      {/* 📱 Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-center z-50 ">
        <div
          className="
            relative flex items-center justify-between
            w-full max-w-md
            bg-white
            rounded-sm
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            border border-neutral-200
            px-3 py-3
          "
        >
          {/* LEFT */}
          <div className="flex items-center flex-1 justify-around">
            <NavItem
              icon={
                <Image
                  src="/icons/box.svg"
                  alt="Orders"
                  width={20}
                  height={20}
                />
              }
              label="Orders"
              active={pathname.startsWith("/orders")}
              onClick={() => router.push("/orders")}
            />

            <NavItem
              icon={
                <Image
                  src="/icons/bookmark.svg"
                  alt="Wishlist"
                  width={20}
                  height={20}
                />
              }
              label="Wishlist"
              active={pathname.startsWith("/wishlist")}
              onClick={() => router.push("/wishlist")}
            />
          </div>

          {/* 🔥 CENTER ACCOUNT -mt-8 */}
          <div className="flex flex-col items-center justify-center flex-1 ">
            <button
              onClick={() => setOpen(true)}
              className=" w-12 h-12 rounded-full bg-primary-500    shadow-[0_10px_25px_rgba(0,0,0,0.18)]    flex items-center justify-center    border-4 border-white  transition-all duration-200 active:scale-95 "
            >
              <CircleUserRound
  className="w-6 h-6 text-neutral-1 stroke-[2.2]"
/>
            </button>

            <span className="text-[11px] font-medium text-primary-500 mt-1">
              Account
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center flex-1 justify-around">
            <NavItem
              icon={
                <Image
                  src="/icons/settings.svg"
                  alt="Settings"
                  width={20}
                  height={20}
                />
              }
              label="Settings"
              active={pathname.startsWith("/settings")}
              onClick={() => router.push("/settings")}
            />

            <NavItem
              icon={
                <Image
                  src="/icons/user.svg"
                  alt="Profile"
                  width={20}
                  height={20}
                />
              }
              label="Profile"
              active={pathname.startsWith("/profile")}
              onClick={() => router.push("/profile")}
            />
          </div>
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
      <MobileAccountDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

/* 🔹 Nav Item */
function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center justify-center
        gap-1 min-w-[60px]
        transition-all duration-200
        active:scale-95
      "
    >
      <div
        className={`
          w-10 h-10 rounded-full
          flex items-center justify-center
          transition-all duration-200
          ${active ? "bg-primary-100" : ""}
        `}
      >
        {icon}
      </div>

      <span
        className={`
          text-[11px] font-medium
          ${active ? "text-primary-500" : "text-neutral-11"}
        `}
      >
        {label}
      </span>
    </button>
  );
}
