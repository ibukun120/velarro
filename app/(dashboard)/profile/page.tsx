"use client";

import { useState } from "react";
import Container from "@/components/Layouts/Container";

import { H1, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Buttons/CommonButtons";
// import Image from "next/image";
import ProfileCard from "@/components/Sections/AccountDashboard/profile/ProfileCard";
// import RecentOrders from "@/components/Sections/AccountDashboard/profile/RecentOrders";
import ProfileStatus from "@/components/Sections/AccountDashboard/profile/ProfileStatus";
import PersonalDetailsForm from "@/components/Sections/AccountDashboard/profile/PersonalDetailsForm";
import { Pencil } from "lucide-react";

export default function ProfileDashboard() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container className="space-y-4">
      {/* HEADER */}
      <div className="flex flex-col gap-4">
  {/* Top Row */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <H1>Hello John</H1>

    <Button
  variant="product"
  onClick={() => setIsEditing(true)}
  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xs"
>
  <Pencil size={16} />
  EDIT PROFILE
</Button>
  </div>

  {/* Description */}
  <Text className="text-neutral-13 max-w-4xl">
    Curate your digital presence within the Velarro ecosystem. Your
    executive details are strictly confidential and used only for
    bespoke service delivery.
  </Text>
</div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <ProfileCard />
      </div>

      <ProfileStatus />

      {isEditing && <PersonalDetailsForm onClose={() => setIsEditing(false)} />}
    </Container>
  );
}
