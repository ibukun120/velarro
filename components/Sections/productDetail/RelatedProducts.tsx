// "use client";

// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     title: "Platinum Celebration",
//     specs: "⌀ 52 RG   7.5 in   100–120min",
//     intensity: 4,
//     notes: "Vanilla, brioche, roasted coffee, cream, honey",
//     tag: "Top Gift",
//     image: "ProductDetails/product-1.png",
//   },
//   {
//     id: 2,
//     title: "Platinum Celebration",
//     specs: "⌀ 52 RG   7.5 in   100–120min",
//     intensity: 4,
//     notes: "Vanilla, brioche, roasted coffee, cream, honey",
//     tag: "",
//     image: "ProductDetails/product-1.png",
//   },
//   {
//     id: 3,
//     title: "Platinum Celebration",
//     specs: "⌀ 52 RG   7.5 in   100–120min",
//     intensity: 4,
//     notes: "Vanilla, brioche, roasted coffee, cream, honey",
//     tag: "Bestseller",
//     image: "ProductDetails/product-1.png",
//   },
// ];
// const tagStyles: Record<string, string> = {
//   "Top Gift": "bg-info-900",
//   Bestseller: "bg-warning-600",
// };
// export default function RelatedProducts() {
//   return (
//     <div className="bg-primary-50      ">
//       {/* CENTER CONTAINER */}
//       <div className="   py-2 flex gap-2 flex-col ">
//         {/* Title */}
//         <p className="text-primary-600 text-sm tracking-wide font-medium">
//           YOU MAY ALSO ENJOY
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="border border-neutral-6 bg-neutral-1 p-3 rounded-sm"
//             >
//               {/* Image */}
//               <div className="relative w-full h-65 rounded-lg overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={`Image of ${item.title}`}
//                   fill
//                   className="object-cover rounded-sm"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />

//                 {/* Badge */}
//                 {item.tag && (
//                   <span
//                     className={`absolute top-0 left-0 text-neutral-1 text-[12px] px-4 py-[2px] rounded ${
//                       tagStyles[item.tag] || "bg-primary-700"
//                     }`}
//                   >
//                     {item.tag}
//                   </span>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="mt-3 flex flex-col gap-2">
//                 {/* Title */}
//                 <p className="text-sm font-semibold text-neutral-13 pt-2">
//                   {item.title}
//                 </p>

//                 {/* Specs */}
//                 <p className="text-sm font-medium text-secondary-400">
//                   {item.specs}
//                 </p>

//                 {/* Intensity */}
//                 <div className="flex items-center gap-2">
//                   <p className="text-[12px] text-secondary-400">INTENSITY</p>

//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <span
//                         key={i}
//                         className={`w-[10px] h-[10px] rounded-full ${
//                           i < item.intensity
//                             ? "bg-primary-600"
//                             : "border border-neutral-6"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Notes */}
//                 <p className="text-[10px] text-secondary-400 italic">
//                   {item.notes}
//                 </p>

//                 {/* Bottom */}
//                 <div className="flex justify-between items-center border-t border-neutral-6 pt-2">
//                   <p className="text-[11px] text-neutral-13 uppercase">
//                     GRAN CHURCHILL
//                   </p>

//                   <button className="text-[10px] border border-neutral-6 px-2 py-[2px] text-neutral-13 rounded-sm">
//                     EXPLORE
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import ProductCard from "@/components/ui/Cards/ProductCard";


const products = [
  {
    id: 1,
    title: "Platinum Celebration",
    size: "52 RG",
    length: "7.5 in",
    burnTime: "100–120min",
    intensity: 4,
    flavors: "Vanilla, brioche, roasted coffee, cream, honey",
    badge: "Top Gift",
    image: "/ProductDetails/img1.png",
    brand: "GRAN CHURCHILL",
  },
  {
    id: 2,
    title: "Platinum Celebration",
    size: "52 RG",
    length: "7.5 in",
    burnTime: "100–120min",
    intensity: 4,
    flavors: "Vanilla, brioche, roasted coffee, cream, honey",
    badge: "",
    image: "/ProductDetails/img2.png",
    brand: "GRAN CHURCHILL",
  },
  {
    id: 3,
    title: "Platinum Celebration",
    size: "52 RG",
    length: "7.5 in",
    burnTime: "100–120min",
    intensity: 4,
    flavors: "Vanilla, brioche, roasted coffee, cream, honey",
    badge: "Bestseller",
    image: "/ProductDetails/img3.png",
    brand: "GRAN CHURCHILL",
  },
];

export default function RelatedProducts() {
  return (
    <div className="bg-primary-50 py-4">
      <div className="flex flex-col gap-4">

        {/* Title */}
        <p className="text-primary-600 text-sm tracking-wide font-medium">
          YOU MAY ALSO ENJOY
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              badge={item.badge}
              title={item.title}
              size={item.size}
              length={item.length}
              burnTime={item.burnTime}
              intensity={item.intensity}
              flavors={item.flavors}
              brand={item.brand}
              onExplore={() => console.log("Explore", item.id)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}