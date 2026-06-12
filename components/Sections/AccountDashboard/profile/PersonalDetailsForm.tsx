"use client";

import { useState } from "react";
import Button from "@/components/ui/Buttons/CommonButtons";
import { Text } from "@/components/ui/Typography/Typography";
import { Input } from "@/components/ui/FormElements/Input3";

import Image from "next/image";

type Props = {
  onClose: () => void;
};

type FormErrors = {
  firstName?: string;
  address?: string;
  gender?: string;
  dob?: string;
  phone?: string;
  email?: string;
};

export default function PersonalDetailsForm({ onClose }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    address: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.gender.trim()) newErrors.gender = "Gender is required";
    if (!form.dob.trim()) newErrors.dob = "Date of birth is required";

    if (!form.phone || form.phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      // Simulate API
      await new Promise((res) => setTimeout(res, 1000));

      console.log("Saved:", form);

      onClose();
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLEAR ================= */
  const handleClear = () => {
    setForm({
      firstName: "",
      address: "",
      gender: "",
      dob: "",
      phone: "",
      email: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-neutral-1 rounded-md border border-neutral-200 p-6 shadow-sm">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <Text className="font-semibold text-primary-500 text-sm">
          Personal Details
        </Text>
        <Text className="text-xs text-secondary-200">
          Last update 24.10.2025
        </Text>
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Name */}
        <div>
          <Input
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-xs text-error-500 mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <Input
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-xs text-error-500 mt-1">{errors.address}</p>
          )}
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-normal text-neutral-13">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border border-primary-300 bg-neutral-1 rounded-md px-3 py-2 text-sm outline-none focus:border-neutral-6"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {errors.gender && (
            <p className="text-xs text-error-500">{errors.gender}</p>
          )}
        </div>

        {/* Phone */}
        {/* Phone */}
        <div>
          <Input
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          {errors.phone && (
            <p className="text-xs text-error-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <Input
            label="Date of Birth"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
          {errors.dob && (
            <p className="text-xs text-error-500 mt-1">{errors.dob}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            label="Email-ID"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-xs text-error-500 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6">
        {/* Clear */}
        <Button
          variant="secondary"
          onClick={handleClear}
          className="flex items-center justify-center gap-2 bg-secondary-100 text-secondary-500 border-0 w-full"
        >
          <Image src="/icons/x-circle.svg" alt="" width={16} height={16} />
          CLEAR
        </Button>

        {/* Cancel */}
        <Button
          variant="secondary"
          onClick={onClose}
          className="flex items-center justify-center gap-2 bg-neutral-300 text-neutral-700 border-0 w-full"
        >
          <Image src="/icons/x-circle.svg" alt="" width={16} height={16} />
          CANCEL
        </Button>

        {/* Save */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-primary-500 text-neutral-1 w-full"
        >
          {loading ? (
            "Saving..."
          ) : (
            <>
              <Image src="/icons/save.svg" alt="" width={16} height={16} />
              SAVE CHANGES
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
