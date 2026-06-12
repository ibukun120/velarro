"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Country, State } from "country-state-city";
import { getCountryCallingCode, getExampleNumber, isSupportedCountry, CountryCode } from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";
import Link from "next/link";
import Input from "../components/sellerOnboard/Input";
import Select from "../components/sellerOnboard/Select";
import FileInput from "../components/sellerOnboard/FileInput";
import Checkbox from "../components/sellerOnboard/Checkbox";
import SectionTitle from "../components/sellerOnboard/SectionTitle";

interface FormData {
  businessName: string;
  legalEntityType: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  pinCode: string;
  taxId: string;
  taxBusinessName: string;
  tradeLicenseNumber: string;
  gstNumber: string;
  tobaccoVendorLicenseNumber: string;
  ownerName: string;
  email: string;
  phone: string;
  phoneCode: string;
  idProof: File | null;
  gstCertificate: File | null;
  tradeLicense: File | null;
  tobaccoLicense: File | null;
  confirmCompliance: boolean;
  agreeTerms: boolean;
}

export default function SellerForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    legalEntityType: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    pinCode: "",
    taxId: "",
    taxBusinessName: "",
    tradeLicenseNumber: "",
    gstNumber: "",
    tobaccoVendorLicenseNumber: "",
    ownerName: "",
    email: "",
    phone: "",
    phoneCode: "",
    idProof: null,
    gstCertificate: null,
    tradeLicense: null,
    tobaccoLicense: null,
    confirmCompliance: false,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [addressError, setAddressError] = useState<string>("");

  // Handle text input
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle file input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName)
      newErrors.businessName = "Business Name is required";

    if (!formData.legalEntityType)
      newErrors.legalEntityType = "Legal Entity Type is required";

    if (!formData.address1) 
      newErrors.address1 = "Address Line 1 is required";

    if (!formData.country) 
      newErrors.country = "Country is required";

    if (!formData.pinCode) newErrors.pinCode = "Pin Code is required";

    if (!formData.taxId) newErrors.taxId = "Tax ID is required";

    if (!formData.taxBusinessName)
      newErrors.taxBusinessName = "Business Name is required";

    if (!formData.email) {
  newErrors.email = "Email is required";
} else if (!/^[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
  newErrors.email = "Please enter a valid email address";
}

    if (!formData.phone) {
  newErrors.phone = "Phone is required";
} else if (formData.phone.length < getPhoneMaxLength(formData.country)) {
  newErrors.phone = `Phone number must be ${getPhoneMaxLength(formData.country)} digits`;
}

    if (!formData.confirmCompliance)
      newErrors.confirmCompliance = "You must confirm compliance";

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to terms";

    if (!formData.ownerName)
      newErrors.ownerName = "Owner Name is required";

    if (!formData.idProof)
      newErrors.idProof = "ID Proof is required";

    if (!formData.gstCertificate)
      newErrors.gstCertificate = "GST Certificate is required";

    if (!formData.tradeLicense)
      newErrors.tradeLicense = "Trade License is required";

    if (!formData.tobaccoLicense)
      newErrors.tobaccoLicense = "Tobacco License is required";

    if (!formData.tradeLicenseNumber)
  newErrors.tradeLicenseNumber = "Trade License Number is required";

if (!formData.gstNumber)
  newErrors.gstNumber = "GST Number is required";

if (!formData.tobaccoVendorLicenseNumber)
  newErrors.tobaccoVendorLicenseNumber = "Tobacco Vendor License Number is required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form Submitted:", formData);
  };

  // Address validation with special character restriction
  function handleAddressChange(e: ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target;
  const invalidChars = /[^a-zA-Z0-9\s#,\/\-]/;
  
  if (invalidChars.test(value)) {
    setAddressError("Only # , / - and spaces are allowed as special characters");
  } else {
    setAddressError("");
  }
  
  setFormData({ ...formData, [name]: value });
  }
  
  // Get pin code length based on country
  function getPincodeLength(stateCode: string, countryCode: string): number {
    // India states use 6 digits
    if (countryCode === "IN") return 6;
    // USA uses 5
    if (countryCode === "US") return 5;
    // UK uses variable but cap at 8
    if (countryCode === "GB") return 8;
    // Default for rest of world
    return 10;
  }
 
  // Pin code validation based on country
  function handlePincodeChange(e: ChangeEvent<HTMLInputElement>) {
  const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
  const maxLength = getPincodeLength(formData.state, formData.country);
  if (value.length <= maxLength) {
    setFormData({ ...formData, pinCode: value });
  }
}

function getPhoneMaxLength(countryCode: string): number {
  try {
    if (!isSupportedCountry(countryCode)) return 15;
    const example = getExampleNumber(countryCode as CountryCode, examples);
    return example ? example.nationalNumber.length : 15;
  } catch {
    return 15;
  }
}

function getCallingCode(countryCode: string): string {
  try {
    if (!isSupportedCountry(countryCode)) return "";
    return "+" + getCountryCallingCode(countryCode as CountryCode);
  } catch {
    return "";
  }
}

  return (
    <div className="max-w-xl mx-auto bg-[#f5f5f5] rounded-lg shadow p-6 border">
      {/* Header */}
      <h2 className="text-center text-2xl font-thin">
        Become a seller
      </h2>
      <p className="text-center text-lg text-black mb-4">
        Start selling from Velarro Marketplace
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Business Info */}
        <SectionTitle title="Business Information" />

        <Input
          label="Business Name *"
          name="businessName"
          value={formData.businessName}
          placeholder="Business Name"
          onChange={handleChange}
          error={errors.businessName}
        />

        <Select
          label="Legal Entity Type *"
          name="legalEntityType"
          value={formData.legalEntityType}
          onChange={handleChange}
          error={errors.legalEntityType}
        />

        <Input
          label="Address Line 1 *"
          name="address1"
          value={formData.address1}
          onChange={handleAddressChange}
          error={errors.address1 || (formData.address1 ? addressError : "")}
        />
        
        <Input
          label="Address Line 2 (optional)"
          name="address2"
          value={formData.address2}
          onChange={handleAddressChange}
          error={errors.address2 || (formData.address2 ? addressError : "")}
        />

       
<div className="grid grid-cols-2 gap-3">
  {/* Country Dropdown */}
  <div>
    <label className="text-sm">Country</label>
    <select
      name="country"
      value={formData.country}
      onChange={(e) => {
  const selectedCountry = e.target.value;
  setFormData({
    ...formData,
    country: selectedCountry,
    state: "",
    pinCode: "",
    phone: "",
    phoneCode: getCallingCode(selectedCountry),
  });
}}
      className="w-full border rounded px-2 py-1 text-sm"
    >
      <option value="">Select Country</option>
      {Country.getAllCountries().map((c) => (
        <option key={c.isoCode} value={c.isoCode}>
          {c.name}
        </option>
      ))}
    </select>
    {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
  </div>

  {/* State Dropdown */}
  <div>
    <label className="text-sm">State</label>
    <select
      name="state"
      value={formData.state}
      onChange={(e) => {
        setFormData({ ...formData, state: e.target.value, pinCode: "" });
      }}
      disabled={!formData.country}
      className="w-full border rounded px-2 py-1 text-sm disabled:opacity-50"
    >
      <option value="">
        {formData.country ? "Select State" : "Select country first"}
      </option>
      {formData.country &&
        State.getStatesOfCountry(formData.country).map((s) => (
          <option key={s.isoCode} value={s.isoCode}>
            {s.name}
          </option>
        ))}
    </select>
  </div>
</div>

<div className="grid grid-cols-2 gap-3">
  {/* Pincode */}
  <div>
    <label className="text-sm">
      Pin Code *
      {formData.state && (
        <span className="text-gray-400 text-xs ml-1">
          (max {getPincodeLength(formData.state, formData.country)} chars)
        </span>
      )}
    </label>
    <input
      name="pinCode"
      value={formData.pinCode}
      onChange={handlePincodeChange}
      disabled={!formData.state}
      placeholder={formData.state ? "Enter pin code" : "Select state first"}
      className="w-full border rounded px-2 py-1 text-sm disabled:opacity-50"
      maxLength={getPincodeLength(formData.state, formData.country)}
    />
    {errors.pinCode && <p className="text-red-500 text-xs">{errors.pinCode}</p>}
  </div>

  {/* Tax ID */}
  <div>
    <label className="text-sm">Tax ID *</label>
    <input
      name="taxId"
      value={formData.taxId}
      placeholder="Tax ID"
      onChange={handleChange}
      className="w-full border rounded px-2 py-1 text-sm"
    />
    {errors.taxId && <p className="text-red-500 text-xs">{errors.taxId}</p>}
  </div>
</div>

        {/* License */}
        <SectionTitle title="License & Tax Information" />
        <div className="grid grid-cols-2 gap-3">
        <Input
          label="Trade License Number *"
          name="tradeLicenseNumber"
          value={formData.tradeLicenseNumber}
          onChange={handleChange}
          error={errors.tradeLicenseNumber}
        />

        <Input
          label="GST Number *"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          error={errors.gstNumber}
        />
        </div>
        

        <Input
          label="Tobacco Vendor License Number *"
          name="tobaccoVendorLicenseNumber"
          value={formData.tobaccoVendorLicenseNumber}
          onChange={handleChange}
          error={errors.tobaccoVendorLicenseNumber}
        />

        {/* Owner */}
        <SectionTitle title="Owner Information" />

        <Input
  label="Owner Name *"
  name="ownerName"
  value={formData.ownerName}
  maxLength={30} 
  onChange={(e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const invalidChars = /[^a-zA-Z\s]/;
    if (value.length > 30) {
      setErrors({ ...errors, ownerName: "Owner name cannot exceed 30 characters" });
    } else if (invalidChars.test(value)) {
      setErrors({ ...errors, ownerName: "Owner name cannot contain numbers or special characters" });
    } else {
      setErrors({ ...errors, ownerName: "" });
      setFormData({ ...formData, ownerName: value });
    }
  }}
  error={errors.ownerName}
/>

        <div className="grid grid-cols-2 gap-3">
          <Input
  label="Email *"
  name="email"
  value={formData.email}
  placeholder="example@gmail.com"
  onChange={(e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const invalidChars = /[^a-zA-Z0-9@._\-]/;
    if (invalidChars.test(value)) {
      setErrors({ ...errors, email: "Only @ . _ - are allowed as special characters" });
    } else {
      setErrors({ ...errors, email: "" });
      setFormData({ ...formData, email: value });
    }
  }}
  error={errors.email}
/>

          <div>
  <label className="text-sm">Phone *</label>
  <div className="flex gap-2">
    {/* Country Code - auto filled */}
    <input
      value={formData.phoneCode}
      readOnly
      className="w-20 border rounded px-2 py-1 text-sm bg-gray-100 text-center"
      placeholder="+00"
    />

    {/* Phone number - manual input */}
    <input
      name="phone"
      value={formData.phone}
      placeholder={
        formData.country
          ? `Enter ${getPhoneMaxLength(formData.country)} digit number`
          : "Select country first"
      }
      disabled={!formData.country}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        const maxLength = getPhoneMaxLength(formData.country);
        if (value.length <= maxLength) {
          setFormData({ ...formData, phone: value });
          if (value.length < maxLength) {
            setErrors({ ...errors, phone: `Phone number must be ${maxLength} digits` });
          } else {
            setErrors({ ...errors, phone: "" });
          }
        }
      }}
      className="flex-1 border rounded px-2 py-1 text-sm disabled:opacity-50"
      maxLength={getPhoneMaxLength(formData.country)}
    />
  </div>
  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
</div>
        </div>

        {/* Upload Documents */}
        <SectionTitle title="Upload Documents" />

        <FileInput
  label="ID Proof (Aadhar/PAN) *"
  name="idProof"
  onChange={handleFileChange}
  error={errors.idProof}
/>

<FileInput
  label="GST Certificate *"
  name="gstCertificate"
  onChange={handleFileChange}
  error={errors.gstCertificate}
/>

<FileInput
  label="Trade License *"
  name="tradeLicense"
  onChange={handleFileChange}
  error={errors.tradeLicense}
/>

<FileInput
  label="Tobacco License *"
  name="tobaccoLicense"
  onChange={handleFileChange}
  error={errors.tobaccoLicense}
/>

        {/* Agreement */}
        <SectionTitle title="Agreement" />

        <Checkbox
          label="I confirm that i will comply with the Cigarettes & Other Tobacco Products Act, 2003 (COTPA) regulations."
          name="confirmCompliance"
          checked={formData.confirmCompliance}
          onChange={handleChange}
          error={errors.confirmCompliance}
        />

        <Checkbox
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          error={errors.agreeTerms}
          label={
            <>
            I agree to the{" "}
            <Link
             href="/terms-and-conditions"
             className="underline text-black hover:text-[#a57f3a]"
          >
        Terms & Conditions
      </Link>
    </>
  }
/>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#b88a3c] text-neutral-1 py-2 rounded hover:bg-[#a07632]"
        >
          Submit Application
        </button>
        <p className="text-center">
          Need help? Contact our{" "}
          <Link
            href="/support"
            className="underline text-black hover:text-[#a57c2f] cursor-pointer"
          >     
          support team
          </Link>
</p>
      </form>
    </div>
  );
}

