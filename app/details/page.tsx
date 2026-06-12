// import { useState } from "react";
"use client";
import { useState } from "react";

// import { useState } from "react";

// ─── Icons (inline SVGs to avoid asset dependencies) ───────────────────────
// const HamburgerIcon = () => (
//   <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <line x1="0" y1="3" x2="24" y2="3" stroke="white" strokeWidth="2"/>
//     <line x1="0" y1="11" x2="24" y2="11" stroke="white" strokeWidth="2"/>
//     <line x1="0" y1="19" x2="24" y2="19" stroke="white" strokeWidth="2"/>
//   </svg>
// );
// const SearchIconSVG = () => (
//   <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="9" cy="9" r="7" stroke="#9C8A7E" strokeWidth="2"/>
//     <line x1="14" y1="14" x2="20" y2="20" stroke="#9C8A7E" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const CartIconSVG = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
//     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
//   </svg>
// );
// const LoginIconSVG = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
//     <polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
//   </svg>
// );
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const BoxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const BookmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);
const DatabaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
  </svg>
);
const CodepenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
    <line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>
    <polyline points="2 15.5 12 8.5 22 15.5"/><line x1="12" y1="2" x2="12" y2="8.5"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const PackageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
// const YoutubeIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
//     <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
//   </svg>
// );
// const InstagramIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//   </svg>
// );
// const FacebookIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//   </svg>
// );

// ─── Navbar ─────────────────────────────────────────────────────────────────
// const Navbar = () => (
//   <header className="w-full bg-stone-900 border-b border-amber-700/50 shadow-lg backdrop-blur-sm z-10 mt-12">
//     <div className="max-w-[1440px] mx-auto px-12 h-18 flex items-center justify-between gap-8 py-4">
//       {/* Left: hamburger + nav links */}
//       <div className="flex items-center gap-12">
//         <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
//           <HamburgerIcon />
//         </button>
//         <nav className="hidden lg:flex items-center gap-12">
//           {["Discover", "Gifts", "Products"].map((item) => (
//             <button key={item} className="text-neutral-1 font-light text-lg hover:text-amber-300 transition-colors tracking-wide">
//               {item}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Center: brand */}
//       <h1
//         className="absolute left-1/2 -translate-x-1/2 text-neutral-1 text-6xl leading-none select-none"
//         style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', serif", fontWeight: 400 }}
//       >
//         Velarro
//       </h1>

//       {/* Right: search + actions */}
//       <div className="flex items-center gap-12">
//         <div className="hidden md:flex items-center bg-white rounded-full px-4 py-1.5 gap-2 w-56">
//           <input
//             className="flex-1 bg-transparent outline-none text-stone-500 font-light text-sm placeholder:text-stone-400"
//             placeholder="Search.."
//             type="text"
//           />
//           <SearchIconSVG />
//         </div>
//         <div className="flex items-center gap-10">
//           <button className="flex items-center gap-1.5 text-neutral-1 font-light text-lg hover:text-amber-300 transition-colors">
//             Cart <CartIconSVG />
//           </button>
//           <button className="flex items-center gap-1.5 text-neutral-1 font-light text-lg hover:text-amber-300 transition-colors">
//             Login <LoginIconSVG />
//           </button>
//         </div>
//       </div>
//     </div>
//   </header>
// );

// ─── Sidebar ─────────────────────────────────────────────────────────────────
const sidebarItems = [
  { icon: <UserIcon />, label: "My Profile", active: false },
  { icon: <MapPinIcon />, label: "Addresses", active: false },
  { icon: <BoxIcon />, label: "My Orders", active: true },
  { icon: <BookmarkIcon />, label: "Wish list", active: false },
  { icon: <DatabaseIcon />, label: "Vendor Status", active: false },
  { icon: <SettingsIcon />, label: "Settings", active: false },
];

const Sidebar = () => (
  <aside className="w-[278px] shrink-0 flex flex-col border-t border-r border-amber-600/40 bg-stone-50 min-h-[1013px] py-6">
    {/* User info */}
    <div className="flex items-center gap-3 px-8 mb-10">
      <div className="w-12 h-12 rounded-full bg-stone-300 shrink-0" />
      <div>
        <h3 className="text-stone-800 font-light text-xl leading-tight">Riya Patel</h3>
        <p className="text-stone-400 text-xs tracking-wide mt-0.5">Since 2024</p>
      </div>
    </div>

    {/* Nav items */}
    <nav className="flex flex-col flex-1">
      {sidebarItems.map(({ icon, label, active }) => (
        <button
          key={label}
          className={`flex items-center gap-4 px-8 h-[50px] text-left font-light text-xl transition-colors ${
            active
              ? "bg-amber-100 text-stone-800 font-normal"
              : "bg-stone-50 text-stone-700 hover:bg-stone-100"
          }`}
        >
          <span className="w-6 h-6 shrink-0 text-stone-600">{icon}</span>
          {label}
        </button>
      ))}

      {/* Become Seller */}
      <button className="flex items-center gap-4 px-8 h-[50px] bg-amber-100 text-stone-800 text-left font-light text-xl hover:bg-amber-200 transition-colors mt-auto">
        <span className="w-6 h-6 text-stone-600"><CodepenIcon /></span>
        Become Seller
      </button>
    </nav>

    {/* Sign Out */}
    <button className="flex items-center gap-4 px-8 h-[50px] bg-amber-100 text-stone-800 text-left font-light text-xl hover:bg-red-50 transition-colors border-t border-amber-200 mt-2">
      <span className="w-6 h-6 text-stone-600"><CodepenIcon /></span>
      Sign Out
    </button>
  </aside>
);

// ─── Progress Stepper ────────────────────────────────────────────────────────
const steps = [
  { label: "Ordered", date: "Feb 10", done: true },
  { label: "Shipped", date: "Feb 16", done: true },
  { label: "Out for Delivery", date: "Feb 24", done: true },
  { label: "Delivered", date: "Feb 28", done: true },
];

const ProgressStepper = () => (
  <div className="flex items-start gap-0 mb-2">
    {steps.map((step, i) => (
      <div key={step.label} className="flex flex-col items-center flex-1">
        <div className="flex items-center w-full">
          {i > 0 && <div className={`flex-1 h-0.5 ${step.done ? "bg-amber-600" : "bg-stone-200"}`} />}
          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
            step.done ? "bg-amber-600 text-neutral-1" : "bg-stone-200 text-stone-500"
          }`}>
            {step.done ? <CheckIcon /> : i + 1}
          </div>
          {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${steps[i + 1].done ? "bg-amber-600" : "bg-stone-200"}`} />}
        </div>
        <div className="text-center mt-2">
          <div className="text-stone-700 text-sm font-medium">{step.label}</div>
          <div className="text-stone-400 text-xs">{step.date}</div>
        </div>
      </div>
    ))}
  </div>
);

// ─── Order Summary ────────────────────────────────────────────────────────────
const summaryRows = [
  { label: "Gross Amount (1 items)", value: "₹30.00", highlight: false },
  { label: "Shipping", value: "₹5.00", highlight: false },
  { label: "Discount", value: "-₹5.00", highlight: false },
  { label: "Taxable Value", value: "₹28.5", highlight: false },
  { label: "IGST", value: "₹1.5", highlight: false },
];

const OrderSummary = () => (
  <div className="border border-stone-200 rounded-xl overflow-hidden">
    <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-200 bg-stone-50">
      <PackageIcon />
      <span className="font-semibold text-stone-700 text-base">Order Summary</span>
    </div>
    <div className="px-5 py-4 space-y-2">
      {summaryRows.map((row) => (
        <div key={row.label} className="flex justify-between text-sm text-stone-600 font-light">
          <span>{row.label}</span>
          <span>{row.value}</span>
        </div>
      ))}
      <div className="flex justify-between pt-3 border-t border-stone-200 font-semibold text-stone-800 text-base">
        <span>Total</span>
        <span>₹30.00</span>
      </div>
    </div>
  </div>
);

// ─── All Updates Panel ────────────────────────────────────────────────────────
const updateSteps = [
  {
    title: "Order Confirmed",
    date: "Feb 10, 2026",
    items: [
      { desc: "Your Order has been placed.", time: "Feb 10, 2026 - 2:10am" },
    ],
  },
  {
    title: "Shipped",
    date: "Feb 11, 2026",
    items: [
      { desc: "Seller has processed your order.", time: "Feb 10, 2026 - 6:10am" },
      { desc: "Your item has been picked up by delivery partner", time: "Feb 10, 2026 - 11:10am" },
      { desc: "Logistics - XVVHFGFJGHFJFH", time: "" },
      { desc: "Your item has been shipped", time: "Feb 10, 2026 - 8:10pm" },
      { desc: "Your item has been received in the hub nearest to you", time: "" },
    ],
  },
  {
    title: "Out for Delivery",
    date: "Feb 18, 2026",
    items: [
      { desc: "Your item is out for delivery", time: "Feb 18, 2026 - 12:10pm" },
    ],
  },
  {
    title: "Delivered",
    date: "Feb 18, 2026",
    items: [
      { desc: "Your item has been delivered", time: "Feb 18, 2026 - 9:10pm" },
    ],
  },
];

const AllUpdatesPanel = ({ onClose }: { onClose: () => void }) => (
  <div className="absolute inset-0 bg-white z-20 flex flex-col">
    {/* Header */}
    <div className="border-b border-stone-200 px-8 py-4 flex items-center justify-between">
      <h3 className="font-semibold text-stone-800 text-xl">See all Updates</h3>
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors text-base font-light"
      >
        Close <XIcon />
      </button>
    </div>

    {/* Timeline */}
    <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
      {updateSteps.map((step, si) => (
        <div key={si} className="flex gap-5">
          {/* Circle + line */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center shrink-0">
              <CheckIcon />
            </div>
            {si < updateSteps.length - 1 && (
              <div className="w-0.5 flex-1 bg-amber-200 mt-1 mb-0" style={{ minHeight: 40 }} />
            )}
          </div>
          {/* Content */}
          <div className="flex-1 pb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-stone-800 text-xl font-semibold">{step.title}</h2>
              <span className="text-stone-400 text-sm">{step.date}</span>
            </div>
            <ul className="space-y-1.5">
              {step.items.map((item, ii) => (
                <li key={ii} className="text-stone-600 text-sm font-light">
                  {item.desc}
                  {item.time && <span className="text-stone-400 ml-2 text-xs">{item.time}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Main Order Detail Content ────────────────────────────────────────────────
const OrderDetail = () => {
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <div className="flex-1 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent z-0" />

      <div className="relative z-10 px-10 py-8 space-y-8">
        {/* Order header */}
        <div>
          <h2 className="text-stone-800 text-3xl font-light mb-3">Order</h2>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-stone-700 text-xl font-light">Order ID: ABC-687463830</h3>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-green-600 text-sm font-medium">Delivered</span>
            </div>
          </div>

          {/* Stepper */}
          <ProgressStepper />

          {/* See all updates */}
          <button
            onClick={() => setShowUpdates(true)}
            className="flex items-center gap-2 text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors mt-3"
          >
            See all updates <ChevronDownIcon />
          </button>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-6 flex-wrap">
          {/* Left: Order Info + Summary */}
          <div className="flex-1 min-w-[320px] space-y-5">
            {/* Product card */}
            <div className="border border-stone-200 rounded-xl p-5 bg-white">
              <div className="text-stone-400 text-sm mb-3">3 May 2026</div>
              <div className="flex gap-4">
                {/* Product image placeholder */}
                <div className="w-20 h-20 bg-stone-100 rounded-lg shrink-0 flex items-center justify-center text-stone-300">
                  <BoxIcon />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-stone-800 mb-1">Velarro Limited Compendium</div>
                  <div className="text-stone-500 text-sm font-light leading-relaxed">
                    Wrapper: Corojo 99 Maduro<br />
                    Binder: Criollo 98<br />
                    Filler: Criollo + Piloto Cubano
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between text-stone-700 font-light">
                  <span className="text-sm">Qty: 1</span>
                  <span className="font-medium">₹30.00</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <OrderSummary />

            {/* Invoice */}
            <div className="border border-stone-200 rounded-xl p-5 bg-white flex items-center justify-between">
              <h3 className="text-stone-700 font-medium">Get your invoice in the mail</h3>
              <button className="flex items-center gap-2 text-amber-700 font-light text-sm border border-amber-300 rounded-full px-4 py-1.5 hover:bg-amber-50 transition-colors">
                Invoice <SendIcon />
              </button>
            </div>
          </div>

          {/* Right: Info panels */}
          <div className="flex flex-col gap-5 w-72 shrink-0">
            {/* Customer Info */}
            <div className="border border-stone-200 rounded-xl bg-white overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-stone-100">
                <span className="font-semibold text-stone-700">Customer Info</span>
                <button className="text-stone-400 hover:text-stone-600 transition-colors"><EditIcon /></button>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex items-center gap-3 text-stone-600 text-sm font-light">
                  <MailIcon /> Alex@gmail.com
                </div>
                <div className="flex items-center gap-3 text-stone-600 text-sm font-light">
                  <PhoneIcon /> 7985630123
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="border border-stone-200 rounded-xl bg-white overflow-hidden">
              <div className="px-5 py-3 border-b border-stone-100">
                <span className="font-semibold text-stone-700">Shipping Address</span>
              </div>
              <div className="px-5 py-4 space-y-1 text-stone-600 text-sm font-light">
                <div>Alex</div>
                <div>123 Maple St, Springfield, IL 62704</div>
                <div>7985630123</div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="border border-stone-200 rounded-xl bg-white overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-stone-100">
                <span className="font-semibold text-stone-700">Billing Address</span>
                <button className="text-stone-400 hover:text-stone-600 transition-colors"><ChevronDownIcon /></button>
              </div>
              <div className="px-5 py-4 text-stone-500 text-sm font-light">
                Same as Shipping address
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Updates overlay */}
      {showUpdates && <AllUpdatesPanel onClose={() => setShowUpdates(false)} />}
    </div>
  );
};

// ─── Footer ──────────────────────────────────────────────────────────────────
// const Footer = () => (
//   <footer className="w-full bg-stone-900 relative overflow-hidden">
//     Top divider
//     <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />

//     <div className="max-w-[1440px] mx-auto px-12 py-16 flex gap-32">
//       Brand
//       <div className="w-72 shrink-0">
//         <h2
//           className="text-amber-500 text-5xl mb-8 leading-none"
//           style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', serif", fontWeight: 400 }}
//         >
//           Velarro
//         </h2>
//         <p className="text-stone-400 font-light text-lg leading-relaxed">
//           Premium cigars, crafted with passion since 1921
//         </p>
//       </div>

//       Links
//       <div className="flex gap-20 flex-wrap">
//         {[
//           { heading: "Discover", links: ["Our Story", "Craftsmanship", "Sustainability", "Press"] },
//           { heading: "Shop", links: ["Cigars", "Accessories", "Gift Sets", "Limited Editions"] },
//           { heading: "Support", links: ["Contact Us", "Shipping", "Returns", "FAQ"] },
//           { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
//         ].map(({ heading, links }) => (
//           <div key={heading} className="flex flex-col gap-5">
//             <h2 className="text-amber-400 font-light text-2xl">{heading}</h2>
//             {links.map((link) => (
//               <button key={link} className="text-stone-400 font-light text-lg text-left hover:text-amber-300 transition-colors">
//                 {link}
//               </button>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>

//     Bottom bar
//     <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
//     <div className="max-w-[1440px] mx-auto px-12 py-5 flex items-center justify-between">
//       <div className="flex items-center gap-5">
//         <div className="w-7 h-7 rounded-full border border-stone-400 flex items-center justify-center">
//           <span className="text-stone-400 text-xs font-light">C</span>
//         </div>
//         <span className="text-stone-400 font-light text-base">
//           2026 velarro ind, inc. - all rights reserved
//         </span>
//       </div>
//       <div className="flex items-center gap-10 text-stone-400">
//         <button className="hover:text-amber-400 transition-colors"><YoutubeIcon /></button>
//         <button className="hover:text-amber-400 transition-colors"><InstagramIcon /></button>
//         <button className="hover:text-amber-400 transition-colors"><FacebookIcon /></button>
//       </div>
//     </div>
//   </footer>
// );

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
const Breadcrumb = () => (
  <div className="px-12 py-2 text-xs mt-18 font-medium tracking-wide" style={{ fontFamily: "Gotham, sans-serif" }}>
    <span className="text-stone-500">Home</span>
    <span className="text-stone-300 mx-1"> </span>
    <span className="text-amber-600">&gt; Dashboard</span>
  </div>
);

// ─── Root Page ────────────────────────────────────────────────────────────────
export default function VelarroOrderDetailPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans ">
      {/* <Navbar /> */}
      <Breadcrumb />

      <main className="flex flex-1 max-w-[1440px] w-full mx-auto">
        <Sidebar />
        <OrderDetail />
      </main>

      {/* <Footer /> */}
    </div>
  );
}