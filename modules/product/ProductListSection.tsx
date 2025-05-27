import Filter from "./filter/Filter";
import ProductList from "./ProductList";

export default function ProductListSection() {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-start gap-5">
        <Filter />
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
    </section>
  );
}
