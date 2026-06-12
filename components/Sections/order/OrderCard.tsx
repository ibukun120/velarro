// import { Order } from "@/types/order";
import Image from "next/image";
import { Order } from "../../../data/order";

interface OrderCardProps {
  order: Order;
  onClick: (id: string) => void;
}

const STATUS_STYLES: Record<string, string> = {
  delivered: "text-[#22C55E]",
  "out_for_delivery": "text-[#D97706]",
  shipped: "text-[#F6C333]",
  placed: "text-[#F6C333]",
  packed: "text-[#F6C333]",
  cancelled: "text-[#F26969]",
  delayed: "text-[#F6C333]",
  refund: "text-[#1565C0]",
};

export default function OrderCard({ order, onClick }: OrderCardProps) {
  const statusClass = STATUS_STYLES[order.status] ?? "text-secondary-300";

  return (
    <div
      onClick={() => onClick(order.id)}
      className="flex flex-col md:flex-row items-center justify-normal md:justify-center gap-3 md:gap-5 px-2 py-[18px] border-b border-[#E5E2DA] rounded-md cursor-pointer hover:bg-[#FAF9F7] transition-colors w-full"
    >
      {/* Product Image */}
      {order.imageUrl ? (
        <Image
          src={order.imageUrl}
          // src="/images/orderbk.png"
          alt={order.name}
          width={64}
          height={64}
          className="rounded-md object-cover flex-shrink-0 w-2/3 md:w-[64px]"
        />
      ) : (
        <div
          className="w-16 h-16 rounded-md flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #8B7355, #5C4A2A)" }}
        />
      )}

      {/* Order Info */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-[24px] md:text-[14px] font-medium mb-1">{order.name}</p>
        <p className="text-[20px] md:text-[12px] text-secondary-300">
          Qty: {order.qty} • Size: {order.size}
        </p>
      </div>

      {/* Price */}
      <p className="flex flex-1 text-[26px] md:text-[16px] font-medium  md:text-center">
        ₹{order.price.toFixed(2)}
      </p>

      {/* Status */}
      <div className="min-w-[200px] text-center md:text-right">
        <p className={`text-[23px] md:text-[13px] font-medium mb-1 ${statusClass}`}>
          {order.statusLabel}
        </p>
        <p className="text-2xl md:text-[11px] text-secondary-300 mb-1">
          Your item has been delivered
        </p>
        <div className="flex items-center justify-center md:justify-end gap-1 text-xl md:text-[12px] text-[#629BF8] cursor-pointer hover:underline">
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Rate & Review Product
        </div>
      </div>

      {/* Chevron */}
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#aaa"
        strokeWidth={2}
        className="flex-shrink-0"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  );
}
