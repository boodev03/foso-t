import Banner from "./Banner";
import Featured from "./Featured";
import Jumpotron from "./Jumpotron";
import ProductListSection from "./ProductListSection";

export default function Product() {
  return (
    <section className="space-y-8">
      <Banner />
      <ProductListSection />
      <Featured />
      <Jumpotron />
    </section>
  );
}
