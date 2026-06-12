"use client";

import { Eye, EyeOff, RefreshCcw, X } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  backToSignin: () => void;
  switchToReset: () => void;
}

const ForgotPasswordPage = ({
  open,
  onClose,
  backToSignin,
  switchToReset,
}: Props) => {
  // const [showEmail, setShowEmail] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

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
        className={`fixed top-0 right-0 h-full w-full sm:w-[563px] z-[101] hide-scrollbar overflow-y-auto transform transition-transform duration-500 ease-in-out bg-neutral-1 backdrop-blur-md shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" w-full h-full bg-neutral-1 border-l border-[#EFE7DA] px-6 sm:px-12 py-4 relative">
          {/* CLOSE BUTTON */}
          <div className="absolute top-10 right-8 z-[200]">
            <button
              onClick={onClose}
              type="button"
              className="flex items-center gap-3 text-neutral-13 hover:text-neutral-11 cursor-pointer bg-transparent border-none outline-none"
            >
              <span className="text-[24px] font-extralight">Close</span>

              <X size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* TITLE */}
          <div className="mt-24 mb-10">
            <h1 className="text-[32px] leading-[42px] font-extrabold text-[#1A1A1A]">
              Forgot Your Password?
            </h1>

            <p className="text-neutral-11 text-[16px] mt-4 leading-[24px]">
              Enter your email address and we’ll send you an OTP to reset your
              password.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-6">
            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <label className="text-[16px] mb-2 text-neutral-11">
                Email Or Phone
              </label>

              <div className="relative">
                <input
                  
                  placeholder="Enter your email"
                  className="w-full bg-neutral-1 border border-neutral-6 rounded-md px-4 pr-12 py-[11px] text-sm outline-none transition-colors focus:border-[#C59949]"
                />

                <button
                  type="button"
                
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
                >
                 
                </button>
              </div>
            </div>

            {/* OTP */}
            <div className="flex flex-col gap-1">
              <label className="text-[16px] mb-2 text-neutral-11">OTP</label>

              <div className="relative">
                <input
                  type={showOtp ? "text" : "password"}
                  placeholder="XXXX"
                  className="w-full bg-neutral-1 border border-neutral-6 rounded-md px-4 pr-12 py-[11px] text-sm outline-none transition-colors focus:border-[#C59949]"
                />

                <button
                  type="button"
                  onClick={() => setShowOtp(!showOtp)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
                >
                  {showOtp ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* RESEND */}
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="text-neutral-11 text-sm font-medium cursor-pointer hover:underline"
                >
                  Resend OTP
                </button>
              </div>
            </div>

            {/* CONTINUE BUTTON */}
            <div className="flex justify-center items-center mt-2">
              <button
                type="button"
                onClick={switchToReset}
                className="w-full bg-neutral-2 hover:bg-neutral-4 transition-all duration-300 border border-neutral-6 text-neutral-13 rounded-md px-10 py-3 text-[16px] flex items-center gap-2 justify-center cursor-pointer uppercase"
              >
                <RefreshCcw size={16} />

                Continue
              </button>
            </div>

            <div>
              <button
              onClick={backToSignin}
              className=" w-full cursor-pointer hover:underline text-neutral-11 text-[16px] text-center font-medium"
            >
              Back to login
            </button>
            </div>
          </form>

          {/* FOOTER */}
          {/* <p className="text-center mt-8 text-[15px] text-gray-500">
            Remember your password?{" "}
            <button
              onClick={backToSignin}
              className="text-[#D9B16A] font-medium"
            >
              Back to login
            </button>
          </p> */}
          {/* Divider */}
          <div className="flex items-center my-8 justify-center" style={{ gap: "16px" }}>
            <div className="w-30 bg-neutral-8" style={{ height: "2px" }} />
            <span className="text-neutral-8" style={{ fontSize: "18px" }}>
              Or
            </span>
            <div className="w-30 bg-neutral-8" style={{ height: "2px" }} />
          </div>

          <div className="pb-20">
            <button
            className="w-full  hover:bg-neutral-4 transition-all duration-300 border border-neutral-6 text-neutral-13 rounded-md px-10 py-3 text-[16px] flex items-center gap-2 justify-center cursor-pointer"
            >
              Try different method
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;