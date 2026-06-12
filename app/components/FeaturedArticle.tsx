import { FeatureData } from "@/lib/feature.data";
import { ClockFading, Ruler } from "lucide-react";
import Image from "next/image";

function FeaturedArticle() {
  
  return (
    <div className="h-full py-5">
      {/* 3 button */}
      <div className="flex items-center justify-center gap-5 px-2">
        <button className="px-5 py-2 bg-zinc-800 text-neutral-1 rounded-full uppercase text-sm md:text-base">
          new
        </button>
        <button className="px-5 py-2 bg-zinc-100 rounded-full uppercase text-sm md:text-base">
          top rated
        </button>
        <button className="px-5 py-2 bg-zinc-100 rounded-full uppercase text-sm md:text-base">
          best sellers
        </button>
      </div>
      {/* article */}
      <div className="p-5">
        <div className=" h-full w-full flex flex-nowrap gap-5 shrink-0 overflow-x-auto no-scrollbar">
          {FeatureData.map((item, key) => {
            return (
              <div
                key={key}
                className="h-full md:w-[25vw] w-full shrink-0 cursor-pointer"
              >
                <div className="h-[45vh] relative">
                  {/* image */}
                  <Image
                    alt=""
                    src={"/pic1.avif"}
                    fill
                    className="object-cover object-center hover:scale-[1.1] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center pt-2">
                  <h1>{item.brand}</h1>
                  <h2 className="text-xl">{item.name}</h2>
                  <div className="flex items-center justify-center">
                    <h5>{item.ringGauge}</h5>
                    <h5>|</h5>
                    <div className="flex items-center gap-2">
                      <h5>{item.diameter}</h5>
                      <div className="flex items-center gap-1">
                        <Ruler height={15} width={15} />
                        <h5>{item.lengthInch}</h5>
                      </div>
                    </div>
                    <h5>|</h5>
                    <div className="flex items-center gap-2">
                      <h5>{item.lengthMm}</h5>
                      <div className="flex items-center gap-1">
                        <ClockFading height={15} width={15} />
                        <h5>{item.smokingTime}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-[#C59949] px-5 py-2 w-full mt-1 rounded-md text-xl text-neutral-1 hover:bg-black text-center">
                  Buy now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticle;
