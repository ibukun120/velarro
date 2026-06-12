import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Help Center", href: "/help-center" },
];

const Footer = () => {
  return (
    <footer className="border-t border-primary-300 bg-neutral-1 p-8">
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
        style={{ padding: "20px 24px", gap: "36px" }}
      >

        {/* Left — copyright */}
        <span className="text-[12px] text-neutral-10 tracking-wide text-center sm:text-left">
          © 2026 Velarro. All rights reserved.
        </span>

        {/* Right — links */}
        <div
          className="flex items-center justify-between sm:justify-end flex-wrap"
          style={{ gap: "32px" }}
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] sm:text-md text-neutral-10 hover:text-neutral-12 tracking-wide transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;