import React from "react";
import ProductInfoSection from "./ProductInfoSection";
// import FeaturedNav from "@/components/ui/Navbar/FeaturedNav";
import ProductDetailsTable from "./ProductDeatilTable";
import RelatedProducts from "./RelatedProducts";
import Container from "@/components/Layouts/Container";

interface OverAllPageDetailsProps {
  productId?: string;
}

const OverAllPageDetails = ({ productId }: OverAllPageDetailsProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <FeaturedNav /> */}

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Container>
          <ProductInfoSection productId={productId} />
          <ProductDetailsTable productId={productId} />
          <RelatedProducts />
          
        </Container>
      </main>
    </div>
  );
};

export default OverAllPageDetails;