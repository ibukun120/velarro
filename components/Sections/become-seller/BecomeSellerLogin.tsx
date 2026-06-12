"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/Layouts/Container";
import Button from "@/components/ui/Buttons/CommonButtons";
import { InputBe } from "@/components/ui/FormElements/Input1";

import PhoneInputField from "@/components/ui/FormElements/PhoneInputField";
import CountrySelect from "@/components/ui/FormElements/CountrySelect";

export default function BecomeSeller() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("in");

  return (
    <section className=" py-12 md:py-26">
      <Container>
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-neutral-6
            
          "
        >
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            {/* LEFT IMAGE */}
            <div className="relative min-h-[650px] overflow-hidden">
              <Image
                src="https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780052218117-vendor-form.webp"
                alt="Velarro"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#9A979740]" />
            </div>

            {/* RIGHT FORM */}
            <div className="px-6 py-8 md:px-10 md:py-10">
              <h2
                className="
                  mb-8
                  text-center
                  text-[32px]
                  font-normal
                  text-neutral-13
                "
              >
                Partner with Velarro
              </h2>

              <div className="space-y-4">
                <InputBe label="Full Name *" placeholder="Enter full name" />

                <InputBe
                  label="Email Address *"
                  placeholder="Enter your email"
                />

                <PhoneInputField
                  value={phone}
                  onChange={setPhone}
                  country={country}
                />

                <InputBe
                  label="Business Name *"
                  placeholder="Enter business name"
                />

                <div className="grid grid-cols-2 gap-3">
                  <CountrySelect value={country} onChange={setCountry} />

                  <InputBe label="ZIP Code *" placeholder="000000" />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-normal text-neutral-13">
                    Comments *
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Enter your message"
                    className="
                      w-full
                      rounded-xs
                      border
                      border-neutral-6
                      bg-neutral-2
                      px-3
                      py-3
                      text-sm
                      outline-none
                    "
                  />
                </div>

                <Button
                  variant="product"
                  className="
                    h-11
                    w-full
                  "
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}