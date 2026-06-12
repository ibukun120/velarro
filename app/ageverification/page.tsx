"use client";

import Container from "@/components/Layouts/Container";
import Button from "@/components/ui/Buttons/CommonButtons";
import { H2, Text } from "@/components/ui/Typography/Typography";
import Image from "next/image";

interface AgeVerificationProps {
  onClose: () => void;
}

export default function AgeVerification({
  onClose,
}: AgeVerificationProps) {

  const handleEnter = () => {
    sessionStorage.setItem("velarro-age-verified", "true");
    onClose();
  };

  const handleExit = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white/40 backdrop-blur-[1px] ">
      <Container className="flex min-h-screen items-center justify-center px-4 mt-10">
        <div
          className="
            relative
            w-full
            max-w-[600px]
            overflow-hidden
            rounded-2xl
            border border-neutral-6
            bg-neutral-1
            shadow-2xl
            animate-in fade-in zoom-in duration-300
          "
        >
          <div className="flex flex-col items-center p-8 md:p-12">

            {/* LOGO */}
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/logo.svg"
                alt="Velarro"
                width={38}
                height={38}
                className="object-contain"
              />

              <h1
                className="
                  leading-none
                  text-[42px]
                  font-normal
                  text-primary-500
                "
              >
                Velarro Estate
              </h1>
            </div>

            {/* HEADING */}
            <div className="mt-8 text-center">
              <H2 className="text-3xl font-bold text-neutral-13">
                18+ Only
              </H2>

              <H2 className="mt-2 text-2xl font-medium text-neutral-13">
                Age Verification Required
              </H2>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 space-y-4 text-center">
              <Text variant="lg" className="text-neutral-10">
                This website contains premium cigar and tobacco-related
                content intended only for adults of legal smoking age.
              </Text>

              <Text variant="lg" className="text-neutral-10">
                By entering, you confirm that you are 18+ and legally
                permitted to access this website.
              </Text>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex w-full flex-col gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleEnter}
                className="w-full  py-4 text-base text-neutral-1 rounded-md"
              >
                Yes, I am 18+
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleExit}
                className="w-full  py-4 text-base rounded-md"
              >
                Exit Website
              </Button>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}