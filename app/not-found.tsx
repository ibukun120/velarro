// // app/not-found.tsx — Velarro 404 Page (Next.js App Router)
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import ErrorContent from "@/components/ErrorContent";
// // import Navbar from "./test/component/Nav";
// // import Footer from "./test/component/Footer";
// import Image from "next/image";
// import ErrorContent from "../components/Sections/homepage/Error";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col bg-primary-50 mt-10">
//       {/* <Navbar /> */}

//       {/* Main content */}
//       <main className="flex-1 flex items-start justify-center px-10 py-20 md:px-20">
//         <div className="w-full max-w-6xl bg-white border border-neutral-6 rounded-xl flex flex-col md:flex-row items-center justify-center gap-0 overflow-hidden py-14 px-0">
//           {/* Decorative background image */}
//           <div className="hidden md:flex flex-1 items-center justify-center p-8">
//             <Image
//               src="/Background@2x.png"
//               alt="Decorative background"
//               width={600}
//               height={400}
//               className="w-full max-w-[600px] rounded-xl object-cover"
//             />
//           </div>

//           {/* Error panel */}
//           <ErrorContent />
//         </div>
//       </main>

//       {/* <Footer /> */}
//     </div>
//   );
// }

"use client";

import OopsPage from "@/components/Sections/new/Oops";

export default function NotFoundPage() {
  return (
    <div>
      <OopsPage
            code="404"
            title="Page Not Found"
            description="It appears you have strayed from the path. Let's get you back on track."
            />
    </div>
  );
}
