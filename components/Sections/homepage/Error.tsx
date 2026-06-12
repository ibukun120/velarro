// components/ErrorContent.tsx
// import Button from "../../../app/test/component/Button";
import Button from "@/components/ui/Buttons/CommonButtons";
import Image from "next/image";
import Link from "next/link";

export default function ErrorContent() {
  return (
    <section
      className="flex flex-col gap-[30px] w-full md:w-[477px] bg-white rounded-xl px-[47px] py-[100px] max-sm:px-6 max-sm:py-16 text-left font-roboto text-[--color-primary-700] text-xs"
      aria-labelledby="error-heading"
    >
      {/* Error message block */}
      <div className="flex flex-col gap-[23px] font-gotham">
        <div className="flex flex-col items-center gap-5">
          <h1
            id="error-heading"
            className="self-stretch text-[115px] leading-[86px] font-light tracking-[-0.02em] text-[--color-primary-500] max-sm:text-[57px] max-sm:leading-[52px] max-[450px]:text-[34px] max-[450px]:leading-[34px]"
          >
            404
          </h1>
          <h2 className="self-stretch text-2xl leading-[30px] font-normal text-[--color-secondary-500] max-[450px]:text-[19px] max-[450px]:leading-6">
            Page not found
          </h2>
        </div>
        <p className="self-stretch text-xs tracking-[0.01em] leading-[17px] text-[--color-primary-700]">
          The page you&apos;re looking for doesn&apos;t exist, may have moved, or is
          temporarily unavailable. Let&apos;s find you the right place.
        </p>
      </div>

      {/* Search section */}
      <div className="self-stretch flex flex-col gap-[15px]">
        <h3 className="text-xs tracking-[var(--label-small-tracking)] leading-[var(--label-small-line-height)] font-semibold font-roboto uppercase">
          Search Velarro
        </h3>
        <div className="flex items-center justify-between h-[39px] rounded-[3px] border border-[--color-primary-500] px-[14px] pr-0 gap-5 max-[450px]:h-auto max-[450px]:flex-wrap max-[450px]:pr-[14px]">
          <span className="text-xs tracking-[0.01em] leading-[17px] font-gotham text-[--color-neutral-7] flex-shrink-0 max-[450px]:py-2">
            Search products, collections...
          </span>
          <Button variant="primary" className="h-[39px] w-[70px] rounded-none flex-shrink-0">
            Search
          </Button>
        </div>
      </div>

      {/* Quick links section */}
      <div className="self-stretch flex flex-col gap-[15px]">
        <h3 className="text-xs tracking-[var(--label-small-tracking)] leading-[var(--label-small-line-height)] font-semibold font-roboto uppercase">
          Quick Links
        </h3>
        <div className="flex items-center gap-[30px] flex-wrap">
          <Button variant="primary" >
            <Link href="/">HOMEPAGE</Link>
          </Button>

          <QuickLink href="/shop" iconSrc="/shopping-cart.svg" iconAlt="Shop">
            SHOP
          </QuickLink>

          <QuickLink href="/gifts" iconSrc="/gift.svg" iconAlt="Gifts">
            GIFTS
          </QuickLink>
        </div>
      </div>
    </section>
  );
}

// ── Inline QuickLink sub-component ──────────────────────────────────────────
interface QuickLinkProps {
  href: string;
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
}

function QuickLink({ href, iconSrc, iconAlt, children }: QuickLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2.5 h-[31px] px-[9px] rounded-[3px] border border-[--color-primary-100] bg-transparent
        text-xs tracking-[0.01em] leading-[17px] font-gotham text-[--color-secondary-800]
        hover:bg-[--color-tan-200] hover:border-[--color-tan-100] transition-colors duration-200"
    >
      <Image src={iconSrc} alt={iconAlt} width={14} height={14} aria-hidden="true" />
      <span>{children}</span>
    </Link>
  );
}