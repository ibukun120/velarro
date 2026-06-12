'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cart.store';
import { Checkbox, Input, Select } from '@/app/components/accounts/account-form-details';

export default function CheckOutPageClient() {
  const { items, totals,  } = useCartStore();

  if (!items) return <p>Loading cart...</p>; 

  return (
    <div className="bg-white text-[#333] min-h-screen">
      {/* Page title */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">Checkout</h1>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
        
        {/* LEFT — Shipping */}
        <section>
          {/* Customer */}
          <div className="flex items-center justify-between border-b pb-6 mb-8 border-gray-300">
            <div className='flex items-center gap-6'>
              <p className="md:text-xl lg:text-2xl">Customer</p>
              <p className="text-sm text-gray-500">odedakeem539@gmail.com</p>
            </div>
            <button className="text-sm text-blue-500">Sign Out</button>
          </div>

          {/* Shipping */}
          <h2 className="md:text-xl lg:text-2xl mb-6 lowercase">Shipping Details</h2>

          <form className="space-y-5">
            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>

            <Input label="Company Name (Optional)" />
            <Input label="Phone Number" />
            <Input label="Address" />
            <Input label="Apartment/Suite/Building (Optional)" />

            <Input label="City" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Country" value="Nigeria"  placeholder=""/>
              <Input label="Postal Code" />
            </div>

            <Select label="State/Province (Optional)" placeholder="Select a state" />

            {/* Checkboxes */}
            <div className="space-y-3 pt-4 text-sm">
              <Checkbox label="Save this address in my address book." />
              <Checkbox label="My billing address is the same as my shipping address." />
            </div>

            {/* Shipping Method */}
            <div className="pt-6 text-gray-500">
              <h3 className="font-medium mb-2 text-md">Shipping Method</h3>
              <div className="w-full border focus:border-none border-gray-300 rounded-sm p-4 focus:outline-none focus:ring-1 focus:ring-[#C59949]">
                Please enter a shipping address in order to see shipping quotes
              </div>
            </div>

            {/* Order comments */}
            <div className='text-gray-500'>
              <h3 className="font-medium mb-2">Order Comments</h3>
              <textarea className="w-full border focus:border-none border-gray-300 rounded-sm px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-[#C59949]" />
            </div>

            <button className="my-6 bg-black rounded-sm text-neutral-1 px-10 py-3 uppercase text-sm">
              Continue
            </button>
            <p className='text-2xl text-[#333] mb-4 border-b border-gray-300 pb-3'>Billing</p>
            <p className='text-2xl text-[#333] border-b border-gray-300 pb-3'>Payments</p>
          </form>
        </section>

        {/* RIGHT — Order Summary */}
        <aside className="border border-gray-300 rounded-md p-6 h-fit">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
            <h3 className="font-medium text-[#333] text-xl">Order Summary</h3>
            <Link href="/cart" className="text-sm text-blue-500">
              Edit Cart
            </Link>
          </div>

          <p className="text-sm mb-4">{items.length} Items</p>

          {/* Items */}
          <div className="space-y-6">
            {items.map(item => (
              <div key={item.productId} className="flex gap-4">
                <div className="grid grid-cols-2 gap-1 w-20">
                  {[...Array(4)].map((_, i) => (
                    <Image
                      key={i}
                      src={item.image}
                      alt=""
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  ))}
                </div>

                <div className="flex-1 text-sm">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.quantity} × ₹{item.price.toFixed(2)}
                  </p>
                </div>

                <p className="text-sm font-medium">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Coupon */}
          <button className="text-sm text-blue-500 mt-6">
            Coupon / gift certificate
          </button>

          {/* Totals */}
          <div className="border-t border-gray-300 mt-6 pt-4 space-y-2 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹0.00</span>
            </div>
          </div>

          <div className="flex justify-between mt-6 font-semibold">
            <span className='text-gray-500'>Total (USD)</span>
            <span className='text-2xl'>₹{totals.subtotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
