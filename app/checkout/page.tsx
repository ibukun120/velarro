import PaymentSection from '@/components/Sections/checkout/PaymentSection';
import ReviewSection from '@/components/Sections/checkout/ReviewSection';
import ShippingSection from '@/components/Sections/checkout/ShippingSection';
import { memo } from 'react';

const Page = () => {
  
    return (
        <div>
            <PaymentSection />
            <ShippingSection />
            <ReviewSection />
        </div>
    );
};

export default memo(Page);