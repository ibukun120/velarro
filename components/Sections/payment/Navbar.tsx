import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-primary-50 border-b border-neutral-6 px-6 md:px-20 xl:px-20 py-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image src='/images/vellaro-icon1.svg' width={20} height={20} alt="Vellaro icion"/>
        <span className="font-bold text-[#2d2416] text-lg tracking-tight">Velarro Estate</span>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-sm text-black hover:text-[#c9a84c] transition-colors font-bold cursor-pointer">Cart</button>
        <button className="text-sm text-black hover:text-[#c9a84c] transition-colors font-bold cursor-pointer">Support</button>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-[#e8e0d0]">
          <Image src='/images/profile.png' width={25} height={25} alt="profile" className="rounded-full w-full h-full"/>
        </div>
      </div>
    </nav>
  );
}
