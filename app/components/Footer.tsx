import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-center pb-5 pt-10 gap-5">
        {/* <div className="inline-block">
          <div className="flex flex-col md:flex-row md:flex items-center md:gap-20 gap-2 py-2 text-lg bg-yellow-200">
            <Link href={""}>About Velarro</Link>
            <Link href={""}>heritage & craftmanship</Link>
            <Link href={""}>press</Link>
            <Link href={""}>payment & delivery</Link>
            <Link href={""}>contact</Link>
            <Link href={""}>customer service</Link>
            <Link href={""}>faqs</Link>
          </div>
          <div className="md:h-0.5 w-1 rounded-full bg-orange-500 md:w-full"></div>
          <div className="flex flex-col md:flex-row md:flex items-center md:gap-15 gap-2 justify-center py-2 text-lg bg-red-200">
            <Link href={""}>shop</Link>
            <Link href={""}>store locator</Link>
            <Link href={""}>track order</Link>
            <Link href={""}>cigar knowledge</Link>
            <Link href={""}>cigar glossary</Link>
            <Link href={""}>news & events</Link>
            <Link href={""}>retailer portal</Link>
          </div>
        </div> */}
        <div className="w-full flex lg:flex lg:flex-col text-lg">
          <div className="left w-1/2 lg:w-full lg:border-b border-r lg:border-r-0 flex flex-col lg:flex-row justify-center text-center lg:gap-20">
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">About Velarro</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">heritage & craftmanship</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">press</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">payment & delivery</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">contact</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">customer service</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">faqs</Link>
          </div>
          <div className="right w-1/2 lg:w-full lg:border-t border-l lg:border-l-0 flex flex-col lg:flex-row justify-center text-center lg:gap-15">
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">shop</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">store locator</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">track order</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">cigar knowledge</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">cigar glossary</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">news & events</Link>
            <Link href={""} className="hover:text-[#C59949] ease-linear duration-200 transition">retailer portal</Link>
          </div>
        </div>
        {/* social */}
        <div className="flex items-center gap-5 text-[#C59949]">
          <div>
            <Facebook />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Youtube />
          </div>
        </div>
        {/* black */}
        <div className="w-full py-5  bg-black text-neutral-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-xl">surgeon general warning</h1>
          <h3>
            cigar smoking can cause cancer of the mouth and throat. even if you
            do not inable
          </h3>
        </div>
        {/* bottom */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl px-10 text-center">&copy;2025VELARRO USA ONLINE, INC - ALL RIGHT RESERVED</h1>
          <div className="flex flex-col md:flex md:flex-row items-center md:gap-5 gap-2 w-fit justify-center text-sm pt-5">
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200">terms & conditions</Link>
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200">privacy policy</Link>
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200">privacy settings</Link>
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200">accessibility</Link>
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200">cookie policy</Link>
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200 hidden md:block">news & events</Link>
            <Link href={""} className="hover:text-[#C59949] transition ease-linear duration-200">about oettinger velarro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
