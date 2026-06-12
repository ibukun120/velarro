"use client";

import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items?.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="
        flex
        items-center
        justify-center
        gap-4
        text-[14px]
        font-light
        tracking-[-0.02em]
      "
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span
                className="
                  relative
                  inline-block
              
                  text-neutral-11
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[0.5px]
                  after:w-full
                  after:bg-primary-500
                "
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href || "#"}
                className="
                  text-neutral-11
                  hover:text-primary-500
                  transition-colors
                  duration-300
                "
              >
                {item.label}
              </Link>
            )}

            {!isLast && (
              <div className="flex items-center gap-4 text-primary-500">
                <span>|</span>
            
              </div>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}