import { ReactNode } from "react";

interface TermsSectionProps {
  /** Section number prefix, e.g. "1." — omit for the Overview section */
  number?: string;
  title: string;
  children: ReactNode;
}

export default function TermsSection({
  number,
  title,
  children,
}: TermsSectionProps) {
  const id = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="
        flex w-full flex-col gap-6
        text-left font-gotham text-[#1C1C19]
        max-[825px]:gap-[18px]
      "
    >
      {/* Heading */}
      <h2
        id={`${id}-heading`}
        className="
          text-5xl font-normal leading-[43px] tracking-[-0.01em]
          text-neutral-13
          max-[1100px]:text-[22px]
          max-[825px]:text-[29px]
          max-[450px]:text-[22px]
        "
      >
          {number ? `${number}. ${title}` : title}
      </h2>

      {/* Body */}
      <div
        className="
          flex w-full flex-col gap-[10px]
          text-xl text-neutral-11/80 font-light leading-[26px]
          max-[1100px]:text-[16px] max-[1100px]:leading-[21px]
          max-[450px]:text-[16px] max-[450px]:leading-[21px]
        "
      >
        {children}
      </div>
    </section>
  );
}

// ─── Helper sub-components ────────────────────────────────────────────────────

/** A standard paragraph inside a TermsSection */
export function TermsParagraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`leading-[26px] font-light ${className}`}>{children}</p>
  );
}

/** A bullet list inside a TermsSection */
export function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-[27px] flex flex-col gap-1">
      {items.map((item, i) => (
        <li key={i} className="leading-[26px] font-light">
          {item}
        </li>
      ))}
    </ul>
  );
}