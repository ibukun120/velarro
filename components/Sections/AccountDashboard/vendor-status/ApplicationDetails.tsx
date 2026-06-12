"use client";

import { H3, Text, Label } from "@/components/ui/Typography/Typography";
import { FileText } from "lucide-react";
// import Image from "next/image";

/* ================= TYPES ================= */
export type VendorApplicationData = {
  businessName?: string;
  taxId?: string;
  yearsInBusiness?: string;
  businessType?: string;
  website?: string;
  country?: string;
  category?: string;
  email?: string;
};

/* ================= COMPONENT ================= */
export default function ApplicationDetails({
  data,
}: {
  data: VendorApplicationData;
}) {
  return (
    <div className="border border-neutral-6 rounded-xl p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <FileText size={20} className="text-primary-500 shrink-0" />

        <H3>Submitted Application</H3>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* LEFT */}
        <div className="space-y-4 sm:space-y-5">
          <DetailItem label="Business Name" value={data.businessName} />
          <DetailItem label="Tax ID" value={data.taxId} />
          <DetailItem label="Years in Business" value={data.yearsInBusiness} />
          <DetailItem label="Business Type" value={data.businessType} />
        </div>

        {/* RIGHT */}
        <div className="space-y-4 sm:space-y-5">
          <DetailItem label="Website" value={data.website} />
          <DetailItem label="Country" value={data.country} />
          <DetailItem label="Primary Category" value={data.category} />
          <DetailItem label="Contact Email" value={data.email} />
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE ITEM ================= */
function DetailItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <Label className="text-xs sm:text-sm">{label}</Label>
      <Text className="mt-1 break-words">{value || "—"}</Text>
    </div>
  );
}
