"use client";

import {
  Search,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Production Manager",
    department: "Manufacturing & Operations",
    location: "Esteli, Nicaragua",
    link: "/job",
  },
  {
    title: "Area Sales Manager",
    department: "Sales & Distribution",
    location: "Regional",
    link: "/job/section",
  },
  {
    title: "Sales Head",
    department: "Commercial Leadership",
    location: "Global",
    link: "/job",
  },
  {
    title: "Torcedor",
    department: "Product & Heritage",
    location: "Regional",
    link: "/job",
  },
  {
    title: "Tobacco Blender",
    department: "Product & Heritage",
    location: "Esteli, Nicaragua",
    link: "/job",
  },
  {
    title: "Sales Head",
    department: "Commercial Leadership",
    location: "Global",
    link: "/job",
  },
];

const filters = [
  "Company",
  "Employment",
  "Position",
  "Country",
  "State/Province",
];

export default function JobsSection() {
  return (
    <section className="bg-neutral-1 min-h-screen mt-12 pt-1 md:pt-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12">
        {/* Search */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-6"
            />

            <input
              type="text"
              placeholder="Search by keywords"
              className="h-12 w-full rounded-md border border-neutral-6 bg-transparent pl-12 pr-4 text-sm outline-none placeholder:text-neutral-11"
            />
          </div>

          <button className="h-12 min-w-[180px] rounded-md border cursor-pointer border-neutral-6 text-sm font-medium text-neutral-12 transition-all duration-300 hover:bg-neutral-4">
            Search Jobs
          </button>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="">
            <div className="bg-neutral-2 border-b border-neutral-6 px-4 py-4 text-sm font-medium text-[#4F4338]">
              Refine your search
            </div>

            <div className="px-4 bg-neutral-2 pb-2">
                {filters.map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between border-b border-neutral-6 px-4 py-4 text-left text-[16px] font-semibold text-neutral-11"
              >
                {item}
                <ChevronDown size={14} />
              </button>
            ))}
            </div>
          </div>

          {/* Jobs */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-4 rounded-lg border border-neutral-6 bg-neutral-2 px-6 py-5 md:flex-row md:items-center"
              >
                <div>
                  <h3 className="text-[30px] leading-none font-light text-neutral-12 md:text-[32px]">
                    {job.title}
                  </h3>

                  <p className="mt-3 text-[16px] text-neutral-11">
                    {job.department} — {job.location}
                  </p>
                </div>

                <Link href={job.link} className="cursor-pointer flex items-center justify-center hover:scale-105 transition-all duration-300 h-11 min-w-[120px] rounded-md border border-neutral-6 text-[18px] font-medium text-neutral-12">
                  Full - time
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

            
    </section>
  );
}