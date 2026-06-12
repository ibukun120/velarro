"use client";

import Container from "@/components/Layouts/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStorySection() {
  return (
    <div className="w-full">
      {/* TOP TEXT */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Container className="my-4 md:my-8 text-center overflow-hidden">
          <p
            className="
              text-[15px] md:text-xl
              text-neutral-11
              italic
              font-light
              leading-relaxed
            "
          >
            &apos;&apos;A century of dedication to the art of the cigar. Every
            leaf a quiet testament to the extraordinary.&apos;&apos;
          </p>
        </Container>
      </motion.div> */}

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Container
          className="
            p-6 md:p-12
            overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <h3
                className="
                  text-[28px] md:text-[36px]
                  text-neutral-13
                  mb-6
                "
              >
                Brand Story
              </h3>
              <p className="
                  text-[15px] md:text-xl
                  text-neutral-11/60
                  tracking-tight
                  font-light
                  leading-6.5
                  mb-6
                  py-5
                ">
                “A legacy rooted in the earth. A future defined by craftsmanship.”
              </p>

              <p
                className="
                  text-[15px] md:text-xl
                  text-neutral-11/80
                  font-light
                  tracking-tight
                  leading-[26px]
                  mb-6
                "
              >
                Velarro&apos;s story begins not in a factory or boardroom, but in the fertile fields where generations of our family dedicated their lives to cultivating tobacco with patience, expertise, and deep respect for the land.
              </p>
              <p className="
                  text-[15px] md:text-xl
                  text-neutral-11/80
                  font-light
                  tracking-tight
                  leading-[26px]
                  mb-6
                ">
                From that foundation, we have grown into a brand that honors the past while embracing the future. Each of our cigars tells a story of heritage, of careful cultivation, and of the meticulous artistry that transforms simple tobacco into an unforgettable experience.
              </p>

              <div
                className="
                  border-l-[3px]
                  border-primary-500
                  pl-5
                  italic
                  text-[15px] md:text-xl
                  text-neutral-11/60
                  tracking-tight
                  font-light
                  leading-6.5
                  mb-6
                  py-5
                "
              >
                &apos;&apos; Every cigar we produce carries the weight of a
                generation&apos;s knowledge and the patience of nature itself.
                &apos;&apos;
              </div>

              <p
                className="
                  text-[15px] md:text-xl
                  text-neutral-11/80
                  font-light
                  tracking-tight
                  leading-[26px]
                  mb-6
                "
              >
                Today, Velarro represents the evolution of that philosophy. What began as a tobacco-growing heritage is now expanding into a modern premium lifestyle company one that celebrates craftsmanship, authenticity, traceability, and direct-origin sourcing.
              </p>
              <p className="
                  text-[15px] md:text-xl
                  text-neutral-11/80
                  font-light
                  tracking-tight
                  leading-[26px]
                  mb-6
                ">
                Rather than operating as a brand disconnected from production, Velarro maintains a close relationship with the people, regions, and traditions behind every product we offer. The world&apos;s finest products begin at their source. That belief guides everything.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="
                relative
                w-full
                h-[350px] md:h-[820px]
                overflow-hidden
                rounded-2xl
                group
              "
            >
              <Image
                src="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780123438436-brand-story.webp"
                alt="Cigar with whiskey"
                fill
                className="
                  object-cover
                  rounded-2xl
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/5" />

              {/* BADGE */}
              {/* <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  type: "spring",
                }}
                className="
                  absolute
                  bottom-6 left-6
                  w-[72px] h-[72px]
                  flex flex-col items-center justify-center
                  bg-[#D4A561]
                  text-neutral-11
                  text-sm
                  font-semibold
                  rounded-full
                  shadow-lg
                  leading-tight
                "
              >
                <span>Est.</span>
                <span>1919</span>
              </motion.div> */}
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}