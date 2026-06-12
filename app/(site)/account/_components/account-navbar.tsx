import Link from "next/link";

export default function AccountNavbar() {
  return (
    <Link href='/' className="bg-[#333333] text-[#C59949] border-b border-[#C59949] w-full h-20 flex-col flex items-center justify-center ">
      <span className="text-md md:text-xl lg:text-2xl">Velarro Cigar</span>
      <span className="text-sm">EST.2002</span>
    </Link>
  )
}
