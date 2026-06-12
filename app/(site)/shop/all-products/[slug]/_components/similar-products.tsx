
import Image from "next/image";
import { Product } from "@/types/product";
import { ShoppingBasket } from "lucide-react";

type Props = {
    products: Product[];
};

export default function SimilarProducts({ products }: Props) {
    if (!products?.length) return null;

    return (
        <section className="mt-16 bg-[#F7F7F7] py-6 px-4">
            {/* Title */}
            <h2 className="text-sm md:text-3xl lg:text-4xl text-center tracking-widest uppercase text-[#333333] mb-5">
                Similar Products
            </h2>

            {/* Slider */}
            <div
                className="
          flex gap-8
          overflow-x-auto
          pb-3
          snap-x snap-mandatory
          scrollbar-thin scrollbar-thumb-black/30
        "
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="
              snap-start
              flex
              items-center
              gap-2
              min-w-[250px]
              bg-white
              p-4
        
            "
                    >
                        {/* Image */}
                        <div className="relative w-[100px] h-[100px] shrink-0">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col">
                            <p className="text-[14px] tracking-widest uppercase text-[#333333]">
                                {product.brand}
                            </p>

                            <h3 className="text-md font-medium uppercase leading-snug max-w-40">
                                {product.title}
                            </h3>

                            <div className="mt-3 text-[#333333]">
                                <p className="text-sm">
                                    {product.boxLabel ?? "Pack of 10"}
                                </p>

                                <p className="text-md font-medium">
                                    ₹720
                                </p>
                            </div>
                        </div>

                        {/* Add button */}
                        <button
                            className="
                ml-auto
                flex items-center gap-1
                bg-[#C59949]
                text-[#333333]
                rounded-sm
                uppercase tracking-widest
                px-3 py-2
                hover:opacity-90
                transition
              "
                        >
                            <ShoppingBasket />
                            <span className="text-md">ADD</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}



// import Image from "next/image";
// import { Product } from "@/types/product";

// type Props = {
//   products: Product[];
// };

// export default function SimilarProducts({ products }: Props) {
//   if (!products?.length) return null;

//   return (
//     <section className="mt-16 bg-[#F7F7F7] py-8 px-4">
//       {/* Title */}
//       <h2 className="text-sm md:text-3xl lg:text-4xl text-center tracking-widest uppercase text-[#333333] mb-6">
//         Similar Products
//       </h2>

//       {/* Slider */}
//       <div
//         className="
//           flex gap-6
//           overflow-x-auto
//           pb-4
//           snap-x snap-mandatory
//           scrollbar-thin scrollbar-thumb-black/30
//         "
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="
//               snap-start
//               min-w-[260px]
//               bg-white
//               p-4
//               flex flex-col
//               justify-between
//             "
//           >
//             {/* Top content */}
//             <div className="flex gap-4 ">
//               {/* Image */}
//               <div className="relative w-[120px] h-[120px] shrink-0">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               {/* Text */}
//               <div className="flex flex-col">
//                 <p className="text-[10px] tracking-widest uppercase text-[#333333]">
//                   {product.brand}
//                 </p>

//                 <h3 className="text-sm font-medium uppercase leading-snug">
//                   {product.title}
//                 </h3>

//                 <p className="text-xs text-[#333333] mt-1">
//                   {product.boxLabel ?? "Box of 25"}
//                 </p>

//                 <p className="text-sm font-medium mt-2">
//                   $720
//                 </p>
//               </div>
//             </div>

//             {/* Add button (BOTTOM, FULL WIDTH) */}
//             <button
//               className="
//                 mt-4
//                 w-full
//                 bg-[#C59949]
//                 text-neutral-1
//                 text-[10px]
//                 uppercase tracking-widest
//                 py-3
//                 hover:opacity-90
//                 transition
//               "
//             >
//               Add to cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
