// import FeaturedNav from '@/components/ui/Navbar/FeaturedNav'

import { AboutHeroPage } from "@/components/Sections/about/AboutHeroPage";

// import Container from "@/components/Layouts/Container";
import ChooseSection from "@/components/Sections/about/ChooseSection";
import BrandStorySection from "@/components/Sections/about/BrandStorySection";
import MissionSection from "@/components/Sections/about/MissionSection";
import BrandValuesSection from "@/components/Sections/about/BrandValuesSection";

function Overallaboutpage() {
  return (
    <div className="relative">
      <AboutHeroPage />
      <BrandStorySection />

      <MissionSection />

      <ChooseSection />

      <BrandValuesSection />
    </div>
  );
}

export default Overallaboutpage;
