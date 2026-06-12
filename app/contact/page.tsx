import { memo } from 'react';
import AllContact from '@/components/Sections/contact/AllContact';

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <AllContact/>
    </div>
  );
};

export default memo(Contact);