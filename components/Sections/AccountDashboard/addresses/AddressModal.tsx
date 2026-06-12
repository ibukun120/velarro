"use client";

import { X } from "lucide-react";
import { H3 } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Buttons/CommonButtons";

import { Address } from "./address.types";

import StateSelect from "@/features/location/StateSelect";
import CitySelect from "@/features/location/CitySelect";
import CountrySelect from "@/features/location/CountrySelect";
import { Input2 } from "@/components/ui/FormElements/input2";

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
  isAddMode: boolean;
  formData: Omit<Address, "id">;
  onChange: (e: FormEvent) => void;
  onClose: () => void;
  onSave: () => void;
}

export default function AddressModal({
  isAddMode,
  formData,
  onChange,
  onClose,
  onSave,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3 sm:px-4">
      
      {/* MODAL BOX */}
      <div className="bg-neutral-2 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-xl shadow-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <H3 className="text-base sm:text-lg">
            {isAddMode ? "Add Address" : "Edit Address"}
          </H3>

          <button onClick={onClose} className="shrink-0">
            <X className="w-5 h-5 text-neutral-6 hover:text-neutral-13" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* Full Name */}
          <Input2
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />

          {/* Address */}
          <Input2
            label="Address"
            name="address"
            value={formData.address}
            onChange={onChange}
          />

          {/* Phone Number */}
          <Input2
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={onChange}
          />

          {/* Country + ZIP */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
  <CountrySelect
    label="Country"
    name="country"
    value={formData.country || ""}
    onChange={onChange}
  />

  <Input2
    label="ZIP Code"
    name="zip"
    value={formData.zip}
    onChange={onChange}
  />
</div>

{/* State + City */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
  <StateSelect
    label="State"
    name="state"
    value={formData.state || ""}
    country={formData.country || ""}
    onChange={onChange}
  />

  <CitySelect
    label="City"
    name="city"
    value={formData.city || ""}
    country={formData.country || ""}
    state={formData.state || ""}
    onChange={onChange}
  />
</div>
</div>

        {/* Actions */}
        {/* Save For Future */}
<div className="mt-6 flex items-center gap-2">
  <input
    type="checkbox"
    id="saveFuture"
    className="
      h-4
      w-4
      rounded-full
      border
      border-neutral-6
      accent-primary-500
      cursor-pointer
    "
  />
       
       <label
       htmlFor="saveFuture"
       className="
       text-[13px]
       font-light
       text-neutral-11
       cursor-pointer"
       >
        Save for future use
       </label>
       </div>
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6 sm:mt-8">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            CANCEL
          </Button>

          <Button
          variant="product"
            onClick={onSave}
            className="w-full sm:w-auto"
          >
           SAVE ADDRESS
          </Button>
        </div>
      </div>
    </div>
  );
}