import Image from "next/image";
import Container from "@/components/Layouts/Container";

export default function CurationSection() {
  return (
    <Container className="flex flex-col items-start self-stretch bg-white md:py-32! z-[1]">
      {/* 12-column grid container */}
      <div className="md:grid w-full grid-cols-12 gap-6 h-screen md:h-[685px]">

        {/* Left column — text content */}
        <section className="col-span-5 row-start-1 flex flex-col items-start justify-center md:py-[155px] text-left ">
          {/* Heading */}
          <div className="mb-8 flex flex-col items-start self-stretch">
            <h2 className="m-0 self-stretch text-[32px] font-normal leading-[38px] tracking-wider text-primary-500 font-medium">
              A Note on Curation
            </h2>
          </div>

        
          {/* Body paragraphs */}
          <div className="flex flex-col items-start gap-6 self-stretch text-base text-secondary-300">
            <p className="m-0 self-stretch font-medium leading-6">
              At Velarro, we believe that haste is the enemy of quality. Every
              leaf in our collection undergoes a meticulous aging process that
              cannot be bypassed.
            </p>
            <p className="m-0 self-stretch font-medium leading-6">
              When you place an order, you aren&apos;t simply purchasing a product;
              you are securing a moment of perfected time. Our archive tracks
              these moments from the selection in our humidors to the moment
              they reach your hands.
            </p>
          </div>

          {/* Signature line */}
          <div className="mt-12 mb-8 md:mb-0 flex flex-col items-start self-stretch text-xl text-[var(--color-gray-100)]">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="h-px w-24 bg-primary-300 opacity-40" />
              <h3 className="m-0 self-stretch text-[#9A8F80] font-normal leading-[26px]">
                The Velarro Heritage Team
              </h3>
            </div>
          </div>
        </section>

        {/* Right column — image + overlay box */}
        <section className="relative col-span-6 col-start-7 row-start-1 flex flex-col items-start text-left text-base text-[var(--color-burlywood-100)] font-[var(--font-hanken-grotesk)] isolate">
          {/* Image container */}
          <div className="relative flex flex-col items-start self-stretch overflow-hidden rounded-[2px] z-0 isolate flex-shrink-0">
            <Image
              src="/images/acc2.png"
              alt="curation"
              fill
              className="relative md:h-[685px] max-w-full flex-shrink-0 overflow-hidden object-cover self-stretch z-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Colour overlay */}
            <div className="absolute inset-0 z-[1] bg-[var(--color-burlywood-200)] mix-blend-overlay" />
          </div>

          {/* Asymmetric overlay box */}
          <div className="absolute bottom-[-48px] left-[-48px] z-[1] flex flex-col items-start gap-[15.5px] bg-[#292A27] px-12 py-[36px] isolate flex-shrink-0">
            {/* Shadow layer */}
            <div className="absolute inset-0 bottom-[-0.5px] z-0 flex-shrink-0" />
            <span className="relative z-[1] flex-shrink-0 leading-6 text-primary-500">EST. 1919</span>
            <p className="relative z-[2] m-0 flex-shrink-0 text-[28px] font-normal leading-[38px] tracking-[-0.01em] text-secondary-100">
              Patience is the core of
              <br />
              our craft.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
