import React from "react";

const SmallNav = () => {
  return (
    <div className="text-sm font-medium bg-primary-50 mt-12 md:mt-20 h-8 flex items-center px-4 lg:px-12">
      <div className="flex items-center gap-2 text-left">
        <p className="text-secondary-200">Home</p>
        <span className="text-secondary-200">&gt; Discover</span>
        <p className="text-primary-500">&gt; Pairing Guide</p>
      </div>
    </div>
  );
};

export default SmallNav;