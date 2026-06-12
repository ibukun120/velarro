import { Text } from "@/components/ui/Typography/Typography";

export default function SettingRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      
      {/* Label */}
      <Text className="truncate whitespace-nowrap">
        {label}
      </Text>

      {/* Right content */}
      <div className="shrink-0 flex items-center">
        {children}
      </div>
    </div>
  );
}