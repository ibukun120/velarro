"use client";

import Container from "@/components/Layouts/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AccessorySection({ section, index }) {
  return (
    <div className="bg-neutral-1 py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border border-neutral-6 bg-neutral-15 bg-neutral-2 rounded-[28px] p-8 md:p-10 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-24">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-13 mb-4 leading-tight"
              >
                {section.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-secondary-300 underline text-lg md:text-xl mb-2"
              >
                {section.tag}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-secondary-800 text-base md:text-lg leading-relaxed max-w-[420px] mb-8"
              >
                {section.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/velarro-accessories/explore"
                  className="w-[80%] block text-center border border-neutral-6 bg-neutral-2 text-neutral-13 hover:bg-primary-500 hover:text-white uppercase tracking-wider px-10 py-3 rounded-md hover:scale-[1.03] hover:opacity-90 transition-all duration-300"
                >
                  Explore
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt || section.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
