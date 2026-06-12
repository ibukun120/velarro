"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { Input } from "@/app/components/accounts/account-form-details";
// import Input from "@/components/FormElements/Input";
import Input from "@/components/ui/FormElements/Input";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.identifier) {
      newErrors.identifier = "Mobile number or Email-id is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
      {/* Card */}
      <div
        className="flex flex-col box-border"
        style={{
          width: "563px",
          minHeight: "1024px",
          background: "#FFFFFFF2",
          borderBottom: "1px solid #C59949",
          backdropFilter: "blur(8px)",
          boxShadow: "0px 4px 4px 0px #C5994940",
          padding: "153px 81px 80px 81px",
        }}
      >
        {/* Content — 400px wide, gap: 48px */}
        <div className="flex flex-col w-full" style={{ gap: "48px" }}>
          {/* Header */}
          <div className="flex flex-col" style={{ gap: "6px" }}>
            <h1
              className="font-bold text-[#1a1a1a]"
              style={{ fontSize: "32px", lineHeight: "1.2" }}
            >
              Welcome Back!
            </h1>
            <p className="text-[#6b7280]" style={{ fontSize: "15px" }}>
              Don&apos;t have an account yet?{" "}
              <Link
                href="/auth/signup"
                className="text-[#C59949] no-underline font-medium"
              >
                Sign up now
              </Link>
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col w-full"
            style={{ gap: "16px" }}
            onSubmit={handleSubmit}
          >
            <Input
              label="Enter Mobile number or Email-id"
              name="identifier"
              type="text"
              placeholder=""
              value={formData.identifier}
              onChange={handleChange}
              errors={errors}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
              errors={errors}
            />

            {/* Forgot password */}
            <div className="flex justify-end" style={{ marginTop: "-8px" }}>
              <Link
                href="/auth/forgot-password"
                className="text-[#C59949] no-underline"
                style={{ fontSize: "14px" }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center" style={{ marginTop: "8px" }}>
              <button
                type="submit"
                className="text-neutral-1 border-none cursor-pointer font-semibold"
                style={{
                  background: "#C59949",
                  borderRadius: "6px",
                  padding: "12px 48px",
                  fontSize: "15px",
                  letterSpacing: "0.3px",
                }}
              >
                Continue
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center" style={{ gap: "16px" }}>
            <div className="flex-1 bg-[#d1d5db]" style={{ height: "1px" }} />
            <span className="text-[#6b7280]" style={{ fontSize: "15px" }}>
              Or
            </span>
            <div className="flex-1 bg-[#d1d5db]" style={{ height: "1px" }} />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col w-full" style={{ gap: "12px" }}>
            {/* Google */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer bg-transparent text-[#374151] font-medium"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C59949",
                fontSize: "14px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                <path
                  d="M44.5 20H24v8.5h11.8C34.3 33.9 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.2-2.7-.5-4z"
                  fill="#FFC107"
                />
                <path
                  d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 16.3 3 9.7 7.9 6.3 14.7z"
                  fill="#FF3D00"
                />
                <path
                  d="M24 45c5.4 0 10.3-1.9 14.1-5.1l-6.5-5.5C29.5 36.1 26.9 37 24 37c-5.7 0-10.3-3.1-11.8-7.5l-7 5.4C8.5 41.5 15.6 45 24 45z"
                  fill="#4CAF50"
                />
                <path
                  d="M44.5 20H24v8.5h11.8c-.7 2.2-2.1 4-4 5.2l6.5 5.5C42 35.8 45 30.3 45 24c0-1.3-.2-2.7-.5-4z"
                  fill="#1976D2"
                />
              </svg>
              Continue with Google
            </button>

            {/* Apple */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer bg-transparent text-[#374151] font-medium"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C59949",
                fontSize: "14px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.74 3.15.76.96-.16 1.88-.84 3.15-.9 1.48.06 2.6.6 3.34 1.62-3.08 1.82-2.27 5.82.52 7.07-.58 1.52-1.34 3.02-2.16 4.33zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>

            {/* Microsoft */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer bg-transparent text-[#374151] font-medium"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C59949",
                fontSize: "14px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 21 21">
                <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
                <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
                <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
              </svg>
              Continue with Microsoft
            </button>

            {/* Guest */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer bg-transparent font-medium"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C59949",
                fontSize: "14px",
                color: "#C59949",
              }}
            >
              Continue with Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
