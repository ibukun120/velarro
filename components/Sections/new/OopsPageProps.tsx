"use client";

import Image from "next/image";

interface OopsPageProps {
  title: string;
  description: string;
}

export default function OopsPage1({
  
  description,
}: OopsPageProps) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780917515877-error-bg.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Large Background Text */}
      <div className="absolute inset-0 top-[-120] flex justify-center pt-8 pointer-events-none">
        <h1 className="text-[25vw] font-bold text-neutral-7/60 leading-none">
          Oops
        </h1>
      </div>

      {/* Content */}
      <div className="relative top-20 z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-4xl">
          <div className="flex gap-30">
            {/* Left */}
            <div className="flex flex-col items-center">
              <Image
                src="/icons/nointernet.svg"
                alt="No Internet"
                width={200}
                height={200}
                priority
              />

            </div>

            {/* Right */}
            <div className="flex flex-col pt-8">
              <p className="text-neutral-10 text-2xl max-w-lg">
                {description}
              </p>

              <div className="flex pt-6 gap-4 text-2xl text-neutral-12 uppercase">
                <button
                  onClick={() => window.location.reload()}
                  className="border-b border-neutral-8 px-6 py-3"
                >
                  RETRY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}