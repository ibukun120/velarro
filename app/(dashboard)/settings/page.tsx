import Container from "@/components/Layouts/Container";
import AccountSection from "@/components/Sections/AccountDashboard/settings/AccountSection";
import LanguageSection from "@/components/Sections/AccountDashboard/settings/LanguageSection";
import NotificationSection from "@/components/Sections/AccountDashboard/settings/NotificationSection";
import SecuritySection from "@/components/Sections/AccountDashboard/settings/SecuritySection";
import { H1 } from "@/components/ui/Typography/Typography";

export default function OverAllSettingsPage() {
  return (
    <Container className="flex flex-col gap-4 sm:gap-5 md:gap-6 ">
      
      {/* TITLE */}
      <H1 className="mb-1 sm:mb-2">
        Settings
      </H1>

      {/* SECTIONS */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <NotificationSection />
        <LanguageSection />
        <SecuritySection />
        <AccountSection />
      </div>

    </Container>
  );
}