import { notFound } from "next/navigation";
import { mockProducts } from "@/lib/products.data";
import ProductInfo from "./_components/product-info";
import ImageGallery from "./_components/image-gallery";
import ProductTabs from "./_components/product-tabs";
import EnjoymentDetails from "./_components/enjoyment-details";
import SimilarProducts from "./_components/similar-products";
// import GiftSellers from "./_components/gift-sellers";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <main className="mt-16 bg-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <ImageGallery
          images={product.images ?? [product.image]}
          alt={product.title}
        />

        {/* RIGHT — product info */}
        <ProductInfo product={product} />
      </div>

      <ProductTabs
        tabs={product.tabs ?? []}
        product={product}
      />

      {product.id === 2 && (
        <EnjoymentDetails
          intro="The robusto offers aficionados a compact cigar with a smooth enjoyment with a dynamic taste profile from start to finish. Previewing the cigar with a perfumy pre-smell and a pre-taste of walnut, the well-aged tobaccos create an elegant complexity throughout. The draw is consistently easy, and the considerable smoke output make this a fully satisfying experience with nutty and peppery hints in the retrohale and a slightly spicy finish."
          sections={[
            {
              title: "Taste Cigar Foot",
              flavors: ["Cedar wood", "Cream", "Herbs"],
              description: "Herbal aromas complement warm notes of cedar wood and cream.",
            },
            {
              title: "Taste Cigar Body",
              flavors: ["Roasted nuts", "Citrus", "Fresh spice"],
              description: "Citrus and fresh spice dominated by savoury notes of roasted nuts.",
            },
            {
              title: "Taste Cigar Head",
              flavors: ["Fresh spice", "Walnut", "Cedar wood"],
              description: "Hints of fresh spice harmonise with flavours of walnuts and cedar wood.",
            },
          ]}
        />
      )}
      {product.similarProducts && (
        <SimilarProducts products={product.similarProducts} />
      )}

    </main>
  );
}
