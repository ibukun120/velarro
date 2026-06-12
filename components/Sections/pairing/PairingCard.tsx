import Link from "next/link";

type PairingCardProps = {
  category: string;
  title: string;
  description: string;
  image?: string;
  exploreHref?: string;
  drinkKey?: string;
};

export default function PairingCard({
  category,
  title,
  description,
  image,
  exploreHref,
  drinkKey,
}: PairingCardProps) {
  return (
    <div className="border border-neutral-6 bg-white">
      {/* Image / Placeholder */}
      <div
        className="h-[450px] w-full bg-primary-500"
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
                // accessorieshome2.png
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "330px",
              }
            : {}
        }
      />

      {/* Content */}
      <div className="p-6  h-[280px] md:h-[415px] bg-white relative">
        <p className="text-lg md:text-[16px] tracking-widest text-primary-500 uppercase mb-[12px]">
          {category}
        </p>

        <h3 className="text-[40px] font-medium text-secondary-900 mb-3 tracking-[-2px] mb-[16px]">
          {title}
        </h3>

        <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        <Link
          href={drinkKey ? `/pairing/selection/${drinkKey}/no-preference/results` : (exploreHref ?? "/pairing/selection")}
          className="text-[16px] tracking-widest text-primary-500 uppercase flex items-center gap-2 hover:bg-primary-500 hover:text-neutral-1 transition-all duration-700 px-4 py-2 rounded cursor-pointer absolute bottom-6"
        >
          {/* <span>----</span> */}
          <span>Explore Pairing</span>
        </Link>
      </div>
    </div>
  );
}