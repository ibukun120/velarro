export function Input2({
  label,
  placeholder,
  value,
  onChange,
  name,
  className,
}: {
  label: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-neutral-13">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border border-neutral-6  text-neutral-8 rounded-xs px-3 py-2 text-sm outline-none focus:border-neutral-6 ${className}`}
      />
    </div>
  );
}