"use client";

import { useState } from "react";
import Button from "@/components/ui/Buttons/CommonButtons";
import { Input } from "@/components/ui/FormElements/Input3";
import { H1, Text } from "@/components/ui/Typography/Typography";
import VendorApplicationForm from "./VendorApplicationForm";
import Image from "next/image";

export default function BecomeSeller() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (!login.email || !login.password) {
      alert("Please fill all required fields");
      return;
    }

    // 👉 future API call
    setStep(2);
  };

  return (
    <div className="relative  flex items-center justify-center px-4">
      {/* BACKGROUND */}

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="grid md:grid-cols-2 bg-neutral-1/80 backdrop-blur-md">
            {/* LEFT IMAGE */}
            <div className="relative h-[500px] md:h-[550px]">
              <Image
                src="/userDashboard/vendor-login.png"
                alt="login"
                fill
                priority
                className="object-cover rounded-l-2xl"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="flex flex-col justify-center px-10 py-12">
              <H1 className="text-3xl font-medium mb-2 text-center md:text-left">
                Hello!
              </H1>

              <Text className="text-gray-600 text-sm mb-8 text-center md:text-left">
                Please login to your account
              </Text>

              <div className="space-y-5 max-w-sm mx-auto md:mx-0">
                {/* EMAIL */}
                <Input
                  label="Email ID"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />

                {/* PASSWORD */}
                <div className="relative">
                  <Input
                    label="Password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="pr-12"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[36px] text-xs text-gray-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>

                {/* FORGOT */}
                <div className="text-right text-xs text-gray-400">
                  Forgot password?
                </div>

                {/* BUTTON */}
                <Button
                  onClick={handleContinue}
                  className="w-full bg-[#C28B3C] hover:bg-[#a8742f] text-neutral-1 rounded-md"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex items-center justify-center px-4 py-10 ">
            <VendorApplicationForm />
          </div>
        )}
      </div>
    </div>
  );
}
