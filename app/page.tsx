import Product from "@/modules/product/Product";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Product />
    </Suspense>
  );
}
