"use client";

import Image from "next/image";
import { mockOrders } from "@/lib/mock-orders";
import { Order, OrderStatus } from "@/types/order";

const statusStyles: Record<OrderStatus, string> = {
  PROCESSING: "bg-yellow-100 text-yellow-700",
  SHIPPED: "bg-blue-100 text-blue-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function OrdersTabContent() {
  if (mockOrders.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg font-medium mb-2">No orders yet</p>
        <p className="text-sm text-gray-500">
          Once you place an order, it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {mockOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div>
          <p className="font-semibold">
            Order #{order.orderNumber}
          </p>
          <p className="text-sm text-gray-500">
            Placed on {formatDate(order.createdAt)}
          </p>
        </div>

        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium w-fit ${statusStyles[order.status]}`}
        >
          {order.status}
        </span>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {order.items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center gap-4"
          >
            <Image
              src={item.product.image}
              alt={item.product.title}
              width={60}
              height={60}
              className="rounded object-cover"
            />

            <div className="flex-1">
              <p className="font-medium">
                {item.product.title}
              </p>
              <p className="text-sm text-gray-500">
                Qty {item.quantity} · {item.product.format}
              </p>
            </div>

            <p className="font-medium">
              ₹{(item.unitPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-semibold">
          Total: ₹{order.totalAmount.toFixed(2)}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          {order.invoiceUrl && (
            <a
              href={order.invoiceUrl}
              className="border px-4 py-2 rounded text-sm text-center hover:bg-gray-50"
            >
              Download Invoice
            </a>
          )}

          {order.tracking ? (
            <a
              href={order.tracking.trackingUrl}
              target="_blank"
              className="bg-black text-neutral-1 px-4 py-2 rounded text-sm text-center"
            >
              Track Shipment
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-200 text-gray-500 px-4 py-2 rounded text-sm cursor-not-allowed"
            >
              Tracking unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}