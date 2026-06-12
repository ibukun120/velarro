"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AccountSettingsContent() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    currentPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.currentPassword &&
    (form.password === form.confirmPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    toast.success("Account updated successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" px-4  py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        <Input label="First Name" required name="firstName" value={form.firstName} onChange={handleChange} />
        <Input label="Last Name" required name="lastName" value={form.lastName} onChange={handleChange} />
        <Input label="Company" name="company" value={form.company} onChange={handleChange} />
        <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
        <Input label="Email Address" required type="email" name="email" value={form.email} onChange={handleChange} />
        <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <Input label="Confirm Password" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
        <Input label="Current Password" required type="password" name="currentPassword" value={form.currentPassword} onChange={handleChange} />
      </div>

      <div className="flex justify-end gap-6 mt-10">
        <button
          type="button"
          className="text-sm tracking-wide text-gray-600 hover:underline"
        >
          CANCEL
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className="
      px-6
      py-2
      text-sm
      uppercase
      tracking-wide
      text-[#333333]
      font-semibold
      rounded-sm
      
    "
          style={{ backgroundColor: "#C59949" }}
        >
          UPDATE
        </button>
      </div>

      <div className="mt-20 text-center text-[#333333]">
        <h3 className="text-xl md:text-2xl lg:text-3xl tracking-widest font-medium">
          FAVOURITE STORE
        </h3>
        <p className="text-sm mt-2">
          You have not saved a favourite store
        </p>
      </div>
    </form>
  );
}


function Input({
  label,
  required,
  ...props
}: {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm">
        <label className="text-gray-700">{label}</label>
        {required && (
          <span className="text-xs text-red-500">Required</span>
        )}
      </div>

      <input
        {...props}
        className="
          w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]
        "
      />
    </div>
  );
}
