import type { Metadata } from "next";

import { CheckoutProvider } from "../lib/checkout-context";

export const metadata: Metadata = {
  title: "Velarro Payment",
  description: "Complete your Velarro order",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CheckoutProvider>{children}</CheckoutProvider>
    </div>
  );
}
