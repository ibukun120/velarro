import { Suspense } from "react";
import AccountPageClient from "./account-page-client";

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="pt-20 text-center">Loading account…</div>}>
      <AccountPageClient />
    </Suspense>
  );
}
