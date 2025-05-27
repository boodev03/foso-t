"use client";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { ClockIcon } from "../icons/ClockIcon";
import { HandMoneyIcon } from "../icons/HandMoneyIcon";
import { SubtractIcon } from "../icons/SubtractIcon";
import { TruckIcon } from "../icons/TruckIcon";
import NavbarDropdown from "./NavbarDropdown";

const navItems = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/blog", label: "Bài viết" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Liên hệ" },
];

const features = [
  {
    icon: <ClockIcon />,
    label: "Hỗ trợ 24/7",
  },
  {
    icon: <HandMoneyIcon />,
    label: "Miễn phí vận chuyển",
  },
  {
    icon: <TruckIcon />,
    label: "Giao hàng nhanh 2h",
  },
  {
    icon: <SubtractIcon />,
    label: "30 ngày đổi trả",
  },
];

export default function NavbarBottom() {
  return (
    <div className="container mx-auto py-2 sm:py-4 px-4 relative">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
        {/* Category menu - Desktop only */}
        <div className="group w-full lg:w-auto hidden lg:block">
          <div className="bg-[#0155C6] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 cursor-pointer">
            <Menu className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" />
            <span className="text-white font-medium text-xs sm:text-sm tracking-wide">
              Danh mục sản phẩm
            </span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-auto lg:ml-0" />
          </div>

          {/* Dropdown menu */}
          <div className="absolute top-full z-[9999999999] left-0 w-full transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <NavbarDropdown />
          </div>
        </div>

        {/* Navigation and Features - Desktop only */}
        <div className="hidden lg:flex flex-col lg:flex-row justify-between items-start lg:items-center flex-1 lg:ml-6 w-full lg:w-auto gap-4 lg:gap-0">
          {/* Navigation links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5 w-full lg:w-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-900 font-medium text-xs sm:text-sm hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 sm:flex items-center gap-3 sm:gap-4 lg:gap-5 w-full lg:w-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1 sm:gap-2">
                <p className="shrink-0">{feature.icon}</p>
                <span className="text-gray-700 font-semibold text-xs sm:text-sm">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
