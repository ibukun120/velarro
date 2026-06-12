import React from "react";
// import Image from "next/image";
import Container from "@/components/Layouts/Container";

export default function ContactLocation() {
const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=India&hl=en&z=4&output=embed";
  // const GOOGLE_MAPS_EMBED_URL =
  // "https://maps.google.com/maps?q=20.5937,78.9629&hl=en&z=4&output=embed";
  return (
    <div className="w-full text-center border-t border-neutral-6 mb-10">
      <Container className="py-16 md:py-20">
        <h2 className="text-4xl md:text-6xl font-light mb-1 text-secondary-900 tracking-tighter leading-tight">
          Our Primary Location
        </h2>
        <p className="text-sm md:text-md font-light mb-2 text-secondary-500 sm:my-3">
          Visit Velarro Headquarter or Explore Nearby stores.
        </p>
        <div>
          <div className="relative w-full rounded-xl overflow-hidden border-2 border-neutral-6 shadow-sm">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Velarro.com"
              className="w-full block h-55 sm:h-70 md:h-90 lg:h-115"
            />

            {/* View Store Locator CTA — overlaid bottom-right */}
            <div className="absolute bottom-4 -right-2">
              <a
                href="/store-locator"
                className="inline-block bg-primary-500 text-neutral-1 text-sm sm:px-5 px-3 py-1 sm:py-2.5 text-md rounded-lg shadow transition-colors duration-200"
              >
                View Store Locator
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
