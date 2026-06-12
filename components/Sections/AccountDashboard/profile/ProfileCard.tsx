"use client";

// import Image from "next/image";
import { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";

import Button from "@/components/ui/Buttons/CommonButtons";
import { Text, Label } from "@/components/ui/Typography/Typography";
import { User } from "lucide-react";

type UserType = {
  firstName?: string;
  lastName?: string;
};

export default function ProfileCard() {
  const [user] = useState<UserType>(() => {
    if (typeof window === "undefined") return {};

    try {
      const stored = localStorage.getItem("velarro_user");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  // jjj

  const fullName =
    [user.firstName, user.lastName].filter(Boolean).join(" ") || "User Name";

  const profileDetails = [
    { label: "Name", value: fullName },
    { label: "Address", value: "Hyderabad" },
    { label: "Gender", value: "Male" },
    { label: "Date of Birth", value: "30-04-1990" },
    { label: "Phone Number", value: "+91-9656231090" },
    { label: "Email ID", value: "patel234@gmail.com" },
  ];

  return (
    <div className="flex w-full flex-col gap-8 rounded-xl border border-neutral-6 bg-neutral-1 p-4 shadow-md sm:flex-row sm:gap-12 sm:p-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center gap-4 sm:items-start">
        <div className="relative h-[120px] w-[150px] overflow-hidden rounded-lg border border-neutral-4 bg-transparent">
          {/* <Image
            src="/userDashboard/profile.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
          /> */}

          <User className="w-full h-full " />
        </div>

        <Button
          variant="product"
          className="flex items-center gap-2 px-8 rounded-xs"
        >
          <RiUpload2Line size={16} />
          Upload
        </Button>
      </div>

      {/* Details */}
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {profileDetails.map((item) => (
          <div key={item.label}>
            <Label className="font-semibold">{item.label}</Label>
            <Text className="mt-1 break-words text-neutral-11">
              {item.value}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}