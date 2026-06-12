import FilterSection from "./FilterSection";

export default function FiltersSidebar() {
  return (
    <aside className="border-r border-slate-300 pr-4 bg-[#c59949]/3 px-4">
      <h2 className="font-medium mb-4 text-center text-2xl text-gray-500">REFINE BY</h2>

      {/* Radio options */}
      <div className="space-y-3 mb-6">
        <label className="flex items-center gap-2 text-md text-slate-900">
          <input type="checkbox" />
          Show only in stock products
        </label>

        <label className="flex items-center gap-2 text-md text-slate-900">
          <input type="checkbox" />
          Limited Edition
        </label>
      </div>

      {/* Dropdown filters */}
      <FilterSection title="Price" />
      <FilterSection title="Intensity (0–5)" />
      <FilterSection title="Cigar Body (0–5)" />
      <FilterSection title="Enjoyment Time (mins)" />
      <FilterSection title="Tags" />
      <FilterSection title="Line" />
      <FilterSection title="Taste" />
      <FilterSection title="Shape & Format" />
      <FilterSection title="Ring Guage" />
      <FilterSection title="Cigar Length" />
      <FilterSection title="Cigar Diameter" />
      <FilterSection title="Packaging" />
      <FilterSection title="Tobacco Region" />
      <FilterSection title="Pairings" />
      <FilterSection title="Materials" />
      <FilterSection title="Color" />
      <FilterSection title="Shape" />
    </aside>
  );
}