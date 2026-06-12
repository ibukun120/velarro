// 'use client'
import type { Metadata } from "next";
// import Navbar from "../components/Navbar (1)";
// import Footer from "../components/Footer";
// import Navbar from "@/components/Sections/order/Navbar (1)";
import Footer from "@/components/Sections/order/Footer";
// import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Velarro Orders",
  description: "Complete your Velarro order",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div>
        {/* <Navbar/> */}
          {children}
        <Footer/>
      </div>
    
  );
}