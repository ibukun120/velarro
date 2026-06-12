"use client";
import { LogIn } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import SignupPage from "@/components/Sections/Auth/SignupPage";
import SigninPage from "@/components/Sections/Auth/SigninPage";
import ForgotPasswordPage from "@/components/Sections/Auth/ForgotPasswordPage";
import ResetPasswordPage from "@/components/Sections/Auth/ResetPasswordPage";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // AUTH MODAL
  const [authOpen, setAuthOpen] = useState(false);
  // AUTH TYPE
  const [authType, setAuthType] = useState<
    "signup" | "signin" | "forgot" | "reset"
  >("signin");

  // AUTH STATE
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);

  useEffect(() => {
    const checkAuthStatus = () => {
      const storedUser = localStorage.getItem("velarro_user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          // catch (e) {
          // Ignore parse errors
        }
      } else {
        setUser(null);
      }
    };

    checkAuthStatus();

    window.addEventListener("auth_change", checkAuthStatus);
    return () => window.removeEventListener("auth_change", checkAuthStatus);
  }, []);

  const handleAuthSuccess = (userData?: {
    firstName: string;
    lastName: string;
  }) => {
    const newUser = userData || { firstName: "John", lastName: "Doe" };
    setUser(newUser);
    localStorage.setItem("velarro_user", JSON.stringify(newUser));
    window.dispatchEvent(new Event("auth_change"));
    setAuthOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 text-primary-500 bg-[#1D1C1A99] border-b-[0.5px] border-[#FAF8F6] backdrop-blur-xl">
        <div className="flex items-center justify-between px-3 sm:px-5 md:px-6 lg:px-12 py-3 gap-3">
          {/* LEFT */}
          <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">
            {/* MENU */}
            <button
              className="cursor-pointer flex-shrink-0"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <div className="flex flex-col gap-1.5">
                <div className="w-5 h-[1px] bg-white"></div>
                <div className="w-5 h-[1px] bg-white"></div>
              </div>
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center text-primary-100 gap-4 lg:gap-8 xl:gap-10 whitespace-nowrap">
              <Link
                href="/product"
                className="text-[15px] lg:text-[18px] hover:opacity-80 transition"
              >
                Products
              </Link>

              <Link
                href="/becomeseller"
                className="text-[15px] lg:text-[18px] hover:opacity-80 transition"
              >
                Partner
              </Link>

              <Link
                href="/about"
                className="text-[15px] lg:text-[18px] hover:opacity-80 transition"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <Link href="/">
              <Image
                src="/svgs/Velarro-Estate.svg"
                alt="Velarro Estate Logo"
                width={180}
                height={35}
                className="object-contain w-[140px] lg:w-[180px] xl:w-[200px] h-auto"
                priority
              />
            </Link>
          </div>

          {/* MOBILE LOGO */}
          <div className="md:hidden flex flex-1 justify-center">
            <Link href="/">
              <Image
                src="/svgs/Velarro-Estate.svg"
                alt="Velarro Estate Logo"
                width={90}
                height={28}
                className="object-contain w-[80px] sm:w-[90px] h-auto"
                priority
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 md:gap-7 lg:gap-10 flex-1">
            {/* SEARCH */}
            <div className="hidden xl:flex items-center bg-[#F9F5ED5E] rounded-full h-[38px] w-[200px] px-4 overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-[14px] text-primary-100 placeholder:text-primary-100/70"
              />

              <Image
                src="/svgs/search.svg"
                alt="search"
                width={18}
                height={18}
                className="object-contain flex-shrink-0"
              />
            </div>

            {/* CART */}
            <Link
              href="/cart"
              className="flex items-center gap-2 text-primary-100 text-[14px] md:text-[16px] lg:text-[18px] hover:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              <span className="hidden lg:inline">Cart</span>

              <Image
                src="/icons/Vector.svg"
                alt="Cart"
                width={16}
                height={16}
                className="object-contain"
              />
            </Link>

            {/* LOGIN / PROFILE */}
            {user ? (
              <Link
                href="/profile"
                className="flex items-center gap-2 text-primary-100 hover:scale-95 transition-all duration-300"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary-500 border border-neutral-6 flex items-center justify-center overflow-hidden text-[13px] md:text-[16px] font-medium tracking-wider">
                  {user.firstName?.[0]?.toUpperCase()}
                  {user.lastName?.[0]?.toUpperCase()}
                </div>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setAuthType("signin");
                  setAuthOpen(true);
                }}
                className="flex items-center gap-2 text-primary-100 text-[14px] md:text-[16px] lg:text-[18px] hover:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span className="hidden lg:inline">Login</span>

                <LogIn
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-100"
                />
              </button>
            )}
          </div>
        </div>

        {/* SIDEBAR */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* ===== SIGNUP ===== */}
      {authType === "signup" && (
        <SignupPage
          open={authOpen}
          onClose={() => setAuthOpen(false)}
          switchToSignin={() => setAuthType("signin")}
          onSuccess={handleAuthSuccess}
        />
      )}

      {/* ===== SIGNIN ===== */}
      {authType === "signin" && (
        <SigninPage
          open={authOpen}
          onClose={() => setAuthOpen(false)}
          switchToSignup={() => setAuthType("signup")}
          switchToForgot={() => setAuthType("forgot")}
          onSuccess={handleAuthSuccess}
        />
      )}

      {/* ===== FORGOT PASSWORD ===== */}
      {authType === "forgot" && (
        <ForgotPasswordPage
          open={authOpen}
          onClose={() => setAuthOpen(false)}
          backToSignin={() => setAuthType("signin")}
          switchToReset={() => setAuthType("reset")}
        />
      )}

      {/* ===== RESET PASSWORD ===== */}
      {authType === "reset" && (
        <ResetPasswordPage
          open={authOpen}
          onClose={() => setAuthOpen(false)}
          backToSignin={() => setAuthType("signin")}
        />
      )}
    </>
  );
}
