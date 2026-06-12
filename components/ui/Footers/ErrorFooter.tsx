"use client";
import Link from "next/link";

export default function ErrorFooter() {
  return (
    <footer className="w-full py-1 bg-primary-50 border border-primary-300">
      
      <div className=" mx-auto max-w-7xl  p-0 px-7 py-5 flex items-center justify-between">
        
        {/* LEFT */}
        <p className="text-xs font-normal leading-[16px] text-secondary-500">
          © {new Date().getFullYear()} Velarro. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-8">
          
          <Link
            href="/privacy-policy"
            className="text-xs font-normal leading-sm text-secondary-500 hover:text-primary-700 transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-xs font-normal leading-sm text-secondary-500 hover:text-primary-700 transition"
          >
            Terms of Service
          </Link>

          <Link
            href="/help"
            className="text-xs font-normal leading-sm text-secondary-500 hover:text-primary-700 transition"
          >
            Help Center
          </Link>

        </div>

      </div>
    </footer>
  );
}