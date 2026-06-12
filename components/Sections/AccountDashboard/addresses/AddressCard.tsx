"use client";

import { Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Text } from "@/components/ui/Typography/Typography";
import { Address } from "./address.types";

interface Props {
  addr: Address;
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onSetDefault: () => void;
}

export default function AddressCard({
  addr,
  isActive,
  onEdit,
  onDelete,
  onSetDefault,
}: Props) {
  return (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.25 }}
  className="
    rounded-lg
    border
    border-primary-200
    bg-primary-50
    p-4
  "
>
  {/* Header */}
  <div className="flex items-center justify-between border-b border-primary-200 pb-2">
    <Text
      variant="md"
      className="font-medium text-neutral-11"
    >
      {addr.title}
    </Text>

    <div className="flex items-center gap-2">
      <button
        onClick={onEdit}
        className="text-primary-300 hover:text-primary-500 transition-colors"
      >
        <Pencil size={16} />
      </button>

      <button
        onClick={onDelete}
        className="text-primary-300 hover:text-error-500 transition-colors"
      >
        <Trash2 size={16} />
      </button>
    </div>
  </div>

  {/* Content */}
  <div className="pl-6 pt-4">
    <Text className="font-medium text-lg text-neutral-12">
      {addr.name}
    </Text>

    <Text
      variant="md"
      className="mt-2 whitespace-pre-line text-neutral-9 leading-5"
    >
      {addr.address}
    </Text>

    <Text
      variant="md"
      className="text-neutral-9 leading-5"
    >
      {addr.phone}
    </Text>
  </div>

  {/* Footer */}
  {!isActive && (
    <button
      onClick={onSetDefault}
      className="
        mt-4
        flex
        items-center
        gap-2
        text-sm
        text-neutral-10
      "
    >
     <span
  className="
    h-4
    w-4
    rounded-none
    border
    border-primary-300
  "
/>
      Default Address
    </button>
  )}

  {isActive && (
    <div
      className="
        mt-4
        flex
        items-center
        gap-2
        text-sm
        text-neutral-10
      "
    >
      {/* <div
        className="
          flex
          h-4
          w-4
          items-center
          justify-center
          rounded-sm
          border
          border-primary-400
          bg-primary-400
        "
      >
        <span className="text-[10px] text-white">✓</span>
      </div>

      <Text variant="sm">Default Address</Text> */}
    </div>
  )}
</motion.div>
  );
}
