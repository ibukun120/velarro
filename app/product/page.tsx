
// import CollectionSection from '@/components/Sections/product/CollectionSection';
// import { memo } from 'react';
// import HeroCarousel from '../components/HeroCarousel';
// import ProductHomePage from '@/components/Sections/product/ProductHomePage';

// const Product = () => {
  

//   return (
//     <div>
//      <ProductHomePage/>
//        <CollectionSection/>
//     </div>
   
   
//   );
// };

// export default memo(Product);

import CollectionSection from '@/components/Sections/product/CollectionSection';
import ProductHomePage from '@/components/Sections/product/ProductHomePage';
import { memo } from 'react';

const Product = () => {
  

  return (
    <div>
      <ProductHomePage/>
    <CollectionSection/>
    </div>
  );
};

export default memo(Product);