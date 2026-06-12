import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-14 px-8 bg-[#2C2B28] py-10">
      {/* Left */}
      <div className="flex items-center gap-7">
        <button
          className="flex flex-col gap-[5px] p-1.5 bg-white rounded-full border border-neutral-6 cursor-pointer"
          aria-label="Menu"
        >
          <span className="block w-[16px] h-[2px] bg-primary-400 rounded" />
          <span className="block w-[16px] h-[2px] bg-primary-400 rounded" />
          <span className="block w-[16px] h-[2px] bg-primary-400 rounded" />
        </button>
        <div className="flex items-center gap-7">
          {["Discover", "Gifts", "Products"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-neutral-1 text-[24px] font-normal tracking-[0.01em] hover:text-neutral-1 transition-colors cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Center Logo */}
      <span className="absolute left-1/2 -translate-x-1/2">
        <Image
          src="/svgs/vellarro.svg"
          alt="velarro.svg"
          width={120}
          height={20}
        />
      </span>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search.."
            className="bg-white border-none rounded-full py-1.5 pl-9 pr-3 text-[#ccc] text-[18px] outline-none w-[300px] placeholder:text-[#888]"
          />
          {/* search icion */}
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        {/* Cart */}
        <button className="flex items-center gap-1.5 text-secondary-100 text-[24px] hover:text-neutral-1 transition-colors cursor-pointer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Cart
        </button>

        {/* Login */}
        <button className="flex items-center gap-1.5 text-primary-200 text-[24px] hover:text-neutral-1 transition-colors cursor-pointer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          Login
        </button>
      </div>
    </nav>
  );
}
