import React from "react";

type InputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  maxLength?: number;
};

export default function Input({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  maxLength,
}: InputProps) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full border rounded px-2 py-1 text-sm"
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}