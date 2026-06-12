"use client";

import { useState } from "react";
import PageHeader from "./PageHeader";
import AgreementTypeCard from "./AgreementTypeCard";
import CommissionRateCard from "./CommissionRateCard";
import RightPanel from "./RightPanel";

export type AgreementType = "percentage" | "fixed" | "tiered" | null;

export default function CommissionSettings() {
  const [activeType, setActiveType] = useState<AgreementType>(null);
  const [commissionRate, setCommissionRate] = useState(10);
  const [salesAmount, setSalesAmount] = useState<number | "">("");
  const [saved, setSaved] = useState(false);

  const handleToggle = (type: Exclude<AgreementType, null>) => {
    setActiveType((prev) => (prev === type ? null : type));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCancel = () => {
    setActiveType(null);
    setSaved(false);
  };

  const commission =
    typeof salesAmount === "number" ? (salesAmount * commissionRate) / 100 : 0;
  const netEarnings =
    typeof salesAmount === "number" ? salesAmount - commission : 0;

  return (
    <div>
      <PageHeader />

      <div
        className={`grid gap-5 items-start ${
          activeType ? "grid-cols-1 lg:grid-cols-[1fr_420px]" : "grid-cols-1"
        }`}
      >
        {/* Left Column */}
        <div className="w-full">
          <AgreementTypeCard activeType={activeType} onToggle={handleToggle} />
          <CommissionRateCard
            commissionRate={commissionRate}
            onRateChange={setCommissionRate}
          />
        </div>

        {/* Right Column */}
        {activeType && (
          <RightPanel
            activeType={activeType}
            salesAmount={salesAmount}
            onSalesChange={setSalesAmount}
            commission={commission}
            netEarnings={netEarnings}
            commissionRate={commissionRate}
            saved={saved}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}
