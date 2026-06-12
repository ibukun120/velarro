"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import Breadcrumb, {
  BreadcrumbItem,
} from "@/components/Common/BreadCrumb/Breadcrumb";

import Container from "@/components/Layouts/Container";

export interface HeroSectionProps {
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage: string;
  imageAlt?: string;
  title: string;
  description?: React.ReactNode;
  bottomLeftBlock?: React.ReactNode;
  breadcrumbClassName?: string;
}

export default function HeroSection({
  breadcrumbItems,
  backgroundImage,
  imageAlt = "Hero Image",
  title,
  description,
  bottomLeftBlock,
  breadcrumbClassName = "",
}: HeroSectionProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
          relative
          w-full
          h-[70vw]
          min-h-[550px]
          max-h-[900px]
          md:h-[70vh]
          lg:h-screen
          overflow-hidden
          group
        "
      >
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 top-0 w-full h-full "
        >
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Optional Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        {/* Center Content */}
        <Container
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            text-neutral-1
            px-4
          "
        >
          <div className="mt-20">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-4xl
                md:text-4xl
                lg:text-10xl
                font-light
                tracking-[-0.02em]
                leading-none
                text-neutral-1
                uppercase
                line-height-[72px]
              "
            >
              {title}
            </motion.h1>

            {/* Animated Line */}
            {/* <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="
                h-[2px]
                bg-neutral-6
                w-full
                max-w-[700px]
                mx-auto
                my-5
              "
            /> */}

            {/* Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="
                  max-w-3xl
                  mx-auto
                  py-6
                  text-sm
                  md:text-xl
                  text-neutral-1
                  leading-relaxed
                "
              >
                {description}
              </motion.div>
            )}
          </div>
        </Container>

        {/* Bottom Left Block */}
        {bottomLeftBlock && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              absolute
              bottom-8
              left-6
              md:bottom-12
              md:left-10
              lg:bottom-12
              lg:left-16
              z-20
              text-left
            "
          >
            {bottomLeftBlock}
          </motion.div>
        )}
      </motion.div>

      {/* Breadcrumb Section */}
      <div
        className={`
          w-full
          bg-neutral-1
          border-t
          border-neutral-4
          py-1
          ${breadcrumbClassName}
        `}
      >
        <Container className="flex justify-center ">
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </div>
    </div>
  );
}