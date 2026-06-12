
import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, Minus, Plus } from "lucide-react";
import { useCartUIStore } from "@/store/cart-ui.store";
import { useCartStore } from "@/store/cart.store";
import Image from "next/image";
import Link from "next/link";

export default function CartSlider() {
  const { isCartOpen, toggleCart } = useCartUIStore();
  const { items, totals, removeItem, updateQuantity } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={toggleCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Slider (ENTIRE SLIDER SCROLLS) */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full md:w-[50%] lg:w-[28%] bg-white z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="relative pt-16 pb-10 text-center">
              <p className="text-2xl tracking-[0.25em] text-gray-700">
                YOUR CART
              </p>
              <p className="text-md text-[#333] font-semibold mt-2">
                {items.length} items
              </p>

              <X
                size={20}
                className="absolute top-6 right-6 cursor-pointer text-[#C59949]"
                onClick={toggleCart}
              />
            </div>

            {/* Content */}
            <div className="px-8">
              {items.length === 0 ? (
                <div className="py-32 flex flex-col items-center text-center">
                  <p className="text-md text-gray-500 mb-6">
                    Your cart is empty
                  </p>

                  <button
                    onClick={toggleCart}
                    className=" bg-[#C59949] hover:bg-[#333] hover:text-neutral-1 px-6 py-3 text-xl text-[#333] rounded-sm uppercase tracking-wide"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.productId}
                    className="py-6"
                  >
                    {/* TOP ROW: Image + Info */}
                    <div className="flex gap-6">
                      <div className="w-24 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="uppercase tracking-wide text-gray-500 text-2xl">
                          {item.title}
                        </p>
                        {item.selectedVariant && (
                          <p className="uppercase text-sm text-gray-500 mt-1">
                            {item.selectedVariant.label}
                          </p>
                        )}

                        <div className="mt-3 space-y-1 text-sm underline text-gray-700">
                          <p>Change Options</p>
                          <p>Add Gift Wrapping</p>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM ROW: FULL WIDTH */}
                    <div className="mt-5 flex items-center justify-between w-full">
                      {/* Price */}
                      <div className="flex items-center gap-4">
                        <span className="text-lg text-gray-500">
                          {item.quantity} x ₹{item.price.toFixed(2)}
                        </span>
                        <span className="text-xl font-semibold text-gray-800">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity */}
                      <div className="inline-flex items-center border rounded-md px-5 py-2">
                        <button
                          className="px-2"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                        >
                          <Minus size={12} />
                        </button>

                        <span className="px-3 text-sm">
                          {item.quantity}
                        </span>

                        <button
                          className="px-2"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="mt-3 flex items-center gap-1 text-xs text-gray-500"
                    >
                      <Trash2 size={14} /> REMOVE
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 pb-10 pt-10 space-y-6">
                <div className="bg-gray-700 text-neutral-1 text-xs text-center py-3 rounded-sm">
                  This order is eligible for free shipping
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{totals.subtotal.toFixed(2)}</span>
                </div>

                <Link href="/account/checkout">
                  <button className="w-full bg-[#C59949] py-3 uppercase tracking-wide text-sm rounded-sm text-[#333] font-semibold">
                    Checkout
                  </button>
                </Link>

                <div className="flex justify-center gap-3 text-xs text-gray-400">
                  VISA · MASTERCARD · AMEX · DISCOVER
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}