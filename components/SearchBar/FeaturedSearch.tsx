"use client";

import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-md pl-[8px] w-[186px] relative">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none py-[1px] text-[25px] text-black placeholder-gray-500"
      />
      <Search size={28} className="text-[var(--color-primary-300)] w-[10px]" />
    </div>
  );
};

export default SearchBar;