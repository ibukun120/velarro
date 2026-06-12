
import { Text } from "@/components/ui/Typography/Typography";
import SettingRow from "./SettingRow";
import SectionCard from "./SectionCard";

export default function LanguageSection() {
  return (
    <SectionCard title="Language">
      <SettingRow label="Language">
        <Text>English (US)</Text>
      </SettingRow>
    </SectionCard>
  );
}