"use client";

import Container from "@/components/Layouts/Container";

type Props = {
  header: React.ReactNode;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  drawer?: React.ReactNode;
};

export default function OrderDetailsLayout({
  header,
  leftContent,
  rightContent,
  drawer,
}: Props) {
  return (
    <Container className="py-6 sm:py-8 space-y-6">

      {/* HEADER */}
      {header}

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {leftContent}
        </div>

        {/* RIGHT */}
        <div>
          {rightContent}
        </div>
      </div>

      {/* DRAWER */}
      {drawer}
    </Container>
  );
}