'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// will replace this with API 
import img1 from '@/public/cigar1.webp';
import img2 from '@/public/cigar2.webp';
import img3 from '@/public/cigar3.webp';
import Button from './Button';

const imageCarousel = [
  {
    heading: "year of the horse",
    subheading: "limited edition 2026",
    image: img1,
  },
  {
    heading: "grande humidor",
    subheading: "Elevate your journey with breathtaking moments",
    image: img2,
  },
  {
    heading: "the white brand collection",
    subheading: "the icon of refreshment",
    image: img3,
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCarousel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + imageCarousel.length) % imageCarousel.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageCarousel.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        {imageCarousel.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={item.heading}
              fill
              priority={index === 0}
              className="object-cover"
              quality={95}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center items-center px-6 text-center">
        <div className="max-w-5xl">
          {imageCarousel.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-2000 ease-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              {index === currentIndex && (
                <div className=''>
                  <h1 className="text-6xl md:text-8xl font-bold text-neutral-1 mb-3 md:mb-6 drop-shadow-2xl">
                    {item.heading}
                  </h1>
                  <p className="text-xl md:text-2xl font-light text-neutral-1/90 mb-10 max-w-3xl mx-auto drop-shadow-lg leading-none">
                    {item.subheading}
                  </p>
                  <div className='w-full flex items-center justify-center gap-5'>
                    <button className="text-neutral-1 px-5 py-2 rounded-full text-lg cursor-pointer">
                        Explore Now
                    </button>
                    {/* <button className="bg-white text-black px-6 py-2 rounded-full text-lg cursor-pointer">
                        Discover
                    </button> */}
                    <Button text='Discover'/>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={goToPrevious}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-neutral-1" />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-neutral-1" />
      </button>

      {/* dots*/}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {imageCarousel.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-10 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/60 rounded-full hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}