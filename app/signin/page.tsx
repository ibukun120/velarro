"use client";

import SigninPage from "@/components/Sections/Auth/SigninPage";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <SigninPage
      open={true}
      onClose={() => router.back()}
      switchToSignup={() => router.push("/signup")}
      switchToForgot={() => router.push("/forgot-password")}
    />
  );
}