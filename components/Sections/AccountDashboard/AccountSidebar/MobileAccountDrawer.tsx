"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { name: "My Profile", path: "/profile", icon: "/icons/user.svg" },
  { name: "Addresses", path: "/addresses", icon: "/icons/map-pin.svg" },
  { name: "My Orders", path: "/orders", icon: "/icons/box.svg" },
  { name: "Wish list", path: "/wishlist", icon: "/icons/bookmark.svg" },
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
  { name: "Settings", path: "/settings", icon: "/icons/settings.svg" },
];

export default function MobileAccountDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-neutral-13/20 backdrop-blur-[1px] flex items-end"
          onClick={() => setOpen(false)}
        >
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 220,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              h-[85vh]
              bg-neutral-1
              rounded
              overflow-hidden
              flex flex-col
              shadow-2xl
            "
          >
            
          

            {/* 🔝 Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-neutral-1 border-b">
              
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                Account
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* 👤 User Section */}
            <div className="px-5 py-5 bg-neutral-1 border-b border-neutral-6">
              
              <div className="flex items-center gap-4">
                
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium">
                  RP
                </div>

                <div>
                  <p className="text-base font-medium text-neutral-900">
                    Riya Patel
                  </p>

                  <p className="text-sm text-neutral-13">
                    Member since 2024
                  </p>
                </div>
              </div>
            </div>

            {/* 📋 Menu */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
              
              {menu.map((item, index) => {
                const isActive = pathname === item.path;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex items-center justify-between px-4 py-4 rounded-md transition-all duration-200",
                        "bg-neutral-1 shadow-sm",
                        "hover:shadow-md hover:-translate-y-[1px]",
                        isActive &&
                          "border border-neutral-6 shadow-md bg-primary-50"
                      )}
                    >
                      
                      <div className="flex items-center gap-4">
                        
                        <div
                          className={clsx(
                            "p-2 rounded-lg",
                            isActive
                              ? "bg-primary-100"
                              : "bg-neutral-3"
                          )}
                        >
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </div>

                        <span className="text-base font-medium text-neutral-900">
                          {item.name}
                        </span>
                      </div>

                
                        <ChevronRight className={clsx(
                          "text-lg transition",
                          isActive
                            ? "text-primary-600"
                            : "text-secondary-300"
                        )} />
                     
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* 🔻 Sign Out */}
            <div className="px-4 pb-6 pt-2">
              
              <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition">
                
                <Image
                  src="/icons/codepen.svg"
                  alt="Logout"
                  width={20}
                  height={20}
                />

                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}