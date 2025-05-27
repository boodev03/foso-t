"use client";
import {
  ChevronDown,
  HandCoins,
  Menu,
  RotateCcw,
  Timer,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SelectLanguage from "../SelectLanguage";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const navItems = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/blog", label: "Bài viết" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Liên hệ" },
];

const features = [
  {
    icon: <Timer className="size-5 text-blue-500" />,
    label: "Hỗ trợ 24/7",
  },
  {
    icon: <HandCoins className="size-5 text-blue-500" />,
    label: "Miễn phí vận chuyển",
  },
  {
    icon: <Truck className="size-5 text-blue-500" />,
    label: "Giao hàng nhanh 2h",
  },
  {
    icon: <RotateCcw className="size-5 text-blue-500" />,
    label: "30 ngày đổi trả",
  },
];

// Combined data structure for categories
const categoriesData = [
  {
    id: 1,
    label: "Bộ Lọc Dầu",
    icon: "/product/bo_loc_dau.png",
  },
  {
    id: 2,
    label: "Bộ Lọc Không Khí",
    icon: "/product/bo_loc_khong_khi.png",
  },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-md transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="px-6 py-4 border-b border-gray-200">
          <SheetTitle className="text-lg font-semibold text-gray-900">
            Menu
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Language Selector */}
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Ngôn ngữ
            </h3>
            <SelectLanguage showIcon={true} />
          </div>

          {/* Category Menu */}
          <div className="px-6 py-4 border-b border-gray-100">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full bg-[#0155C6] rounded-lg px-4 py-3 flex items-center justify-between text-white font-medium text-sm transition-colors"
            >
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                <span>Danh mục sản phẩm</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isCategoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Category Dropdown Content */}
            {isCategoryOpen && (
              <div className="mt-3 bg-gray-50 rounded-lg p-2">
                <div className="space-y-1">
                  {categoriesData.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 py-2 px-3 text-gray-700 text-sm hover:text-blue-600 hover:bg-white rounded-md transition-colors"
                    >
                      <Image
                        src={category.icon}
                        alt={category.label}
                        width={16}
                        height={16}
                        className="shrink-0"
                      />
                      <span>{category.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Điều hướng
            </h3>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 text-gray-700 font-medium text-sm hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="px-6 py-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Dịch vụ
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="text-gray-700 font-medium text-sm">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
