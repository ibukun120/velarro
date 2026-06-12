"use client";

type Props = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
};

export default function WishlistTabs({
  tabs,
  activeTab,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap no-scrollbar">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab}
          onClick={() => onChange(tab)}
          className={`text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-xs border transition shrink-0 ${
            activeTab === tab
              ? "bg-neutral-3 text-neutral-12 border-neutral-6"
              : "border-neutral-6 text-neutral-12"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}