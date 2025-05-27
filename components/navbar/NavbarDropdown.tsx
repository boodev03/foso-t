import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import ProductCard from "../ProductCard";
import { ChevronRight } from "lucide-react";

// Combined data structure for categories and their content
const categoriesData = [
  {
    id: 1,
    label: "Bộ Lọc Dầu",
    icon: "/product/bo_loc_dau.png",
    filters: [
      { label: "Bộ lọc dầu xe máy", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu ô tô", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu xe tải", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu xe nâng", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu máy phát", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu máy nén", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu thủy lực", icon: "/product/bo_loc_dau.png" },
      { label: "Bộ lọc dầu công nghiệp", icon: "/product/bo_loc_dau.png" },
    ],
    products: [
      {
        image: "/product/bo_loc_dau.png",
        name: "Lọc dầu động cơ xe máy Honda",
        price: "299,000 đ",
        oldPrice: "350,000 đ",
        discount: "-15%",
      },
      {
        image: "/product/bo_loc_dau.png",
        name: "Lọc dầu động cơ ô tô Toyota",
        price: "450,000 đ",
        oldPrice: "500,000 đ",
        discount: "-10%",
      },
      {
        image: "/product/bo_loc_dau.png",
        name: "Lọc dầu thủy lực máy xúc",
        price: "850,000 đ",
        oldPrice: "1,000,000 đ",
        discount: "-15%",
      },
      {
        image: "/product/bo_loc_dau.png",
        name: "Lọc dầu máy phát điện",
        price: "650,000 đ",
        oldPrice: "750,000 đ",
        discount: "-13%",
      },
      {
        image: "/product/bo_loc_dau.png",
        name: "Lọc dầu máy nén khí",
        price: "550,000 đ",
        oldPrice: "650,000 đ",
        discount: "-15%",
      },
    ],
  },
  {
    id: 2,
    label: "Bộ Lọc Không Khí",
    icon: "/product/bo_loc_khong_khi.png",
    filters: [
      { label: "Bộ lọc gió xe máy", icon: "/product/bo_loc_khong_khi.png" },
      { label: "Bộ lọc gió ô tô", icon: "/product/bo_loc_khong_khi.png" },
      { label: "Bộ lọc gió xe tải", icon: "/product/bo_loc_khong_khi.png" },
      { label: "Bộ lọc gió xe nâng", icon: "/product/bo_loc_khong_khi.png" },
      { label: "Bộ lọc gió máy phát", icon: "/product/bo_loc_khong_khi.png" },
      { label: "Bộ lọc gió máy nén", icon: "/product/bo_loc_khong_khi.png" },
      { label: "Bộ lọc gió thủy lực", icon: "/product/bo_loc_khong_khi.png" },
      {
        label: "Bộ lọc gió công nghiệp",
        icon: "/product/bo_loc_khong_khi.png",
      },
    ],
    products: [
      {
        image: "/product/bo_loc_khong_khi.png",
        name: "Lọc gió động cơ xe máy Honda",
        price: "199,000 đ",
        oldPrice: "250,000 đ",
        discount: "-20%",
      },
      {
        image: "/product/bo_loc_khong_khi.png",
        name: "Lọc gió động cơ ô tô Toyota",
        price: "350,000 đ",
        oldPrice: "400,000 đ",
        discount: "-12%",
      },
      {
        image: "/product/bo_loc_khong_khi.png",
        name: "Lọc gió thủy lực máy xúc",
        price: "750,000 đ",
        oldPrice: "900,000 đ",
        discount: "-17%",
      },
      {
        image: "/product/bo_loc_khong_khi.png",
        name: "Lọc gió máy phát điện",
        price: "550,000 đ",
        oldPrice: "650,000 đ",
        discount: "-15%",
      },
      {
        image: "/product/bo_loc_khong_khi.png",
        name: "Lọc gió máy nén khí",
        price: "450,000 đ",
        oldPrice: "550,000 đ",
        discount: "-18%",
      },
    ],
  },
  // Add similar structures for other categories...
];

export default function NavbarDropdown() {
  const [activeCategory, setActiveCategory] = useState(categoriesData[0]);

  return (
    <Card className="w-full py-0 bg-white border border-gray-300 z-50 rounded-lg">
      <CardContent className="p-0">
        <div className="flex w-full min-h-[400px]">
          {/* Sidebar */}
          <div className="w-1/5 bg-[#F5F7FA] border-r border-gray-300 flex flex-col gap-1">
            {categoriesData.map((cat) => {
              const isActive = cat.id === activeCategory.id;
              return (
                <div
                  key={cat.id}
                  className={`
                    flex items-center gap-2 px-3 py-4 rounded cursor-pointer relative
                    ${
                      isActive
                        ? "bg-white font-semibold text-blue-600"
                        : "hover:bg-gray-100 text-gray-700"
                    }
                  `}
                  style={{
                    borderLeft: isActive
                      ? "4px solid #2563eb"
                      : "4px solid transparent",
                    background: isActive ? "#fff" : undefined,
                  }}
                  onMouseEnter={() => setActiveCategory(cat)}
                >
                  <Image
                    src={cat.icon}
                    alt={cat.label}
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="text-sm">{cat.label}</span>
                  <ChevronRight className="size-4 ml-auto" />
                </div>
              );
            })}
          </div>
          {/* Main Content */}
          <div className="flex-1 flex flex-col px-6 py-4">
            {/* Top filter grid */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {activeCategory.filters.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Best Sellers Section */}
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-gray-900 text-base">
                Sản Phẩm Bán Chạy
              </span>
              <Button
                variant="link"
                className="text-blue-600 text-sm font-medium px-0"
              >
                Xem tất cả
              </Button>
            </div>
            {/* Product Cards */}
            <div className="grid grid-cols-5 gap-4">
              {activeCategory.products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
