import { categories, circleItems } from "@/lib/shop.data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  closeDropdown: () => void;
};

export default function ShopDropDown({ closeDropdown }: Props) {
  return (

    <div className="
      fixed md:relative
      top-[150px] md:top-auto
      left-0
      w-screen
      h-[calc(100vh-64px)]
      md:h-auto
      bg-white
      overflow-y-auto
      pb-6
      md:px-10 lg:px-[150px]
      z-50
     ">

      {/* TOP – CIRCULAR ITEMS */}
      <div className="
          flex md:flex
          lg:grid lg:grid-cols-9
          gap-6
          overflow-x-auto
          pt-6
          mb-5
          pb-6
          scrollbar-hide
        ">


        {circleItems.map((item) => (
          <div key={item.title} className="flex flex-col items-center min-w-[90px]">
            <div className="relative w-20 h-20 rounded-full border-2 border-[#C59949] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="80px" />
            </div>
            <p className="mt-2 text-md md:text-xl text-center text-neutral-700 leading-snug">{item.title}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM – CATEGORIES */}
      <div className="px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-12">
        {categories.map((cat) => {
          const isShowAll = cat.title === "Show All";

          return (
            <Link
              href={cat.href}
              key={cat.title}
              onClick={() => closeDropdown()}
              className="relative h-[120px] md:w-[250px] lg:w-[180px] rounded-md overflow-hidden cursor-pointer"
            >
              {isShowAll || !cat.image ? (
                <div className="absolute inset-0 bg-linear-to-r from-black/70 to-[#C59949]" />
              ) : (
                <>
                  <Image src={cat.image} alt={cat.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                </>
              )}
              <span className="absolute bottom-3 left-3 z-10 text-neutral-1 font-medium text-sm">{cat.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}