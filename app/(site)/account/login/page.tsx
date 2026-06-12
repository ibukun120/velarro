"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Please enter a valid email";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("LOGIN MOCK:", { email, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-neutral-1 bg-[#333333]">
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8">
          Your Account
        </h1>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 text-[#333333] p-8 rounded-lg shadow"
        >
          {/* Email */}
          <div className="mb-4 text-left">
            <label className="block text-md mb-1">Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6 text-left">
            <label className="block text-md mb-1">Your password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border focus:border-none border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#C59949]"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="text-md underline hover:text-[#C59949] transition"
            >
              Forgot password?
            </Link>

            <button
              type="submit"
              className="bg-[#C59949] text-[#333333] px-6 py-2 text-md rounded-sm uppercase tracking-widest hover:opacity-90 transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Register */}
        <div className="mt-6 text-xl">
          <p className="mb-2">New customer?</p>
          <Link
            href="/account/register"
            className="inline-block bg-white text-[#333333] px-6 py-2 text-md rounded-sm uppercase tracking-widest hover:bg-[#191919]/5 border hover:border-gray-300 hover:text-neutral-1 transition"
          >
            Register now
          </Link>
        </div>
      </div>
    </main>
  );
}
