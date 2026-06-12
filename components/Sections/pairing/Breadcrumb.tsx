import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-xs text-secondary-200 mb-6 font-medium">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-1">&gt;</span>}
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-primary-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className={index === items.length - 1 ? "text-primary-600 font-medium" : ""}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
