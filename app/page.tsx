import CategoriesSlider from "./components/sections/categories-slider";
import FeaturedCollection from "./components/sections/featured-collection";
import HeroSlider from "./components/sections/hero-slider";
import LifestyleBanner from "./components/sections/lifestyle-banner";
import ProductSlider from "./components/sections/product-slider";
import ReviewsSlider from "./components/sections/reviews-slider";
import SiteFooter from "./components/sections/site-footer";
import TrustSignals from "./components/sections/trust-signals";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <main className="bg-white text-shl-dark">
        <CategoriesSlider />
        <FeaturedCollection />
        <ProductSlider />
        <LifestyleBanner />
        <ReviewsSlider />
        <TrustSignals />
      </main>
      <SiteFooter />
    </>
  );
}
