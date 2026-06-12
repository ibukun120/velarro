import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Help Center", href: "/help-center" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-primary-200)] bg-[var(--color-neutral-1)]">
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
        style={{ padding: "20px 24px", gap: "12px" }}
      >

        {/* Left — copyright */}
        <span className="text-[11px] text-[var(--color-neutral-7)] tracking-wide text-center sm:text-left">
          © 2026 Velarro. All rights reserved.
        </span>

        {/* Right — links */}
        <div
          className="flex items-center justify-center sm:justify-end flex-wrap"
          style={{ gap: "16px" }}
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] text-[var(--color-neutral-7)] hover:text-[var(--color-neutral-12)] tracking-wide transition"
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