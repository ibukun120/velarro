'use client';

import { ProductTab, Product, ProductTabKey } from "@/types/product";
import { useEffect, useRef, useState } from "react";
import TabContent from "./tab-content";
import GiftSellers from "./gift-sellers";
import EnjoymentDetails from "./enjoyment-details";

type Props = {
  tabs: ProductTab[];
  product: Product;
};

export default function ProductTabs({ tabs, product }: Props) {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeTab, setActiveTab] = useState<ProductTabKey>(tabs[0].key);

  // Scroll to a tab
  const handleTabClick = (tab: ProductTab) => {
    const el = sectionRefs.current[tab.scrollToId || tab.key];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Observe scroll and highlight the tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id as ProductTabKey);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center gap-4 my-16 sticky top-20 bg-transparent z-50">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-2 rounded-full text-xl font-normal transition-all duration-200 ${activeTab === tab.key
                ? "bg-[#333333] text-neutral-1"
                : ""
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Sections */}
      {tabs.map((tab) => {
        const id = tab.scrollToId || tab.key;
        return (
          <section
            key={tab.key}
            id={id}
            ref={(el) => {
              sectionRefs.current[id] = el;
            }}
            className="scroll-mt-28"
          >
            {tab.key === "gift-sellers" ? (
              <GiftSellers
                products={product.giftSellers ?? []}
                onProductClick={(p) => console.log("Clicked", p)}
              />
            ) : tab.key === "enjoyment-details" && product.enjoymentDetails ? (
              <EnjoymentDetails
                intro={product.enjoymentDetails.intro}
                sections={product.enjoymentDetails.sections}
              />
            ) : (
              <TabContent tab={tab} />
            )}
          </section>
        );
      })}
    </>
  );
}