import HomeBannerFour from "@/components/page/HomeBannerFour";
import HomeBannerOne from "@/components/page/HomeBannerOne";
import HomeBannerThree from "@/components/page/HomeBannerThree";
import HomeBannerTwo from "@/components/page/HomeBannerTwo";
import ProductList from "@/components/ui/ProductList";

export default function Home() {
  return (
    <main>
      <HomeBannerOne />
      <ProductList />
      <HomeBannerTwo />
      <HomeBannerThree />
      <HomeBannerFour />
    </main>
  );
}
