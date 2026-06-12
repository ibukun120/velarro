"use client";

export default function FixedOrderPanel() {
  return (
    <div className="bg-[#C59949] rounded-2xl p-7 text-neutral-1 shadow-lg">
      <h3 className="text-lg font-bold mb-2">Fixed Per Order Model</h3>
      <p className="text-sm opacity-85 leading-relaxed">
        A flat commission amount is paid for every successful order, regardless
        of the order value. Great for predictable, consistent partner payouts.
      </p>
      <div className="mt-5 bg-white/15 rounded-xl px-4 py-4 flex justify-between items-center">
        <span className="text-sm opacity-80">Fixed commission per order</span>
        <span className="text-2xl font-bold">$25.00</span>
      </div>
    </div>
  );
}
