import React from "react";

type CheckboxProps = {
  label: React.ReactNode;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
  error,
}: CheckboxProps) {
  return (
    <div>
      <label className="flex gap-2 text-sm items-start cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1"
        />
        <span>{label}</span>
      </label>

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}