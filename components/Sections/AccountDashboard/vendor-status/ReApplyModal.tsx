"use client";

import { useState } from "react";
import { H3 } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Buttons/CommonButtons";
import { Input } from "@/components/ui/FormElements/Input3";

import CountrySelect from "@/features/location/CountrySelect"; // ✅ added

type FormType = {
  name: string;
  website: string;
  taxId: string;
  category: string;
  years: string;
  country: string;
  type: string;
  email: string;
};

const initialState: FormType = {
  name: "",
  website: "",
  taxId: "",
  category: "",
  years: "",
  country: "",
  type: "",
  email: "",
};

export default function ReApplyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormType>(initialState);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => setForm(initialState);

  const handleApply = () => {
    if (!form.name || !form.email) {
      alert("Please fill required fields (Name & Email)");
      return;
    }

    console.log("Form Submitted:", form);
    setForm(initialState);
    onClose();
  };

  const handleCancel = () => {
    setForm(initialState);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-4">
      
      {/* MODAL */}
      <div className="bg-neutral-1 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-6 shadow-xl border border-neutral-6">
        
        <H3 className="mb-4 text-sm sm:text-base">Re-Apply</H3>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Business Name */}
          <div className="sm:col-span-2">
            <Input
              label="Business name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          {/* Website */}
          <div className="sm:col-span-2">
            <Input
              label="Website"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder=".com"
            />
          </div>

          <Input
            label="Tax ID"
            name="taxId"
            value={form.taxId}
            onChange={handleChange}
            placeholder="XXXXX12345"
          />

          <Input
            label="Primary Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Premium"
          />

          <Input
            label="Year in Business"
            name="years"
            value={form.years}
            onChange={handleChange}
            placeholder="1"
          />

          {/* ✅ REPLACED Country Input */}
          <CountrySelect
            label="Country"
            name="country"
            value={form.country || ""}
            onChange={handleChange}
          />

          <Input
            label="Business Type"
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Retail"
          />

          <Input
            label="Contact Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="@gmail.com"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          
          <Button
            onClick={handleClear}
            className="bg-neutral-200 text-black w-full sm:w-auto"
          >
            CLEAR
          </Button>

          <Button
            onClick={handleCancel}
            variant="danger"
            className="w-full sm:w-auto"
          >
            CANCEL
          </Button>

          <Button
            onClick={handleApply}
            className="bg-primary-400 hover:bg-primary-600 text-neutral-1 w-full sm:w-auto"
          >
            APPLY
          </Button>
        </div>
      </div>
    </div>
  );
}