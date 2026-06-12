import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Privacy Settings", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "About Velarro", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-6 text-center">
      {/* Logo */}
      <p
        className="flex justify-center items-center mb-6">
    
        <Image src="/svgs/vellarro.svg" alt="velarro.svg" width={120} height={40}/>
      </p>

      {/* Warning Box */}
      <div className="border-[4px] border-secondary-700 mx-auto max-w-[380px] px-6 py-4 mb-6 text-[18px] leading-relaxed">
        <strong className="font-bold">Surgeon General Warning:</strong> Cigar
        Smoking Can Cause Cancers Of The Mouth And Throat, Even If You Do Not
        Inhale.
      </div>

      {/* Copyright */}
      <p className="text-[16px] text-secondary-300 mb-5 flex items-center justify-center gap-2">
        <span>©</span>
        2026 velarro ind, inc. - all rights reserved
      </p>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[18px] text-secondary-300 font-medium tracking-[0.05em] uppercase hover:text-secondary-700 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
