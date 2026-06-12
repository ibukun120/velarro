"use client";

// import Link from "next/link";

import { Search } from "lucide-react";
// import { useRouter } from "next/navigation";

export default function JobDetails() {
    // const router = useRouter();

    //  const handleApply = () => {
    //   router.push("/job/section");
    // };
  return (
    <section className="min-h-screen bg-neutral-1 mt-12 pt-1 md:pt-12">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 py-12">
        {/* Search */}
        <div className="mb-10 flex gap-4">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1AF9D]"
            />

            <input
              type="text"
              placeholder="Search by keywords"
              className="h-[44px] w-full rounded-[12px] border border-neutral-6 bg-transparent pl-10 pr-4 text-sm outline-none"
            />
          </div>

          <button className="h-[44px] w-[170px] rounded-md border border-neutral-6 text-sm text-neutral-12 hover:bg-neutral-3 transition-all duration-300 cursor-pointer">
            Search Jobs
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid gap-24 lg:grid-cols-[1fr_280px]">
          {/* Left Content */}
          <div>
            <h1 className="font-syne text-[64px] leading-none text-neutral-13">
              Area Sales Manager
            </h1>

            <div className="mt-8 space-y-2 text-[18px] text-[#4A3F36]">
              <p>
                <span className="font-semibold text-[#2F2924]">
                  Publication Date:
                </span>{" "}
                01-06-2026
              </p>

              <p>
                <span className="font-semibold text-[#2F2924]">
                  Address:
                </span>{" "}
                Hyderabad, India
              </p>

              <p>
                <span className="font-semibold text-[#2F2924]">
                  Employment:
                </span>{" "}
                Permanent Position
              </p>

              <p>
                <span className="font-semibold text-[#2F2924]">
                  Employment Degree:
                </span>{" "}
                100%
              </p>
            </div>

            {/* Intro */}
            <div className="mt-10 max-w-[760px] space-y-6 text-[20px] leading-[1.6] text-[#4A3F36]">
              <p>
                Velarro Estate is a premium luxury cigar company focused on
                delivering world class handcrafted cigars with a modern luxury
                identity. Built on the philosophy of combining timeless
                craftsmanship with contemporary sophistication, Velarro
                represents a new generation of premium cigar culture in India.
              </p>

              <p>
                The company is dedicated to the production, branding,
                marketing, distribution, and retailing of premium cigars and
                luxury smoking accessories, anchored in a strong “Leaf to
                Luxury” approach ensuring excellence across every stage of the
                customer journey.
              </p>

              <p>
                We are currently looking for passionate, ambitious, and
                performance-driven professionals to join our growing India
                operations.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mt-16">
              <h2 className="mb-6 font-syne text-[44px] text-[#2D2A27]">
                Responsibilities
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-[20px] leading-[1.6] text-[#4A3F36]">
                <li>
                  Manage regional distributor and retail relationships
                </li>
                <li>
                  Expand Velarro&#39;s presence across premium retail outlets,
                  lounges, hotels, and hospitality venues
                </li>
                <li>
                  Achieve regional sales and growth targets
                </li>
                <li>
                  Execute trade marketing activities and promotional
                  initiatives
                </li>
                <li>
                  Monitor competitor activity, pricing, and market trends
                </li>
                <li>
                  Conduct regular market visits and retailer engagement
                </li>
                <li>
                  Ensure premium product visibility and retail presentation
                  standards
                </li>
                <li>
                  Maintain strong customer and distributor relationships
                </li>
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mt-16">
              <h2 className="mb-6 font-syne text-[44px] text-[#2D2A27]">
                Qualification and Experience
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-[20px] leading-[1.6] text-[#4A3F36]">
                <li>
                  Bachelor&#39;s degree in Business, Sales, Marketing, or related
                  field
                </li>
                <li>
                  4–5 years of FMCG, luxury retail, premium lifestyle, liquor,
                  or tobacco sales experience
                </li>
                <li>
                  Strong understanding of retail operations and distributor
                  management
                </li>
                <li>
                  Excellent communication and negotiation capabilities
                </li>
                <li>
                  Strong relationship-building and execution skills
                </li>
                <li>
                  Willingness to travel within assigned territories
                </li>
              </ul>
            </div>

            {/* Offer */}
            <div className="mt-16">
              <h2 className="mb-6 font-syne text-[44px] text-[#2D2A27]">
                What we Offer
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-[20px] leading-[1.6] text-[#4A3F36]">
                <li>
                  Opportunity to work with a growing luxury lifestyle brand
                </li>
                <li>
                  Exposure to premium retail and hospitality channels
                </li>
                <li>
                  High-growth environment with performance-based development
                  opportunities
                </li>
                <li>
                  Dynamic and collaborative sales culture
                </li>
              </ul>
            </div>

            {/* Apply Button */}
            <button 
            // onClick={handleApply}
            className="bg-neutral-2 mt-16 h-[54px] w-full max-w-[720px] rounded-md border border-neutral-6 text-sm tracking-wide text-[#4D433B] transition-all duration-300 hover:bg-[#EFE7DD] cursor-pointer">
              Apply for this Job
            </button>
          </div>

          {/* Right Side */}
          <aside className="pt-36">
            <h3 className="font-syne text-[44px] text-neutral-12">
              HR Contact
            </h3>

            <div className="mt-6 space-y-3 text-[#4A3F36]">
              <p className="text-[24px]">John Doe</p>

              <p className="text-[20px]">
                Senior HR Business Partner
              </p>

              <a
                href="mailto:hr@velarroestate.com"
                className="block text-[18px] underline text-primary-500"
              >
                hr@velarroestate.com
              </a>

              <a
                href="tel:+13457617839"
                className="block text-[18px] underline text-primary-500"
              >
                +01 345 (7617) 839
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}