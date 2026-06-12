"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Buttons/CommonButtons";
import { User } from "lucide-react";

const menu = [
  {
    name: "My Profile",
    path: "/profile",
    icon: "/icons/user.svg",
  },
  {
    name: " My Address",
    path: "/addresses",
    icon: "/icons/map-pin.svg",
  },
  {
    name: "My Orders",
    path: "/orders",
    icon: "/icons/box.svg",
  },
  {
    name: "Wish list",
    path: "/wishlist",
    icon: "/icons/bookmark.svg",
  },
  {
    name: "Vendor Status",
    path: "/vendor-status",
    icon: "/icons/database.svg",
  },
  {
    name: "Become Seller",
    path: "/become-seller",
    icon: "/icons/codepen.svg",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "/icons/settings.svg",
  },
];

type UserType = {
  firstName?: string;
  lastName?: string;
};

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [active, setActive] = useState("");
const [showLogoutModal, setShowLogoutModal] = useState(false);

  // ✅ Initialize directly from localStorage
  const [user] = useState<UserType>(() => {
    // SSR safety
    if (typeof window === "undefined") {
      return {};
    }

    try {
      const stored = localStorage.getItem("velarro_user");

      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("Invalid localStorage user:", error);

      return {};
    }
  });

  // ✅ Full name
  const fullName = useMemo(() => {
    const first = user.firstName ?? "";
    const last = user.lastName ?? "";

    const name = `${first} ${last}`.trim();

    return name || "User Profile";
  }, [user]);

  // ✅ Logout
  const handleNav = (id: string) => {
  setActive(id);

  if (id === "signout") {
    setShowLogoutModal(true);
  }
};
const handleLogout = () => {
  localStorage.removeItem("velarro_user");

  window.dispatchEvent(new Event("auth_change"));

  setShowLogoutModal(false);

  router.push("/");
};

  return (
    <aside className="w-[278px] h-full flex flex-col bg-neutral-2 border-r border-neutral-6">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* User Section */}

        <div className="mb-8">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative w-[51px] h-[51px] overflow-hidden rounded-full">
              {/* <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                className="object-cover"
              /> */}
              <User className="w-full h-full " />
            </div>

            {/* Name */}
            <div>
              <h2 className="text-xl md:text-[24px] font-normal text-neutral-12 leading-[30px] tracking-[-0.005em]">
                {fullName}
              </h2>

              <p className="text-neutral-12 font-normal text-[12px] leading-[17px] tracking-[0.01em]">
                since 2024
              </p>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className="py-2 space-y-1">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-xs transition-all duration-200 font-normal tracking-[-0.0025em] text-base sm:text-lg md:text-xl",
                  isActive
                    ? "bg-neutral-3 border-l border-neutral-6 text-neutral-13 font-medium"
                    : "text-neutral-13 ",
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="transition-opacity duration-200"
                />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="border-t border-neutral-6 py-3 px-4">
        <button
          onClick={() => handleNav("signout")}
          className={clsx(
            "w-full flex items-center gap-3 px-5 py-2 text-left transition-all duration-150",
            "bg-surface-secondary hover:bg-surface-hover",
            active === "signout" && "bg-surface-hover border-neutral-6",
          )}
        >
          <Image
            src="/icons/codepen.svg"
            alt="Logout"
            width={20}
            height={20}
            className={clsx(
              "transition-opacity duration-200",
              active === "signout" ? "opacity-100" : "opacity-70",
            )}
          />

          <span className="text-base sm:text-lg md:text-xl font-medium text-text-primary">
            Sign Out
          </span>
        </button>
      </div>
      {showLogoutModal && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-md rounded-xl bg-neutral-2 p-6 shadow-xl">
      <h3 className="text-xl font-medium text-neutral-13">
        Sign Out
      </h3>

      <p className="mt-3 text-neutral-10">
        Are you sure you want to sign out of your account?
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() => setShowLogoutModal(false)}
          className="
            px-5 py-2
            border border-neutral-6
            rounded-xs
            text-neutral-13
            hover:bg-neutral-3
            transition-colors
          "
        >
          Cancel
        </button>

        <Button
        variant="product"
          onClick={handleLogout}
          className="
            px-5 py-2
           
            transition-colors
          "
        >
          Sign Out
        </Button>
      </div>
    </div>
  </div>
)}
    </aside>
  );
}
