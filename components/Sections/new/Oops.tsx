"use client";

import Link from "next/link";

interface OopsPageProps {
  code: string;
  title: string;
  description: string;
}

export default function OopsPage({ code, title, description }: OopsPageProps) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780917515877-error-bg.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Large Background Text */}
      <div className="absolute top-[-100] inset-0 flex justify-center pt-8 pointer-events-none">
        <h1 className="text-[25vw] font-bold text-neutral-7/60 leading-none pt-10">
          Oops
        </h1>
      </div>

      {/* Content */}
      <div className="relative top-30 z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <div className="flex gap-30">
            {/* Left */}
            <div className="">
              <h2 className="text-15xl font-light text-neutral-7">{code}</h2>

              <p className="text-2xl relative top-[-20] left-2 text-neutral-7">
                {title}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col pt-8">
              <p className="text-neutral-12 text-2xl">{description}</p>

              <div className="flex pt-6 gap-4 text-2xl uppercase">
                <Link href="/" className="border-b border-neutral-8 px-6 py-3 ">
                  Homepage
                </Link>

                <Link href="/products" className="border-b border-neutral-8 px-6 py-3 ">
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
