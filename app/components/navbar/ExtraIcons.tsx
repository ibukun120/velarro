import { LucideIcon } from "lucide-react";

interface ExtraInfo {
  icon: LucideIcon;
  title: string;
}

interface ExtraIconsProps {
  extras: ExtraInfo[];
}

export default function ExtraIcons({ extras }: ExtraIconsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {extras.map((extra, i) => {
        const Icon = extra.icon;
        return (
          <div key={i} className="flex flex-col items-center gap-1">
            <Icon className="w-6 h-6" />
            <h1>{extra.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
