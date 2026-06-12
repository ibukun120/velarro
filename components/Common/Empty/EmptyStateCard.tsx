"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Buttons/CommonButtons";

interface EmptyStateCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  redirectTo?: string;
}

export default function EmptyStateCard({
  title = "Your Ashtray Is Feeling Lonely",
  description = "Looks like you haven’t placed any order yet. Start exploring products and place your first order.",
  buttonText = "Start Exploring",
  redirectTo = "/shop",
}: EmptyStateCardProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-[500px] px-4">
      <div className="max-w-xl text-center">
        <h2
          className="
            text-4xl
            font-light
            text-primary-900
            mb-4
          "
        >
          {title}
        </h2>

        <p
          className="
            text-lg
            text-neutral-500
            leading-relaxed
            mb-8
          "
        >
          {description}
        </p>

        <Button
          onClick={() => router.push(redirectTo)}
          className="
            min-w-[180px]
            h-12
            rounded-lg
          "
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}