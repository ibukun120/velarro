'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cigars } from "@/lib/cigar.data";

export default function FeaturedCollection() {
  return (
    <div className="md:pt-10 pt-5">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex flex-col items-center gap-3">
          <div className="inline-block">
            <p className="text-base md:text-2xl leading-none">
              Featured Collection
            </p>
            {/* line */}
            <div className="h-0.5 bg-[#C59949] w-full"></div>
          </div>
          <p className="md:text-4xl text-2xl">velarro cigars & accessories</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-12 text-neutral-1">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full"
        >
          {cigars.map((cigar) => (
            <SwiperSlide
            style={{ position: 'relative' }}
              key={cigar.id}
              className="relative h-[60vh]! md:w-[70vw]! lg:w-[60vw]! md:h-[50vh]! lg:h-[60vh]! overflow-hidden shadow-2xl"
            >
              <div className="grayscale swiper-slide-active:grayscale-0 transition-all duration-1000 h-full w-full">
                <Image
                  src={cigar.src}
                  alt={cigar.name}
                  fill
                  priority
                  className="w-full h-full object-center object-cover pointer-events hover:scale-[1.1] transition ease-in-out duration-350"
                />
              </div>

              {/* info */}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/95 via-black/70 to-transparent p-8 pt-20">
                <h3 className="text-3xl md:text-5xl font-bold tracking-wider drop-shadow-2xl">
                  {cigar.name}
                </h3>
                <p className="text-lg md:text-xl text-[#C59949] font-light tracking-wide mt-2 opacity-90">
                  {cigar.types}
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev rounded-full bg-white/20" />
          <div className="swiper-button-next rounded-full bg-white/20" />

          <div className="swiper-pagination bottom-10" />
        </Swiper>

        <style jsx global>{`
          .swiper-button-prev,
          .swiper-button-next {
            width: 25px;
            height: 25px;
            padding: 6px;
            color: #ffff;
            font-weight: bold;
          }
          @media (max-width: 1023px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none !important;
            }
          }

          .swiper-pagination-bullet {
            background: white;
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background: white;
          }
          @media (max-width: 767px) {
            .swiper-pagination {
              bottom: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
