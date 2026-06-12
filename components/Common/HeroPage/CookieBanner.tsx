"use client";

import Link from "next/link";
import { useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window === "undefined") return false;

    return !localStorage.getItem("velarro_cookie_consent");
  });

  const handleAccept = (type: "all" | "necessary") => {
    localStorage.setItem("velarro_cookie_consent", type);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        z-[9999]
        w-[400px]
        rounded-md
        border
        border-[#D9C8A5]
        bg-[#F9F5ED]
        px-3
        py-3
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
      "
    >
      {/* TITLE */}
      <h3
        className="
          mb-0
          text-[16px]
          font-light
          leading-none
          text-neutral-13
        "
      >
        We use cookies!
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mb-3
          mt-3
          text-[10px]
          leading-[13px]
          text-[#4B4B4B]
        "
      >
        Hi, this website uses essential cookies to ensure its proper
        operation and tracking cookies to understand how you interact
        with it. The latter will be set only after consent.
        <button
          type="button"
          className="ml-1 underline text-[#4B4B4B]"
        >
          Let me choose
        </button>
      </p>

      {/* BUTTONS */}
      <div className="mb-1 flex gap-2">
        <button
          onClick={() => handleAccept("all")}
          className="
            h-[26px]
            flex-1
            bg-neutral-2
            border
            border-neutral-6
            rounded-sm 
            text-[8px]
            font-medium
            uppercase
            tracking-[0.5px]
            text-neutral-13
            transition
            hover:bg-primary-500
            hover:text-white
          "
        >
          Accept All
        </button>

        <button
          onClick={() => handleAccept("necessary")}
          className="
            h-[26px]
            flex-1
             bg-neutral-1
            border
            border-neutral-6
            rounded-sm 
            text-[8px]
            font-medium
            uppercase
            tracking-[0.5px]
            text-neutral-13
            transition
            hover:bg-primary-500
            hover:text-white
          "
        >
          Accept Necessary
        </button>
      </div>

      {/* PRIVACY POLICY */}
      <Link
        href="/privacy-policy"
        className="
          text-[9px]
          text-[#4B4B4B]
          underline
        "
      >
        Privacy Policy
      </Link>
    </div>
  );
}