import React from "react";

type SelectProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

export default function Select({
  label,
  name,
  value,
  onChange,
  error,
}: SelectProps) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded px-2 py-1 text-sm"
      >
        <option value="">Select Legal Entity Type</option>
        <option value="sole">Sole Proprietorship</option>
        <option value="partnership">Partnership</option>
        <option value="private">Private Limited</option>
        <option value="llp">LLP</option>
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}