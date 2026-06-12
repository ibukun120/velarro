import Link from "next/link";

interface NavbarMiddleProps {
  isOpen: boolean;
}

export default function NavbarMiddle({ isOpen }: NavbarMiddleProps) {
  return (
    <Link href="/" className="flex flex-col text-center">
      <h1 className="text-4xl uppercase w-fit text-[#C59949]">Velarro</h1>
      <h5 className={`uppercase leading-none ${isOpen ? "text-black" : "text-[#C59949]"}`}>Cigars</h5>
    </Link>
  );
}
