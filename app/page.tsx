import Product from "@/modules/Product";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Product />;
    </Suspense>
  );
}
