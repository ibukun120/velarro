"use client";

import { Country, State, IState } from "country-state-city";

interface Props {
  label?: string;
  name: string;
  value: string;
  country: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function StateSelect({
  label,
  name,
  value,
  country,
  onChange,
}: Props) {
  const countryObj = Country.getAllCountries().find(
    (c) => c.name === country
  );

  const states: IState[] = countryObj
    ? State.getStatesOfCountry(countryObj.isoCode)
    : [];

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
        disabled={!country}
        className="w-full border border-neutral-6  rounded-xs px-3 py-2 text-sm"
      >
        <option value="">Select State</option>
        {states.map((s) => (
          <option key={s.isoCode} value={s.name}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  );
}