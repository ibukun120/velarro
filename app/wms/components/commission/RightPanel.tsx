"use client";

import { AgreementType } from "./CommissionSettings";
import StrategicGuidance from "./StrategicGuidance";
import ActionButtons from "./ActionButtons";
import EarningsPreview from "./EarningsPreview";
import FixedOrderPanel from "./FixedOrderPanel";
import TieredPanel from "./TieredPanel";

interface Props {
  activeType: AgreementType;
  salesAmount: number | "";
  onSalesChange: (val: number | "") => void;
  commission: number;
  netEarnings: number;
  commissionRate: number;
  saved: boolean;
  onSave: () => void;
  onCancel: () => void;
}

export default function RightPanel({
  activeType,
  salesAmount,
  onSalesChange,
  commission,
  netEarnings,
  commissionRate,
  saved,
  onSave,
  onCancel,
}: Props) {
  const isVisible = activeType !== null;

  return (
    <div
      className={`flex flex-col gap-4 transition-all duration-350 ease-out
        ${isVisible ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-4 pointer-events-none"}
      `}
    >
      {/* Percentage Based Panel */}
      {activeType === "percentage" && (
        <EarningsPreview
          salesAmount={salesAmount}
          onSalesChange={onSalesChange}
          commission={commission}
          netEarnings={netEarnings}
        />
      )}

      {/* Fixed Per Order Panel */}
      {activeType === "fixed" && <FixedOrderPanel />}

      {/* Tiered Commission Panel */}
      {activeType === "tiered" && <TieredPanel />}

      {/* Strategic Guidance — shown for all active types */}
      {isVisible && <StrategicGuidance activeType={activeType} commissionRate={commissionRate} />}

      {/* Action Buttons — shown for all active types */}
      {isVisible && (
        <ActionButtons saved={saved} onSave={onSave} onCancel={onCancel} />
      )}
    </div>
  );
}
