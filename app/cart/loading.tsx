import React from "react";
// import Footer from "@/components/Footer/Footer";

export default function Loading() {
  return (
    <div
      className={`min-h-screen bg-[#f5f5f5] py-8`}
      style={{ fontFamily: "var(--font-family-base)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Top Block Skeleton */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden py-16 px-8 flex flex-col items-center justify-center animate-pulse mb-8">
          <div className="w-[30%] h-[40px] bg-[#b3b3b3] mb-6 rounded-sm"></div>
          <div className="w-[70%] h-[20px] bg-[#b3b3b3] mb-8 rounded-sm"></div>
          <div className="w-[200px] h-[50px] bg-[#666666] mb-4 rounded"></div>
        </div>

        {/* Bottom Block Skeleton */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden animate-pulse mb-12">
          <div className="px-8 py-8">
            <div className="w-[200px] h-[35px] bg-[#b3b3b3] mb-8 rounded-sm"></div>
            
            <div className="flex gap-4 mb-4">
              <div className="w-[100px] h-[16px] bg-[#d9d9d9] rounded-sm"></div>
              <div className="w-[120px] h-[16px] bg-[#d9d9d9] rounded-sm"></div>
            </div>

            <div className="w-full h-[35px] bg-[#d9d9d9] rounded-sm"></div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
