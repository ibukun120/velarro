"use client";

import { useState } from "react";
import Container from "@/components/Layouts/Container";
import { ChevronDown, ChevronRight } from "lucide-react";
import { faqCategories } from "./faqData";



const FAQAccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-400 bg-neutral-1 first:border-t">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-[18px] px-6 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-neutral-11/80 text-base md:text-md font-normal font-sans leading-snug">
          {question}
        </span>
        <ChevronRight
          className={`w-[22px] h-[22px] text-neutral-11 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-90" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-1 text-[#666666] text-[15px] font-sans leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQCategoryBlock = ({
  category,
  defaultOpen = false,
}: {
  category: (typeof faqCategories)[0];
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-3  w-full cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
      >
        <h2 className="text-[20px] md:text-5xl leading-12.5  text-neutral-12 text-center tracking-tight font-sans">
          {category.title}
        </h2>
        <ChevronDown
          className={`w-7 h-7 md:w-8 md:h-8 text-secondary-500 opacity-80 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {/* Questions List */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col pb-4">
          {category.items.map((item, itemIdx) => (
            <FAQAccordionItem key={itemIdx} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <Container>
      <section className="w-full px-4 md:px-8">
        <div className="space-y-8 md:space-y-10">
          {faqCategories.map((category, idx) => (
            <FAQCategoryBlock
              key={idx}
              category={category}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
