import Image from "next/image";
import img1 from "@/public/gift.webp";
import Button from "./Button";

function PromotionalBlock() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <Image
        src={img1}
        alt="Velarro Gifting Collection"
        fill
        priority
        className="object-cover brightness-75"
      />

      <div className="absolute inset-0 bg-black/50">
        <div className="flex h-full items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <div className="inline-block">
              <h1 className="leading-none text-neutral-1 text-xl">Gifting</h1>
              <div className="h-1 bg-[#C59949] w-full mt-2"></div>
            </div>

            <p className="mt-5 text-4xl md:text-5xl font-light text-neutral-1 tracking-wide max-w-4xl mx-auto leading-relaxed">
              find the perfect gift
            </p>
            <p className="text-xl text-neutral-1">
              quality time beautifully filled
            </p>

            <div className="mt-12 inline-block">
              <Button text="Discover Gifting"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionalBlock;
