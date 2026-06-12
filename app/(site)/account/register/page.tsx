"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";

    if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Enter a valid email";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Mock API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Redirect to login after success
      setTimeout(() => {
        router.push("/account/login");
      }, 1500);
    }, 1200);
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 text-neutral-1 bg-[#333333] px-4">
      {/* Toast */}
      {success && (
        <div className="fixed top-6 right-6 bg-black text-neutral-1 px-6 py-3 text-sm rounded shadow-lg z-50">
          🎉 Account created successfully!
        </div>
      )}

      <div className="w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium mb-2">
          Create Account
        </h1>

        <p className="text-sm mb-8">
          Have an account?{" "}
          <Link
            href="/account/login"
            className="underline hover:text-[#C59949] transition"
          >
            Login
          </Link>
        </p>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 text-[#333333] backdrop-blur-md p-8 rounded-lg shadow"
        >
          {/* First name */}
          <div className="mb-4 text-left">
            <label className="block text-md mb-1">First name</label>
            <input
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
              className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last name */}
          <div className="mb-4 text-left">
            <label className="block text-md mb-1">Last name</label>
            <input
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
              className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4 text-left">
            <label className="block text-md mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 text-left">
            <label className="block text-md mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6 text-left">
            <label className="block text-md mb-1">Confirm password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949] pr-10"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#333333] text-neutral-1 border-black px-6 py-2 text-md rounded-sm uppercase tracking-widest hover:bg-[#C59949]/80 hover:text-[#333333] transition"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
      </div>
    </main>
  );
}
