import OverAllPageDetails from '@/components/Sections/productDetail/OverAllPageDetails';
// import ProductInfoSection from '@/components/Sections/productDetail/ProductInfoSection';
import { memo } from 'react';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  
  return (
    <div>
      {/* <ProductInfoSection/> */}
      <OverAllPageDetails productId={slug}/>
    </div>
  );
};

export default memo(Page);