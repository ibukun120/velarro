"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ─── Config ───────────────────────────────────────────────────────────────────
const BASE_URL = "https://api.restful-api.dev";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Props {
  open: boolean;
  onClose: () => void;
  switchToSignup: () => void;
  switchToForgot: () => void;
  onSuccess?: (userData?: { firstName: string; lastName: string }) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
const SigninPage = ({
  open,
  onClose,
  switchToSignup,
  switchToForgot,
  onSuccess,
}: Props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [apiError, setApiError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (apiError) setApiError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ── Client-side validation ──
    const newErrors: { [key: string]: string } = {};
    if (!formData.email)
      newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ── Call backend ──
    setIsLoading(true);
    setApiError("");

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        // e.g. "Invalid email or password."
        setApiError(data.message || "Sign in failed. Please try again.");
        return;
      }

      // ── Success: save tokens + customer info ──
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      localStorage.setItem("customer", JSON.stringify(data.data.customer));

      setFormData({ email: "", password: "" });

      if (onSuccess) {
        onSuccess({
          firstName: data.data.customer.firstName,
          lastName: data.data.customer.lastName,
        });
      }

      router.push("/profile");
    } catch (err) {
      // Network error or server is down
      setApiError("Unable to connect. Please make sure the server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* SIDEBAR */}
      <div
        className={`hide-scrollbar fixed top-0 right-0 h-full w-full sm:w-[563px] z-[101] overflow-y-auto transform transition-transform duration-500 ease-in-out bg-neutral-1 px-8 backdrop-blur-md shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="w-full min-h-screen px-6 sm:px-8 py-7 relative flex flex-col bg-neutral-1"
          style={{ gap: "40px" }}
        >
          {/* CLOSE */}
          <div className="absolute top-10 right-8 z-[200]">
            <button
              onClick={onClose}
              type="button"
              className="flex items-center gap-2 text-neutral-13 hover:text-black cursor-pointer bg-transparent outline-none"
            >
              <span className="text-[20px]">Close</span>
              <X size={25} strokeWidth={2.5} />
            </button>
          </div>

          {/* TITLE */}
          <div className="flex flex-col mt-8" style={{ gap: "6px" }}>
            <h1
              className="font-bold text-neutral-13"
              style={{ fontSize: "32px", lineHeight: "1.2" }}
            >
              Welcome Back!
            </h1>
            <p className="text-neutral-11 mt-2" style={{ fontSize: "15px" }}>
              Log in to your account
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col w-full" style={{ gap: "12px" }}>
            {/* Google */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer text-neutral-13 font-medium bg-neutral-2"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C6B49D",
                fontSize: "14px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                <path d="M44.5 20H24v8.5h11.8C34.3 33.9 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.2-2.7-.5-4z" fill="#FFC107" />
                <path d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.5 5.1 29.5 3 24 3 16.3 3 9.7 7.9 6.3 14.7z" fill="#FF3D00" />
                <path d="M24 45c5.4 0 10.3-1.9 14.1-5.1l-6.5-5.5C29.5 36.1 26.9 37 24 37c-5.7 0-10.3-3.1-11.8-7.5l-7 5.4C8.5 41.5 15.6 45 24 45z" fill="#4CAF50" />
                <path d="M44.5 20H24v8.5h11.8c-.7 2.2-2.1 4-4 5.2l6.5 5.5C42 35.8 45 30.3 45 24c0-1.3-.2-2.7-.5-4z" fill="#1976D2" />
              </svg>
              Continue with Google
            </button>

            {/* Apple */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer bg-neutral-2 text-neutral-13 font-medium"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C6B49D",
                fontSize: "14px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.74 3.15.76.96-.16 1.88-.84 3.15-.9 1.48.06 2.6.6 3.34 1.62-3.08 1.82-2.27 5.82.52 7.07-.58 1.52-1.34 3.02-2.16 4.33zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>

            {/* Microsoft */}
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer bg-neutral-2 text-neutral-13 font-medium"
              style={{
                gap: "12px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "6px",
                border: "1px solid #C6B49D",
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
          </div>

          {/* Divider */}
          <div className="flex items-center my-4 justify-center" style={{ gap: "16px" }}>
            <div className="w-30 bg-neutral-8" style={{ height: "2px" }} />
            <span className="text-neutral-8" style={{ fontSize: "18px" }}>Or</span>
            <div className="w-30 bg-neutral-8" style={{ height: "2px" }} />
          </div>

          {/* API Error Banner */}
          {apiError && (
            <div
              style={{
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "6px",
                padding: "10px 14px",
                fontSize: "14px",
                color: "#dc2626",
                marginBottom: "-24px",
              }}
            >
              {apiError}
            </div>
          )}

          {/* FORM */}
          <form
            className="flex flex-col w-full"
            style={{ gap: "16px" }}
            onSubmit={handleSubmit}
          >
            {/* Email input */}
            <div className="flex flex-col w-full" style={{ gap: "4px" }}>
              <label style={{ fontSize: "16px", color: "#4A3F36" }}>
                Enter Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full box-border outline-none transition-colors"
                style={{
                  backgroundColor: "#FFFBF3",
                  border: "1px solid #C6B49D",
                  borderRadius: "6px",
                  padding: "9px 10px",
                  fontSize: "14px",
                  lineHeight: "23px",
                  color: "#4A3F36",
                }}
                onFocus={(e) => (e.currentTarget.style.border = "1px solid #C59949")}
                onBlur={(e) => (e.currentTarget.style.border = "1px solid #bfbfbf")}
              />
              {errors.email && (
                <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "2px" }}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* Password input */}
            <div className="flex flex-col w-full" style={{ gap: "4px" }}>
              <label style={{ fontSize: "16px", color: "#4A3F36" }}>Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full box-border outline-none transition-colors"
                  style={{
                    backgroundColor: "#FFFBF3",
                    border: "1px solid #C6B49D",
                    borderRadius: "6px",
                    padding: "9px 40px 9px 10px",
                    fontSize: "14px",
                    lineHeight: "23px",
                    color: "#4A3F36",
                  }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid #C59949")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid #bfbfbf")}
                />
                <div className="absolute right-[12px] top-[50%] translate-y-[-50%] flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="flex items-center bg-transparent border-none cursor-pointer p-0 text-[#8c8c8c]"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "2px" }}>
                  {errors.password}
                </span>
              )}
            </div>

            {/* Forgot password */}
            <div className="flex justify-end" style={{ marginTop: "-8px" }}>
              <button
                onClick={switchToForgot}
                className="text-neutral-11 cursor-pointer hover:underline"
                style={{ fontSize: "14px" }}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center" style={{ marginTop: "8px" }}>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-neutral-13 border border-neutral-6 cursor-pointer font-semibold hover:bg-neutral-5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "#F6F2EB",
                  borderRadius: "6px",
                  padding: "12px 48px",
                  fontSize: "15px",
                  letterSpacing: "0.3px",
                }}
              >
                {isLoading ? "Signing in..." : "Continue"}
              </button>
            </div>

            <div className="flex justify-center items-center gap-1.5 mb-6">
              <p>Don&apos;t have an account?</p>
              <button
                onClick={switchToSignup}
                className="text-[#C59949] no-underline font-medium cursor-pointer hover:underline"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninPage;