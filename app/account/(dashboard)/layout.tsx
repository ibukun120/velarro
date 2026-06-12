
import AccountNavbar from "@/app/(site)/account/_components/account-navbar";

export default function AccountDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#333333] text-neutral-1">
      <AccountNavbar />
      {children}
    </div>
  );
}
