"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
    <path d="M44.5 20H24v8.5h11.8C34.3 33.9 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.2-2.7-.5-4z" fill="#FFC107" />
    <path d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 16.3 3 9.7 7.9 6.3 14.7z" fill="#FF3D00" />
    <path d="M24 45c5.4 0 10.3-1.9 14.1-5.1l-6.5-5.5C29.5 36.1 26.9 37 24 37c-5.7 0-10.3-3.1-11.8-7.5l-7 5.4C8.5 41.5 15.6 45 24 45z" fill="#4CAF50" />
    <path d="M44.5 20H24v8.5h11.8c-.7 2.2-2.1 4-4 5.2l6.5 5.5C42 35.8 45 30.3 45 24c0-1.3-.2-2.7-.5-4z" fill="#1976D2" />
  </svg>
);

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpEye, setShowOtpEye] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; otp?: string }>({});
  const [resendTimer, setResendTimer] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startResendTimer = () => {
    setResendTimer(30);
    timerRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
    },
    [],
  );

  const handleResendOtp = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    startResendTimer();
    console.log("Resend OTP to:", email);
  };

  const handleContinue = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address";
    if (!otp) newErrors.otp = "OTP is required";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    router.push(`/auth/reset-password?email=${encodeURIComponent(email)}`);
  };

  // Shared input style — kept as inline for dynamic border on focus/blur
  const inputBase: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FFFBF3",
    border: "1px solid #bfbfbf",
    borderRadius: "6px",
    padding: "9px 40px 9px 10px",
    fontSize: "14px",
    lineHeight: "23px",
    color: "#262626",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0] mt-12">
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
          padding: "80px 62px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
          <h1
            className="font-bold text-[#1a1a1a]"
            style={{ fontSize: "32px", lineHeight: "1.2", marginBottom: "10px" }}
          >
            Forget Your Password?
          </h1>
          <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
            {"Enter your email address and we'll will"}
            <br />
            send you link to reset password.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col w-full" style={{ gap: "20px" }}>

          {/* Email field */}
          <div className="flex flex-col w-full" style={{ gap: "4px" }}>
            <span
              className="block"
              style={{ fontSize: "14px", fontWeight: 400, color: "#262626", lineHeight: "1.2", marginBottom: "4px" }}
            >
              Email
            </span>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                }}
                placeholder="Enter your email"
                style={inputBase}
                onFocus={(e) => (e.currentTarget.style.border = "1px solid #C59949")}
                onBlur={(e) => (e.currentTarget.style.border = "1px solid #bfbfbf")}
              />
              {/* Mail icon */}
              <span className="absolute flex items-center pointer-events-none text-[#bfbfbf]" style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </div>
            {errors.email && (
              <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "2px" }}>{errors.email}</span>
            )}
          </div>

          {/* OTP field */}
          <div className="flex flex-col w-full" style={{ gap: "4px" }}>
            <span
              className="block"
              style={{ fontSize: "14px", fontWeight: 400, color: "#262626", lineHeight: "1.2", marginBottom: "4px" }}
            >
              OTP
            </span>
            <div className="relative">
              <input
                type={showOtpEye ? "text" : "password"}
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  if (errors.otp) setErrors((p) => ({ ...p, otp: "" }));
                }}
                placeholder="0-0-0-0"
                style={inputBase}
                onFocus={(e) => (e.currentTarget.style.border = "1px solid #C59949")}
                onBlur={(e) => (e.currentTarget.style.border = "1px solid #bfbfbf")}
              />
              <button
                type="button"
                onClick={() => setShowOtpEye((v) => !v)}
                className="absolute flex items-center bg-transparent border-none cursor-pointer p-0 text-[#8c8c8c]"
                style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }}
              >
                {showOtpEye ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.otp && (
              <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "2px" }}>{errors.otp}</span>
            )}

            {/* Resend OTP */}
            <div className="flex justify-end" style={{ marginTop: "2px" }}>
              {resendTimer > 0 ? (
                <span style={{ fontSize: "13px", color: "#8c8c8c" }}>
                  Resend in {resendTimer}s
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="bg-transparent border-none cursor-pointer p-0 font-medium"
                  style={{ color: "#C59949", fontSize: "13px" }}
                >
                  Resend Otp
                </button>
              )}
            </div>
          </div>

          {/* Continue button */}
          <div className="flex justify-center" style={{ marginTop: "8px" }}>
            <button
              type="button"
              onClick={handleContinue}
              className="flex items-center text-neutral-1 border-none cursor-pointer font-semibold"
              style={{
                background: "#C59949",
                borderRadius: "6px",
                padding: "12px 40px",
                fontSize: "15px",
                letterSpacing: "0.3px",
                gap: "8px",
              }}
            >
              <GoogleIcon />
              Continue
            </button>
          </div>

          {/* Back to login */}
          <div className="flex justify-center">
            <Link
              href="/auth/login"
              className="no-underline font-medium"
              style={{ color: "#C59949", fontSize: "14px" }}
            >
              Back to login page
            </Link>
          </div>

          {/* Divider */}
          <div className="flex items-center" style={{ gap: "16px" }}>
            <div className="flex-1 bg-[#d1d5db]" style={{ height: "1px" }} />
            <span style={{ color: "#6b7280", fontSize: "15px" }}>Or</span>
            <div className="flex-1 bg-[#d1d5db]" style={{ height: "1px" }} />
          </div>

          {/* Try different method */}
          <button
            type="button"
            className="w-full cursor-pointer bg-transparent font-medium"
            style={{
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid #C59949",
              fontSize: "14px",
              color: "#C59949",
            }}
          >
            Try different method
          </button>

        </div>
      </div>
    </div>
  );
}