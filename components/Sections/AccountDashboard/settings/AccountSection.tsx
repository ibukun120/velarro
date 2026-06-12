import Button from "@/components/ui/Buttons/CommonButtons";
// import { Text } from "@/components/ui/Typography/Typography";
import SettingRow from "./SettingRow";
import SectionCard from "./SectionCard";

export default function AccountSection() {
  return (
    <SectionCard title="Account">
      <div className="flex flex-col gap-4">

        {/* Logout */}
        <SettingRow label="Sign out">
          <Button variant="product" className="w-full sm:w-auto">
            Logout
          </Button>
        </SettingRow>

        {/* Delete Account */}
        {/* <div className="border border-neutral-6 rounded-xs p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"> */}
          
          {/* Text */}
          {/* <div className="flex-1">
            <Text className="text-sm sm:text-base">Delete account</Text>

            <Text variant="sm" className="text-xs sm:text-sm">
              Permanently remove your account and all data. Requires double
              confirmation
            </Text>
          </div> */}

          {/* Button */}
          {/* <Button
            variant="danger"
            className="w-full sm:w-auto"
          >
            Delete Account
          </Button>
        </div> */}

      </div>
    </SectionCard>
  );
}