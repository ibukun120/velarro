"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: Props) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="pt-10 bg-slate-50 shadow-xs border border-gray-100">
      {/* Main Image */}
      <div className="flex justify-center">
        <Image
          src={activeImage}
          alt={alt}
          width={400}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex justify-center gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`border p-1 transition ${
                activeImage === img
                  ? "border-slate-200"
                  : "border-slate-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
