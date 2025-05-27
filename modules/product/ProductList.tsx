/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/store/data";
import { Product } from "@/types/product";
import { Check, ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function ProductList() {
  const [sortBy, setSortBy] = useState<string>("newest");
  const searchParams = useSearchParams();

  // Get filter parameters from URL
  const getFilteredProducts = (): Product[] => {
    let filteredProducts = [...products];

    // Filter by categories
    const selectedCategories = searchParams.get("categories");
    if (selectedCategories) {
      const categoryIds = selectedCategories.split(",");
      filteredProducts = filteredProducts.filter((product) =>
        categoryIds.includes(product.category_id)
      );
    }

    // Filter by brands
    const selectedBrands = searchParams.get("brands");
    if (selectedBrands) {
      const brandIds = selectedBrands.split(",");
      filteredProducts = filteredProducts.filter((product) =>
        brandIds.includes(product.brand_id)
      );
    }

    // Filter by origins
    const selectedOrigins = searchParams.get("origins");
    if (selectedOrigins) {
      const originIds = selectedOrigins.split(",");
      filteredProducts = filteredProducts.filter((product) =>
        originIds.includes(product.origin_id)
      );
    }

    // Filter by manufacturing years
    const selectedYears = searchParams.get("years");
    if (selectedYears) {
      const years = selectedYears.split(",");
      filteredProducts = filteredProducts.filter((product) =>
        years.includes(product.manufacturingYear.toString())
      );
    }

    // Filter by price range
    const selectedPriceRange = searchParams.get("priceRange");
    if (selectedPriceRange) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.price;
        switch (selectedPriceRange) {
          case "under-100k":
            return price < 100000;
          case "100k-300k":
            return price >= 100000 && price <= 300000;
          case "300k-500k":
            return price >= 300000 && price <= 500000;
          case "over-500k":
            return price > 500000;
          default:
            return true;
        }
      });
    }

    return filteredProducts;
  };

  // Get sorted products based on current sort option
  const getSortedProducts = (filteredProducts: Product[]): Product[] => {
    const sortedProducts = [...filteredProducts];

    switch (sortBy) {
      case "newest":
        return sortedProducts.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      case "oldest":
        return sortedProducts.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      case "price-low":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "price-high":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      case "relevant":
        return sortedProducts; // Default order for relevant
      case "bestseller":
        return sortedProducts.sort((a, b) => b.price - a.price); // Sort by price as proxy for bestseller
      case "featured":
        return sortedProducts.filter((product) => product.isOnSale);
      default:
        return sortedProducts;
    }
  };

  // Format price to Vietnamese currency format
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ";
  };

  // Memoize filtered and sorted products for performance
  const displayProducts = useMemo(() => {
    const filteredProducts = getFilteredProducts();
    return getSortedProducts(filteredProducts);
  }, [searchParams, sortBy]);

  const filterButtons = [
    { id: "relevant", label: "Liên quan" },
    { id: "bestseller", label: "Bán chạy" },
    { id: "newest", label: "Mới nhất" },
    { id: "featured", label: "Nổi bật" },
  ];

  return (
    <div className="space-y-6">
      {/* Sort Section */}
      <div className="flex flex-col gap-4 pb-2">
        <div className="text-[#1C252E] font-semibold text-lg lg:text-xl">
          Danh sách sản phẩm ({displayProducts.length} sản phẩm)
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#1C252E] text-sm font-medium lg:hidden">
            Sắp xếp theo
          </span>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6 flex-wrap">
            <span className="hidden lg:block text-[#1C252E] text-base font-medium">
              Sắp xếp theo
            </span>
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {filterButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => setSortBy(button.id)}
                  className={`relative overflow-hidden px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg border bg-white font-bold text-xs lg:text-sm transition-colors min-h-[36px] lg:min-h-[40px] ${
                    sortBy === button.id
                      ? "border-[#0373F3] text-[#0373F3]"
                      : "border-transparent text-[#1C252E]"
                  }`}
                >
                  {button.label}
                  {sortBy === button.id && (
                    <div
                      className="absolute top-0 right-0 size-5 lg:size-6 bg-[#0373F3] flex items-center justify-center"
                      style={{
                        clipPath:
                          "polygon(100% 0%, 100% 100%, 100% 100%, 0% 0%)",
                      }}
                    >
                      <Check className="size-2.5 lg:size-3 text-white absolute top-0.5 right-[1px]" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Price Sort Dropdown */}
            <button
              onClick={() =>
                setSortBy(sortBy === "price-low" ? "price-high" : "price-low")
              }
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-[#1C252E] font-bold text-xs lg:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap self-start lg:self-auto"
            >
              <span>
                {sortBy === "price-high"
                  ? "Giá: Cao → Thấp"
                  : "Giá: Thấp → Cao"}
              </span>
              <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {displayProducts.length > 0 ? (
          displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.title}
              price={formatPrice(product.price)}
              oldPrice={
                product.isOnSale
                  ? formatPrice(product.originalPrice)
                  : undefined
              }
              discount={
                product.isOnSale ? `-${product.discountPercentage}` : undefined
              }
              showDealTag={product.isOnSale}
              showBuyButton={true}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-base lg:text-lg">
              Không tìm thấy sản phẩm nào phù hợp với bộ lọc của bạn.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
