import { RefreshCw } from "lucide-react";

export default function NoInternet() {
  const handleTryAgain = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center pt-16 bg-neutral-3 w-full px-4">
      {/* Container for message */}
      <div className="w-full max-w-[1000px] bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col gap-2">
        <h2 className="text-[22px] md:text-[26px] font-medium text-gray-900 tracking-tight">
          No internet Connection
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Please turn on your wi-fi or Check you ethernet cable
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleTryAgain}
        className="mt-6 flex items-center gap-2 bg-[#CB9F5A] hover:bg-[#b88c4b] text-neutral-1 px-8 py-2.5 rounded shadow-sm transition-colors text-sm md:text-[15px] font-medium"
      >
        <RefreshCw size={16} className="text-neutral-1" />
        <span>Try Again</span>
      </button>
    </div>
  );
}
