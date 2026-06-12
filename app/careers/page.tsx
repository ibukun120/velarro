import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Passion for craft",
    description: "We celebrate artisanship in every role, from leaf to lounge.",
    image: "/image-296@2x.png",
    fit: "object-contain"
  },
  {
    title: "Passion for craft",
    description: "We celebrate artisanship in every role, from leaf to lounge.",
    image: "/istockphoto-851975832-1024x1024-1@2x.png",
    fit: "object-cover"
  },
  {
    title: "Passion for craft",
    description: "We celebrate artisanship in every role, from leaf to lounge.",
    image: "/image-2961@2x.png",
    fit: "object-contain"
  }
];

const jobs = [
  {
    title: "Production Manager",
    meta: "Manufacturing & Operations - Esteli, Nicaragua"
  },
  {
    title: "Area Sales Manager",
    meta: "Sales & Distribution - Regional"
  },
  {
    title: "Sales Head",
    meta: "Commercial Leadership - Global"
  }
];

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-lg border border-borderWarm bg-linen px-8 py-3 font-gotham text-base leading-6 tracking-[0.15px] text-cocoa transition hover:bg-parchment">
      {children}
    </button>
  );
}

export default function CareersPage() {
  return (
    <main className="font-gotham text-ink">
      <div className="flex w-full flex-col items-center gap-[77px] pb-16">
        <section className="flex w-full flex-col items-center gap-6 bg-linen px-8 pb-8">
          <div className="flex w-full max-w-[1038px] flex-col items-center gap-[19px] text-center">
            <div className="flex w-full max-w-[808px] justify-center border-b border-borderWarm py-2">
              <h1 className="text-[32px] font-light leading-[38px] tracking-[-0.01em]">
                Careers at Velarro
              </h1>
            </div>

            <p className="text-xl font-light leading-8 tracking-[-0.02em] text-taupe">
              At Velarro, we believe in crafting experiences as rich as our
              products. With a heritage rooted in quality, craftsmanship, and
              passion, we aim to create extraordinary moments for our customers
              and employees alike.
            </p>
          </div>

          <div className="grid w-full max-w-[1208px] grid-cols-1 gap-9 py-8 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.image}
                className="rounded-xl border border-borderWarm bg-parchment p-5"
              >
                <div className="relative mb-4 aspect-[356/225] w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={item.fit}
                  />
                </div>

                <h2 className="mb-3 text-xl font-medium tracking-[0.25px] text-cocoa">
                  {item.title}
                </h2>
                <p className="text-base tracking-[0.25px] text-taupe">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex w-full max-w-[1276px] flex-col items-start justify-between gap-8 px-8 lg:flex-row lg:items-center">
          <div className="max-w-[725px]">
            <h2 className="mb-6 text-4xl font-normal tracking-[-0.01em]">
              Working at Velarro
            </h2>
            <p className="mb-6 text-xl font-light leading-[26px] text-taupe">
              We are one global team working with innovation, passion and
              integrity towards the same goal: to delight our customers with
              unique brands and unrivalled retail experiences.
            </p>
            <OutlineButton>LEARN MORE</OutlineButton>
          </div>

          <div className="h-[396px] w-full max-w-[439px] rounded-[20px] border border-[#e4d8c8] bg-[#faf8f6]" />
        </section>

        <section className="w-full max-w-[1278px] px-8">
          <div className="mb-10">
            <h2 className="mb-6 text-4xl font-normal tracking-[-0.01em]">
              Find Your Place
            </h2>
            <p className="text-xl font-light leading-[26px] text-taupe">
              From our estates to our flagship boutiques, every role at Velarro
              is an invitation to be part of something enduring.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex w-full flex-col gap-[18px]">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="flex flex-col justify-between gap-5 rounded-xl border border-borderWarm bg-linen p-6 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="mb-3 text-2xl font-normal tracking-[-0.01em] text-cocoa">
                      {job.title}
                    </h3>
                    <p className="text-xl font-light leading-[26px] text-taupe">
                      {job.meta}
                    </p>
                  </div>

                  <button className="w-fit rounded-lg border border-borderWarm bg-linen px-8 py-2 text-lg font-medium leading-6 text-taupe transition hover:bg-parchment">
                    Full - time
                  </button>
                </article>
              ))}
            </div>

            <Link href="/job" className="text-lg font-medium px-6 py-2 border border-borderWarm rounded-lg ">
              VIEW ALL POSITIONS
            </Link>
          </div>
        </section>

        <section className="w-full max-w-[1279px] px-8">
          <h2 className="mb-8 text-4xl font-normal tracking-[-0.01em]">
            Spoken by those who know
          </h2>

          <div className="flex gap-5 py-5 text-xl leading-[26px] text-taupe">
            <div className="min-h-[125px] border-r border-[#8e6f52]" />
            <blockquote className="font-light">
              <span>&quot;</span>
              <em>
                Working at Velarro means being surrounded by people who
                genuinely care about the tobacco, about the customer, and about
                each other. There is a pride here that you cannot manufacture
              </em>
              <span>&quot;.</span>
              <br />
              <br />
              - Master Blender, Velarro Estate
            </blockquote>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-8 px-8 text-center">
          <div className="flex w-full max-w-[1038px] flex-col items-center gap-[19px]">
            <div className="flex w-full max-w-[808px] justify-center border-b border-[#d5b57b] py-2">
              <h2 className="text-[32px] font-light leading-[38px] tracking-[-0.01em]">
                Ready to become part of the story?
              </h2>
            </div>

            <p className="text-xl font-light leading-8 tracking-[-0.02em] text-taupe">
              Explore roles across our production houses, sales teams, and
              global offices. Velarro is more than a brand, it is a life&apos;s
              work, and we invite you to make it yours.
            </p>
          </div>

          <OutlineButton>JOIN OUR TEAM</OutlineButton>
        </section>
      </div>
    </main>
  );
}