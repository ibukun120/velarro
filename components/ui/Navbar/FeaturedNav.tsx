// "use client";

// import { ShoppingCart, LogIn } from "lucide-react";
// import { CgMenuRound } from "react-icons/cg";
// import { useState } from "react";
// import SearchBar from "@/components/SearchBar/FeaturedSearch";
// import Logo from "@/components/Logo/logo";

// const FeaturedNav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full relative bg-primary-900 text-neutral-1 flex items-center justify-between font-[var(--font-family-base)] font-[400] border-[var(--color-primary-500)] border-b mt-16"
//         style={{ height: "50px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "50px", paddingRight: "50px" }}
//       >

//         {/* LEFT SECTION — hidden on mobile */}
//         <div className="hidden md:flex items-center gap-10">
//           <CgMenuRound size={20} color="var(--color-primary-500)" className="cursor-pointer" />

//           <div className="flex gap-8 text-sm font-medium">
//             <span className="cursor-pointer hover:opacity-80 text-[24px]">Discover</span>
//             <span className="cursor-pointer hover:opacity-80 text-[24px]">Gifts</span>
//             <span className="cursor-pointer hover:opacity-80 text-[24px]">Products</span>
//           </div>
//         </div>

//         {/* HAMBURGER — visible only on mobile */}
//         <div className="flex md:hidden items-center">
//           <CgMenuRound
//             size={24}
//             color="var(--color-primary-500)"
//             className="cursor-pointer"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           />
//         </div>

//         {/* CENTER LOGO — always visible */}
//         <div className="absolute left-1/2 -translate-x-1/2">
//           <Logo />
//         </div>

//         {/* RIGHT SECTION — icons only on mobile, full on desktop */}
//         <div className="flex items-center gap-8">

//           {/* SearchBar — hidden on mobile */}
//           <div className="hidden md:block">
//             <SearchBar />
//           </div>

//           {/* Cart */}
//           <div className="flex items-center gap-1 cursor-pointer">
//             <span className="hidden md:inline text-[24px]">Cart</span>
//             <ShoppingCart size={18} />
//           </div>

//           {/* Login */}
//           <div className="flex items-center gap-1 cursor-pointer">
//             <span className="hidden md:inline text-[24px]">Login</span>
//             <LogIn size={18} />
//           </div>

//         </div>
//       </nav>

//       {/* MOBILE DROPDOWN MENU */}
//       {menuOpen && (
//         <div
//           className="flex flex-col md:hidden bg-primary-900 text-neutral-1 border-b border-neutral-6 w-full"
//           style={{ padding: "16px 24px", gap: "16px" }}
//         >
//           {/* Search on mobile */}
//           <SearchBar />

//           {/* Nav links */}
//           {["Discover", "Gifts", "Products"].map((item) => (
//             <span
//               key={item}
//               className="cursor-pointer hover:opacity-80 text-[18px]"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default FeaturedNav;