"use client";
import { Address, useCheckout } from "@/app/lib/checkout-context";
import { useState } from "react";


type EditAddressProps = {
  address: Address & { id: string; label: string };
  onClose: () => void;
};

export default function EditAddress({ address, onClose }: EditAddressProps) {
  const { updateSavedAddress } = useCheckout();
  const [form, setForm] = useState({ ...address });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSave = () => {
    updateSavedAddress(address.id, form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#faf7f2] rounded-2xl w-full max-w-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Back */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#5a4a2a] hover:text-[#c9a84c] transition-colors mb-5 group"
          >
            <div className="w-8 h-8 bg-[#f0ebe0] rounded-lg flex items-center justify-center group-hover:bg-[#e8e0d0] transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <span className="font-semibold text-sm">Back</span>
          </button>

          <h2 className="text-xl font-bold text-[#2d2416] mb-1">Shipping Information</h2>
          <p className="text-sm text-[#9a8a6a] mb-6">Update your delivery details below to ensure a smooth shipping process.</p>

          <div className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">Full Name*</label>
              <div className="relative">
                <input
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416] pr-8"
                />
                {form.fullName && (
                  <svg className="absolute right-2.5 top-3" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">Phone Number*</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416]"
              />
            </div>

            {/* Street Address */}
            <div className="col-span-2">
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">Street Address</label>
              <input
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416]"
              />
            </div>

            {/* Apartment */}
            <div className="col-span-2">
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">
                Apartment / Suite <span className="font-normal text-[#9a8a6a]">(optional)</span>
              </label>
              <input
                value={form.apartment || ""}
                onChange={(e) => update("apartment", e.target.value)}
                placeholder="e.g. Apt 4b"
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416] placeholder-[#c4b896]"
              />
            </div>

            {/* City */}
            <div>
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">City</label>
              <input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416]"
              />
            </div>

            {/* State */}
            <div>
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">State / Province</label>
              <input
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416]"
              />
            </div>

            {/* Postal */}
            <div>
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">Postal Code</label>
              <input
                value={form.postalCode}
                onChange={(e) => update("postalCode", e.target.value)}
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416]"
              />
            </div>

            {/* Country */}
            <div>
              <label className="text-xs font-semibold text-[#5a4a2a] mb-1.5 block">Country</label>
              <select
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className="w-full border border-[#e8e0d0] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#c9a84c] text-[#2d2416]"
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Nigeria</option>
                <option>Germany</option>
              </select>
            </div>
          </div>

          {/* Set as Default */}
          <label className="flex items-center gap-2 mt-5 cursor-pointer group">
            <div className="w-5 h-5 rounded bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <span className="text-sm text-[#5a4a2a] font-medium">Set as Default address</span>
          </label>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-[#5a4a2a] hover:text-[#2d2416] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-[#c9a84c] text-neutral-1 rounded-xl text-sm font-semibold hover:bg-[#b8973b] transition-colors"
            >
              Save Address
            </button>
          </div>

          {/* Map preview */}
          <div className="mt-6 bg-[#f0ebe0] rounded-xl h-28 flex flex-col items-center justify-center gap-1">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p className="text-xs text-[#c9a84c] font-medium">Map preview for {form.city || "your city"}</p>
          </div>

          {/* Postal hint */}
          {form.address && (
            <div className="mt-3 flex items-center gap-2 text-xs text-[#9a8a6a]">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9a8a6a" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
              <span>Postal Code — Based on Street Address: {form.address.substring(0, 20)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
