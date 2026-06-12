import Container from "@/components/Layouts/Container";
import { ArrowRight } from "lucide-react";
// import Image from "next/image";

export default function BespokeServicesSection() {
  return (
    <div className="relative z-[2] flex flex-col items-start self-stretch bg-secondary-700 py-[100px] max-w-full">
      <Container className="flex w-full items-end justify-between gap-5 self-stretch flex-wrap">

        {/* Left — text content */}
        <section className="flex w-full lg:max-w-[672px] flex-col items-start gap-4 text-left text-base">
          <p className="m-0 font-medium leading-6 uppercase tracking-wide text-primary-400">
            EXCLUSIVE ENQUIRIES
          </p>

          <div className="flex flex-col items-start self-stretch text-[32px] text-[#E3E3DE]">
            <h2 className="m-0 flex md:w-[550px] items-center text-[length:inherit] font-normal leading-[38px] tracking-[-0.01em]">
              Seeking a custom humidor or rare vintage?
            </h2>
          </div>

          <div className="flex flex-col items-start self-stretch pt-2 opacity-70 text-[var(--color-silver)]">
            <p className="m-0 md:w-[672px] font-medium leading-6 text-[#E3E3DE]">
              Our concierges are available to source limited editions or
              coordinate bespoke cigar lounge installations tailored to your
              exact specifications.
            </p>
          </div>
        </section>

        {/* Right — CTA button */}
        <button className="flex cursor-pointer items-center gap-4 rounded-lg border border-neutral-6 bg-transparent px-8 py-3 transition-opacity hover:opacity-80">
          <span className="text-base font-medium leading-6 text-primary-500">
            REQUEST CONSULTATION
          </span>
          <div className="flex flex-col items-start text-primary-500">
            <ArrowRight size={14} />
          </div>
        </button>

      </Container>
    </div>
  );
}
