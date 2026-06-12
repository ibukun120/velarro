import Container from "@/components/Layouts/Container";
import AccessorySection from "@/components/Sections/velarro-asseories/AccessorySection";
// import CraftsmanshipSection from "@/components/Sections/velarro-asseories/CraftmanshipSection";
import HeaderNav from "@/components/Sections/velarro-asseories/HeaderNav";
// import Home from "@/components/Sections/velarro-asseories/Home";
// import Home from "../page";

// ─── Edit sections here only — no other file needs to change ─────────────────
const sections = [
  {
    tag: "For the perfect storage",
    title: "Humidors",
    desc: "It all begins with how a cigar is kept. Only a cigar that is well taken care of while stored will live up to Velarro high standard.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780055664581-humidors-(2).webp",
    imageAlt: "Open humidor filled with cigars",
  },
  {
    tag: "For the perfect cut",
    title: "Cutters",
    desc: "Cutting something as superbly crafted as one of Velarro handmade cigars correctly is essential if you wish to get the most out of it.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972663543-cutter.webp",
    imageAlt: "Cigar cutter on leather case",
  },
  {
    tag: "For the perfect toast",
    title: "Lighters",
    desc: "Lighting your cigar is the most emotive part of the cigar ritual. It follows right after you have correctly toasted your cigar.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972669282-lighters.webp",
    imageAlt: "Premium cigar lighter",
  },
  {
    tag: "For the perfect ritual",
    title: "Ashtrays",
    desc: "If you are sharing the ritual with someone else, taste journeys and topics of conversation will begin to emerge. At the centre of this experience should be a Velarro ashtray.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972674534-ashtrays.webp",
    imageAlt: "Velarro branded ashtray",
  },
  {
    tag: "For the perfect travel",
    title: "Cigar Cases",
    desc: "There will be a moment in every aficionado's life in which they wish they had their favourite cigars with them. It is Velarro's goal to fill time beautifully.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779972679338-cigar-cases.webp",
    imageAlt: "Leather cigar travel case",
  },
  {
    tag: "For the perfect puff",
    title: "Pipes and Tobacco",
    desc: "Velarro pipes, accessories and tobacco are meticulously curated for the ultimate in refined smoking enjoyment. Hand-crafted pipes and specially selected tobacco fill time beautifully.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779978629301-pipes.webp",
    imageAlt: "Handcrafted pipe and tobacco",
  },
  {
    tag: "For the perfect sip",
    title: "Other Accessories",
    desc: "Velarro cigars fill your time beautifully. They do so especially when pairing them with a fitting beverage.",
    image: "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780055669272-other-accesories.webp",
    imageAlt: "Whisky glass beside a cigar",
  },
]; // ─────────────────────────────────────────────────────────────────────────────


// datas
export default function AccessoriesPage() {
  return (
    <main>
      <HeaderNav />

      {/* Page header */}
      <div className="relative bg-[url('/images/accchome.png')] bg-cover bg-center bg-no-repeat text-neutral-1 text-center px-6 h-[70vh] md:h-screen flex justify-center items-center flex-col w-full">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Wrap your content so it sits above overlay */}
        <Container className="relative flex-col flex gap-1 z-10 pb-24 md:pb-40">
          {/* Velarro Cigars */}
          <div className="flex flex-col items-center pb-24">
            <p className="text-neutral-1 border-b-2 border-neutral-6 text-lg md:text-[32px] font-light">
              Velarro Cigars
            </p>
          </div>
      <div>
          <h1 className="text-[50px] md:text-[72px] font-normal tracking-[4px]">
            Accessories
          </h1>

          <p className="h-[2px] bg-primary-600 w-full md:w-2/3 mx-auto mb-4"></p>

          <p className="text-secondary-50 text-xl mx-auto md:text-xl text-center">
            Discover our complete collection of meticulously crafted
            accessories, designed
            <br className="hidden md:block" />
            {" "}to elevate every moment of the cigar ritual.
          </p>
          </div>
        </Container>
      </div>

      {/* Sections — layout and theme handled automatically by index */}
      {sections.map((section, index) => (
        <AccessorySection
          key={section.title}
          section={section}
          index={index}
        />
      ))}

      <div className="bg-secondary-300 py-12 md:py-18 flex justify-center items-center flex-col">
        <Container>
          <p className="text-center max-w-[943px] text-[32px] px-6 text-neutral-1 mt-6 border-t-[2px] border-t-primary-500 mx-auto py-8">
            Explore the complete range of premium accessories crafted for the
            discerning aficionado.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-primary-600 mx-auto text-neutral-1 px-6 py-2 rounded-lg cursor-pointer hover:bg-primary-500 transition duration-500">
              View Full Collection
            </button>
          </div>
        </Container>
      </div>
    </main>
  );
}
