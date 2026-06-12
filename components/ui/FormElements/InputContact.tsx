"use client";

import Error from "@/components/Common/Errors/AuthInputError";
import AuthLabel from "@/components/Common/Label/AuthLabel";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  errors?: { [key: string]: string };
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export default function InputContact({
  label,
  labelClassName = "flex gap-0.5 text-[14px] font-[400] text-[#262626] mb-1 leading-[1.2]",
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
  inputClassName = "",
  errors = {},
  leftElement,
  rightElement,
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <AuthLabel
          label={label}
          required={required}
          className={labelClassName}
        />
      )}
      <div className="relative flex items-center w-full">
        {leftElement && (
          <div className="absolute left-3 z-10 flex items-center">
            {leftElement}
          </div>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`w-full border border-neutral-6 rounded-sm px-2.5 py-[9px] text-[18px] leading-[23px] text-neutral-900 placeholder-gray-400 focus:outline-none focus:border-neutral-6 bg-[#FFFBF3] border-[#BFBFBF] !rounded-[6px] !text-[14px] !text-[#262626] ${
            leftElement ? "pl-10" : ""
          } ${rightElement ? "pr-10" : ""} ${inputClassName}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 z-10 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
      {name && errors && errors[name] && (
        <Error error={errors[name]} />
      )}
    </div>
  );
}