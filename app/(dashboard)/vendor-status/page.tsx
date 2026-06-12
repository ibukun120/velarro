"use client";

import { useState } from "react";
import Container from "@/components/Layouts/Container";
import ApplicationAlert from "@/components/Sections/AccountDashboard/vendor-status/ApplicationAlert";
import ApplicationDetails from "@/components/Sections/AccountDashboard/vendor-status/ApplicationDetails";
import ApplicationTimeline from "@/components/Sections/AccountDashboard/vendor-status/ApplicationTimeline";
import ReApplyModal from "@/components/Sections/AccountDashboard/vendor-status/ReApplyModal";
import { H1, Text } from "@/components/ui/Typography/Typography";

export default function VendorApplicationStatus() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container className="space-y-6 sm:space-y-8 ">

      {/* HEADER */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          
          <div>
            <H1 className="mb-1 sm:mb-2 ">
              Vendor Application Status
            </H1>
            <Text className="text-neutral-13 text-sm sm:text-base">
              Application Timeline
            </Text>
          </div>

          <Text className="text-xs sm:text-sm text-secondary-900 shrink-0">
            Updated 2h ago
          </Text>
        </div>

        {/* TIMELINE */}
        <div className="overflow-x-auto">
          <ApplicationTimeline />
        </div>

        {/* ALERT */}
        <ApplicationAlert onReApply={() => setOpenModal(true)} />
      </div>

      {/* DETAILS */}
      <ApplicationDetails
        data={{
          businessName: "Velarro Lounge & Cigar Co.",
          taxId: "XXXXX4567",
          yearsInBusiness: "8 years",
          businessType: "Retail Lounge",
          website: "velarro-lounge.com",
          country: "India",
          category: "Premium Cigars & Spirits",
          email: "vendor@velarro.com",
        }}
      />

      {/* MODAL */}
      <ReApplyModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </Container>
  );
}