"use client";

import Error from "@/components/Common/Errors/AuthInputError";
import AuthLabel from "@/components/Common/Label/AuthLabel";
import React from "react";

import { InputHTMLAttributes } from "react";


export interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name ?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
labelClassName?: string;
errors?: { [key: string]: string };
}







export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
errors = {},
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <AuthLabel
        label ={label}
        required = {required}
        />
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        // className={`border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4A052] ${className}`}

        className={`w-full bg-white border border-neutral-6 rounded-sm px-2.5 py-[9px] text-[18px] leading-[23px] text-neutral- placeholder-gray-400 focus:outline-none focus:border-primary ${className}`}
      />
{ name && errors && errors[name] && <Error
      error ={errors[name]}
      />}
    </div>
  );
}