'use client';

import { type LucideIcon, Trees, Droplet, Slice, Nut } from "lucide-react";

type Props = {
  intro: string;
  sections: {
    title: string;
    flavors: string[];
    description: string;
  }[];
};

// Map flavor names to Lucide icons
const flavorIcons: Record<string, LucideIcon> = {
  "Cedar wood": Trees,
  "Cream": Droplet,
  "Herbs": Slice,
  "Roasted nuts": Nut,
  "Citrus": Droplet,
  "Fresh spice": Slice,
  "Walnut": Nut,
};

export default function EnjoymentDetails({ intro, sections }: Props) {
  return (
    <section id="enjoyment-details" className="mt-24 scroll-mt-24">
      {/* Header */}
      <h2 className="text-center text-[#333333] text-2xl md:text-4xl font-medium uppercase mb-6">
        Enjoyment Details
      </h2>

      {/* Intro text */}
      <p className="max-w-4xl mx-auto text-center text-lg text-[#333333] mb-14 leading-relaxed">
        {intro}
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, i) => (
          <div key={i} className="rounded-lg p-6 text-center border border-gray-200">
            <h3 className="text-xl md:text-2xl text-[#333333] font-medium mb-4">
              {section.title}
            </h3>

            <div className="w-full h-px bg-[#C59949] mx-auto mb-4" />

            <div className="flex justify-center gap-6 mb-4">
              {section.flavors.map((flavor) => {
                const Icon = flavorIcons[flavor];
                return (
                  <div key={flavor} className="flex flex-col items-center gap-1">
                    {Icon && <Icon size={30} className="text-[#C59949]" />}
                    <span className="text-sm text-gray-500">{flavor}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
