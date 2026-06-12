"use client";

import Container from "@/components/Layouts/Container";
import Button from "@/components/ui/Buttons/CommonButtons";
import { Text } from "@/components/ui/Typography/Typography";
import Image from "next/image";

export default function EmptyWishlist() {
  return (
    <Container>
      <div
        className="
            flex min-h-[75vh] flex-col items-center justify-center
            px-4 py-16 text-center
          "
      >
        {/* ICON */}
        <div
          className="
              flex h-[150px] w-[150px]
              items-center justify-center
              rounded-full
              bg-primary-200
            "
        >
          <Image
            src="/icons/bookmark.svg"
            alt="Wishlist"
            width={74}
            height={74}
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-8 max-w-[620px]">
          <h2
            className="
                text-3xl
                font-light
                text-secondary-900
                md:text-5xl
              "
          >
            Your Wishlist is Empty
          </h2>

          <Text
            variant="lg"
            className="
                mx-auto mt-4 max-w-[520px]
                text-center
                font-light
                leading-[1.7]
                text-secondary-700
              "
          >
            Save products you love to keep track of them
            <br className="hidden md:block" />
            and revisit them anytime.
          </Text>
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <Button
            variant="primary"
            size="md"
            className="text-neutral-1 bg-primary-500 px-8 md:px-10"
          >
            Discover Products
          </Button>
        </div>
      </div>
    </Container>
  );
}
