"use client";

import { TrackingStage } from "../data/order";

// import { TrackingStage } from "./order";


interface TrackingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  stages: TrackingStage[];
}

export default function TrackingSidebar({
  isOpen,
  onClose,
  stages,
}: TrackingSidebarProps) {
  return (
    <>
      
      <div
        className={`fixed inset-0 bg-black/30 z-[200] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 w-[420px] h-screen bg-white z-[201] overflow-y-auto px-7 py-7 shadow-[-4px_0_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-medium">See all Updates</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-[14px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            Close
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Timeline */}
        {stages.length === 0 ? (
          <p className="text-[14px] text-[#6B6B6B] text-center pt-10">
            No tracking updates available yet.
          </p>
        ) : (
          <div className="relative pl-7">
            {/* Vertical line */}
            <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-[#E8E6DF]" />

            {stages.map((stage, idx) => (
              <div key={idx} className="relative mb-7">
                {/* Green dot */}
                <div className="absolute -left-8 top-0 w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center z-10">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                {/* Stage header */}
                <div className="flex items-center gap-2.5 mb-2 ml-5">
                  <span className="text-[15px] font-medium text-[#22C55E]">
                    {stage.stage}
                  </span>
                  {stage.date && (
                    <span className="text-[13px] text-[#6B6B6B]">{stage.date}</span>
                  )}
                </div>

                {/* Events */}
                <div className="flex flex-col gap-2">
                  {stage.events.map((event, eIdx) => (
                    <div key={eIdx}>
                      <p className="text-[12px] text-[#1A1A1A]">{event.text}</p>
                      {event.time && (
                        <p className="text-[11px] text-[#6B6B6B] mt-0.5">
                          {event.time}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
