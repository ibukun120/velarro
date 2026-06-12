"use client";

import React, { useState } from "react";
import Container from "@/components/Layouts/Container";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/contactfaq.data";


export default function ContactFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faq" className="w-full text-center border-t border-neutral-6">
      <Container className="py-16 md:py-20">
        <h2 className="text-4xl md:text-8xl font-light mb-1 text-secondary-900 tracking-[-0.002em] md:leading-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-sm md:text-lg font-light mb-2 sm:mb-12 tracking-normal text-secondary-500 my-3">
          Quick answers to help you get what you need faster.
        </p>

        <div className="divide-y divide-primary-300">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-6">
                {/* Question Row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span
                    className={`lg:text-4xl text-xl font-light tracking-tight text-secondary-900 transition-colors duration-200 ${
                      isOpen
                        ? ""
                        : " group-hover:text-secondary-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* +/- Icon */}
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center text-primary-500 text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <Plus />
                  </span>
                </button>

                {/* Answer — animated expand/collapse */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  className={`overflow-hidden font-light  text-left transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="lg:text-lg text-sm text-neutral-13 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
