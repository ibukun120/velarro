import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Sections/homepage/NavBar";
import Footer from "../components/Sections/homepage/Footer";
import CookieBanner from "@/components/Common/HeroPage/CookieBanner";

export const metadata: Metadata = {
  title: "Velarro Estate",
  description:
    "Velarro Cigars is a premium cigar brand focused on delivering exceptional quality with a modern edge. Every cigar is meticulously handcrafted using carefully selected tobacco leaves, bringing together rich tradition, expert craftsmanship, and contemporary sophistication. Experience a perfect balance of heritage and innovation through bold flavors, smooth draws, and an elevated smoking experience designed for true connoisseurs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />

        <Toaster position="top-right" />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Visible on all pages until accepted */}
        <CookieBanner />
      </body>
    </html>
  );
}