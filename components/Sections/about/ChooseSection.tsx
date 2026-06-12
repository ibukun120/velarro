"use client";

import Container from "@/components/Layouts/Container";
import { motion } from "framer-motion";
// import {
//   Star,
//   BarChart2,
//   Clock,
//   SlidersHorizontal,
// } from "lucide-react";

export default function ChooseSection() {
  const features = [
    {
      title: "Generational Expertise",
      desc: [
        "Our relationship with tobacco cultivation spans more than 100 years. The expertise built across generations in soil, season, leaf, and cure cannot be acquired quickly. It can only be inherited and earned.",
        "Agricultural heritage since 1919.",
      ],
    },
    {
      title: "Quality Begins at the Source",
      desc: [
        "No machinery touches a Velarro leaf. Every cigar is shaped entirely by hand by torcedors who have spent at least 12 years perfecting a craft that cannot be taught quickly and cannot be replicated by a machine.",
        "Minimum 12 years' experience per torcedor.",
      ],
    },
    {
      title: "Rested & Aged",
      desc: [
        "A freshly rolled cigar is not a finished cigar. Every Velarro blend spends a minimum of six months resting in cedar-lined ageing rooms, giving the tobaccos time to settle, integrate, and become what they were always meant to be.",
        "Minimum six months of cedar-room ageing.",
      ],
    },
    {
      title: "Origin-Led Blending",
      desc: [
        "Where a tobacco is grown shapes everything about it. We blend with those conditions in mind, letting the character of the leaf lead rather than forcing it into a predetermined profile.",
        "Origin character guides every blend decision.",
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HEADER */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="
              text-[32px]
              md:text-[40px]
              font-light
              text-neutral-13
              leading-none
              mb-3
            "
          >
            Why Connoisseurs 
          </h2>

          <p
            className="
              text-[20px]
              font-light
              text-neutral-13
            "
          >
            Crafted with purpose, aged with time
          </p>
        </motion.div>
      </Container>

      {/* CARDS */}
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            md:gap-5
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                bg-neutral-3
                rounded-2xl
                border
                border-neutral-6
                p-5
                md:p-6
                shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                hover:bg-primary-100/50
                flex
                flex-col
              "
            >
              {/* ICON */}
              {/* <div
                className="
                  w-10
                  h-10
                  rounded-lg
                  bg-primary-100
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                {item.icon}
              </div> */}

              {/* TITLE */}
              <h3
                className="
                  text-[18px]
                  font-medium
                  text-neutral-13
                  mb-4
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <div
                className="
                  flex-1
                  space-y-4
                  text-[14px]
                  text-neutral-11
                  leading-relaxed
                "
              >
                {item.desc.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}