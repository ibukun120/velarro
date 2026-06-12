"use client";

import { cigarDetails } from "@/lib/cigar.data";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClockFading, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


function Page() {
  const pageDeatils = {
    name: "Davidoff Winston Churchill",
    types: "Dominican • Elegant & Refined",
    src: "/cigar2.webp",
  };

  const bg = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bg,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="h-full w-full">
      {/* image */}
      <div
        ref={bg}
        className="relative h-[70vh] w-full overflow-hidden text-center"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            alt=""
            src={pageDeatils.src}
            fill
            priority
            quality={75}
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative flex items-center justify-center w-full h-full text-neutral-1 md:text-7xl text-5xl">
          {pageDeatils.name}
        </h1>
      </div>
      {/* breadcrumb */}
      <div className="flex items-center justify-center py-2">
        <div className="flex items-center gap-1 text-base">
          <h5>Home</h5>
          <h5>{">"}</h5>
          <h5>Shop</h5>
          <h5>{">"}</h5>
          <h5>Cigar</h5>
          <h5>{">"}</h5>
          <h5 className="text-orange-600">{pageDeatils.name}</h5>
        </div>
      </div>
      {/* main */}
      <div className="w-full h-full flex items-start">
        {/* left */}
        <div className="hidden lg:block lg:w-1/4 h-[75vh] p-5 border-r">
          {/* upperleft */}
          <div className="flex flex-col">
            <h1 className="text-2xl">catagory</h1>
            <Link href={""} className="text-lg">
              escurio
            </Link>
            <Link href={""} className="text-lg">
              Nicaragua
            </Link>
            <Link href={""} className="text-lg">
              yamasa
            </Link>
          </div>
          {/* lowerleft */}
          <div className="text-center">
            <h1 className="text-2xl">refine by</h1>
            <div className="text-lg flex flex-col text-left">
              <div>
                <input type="checkbox" />{" "}
                <label htmlFor="">Show only in Stock product</label>
              </div>
              <div>
                <input type="checkbox" />{" "}
                <label htmlFor="">limited edition</label>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="h-full lg:w-3/4 w-full p-5">
          <div className="h-full w-full flex gap-10 flex-wrap md:justify-center lg:justify-normal">
            {cigarDetails.map((item, key) => {
              return (
                <div
                  key={key}
                  className="md:w-[20rem] w-full shrink-0 cursor-pointer"
                >
                  <div className="h-[45vh] relative overflow-hidden">
                    {/* image */}
                    <Image
                      alt=""
                      src={"/pic1.avif"}
                      fill
                      className="object-cover object-center hover:scale-[1.1] transition duration-300 ease-in-out"
                    />
                  </div>
                  <div className="text-center pt- pb-5">
                    <h1>{item.brand}</h1>
                    <h2 className="text-xl">{item.name}</h2>
                    <div className="flex items-center justify-center pb-2">
                      <h5>{item.ringGauge}</h5>
                      <h5>|</h5>
                      <div className="flex items-center gap-2">
                        <h5>{item.diameter}</h5>
                        <div className="flex items-center gap-1">
                          <Ruler height={15} width={15} />
                          <h5>{item.lengthInch}</h5>
                        </div>
                      </div>
                      <h5>|</h5>
                      <div className="flex items-center gap-2">
                        <h5>{item.lengthMm}</h5>
                        <div className="flex items-center gap-1">
                          <ClockFading height={15} width={15} />
                          <h5>{item.smokingTime}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#C59949] text-xl text-neutral-1 hover:bg-black">
                      Buy now
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
