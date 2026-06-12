"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-5 text-[#C59949]">
      <Facebook size={20} />
      <Instagram size={20} />
      <Youtube size={20} />
    </div>
  );
}
