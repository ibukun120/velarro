
export function Select({ label, value, placeholder }: { label: string; value?: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-md text-gray-500 mb-1">{label}</label>
      <select className="w-full text-gray-500 border focus:border-none border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]">
        <option>{value || placeholder}</option>
      </select>
    </div>
  );
}
