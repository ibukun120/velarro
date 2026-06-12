
import Toggle from "@/components/ui/Buttons/Toggle";
import { Text } from "@/components/ui/Typography/Typography";
import SettingRow from "./SettingRow";
import { notificationOptions } from "./settings.config";
import SectionCard from "./SectionCard";

export default function NotificationSection() {
  return (
    <SectionCard
      title="Notification Preferences"
      rightContent={<Text variant="sm">Saves on Toggle</Text>}
    >
      {notificationOptions.map((item) => (
        <SettingRow key={item.id} label={item.label}>
          <Toggle />
        </SettingRow>
      ))}
    </SectionCard>
  );
}