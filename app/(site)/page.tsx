// comments i.e {/**/} added to provide sepration in every file.

import FeaturedArticle from "../components/FeaturedArticle";
import FeaturedCollection from "../components/FeaturedCollection";
import HeroCarousel from "../components/HeroCarousel";
import PromotionalBlock from "../components/PromotionalBlock";


export default function Home() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <HeroCarousel/>
      <FeaturedCollection/>
      <FeaturedArticle/>
      <PromotionalBlock/>
    </div>
  );
}
