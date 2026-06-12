"use client";

import { Country } from "country-state-city";
import { ChevronDown } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CountrySelect({
  value,
  onChange,
}: Props) {
  const countries = Country.getAllCountries();

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-normal text-neutral-13">
        Country *
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-[46px]
            w-full
            rounded-xs
            border
            border-neutral-6
            bg-neutral-2
            px-3
            pr-10
            text-sm
            text-neutral-13
            outline-none
            appearance-none
            focus:border-neutral-6
            focus:ring-0
          "
        >
          <option value="" className="bg-[#2e3a59]">Select Country</option>

          {countries.map((country) => (
            <option
              key={country.isoCode}
              value={country.isoCode.toLowerCase()}
            >
              {country.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-neutral-13
          "
        />
      </div>
    </div>
  );
}

// #2e3a59 instead of blue