"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/ui/Buttons/CommonButtons";
import { H1, H3, Text } from "@/components/ui/Typography/Typography";
import { InputBe } from "@/components/ui/FormElements/Input1";

/* ================= TYPES ================= */

type VendorFormType = {
  businessName: string;
  entityType: string;
  address: string;
  country: string;
  pincode: string;
  taxId: string;
  legalName: string;
  tradeLicense: string;
  gst: string;
  tobaccoLicense: string;
  ownerName: string;
  email: string;
  phone: string;
};

/* ================= COMPONENT ================= */

export default function VendorApplicationForm() {
  const [form, setForm] = useState<VendorFormType>({
    businessName: "",
    entityType: "",
    address: "",
    country: "",
    pincode: "",
    taxId: "",
    legalName: "",
    tradeLicense: "",
    gst: "",
    tobaccoLicense: "",
    ownerName: "",
    email: "",
    phone: "",
  });

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  /* ================= HANDLER ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !form.businessName ||
      !form.entityType ||
      !form.email ||
      !form.phone ||
      !form.country
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!agree1 || !agree2) {
      alert("Please accept agreements");
      return;
    }

    console.log(form);

    alert("Application Submitted Successfully ✅");
  };

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24 mt-6">
      {/* BACKGROUND IMAGE */}
     <div className="absolute inset-0 -z-10 overflow-hidden">
  <Image
    src="/userDashboard/vendor-login.png"
    alt="background"
    fill
    priority
    className="object-cover object-center scale-105 blur-[3px] opacity-60"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
</div>
      {/* FORM CARD */}
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:p-6 md:p-8">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <H1 className="mb-2 text-3xl font-medium text-neutral-900">
            Become a Vendor
          </H1>

          <Text className="text-neutral-600">
            Start selling from Velarro Marketplace
          </Text>
        </div>

        {/* ================= BUSINESS INFO ================= */}
        <div className="space-y-5">
          <H3 className="text-xl font-medium">Business Information</H3>

          <InputBe
            label="Business Name *"
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Business Name"
          />

          {/* ENTITY TYPE */}
          <div>
            <label className="mb-2 block text-sm text-neutral-700">
              Legal Entity Type *
            </label>

            <select
              name="entityType"
              value={form.entityType}
              onChange={handleChange}
              className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none transition focus:border-[#BE8B3D]"
            >
              <option value="">Select Legal Entity Type</option>

              <option value="sole">Sole Proprietorship</option>

              <option value="partnership">Partnership</option>

              <option value="private">Private Limited</option>
            </select>
          </div>

          <InputBe
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
          />

          {/* COUNTRY + PIN */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputBe
              label="Country *"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
            />

            <InputBe
              label="ZIP Code *"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pin Code"
            />
          </div>

          {/* TAX + LEGAL */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputBe
              label="Tax ID *"
              name="taxId"
              value={form.taxId}
              onChange={handleChange}
              placeholder="Tax ID"
            />

            <InputBe
              label="Business Name *"
              name="legalName"
              value={form.legalName}
              onChange={handleChange}
              placeholder="Business Name"
            />
          </div>
        </div>

        {/* ================= LICENSE ================= */}
        <div className="mt-8 space-y-5">
          <H3 className="text-xl font-medium">
            License & Tax Information
          </H3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputBe
              label="Trade License Number"
              name="tradeLicense"
              value={form.tradeLicense}
              onChange={handleChange}
              placeholder="Trade License Number"
            />

            <InputBe
              label="GST Number"
              name="gst"
              value={form.gst}
              onChange={handleChange}
              placeholder="GST Number"
            />
          </div>

          <InputBe
            label="Tobacco Vendor License Number"
            name="tobaccoLicense"
            value={form.tobaccoLicense}
            onChange={handleChange}
            placeholder="Tobacco Vendor License Number"
          />
        </div>

        {/* ================= OWNER INFO ================= */}
        <div className="mt-8 space-y-5">
          <H3 className="text-xl font-medium">Owner Information</H3>

          <InputBe
            label="Owner Name"
            name="ownerName"
            value={form.ownerName}
            onChange={handleChange}
            placeholder="Owner Name"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputBe
              label="Email *"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />

            <InputBe
              label="Phone Number *"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* ================= UPLOAD SECTION ================= */}
        <div className="mt-8 space-y-4">
          <H3 className="text-xl font-medium">Upload Documents</H3>

          <div className="space-y-6">
            {/* ID Proof */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Text>ID Proof (Aadhar/PAN)</Text>

              <label className="cursor-pointer">
                <input type="file" className="hidden" />

                <button
                  type="button"
                  className="
                    rounded-md
                    border
                    border-neutral-6
                    px-6
                    py-2
                    text-[18px]
                    font-semibold
                    text-primary-600
                    transition-all
                    duration-300
                    hover:bg-primary-50
                  "
                >
                  Choose file
                </button>
              </label>
            </div>

            {/* GST Certificate */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Text>GST Certificate</Text>

              <label className="cursor-pointer">
                <input type="file" className="hidden" />

                <button
                  type="button"
                  className="
                    rounded-md
                    border
                    border-neutral-6
                    px-6
                    py-2
                    text-[18px]
                    font-semibold
                    text-primary-600
                    transition-all
                    duration-300
                    hover:bg-primary-50
                  "
                >
                  Choose file
                </button>
              </label>
            </div>

            {/* Trade License */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Text>Trade License</Text>

              <label className="cursor-pointer">
                <input type="file" className="hidden" />

                <button
                  type="button"
                  className="
                    rounded-md
                    border
                    border-neutral-6
                    px-6
                    py-2
                    text-[18px]
                    font-semibold
                    text-primary-600
                    transition-all
                    duration-300
                    hover:bg-primary-50
                  "
                >
                  Choose file
                </button>
              </label>
            </div>

            {/* Tobacco License */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Text>Tobacco License</Text>

              <label className="cursor-pointer">
                <input type="file" className="hidden" />

                <button
                  type="button"
                  className="
                    rounded-md
                    border
                    border-neutral-6
                    px-6
                    py-2
                    text-[18px]
                    font-semibold
                    text-primary-600
                    transition-all
                    duration-300
                    hover:bg-primary-50
                  "
                >
                  Choose file
                </button>
              </label>
            </div>
          </div>
        </div>

        {/* ================= AGREEMENT ================= */}
        <div className="mt-8 space-y-5">
          <H3 className="text-xl font-medium">Agreement</H3>

          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={agree1}
              onChange={() => setAgree1(!agree1)}
              className="mt-1 accent-[#BE8B3D]"
            />

            <span>
              I confirm that I will comply with the Cigarettes & Other Tobacco
              Products Act, 2003 (COTPA) regulations.
            </span>
          </label>

          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={agree2}
              onChange={() => setAgree2(!agree2)}
              className="mt-1 accent-[#BE8B3D]"
            />

            <span>
              I agree to the{" "}
              <span className="cursor-pointer underline">
                Terms & Conditions
              </span>
            </span>
          </label>
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <Button
            onClick={handleSubmit}
            className="h-12 w-full rounded-md bg-[#BE8B3D] text-neutral-1 hover:bg-[#a9772f]"
          >
            SUBMIT APPLICATION
          </Button>
        </div>

        {/* FOOTER */}
        <div className="mt-5 text-center">
          <Text variant="sm" className="text-neutral-500">
            Need help?{" "}
            <span className="cursor-pointer underline">
              Contact our support team
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
}