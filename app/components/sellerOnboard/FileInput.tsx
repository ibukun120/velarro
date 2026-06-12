import React from "react";

type FileInputProps = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function FileInput({
  label,
  name,
  onChange,
  error,
}: FileInputProps) {
  const [fileName, setFileName] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm text-gray-700 w-1/2">
        {label}
      </label>

      <div className="flex items-center gap-3 w-1/2">
        <label className="cursor-pointer border border-[#C59949] text-black text-xs px-3 py-1 rounded hover:bg-[#a07632]">
          Choose file
          <input
            type="file"
            name={name}
            onChange={handleChange}
            className="hidden"
          />
        </label>

        <span className="text-xs text-gray-500 truncate max-w-[120px]">
          {fileName}
        </span>
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}