"use client";

import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  backToSignin: () => void;
}

const ResetPasswordPage = ({
  open,
  onClose,
  backToSignin,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[563px] z-[101] overflow-y-auto transform transition-transform duration-500 ease-in-out bg-[#FFFFFFF2] backdrop-blur-md shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full bg-white border-l border-[#EFE7DA] px-6 sm:px-8 py-4 relative">
          {/* CLOSE BUTTON */}
          <div className="absolute top-10 right-8 z-[200]">
            <button
              onClick={onClose}
              type="button"
              className="flex items-center gap-2 text-gray-500 hover:text-black cursor-pointer bg-transparent border-none outline-none"
            >
              <span className="text-[16px] font-medium">Close</span>

              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* TITLE */}
          <div className="mt-10 mb-10">
            <h1 className="text-[32px] leading-[42px] font-bold text-[#1A1A1A]">
              New Password
            </h1>

            <p className="text-[#6B7280] text-[15px] mt-3 leading-[24px]">
              Create a strong password to secure your account.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-6">
            {/* NEW PASSWORD */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] text-[#262626]">
                New Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full bg-[#FFFBF3] border border-[#BFBFBF] rounded-md px-4 pr-12 py-[11px] text-sm outline-none transition-colors focus:border-[#C59949]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* PASSWORD HINT */}
              <div className="flex items-center gap-1 mt-2">
                <p className="text-[12px] text-[#8C8C8C]">
                  Password must include uppercase, lowercase, number & special
                  character
                </p>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] text-[#262626]">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full bg-[#FFFBF3] border border-[#BFBFBF] rounded-md px-4 pr-12 py-[11px] text-sm outline-none transition-colors focus:border-[#C59949]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM BUTTON */}
            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="bg-[#C59949] hover:bg-[#b3873d] transition text-neutral-1 rounded-md px-12 py-3 text-sm font-semibold"
              >
                Confirm
              </button>
            </div>
          </form>

          {/* FOOTER */}
          <p className="text-center mt-8 text-[15px] text-gray-500">
            Remember your password?{" "}
            <button
              onClick={backToSignin}
              className="text-[#D9B16A] font-medium"
            >
              Back to login
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;