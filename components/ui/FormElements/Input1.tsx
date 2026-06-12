export function InputBe({
  label,
  placeholder,
  value,
  onChange,
  name,
  className,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  value?: string;
  name?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-normal text-neutral-13">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border border-neutral-6 bg-neutral-2 text-neutral-8 rounded-[4px] px-3 py-3 text-sm outline-none focus:border-neutral-6 ${className || ""}`}
      />
    </div>
  );
}