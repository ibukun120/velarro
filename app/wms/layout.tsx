// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}
    >
      <Sidebar />
      <Toaster position="top-center" />
      <div className="flex-1 bg-[#D9D9D9] py-8 px-10 2xl:px-16">{children}</div>
    </div>
  );
}
