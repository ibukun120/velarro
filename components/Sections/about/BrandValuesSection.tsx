"use client";

import Container from "@/components/Layouts/Container";
import { motion } from "framer-motion";
// import {
//   Star,
//   Clock,
//   BarChart2,
//   PenTool,
//   Layers,
// } from "lucide-react";

export default function BrandValuesSection() {
  const values = [
    {
      title: "Heritage",
      desc: "We honour the knowledge, traditions, and agricultural expertise developed across more than a century. That history is not background it is the product.",
    },
    {
      title: "Craftsmanship",
      desc: "Exceptional products are created through patience, skill, and attention to detail. We will never automate what a human hand does better.",
    },
    {
      title: "Authenticity",
      desc: "We value transparency, honesty, and genuine connections to origin. Every product must be traceable to the land and people behind it.",
      
    },
    {
      title: "Quality",
      desc: "Every product carrying the Velarro name must meet the highest standards of excellence a standard that has never been lowered in over a century.",
    },
    {
      title: "Sustainability",
      desc: "We recognise our responsibility to protect the land, communities, and resources that make our products possible now and for future generations.",
    },
    {
      title: "Innovation",
      desc: "While we respect tradition, we continuously seek new ways to elevate experiences combining generational knowledge with modern luxury and contemporary design.",
    },
  ];

  return (
    <div className="w-full mb-16 md:my-24">
      {/* OUTER CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Container
          className="
            border
            bg-primary-100/30
            border-neutral-6
            rounded-[24px]
            p-8 md:p-12
            shadow-sm
          "
        >
          {/* HEADER */}
          <div className="mb-8 md:mb-12">
            <h2
              className="
                text-[28px] md:text-[36px]
                text-neutral-13
                tracking-tight
              "
            >
              Brand Values
            </h2>
            <p
                className="
                  text-[15px] md:text-xl
                  text-neutral-11/80
                  font-light
                  tracking-tight
                  leading-[26px]
                  mb-6
                  mt-6
                "
              >
                Velarro&apos;s story begins not in a factory or boardroom, but in the fertile fields where generations of our family dedicated their lives to cultivating tobacco with patience, expertise, and deep respect for the land.
              </p>
          </div>
          

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="
                  bg-neutral-3
                  p-6 md:p-8
                  border-1
                  border-neutral-6
                  rounded-2xl
                  flex flex-col items-start
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* ICON */}
                {/* <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.12 + 0.2,
                  }}
                  className="
                    w-8 h-8
                    bg-primary-100
                    flex items-center justify-center
                    rounded
                    mb-5
                  "
                >
                  {item.icon}
                </motion.div> */}

                {/* TITLE */}
                <h3
                  className="
                    text-[16px] md:text-[20px]
                    font-semibold
                    text-neutral-13
                    mb-3
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[13px] md:text-[16px]
                    text-neutral-11
                    font-medium
                    leading-4.5
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>
    </div>
  );
}