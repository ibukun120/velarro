'use client'

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <select
      className="border border-gray-300 rounded-sm px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>Featured Items</option>
      <option>Price: Ascending</option>
      <option>Price: Descending</option>
      <option>Newest Items</option>
      <option>A to Z</option>
      <option>Z to A</option>
    </select>
  );
}
