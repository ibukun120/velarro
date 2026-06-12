import Button from "@/components/ui/Buttons/CommonButtons";

export default function StayInKnow() {
  return (
    <div className="space-y-10 sm:space-y-14 md:space-y-16 my-6 sm:my-8">
      {/* ── Find a Store & Lounge ── */}
      <div
        className="
          relative rounded-lg overflow-hidden
          transition-all duration-700
          hover:shadow-2xl h-full
          group
          min-h-[500px] sm:min-h-[1170px]
        "
        style={{
          backgroundImage: `url('/images/find-loung.png')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div
          className="
            absolute z-10 bg-[#1D1C1A99]
            text-center

            px-4 sm:px-5
            py-4 sm:py-4.5

            rounded-2xl sm:rounded-3xl

            bottom-4 sm:bottom-6
            left-1/2 -translate-x-1/2

            w-[92%] sm:w-auto
          "
        >
          {/* HEADING */}
          <h2
            className="
              text-[26px]
              sm:text-[40px]
              md:text-[50px]
              lg:text-[60px]

              font-light text-primary-50
              tracking-tight
              mb-2 
              leading-tight
            "
          >
            Find a Store & lounge
          </h2>

          {/* BUTTON */}
          <Button
            variant="product"
            className="
    text-[11px]
    sm:text-[12px]
    md:text-base
    tracking-[0.12em]
    px-10
    sm:px-8
    py-2.5
    sm:py-3
    font-normal
    rounded-md
  "
          >
            Store & Lounges
          </Button>
        </div>
      </div>
    </div>
  );
}
