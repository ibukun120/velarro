import Container from "@/components/Layouts/Container";
import Link from "next/link";

type PairingHeroProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
  backgroundImage: string;
};

export default function PairingHero({
  title,
  subtitle,
  buttonText = "Explore Pairings",
  backgroundImage,
}: PairingHeroProps) {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-4xl px-2 text-neutral-1 flex flex-col items-center justify-center">
          {/* Small Heading */}
          <p className="text-[32px] tracking-wide mb-18 border-b border-[#c89b3c] inline-block">
            Velarro Cigars
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-1 mb-5 w-full md:max-w-[600px]">{subtitle}</p>

          {/* CTA */}
          <Link href="/pairing/selection" className="bg-primary-500 text-neutral-1 px-12 py-1.5 rounded-lg text-[24px] tracking-wide hover:opacity-90 transition cursor-pointer border border-primary-300">
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
}
