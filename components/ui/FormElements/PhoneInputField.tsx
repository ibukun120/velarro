"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  country?: string;
};

export default function PhoneInputField({
  value,
  onChange,
  error,
  country = "in",
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-normal text-neutral-13">
        Phone Number *
      </label>

      <PhoneInput
        country={country}
        value={value}
        onChange={onChange}
        enableSearch
        disableSearchIcon
        specialLabel=""
        containerStyle={{
          width: "100%",
        }}
        inputStyle={{
          width: "100%",
          height: "48px",
          // borderRadius: "4px",
          border: "1px solid #c6b49d",
          paddingLeft: "56px",
          fontSize: "14px",
          background: "#f6f2eb",
        }}
        buttonStyle={{
          border: "1px solid #c6b49d",
          borderRight: "none",
          // borderRadius: "6px 0 0 6px",
          background: "#f6f2eb",
        }}
      />

      {error && (
        <p className="text-xs text-error-500">
          {error}
        </p>
      )}
    </div>
  );
}