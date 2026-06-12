"use client";

import Container from "@/components/Layouts/Container";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <div className="w-full bg-neutral-2 mt-12 md:mt-16 mb-12 md:mb-24 overflow-hidden">
      {/* OUTER ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Container
          className="
            max-w-6xl mx-auto
            p-8 md:p-10
          "
        >
          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.3fr_0.1fr_0.6fr]
              gap-10 lg:gap-4
              items-center
            "
          >
            {/* LEFT CONTENT (NO ANIMATION) */}
            <div
              className="
                lg:pr-1
                flex flex-col justify-center
                md:py-12
              "
            >
              {/* TITLE */}
              <h2
                className="
                  text-[28px] md:text-[36px]
                  text-neutral-13
                  mb-6
                  font-gotham
                "
              >
                Our Mission
              </h2>

              {/* SUBTITLE */}
              <h3
                className="
                  text-[22px] md:text-[24px]
                  font-bold
                  text-neutral-12
                  mb-8
                  leading-snug
                  w-[80%]
                "
              >
               A great cigar is not simply made.
              </h3>

              {/* DESCRIPTION */}
              <div
                className="
                  lg:pr-10
                  text-[15px] md:text-xl
                  text-neutral-11/80
                  leading-7.5
                  tracking-tight
                  font-light
                  space-y-2
                  gap-3
                "
              >
                <p>
                  At Velarro, our mission is to transform generations of agricultural expertise into premium products that celebrate quality, sustainability, craftsmanship, and the stories behind every origin. We honour the centuries-old tradition of cigar-making by combining the finest raw materials, the most skilled artisans, and an unwavering commitment to excellence.
                </p>

                <p>
                 We exist to build meaningful connections between consumers and the people, places, and traditions that make exceptional products possible delivering experiences that connect the smoker to the land, the craft, and the moment. We believe a great cigar is not simply made; it is cultivated, guided, and released only when it is ready. That philosophy shapes every decision we make, from the fields where our tobacco grows to the moment a Velarro cigar arrives in your hands.
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                hidden lg:block
                h-full
                w-[1px]
                bg-primary-400
                origin-top
              "
            />

            {/* RIGHT STATS */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                lg:pl-1
                flex flex-col justify-center
                gap-12
                mt-8 lg:mt-0
                pt-8 lg:pt-0
                border-t-[2px]
                lg:border-t-0
                border-[#D4A561]/80
                py-4
              "
            >
              {[
                {
                  value: "5%",
                  label: "TOP LEAF SELECTED",
                },
                {
                  value: "12+",
                  label: "YEARS TORCEDOR EXPERIENCE",
                },
                {
                  value: "200+",
                  label: "YEARS OF HERITAGE",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.2,
                  }}
                  className="flex flex-col"
                >
                  {/* NUMBER */}
                  <h4
                    className="
                      text-[52px] md:text-[58px]
                      font-medium
                      tracking-tight
                      text-neutral-11
                      leading-[1.1]
                      mb-2
                    "
                  >
                    {item.value}
                  </h4>

                  {/* LABEL */}
                  <p
                    className="
                      text-[13px] md:text-[20px]
                      text-neutral-11
                      uppercase
                      font-light
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}