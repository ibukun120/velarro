
import Button from "@/components/ui/Buttons/CommonButtons";
import Toggle from "@/components/ui/Buttons/Toggle";
import SettingRow from "./SettingRow";
import SectionCard from "./SectionCard";

export default function SecuritySection() {
  return (
    <SectionCard title="Security">
      <div className="flex flex-col gap-5">
        <SettingRow label="Password">
          <Button variant="product">Change Password</Button>
        </SettingRow>

        <SettingRow label="Two-factor authentication">
          <Toggle />
        </SettingRow>
      </div>
    </SectionCard>
  );
}