"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;
export type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === "success" || status === "error") {
      timer = setTimeout(() => {
        setStatus("idle");
        setServerMessage("");
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [status]);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");

      setServerMessage(
        "Thank you. Your message has been received.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } 
    // catch (error) {
    catch {
      setStatus("error");

      setServerMessage(
        "Failed to send message. Please try again.",
      );
    }
  };

  const inputClass = `
    w-full
    h-[56px]
    px-4
    rounded-xs
    border
    border-neutral-6
    bg-neutral-1
    text-[15px]
    text-neutral-11
    outline-none
    placeholder:text-neutral-8
    focus:border-neutral-6
    transition-all
  `;

  return (
    <div className="w-full rounded-[20px] border border-neutral-6 bg-neutral-1 p-6 md:p-8 lg:p-10 relative overflow-hidden">

      {/* SUCCESS */}
      {status === "success" && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
            <Check className="h-5 w-5 text-green-700" />
            <p className="text-sm text-green-700">
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <AlertCircle className="h-5 w-5 text-red-700" />
            <p className="text-sm text-red-700">
              {serverMessage}
            </p>
          </div>
        </div>
      )}

      {/* HEADING */}
      <div className="mb-8">
        <p className="text-xl text-neutral-13 mb-1">
          Have any Question?
        </p>

        <h2 className="text-2xl md:text-2xl font-light text-neutral-13 leading-tight">
          Get In Touch with us!
        </h2>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* NAME */}
          <div>
            <label className="mb-2 block text-[14px] text-neutral-12">
              Name*
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className={inputClass}
            />

            {errors.name && (
              <p className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-[14px] text-neutral-12">
              Email Address*
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johnsmith@gmail.com"
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PHONE */}
          <div>
            <label className="mb-2 block text-[14px] text-neutral-12">
              Phone Number*
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
              className={inputClass}
            />

            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

          {/* SUBJECT */}
          <div>
            <label className="mb-2 block text-[14px] text-neutral-12">
              Subject*
            </label>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="">Select</option>
              <option value="General Inquiry">
                General Inquiry
              </option>
              <option value="Orders">Orders</option>
              <option value="Support">Support</option>
            </select>

            {errors.subject && (
              <p className="mt-1 text-xs text-red-500">
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-[14px] text-neutral-12">
              Message*
            </label>

            <span className="text-[12px] text-[#7A7A7A]">
              {formData.message.length} / 500
            </span>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={8}
            maxLength={500}
            className="
              w-full
              rounded-lg
              border
              border-neutral-6
              bg-neutral-1
              px-4
              py-4
              text-[15px]
              text-neutral-11
              outline-none
              resize-none
              placeholder:text-neutral-8
              focus:border-neutral-6
            "
          />

          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            mt-2
            flex
            h-[60px]
            w-full
            items-center
            justify-center
            rounded-xs
            border
            border-neutral-6
            bg-netral-1
            text-lg
            font-light
            text-neutral-12
            transition-all
            duration-300
            hover:bg-primary-500
            hover:text-neutral-1
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {status === "loading" ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </div>
          ) : (
            "SUBMIT"
          )}
        </button>
      </form>
    </div>
  );
}