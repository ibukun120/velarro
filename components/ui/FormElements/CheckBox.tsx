



export function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-gray-500">
      <input type="checkbox" className="accent-blue-500" defaultChecked />
      <span>{label}</span>
    </label>
  );
}
