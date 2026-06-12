"use client";

import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="mt-10 md:mt-20 w-full bg-primary-50 border-b border-neutral-6">
      <div className=" px-12  py-1 flex items-center gap-2 text-sm">
        
        <Link
          href="/"
          className="text-secondary-900 "
        >
          Home
        </Link>

        <span className="text-primary-500">{">"}</span>

        <Link
          href="/discover"
          className="text-secondary-900 "
        >
          Discover
        </Link>

        <span className="text-primary-500">{">"}</span>

        <span className="text-primary-600 font-medium">
          Accessories
        </span>
      </div>
    </div>
  );
}