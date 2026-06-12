import { memo } from 'react';
interface prop {
    title : string 
}

const ProductPricingSection = ({
    title
}: prop) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default memo(ProductPricingSection);