import Button from "@/components/ui/Buttons/CommonButtons";
import Image from "next/image";
import Link from "next/link";

const Gifting = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden group">
        {/* IMAGE */}
        <Image
          src="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780488637870-section-2.webp"
          alt="Gifting"
          width={800}
          height={600}
          className="
            w-full h-[80vh] object-fill
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-black/20
            transition-all duration-500
            group-hover:bg-black/35
          "
        />

        {/* CONTENT */}
        <div
          className="
            absolute inset-0
            flex justify-center items-center
            flex-col gap-12
            px-4 text-center
          "
        >
          {/* SMALL TITLE */}
          <h1
            className="
              text-[32px]
              text-neutral-1
              font-extralight
              tracking-wide
              px-8
              border-b border-neutral-6
           
            "
          >
            Gifting
          </h1>

          {/* BIG TITLE */}
          <p
            className="
              text-2xl md:text-[72px]
              font-light
              tracking-[-0.02em]
              text-neutral-1
              
            "
          >
            Find the perfect giftings
          </p>

          <Link href="/coming">
            <Button
              variant="product"
              className="
      py-3
      px-6
      rounded-md
      text-[16px]
      
    "
            >
              EXPLORE GIFTING
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gifting;
