// ─── ApproachStatement ────────────────────────────────────────────────────────
// The opening "brand philosophy" block with the italic pull-quote.
// ──────────────────────────────────────────────────────────────────────────────

export default function ApproachStatement() {
  return (
    <div
      className="
        w-full flex flex-col items-start gap-6
        drop-shadow-[0_20px_40px_rgba(28,28,25,0.04)]
        rounded-[24px]
        text-left text-[20px] text-[#1C1C19] font-gotham
      "
    >

       <h2
        
          className="
            text-5xl font-normal tracking-[-0.01em] leading-[43px]
            text-neutral-13 w-full
            max-[750px]:text-[29px] max-[750px]:leading-[34px]
            max-[450px]:text-[22px] max-[450px]:leading-[26px]
          "
        >
           Sustainability
        </h2>

      {/* Opening paragraph */}
      <p className="w-full text-xl text-neutral-11/80 leading-[26px] font-light">
        Velarro Estate approaches sustainability as a controlled supply-chain
        discipline rather than a marketing claim. The objective is to reduce
        environmental impact across cultivation, production, packaging, and
        distribution while preserving the standards required for hand-rolled
        cigars, cigarillos, coffee, tea, and natural-fiber apparel.
      </p>

      {/* Pull-quote row */}
      <div
        className="
          w-full flex flex-wrap items-center gap-[10px]
          max-h-[123px] text-center
          max-[750px]:flex-col max-[750px]:max-h-none
        "
      >
        {/* Vertical rule */}
        <div
          aria-hidden="true"
          className="
            w-[0.5px] h-18 border-r border-primary-500 
            max-[750px]:w-full max-[750px]:h-[2px] max-[750px]:border-r-0 max-[750px]:border-b
          "
        />

        {/* Quote text */}
        <blockquote
          className="
            flex-1 italic font-light leading-[26px] text-xl text-secondary-900/50
            flex items-center justify-center text-center
            min-w-[485px] max-w-[746px]
            max-[750px]:min-w-full max-[750px]:max-w-full
            max-[450px]:text-[16px] max-[450px]:leading-[21px]
          "
        >
          &ldquo;What nature perfects over time, we craft with care and preserve
          with purpose&rdquo;
        </blockquote>
      </div>
    </div>
  );
}