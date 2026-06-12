"use client";

export default function PageHeader() {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">
          Commission Settings
        </h1>
        <p className="text-[#555] text-sm mt-1 max-w-lg leading-relaxed">
          Configure your revenue share models and performance tiers to optimise
          partner incentives.
        </p>
      </div>
      <button className="bg-[#C59949] hover:bg-[#A67A28] text-black font-semibold text-sm px-5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-sm cursor-pointer">
        Export Data
      </button>
    </div>
  );
}
