import { motion } from "framer-motion";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-2">
            {/* Breadcrumb item */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
            >
              {isLast ? (
                <span className="text-gray-900 font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </motion.div>

            {/* Separator */}
            {!isLast && <span className="text-gray-400">/</span>}
          </div>
        );
      })}
    </nav>
  );
}


// usage

// import Breadcrumb from "@/components/Breadcrumb";

// export default function Page() {
//   return (
//     <div className="p-5">
//       <Breadcrumb
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Dashboard", href: "/dashboard" },
//           { label: "Users", href: "/dashboard/users" },
//           { label: "Edit" },
//         ]}
//       />
//     </div>
//   );
// }
