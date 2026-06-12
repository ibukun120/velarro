import { memo } from 'react';
import AllPrivacyPolicy from '@/components/Sections/privacy-policy/AllPrivacyPolicy';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-primary-50" style={{ fontFamily: "var(--font-family-base)" }}>
      <AllPrivacyPolicy/>
    </div>
  );
};

export default memo(PrivacyPolicy);