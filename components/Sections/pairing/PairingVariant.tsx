type PairingHeroVariantProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  backgroundImage: string;
  primaryBtn?: string;
  secondaryBtn?: string;
};

export default function PairingHeroVariant({
  eyebrow = "Pairing Categories",
  title,
  highlight,
  subtitle,
  backgroundImage,
  primaryBtn = "Shop All Cigars",
  secondaryBtn = "View Accessories",
}: PairingHeroVariantProps) {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-neutral-1">
        {/* Eyebrow */}
        <p className="text-[12px] tracking-[0.2em] text-[#c89b3c] uppercase mb-4">
          {eyebrow}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
          {title}{" "}
          {highlight && (
            <span className="text-[#c89b3c] font-medium">
              {highlight}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#c89b3c] text-neutral-1 px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#b88a2f] transition">
            {primaryBtn}
          </button>

          <button className="bg-[#c89b3c] text-neutral-1 px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#b88a2f] transition">
            {secondaryBtn}
          </button>
        </div>
      </div>
    </section>
  );
}