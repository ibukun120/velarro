//import type { SustainabilitySection } from "@/types";

export interface SustainabilitySection {
  id: string;
  title: string;
  body: string;
}

interface ContentSectionProps {
  section: SustainabilitySection;
}



export default function ContentSection({ section }: ContentSectionProps) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="
        w-full flex flex-col items-start
        drop-shadow-[0_20px_40px_rgba(28,28,25,0.04)]
        rounded-[24px]
        text-left text-neutral-13 font-gotham
      "
    >
      <div className="w-full flex flex-col gap-8 max-[750px]:gap-4">
        {/* Section heading */}
        <h2
          id={`${section.id}-heading`}
          className="
            text-[36px] font-normal tracking-[-0.01em] leading-[43px]
            text-neutral-13 w-full
            max-[750px]:text-[29px] max-[750px]:leading-[34px]
            max-[450px]:text-[22px] max-[450px]:leading-[26px]
          "
        >
          {section.title}
        </h2>

        {/* Body copy */}
        <div className="w-full flex flex-col text-xl text-neutral-11/80">
          <p
            className="
              leading-[26px] font-light
              max-[450px]:text-[16px] max-[450px]:leading-[21px]
            "
          >
            {section.body}
          </p>
        </div>
      </div>
    </section>
  );
}