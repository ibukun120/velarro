"use client";

import { Country, ICountry } from "country-state-city";

interface Props {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CountrySelect({
  label,
  name,
  value,
  onChange,
}: Props) {
  const countries: ICountry[] = Country.getAllCountries();

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-neutral-13">
          {label}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-neutral-6  rounded-xs px-3 py-2 text-sm"
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.isoCode} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}