"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  Accessibility,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const socialLinks = [
  { icon: Instagram, href: "/", label: "Instagram" },
  { icon: Youtube, href: "/", label: "YouTube" },
  { icon: Facebook, href: "/", label: "Facebook" },
  { icon: Twitter, href: "/", label: "Twitter" },
  { icon: Linkedin, href: "/", label: "LinkedIn" },
];

const discoverRow = [
  { label: "Our Story", href: "/about" },
  { label: "Cigars", href: "/product?tab=cigars" },
  { label: "Accessories", href: "/velarro-accessories" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Limited Editions", href: "/coming?title=Limited%20Editions" },
];

const secondRow = [
  { label: "Track Order", href: "/signin" },
  { label: "Sustainability", href: "/sustainabilty" },
  { label: "Press", href: "/press" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/termsandconditions" },
  { label: "Cookie Policy", href: "/cookiepolicy" },
  { label: "Accessibility", href: "/accessibility" },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Footer() {
  const [showAscend, setShowAscend] = useState(false);
  const HERO_THRESHOLD = typeof window !== "undefined" ? window.innerHeight * 0.5 : 300;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show button after scrolling 50% of the hero section (threshold = 50% of viewport height)
      setShowAscend(scrollPosition > HERO_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [HERO_THRESHOLD]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full flex flex-col border-t border-neutral-6 font-gotham">
      {/* ════════════════════════════════════════
          SECTION 1 — SOCIAL ICONS
          Light bg, centered icons, bottom border
      ════════════════════════════════════════ */}
      <div className="w-full flex items-center justify-center gap-8 py-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="
        text-text-secondary
        hover:text-brand
        transition-colors
        duration-200
      "
          >
            <Icon size={20} />
          </Link>
        ))}
      </div>

      {/* ════════════════════════════════════════
          SECTION 2 — STAY IN KNOW / NEWSLETTER
          Centered, rounded card feel, same bg
      ════════════════════════════════════════ */}
      <div className="w-full bg-surface-secondary flex flex-col items-center px-6 pt-10 pb-8 gap-4">
        {/* Heading */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-[22px] font-light leading-[1.4] tracking-[-0.01em] text-text-heading">
            Stay in Know
          </h2>

          <div className="w-[160px] h-px bg-border-active" />
        </div>

        {/* Sub Heading */}
        <p className="text-[22px] font-light leading-[1.5] tracking-[-0.02em] text-text-heading text-center">
          Receive the latest news in your inbox
        </p>

        {/* Inputs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          {/* Name */}
          <div className="flex items-center bg-surface-background border border-border-default rounded-md px-4 py-2.5 w-[220px] focus-within:border-border-active transition-colors duration-200">
            <input
              type="text"
              placeholder="Your Name"
              className="
          w-full
          bg-transparent
          border-0
          outline-none
          text-[13px]
          leading-5
          text-text-body
          placeholder:text-text-muted
        "
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-surface-background border border-border-default rounded-md px-4 py-2.5 w-[220px] focus-within:border-border-active transition-colors duration-200">
            <input
              type="email"
              placeholder="Your Email"
              className="
          w-full
          bg-transparent
          border-0
          outline-none
          text-[13px]
          leading-5
          text-text-body
          placeholder:text-text-muted
        "
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            className="
        bg-btn-fill
        border
        border-btn-border
        rounded-md
        px-6
        py-2.5
        font-medium
        text-[13px]
        leading-5
        tracking-[0.05em]
        text-btn-text
        hover:bg-btn-fill-hover
        hover:border-btn-fill-hover
        hover:text-neutral-1
        transition-all
        duration-200
        cursor-pointer
        whitespace-nowrap
      "
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DIVIDER
      ════════════════════════════════════════ */}
      <div className="w-full h-[0.5px] bg-neutral-6" />

      {/* ════════════════════════════════════════
          SECTION 3 — MAIN FOOTER
          Logo left | Nav rows right
      ════════════════════════════════════════ */}
      {/* SECTION 3 — MAIN FOOTER: Logo left | Nav rows right */}
      <div className="w-full flex items-start justify-center py-6 gap-30 max-w-[1200px] mx-auto px-6">
        {/* LEFT — Logo + tagline */}
        <div className="flex flex-col items-start justify-center gap-3 shrink-0 w-[240px]">
          <Image
            src="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780405923358-frame-1000005296.webp"
            alt="Velarro Estate"
            width={280}
            height={80}
            className="object-contain"
          />

          <p
            className="
            text-[12px]
            font-light
            leading-[1.6]
            w-full
            text-center
            pr-4
            mt-1"
          >
        Crafted. Refined. Velarro.
        </p>
        </div>

        {/* RIGHT — Two nav rows */}
        <div className="flex flex-col  max-w-[760px] w-full">
          {/* Row 1 */}
         <div className="flex items-center gap-15 border-b border-border-default pb-3">
            {discoverRow.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
            text-[20px]
            font-light
            leading-[1.6]
            text-text-body
            hover:text-brand
            transition-colors
            duration-200
            whitespace-nowrap
          "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Row 2 */}
        <div className="flex justify-center gap-15 pt-3 pl-[calc(100%/50)"> 
            {secondRow.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
            text-[20px]
            font-light
            leading-[1.6]
            text-text-body
            hover:text-brand
            transition-colors
            duration-200
            whitespace-nowrap
          "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DIVIDER
      ════════════════════════════════════════ */}
      <div className="w-full h-[0.5px] bg-neutral-6" />

      {/* ════════════════════════════════════════
          SECTION 4 — SURGEON WARNING
      ════════════════════════════════════════ */}
      <div className="w-full bg-surface-secondary flex items-center justify-center px-8 py-3 text-center my-2">
        <p className="text-[12px] font-light leading-[1.5] text-text-secondary">
          <span className="font-normal">Surgeon General Warning:</span> <br />
          Cigar
          smoking can cause cancers of the mouth and throat, even if you do not
          inhale.
        </p>
      </div>

      {/* ════════════════════════════════════════
    SECTION 5 — TRUST LINE
════════════════════════════════════════ */}
      <div className="w-full  flex items-center justify-center py-1.5">
        <p className="text-[12px] font-light text-text-muted">
          Highest level of Encryption, Security and Trust
        </p>
      </div>

      {/* ════════════════════════════════════════
    SECTION 6 — METASYS BADGE
════════════════════════════════════════ */}
      <div className="w-full flex items-center justify-center py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780312566391-metasys-logo-svg.webp"
          alt="Metasys"
          className="h-9 w-auto"
        />
      </div>

      {/* ════════════════════════════════════════
    SECTION 7 — BOTTOM LEGAL LINKS
════════════════════════════════════════ */}
      <div className="w-full  flex flex-wrap items-center justify-center gap-8 px-6 py-2">
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
        text-[13px]
        font-light
        leading-[1.6]
        text-text-body
        hover:text-brand
        transition-colors
        duration-200
        whitespace-nowrap
      "
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* ════════════════════════════════════════
    SECTION 8 — COPYRIGHT
════════════════════════════════════════ */}
      <div className="w-full flex items-center justify-center py-3 pb-5">
        <p className="text-[12px] font-light leading-[1.6] text-text-muted">
          © 2026 Velarro Estate - All rights reserved
        </p>
      </div>
      {/* ════════════════════════════════════════
    ASCEND BUTTON — fixed bottom right
════════════════════════════════════════ */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
    fixed
    bottom-6
    right-6
    z-50
    flex
    items-center
    gap-1.5
    bg-btn-fill
    border
    border-btn-border
    hover:bg-btn-fill-selected
    hover:border-btn-border-active
    rounded-md
    px-3
    py-2
    shadow-sm
    transition-all
    duration-300
    cursor-pointer
    ${showAscend ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
      >
        <ArrowUp size={14} className="text-btn-text" />

        <span
          className="
      font-medium
      text-[12px]
      tracking-[0.03em]
      leading-5
      text-btn-text
    "
        >
          Ascend
        </span>
      </button>

 <Link
  href="/accessibility"
  aria-label="Accessibility"
  className="
    fixed
    left-6
    bottom-6
    z-50
    flex
    items-center
    justify-center
    w-12
    h-12
    rounded-full
    border-2
    border-neutral-6
    bg-neutral-1
    hover:scale-125
    hover:shadow-lg
    transition-all
    duration-300
  "
>
  <Accessibility
    size={22}
    strokeWidth={1.8}
    className="text-secondary-700"

  />
</Link>
      
    </div>
  );
}