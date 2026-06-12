"use client";

import { Country, State, City, ICity } from "country-state-city";

interface Props {
  label?: string;
  name: string;
  value: string;
  country: string;
  state: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CitySelect({
  label,
  name,
  value,
  country,
  state,
  onChange,
}: Props) {
  const countryObj = Country.getAllCountries().find((c) => c.name === country);

  const stateObj = countryObj
    ? State.getStatesOfCountry(countryObj.isoCode).find((s) => s.name === state)
    : null;

  const cities: ICity[] =
    countryObj && stateObj
      ? City.getCitiesOfState(countryObj.isoCode, stateObj.isoCode)
      : [];

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-neutral-13">{label}</label>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={!state}
        className="w-full border border-neutral-6  rounded-xs px-3 py-2 text-sm"
      >
        <option value="">Select City</option>
        {cities.map((c, index) => (
          <option key={index} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
